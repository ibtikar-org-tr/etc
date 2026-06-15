"use client"

import { ArrowLeft } from "lucide-react"
import { useLang } from "./lang-provider"
import { IBTIKAR_URL, IbtikarLogo } from "./ibtikar-logo"
import { ETC_2024_HERO_IMAGE } from "@/lib/etc-2024-images"
import { pagePath } from "@/lib/lang-url"

export function About() {
  const { lang, t } = useLang()
  const a = t.about

  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="anim-label font-mono text-xs uppercase tracking-widest text-primary">{a.label}</p>
            <h2 className="anim-title section-title mt-4">
              {a.title}
            </h2>
            <p className="anim-text mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{a.body}</p>

            <div className="anim-card mt-8 rounded-xl border border-border bg-card/50 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <IbtikarLogo variant="square" className="size-12 shrink-0 rounded-lg" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{a.organizerLabel}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{a.organizerBody}</p>
                  <a
                    href={IBTIKAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-primary transition-colors hover:underline"
                  >
                    {a.organizerLink} →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 self-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {a.stats.map((s) => (
                <div
                  key={s.label}
                  className="anim-card rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 sm:p-6"
                >
                  <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href={pagePath(lang, "etc-2024")}
              className="anim-card group flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/40 sm:p-5"
            >
              <img
                src={ETC_2024_HERO_IMAGE}
                alt={
                  lang === "ar"
                    ? "صورة من مؤتمر التّقنيّات الصّاعدة 2024"
                    : lang === "tr"
                      ? "ETC 2024 konferansından fotoğraf"
                      : "Photo from ETC 2024 conference"
                }
                className="size-16 shrink-0 rounded-lg object-cover sm:size-20"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{a.pastEditionLabel}</p>
                <p className="mt-1 font-heading text-sm font-bold sm:text-base">{a.pastEditionTitle}</p>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground sm:text-sm">{a.pastEditionBody}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary sm:text-sm">
                  {a.pastEditionLink}
                  <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5 rtl:rotate-0 ltr:rotate-180" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
