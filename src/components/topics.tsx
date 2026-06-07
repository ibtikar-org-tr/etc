"use client"

import { Cpu, Bot, HeartPulse, Wifi, ShieldAlert, Scale } from "lucide-react"
import { useLang } from "./lang-provider"

const icons = [Cpu, Bot, HeartPulse, Wifi, ShieldAlert, Scale]

export function Topics() {
  const { t } = useLang()
  const tp = t.topics

  return (
    <section id="topics" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{tp.label}</p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl">
            {tp.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{tp.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tp.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={item.title}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{item.duration}</span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-balance">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
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
