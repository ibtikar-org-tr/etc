"use client"

import { useRef, type ReactNode } from "react"
import { useLang } from "./lang-provider"
import { PageBackground } from "./page-background"
import { gsap, prefersReducedMotion, revealTween, ScrollTrigger, useGSAP } from "@/lib/gsap"

export function SiteAnimations({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const { lang } = useLang()

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.set(".anim-label", { opacity: 0, y: 18 })
      ScrollTrigger.batch(".anim-label", {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(
            batch,
            revealTween({ opacity: 1, y: 0, duration: 0.65, stagger: 0.06 }),
          ),
      })

      gsap.set(".anim-title", { opacity: 0, y: 44 })
      ScrollTrigger.batch(".anim-title", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(
            batch,
            revealTween({ opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" }),
          ),
      })

      gsap.set(".anim-subtitle", { opacity: 0, y: 28 })
      ScrollTrigger.batch(".anim-subtitle", {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(
            batch,
            revealTween({ opacity: 1, y: 0, duration: 0.75, stagger: 0.08 }),
          ),
      })

      gsap.set(".anim-text", { opacity: 0, y: 24 })
      ScrollTrigger.batch(".anim-text", {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(
            batch,
            revealTween({ opacity: 1, y: 0, duration: 0.8, stagger: 0.06 }),
          ),
      })

      gsap.set(".anim-card", { opacity: 0, y: 48, scale: 0.94 })
      ScrollTrigger.batch(".anim-card", {
        start: "top 93%",
        once: true,
        interval: 0.08,
        batchMax: 5,
        onEnter: (batch) =>
          gsap.to(
            batch,
            revealTween({ opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.09 }),
          ),
      })

      gsap.set(".anim-row", { opacity: 0, x: -16 })
      ScrollTrigger.batch(".anim-row", {
        start: "top 95%",
        once: true,
        interval: 0.05,
        batchMax: 8,
        onEnter: (batch) =>
          gsap.to(
            batch,
            revealTween({ opacity: 1, x: 0, duration: 0.55, stagger: 0.04 }),
          ),
      })

      gsap.set(".anim-panel", { opacity: 0, scale: 0.96, y: 32 })
      ScrollTrigger.batch(".anim-panel", {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(
            batch,
            revealTween({ opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" }),
          ),
      })

      gsap.set(".anim-footer-col", { opacity: 0, y: 24 })
      ScrollTrigger.batch(".anim-footer-col", {
        start: "top 94%",
        once: true,
        onEnter: (batch) =>
          gsap.to(
            batch,
            revealTween({ opacity: 1, y: 0, duration: 0.7, stagger: 0.12 }),
          ),
      })

      ScrollTrigger.refresh()
    },
    { scope: rootRef, dependencies: [lang], revertOnUpdate: true },
  )

  return (
    <div ref={rootRef} className="site-root relative isolate">
      <PageBackground />
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
