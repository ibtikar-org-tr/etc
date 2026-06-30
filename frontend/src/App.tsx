import { LangProvider, useLang } from "@/components/lang-provider"
import { SiteAnimations } from "@/components/site-animations"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Topics } from "@/components/topics"
import { Agenda } from "@/components/agenda"
import { Workshops } from "@/components/workshops"
import { Guests } from "@/components/guests"
import { Faq } from "@/components/faq"
import { Register } from "@/components/register"
import { QrTicketTeaser } from "@/components/qr-ticket-teaser"
import { StartupBoothTeaser } from "@/components/startup-booth"
import { SiteFooter } from "@/components/site-footer"
import { Etc2024Page } from "@/components/etc-2024-page"
import { StartupsPage } from "@/components/startups-page"
import { CertificatePage } from "@/components/certificate-page"
import { QrTicketPage } from "@/components/qr-ticket-page"
import { SeoHead } from "@/components/seo-head"

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Topics />
      <Agenda />
      <Workshops />
      <Guests />
      <Faq />
      <Register />
      <QrTicketTeaser />
      <StartupBoothTeaser />
    </>
  )
}

function AppContent() {
  const { page } = useLang()

  const main =
    page === "etc-2024" ? (
      <Etc2024Page />
    ) : page === "startups" ? (
      <StartupsPage />
    ) : page === "ticket-qr" ? (
      <QrTicketPage />
    ) : page === "certificate" ? (
      <CertificatePage />
    ) : (
      <HomePage />
    )

  return (
    <SiteAnimations>
      <SeoHead />
      <SiteHeader />
      <main>{main}</main>
      <SiteFooter />
    </SiteAnimations>
  )
}

function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  )
}

export default App
