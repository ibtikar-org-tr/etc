/** ETC 2026 event id on the VMS platform. */
export const ETC_2026_EVENT_ID = "b1ed6cdc-d9a9-4f08-ac48-54fe3eb52207"

export type TicketQrLookupOption = "email" | "membershipNumber" | "phoneNumber"

export type TicketQrLookup =
  | { type: "email"; value: string }
  | { type: "membershipNumber"; value: string }
  | { type: "phoneNumber"; value: string }

export type TicketQrApiResponse = {
  attendeeName: string
  ticketLabel: string
  qrPayload: string
  registrationId: string
}

export type TicketQrResult = TicketQrApiResponse & {
  qrCodeDataUrl: string
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

function toApiBody(lookup: TicketQrLookup) {
  if (lookup.type === "email") {
    return { email: lookup.value.trim().toLowerCase() }
  }
  if (lookup.type === "membershipNumber") {
    return { membershipNumber: lookup.value.trim() }
  }
  return { phone: lookup.value.trim() }
}

function apiBaseUrl(): string {
  const configured = import.meta.env.VITE_ETC_BE?.trim()
  return configured ? configured.replace(/\/$/, "") : ""
}

/** Lookup attendee entrance QR by email, membership number, or phone. */
export async function retrieveTicketQr(lookup: TicketQrLookup): Promise<TicketQrResult> {
  const body = toApiBody(lookup)

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

  const data = (await response.json()) as TicketQrApiResponse
  const { qrPayloadToDataUrl } = await import("@/lib/qr-code")
  const qrCodeDataUrl = await qrPayloadToDataUrl(data.qrPayload)

  return { ...data, qrCodeDataUrl }
}
