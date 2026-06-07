"use client"

import { useRef, useState } from "react"
import { useLang } from "./lang-provider"
import { cn } from "@/lib/utils"
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap"

type AgendaRow = {
  time: string
  title: string
  type: string
  highlight?: boolean
  header?: boolean
}

export function Agenda() {
  const { t, lang } = useLang()
  const ag = t.agenda
  const [day, setDay] = useState<1 | 2>(1)
  const tableRef = useRef<HTMLDivElement>(null)
  const lunch = lang === "ar" ? "استراحة الغداء" : lang === "tr" ? "Öğle Arası" : "Lunch Break"

  const day1: AgendaRow[] = [
    { time: "10:30 – 10:45", title: t.shorts.items[0].title, type: "—", highlight: true },
    { time: "10:45 – 11:30", title: t.topics.items[0].title, type: ag.lectures },
    { time: "11:30 – 11:45", title: t.shorts.items[1].title, type: "—", highlight: true },
    { time: "11:45 – 12:30", title: t.topics.items[1].title, type: ag.lectures },
    { time: "12:30 – 13:15", title: t.topics.items[2].title, type: ag.lectures },
    { time: "13:15 – 14:15", title: lunch, type: "—", highlight: true },
    { time: "14:15 – 15:00", title: t.topics.items[3].title, type: ag.lectures },
    { time: "15:00 – 15:25", title: t.shorts.items[3].title, type: "—", highlight: true },
    { time: "15:25 – 16:10", title: t.topics.items[4].title, type: ag.lectures },
    { time: "16:10 – 16:25", title: t.shorts.items[4].title, type: "—", highlight: true },
    { time: "16:25 – 17:10", title: t.topics.items[5].title, type: ag.lectures },
    { time: "17:10 – 18:00", title: t.shorts.items[2].title, type: "—", highlight: true },
  ]

  const day2: AgendaRow[] = t.workshops.sessions.flatMap((s, si) => {
    const times = ["10:30 – 12:00", "12:30 – 14:00", "14:30 – 16:00"]
    return [
      { time: times[si], title: s.name, type: ag.workshops, highlight: true, header: true },
      ...s.items.map((it) => ({
        time: "",
        title: it.title,
        type: it.tags?.[0] ?? "",
        highlight: false,
        header: false,
      })),
    ]
  })

  const rows = day === 1 ? day1 : day2

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.fromTo(
        ".agenda-row",
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.45, stagger: 0.035, ease: "power2.out" },
      )
    },
    { scope: tableRef, dependencies: [day, lang], revertOnUpdate: true },
  )

  return (
    <section id="agenda" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{ag.label}</p>
        <h2 className="anim-title section-title mt-4">{ag.title}</h2>

        <div className="anim-subtitle mt-6 flex w-full max-w-md rounded-lg border border-border bg-card p-1 sm:mt-8 sm:inline-flex sm:w-auto">
          {[1, 2].map((d) => (
            <button
              key={d}
              onClick={() => setDay(d as 1 | 2)}
              className={cn(
                "min-h-11 flex-1 rounded-md px-3 py-2.5 text-sm font-medium transition-colors sm:flex-none sm:px-4",
                day === d ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {d === 1 ? ag.day1 : ag.day2}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{day === 1 ? ag.day1date : ag.day2date}</p>

        <div ref={tableRef} className="anim-panel mt-6 overflow-hidden rounded-xl border border-border sm:mt-8">
          <div className="hidden grid-cols-[minmax(7rem,140px)_1fr_auto] gap-4 border-b border-border bg-card/60 px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:grid sm:px-6">
            <span>{ag.time}</span>
            <span>{ag.session}</span>
            <span className="text-end">{ag.speaker}</span>
          </div>

          {rows.map((row, i) => {
            const isHeader = row.header
            const showType = row.type && row.type !== "—"

            return (
              <div
                key={i}
                className={cn(
                  "agenda-row border-border px-4 py-4 sm:grid sm:grid-cols-[minmax(7rem,140px)_1fr_auto] sm:items-center sm:gap-4 sm:px-6 sm:py-4",
                  i !== rows.length - 1 && "border-b",
                  isHeader ? "bg-primary/5" : row.highlight ? "bg-secondary/40" : "bg-card/30",
                )}
              >
                <span
                  className={cn(
                    "block font-mono text-xs",
                    row.time ? "text-primary sm:text-muted-foreground" : "hidden sm:block",
                  )}
                >
                  {row.time || "—"}
                </span>

                <div className="min-w-0 sm:contents">
                  <span
                    className={cn(
                      "block text-sm leading-snug font-medium sm:col-start-2",
                      isHeader && "font-heading text-base font-bold text-primary sm:text-sm",
                    )}
                  >
                    {row.title}
                  </span>

                  {showType && (
                    <span className="mt-2 inline-block rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground sm:mt-0 sm:col-start-3 sm:bg-transparent sm:px-0 sm:py-0 sm:text-end sm:text-[11px]">
                      {row.type}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
