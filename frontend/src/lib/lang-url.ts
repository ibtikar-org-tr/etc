import type { Lang } from "@/lib/i18n"

export type Page = "home" | "etc-2024" | "startups"

type ArchiveSegment = "etc-2024" | "2024"

export function isLang(value: string | null | undefined): value is Lang {
  return value === "ar" || value === "tr" || value === "en"
}

function pathParts(pathname: string): string[] {
  return pathname.split("/").filter(Boolean)
}

function isArchivePath(parts: string[]): boolean {
  return parts.includes("etc-2024") || parts.includes("2024")
}

export function readArchiveSegment(pathname = window.location.pathname): ArchiveSegment {
  const parts = pathParts(pathname)
  return parts.includes("etc-2024") ? "etc-2024" : "2024"
}

export function readPageFromUrl(): Page {
  const parts = pathParts(window.location.pathname)
  if (parts.includes("startups")) return "startups"
  if (isArchivePath(parts)) return "etc-2024"
  return "home"
}

export function pathMatchesPage(pathname: string, lang: Lang, page: Page): boolean {
  const parts = pathParts(pathname)
  if (parts[0] !== lang) return false
  if (page === "home") return parts.length === 1
  if (page === "etc-2024") return parts.length === 2 && isArchivePath(parts)
  if (page === "startups") return parts.includes("2026") && parts.includes("startups")
  return false
}

export function readLangFromUrl(): Lang {
  const parts = pathParts(window.location.pathname)
  const langPart = parts.find((p) => isLang(p))
  if (langPart) return langPart

  const fromQuery = new URLSearchParams(window.location.search).get("lang")
  if (isLang(fromQuery)) return fromQuery

  return "ar"
}

export function buildPath(lang: Lang, page: Page = "home", archiveSegment?: ArchiveSegment): string {
  if (page === "etc-2024") return `/${lang}/${archiveSegment ?? "2024"}`
  if (page === "startups") return `/${lang}/2026/startups`
  return `/${lang}`
}

export function langPath(lang: Lang): string {
  const page = readPageFromUrl()
  const archiveSegment = page === "etc-2024" ? readArchiveSegment() : undefined
  return buildPath(lang, page, archiveSegment)
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
  const archiveSegment = page === "etc-2024" ? readArchiveSegment() : undefined
  const pathname = buildPath(lang, page, archiveSegment)
  const href = `${pathname}${query ? `?${query}` : ""}${hash}`

  window.history[replace ? "replaceState" : "pushState"](null, "", href)
}

export function navigateToPage(page: Page, lang?: Lang) {
  const nextLang = lang ?? readLangFromUrl()
  const { hash, search } = window.location
  const params = new URLSearchParams(search)
  params.delete("lang")
  const query = params.toString()
  const archiveSegment = page === "etc-2024" ? readArchiveSegment() : undefined
  const href = `${buildPath(nextLang, page, archiveSegment)}${query ? `?${query}` : ""}${hash}`
  window.history.pushState(null, "", href)
  window.dispatchEvent(new PopStateEvent("popstate"))
}

export function migrateLegacyLangQuery() {
  const params = new URLSearchParams(window.location.search)
  const fromQuery = params.get("lang")
  if (!isLang(fromQuery)) return

  writeLangToUrl(fromQuery, true)
}
