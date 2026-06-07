"use client"

import { useRef } from "react"
import { MapPin, Calendar, Users, Clock, ArrowLeft } from "lucide-react"
import { useLang } from "./lang-provider"
import { IBTIKAR_URL, IbtikarLogo } from "./ibtikar-logo"
import { HeroBackground } from "./hero-background"
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap"

export function Hero() {
  const { t } = useLang()
  const h = t.hero
  const sectionRef = useRef<HTMLElement>(null)
  const factsRef = useRef<HTMLDivElement>(null)

  const facts = [
    { icon: MapPin, label: h.city, value: h.cityValue },
    { icon: Calendar, label: h.dates, value: h.datesValue },
    { icon: Users, label: h.attendees, value: h.attendeesValue },
    { icon: Clock, label: h.days, value: h.daysValue },
  ]

  useGSAP(
    () => {
      const factsEl = factsRef.current
      if (!factsEl) return

      if (prefersReducedMotion()) {
        gsap.set(factsEl, { autoAlpha: 1, y: 0 })
        return
      }

      gsap.set(factsEl, { autoAlpha: 0, y: 28 })

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.55, stagger: 0.1 })
        .from(
          ".hero-title-line",
          { opacity: 0, y: 72, duration: 1, stagger: 0.14, ease: "power3.out" },
          "-=0.25",
        )
        .from(".hero-subtitle", { opacity: 0, y: 28, duration: 0.75 }, "-=0.4")
        .from(".hero-cta", { opacity: 0, y: 22, duration: 0.55, stagger: 0.1 }, "-=0.45")
        .to(factsEl, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.15")
        .from(".hero-fact", { opacity: 0, y: 12, duration: 0.4, stagger: 0.06 }, "-=0.4")

      gsap.to(".hero-video-wrap video", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      id="top"
      className="hero-section relative flex min-h-screen flex-col overflow-visible"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-44">
        <div className="flex flex-wrap items-center gap-3">
          <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
            <span className="size-1.5 rounded-full bg-primary" />
            {h.badge}
          </div>
          <a
            href={IBTIKAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-badge inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:text-sm"
          >
            <IbtikarLogo variant="square" className="size-5 rounded-sm" />
            {h.organizer}
          </a>
        </div>

        <h1 className="mt-6 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          <span className="hero-title-line block">{h.titleTop}</span>
          <span className="hero-title-line block text-primary">{h.titleBottom}</span>
        </h1>

        <p className="hero-subtitle mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {h.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#register"
            className="hero-cta inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {h.register}
            <ArrowLeft className="size-4 rtl:rotate-0 ltr:rotate-180" />
          </a>
          <a
            href="#agenda"
            className="hero-cta inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
          >
            {h.viewAgenda}
          </a>
        </div>

        <div
          ref={factsRef}
          className="hero-facts mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4"
        >
          {facts.map((f) => (
            <div key={f.label} className="hero-fact flex items-center gap-3 bg-card p-4 lg:p-5">
              <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{f.label}</div>
                <div className="truncate text-sm font-semibold">{f.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
