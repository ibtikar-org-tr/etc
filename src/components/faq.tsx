"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { useLang } from "./lang-provider"
import { cn } from "@/lib/utils"

export function Faq() {
  const { t } = useLang()
  const f = t.faq
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{f.label}</p>
          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">{f.title}</h2>
        </div>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border">
          {f.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
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
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
