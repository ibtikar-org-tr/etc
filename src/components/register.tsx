import { Clock, ExternalLink } from "lucide-react"
import { useLang } from "./lang-provider"

/** Set when the external registration platform is live. */
export const REGISTRATION_URL = ""

export function Register() {
  const { t } = useLang()
  const c = t.cta
  const isAvailable = Boolean(REGISTRATION_URL)

  const buttonClass =
    "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-50"

  return (
    <section id="register" className="section-pad">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="anim-panel relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-5 sm:rounded-3xl sm:p-10 lg:p-16">
          <div className="pointer-events-none absolute -end-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="section-title">{c.title}</h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">{c.subtitle}</p>
              <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground sm:text-base">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                {c.comingSoon}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                {c.note}
              </p>
            </div>

            <div>
              {isAvailable ? (
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonClass} hover:opacity-90`}
                >
                  {c.button}
                  <ExternalLink className="size-4" />
                </a>
              ) : (
                <button type="button" disabled className={buttonClass} aria-disabled="true">
                  {c.button}
                  <ExternalLink className="size-4 opacity-60" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
