"use client"

import { useRef, useState } from "react"
import {
  MapPin,
  Calendar,
  Users,
  Clock,
  ArrowLeft,
  Link2,
  Gamepad2,
  Bot,
  Dna,
  Wifi,
  ShieldAlert,
  Archive,
  ImageIcon,
} from "lucide-react"
import { useLang } from "@/components/lang-provider"
import { IBTIKAR_URL, IbtikarLogo } from "@/components/ibtikar-logo"
import { PageBackground } from "@/components/page-background"
import { ETC_2024_HERO_IMAGE, ETC_2024_IMAGES, etc2024ImageUrl } from "@/lib/etc-2024-images"
import { buildPath } from "@/lib/lang-url"
import { cn } from "@/lib/utils"
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap"

const topicIcons = [Link2, Gamepad2, Bot, Dna, Wifi, ShieldAlert]

export function Etc2024Page() {
  const { lang, t2024: t } = useLang()
  const h = t.hero
  const sectionRef = useRef<HTMLElement>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  const facts = [
    { icon: MapPin, label: h.city, value: h.cityValue },
    { icon: Calendar, label: h.dates, value: h.datesValue },
    { icon: Users, label: h.attendees, value: h.attendeesValue },
    { icon: Clock, label: h.days, value: h.daysValue },
  ]

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from(".etc24-hero-badge", { opacity: 0, y: -16, duration: 0.5, stagger: 0.08 })
      gsap.from(".etc24-hero-title", { opacity: 0, y: 48, duration: 0.85, stagger: 0.12, delay: 0.1 })
      gsap.from(".etc24-hero-sub", { opacity: 0, y: 20, duration: 0.6, delay: 0.35 })
      gsap.from(".etc24-hero-fact", { opacity: 0, y: 14, duration: 0.45, stagger: 0.06, delay: 0.5 })
    },
    { scope: sectionRef },
  )

  return (
    <>
      <PageBackground />

      <section ref={sectionRef} id="top" className="relative pt-24 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="etc24-hero-badge inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
                  <Archive className="size-3.5" />
                  {h.archived}
                </div>
                <div className="etc24-hero-badge inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground sm:text-sm">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {h.badge}
                </div>
              </div>

              <h1 className="mt-5 font-heading text-[2rem] font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                <span className="etc24-hero-title block">{h.titleTop}</span>
                <span className="etc24-hero-title block bg-gradient-to-l from-violet-400 via-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  {h.titleBottom}
                </span>
              </h1>

              <p className="etc24-hero-sub mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {h.subtitle}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#topics"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {h.viewTopics}
                  <ArrowLeft className="size-4 rtl:rotate-0 ltr:rotate-180" />
                </a>
                <a
                  href="#gallery"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
                >
                  <ImageIcon className="size-4" />
                  {h.viewGallery}
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img
                src={ETC_2024_HERO_IMAGE}
                alt="ETC 2024 conference"
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <a
                href={IBTIKAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 start-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-xs backdrop-blur-sm transition-colors hover:border-primary/40 sm:text-sm"
              >
                <IbtikarLogo variant="square" className="size-5 rounded-sm" />
                <span className="text-muted-foreground">Ibtikar Assembly</span>
              </a>
            </div>
          </div>

          <div className="etc24-hero-facts mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border min-[380px]:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="etc24-hero-fact flex items-center gap-3 bg-card p-3.5 sm:p-4 lg:p-5">
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
      </section>

      <section id="about" className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{t.about.label}</p>
              <h2 className="anim-title section-title mt-4">{t.about.title}</h2>
              <p className="anim-text mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.about.body}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 self-center sm:gap-4">
              {t.about.stats.map((s) => (
                <div
                  key={s.label}
                  className="anim-card rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 sm:p-6"
                >
                  <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="topics" className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{t.topics.label}</p>
            <h2 className="anim-title section-title mt-4">{t.topics.title}</h2>
            <p className="anim-subtitle mt-4 text-base text-muted-foreground sm:text-lg">{t.topics.subtitle}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.topics.items.map((item, i) => {
              const Icon = topicIcons[i % topicIcons.length]
              return (
                <div
                  key={item.title}
                  className="anim-card group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-balance">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="workshops" className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{t.workshops.label}</p>
            <h2 className="anim-title section-title mt-4">{t.workshops.title}</h2>
            <p className="anim-subtitle mt-4 text-base text-muted-foreground sm:text-lg">{t.workshops.subtitle}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.workshops.items.map((item, i) => (
              <div
                key={item.title}
                className="anim-card flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <span className="font-mono text-xs text-primary">#{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-heading text-base font-bold leading-snug text-balance">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{t.gallery.label}</p>
            <h2 className="anim-title section-title mt-4">{t.gallery.title}</h2>
            <p className="anim-subtitle mt-4 text-base text-muted-foreground sm:text-lg">{t.gallery.subtitle}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
            {ETC_2024_IMAGES.map((filename, i) => {
              const src = etc2024ImageUrl(filename)
              return (
                <button
                  key={filename}
                  type="button"
                  onClick={() => setLightbox(src)}
                  className={cn(
                    "anim-card group relative overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50",
                    i === 0 && "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
                  )}
                >
                  <img
                    src={src}
                    alt=""
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/10" />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="anim-panel rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">{t.cta.title}</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{t.cta.subtitle}</p>
            <a
              href={buildPath(lang, "home")}
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.cta.button}
              <ArrowLeft className="size-4 rtl:rotate-0 ltr:rotate-180" />
            </a>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute end-4 top-4 rounded-md border border-border bg-card px-3 py-1.5 text-sm"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}