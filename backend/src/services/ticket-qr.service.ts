import type { AppBindings } from '../types/bindings'
import {
  AttendeeLookupError,
  lookupAttendee,
  type AttendeeLookupInput,
} from './attendee-lookup.service'

export type TicketQrLookupInput = AttendeeLookupInput

export type TicketQrLookupResult = {
  attendeeName: string
  ticketLabel: string
  qrPayload: string
  registrationId: string
}

export type TicketQrLookupErrorCode = 'invalid_input' | 'not_found' | 'not_approved'

export class TicketQrLookupError extends Error {
  code: TicketQrLookupErrorCode

  constructor(code: TicketQrLookupErrorCode, message?: string) {
    super(message ?? code)
    this.name = 'TicketQrLookupError'
    this.code = code
  }
}

export async function lookupTicketQr(
  env: AppBindings,
  input: TicketQrLookupInput,
): Promise<TicketQrLookupResult> {
  try {
    const attendee = await lookupAttendee(env, input)
    const qrPayload = `${attendee.membershipNumber}:${attendee.email}:${env.ETC_2026_EVENT_ID}`

    return {
      attendeeName: attendee.attendeeName,
      ticketLabel: attendee.ticketLabel,
      qrPayload,
      registrationId: attendee.registrationId,
    }
  } catch (error) {
    if (error instanceof AttendeeLookupError) {
      if (error.code === 'invalid_input') {
        throw new TicketQrLookupError('invalid_input', error.message)
      }
      throw new TicketQrLookupError('not_found')
    }
    throw error
  }
}
