import type { Lang } from "@/lib/i18n"

export function isLang(value: string | null | undefined): value is Lang {
  return value === "ar" || value === "tr" || value === "en"
}

export function readLangFromUrl(): Lang {
  const parts = window.location.pathname.split("/").filter(Boolean)
  if (parts.length === 0) return "ar"

  const fromPath = parts[0]
  if (isLang(fromPath)) return fromPath

  const fromQuery = new URLSearchParams(window.location.search).get("lang")
  if (isLang(fromQuery)) return fromQuery

  return "ar"
}

export function langPath(lang: Lang): string {
  return `/${lang}`
}

export function writeLangToUrl(lang: Lang, replace = false) {
  const { hash, search } = window.location
  const params = new URLSearchParams(search)
  params.delete("lang")

  const query = params.toString()
  const pathname = langPath(lang)
  const href = `${pathname}${query ? `?${query}` : ""}${hash}`

  window.history[replace ? "replaceState" : "pushState"](null, "", href)
}

export function migrateLegacyLangQuery() {
  const params = new URLSearchParams(window.location.search)
  const fromQuery = params.get("lang")
  if (!isLang(fromQuery)) return

  writeLangToUrl(fromQuery, true)
}
