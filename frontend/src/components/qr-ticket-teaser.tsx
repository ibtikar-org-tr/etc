import { ArrowLeft } from "lucide-react"
import { useLang } from "./lang-provider"
import { pagePath } from "@/lib/lang-url"

export function QrTicketTeaser() {
  const { lang, t } = useLang()
  const c = t.ticketQr
  const qrHref = pagePath(lang, "ticket-qr")

  return (
    <section className="section-pad pt-0">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="anim-panel -mt-4 rounded-xl border border-border/80 bg-card/40 px-5 py-4 sm:-mt-6 sm:px-6">
          <p className="text-center text-sm text-muted-foreground">
            {c.teaser}{" "}
            <a
              href={qrHref}
              className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:underline"
            >
              {c.teaserLink}
              <ArrowLeft className="size-3.5 rtl:rotate-0 ltr:rotate-180" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
