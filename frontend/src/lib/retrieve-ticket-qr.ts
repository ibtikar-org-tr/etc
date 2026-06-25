/** ETC 2026 event id on the VMS platform — used when the lookup API is wired. */
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

/** Lookup attendee QR by email. Backend integration pending. */
export async function retrieveTicketQr(_email: string): Promise<TicketQrResult> {
  await new Promise((resolve) => setTimeout(resolve, 600))
  throw new TicketQrError("not_available")
}
