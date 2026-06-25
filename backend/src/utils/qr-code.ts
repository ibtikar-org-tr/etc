import { generatePngDataQrCode } from '@juit/qrcode'

export async function registrationQrDataUrl(payload: string): Promise<string> {
  return generatePngDataQrCode(payload, {
    ecLevel: 'M',
    margin: 2,
    scale: 8,
  })
}
