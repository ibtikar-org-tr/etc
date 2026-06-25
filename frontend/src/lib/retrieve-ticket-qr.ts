/** ETC 2026 event id on the VMS platform. */
export const ETC_2026_EVENT_ID = "b1ed6cdc-d9a9-4f08-ac48-54fe3eb52207"

export type TicketQrResult = {
  attendeeName: string
  ticketLabel: string
  qrCodeDataUrl: string
  registrationId: string
}

export type TicketQrErrorCode = "not_found" | "not_approved" | "not_available" | "generic"

export class TicketQrError extends Error {
  code: TicketQrErrorCode

  constructor(code: TicketQrErrorCode, message?: string) {
    super(message ?? code)
    this.name = "TicketQrError"
    this.code = code
  }
}

function parseLookupValue(value: string): { email?: string; membershipNumber?: string } {
  const trimmed = value.trim()
  if (trimmed.includes("@")) {
    return { email: trimmed.toLowerCase() }
  }
  return { membershipNumber: trimmed }
}

function apiBaseUrl(): string {
  const configured = import.meta.env.VITE_ETC_API_URL?.trim()
  return configured ? configured.replace(/\/$/, "") : ""
}

/** Lookup attendee entrance QR by email or membership number. */
export async function retrieveTicketQr(lookup: string): Promise<TicketQrResult> {
  const body = parseLookupValue(lookup)

  if (!body.email && !body.membershipNumber) {
    throw new TicketQrError("not_found")
  }

  let response: Response
  try {
    response = await fetch(`${apiBaseUrl()}/api/ticket-qr`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
  } catch {
    throw new TicketQrError("not_available")
  }

  if (!response.ok) {
    let code: TicketQrErrorCode = "generic"
    try {
      const payload = (await response.json()) as { error?: string }
      if (payload.error === "not_found") code = "not_found"
      else if (payload.error === "not_approved") code = "not_approved"
      else if (payload.error === "invalid_input") code = "not_found"
    } catch {
      // ignore parse errors
    }
    throw new TicketQrError(code)
  }

  return (await response.json()) as TicketQrResult
}
