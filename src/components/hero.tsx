"use client"

import { MapPin, Calendar, Users, Clock, ArrowLeft } from "lucide-react"
import { useLang } from "./lang-provider"

export function Hero() {
  const { t } = useLang()
  const h = t.hero

  const facts = [
    { icon: MapPin, label: h.city, value: h.cityValue },
    { icon: Calendar, label: h.dates, value: h.datesValue },
    { icon: Users, label: h.attendees, value: h.attendeesValue },
    { icon: Clock, label: h.days, value: h.daysValue },
  ]

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-44">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
          <span className="size-1.5 rounded-full bg-primary" />
          {h.badge}
        </div>

        <h1 className="mt-6 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {h.titleTop}
          <br />
          <span className="text-primary">{h.titleBottom}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {h.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {h.register}
            <ArrowLeft className="size-4 rtl:rotate-0 ltr:rotate-180" />
          </a>
          <a
            href="#agenda"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
          >
            {h.viewAgenda}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex items-center gap-3 bg-card p-4 lg:p-5">
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
