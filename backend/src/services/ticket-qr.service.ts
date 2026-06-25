import { getEventRegistrationByEventAndMember } from '../repositories/event-registrations.repository'
import { getEventTicketById } from '../repositories/event-tickets.repository'
import {
  getMemberDisplayName,
  getUserByEmail,
  getUserByMembershipNumber,
  getUserByPhone,
} from '../repositories/members.repository'
import type { AppBindings } from '../types/bindings'

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

function normalizeLookupInput(input: TicketQrLookupInput) {
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

  return { email, membershipNumber, phone }
}

function assertRegistrationEligible(
  registration: Awaited<ReturnType<typeof getEventRegistrationByEventAndMember>>,
) {
  if (!registration) {
    throw new TicketQrLookupError('not_found')
  }

  if (registration.status !== 'registered' && registration.status !== 'attended') {
    throw new TicketQrLookupError('not_found')
  }
}

export async function lookupTicketQr(
  env: AppBindings,
  input: TicketQrLookupInput,
): Promise<TicketQrLookupResult> {
  const { email, membershipNumber, phone } = normalizeLookupInput(input)

  const member = email
    ? await getUserByEmail(env.MEMBERS_DB, email)
    : membershipNumber
      ? await getUserByMembershipNumber(env.MEMBERS_DB, membershipNumber)
      : await getUserByPhone(env.MEMBERS_DB, phone!)

  if (!member) {
    throw new TicketQrLookupError('not_found')
  }

  const registration = await getEventRegistrationByEventAndMember(
    env.VMS_DB,
    env.ETC_2026_EVENT_ID,
    member.membership_number,
  )

  const ticket = registration ? await getEventTicketById(env.VMS_DB, registration.ticket_id) : null
  assertRegistrationEligible(registration)

  const attendeeName = await getMemberDisplayName(env.MEMBERS_DB, member.membership_number)
  const qrPayload = `${member.membership_number}:${member.email}:${env.ETC_2026_EVENT_ID}`

  return {
    attendeeName,
    ticketLabel: ticket?.name ?? 'ETC 2026',
    qrPayload,
    registrationId: registration!.id,
  }
}
