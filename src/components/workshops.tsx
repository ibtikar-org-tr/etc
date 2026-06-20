"use client"

import { useLang } from "./lang-provider"
import { SpeakerBioToggle } from "./speaker-bio-toggle"

export function Workshops() {
  const { t } = useLang()
  const w = t.workshops
  const bioLabels = t.common

  return (
    <section id="workshops" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{w.label}</p>
          <h2 className="anim-title section-title mt-4">
            {w.title}
          </h2>
          <p className="anim-subtitle mt-4 text-base text-muted-foreground sm:text-lg">{w.subtitle}</p>
        </div>

        <div className="mt-12 space-y-10">
          {w.sessions.map((session, si) => (
            <div key={session.name} className="anim-text">
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg bg-primary font-heading text-sm font-bold text-primary-foreground">
                  {si + 1}
                </span>
                <h3 className="font-heading text-xl font-bold">{session.name}</h3>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                {session.items.map((item) => (
                  <div
                    key={item.title}
                    className="anim-card flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                  >
                    <h4 className="font-heading text-base font-bold leading-snug text-balance">{item.title}</h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    {item.speaker && (
                      <SpeakerBioToggle
                        className="mt-4 border-t border-border/60 pt-4"
                        name={item.speaker}
                        bio={item.speakerBio}
                        showLabel={bioLabels.showSpeakerBio}
                        hideLabel={bioLabels.hideSpeakerBio}
                      />
                    )}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
