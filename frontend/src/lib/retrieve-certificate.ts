import {
  certificatePdfBlob,
  certificatePdfFilename,
  certificatePdfObjectUrl,
  fillCertificatePdf,
} from "@/lib/fill-certificate-pdf"

export type CertificateLookupOption = "email" | "membershipNumber"

export type CertificateLookup =
  | { type: "email"; value: string }
  | { type: "membershipNumber"; value: string }

export type CertificateApiResponse = {
  attendeeName: string
  registrationId: string
}

export type CertificateResult = CertificateApiResponse & {
  pdfBytes: Uint8Array
  pdfObjectUrl: string
  downloadFilename: string
}

export type CertificateErrorCode = "not_found" | "not_available" | "generic"

export class CertificateError extends Error {
  code: CertificateErrorCode

  constructor(code: CertificateErrorCode, message?: string) {
    super(message ?? code)
    this.name = "CertificateError"
    this.code = code
  }
}

function toApiBody(lookup: CertificateLookup) {
  if (lookup.type === "email") {
    return { email: lookup.value.trim().toLowerCase() }
  }
  return { membershipNumber: lookup.value.trim() }
}

function apiBaseUrl(): string {
  const configured = import.meta.env.VITE_ETC_BE?.trim()
  return configured ? configured.replace(/\/$/, "") : ""
}

/** Look up attendee and return a personalized certificate PDF. */
export async function retrieveCertificate(lookup: CertificateLookup): Promise<CertificateResult> {
  const body = toApiBody(lookup)

  let response: Response
  try {
    response = await fetch(`${apiBaseUrl()}/api/certificate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
  } catch {
    throw new CertificateError("not_available")
  }

  if (!response.ok) {
    let code: CertificateErrorCode = "generic"
    try {
      const payload = (await response.json()) as { error?: string }
      if (payload.error === "not_found" || payload.error === "invalid_input") code = "not_found"
    } catch {
      // ignore parse errors
    }
    throw new CertificateError(code)
  }

  const data = (await response.json()) as CertificateApiResponse

  let pdfBytes: Uint8Array
  try {
    pdfBytes = await fillCertificatePdf(data.attendeeName)
  } catch {
    throw new CertificateError("not_available")
  }

  const downloadFilename = certificatePdfFilename(data.registrationId)
  const pdfObjectUrl = certificatePdfObjectUrl(pdfBytes)

  return {
    ...data,
    pdfBytes,
    pdfObjectUrl,
    downloadFilename,
  }
}

export function revokeCertificateObjectUrl(url: string) {
  URL.revokeObjectURL(url)
}

export { certificatePdfBlob }
