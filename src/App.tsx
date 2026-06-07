import { LangProvider } from "@/components/lang-provider"
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

function App() {
  return (
    <LangProvider>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Topics />
        <Shorts />
        <Agenda />
        <Workshops />
        <Faq />
        <Register />
      </main>
      <SiteFooter />
    </LangProvider>
  )
}

export default App
