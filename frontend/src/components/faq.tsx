"use client"

import { useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"
import { useLang } from "./lang-provider"
import { cn } from "@/lib/utils"
import { gsap, prefersReducedMotion, revealTween } from "@/lib/gsap"

export function Faq() {
  const { t } = useLang()
  const f = t.faq
  const [open, setOpen] = useState<number | null>(0)
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggle = (i: number) => {
    const next = open === i ? null : i
    if (!prefersReducedMotion() && next !== null) {
      const el = answerRefs.current[next]
      if (el) {
        gsap.fromTo(el, { opacity: 0, y: 8 }, revealTween({ opacity: 1, y: 0, duration: 0.35 }))
      }
    }
    setOpen(next)
  }

  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{f.label}</p>
          <h2 className="anim-title section-title mt-4">{f.title}</h2>
        </div>

        <div className="anim-panel mt-10">
          <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
          {f.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="anim-row bg-card">
                <button
                  onClick={() => toggle(i)}
                  className="flex min-h-11 w-full items-center justify-between gap-4 px-4 py-4 text-start sm:px-5"
                >
                  <span className="font-medium">{item.q}</span>
                  {isOpen ? (
                    <Minus className="size-4 shrink-0 text-primary" />
                  ) : (
                    <Plus className="size-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p
                      ref={(el) => {
                        answerRefs.current[i] = el
                      }}
                      className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground"
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
