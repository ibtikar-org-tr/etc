"use client"

import { useLang } from "./lang-provider"
import { IBTIKAR_URL, IbtikarLogo } from "./ibtikar-logo"

export function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">{a.label}</p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl">
              {a.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{a.body}</p>

            <div className="mt-8 rounded-xl border border-border bg-card/50 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <IbtikarLogo variant="square" className="size-12 shrink-0 rounded-lg" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{a.organizerLabel}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{a.organizerBody}</p>
                  <a
                    href={IBTIKAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-primary transition-colors hover:underline"
                  >
                    {a.organizerLink} →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 self-center">
            {a.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="font-heading text-4xl font-extrabold text-primary">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
