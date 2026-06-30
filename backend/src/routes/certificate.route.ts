import { Hono } from 'hono'
import { AttendeeLookupError, lookupAttendee } from '../services/attendee-lookup.service'
import type { AppBindings } from '../types/bindings'

export const certificateRoute = new Hono<{ Bindings: AppBindings }>()

certificateRoute.post('/certificate', async (c) => {
  let body: { email?: string; membershipNumber?: string; phone?: string }

  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'invalid_input', message: 'Invalid JSON body.' }, 400)
  }

  try {
    const attendee = await lookupAttendee(c.env, body)
    return c.json({
      attendeeName: attendee.attendeeName,
      registrationId: attendee.registrationId,
    })
  } catch (error) {
    if (error instanceof AttendeeLookupError) {
      const status = error.code === 'invalid_input' ? 400 : 404
      return c.json({ error: error.code, message: error.message }, status)
    }

    console.error('Failed to look up certificate', error)
    return c.json({ error: 'generic', message: 'Could not retrieve certificate.' }, 500)
  }
})
