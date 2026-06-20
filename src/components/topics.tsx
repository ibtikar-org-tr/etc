"use client"

import { Cpu, Bot, HeartPulse, Wifi, ShieldAlert, Scale } from "lucide-react"
import { useLang } from "./lang-provider"

const icons = [Cpu, Bot, HeartPulse, Wifi, ShieldAlert, Scale]

export function Topics() {
  const { t } = useLang()
  const tp = t.topics

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
          {tp.items.map((item, i) => {
            const Icon = icons[i % icons.length]
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
                {item.speaker && (
                  <div className="mt-4 border-t border-border/60 pt-4">
                    <p className="text-sm font-semibold text-foreground">{item.speaker}</p>
                    {item.speakerBio && (
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.speakerBio}</p>
                    )}
                  </div>
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
          })}
        </div>
      </div>
    </section>
  )
}
