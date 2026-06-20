export const SPEAKER_IMAGE_BASE = "https://files.ibtikar.tr/events/2601/etc-2026/speakers"

export function speakerImageUrl(slug: string) {
  const file = slug.includes(".") ? slug : `${slug}.jpg`
  return `${SPEAKER_IMAGE_BASE}/${file}`
}

/** Slugs match filenames under SPEAKER_IMAGE_BASE (with or without extension). */
export const SPEAKER_IMAGE_SLUGS = {
  abdulkarimLahmuni: "abdulkarim-lahmuni",
  abdurrahmanRajab: "abdurrahman-rajab.jpeg",
  firasQarahsan: "firas-qarahsan",
  abdurrahmanIsmail: "abdurrahman-ismail",
  muhammadIqbal: "m.ikbal",
  masaSoudan: "masa-soudan",
  omarAlKhamis: "omar-al-khamis",
  hazemKhulousi: "hazem-khulousi",
  moustafaIsmail: "moustafa-ismail",
} as const

export type SpeakerImageSlug = (typeof SPEAKER_IMAGE_SLUGS)[keyof typeof SPEAKER_IMAGE_SLUGS]
