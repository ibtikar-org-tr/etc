"use client"

import { useRef } from "react"
import { MapPin, Calendar, Clock, ArrowLeft } from "lucide-react"
import { useLang } from "./lang-provider"
import { IBTIKAR_URL, IbtikarLogo } from "./ibtikar-logo"
import { HeroBackground } from "./hero-background"
import { REGISTRATION_URL } from "./register"
import { gsap, prefersReducedMotion, revealTween, useGSAP } from "@/lib/gsap"

export function Hero() {
  const { t } = useLang()
  const h = t.hero
  const sectionRef = useRef<HTMLElement>(null)
  const factsRef = useRef<HTMLDivElement>(null)

  const facts = [
    { icon: MapPin, label: h.city, value: h.cityValue },
    { icon: Calendar, label: h.dates, value: h.datesValue },
    { icon: Clock, label: h.days, value: h.daysValue },
  ]

  useGSAP(
    () => {
      const factsEl = factsRef.current
      if (!factsEl) return

      const heroEls =
        ".hero-badge,.hero-title-line,.hero-subtitle,.hero-cta,.hero-fact"

      if (prefersReducedMotion()) {
        gsap.set([factsEl, heroEls], { autoAlpha: 1, opacity: 1, y: 0, clearProps: "transform" })
        return
      }

      gsap.set(".hero-badge", { opacity: 0, y: -20 })
      gsap.set(".hero-title-line", { opacity: 0, y: 72 })
      gsap.set(".hero-subtitle", { opacity: 0, y: 28 })
      gsap.set(".hero-cta", { opacity: 0, y: 22 })
      gsap.set(factsEl, { autoAlpha: 0, y: 28 })
      gsap.set(".hero-fact", { opacity: 0, y: 12 })

      const show = (vars: gsap.TweenVars = {}) =>
        revealTween({ opacity: 1, y: 0, overwrite: false, ...vars })

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.to(".hero-badge", show({ duration: 0.55, stagger: 0.1 }))
        .to(
          ".hero-title-line",
          show({ duration: 1, stagger: 0.14 }),
          "-=0.25",
        )
        .to(".hero-subtitle", show({ duration: 0.75 }), "-=0.4")
        .to(".hero-cta", show({ duration: 0.55, stagger: 0.1 }), "-=0.45")
        .to(factsEl, show({ autoAlpha: 1, duration: 0.7 }), "-=0.15")
        .to(".hero-fact", show({ duration: 0.4, stagger: 0.06 }), "-=0.4")

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

      <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
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

        <h1 className="mt-5 max-w-4xl font-heading text-[2rem] font-extrabold leading-[1.08] tracking-tight text-balance sm:mt-6 sm:text-5xl lg:text-7xl">
          <span className="hero-title-line block">{h.titleTop}</span>
          <span className="hero-title-line block bg-gradient-to-l from-violet-400 via-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
            {h.titleBottom}
          </span>
        </h1>

        <p className="hero-subtitle mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
          {h.subtitle}
        </p>

        <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            {h.register}
            <ArrowLeft className="size-4 rtl:rotate-0 ltr:rotate-180" />
          </a>
          <a
            href="#agenda"
            className="hero-cta inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card sm:w-auto"
          >
            {h.viewAgenda}
          </a>
        </div>

        <div ref={factsRef} className="hero-facts mt-10 lg:mt-14">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border min-[380px]:grid-cols-3 lg:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label} className="hero-fact flex items-center gap-3 bg-card p-3.5 sm:p-4 lg:p-5">
              <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary sm:size-10">
                <f.icon className="size-4 sm:size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{f.label}</div>
                <div className="text-sm font-semibold leading-snug text-balance">{f.value}</div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
