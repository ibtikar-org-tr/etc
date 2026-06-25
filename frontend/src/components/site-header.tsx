"use client"

import { useRef, useState } from "react"
import { Menu, X, Globe, Check } from "lucide-react"
import { useLang } from "./lang-provider"
import { LANGS } from "@/lib/i18n"
import { buildPath, pagePath } from "@/lib/lang-url"
import { cn } from "@/lib/utils"
import { IBTIKAR_URL, IbtikarLogo } from "./ibtikar-logo"
import { REGISTRATION_URL } from "./register"
import { gsap, prefersReducedMotion, revealTween, ScrollTrigger, useGSAP } from "@/lib/gsap"

export function SiteHeader() {
  const { lang, setLang, page, t, t2024 } = useLang()
  const headerRef = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const isArchive = page === "etc-2024"
  const isStartups = page === "startups"
  const isTicketQr = page === "ticket-qr"
  const homeHref = buildPath(lang, "home")
  const archiveHref = pagePath(lang, "etc-2024")
  const startupsHref = pagePath(lang, "startups")
  const ticketQrHref = pagePath(lang, "ticket-qr")

  const brandHref = isArchive
    ? `${archiveHref}#top`
    : isStartups
      ? `${startupsHref}#top`
      : isTicketQr
        ? `${ticketQrHref}#top`
        : `${homeHref}#top`

  const links = isArchive
    ? [
        { href: "#about", label: t2024.nav.about },
        { href: "#topics", label: t2024.nav.topics },
        { href: "#workshops", label: t2024.nav.workshops },
        { href: "#gallery", label: t2024.nav.gallery },
      ]
    : isStartups
      ? []
      : isTicketQr
        ? []
        : [
          { href: "#about", label: t.nav.about },
          { href: "#topics", label: t.nav.topics },
          { href: "#agenda", label: t.nav.agenda },
          { href: "#workshops", label: t.nav.workshops },
          { href: "#guests", label: t.nav.guests },
          { href: "#faq", label: t.nav.faq },
        ]

  useGSAP(
    () => {
      const scope = headerRef.current
      const animated = ".header-brand,.header-nav-link,.header-action"
      const isVisible = (el: HTMLElement) => window.getComputedStyle(el).display !== "none"
      const actionReveal = revealTween({
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.2,
        ease: "power3.out",
        clearProps: "opacity,transform",
      })

      if (prefersReducedMotion()) {
        gsap.set(animated, { opacity: 1, x: 0, y: 0, clearProps: "opacity,transform" })
        return
      }

      gsap.fromTo(
        ".header-brand",
        { opacity: 0, x: -24 },
        revealTween({ opacity: 1, x: 0, duration: 0.7, ease: "power3.out", clearProps: "opacity,transform" }),
      )
      gsap.fromTo(
        ".header-nav-link",
        { opacity: 0, y: -12 },
        revealTween({
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          delay: 0.15,
          clearProps: "opacity,transform",
        }),
      )

      const visibleActions = gsap.utils
        .toArray<HTMLElement>(".header-action", scope)
        .filter(isVisible)
      if (visibleActions.length) {
        gsap.fromTo(visibleActions, { opacity: 0, x: 20 }, actionReveal)
      }

      const mm = gsap.matchMedia()
      mm.add("(min-width: 640px)", () => {
        const register = scope?.querySelector<HTMLElement>(".header-action-register")
        if (!register || !isVisible(register) || visibleActions.includes(register)) return

        gsap.fromTo(
          register,
          { opacity: 0, x: 20 },
          revealTween({
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.36,
            ease: "power3.out",
            clearProps: "opacity,transform",
          }),
        )
      })

      ScrollTrigger.create({
        start: 60,
        end: 99999,
        onEnter: () => headerRef.current?.classList.add("header-scrolled"),
        onLeaveBack: () => headerRef.current?.classList.remove("header-scrolled"),
      })

      return () => mm.revert()
    },
    { scope: headerRef, dependencies: [lang, page], revertOnUpdate: true },
  )

  return (
    <header
      ref={headerRef}
      className="site-header fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 pt-[env(safe-area-inset-top)] backdrop-blur-xl transition-[background-color,box-shadow,padding] duration-300"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <div className="header-brand flex min-w-0 items-center gap-1.5 sm:gap-3">
          <a
            href={brandHref}
            className="shrink-0 font-heading text-xs font-extrabold leading-none tracking-tight transition-colors hover:text-primary min-[360px]:text-sm sm:text-base"
            aria-label={isArchive ? "ETC 2024" : isStartups ? t.startupBooth.badge : isTicketQr ? t.ticketQr.badge : "ETC 2026"}
          >
            ETC<span className="text-primary">.</span>
            <span className="max-[359px]:hidden"> {isArchive ? "2024" : "2026"}</span>
          </a>
          <span className="h-4 w-px shrink-0 bg-border sm:h-5" aria-hidden />
          <a
            href={IBTIKAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 transition-opacity hover:opacity-80"
            aria-label="Ibtikar Assembly"
          >
            <IbtikarLogo className="h-8 w-auto max-[359px]:max-w-[6.5rem] sm:h-10 sm:max-w-none lg:h-11" />
          </a>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="header-nav-link text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          {isArchive ? (
            <a
              href={homeHref}
              className="header-nav-link text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              {t2024.nav.backTo2026}
            </a>
          ) : isStartups ? (
            <a
              href={homeHref}
              className="header-nav-link text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              {t.startupBooth.backToHome}
            </a>
          ) : isTicketQr ? (
            <a
              href={homeHref}
              className="header-nav-link text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              {t.ticketQr.backToHome}
            </a>
          ) : (
            <a
              href={archiveHref}
              className="header-nav-link text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav.pastEdition}
            </a>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="header-action relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:min-h-0 sm:min-w-0"
              aria-label="Language"
            >
              <Globe className="size-4" />
              <span className="hidden sm:inline">{LANGS.find((l) => l.code === lang)?.label}</span>
            </button>
            {langOpen && (
              <div className="absolute end-0 mt-2 w-36 overflow-hidden rounded-lg border border-border bg-popover py-1 shadow-xl">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code)
                      setLangOpen(false)
                    }}
                    className={cn(
                      "flex w-full items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-secondary",
                      lang === l.code ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {l.label}
                    {lang === l.code && <Check className="size-3.5 text-primary" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {!isArchive && !isStartups && !isTicketQr && (
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header-action header-action-register hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
            >
              {t.nav.register}
            </a>
          )}

          <button
            className="header-action grid min-h-11 min-w-11 place-items-center md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[70dvh] overflow-y-auto border-t border-border/60 bg-background pb-[env(safe-area-inset-bottom)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-11 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            {isArchive ? (
              <a
                href={homeHref}
                onClick={() => setMobileOpen(false)}
                className="min-h-11 py-3 text-sm font-medium text-primary"
              >
                {t2024.nav.backTo2026}
              </a>
            ) : isStartups ? (
              <a
                href={homeHref}
                onClick={() => setMobileOpen(false)}
                className="min-h-11 py-3 text-sm font-medium text-primary"
              >
                {t.startupBooth.backToHome}
              </a>
            ) : isTicketQr ? (
              <a
                href={homeHref}
                onClick={() => setMobileOpen(false)}
                className="min-h-11 py-3 text-sm font-medium text-primary"
              >
                {t.ticketQr.backToHome}
              </a>
            ) : (
              <>
                <a
                  href={archiveHref}
                  onClick={() => setMobileOpen(false)}
                  className="min-h-11 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav.pastEdition}
                </a>
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                >
                  {t.nav.register}
                </a>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
