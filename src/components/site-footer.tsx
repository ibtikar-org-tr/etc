"use client"

import { useLang } from "./lang-provider"

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
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-heading text-lg font-extrabold">
              <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
                <span className="text-sm font-black">إ</span>
              </span>
              <span>
                ETC<span className="text-primary">.</span>ibtikar
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{f.tagline}</p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">etc.ibtikar.tr</p>
          </div>

          <div>
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

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{f.contact}</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="mailto:info@ibtikar.tr" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  info@ibtikar.tr
                </a>
              </li>
              <li>
                <a href="#register" className="text-sm text-primary transition-colors hover:underline">
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
