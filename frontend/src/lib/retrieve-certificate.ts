import {
  certificatePdfFilename,
  certificatePdfObjectUrl,
  readCertificateResponseHeaders,
  type CertificateTemplate,
} from "@/lib/fill-certificate-pdf"
import type { Lang } from "@/lib/i18n"

export type CertificateLookupOption = "email" | "membershipNumber"

export type CertificateLookup =
  | { type: "email"; value: string }
  | { type: "membershipNumber"; value: string }

export type CertificateResult = {
  attendeeName: string
  attendeeNameAr: string
  attendeeNameEn: string
  registrationId: string
  template: CertificateTemplate
  pdfBytes: Uint8Array
  pdfObjectUrl: string
  previewImageUrl: string | null
  downloadFilename: string
}

export type CertificateErrorCode = "not_found" | "not_attended" | "not_available" | "generic"

export class CertificateError extends Error {
  code: CertificateErrorCode

  constructor(code: CertificateErrorCode, message?: string) {
    super(message ?? code)
    this.name = "CertificateError"
    this.code = code
  }
}

function toApiBody(lookup: CertificateLookup, lang: Lang) {
  if (lookup.type === "email") {
    return { email: lookup.value.trim().toLowerCase(), lang }
  }
  return { membershipNumber: lookup.value.trim(), lang }
}

function apiBaseUrl(): string {
  const configured = import.meta.env.VITE_ETC_BE?.trim()
  return configured ? configured.replace(/\/$/, "") : ""
}

/** Look up attendee and return a personalized certificate PDF from the backend. */
export async function retrieveCertificate(lookup: CertificateLookup, lang: Lang): Promise<CertificateResult> {
  const body = toApiBody(lookup, lang)

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

  const contentType = response.headers.get("Content-Type") ?? ""

  if (!response.ok) {
    let code: CertificateErrorCode = "generic"
    if (contentType.includes("json")) {
      try {
        const payload = (await response.json()) as { error?: string }
        if (payload.error === "not_found" || payload.error === "invalid_input") code = "not_found"
        else if (payload.error === "not_attended") code = "not_attended"
      } catch {
        // ignore parse errors
      }
    }
    throw new CertificateError(code)
  }

  if (!contentType.includes("pdf")) {
    throw new CertificateError("not_available")
  }

  let pdfBytes: Uint8Array
  try {
    pdfBytes = new Uint8Array(await response.arrayBuffer())
  } catch {
    throw new CertificateError("not_available")
  }

  const meta = readCertificateResponseHeaders(response)
  const template = meta.template
  const downloadFilename = certificatePdfFilename(meta.registrationId, template)
  const pdfObjectUrl = certificatePdfObjectUrl(pdfBytes)

  let previewImageUrl: string | null = null
  try {
    const { renderCertificatePreview } = await import("@/lib/render-certificate-preview")
    previewImageUrl = await renderCertificatePreview(pdfBytes)
  } catch (error) {
    console.warn("Certificate preview skipped", error)
  }

  return {
    attendeeName: meta.attendeeName,
    attendeeNameAr: meta.attendeeNameAr,
    attendeeNameEn: meta.attendeeNameEn,
    registrationId: meta.registrationId,
    template,
    pdfBytes,
    pdfObjectUrl,
    previewImageUrl,
    downloadFilename,
  }
}

export function openCertificatePdf(pdfObjectUrl: string) {
  const link = document.createElement("a")
  link.href = pdfObjectUrl
  link.target = "_blank"
  link.rel = "noopener noreferrer"
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export function downloadCertificatePdf(pdfObjectUrl: string, filename: string) {
  const link = document.createElement("a")
  link.href = pdfObjectUrl
  link.download = filename
  link.rel = "noopener"
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export function revokeCertificateObjectUrl(url: string) {
  URL.revokeObjectURL(url)
}
