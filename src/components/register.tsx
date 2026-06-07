"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { useLang } from "./lang-provider"

export function Register() {
  const { t, lang } = useLang()
  const c = t.cta
  const [submitted, setSubmitted] = useState(false)

  const ph =
    lang === "ar"
      ? { name: "الاسم الكامل", email: "البريد الإلكتروني", uni: "الجامعة" }
      : lang === "tr"
        ? { name: "Ad Soyad", email: "E-posta", uni: "Üniversite" }
        : { name: "Full name", email: "Email address", uni: "University" }

  return (
    <section id="register" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="anim-panel relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -end-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-balance sm:text-4xl">{c.title}</h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">{c.subtitle}</p>
              <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                {c.note}
              </p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background/50 p-10 text-center">
                <CheckCircle2 className="size-12 text-primary" />
                <p className="mt-4 font-heading text-lg font-bold">
                  {lang === "ar" ? "تمّ التسجيل بنجاح!" : lang === "tr" ? "Kayıt başarılı!" : "You're registered!"}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {lang === "ar"
                    ? "سنرسل لك التفاصيل عبر البريد."
                    : lang === "tr"
                      ? "Detayları e-posta ile göndereceğiz."
                      : "We'll email you the details."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-3"
              >
                <input
                  required
                  placeholder={ph.name}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
                <input
                  required
                  type="email"
                  placeholder={ph.email}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
                <input
                  placeholder={ph.uni}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {c.button}
                  <ArrowLeft className="size-4 ltr:rotate-180" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
