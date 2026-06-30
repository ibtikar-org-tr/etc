import { PDFDocument } from "pdf-lib"

export type CertificateTemplate = "ar" | "en" | "tr"

const TEMPLATE_URLS: Record<CertificateTemplate, string> = {
  ar: "/certificate_of_attendance_ar.pdf",
  en: "/certificate_of_attendance_en.pdf",
  tr: "/certificate_of_attendance_tr.pdf",
}

const PAGE_WIDTH = 842.25
const NAME_Y = 300
const MAX_NAME_WIDTH = 520
const BASE_FONT_SIZE = 34

function isRtlText(text: string) {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(text)
}

async function loadCertificateFonts() {
  const loads = [
    document.fonts.load("700 48px Cairo"),
    document.fonts.load('700 48px "IBM Plex Sans Arabic"'),
  ]

  await Promise.race([
    Promise.allSettled(loads).then(() => document.fonts.ready),
    new Promise<void>((resolve) => window.setTimeout(resolve, 2500)),
  ])
}

function fontFamily(_template: CertificateTemplate) {
  return '700 48px Cairo, "IBM Plex Sans Arabic", sans-serif'
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
  await loadCertificateFonts()

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
    const timeout = window.setTimeout(() => reject(new Error("canvas_to_blob_timeout")), 10_000)
    canvas.toBlob(
      (value) => {
        window.clearTimeout(timeout)
        if (value) resolve(value)
        else reject(new Error("Failed to render name"))
      },
      "image/png",
    )
  })

  const buffer = await blob.arrayBuffer()
  return { pngBytes: new Uint8Array(buffer), width: canvas.width, height: canvas.height }
}

const templateCache = new Map<CertificateTemplate, ArrayBuffer>()

async function loadTemplateBytes(template: CertificateTemplate): Promise<ArrayBuffer> {
  const cached = templateCache.get(template)
  if (cached) return cached

  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 45_000)

  let templateResponse: Response
  try {
    templateResponse = await fetch(TEMPLATE_URLS[template], { signal: controller.signal })
  } finally {
    window.clearTimeout(timeout)
  }

  if (!templateResponse.ok) {
    throw new Error("certificate_template_unavailable")
  }

  const templateBytes = await templateResponse.arrayBuffer()
  templateCache.set(template, templateBytes)
  return templateBytes
}

/** Overlay attendee name on the certificate template and return PDF bytes. */
export async function fillCertificatePdf(attendeeName: string, template: CertificateTemplate): Promise<Uint8Array> {
  const templateBytes = await loadTemplateBytes(template)
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
