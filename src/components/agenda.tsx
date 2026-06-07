"use client"

import { useState } from "react"
import { useLang } from "./lang-provider"
import { cn } from "@/lib/utils"

export function Agenda() {
  const { t, lang } = useLang()
  const ag = t.agenda
  const [day, setDay] = useState<1 | 2>(1)
  const lunch = lang === "ar" ? "استراحة الغداء" : lang === "tr" ? "Öğle Arası" : "Lunch Break"

  // Day 1 schedule built from topics + shorts
  const day1: { time: string; title: string; type: string; highlight?: boolean }[] = [
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

  const day2 = t.workshops.sessions.flatMap((s, si) => {
    const times = ["10:30 – 12:00", "12:30 – 14:00", "14:30 – 16:00"]
    return [
      { time: times[si], title: s.name, type: ag.workshops, highlight: true as boolean, header: true },
      ...s.items.map((it) => ({ time: "", title: it.title, type: it.tags?.[0] ?? "", highlight: false, header: false })),
    ]
  })

  const rows = day === 1 ? day1 : (day2 as typeof day1)

  return (
    <section id="agenda" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">{ag.label}</p>
        <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">{ag.title}</h2>

        <div className="mt-8 inline-flex rounded-lg border border-border bg-card p-1">
          {[1, 2].map((d) => (
            <button
              key={d}
              onClick={() => setDay(d as 1 | 2)}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                day === d ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {d === 1 ? ag.day1 : ag.day2}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{day === 1 ? ag.day1date : ag.day2date}</p>

        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-[140px_1fr_auto] gap-4 border-b border-border bg-card/60 px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:px-6">
            <span>{ag.time}</span>
            <span>{ag.session}</span>
            <span className="text-end">{ag.speaker}</span>
          </div>
          {rows.map((row, i) => {
            const isHeader = "header" in row && (row as { header?: boolean }).header
            return (
              <div
                key={i}
                className={cn(
                  "grid grid-cols-[140px_1fr_auto] items-center gap-4 px-4 py-4 text-sm sm:px-6",
                  i !== rows.length - 1 && "border-b border-border",
                  isHeader ? "bg-primary/5" : row.highlight ? "bg-secondary/40" : "bg-card/30",
                )}
              >
                <span className="font-mono text-xs text-muted-foreground">{row.time}</span>
                <span className={cn("font-medium", isHeader && "font-heading font-bold text-primary")}>
                  {row.title}
                </span>
                <span className="text-end font-mono text-[11px] text-muted-foreground">{row.type}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
