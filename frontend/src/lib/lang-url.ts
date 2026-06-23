import type { Lang } from "@/lib/i18n"

export type Page = "home" | "etc-2024" | "startups"

export function isLang(value: string | null | undefined): value is Lang {
  return value === "ar" || value === "tr" || value === "en"
}

export function readPageFromUrl(): Page {
  const parts = window.location.pathname.split("/").filter(Boolean)
  if (parts.includes("etc-2024")) return "etc-2024"
  if (parts.includes("startups")) return "startups"
  return "home"
}

export function readLangFromUrl(): Lang {
  const parts = window.location.pathname.split("/").filter(Boolean)
  const langPart = parts.find((p) => isLang(p))
  if (langPart) return langPart

  const fromQuery = new URLSearchParams(window.location.search).get("lang")
  if (isLang(fromQuery)) return fromQuery

  return "ar"
}

export function buildPath(lang: Lang, page: Page = "home"): string {
  if (page === "etc-2024") return `/${lang}/etc-2024`
  if (page === "startups") return `/${lang}/2026/startups`
  return `/${lang}`
}

export function langPath(lang: Lang): string {
  return buildPath(lang, readPageFromUrl())
}

export function pagePath(lang: Lang, page: Page): string {
  return buildPath(lang, page)
}

export function writeLangToUrl(lang: Lang, replace = false) {
  const page = readPageFromUrl()
  const { hash, search } = window.location
  const params = new URLSearchParams(search)
  params.delete("lang")

  const query = params.toString()
  const pathname = buildPath(lang, page)
  const href = `${pathname}${query ? `?${query}` : ""}${hash}`

  window.history[replace ? "replaceState" : "pushState"](null, "", href)
}

export function navigateToPage(page: Page, lang?: Lang) {
  const nextLang = lang ?? readLangFromUrl()
  const { hash, search } = window.location
  const params = new URLSearchParams(search)
  params.delete("lang")
  const query = params.toString()
  const href = `${buildPath(nextLang, page)}${query ? `?${query}` : ""}${hash}`
  window.history.pushState(null, "", href)
  window.dispatchEvent(new PopStateEvent("popstate"))
}

export function migrateLegacyLangQuery() {
  const params = new URLSearchParams(window.location.search)
  const fromQuery = params.get("lang")
  if (!isLang(fromQuery)) return

  writeLangToUrl(fromQuery, true)
}
