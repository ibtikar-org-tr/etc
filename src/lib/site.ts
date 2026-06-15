import type { Lang } from "@/lib/i18n"
import { buildPath, type Page } from "@/lib/lang-url"

/** Canonical production origin; override with VITE_SITE_URL at build time. */
export const DEFAULT_SITE_ORIGIN = "https://etc.ibtikar.tr"

export function getSiteOrigin(): string {
  if (typeof window !== "undefined") return window.location.origin
  return import.meta.env.VITE_SITE_URL ?? DEFAULT_SITE_ORIGIN
}

export function absoluteUrl(path: string, origin = getSiteOrigin()): string {
  return `${origin.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`
}

export function pageUrl(lang: Lang, page: Page, origin = getSiteOrigin()): string {
  return absoluteUrl(buildPath(lang, page), origin)
}

export const SITE_LOCALES: Record<Lang, string> = {
  ar: "ar_TR",
  tr: "tr_TR",
  en: "en_US",
}
