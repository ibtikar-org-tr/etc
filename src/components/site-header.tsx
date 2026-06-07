"use client"

import { useState } from "react"
import { Menu, X, Globe, Check } from "lucide-react"
import { useLang } from "./lang-provider"
import { LANGS } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { lang, setLang, t } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#topics", label: t.nav.topics },
    { href: "#agenda", label: t.nav.agenda },
    { href: "#workshops", label: t.nav.workshops },
    { href: "#faq", label: t.nav.faq },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-heading text-lg font-extrabold tracking-tight">
          <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <span className="text-sm font-black">إ</span>
          </span>
          <span>
            ETC<span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
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
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            {t.nav.register}
          </a>

          <button
            className="md:hidden"
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
