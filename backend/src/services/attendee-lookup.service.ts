import { getEventRegistrationByEventAndMember } from '../repositories/event-registrations.repository'
import { getEventTicketById } from '../repositories/event-tickets.repository'
import { findGoogleFormAttendee, sheetAttendeeQrIdentity } from '../repositories/google-form-attendees.repository'
import {
  getMemberNames,
  getUserByEmail,
  getUserByMembershipNumber,
  getUserByPhone,
} from '../repositories/members.repository'
import type { AppBindings } from '../types/bindings'
import { parseGoogleCredentials } from '../utils/google-sheets'

export type AttendeeLookupInput = {
  email?: string
  membershipNumber?: string
  phone?: string
}

export type AttendeeLookupResult = {
  attendeeName: string
  attendeeNameAr: string
  attendeeNameEn: string
  registrationId: string
  ticketLabel: string
  membershipNumber: string
  email: string
}

export type AttendeeLookupErrorCode = 'invalid_input' | 'not_found' | 'not_attended'

export type AttendeeLookupOptions = {
  /** When true, Google Sheet attendees must have a non-empty column M attendance log. */
  requireSheetAttendance?: boolean
}

export class AttendeeLookupError extends Error {
  code: AttendeeLookupErrorCode

  constructor(code: AttendeeLookupErrorCode, message?: string) {
    super(message ?? code)
    this.name = 'AttendeeLookupError'
    this.code = code
  }
}

type NormalizedLookup = {
  kind: 'email' | 'membership_number' | 'phone'
  value: string
}

function normalizeLookupInput(input: AttendeeLookupInput): NormalizedLookup {
  const email = input.email?.trim().toLowerCase() || undefined
  const membershipNumber = input.membershipNumber?.trim() || undefined
  const phone = input.phone?.trim() || undefined
  const provided = [email, membershipNumber, phone].filter(Boolean).length

  if (provided === 0) {
    throw new AttendeeLookupError('invalid_input', 'Email, membership number, or phone is required.')
  }

  if (provided > 1) {
    throw new AttendeeLookupError('invalid_input', 'Provide only one lookup value.')
  }

  if (email) return { kind: 'email', value: email }
  if (membershipNumber) return { kind: 'membership_number', value: membershipNumber }
  return { kind: 'phone', value: phone! }
}

function assertRegistrationEligible(
  registration: Awaited<ReturnType<typeof getEventRegistrationByEventAndMember>>,
) {
  if (!registration) return false
  return registration.status === 'registered' || registration.status === 'attended'
}

async function lookupVmsAttendee(
  env: AppBindings,
  lookup: NormalizedLookup,
): Promise<AttendeeLookupResult | null> {
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

  const ticket = registration ? await getEventTicketById(env.VMS_DB, registration.ticket_id) : null
  const { arName, enName } = await getMemberNames(env.MEMBERS_DB, member.membership_number)

  return {
    attendeeName: arName,
    attendeeNameAr: arName,
    attendeeNameEn: enName,
    registrationId: registration!.id,
    ticketLabel: ticket?.name ?? 'ETC 2026',
    membershipNumber: member.membership_number,
    email: member.email,
  }
}

async function lookupGoogleFormAttendee(
  env: AppBindings,
  lookup: NormalizedLookup,
): Promise<(AttendeeLookupResult & { attended: boolean }) | null> {
  const spreadsheetId = env.ETC_GOOGLE_SHEET_ID?.trim()
  if (!spreadsheetId) return null

  const credentials = parseGoogleCredentials(env.GOOGLE_API_KEY)
  if (!credentials) return null

  const range = env.ETC_GOOGLE_SHEET_RANGE?.trim() || 'Form Responses 1!A:M'

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

  return {
    attendeeName: attendee.name,
    attendeeNameAr: attendee.nameAr,
    attendeeNameEn: attendee.nameEn,
    registrationId: identity.registrationId,
    ticketLabel: attendee.ticketLabel ?? 'ETC 2026',
    membershipNumber: identity.membershipNumber,
    email: identity.email,
    attended: attendee.attended,
  }
}

export async function lookupAttendee(
  env: AppBindings,
  input: AttendeeLookupInput,
  options?: AttendeeLookupOptions,
): Promise<AttendeeLookupResult> {
  const lookup = normalizeLookupInput(input)

  const vmsAttendee = await lookupVmsAttendee(env, lookup)
  if (vmsAttendee) return vmsAttendee

  try {
    const sheetAttendee = await lookupGoogleFormAttendee(env, lookup)
    if (sheetAttendee) {
      if (options?.requireSheetAttendance && !sheetAttendee.attended) {
        throw new AttendeeLookupError(
          'not_attended',
          'Attendance was not recorded for this registration.',
        )
      }

      const { attended: _attended, ...result } = sheetAttendee
      return result
    }
  } catch (error) {
    if (error instanceof AttendeeLookupError) throw error
    console.error('Google Form sheet lookup failed', error)
  }

  throw new AttendeeLookupError('not_found')
}
