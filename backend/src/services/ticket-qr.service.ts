import { getEventRegistrationByEventAndMember } from '../repositories/event-registrations.repository'
import { getEventTicketById } from '../repositories/event-tickets.repository'
import {
  findGoogleFormAttendee,
  sheetAttendeeQrIdentity,
} from '../repositories/google-form-attendees.repository'
import {
  getMemberDisplayName,
  getUserByEmail,
  getUserByMembershipNumber,
  getUserByPhone,
} from '../repositories/members.repository'
import type { AppBindings } from '../types/bindings'
import { parseGoogleCredentials } from '../utils/google-sheets'

export type TicketQrLookupInput = {
  email?: string
  membershipNumber?: string
  phone?: string
}

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

type NormalizedLookup = {
  kind: 'email' | 'membership_number' | 'phone'
  value: string
}

function normalizeLookupInput(input: TicketQrLookupInput): NormalizedLookup {
  const email = input.email?.trim().toLowerCase() || undefined
  const membershipNumber = input.membershipNumber?.trim() || undefined
  const phone = input.phone?.trim() || undefined
  const provided = [email, membershipNumber, phone].filter(Boolean).length

  if (provided === 0) {
    throw new TicketQrLookupError('invalid_input', 'Email, membership number, or phone is required.')
  }

  if (provided > 1) {
    throw new TicketQrLookupError('invalid_input', 'Provide only one lookup value.')
  }

  if (email) return { kind: 'email', value: email }
  if (membershipNumber) return { kind: 'membership_number', value: membershipNumber }
  return { kind: 'phone', value: phone! }
}

function assertRegistrationEligible(
  registration: Awaited<ReturnType<typeof getEventRegistrationByEventAndMember>>,
) {
  if (!registration) {
    return false
  }

  return registration.status === 'registered' || registration.status === 'attended'
}

async function lookupVmsTicket(
  env: AppBindings,
  lookup: NormalizedLookup,
): Promise<TicketQrLookupResult | null> {
  const member =
    lookup.kind === 'email'
      ? await getUserByEmail(env.MEMBERS_DB, lookup.value)
      : lookup.kind === 'membership_number'
        ? await getUserByMembershipNumber(env.MEMBERS_DB, lookup.value)
        : await getUserByPhone(env.MEMBERS_DB, lookup.value)

  if (!member) return null

  const registration = await getEventRegistrationByEventAndMember(
    env.VMS_DB,
    env.ETC_2026_EVENT_ID,
    member.membership_number,
  )

  if (!assertRegistrationEligible(registration)) return null

  const ticket = registration ? await getEventTicketById(env.VMS_DB, registration!.ticket_id) : null
  const attendeeName = await getMemberDisplayName(env.MEMBERS_DB, member.membership_number)
  const qrPayload = `${member.membership_number}:${member.email}:${env.ETC_2026_EVENT_ID}`

  return {
    attendeeName,
    ticketLabel: ticket?.name ?? 'ETC 2026',
    qrPayload,
    registrationId: registration!.id,
  }
}

async function lookupGoogleFormTicket(
  env: AppBindings,
  lookup: NormalizedLookup,
): Promise<TicketQrLookupResult | null> {
  const spreadsheetId = env.ETC_GOOGLE_SHEET_ID?.trim()
  if (!spreadsheetId) return null

  const credentials = parseGoogleCredentials(env.GOOGLE_SERVICE_ACCOUNT_JSON)
  if (!credentials) return null

  const range = env.ETC_GOOGLE_SHEET_RANGE?.trim() || 'Form Responses 1!A:Z'

  const attendee = await findGoogleFormAttendee({
    credentials,
    spreadsheetId,
    range,
    columnMapJson: env.ETC_GOOGLE_SHEET_COLUMN_MAP,
    kind: lookup.kind,
    value: lookup.value,
  })

  if (!attendee) return null

  const identity = sheetAttendeeQrIdentity(attendee)
  const qrPayload = `${identity.membershipNumber}:${identity.email}:${env.ETC_2026_EVENT_ID}`

  return {
    attendeeName: attendee.name,
    ticketLabel: attendee.ticketLabel ?? 'ETC 2026',
    qrPayload,
    registrationId: identity.registrationId,
  }
}

export async function lookupTicketQr(
  env: AppBindings,
  input: TicketQrLookupInput,
): Promise<TicketQrLookupResult> {
  const lookup = normalizeLookupInput(input)

  const vmsTicket = await lookupVmsTicket(env, lookup)
  if (vmsTicket) return vmsTicket

  try {
    const sheetTicket = await lookupGoogleFormTicket(env, lookup)
    if (sheetTicket) return sheetTicket
  } catch (error) {
    console.error('Google Form sheet lookup failed', error)
  }

  throw new TicketQrLookupError('not_found')
}
