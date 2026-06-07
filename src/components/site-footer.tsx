"use client"

import { useLang } from "./lang-provider"
import { IBTIKAR_URL, IbtikarLogo } from "./ibtikar-logo"

export function SiteFooter() {
  const { t } = useLang()
  const f = t.footer

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#topics", label: t.nav.topics },
    { href: "#agenda", label: t.nav.agenda },
    { href: "#workshops", label: t.nav.workshops },
    { href: "#faq", label: t.nav.faq },
  ]

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="anim-footer-col lg:col-span-2">
            <a
              href={IBTIKAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <IbtikarLogo className="h-8 w-auto" />
            </a>
            <p className="mt-3 font-heading text-sm font-semibold text-foreground">{f.org}</p>
            <p className="text-xs text-muted-foreground">{f.orgSub}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{f.tagline}</p>
            <a
              href={IBTIKAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-mono text-xs text-primary transition-colors hover:underline"
            >
              {f.website}
            </a>
          </div>

          <div className="anim-footer-col">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{f.nav}</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="anim-footer-col">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{f.contact}</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={IBTIKAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {f.website}
                </a>
              </li>
              <li>
                <a
                  href={`${IBTIKAR_URL}/volunteers`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary transition-colors hover:underline"
                >
                  {f.volunteer}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 {f.org}. {f.rights}.</p>
          <p className="font-mono">Istanbul · 27–28.06.2026</p>
        </div>
      </div>
    </footer>
  )
}
