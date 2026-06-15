"use client"

import { useLang } from "./lang-provider"
import { IBTIKAR_URL, IbtikarLogo } from "./ibtikar-logo"
import { buildPath, pagePath } from "@/lib/lang-url"

export function SiteFooter() {
  const { lang, page, t, t2024 } = useLang()
  const f = t.footer
  const isArchive = page === "etc-2024"
  const homeHref = buildPath(lang, "home")
  const archiveHref = pagePath(lang, "etc-2024")

  const navLinks = isArchive
    ? [
        { href: `${archiveHref}#about`, label: t2024.nav.about },
        { href: `${archiveHref}#topics`, label: t2024.nav.topics },
        { href: `${archiveHref}#workshops`, label: t2024.nav.workshops },
        { href: `${archiveHref}#gallery`, label: t2024.nav.gallery },
        { href: homeHref, label: t2024.nav.backTo2026 },
      ]
    : [
        { href: "#about", label: t.nav.about },
        { href: "#topics", label: t.nav.topics },
        { href: "#agenda", label: t.nav.agenda },
        { href: "#workshops", label: t.nav.workshops },
        { href: "#faq", label: t.nav.faq },
        { href: archiveHref, label: t.nav.pastEdition },
      ]

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-14 lg:px-8">
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
                  href={`https://vms.ibtikar.tr/dashboard/volunteering`}
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
          <p>© {isArchive ? "2024" : "2026"} {f.org}. {f.rights}.</p>
          <p className="font-mono">{isArchive ? t2024.footer.dates : "Istanbul · 27–28.06.2026"}</p>
        </div>
      </div>
    </footer>
  )
}
