import type { D1DatabaseLike } from '../types/bindings'

interface UserRow {
  membership_number: string
  email: string
}

interface MemberNameRow {
  membership_number: string
  email: string
  en_name: string | null
  ar_name: string | null
}

export async function getUserByEmail(db: D1DatabaseLike, email: string): Promise<UserRow | null> {
  const normalizedEmail = email.trim().toLowerCase()

  return db
    .prepare('SELECT membership_number, email FROM users WHERE email = ? LIMIT 1')
    .bind(normalizedEmail)
    .first<UserRow>()
}

export async function getUserByMembershipNumber(db: D1DatabaseLike, membershipNumber: string): Promise<UserRow | null> {
  const normalized = membershipNumber.trim()

  return db
    .prepare('SELECT membership_number, email FROM users WHERE membership_number = ? LIMIT 1')
    .bind(normalized)
    .first<UserRow>()
}

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '')
}

export async function getUserByPhone(db: D1DatabaseLike, phone: string): Promise<UserRow | null> {
  const normalizedPhone = normalizePhone(phone.trim())
  if (!normalizedPhone) return null

  return db
    .prepare(
      `SELECT u.membership_number, u.email
       FROM users u
       LEFT JOIN user_info ui ON ui.membership_number = u.membership_number
       WHERE REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(COALESCE(ui.phone_number, ''), ' ', ''), '-', ''), '(', ''), ')', ''), '+', '') = ?
       LIMIT 1`,
    )
    .bind(normalizedPhone)
    .first<UserRow>()
}

export async function getMemberDisplayName(db: D1DatabaseLike, membershipNumber: string): Promise<string> {
  const row = await db
    .prepare(
      `SELECT u.membership_number, u.email, ui.en_name, ui.ar_name
       FROM users u
       LEFT JOIN user_info ui ON ui.membership_number = u.membership_number
       WHERE u.membership_number = ?
       LIMIT 1`,
    )
    .bind(membershipNumber.trim())
    .first<MemberNameRow>()

  if (!row) return membershipNumber
  return row.ar_name?.trim() || row.en_name?.trim() || row.email || membershipNumber
}
