"use client"

import { useRef, useState } from "react"
import { Menu, X, Globe, Check } from "lucide-react"
import { useLang } from "./lang-provider"
import { LANGS } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { IBTIKAR_URL, IbtikarLogo } from "./ibtikar-logo"
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from "@/lib/gsap"

export function SiteHeader() {
  const { lang, setLang, t } = useLang()
  const headerRef = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#topics", label: t.nav.topics },
    { href: "#agenda", label: t.nav.agenda },
    { href: "#workshops", label: t.nav.workshops },
    { href: "#faq", label: t.nav.faq },
  ]

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from(".header-brand", { opacity: 0, x: -24, duration: 0.7, ease: "power3.out" })
      gsap.from(".header-nav-link", {
        opacity: 0,
        y: -12,
        duration: 0.5,
        stagger: 0.07,
        delay: 0.15,
        ease: "power2.out",
      })
      gsap.from(".header-action", {
        opacity: 0,
        x: 20,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.2,
        ease: "power3.out",
      })

      ScrollTrigger.create({
        start: 60,
        end: 99999,
        onEnter: () => headerRef.current?.classList.add("header-scrolled"),
        onLeaveBack: () => headerRef.current?.classList.remove("header-scrolled"),
      })
    },
    { scope: headerRef, dependencies: [lang], revertOnUpdate: true },
  )

  return (
    <header
      ref={headerRef}
      className="site-header fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl transition-[background-color,box-shadow,padding] duration-300"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="header-brand flex min-w-0 items-center gap-3">
          <a
            href={IBTIKAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 transition-opacity hover:opacity-80"
            aria-label="Ibtikar Assembly"
          >
            <IbtikarLogo className="h-7 w-auto sm:h-8" />
          </a>
          <span className="hidden h-5 w-px bg-border sm:block" aria-hidden />
          <a
            href="#top"
            className="truncate font-heading text-sm font-extrabold tracking-tight transition-colors hover:text-primary sm:text-base"
          >
            ETC<span className="text-primary">.</span> 2026
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
        </nav>

        <div className="flex items-center gap-2">
          <div className="header-action relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
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

          <a
            href="#register"
            className="header-action hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            {t.nav.register}
          </a>

          <button
            className="header-action md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              {t.nav.register}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
