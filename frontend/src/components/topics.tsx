"use client"

import { Bot, Cpu, Cog, HeartPulse, Plane, Scale, ShieldAlert, Wifi } from "lucide-react"
import type { Dict } from "@/lib/i18n"
import { useLang } from "./lang-provider"
import { SpeakerBioToggle } from "./speaker-bio-toggle"

const icons = [HeartPulse, Plane, Wifi, Scale, Bot, ShieldAlert, Cpu, Cog]

type TopicItem = Dict["topics"]["items"][number]

export function Topics() {
  const { t } = useLang()
  const tp = t.topics
  const bioLabels = t.common
  const items = [...tp.items.filter((item) => !item.panel), ...tp.items.filter((item) => item.panel)]

  function renderCard(item: TopicItem, iconIndex: number) {
    const Icon = icons[iconIndex % icons.length]
    return (
      <div
        key={item.title}
        className="anim-card group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
      >
        <div className="flex items-center justify-between">
          <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="size-5" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">{item.duration}</span>
        </div>
        <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-balance">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
        {item.panel ? (
          <div className="mt-4 space-y-3 border-t border-border/60 pt-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-primary">{tp.panelType}</p>
            <SpeakerBioToggle
              name={item.panel.moderator}
              tagline={item.panel.moderatorTagline}
              bio={item.panel.moderatorBio}
              imageSlug={item.panel.moderatorImage}
              showLabel={bioLabels.showSpeakerBio}
              hideLabel={bioLabels.hideSpeakerBio}
              roleLabel={tp.panelModerator}
            />
            {item.panel.guests.map((guest, gi) => (
              <SpeakerBioToggle
                key={guest.name}
                name={guest.name}
                tagline={guest.tagline}
                bio={guest.bio}
                imageSlug={guest.imageSlug}
                showLabel={bioLabels.showSpeakerBio}
                hideLabel={bioLabels.hideSpeakerBio}
                roleLabel={tp.panelGuestLabels[gi] ?? `${gi + 1}`}
              />
            ))}
          </div>
        ) : (
          item.speaker && (
            <SpeakerBioToggle
              className="mt-4 border-t border-border/60 pt-4"
              name={item.speaker}
              tagline={item.speakerTagline}
              bio={item.speakerBio}
              imageSlug={item.speakerImage}
              showLabel={bioLabels.showSpeakerBio}
              hideLabel={bioLabels.hideSpeakerBio}
            />
          )
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="topics" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{tp.label}</p>
          <h2 className="anim-title section-title mt-4">
            {tp.title}
          </h2>
          <p className="anim-subtitle mt-4 text-base text-muted-foreground sm:text-lg">{tp.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => renderCard(item, i))}
        </div>
      </div>
    </section>
  )
}
