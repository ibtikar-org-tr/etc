const BASE = "https://files.ibtikar.tr/events/2304/etc-2024"

export const ETC_2024_IMAGES = [
  "20240217_183639.jpg",
  "photo_2024-02-26_22-31-32.jpg",
  "photo_2024-02-26_22-35-12.jpg",
  "photo_2024-02-26_22-35-15.jpg",
  "photo_2024-02-26_22-36-20.jpg",
  "photo_2026-06-16_00-36-47.jpg",
  "photo_2026-06-16_00-36-51.jpg",
  "photo_2026-06-16_00-38-22.jpg",
  "photo_2026-06-16_00-38-32.jpg"
] as const

export function etc2024ImageUrl(filename: string) {
  return `${BASE}/${filename}`
}

export const ETC_2024_HERO_IMAGE = etc2024ImageUrl("20240217_152156.jpg")
