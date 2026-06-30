import { PDFDocument } from "pdf-lib"

const TEMPLATE_URL = "/certificate_of_attendance.pdf"
const PAGE_WIDTH = 842.25
const NAME_Y = 300
const MAX_NAME_WIDTH = 520
const BASE_FONT_SIZE = 34

function isRtlText(text: string) {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(text)
}

async function loadCairoFont(weight = 700) {
  await document.fonts.load(`${weight} 48px Cairo`)
  await document.fonts.ready
}

function fitFontSize(ctx: CanvasRenderingContext2D, name: string, rtl: boolean) {
  let size = BASE_FONT_SIZE
  ctx.direction = rtl ? "rtl" : "ltr"
  ctx.textAlign = "center"

  while (size > 18) {
    ctx.font = `700 ${size}px Cairo, "IBM Plex Sans Arabic", sans-serif`
    if (ctx.measureText(name).width <= MAX_NAME_WIDTH) return size
    size -= 2
  }

  return size
}

async function renderNameImage(name: string): Promise<{ pngBytes: Uint8Array; width: number; height: number }> {
  await loadCairoFont()

  const rtl = isRtlText(name)
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Canvas not supported")

  const fontSize = fitFontSize(ctx, name, rtl)
  ctx.font = `700 ${fontSize}px Cairo, "IBM Plex Sans Arabic", sans-serif`
  const metrics = ctx.measureText(name)
  const textWidth = Math.ceil(metrics.width)
  const textHeight = Math.ceil(fontSize * 1.35)

  canvas.width = textWidth + 24
  canvas.height = textHeight + 16

  ctx.direction = rtl ? "rtl" : "ltr"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.font = `700 ${fontSize}px Cairo, "IBM Plex Sans Arabic", sans-serif`
  ctx.fillStyle = "#1a1a2e"
  ctx.fillText(name, canvas.width / 2, canvas.height / 2)

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((value) => (value ? resolve(value) : reject(new Error("Failed to render name"))), "image/png")
  })

  const buffer = await blob.arrayBuffer()
  return { pngBytes: new Uint8Array(buffer), width: canvas.width, height: canvas.height }
}

/** Overlay attendee name on the certificate template and return PDF bytes. */
export async function fillCertificatePdf(attendeeName: string): Promise<Uint8Array> {
  const templateResponse = await fetch(TEMPLATE_URL)
  if (!templateResponse.ok) {
    throw new Error("certificate_template_unavailable")
  }

  const templateBytes = await templateResponse.arrayBuffer()
  const pdfDoc = await PDFDocument.load(templateBytes)
  const page = pdfDoc.getPages()[0]
  const { pngBytes, width, height } = await renderNameImage(attendeeName.trim())
  const nameImage = await pdfDoc.embedPng(pngBytes)

  const drawWidth = Math.min(width, MAX_NAME_WIDTH)
  const scale = drawWidth / width
  const drawHeight = height * scale
  const x = (PAGE_WIDTH - drawWidth) / 2
  const y = NAME_Y - drawHeight / 2

  page.drawImage(nameImage, { x, y, width: drawWidth, height: drawHeight })

  return pdfDoc.save()
}

export function certificatePdfFilename(registrationId: string) {
  return `etc-2026-certificate-${registrationId}.pdf`
}

export function certificatePdfBlob(pdfBytes: Uint8Array) {
  const copy = new Uint8Array(pdfBytes)
  return new Blob([copy], { type: "application/pdf" })
}

export function certificatePdfObjectUrl(pdfBytes: Uint8Array) {
  return URL.createObjectURL(certificatePdfBlob(pdfBytes))
}
