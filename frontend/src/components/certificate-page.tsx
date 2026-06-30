"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import { ArrowLeft, Award, Download, RotateCcw } from "lucide-react"
import { useLang } from "./lang-provider"
import { buildPath } from "@/lib/lang-url"
import {
  CertificateError,
  downloadCertificatePdf,
  openCertificatePdf,
  revokeCertificateObjectUrl,
  type CertificateLookupOption,
  type CertificateResult,
  retrieveCertificate,
} from "@/lib/retrieve-certificate"
import { Button } from "@/components/ui/button"
import { gsap, prefersReducedMotion, revealTween, useGSAP } from "@/lib/gsap"

export function CertificatePage() {
  const { lang, t } = useLang()
  const c = t.certificate
  const sectionRef = useRef<HTMLElement>(null)
  const homeHref = buildPath(lang)

  const [lookupOption, setLookupOption] = useState<CertificateLookupOption | "">("")
  const [emailValue, setEmailValue] = useState("")
  const [membershipNumberValue, setMembershipNumberValue] = useState("")
  const [showSelectionError, setShowSelectionError] = useState(false)
  const [showValueError, setShowValueError] = useState(false)
  const [requestError, setRequestError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<CertificateResult | null>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from(".certificate-el", revealTween({ opacity: 0, y: 24, duration: 0.6, stagger: 0.1, ease: "power3.out" }))
    },
    { scope: sectionRef },
  )

  useEffect(() => {
    return () => {
      if (result?.pdfObjectUrl) revokeCertificateObjectUrl(result.pdfObjectUrl)
    }
  }, [result?.pdfObjectUrl])

  function mapError(code: CertificateError["code"]) {
    if (code === "not_found") return c.errors.notFound
    if (code === "not_attended") return c.errors.notAttended
    if (code === "not_available") return c.errors.notAvailable
    return c.errors.generic
  }

  function resetErrors() {
    setShowSelectionError(false)
    setShowValueError(false)
    setRequestError(null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    resetErrors()

    if (!lookupOption) {
      setShowSelectionError(true)
      return
    }

    const isEmailValid = emailValue.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue.trim())
    const isMembershipValid = membershipNumberValue.trim().length > 0

    const hasValidValueByOption =
      (lookupOption === "email" && isEmailValid) || (lookupOption === "membershipNumber" && isMembershipValid)

    if (!hasValidValueByOption) {
      setShowValueError(true)
      return
    }

    const lookup =
      lookupOption === "email"
        ? ({ type: "email", value: emailValue.trim() } as const)
        : ({ type: "membershipNumber", value: membershipNumberValue.trim() } as const)

    setLoading(true)
    try {
      const certificate = await retrieveCertificate(lookup)
      setResult((previous) => {
        if (previous?.pdfObjectUrl) revokeCertificateObjectUrl(previous.pdfObjectUrl)
        return certificate
      })
    } catch (error) {
      if (error instanceof CertificateError) {
        setRequestError(mapError(error.code))
      } else {
        setRequestError(c.errors.generic)
      }
    } finally {
      setLoading(false)
    }
  }

  function resetLookup() {
    setResult((previous) => {
      if (previous?.pdfObjectUrl) revokeCertificateObjectUrl(previous.pdfObjectUrl)
      return null
    })
    resetErrors()
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-3 focus:ring-primary/20"

  const selectClass =
    "w-full rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50 focus:ring-3 focus:ring-primary/20"

  const actionButtonClass =
    "h-auto min-h-11 w-full gap-2 py-3 whitespace-normal text-center leading-snug"

  return (
    <section ref={sectionRef} id="top" className="relative pt-24 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-lg px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <a
          href={homeHref}
          className="certificate-el inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 rtl:rotate-0 ltr:rotate-180" />
          {c.backToHome}
        </a>

        <div className="certificate-el mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
          <Award className="size-3.5" />
          {c.badge}
        </div>

        <h1 className="certificate-el mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
          {c.title}
        </h1>

        <p className="certificate-el mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{c.subtitle}</p>

        <p className="certificate-el mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          {c.note}
        </p>

        {result ? (
          <div className="certificate-el mt-10 overflow-hidden rounded-2xl border border-primary/30 bg-card">
            <div className="border-b border-border/80 bg-primary/5 px-5 py-4 sm:px-6">
              <h2 className="font-heading text-lg font-bold">{c.successTitle}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{c.successHint}</p>
            </div>

            <div className="flex flex-col items-center px-5 py-8 sm:px-6">
              <button
                type="button"
                onClick={() => openCertificatePdf(result.pdfObjectUrl)}
                className="w-full overflow-hidden rounded-xl border border-border bg-white text-start transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/30"
              >
                <img
                  src={result.previewImageUrl}
                  alt={c.previewTitle}
                  className="aspect-[297/210] w-full bg-white object-contain"
                />
                <p className="border-t border-border/60 px-4 py-2 text-center text-xs text-muted-foreground sm:text-sm">
                  {c.tapToOpen}
                </p>
              </button>

              <dl className="mt-6 w-full text-sm">
                <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-3">
                  <dt className="text-muted-foreground">{c.attendeeLabel}</dt>
                  <dd className="text-end font-medium">{result.attendeeName}</dd>
                </div>
              </dl>

              <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                <Button
                  type="button"
                  className={actionButtonClass}
                  size="lg"
                  onClick={() => downloadCertificatePdf(result.pdfObjectUrl, result.downloadFilename)}
                >
                  <Download className="size-4 shrink-0" />
                  {c.download}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className={actionButtonClass}
                  size="lg"
                  onClick={resetLookup}
                >
                  <RotateCcw className="size-4 shrink-0" />
                  {c.tryAnother}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="certificate-el mt-10 space-y-5" noValidate>
            <div>
              <label htmlFor="certificate-lookup-option" className="mb-2 block text-sm font-medium">
                {c.lookupMethodLabel}
              </label>
              <select
                id="certificate-lookup-option"
                name="lookup-option"
                value={lookupOption}
                onChange={(event) => {
                  setLookupOption(event.target.value as CertificateLookupOption | "")
                  resetErrors()
                }}
                className={selectClass}
                disabled={loading}
              >
                <option value="">{c.lookupMethodPlaceholder}</option>
                <option value="email">{c.lookupOptions.email}</option>
                <option value="membershipNumber">{c.lookupOptions.membershipNumber}</option>
              </select>
            </div>

            {lookupOption === "email" ? (
              <div>
                <label htmlFor="certificate-email" className="mb-2 block text-sm font-medium">
                  {c.emailLabel}
                </label>
                <input
                  id="certificate-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder={c.emailPlaceholder}
                  value={emailValue}
                  onChange={(event) => {
                    setEmailValue(event.target.value)
                    resetErrors()
                  }}
                  className={inputClass}
                  disabled={loading}
                />
              </div>
            ) : null}

            {lookupOption === "membershipNumber" ? (
              <div>
                <label htmlFor="certificate-membership-number" className="mb-2 block text-sm font-medium">
                  {c.membershipNumberLabel}
                </label>
                <input
                  id="certificate-membership-number"
                  name="membership-number"
                  type="text"
                  autoComplete="username"
                  placeholder={c.membershipNumberPlaceholder}
                  value={membershipNumberValue}
                  onChange={(event) => {
                    setMembershipNumberValue(event.target.value)
                    resetErrors()
                  }}
                  className={inputClass}
                  disabled={loading}
                />
              </div>
            ) : null}

            {showSelectionError ? (
              <p className="text-sm text-destructive" role="alert">
                {c.errors.selectionRequired}
              </p>
            ) : null}

            {showValueError ? (
              <p className="text-sm text-destructive" role="alert">
                {c.errors.valueRequired}
              </p>
            ) : null}

            {requestError && (
              <div
                className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                role="alert"
              >
                <Award className="mt-0.5 size-4 shrink-0" />
                <p>{requestError}</p>
              </div>
            )}

            <Button type="submit" className="w-full gap-2" size="lg" disabled={loading}>
              <Award className="size-4" />
              {loading ? c.loading : c.submit}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
