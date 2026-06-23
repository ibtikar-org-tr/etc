import { ExternalLink } from "lucide-react"
import { useLang } from "./lang-provider"

export const STARTUP_BOOTH_URL = "https://url.ibtikar.org.tr/etc-2026-startup"

export function StartupBooth() {
  const { t } = useLang()
  const c = t.startupBooth

  const buttonClass =
    "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"

  return (
    <section id="startup-booth" className="section-pad">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="anim-panel">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 sm:rounded-3xl sm:p-10 lg:p-16">
            <div className="pointer-events-none absolute -start-20 -bottom-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="section-title">{c.title}</h2>
                <p className="mt-4 text-base text-muted-foreground sm:text-lg">{c.subtitle}</p>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base">{c.applyVia}</p>
                <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {c.note}
                </p>
              </div>

              <div>
                <a
                  href={STARTUP_BOOTH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  {c.button}
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
