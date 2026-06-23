import type { Dict } from "@/lib/i18n"

export type GuestProfile = {
  name: string
  tagline?: string
  imageSlug: string
}

export function collectGuestsWithImages(dict: Dict): GuestProfile[] {
  const seen = new Set<string>()
  const guests: GuestProfile[] = []

  const add = (entry: {
    name: string
    tagline?: string
    imageSlug?: string
    speakerImage?: string
    speakerTagline?: string
  }) => {
    const slug = entry.imageSlug ?? entry.speakerImage
    if (!slug || seen.has(slug)) return
    seen.add(slug)
    guests.push({
      name: entry.name,
      tagline: entry.tagline ?? entry.speakerTagline,
      imageSlug: slug,
    })
  }

  for (const item of dict.topics.items) {
    if (item.speaker && item.speakerImage) {
      add({
        name: item.speaker,
        tagline: item.speakerTagline,
        speakerImage: item.speakerImage,
      })
    }

    if (item.panel) {
      if (item.panel.moderatorImage) {
        add({
          name: item.panel.moderator,
          tagline: item.panel.moderatorTagline,
          imageSlug: item.panel.moderatorImage,
        })
      }

      for (const guest of item.panel.guests) {
        add(guest)
      }
    }
  }

  for (const session of dict.workshops.sessions) {
    for (const item of session.items) {
      if (item.speaker && item.speakerImage) {
        add({
          name: item.speaker,
          tagline: item.speakerTagline,
          speakerImage: item.speakerImage,
        })
      }
    }
  }

  return guests
}
