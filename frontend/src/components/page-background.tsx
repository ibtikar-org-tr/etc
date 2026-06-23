"use client"

import { useRef } from "react"
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap"

export function PageBackground() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root || prefersReducedMotion()) return

      gsap.to(".page-bg-grid", {
        backgroundPosition: "48px 48px",
        duration: 24,
        repeat: -1,
        ease: "none",
      })

      gsap.to(".page-bg-circuit", {
        x: 36,
        y: 24,
        duration: 28,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      gsap.to(".page-bg-orb", {
        x: "random(-30, 30)",
        y: "random(-20, 20)",
        duration: "random(12, 18)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 2, from: "random" },
      })

      gsap.to(".page-bg-node", {
        opacity: 0.9,
        scale: 1.4,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.35, from: "random" },
      })

      gsap.fromTo(
        ".page-bg-scan",
        { y: "-10%" },
        { y: "110%", duration: 9, repeat: -1, ease: "none" },
      )

      gsap.to(".page-bg-mesh", {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      })

      gsap.to(".page-bg-drift", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "max",
          scrub: 0.8,
        },
      })
    },
    { scope: rootRef },
  )

  return (
    <div
      ref={rootRef}
      className="page-bg pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="page-bg-drift absolute inset-0">
        <div className="page-bg-grid absolute inset-0 opacity-[0.6]" />

        <svg
          className="page-bg-circuit absolute inset-[-20%] h-[140%] w-[140%] text-primary opacity-[0.28]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="pcb-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M80 0H0V80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
                opacity="0.5"
              />
              <circle cx="0" cy="0" r="1.2" fill="currentColor" className="page-bg-node" opacity="0.4" />
              <circle cx="40" cy="40" r="1" fill="currentColor" className="page-bg-node" opacity="0.25" />
              <path
                d="M0 40 H24 M56 40 H80 M40 0 V24 M40 56 V80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.35"
              />
            </pattern>
            <pattern id="pcb-traces" width="160" height="160" patternUnits="userSpaceOnUse">
              <path
                d="M20 20 H100 V60 H140 M20 100 H60 V140 H120"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.3"
              />
              <circle cx="100" cy="60" r="2" fill="currentColor" className="page-bg-node" opacity="0.5" />
              <circle cx="60" cy="140" r="1.5" fill="currentColor" className="page-bg-node" opacity="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pcb-grid)" />
          <rect width="100%" height="100%" fill="url(#pcb-traces)" />
        </svg>

        <div className="page-bg-mesh absolute top-1/4 left-1/2 hidden size-[900px] -translate-x-1/2 rounded-full border border-primary/25 opacity-55 sm:block" />
        <div className="page-bg-mesh absolute top-2/3 right-0 hidden size-[600px] translate-x-1/3 rounded-full border border-primary/15 opacity-45 sm:block" />

        <div className="page-bg-orb absolute top-[12%] left-[8%] size-48 rounded-full bg-primary/20 blur-[80px] sm:size-72 sm:blur-[100px]" />
        <div className="page-bg-orb absolute top-[45%] right-[6%] size-56 rounded-full bg-primary/16 blur-[90px] sm:size-96 sm:blur-[120px]" />
        <div className="page-bg-orb absolute bottom-[10%] left-[30%] size-52 rounded-full bg-primary/14 blur-[70px] sm:size-80 sm:blur-[90px]" />

        <div className="page-bg-scan absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/20" />
    </div>
  )
}
