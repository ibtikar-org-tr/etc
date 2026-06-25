import { Hono } from 'hono'
import { lookupTicketQr, TicketQrLookupError } from '../services/ticket-qr.service'
import type { AppBindings } from '../types/bindings'

export const ticketQrRoute = new Hono<{ Bindings: AppBindings }>()

ticketQrRoute.post('/ticket-qr', async (c) => {
  let body: { email?: string; membershipNumber?: string; phone?: string }

  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'invalid_input', message: 'Invalid JSON body.' }, 400)
  }

  try {
    const ticket = await lookupTicketQr(c.env, body)
    return c.json(ticket)
  } catch (error) {
    if (error instanceof TicketQrLookupError) {
      const status = error.code === 'invalid_input' ? 400 : error.code === 'not_approved' ? 403 : 404
      return c.json({ error: error.code, message: error.message }, status)
    }

    console.error('Failed to look up ticket QR', error)
    return c.json({ error: 'generic', message: 'Could not retrieve entrance QR code.' }, 500)
  }
})
