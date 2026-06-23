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
  muhammadImhan: "muhammad-imhan",
  masaSoudan: "masa-soudan",
  omarKhamis: "omar-al-khamis",
  osamaShbib: "osama-shbib.jpeg",
  israMavaldi: "isra-mavaldi.jpeg",
  hazemKhulousi: "hazem-khulousi",
  moustafaIsmail: "moustafa-ismail",
  muhammadFaridAlHafiz: "muhammad-farid-al-hafiz",
  moustafaAbdulAziz: "moustafa-abdul-aziz",
} as const

export type SpeakerImageSlug = (typeof SPEAKER_IMAGE_SLUGS)[keyof typeof SPEAKER_IMAGE_SLUGS]
