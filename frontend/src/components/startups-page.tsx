"use client"

import { useRef } from "react"
import { ArrowLeft, Building2, ExternalLink } from "lucide-react"
import { useLang } from "./lang-provider"
import { STARTUP_BOOTH_URL } from "./startup-booth"
import { buildPath } from "@/lib/lang-url"
import { gsap, prefersReducedMotion, revealTween, useGSAP } from "@/lib/gsap"

export function StartupsPage() {
  const { lang, t } = useLang()
  const c = t.startupBooth
  const sectionRef = useRef<HTMLElement>(null)
  const homeHref = buildPath(lang, "home")

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from(".startups-hero-el", revealTween({ opacity: 0, y: 24, duration: 0.6, stagger: 0.1, ease: "power3.out" }))
    },
    { scope: sectionRef },
  )

  const buttonClass =
    "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/15 sm:w-auto"

  return (
    <section ref={sectionRef} id="top" className="relative pt-24 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <a
          href={homeHref}
          className="startups-hero-el inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 rtl:rotate-0 ltr:rotate-180" />
          {c.backToHome}
        </a>

        <div className="startups-hero-el mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
          <Building2 className="size-3.5" />
          {c.badge}
        </div>

        <h1 className="startups-hero-el mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {c.title}
        </h1>

        <p className="startups-hero-el mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {c.subtitle}
        </p>

        <p className="startups-hero-el mt-4 text-sm text-muted-foreground sm:text-base">{c.applyVia}</p>

        <p className="startups-hero-el mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          {c.note}
        </p>

        <div className="startups-hero-el mt-10">
          <a href={STARTUP_BOOTH_URL} target="_blank" rel="noopener noreferrer" className={buttonClass}>
            {c.button}
            <ExternalLink className="size-4" />
          </a>
        </div>

        <p className="startups-hero-el mt-8 text-sm text-muted-foreground">{c.disclaimer}</p>
      </div>
    </section>
  )
}
