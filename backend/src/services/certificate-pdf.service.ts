import { PDFDocument, type PDFFont } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import cairoBold from '../lib/fonts/Cairo-Bold.ttf'
import type { AppBindings } from '../types/bindings'

export type CertificateTemplate = 'ar' | 'en' | 'tr'

const PAGE_WIDTH = 842.25
const NAME_Y = 300
const MAX_NAME_WIDTH = 520
const BASE_FONT_SIZE = 34

const templateBytesCache = new Map<CertificateTemplate, ArrayBuffer>()

function templatePublicPath(template: CertificateTemplate) {
  return `/certificate_of_attendance_${template}.pdf`
}

export function certificateTemplateForLang(lang: string | undefined): CertificateTemplate {
  if (lang === 'ar') return 'ar'
  if (lang === 'tr') return 'tr'
  return 'en'
}

export function certificateNameForTemplate(
  template: CertificateTemplate,
  names: { attendeeNameAr: string; attendeeNameEn: string },
): string {
  if (template === 'ar') {
    return names.attendeeNameAr.trim() || names.attendeeNameEn.trim()
  }
  return names.attendeeNameEn.trim() || names.attendeeNameAr.trim()
}

export function certificatePdfFilename(registrationId: string, template: CertificateTemplate) {
  return `etc-2026-certificate-${template}-${registrationId}.pdf`
}

async function loadTemplateBytes(env: AppBindings, template: CertificateTemplate): Promise<ArrayBuffer> {
  const cached = templateBytesCache.get(template)
  if (cached) return cached

  const base = env.FRONTEND_BASE_URL?.trim().replace(/\/$/, '')
  if (!base) throw new Error('frontend_base_url_missing')

  const response = await fetch(`${base}${templatePublicPath(template)}`)
  if (!response.ok) throw new Error(`template_fetch_failed:${template}`)

  const bytes = await response.arrayBuffer()
  templateBytesCache.set(template, bytes)
  return bytes
}

function fitFontSize(font: PDFFont, name: string) {
  let size = BASE_FONT_SIZE
  while (size > 18) {
    if (font.widthOfTextAtSize(name, size) <= MAX_NAME_WIDTH) return size
    size -= 2
  }
  return size
}

export async function generateCertificatePdf(
  env: AppBindings,
  template: CertificateTemplate,
  attendeeName: string,
): Promise<Uint8Array> {
  const templateBytes = await loadTemplateBytes(env, template)
  const pdfDoc = await PDFDocument.load(templateBytes)
  pdfDoc.registerFontkit(fontkit)

  const fontBytes =
    cairoBold instanceof ArrayBuffer ? new Uint8Array(cairoBold) : new Uint8Array(cairoBold as ArrayBuffer)
  const font = await pdfDoc.embedFont(fontBytes)
  const page = pdfDoc.getPages()[0]
  const name = attendeeName.trim()
  const fontSize = fitFontSize(font, name)
  const textWidth = font.widthOfTextAtSize(name, fontSize)
  const x = (PAGE_WIDTH - textWidth) / 2
  const y = NAME_Y - fontSize * 0.35

  page.drawText(name, { x, y, size: fontSize, font })

  return pdfDoc.save()
}
