"use client"

import { useLang } from "./lang-provider"

export function Shorts() {
  const { t } = useLang()
  const s = t.shorts

  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{s.label}</p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl">
            {s.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-base font-bold leading-snug">{item.title}</h3>
                <span className="shrink-0 font-mono text-[11px] text-primary">{item.duration}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
