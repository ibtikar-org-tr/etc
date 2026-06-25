import QRCode from "qrcode"

export async function qrPayloadToDataUrl(payload: string): Promise<string> {
  return QRCode.toDataURL(payload, {
    errorCorrectionLevel: "M",
    margin: 2,
    width: 256,
  })
}
