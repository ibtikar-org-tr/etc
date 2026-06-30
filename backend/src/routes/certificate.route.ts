import { Hono } from 'hono'
import { AttendeeLookupError, lookupAttendee } from '../services/attendee-lookup.service'
import {
  certificateNameForTemplate,
  certificatePdfFilename,
  certificateTemplateForLang,
  generateCertificatePdf,
} from '../services/certificate-pdf.service'
import type { AppBindings } from '../types/bindings'

export const certificateRoute = new Hono<{ Bindings: AppBindings }>()

certificateRoute.post('/certificate', async (c) => {
  let body: { email?: string; membershipNumber?: string; phone?: string; lang?: string }

  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'invalid_input', message: 'Invalid JSON body.' }, 400)
  }

  try {
    const attendee = await lookupAttendee(c.env, body, { requireSheetAttendance: true })
    const template = certificateTemplateForLang(body.lang)
    const attendeeName = certificateNameForTemplate(template, attendee)
    const pdfBytes = await generateCertificatePdf(c.env, template, attendeeName)
    const filename = certificatePdfFilename(attendee.registrationId, template)

    return new Response(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'private, no-store',
        'X-Attendee-Name': encodeURIComponent(attendeeName),
        'X-Attendee-Name-Ar': encodeURIComponent(attendee.attendeeNameAr),
        'X-Attendee-Name-En': encodeURIComponent(attendee.attendeeNameEn),
        'X-Registration-Id': attendee.registrationId,
        'X-Certificate-Template': template,
      },
    })
  } catch (error) {
    if (error instanceof AttendeeLookupError) {
      const status =
        error.code === 'invalid_input' ? 400 : error.code === 'not_attended' ? 403 : 404
      return c.json({ error: error.code, message: error.message }, status)
    }

    console.error('Failed to generate certificate', error)
    return c.json({ error: 'generic', message: 'Could not retrieve certificate.' }, 500)
  }
})
