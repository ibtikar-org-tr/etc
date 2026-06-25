import { fetchSheetValues, type GoogleServiceAccountCredentials } from '../utils/google-sheets'
import { normalizePhone } from '../utils/phone'

export type SheetAttendee = {
  rowNumber: number
  name: string
  email: string
  phone?: string
  membershipNumber?: string
  ticketLabel?: string
}

export type SheetColumnMap = Record<string, 'email' | 'phone' | 'membership_number' | 'name' | 'ticket_label'>

export const DEFAULT_SHEET_COLUMN_MAP: SheetColumnMap = {
  'البريد الإلكتروني': 'email',
  'Email Address': 'email',
  Email: 'email',
  email: 'email',
  'رقم الهاتف': 'phone',
  'Phone number': 'phone',
  Phone: 'phone',
  phone: 'phone',
  'رقم العضوية': 'membership_number',
  'Membership number': 'membership_number',
  membership_number: 'membership_number',
  الاسم: 'name',
  'الاسم الكامل': 'name',
  Name: 'name',
  'Full name': 'name',
  'Full Name': 'name',
  name: 'name',
  'نوع التذكرة': 'ticket_label',
  Ticket: 'ticket_label',
  ticket: 'ticket_label',
}

type LookupKind = 'email' | 'membership_number' | 'phone'

function parseColumnMap(raw: string | undefined): SheetColumnMap {
  if (!raw?.trim()) return DEFAULT_SHEET_COLUMN_MAP

  try {
    const parsed = JSON.parse(raw) as SheetColumnMap
    return { ...DEFAULT_SHEET_COLUMN_MAP, ...parsed }
  } catch {
    return DEFAULT_SHEET_COLUMN_MAP
  }
}

function rowToAttendee(
  row: string[],
  headers: string[],
  columnMap: SheetColumnMap,
  rowNumber: number,
): SheetAttendee | null {
  const attendee: Partial<SheetAttendee> = { rowNumber }

  headers.forEach((header, index) => {
    const field = columnMap[header.trim()]
    const value = row[index]?.trim()
    if (!field || !value) return

    if (field === 'email') attendee.email = value.toLowerCase()
    if (field === 'phone') attendee.phone = value
    if (field === 'membership_number') attendee.membershipNumber = value
    if (field === 'name') attendee.name = value
    if (field === 'ticket_label') attendee.ticketLabel = value
  })

  if (!attendee.email && !attendee.phone && !attendee.membershipNumber) {
    return null
  }

  return {
    rowNumber,
    name: attendee.name?.trim() || attendee.email || attendee.phone || 'ETC 2026 Attendee',
    email: attendee.email ?? '',
    phone: attendee.phone,
    membershipNumber: attendee.membershipNumber,
    ticketLabel: attendee.ticketLabel,
  }
}

function matchesLookup(attendee: SheetAttendee, kind: LookupKind, value: string): boolean {
  if (kind === 'email') {
    return attendee.email.toLowerCase() === value.toLowerCase()
  }

  if (kind === 'membership_number') {
    return attendee.membershipNumber?.trim() === value.trim()
  }

  const normalizedLookup = normalizePhone(value)
  if (!normalizedLookup) return false

  const attendeePhone = attendee.phone ? normalizePhone(attendee.phone) : ''
  return attendeePhone === normalizedLookup
}

let cachedRows: { key: string; fetchedAt: number; rows: string[][] } | null = null
const CACHE_TTL_MS = 60_000

async function loadSheetRows(
  credentials: GoogleServiceAccountCredentials,
  spreadsheetId: string,
  range: string,
): Promise<string[][]> {
  const cacheKey = `${spreadsheetId}:${range}`
  if (cachedRows && cachedRows.key === cacheKey && Date.now() - cachedRows.fetchedAt < CACHE_TTL_MS) {
    return cachedRows.rows
  }

  const rows = await fetchSheetValues(credentials, spreadsheetId, range)
  cachedRows = { key: cacheKey, fetchedAt: Date.now(), rows }
  return rows
}

export async function findGoogleFormAttendee(input: {
  credentials: GoogleServiceAccountCredentials
  spreadsheetId: string
  range: string
  columnMapJson?: string
  kind: LookupKind
  value: string
}): Promise<SheetAttendee | null> {
  const rows = await loadSheetRows(input.credentials, input.spreadsheetId, input.range)
  if (rows.length < 2) return null

  const headers = rows[0].map((header) => header.trim())
  const columnMap = parseColumnMap(input.columnMapJson)

  for (let index = 1; index < rows.length; index++) {
    const attendee = rowToAttendee(rows[index], headers, columnMap, index + 1)
    if (!attendee) continue
    if (matchesLookup(attendee, input.kind, input.value)) {
      return attendee
    }
  }

  return null
}

export function sheetAttendeeQrIdentity(attendee: SheetAttendee): {
  membershipNumber: string
  email: string
  registrationId: string
} {
  const membershipNumber =
    attendee.membershipNumber?.trim() ||
    (attendee.phone ? `GF${normalizePhone(attendee.phone)}` : `GF${attendee.rowNumber}`)

  const email = attendee.email || `${membershipNumber}@etc-form.local`

  return {
    membershipNumber,
    email,
    registrationId: `sheet-${attendee.rowNumber}`,
  }
}
