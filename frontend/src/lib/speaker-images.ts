export const SPEAKER_IMAGE_BASE = "https://files.ibtikar.tr/events/2601/etc-2026/speakers"

const LOCAL_SPEAKER_IMAGES: Record<string, string> = {
  "female-avatar": "/female-avatar.svg",
}

export function isSpeakerAvatar(slug: string) {
  return slug in LOCAL_SPEAKER_IMAGES
}

export function speakerImageUrl(slug: string) {
  const local = LOCAL_SPEAKER_IMAGES[slug]
  if (local) return local

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
  femaleAvatar: "female-avatar",
  hazemKhulousi: "hazem-khulousi",
  moustafaIsmail: "moustafa-ismail",
  muhammadFaridAlHafiz: "muhammad-farid-al-hafiz.jpeg",
  moustafaAbdulAziz: "moustafa-abdul-aziz",
  abduallahDamash: "abduallah-damash",
  ahmadShamsddin: "ahmad-shamsddin.jpg",
  youssefBakara: "youssef-bakara",
  osamaSiam: "osama-siam",
} as const

export type SpeakerImageSlug = (typeof SPEAKER_IMAGE_SLUGS)[keyof typeof SPEAKER_IMAGE_SLUGS]
