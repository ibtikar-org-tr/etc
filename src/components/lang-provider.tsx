"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { dict, type Dict, type Lang } from "@/lib/i18n"
import { langPath, migrateLegacyLangQuery, readLangFromUrl, writeLangToUrl } from "@/lib/lang-url"

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict }

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readLangFromUrl())
  const t = dict[lang]

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    writeLangToUrl(next)
  }, [])

  useEffect(() => {
    migrateLegacyLangQuery()
    const current = readLangFromUrl()
    setLangState(current)
    if (window.location.pathname !== langPath(current)) {
      writeLangToUrl(current, true)
    }
  }, [])

  useEffect(() => {
    const onPopState = () => setLangState(readLangFromUrl())
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
  }, [lang, t.dir])

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LangProvider")
  return ctx
}
