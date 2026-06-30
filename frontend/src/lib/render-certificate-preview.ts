import { getDocument, GlobalWorkerOptions } from "pdfjs-dist"
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url"

GlobalWorkerOptions.workerSrc = pdfWorker

const MAX_PREVIEW_WIDTH = 640

/** Render the first PDF page as a JPEG data URL for inline preview (works on mobile). */
export async function renderCertificatePreview(pdfBytes: Uint8Array): Promise<string> {
  const pdf = await getDocument({ data: pdfBytes.slice() }).promise
  const page = await pdf.getPage(1)
  const baseViewport = page.getViewport({ scale: 1 })
  const scale = Math.min(2, MAX_PREVIEW_WIDTH / baseViewport.width)
  const viewport = page.getViewport({ scale })

  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")
  if (!context) throw new Error("Canvas not supported")

  canvas.width = viewport.width
  canvas.height = viewport.height

  await page.render({ canvas, canvasContext: context, viewport }).promise
  return canvas.toDataURL("image/jpeg", 0.9)
}
