"use client"

import { useMemo } from "react"
import { useLang } from "./lang-provider"
import { collectGuestsWithImages } from "@/lib/guests"
import { speakerImageUrl } from "@/lib/speaker-images"

export function Guests() {
  const { t } = useLang()
  const g = t.guests
  const profiles = useMemo(() => collectGuestsWithImages(t), [t])

  if (profiles.length === 0) return null

  return (
    <section id="guests" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{g.label}</p>
          <h2 className="anim-title section-title mt-4">{g.title}</h2>
          <p className="anim-subtitle mt-4 text-base text-muted-foreground sm:text-lg">{g.subtitle}</p>
        </div>

        <div className="anim-panel mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <article
              key={profile.imageSlug}
              className="anim-card group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] w-full min-h-48">
                <img
                  src={speakerImageUrl(profile.imageSlug)}
                  alt={profile.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-[center_20%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-4 pt-12">
                  <h3 className="font-heading text-base font-bold leading-snug text-white sm:text-lg">
                    {profile.name}
                  </h3>
                  {profile.tagline && (
                    <p className="mt-1 text-xs leading-snug text-white/85 sm:text-sm">{profile.tagline}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
