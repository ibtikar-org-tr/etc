import { LangProvider, useLang } from "@/components/lang-provider"
import { SiteAnimations } from "@/components/site-animations"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Topics } from "@/components/topics"
import { Shorts } from "@/components/shorts"
import { Agenda } from "@/components/agenda"
import { Workshops } from "@/components/workshops"
import { Faq } from "@/components/faq"
import { Register } from "@/components/register"
import { SiteFooter } from "@/components/site-footer"
import { Etc2024Page } from "@/components/etc-2024-page"

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Topics />
      <Shorts />
      <Agenda />
      <Workshops />
      <Faq />
      <Register />
    </>
  )
}

function AppContent() {
  const { page } = useLang()
  return (
    <SiteAnimations>
      <SiteHeader />
      <main>{page === "etc-2024" ? <Etc2024Page /> : <HomePage />}</main>
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
