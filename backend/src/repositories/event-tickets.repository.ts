import type { D1DatabaseLike } from '../types/bindings'

interface EventTicketRow {
  id: string
  name: string
  currency_price: string | null
}

export async function getEventTicketById(db: D1DatabaseLike, ticketId: string): Promise<EventTicketRow | null> {
  return db
    .prepare('SELECT id, name, currency_price FROM event_tickets WHERE id = ? LIMIT 1')
    .bind(ticketId)
    .first<EventTicketRow>()
}
