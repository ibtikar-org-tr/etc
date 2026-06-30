import { getDocument, GlobalWorkerOptions } from "pdfjs-dist"
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url"

GlobalWorkerOptions.workerSrc = pdfWorker

const MAX_PREVIEW_WIDTH = 640
const PREVIEW_TIMEOUT_MS = 20_000

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error("preview_timeout")), ms)
    promise
      .then((value) => {
        window.clearTimeout(timer)
        resolve(value)
      })
      .catch((error) => {
        window.clearTimeout(timer)
        reject(error)
      })
  })
}

/** Render the first PDF page as a JPEG data URL; returns null if preview cannot be built. */
export async function renderCertificatePreview(pdfBytes: Uint8Array): Promise<string | null> {
  try {
    return await withTimeout(
      (async () => {
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
      })(),
      PREVIEW_TIMEOUT_MS,
    )
  } catch (error) {
    console.warn("Certificate preview unavailable", error)
    return null
  }
}
