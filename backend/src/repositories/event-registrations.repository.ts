import type { D1DatabaseLike } from '../types/bindings'

export interface EventRegistrationRow {
  id: string
  event_id: string
  membership_number: string
  ticket_id: string
  status: string
  payment_approved_by: string | null
  attendance_approved_by: string | null
}

export async function getEventRegistrationByEventAndMember(
  db: D1DatabaseLike,
  eventId: string,
  membershipNumber: string,
): Promise<EventRegistrationRow | null> {
  return db
    .prepare(
      `SELECT id, event_id, membership_number, ticket_id, status, payment_approved_by, attendance_approved_by
       FROM event_registrations
       WHERE event_id = ? AND membership_number = ?
       LIMIT 1`,
    )
    .bind(eventId, membershipNumber.trim())
    .first<EventRegistrationRow>()
}
