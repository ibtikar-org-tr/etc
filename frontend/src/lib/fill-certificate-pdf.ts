export type CertificateTemplate = "ar" | "en" | "tr"

export function certificateTemplateForLang(lang: string): CertificateTemplate {
  if (lang === "ar") return "ar"
  if (lang === "tr") return "tr"
  return "en"
}

export function certificateNameForTemplate(
  template: CertificateTemplate,
  names: { attendeeNameAr: string; attendeeNameEn: string },
): string {
  if (template === "ar") {
    return names.attendeeNameAr.trim() || names.attendeeNameEn.trim()
  }
  return names.attendeeNameEn.trim() || names.attendeeNameAr.trim()
}

export function certificatePdfFilename(registrationId: string, template: CertificateTemplate) {
  return `etc-2026-certificate-${template}-${registrationId}.pdf`
}

export function certificatePdfBlob(pdfBytes: Uint8Array) {
  const copy = new Uint8Array(pdfBytes)
  return new Blob([copy], { type: "application/pdf" })
}

export function certificatePdfObjectUrl(pdfBytes: Uint8Array) {
  return URL.createObjectURL(certificatePdfBlob(pdfBytes))
}

function readHeader(response: Response, name: string) {
  const value = response.headers.get(name)
  return value ? decodeURIComponent(value) : ""
}

export function readCertificateResponseHeaders(response: Response) {
  return {
    attendeeName: readHeader(response, "X-Attendee-Name"),
    attendeeNameAr: readHeader(response, "X-Attendee-Name-Ar"),
    attendeeNameEn: readHeader(response, "X-Attendee-Name-En"),
    registrationId: response.headers.get("X-Registration-Id") ?? "",
    template: (response.headers.get("X-Certificate-Template") ?? "en") as CertificateTemplate,
  }
}
