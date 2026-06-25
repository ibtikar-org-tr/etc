import { getEventRegistrationByEventAndMember } from '../repositories/event-registrations.repository'
import { getEventTicketById } from '../repositories/event-tickets.repository'
import {
  getMemberDisplayName,
  getUserByEmail,
  getUserByMembershipNumber,
} from '../repositories/members.repository'
import type { AppBindings } from '../types/bindings'
import { registrationQrDataUrl } from '../utils/qr-code'

export type TicketQrLookupInput = {
  email?: string
  membershipNumber?: string
}

export type TicketQrLookupResult = {
  attendeeName: string
  ticketLabel: string
  qrCodeDataUrl: string
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

function normalizeLookupInput(input: TicketQrLookupInput) {
  const email = input.email?.trim().toLowerCase() || undefined
  const membershipNumber = input.membershipNumber?.trim() || undefined

  if (!email && !membershipNumber) {
    throw new TicketQrLookupError('invalid_input', 'Email or membership number is required.')
  }

  if (email && membershipNumber) {
    throw new TicketQrLookupError('invalid_input', 'Provide either email or membership number, not both.')
  }

  return { email, membershipNumber }
}

function assertRegistrationEligible(
  registration: Awaited<ReturnType<typeof getEventRegistrationByEventAndMember>>,
  ticket: Awaited<ReturnType<typeof getEventTicketById>>,
) {
  if (!registration) {
    throw new TicketQrLookupError('not_found')
  }

  if (registration.status !== 'registered' && registration.status !== 'attended') {
    throw new TicketQrLookupError('not_found')
  }

  if (ticket?.currency_price && !registration.payment_approved_by) {
    throw new TicketQrLookupError('not_approved')
  }

  if (!registration.attendance_approved_by) {
    throw new TicketQrLookupError('not_approved')
  }
}

export async function lookupTicketQr(
  env: AppBindings,
  input: TicketQrLookupInput,
): Promise<TicketQrLookupResult> {
  const { email, membershipNumber } = normalizeLookupInput(input)

  const member = email
    ? await getUserByEmail(env.MEMBERS_DB, email)
    : await getUserByMembershipNumber(env.MEMBERS_DB, membershipNumber!)

  if (!member) {
    throw new TicketQrLookupError('not_found')
  }

  const registration = await getEventRegistrationByEventAndMember(
    env.VMS_DB,
    env.ETC_2026_EVENT_ID,
    member.membership_number,
  )

  const ticket = registration ? await getEventTicketById(env.VMS_DB, registration.ticket_id) : null
  assertRegistrationEligible(registration, ticket)

  const attendeeName = await getMemberDisplayName(env.MEMBERS_DB, member.membership_number)
  const qrCodeDataUrl = await registrationQrDataUrl(registration!.id)

  return {
    attendeeName,
    ticketLabel: ticket?.name ?? 'ETC 2026',
    qrCodeDataUrl,
    registrationId: registration!.id,
  }
}
