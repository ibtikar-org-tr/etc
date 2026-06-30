import { PDFDocument } from "pdf-lib"

export type CertificateTemplate = "ar" | "en"

const TEMPLATE_URLS: Record<CertificateTemplate, string> = {
  ar: "/certificate_of_attendance_ar.pdf",
  en: "/certificate_of_attendance_en.pdf",
}

const PAGE_WIDTH = 842.25
const NAME_Y = 300
const MAX_NAME_WIDTH = 520
const BASE_FONT_SIZE = 34

function isRtlText(text: string) {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(text)
}

async function loadCertificateFonts(template: CertificateTemplate) {
  if (template === "ar") {
    await document.fonts.load("700 48px Cairo")
  } else {
    await document.fonts.load("700 48px Cairo")
    await document.fonts.load('600 48px "IBM Plex Sans Arabic"')
  }
  await document.fonts.ready
}

function fontFamily(template: CertificateTemplate) {
  return template === "ar"
    ? '700 48px Cairo, "IBM Plex Sans Arabic", sans-serif'
    : '700 48px Cairo, "IBM Plex Sans Arabic", sans-serif'
}

function fitFontSize(ctx: CanvasRenderingContext2D, name: string, rtl: boolean, template: CertificateTemplate) {
  let size = BASE_FONT_SIZE
  ctx.direction = rtl ? "rtl" : "ltr"
  ctx.textAlign = "center"
  const family = fontFamily(template)

  while (size > 18) {
    ctx.font = family.replace("48px", `${size}px`)
    if (ctx.measureText(name).width <= MAX_NAME_WIDTH) return size
    size -= 2
  }

  return size
}

async function renderNameImage(
  name: string,
  template: CertificateTemplate,
): Promise<{ pngBytes: Uint8Array; width: number; height: number }> {
  await loadCertificateFonts(template)

  const rtl = template === "ar" || isRtlText(name)
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Canvas not supported")

  const family = fontFamily(template)
  const fontSize = fitFontSize(ctx, name, rtl, template)
  ctx.font = family.replace("48px", `${fontSize}px`)
  const metrics = ctx.measureText(name)
  const textWidth = Math.ceil(metrics.width)
  const textHeight = Math.ceil(fontSize * 1.35)

  canvas.width = textWidth + 24
  canvas.height = textHeight + 16

  ctx.direction = rtl ? "rtl" : "ltr"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.font = family.replace("48px", `${fontSize}px`)
  ctx.fillStyle = "#1a1a2e"
  ctx.fillText(name, canvas.width / 2, canvas.height / 2)

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((value) => (value ? resolve(value) : reject(new Error("Failed to render name"))), "image/png")
  })

  const buffer = await blob.arrayBuffer()
  return { pngBytes: new Uint8Array(buffer), width: canvas.width, height: canvas.height }
}

/** Overlay attendee name on the certificate template and return PDF bytes. */
export async function fillCertificatePdf(attendeeName: string, template: CertificateTemplate): Promise<Uint8Array> {
  const templateResponse = await fetch(TEMPLATE_URLS[template])
  if (!templateResponse.ok) {
    throw new Error("certificate_template_unavailable")
  }

  const templateBytes = await templateResponse.arrayBuffer()
  const pdfDoc = await PDFDocument.load(templateBytes)
  const page = pdfDoc.getPages()[0]
  const { pngBytes, width, height } = await renderNameImage(attendeeName.trim(), template)
  const nameImage = await pdfDoc.embedPng(pngBytes)

  const drawWidth = Math.min(width, MAX_NAME_WIDTH)
  const scale = drawWidth / width
  const drawHeight = height * scale
  const x = (PAGE_WIDTH - drawWidth) / 2
  const y = NAME_Y - drawHeight / 2

  page.drawImage(nameImage, { x, y, width: drawWidth, height: drawHeight })

  return pdfDoc.save()
}

export function certificateTemplateForLang(lang: string): CertificateTemplate {
  return lang === "ar" ? "ar" : "en"
}

export function certificateNameForTemplate(
  template: CertificateTemplate,
  names: { attendeeNameAr: string; attendeeNameEn: string },
): string {
  return template === "ar"
    ? names.attendeeNameAr.trim() || names.attendeeNameEn.trim()
    : names.attendeeNameEn.trim() || names.attendeeNameAr.trim()
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
