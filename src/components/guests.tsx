"use client"

import { useMemo } from "react"
import { useLang } from "./lang-provider"
import { collectGuestsWithImages, type GuestProfile } from "@/lib/guests"
import { speakerImageUrl } from "@/lib/speaker-images"

function GuestCard({ profile }: { profile: GuestProfile }) {
  return (
    <article className="group relative h-52 w-64 shrink-0 overflow-hidden rounded-2xl border border-border bg-card sm:h-56 sm:w-72">
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
      <div className="absolute inset-x-0 bottom-0 p-4 pt-10" dir="auto">
        <h3 className="font-heading text-base font-bold leading-snug text-white">{profile.name}</h3>
        {profile.tagline && (
          <p className="mt-1 line-clamp-2 text-xs leading-snug text-white/85">{profile.tagline}</p>
        )}
      </div>
    </article>
  )
}

export function Guests() {
  const { t } = useLang()
  const g = t.guests
  const profiles = useMemo(() => collectGuestsWithImages(t), [t])
  const loop = useMemo(() => [...profiles, ...profiles], [profiles])

  if (profiles.length === 0) return null

  return (
    <section id="guests" className="section-pad overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{g.label}</p>
          <h2 className="anim-title section-title mt-4">{g.title}</h2>
          <p className="anim-subtitle mt-4 text-base text-muted-foreground sm:text-lg">{g.subtitle}</p>
        </div>
      </div>

      <div className="guests-marquee anim-panel relative mt-12" dir="ltr">
        <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />
        <div className="guests-marquee-track flex w-max flex-nowrap gap-4 px-4 sm:gap-5 sm:px-6">
          {loop.map((profile, i) => (
            <GuestCard key={`${profile.imageSlug}-${i}`} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  )
}
