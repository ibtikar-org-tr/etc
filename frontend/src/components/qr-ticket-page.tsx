"use client"

import { useRef, useState, type FormEvent } from "react"
import { ArrowLeft, Download, QrCode, RotateCcw, Ticket } from "lucide-react"
import { useLang } from "./lang-provider"
import { buildPath } from "@/lib/lang-url"
import { retrieveTicketQr, TicketQrError, type TicketQrResult } from "@/lib/retrieve-ticket-qr"
import { Button } from "@/components/ui/button"
import { gsap, prefersReducedMotion, revealTween, useGSAP } from "@/lib/gsap"

export function QrTicketPage() {
  const { lang, t } = useLang()
  const c = t.ticketQr
  const sectionRef = useRef<HTMLElement>(null)
  const homeHref = buildPath(lang, "home")

  const [lookup, setLookup] = useState("")
  const [fieldError, setFieldError] = useState<string | null>(null)
  const [requestError, setRequestError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<TicketQrResult | null>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from(".qr-ticket-el", revealTween({ opacity: 0, y: 24, duration: 0.6, stagger: 0.1, ease: "power3.out" }))
    },
    { scope: sectionRef },
  )

  function mapError(code: TicketQrError["code"]) {
    if (code === "not_found") return c.errors.notFound
    if (code === "not_approved") return c.errors.notApproved
    if (code === "not_available") return c.errors.notAvailable
    return c.errors.generic
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFieldError(null)
    setRequestError(null)

    const trimmed = lookup.trim()
    if (!trimmed) {
      setFieldError(c.errors.identifierRequired)
      return
    }
    const isEmail = trimmed.includes('@')
    if (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setFieldError(c.errors.identifierInvalid)
      return
    }
    if (!isEmail && !/^[A-Za-z0-9-]+$/.test(trimmed)) {
      setFieldError(c.errors.identifierInvalid)
      return
    }

    setLoading(true)
    try {
      const ticket = await retrieveTicketQr(trimmed)
      setResult(ticket)
    } catch (error) {
      if (error instanceof TicketQrError) {
        setRequestError(mapError(error.code))
      } else {
        setRequestError(c.errors.generic)
      }
    } finally {
      setLoading(false)
    }
  }

  function resetLookup() {
    setResult(null)
    setRequestError(null)
    setFieldError(null)
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-3 focus:ring-primary/20"

  return (
    <section ref={sectionRef} id="top" className="relative pt-24 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-lg px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <a
          href={homeHref}
          className="qr-ticket-el inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 rtl:rotate-0 ltr:rotate-180" />
          {c.backToHome}
        </a>

        <div className="qr-ticket-el mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
          <Ticket className="size-3.5" />
          {c.badge}
        </div>

        <h1 className="qr-ticket-el mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
          {c.title}
        </h1>

        <p className="qr-ticket-el mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{c.subtitle}</p>

        <p className="qr-ticket-el mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          {c.note}
        </p>

        {result ? (
          <div className="qr-ticket-el mt-10 overflow-hidden rounded-2xl border border-primary/30 bg-card">
            <div className="border-b border-border/80 bg-primary/5 px-5 py-4 sm:px-6">
              <h2 className="font-heading text-lg font-bold">{c.successTitle}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{c.successHint}</p>
            </div>

            <div className="flex flex-col items-center px-5 py-8 sm:px-6">
              <div className="grid size-52 place-items-center rounded-xl border border-border bg-white p-3 sm:size-56">
                <img
                  src={result.qrCodeDataUrl}
                  alt={c.qrAlt}
                  className="size-full object-contain"
                  width={200}
                  height={200}
                />
              </div>

              <dl className="mt-6 w-full space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-3">
                  <dt className="text-muted-foreground">{c.attendeeLabel}</dt>
                  <dd className="text-end font-medium">{result.attendeeName}</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">{c.ticketTypeLabel}</dt>
                  <dd className="text-end font-medium">{result.ticketLabel}</dd>
                </div>
              </dl>

              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
                <a
                  href={result.qrCodeDataUrl}
                  download={`etc-2026-ticket-${result.registrationId}.png`}
                  className="inline-flex flex-1"
                >
                  <Button type="button" className="w-full gap-2" size="lg">
                    <Download className="size-4" />
                    {c.download}
                  </Button>
                </a>
                <Button type="button" variant="outline" className="flex-1 gap-2" size="lg" onClick={resetLookup}>
                  <RotateCcw className="size-4" />
                  {c.tryAnother}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="qr-ticket-el mt-10 space-y-5" noValidate>
            <div>
              <label htmlFor="ticket-lookup" className="mb-2 block text-sm font-medium">
                {c.identifierLabel}
              </label>
              <input
                id="ticket-lookup"
                name="lookup"
                type="text"
                autoComplete="username"
                placeholder={c.identifierPlaceholder}
                value={lookup}
                onChange={(event) => {
                  setLookup(event.target.value)
                  setFieldError(null)
                  setRequestError(null)
                }}
                className={inputClass}
                aria-invalid={Boolean(fieldError)}
                disabled={loading}
              />
              {fieldError && (
                <p className="mt-2 text-sm text-destructive" role="alert">
                  {fieldError}
                </p>
              )}
            </div>

            {requestError && (
              <div
                className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                role="alert"
              >
                <QrCode className="mt-0.5 size-4 shrink-0" />
                <p>{requestError}</p>
              </div>
            )}

            <Button type="submit" className="w-full gap-2" size="lg" disabled={loading}>
              <QrCode className="size-4" />
              {loading ? c.loading : c.submit}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
