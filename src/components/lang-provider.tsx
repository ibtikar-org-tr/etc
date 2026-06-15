"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { dict, type Dict, type Lang } from "@/lib/i18n"
import { dict2024, type Dict2024 } from "@/lib/i18n-2024"
import {
  buildPath,
  migrateLegacyLangQuery,
  readLangFromUrl,
  readPageFromUrl,
  writeLangToUrl,
  type Page,
} from "@/lib/lang-url"

type Ctx = { lang: Lang; setLang: (l: Lang) => void; page: Page; t: Dict; t2024: Dict2024 }

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readLangFromUrl())
  const [page, setPage] = useState<Page>(() => readPageFromUrl())
  const t = dict[lang]
  const t2024 = dict2024[lang]

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    writeLangToUrl(next)
  }, [])

  const syncFromUrl = useCallback(() => {
    setLangState(readLangFromUrl())
    setPage(readPageFromUrl())
  }, [])

  useEffect(() => {
    migrateLegacyLangQuery()
    const currentLang = readLangFromUrl()
    const currentPage = readPageFromUrl()
    setLangState(currentLang)
    setPage(currentPage)
    if (window.location.pathname !== buildPath(currentLang, currentPage)) {
      writeLangToUrl(currentLang, true)
    }
  }, [])

  useEffect(() => {
    const onPopState = () => syncFromUrl()
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [syncFromUrl])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
  }, [lang, t.dir])

  return <LangContext.Provider value={{ lang, setLang, page, t, t2024 }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LangProvider")
  return ctx
}
