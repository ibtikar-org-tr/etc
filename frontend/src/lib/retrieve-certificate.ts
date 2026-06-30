import {
  certificatePdfFilename,
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

function isLikelyMobile(): boolean {
  if (typeof navigator === "undefined") return false
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
}

function isPdfBytes(bytes: Uint8Array) {
  return bytes.length >= 4 && bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46
}

function isPdfResponse(contentType: string, bytes: Uint8Array) {
  const normalized = contentType.toLowerCase()
  if (normalized.includes("pdf") || normalized.includes("octet-stream")) return true
  return isPdfBytes(bytes)
}

async function parseErrorCode(response: Response, contentType: string): Promise<CertificateErrorCode> {
  if (!contentType.includes("json")) return "generic"

  try {
    const payload = (await response.json()) as { error?: string }
    if (payload.error === "not_found" || payload.error === "invalid_input") return "not_found"
    if (payload.error === "not_attended") return "not_attended"
    if (payload.error === "generation_failed") return "not_available"
  } catch {
    // ignore parse errors
  }

  return "generic"
}

/** Look up attendee and return a personalized certificate PDF from the backend. */
export async function retrieveCertificate(lookup: CertificateLookup, lang: Lang): Promise<CertificateResult> {
  const body = toApiBody(lookup, lang)

  let response: Response
  try {
    response = await fetch(`${apiBaseUrl()}/api/certificate`, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf, application/json",
      },
      body: JSON.stringify(body),
    })
  } catch {
    throw new CertificateError("not_available")
  }

  const contentType = response.headers.get("Content-Type") ?? ""

  if (!response.ok) {
    throw new CertificateError(await parseErrorCode(response, contentType))
  }

  let pdfBlob: Blob
  try {
    pdfBlob = await response.blob()
  } catch {
    throw new CertificateError("not_available")
  }

  if (pdfBlob.size === 0) {
    throw new CertificateError("not_available")
  }

  const header = new Uint8Array(await pdfBlob.slice(0, 4).arrayBuffer())
  if (!isPdfResponse(contentType, header)) {
    throw new CertificateError("not_available")
  }

  const meta = readCertificateResponseHeaders(response)
  const template = meta.template
  const downloadFilename = certificatePdfFilename(meta.registrationId, template)
  const pdfObjectUrl = URL.createObjectURL(pdfBlob)

  let previewImageUrl: string | null = null
  if (!isLikelyMobile()) {
    try {
      const pdfBytes = new Uint8Array(await pdfBlob.arrayBuffer())
      const { renderCertificatePreview } = await import("@/lib/render-certificate-preview")
      previewImageUrl = await renderCertificatePreview(pdfBytes)
    } catch (error) {
      console.warn("Certificate preview skipped", error)
    }
  }

  return {
    attendeeName: meta.attendeeName,
    attendeeNameAr: meta.attendeeNameAr,
    attendeeNameEn: meta.attendeeNameEn,
    registrationId: meta.registrationId,
    template,
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
