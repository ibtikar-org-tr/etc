"use client"

import { useEffect } from "react"
import { useLang } from "@/components/lang-provider"
import { getSeoMeta } from "@/lib/seo"
import { getSiteOrigin } from "@/lib/site"

const MANAGED = "data-seo-managed"

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${selector}]`)
  if (!el) {
    el = document.createElement("meta")
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
    el.setAttribute(MANAGED, "")
    document.head.appendChild(el)
    return
  }
  const content = attrs.content
  if (content) el.content = content
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const hreflang = extra?.hreflang
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`

  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement("link")
    el.rel = rel
    el.setAttribute(MANAGED, "")
    if (hreflang) el.hreflang = hreflang
    document.head.appendChild(el)
  }
  el.href = href
}

function clearManaged() {
  document.head.querySelectorAll(`[${MANAGED}]`).forEach((el) => el.remove())
}

export function SeoHead() {
  const { lang, page } = useLang()

  useEffect(() => {
    const origin = getSiteOrigin()
    const seo = getSeoMeta(lang, page, origin)

    document.title = seo.title

    clearManaged()

    upsertMeta('name="description"', { name: "description", content: seo.description })
    upsertMeta('name="keywords"', { name: "keywords", content: seo.keywords })
    upsertMeta('name="robots"', { name: "robots", content: seo.robots })
    upsertMeta('name="author"', { name: "author", content: "Ibtikar Assembly" })

    upsertLink("canonical", seo.canonical)

    const ogTags: [string, string][] = [
      ["og:type", "website"],
      ["og:site_name", "Emerging Technologies Conference"],
      ["og:title", seo.title],
      ["og:description", seo.description],
      ["og:url", seo.canonical],
      ["og:image", seo.ogImage],
      ["og:locale", seo.ogLocale],
    ]
    for (const [property, content] of ogTags) {
      upsertMeta(`property="${property}"`, { property, content })
    }

    for (const alt of seo.alternates) {
      if (alt.lang === "x-default") continue
      const el = document.createElement("meta")
      el.setAttribute("property", "og:locale:alternate")
      el.content = alt.lang === "ar" ? "ar_TR" : alt.lang === "tr" ? "tr_TR" : "en_US"
      el.setAttribute(MANAGED, "")
      document.head.appendChild(el)
    }

    const twitterTags: [string, string][] = [
      ["twitter:card", "summary_large_image"],
      ["twitter:title", seo.title],
      ["twitter:description", seo.description],
      ["twitter:image", seo.ogImage],
    ]
    for (const [name, content] of twitterTags) {
      upsertMeta(`name="${name}"`, { name, content })
    }

    for (const alt of seo.alternates) {
      upsertLink("alternate", alt.href, { hreflang: alt.lang })
    }

    const jsonLd = document.createElement("script")
    jsonLd.type = "application/ld+json"
    jsonLd.setAttribute(MANAGED, "")
    jsonLd.textContent = JSON.stringify(seo.jsonLd)
    document.head.appendChild(jsonLd)
  }, [lang, page])

  return null
}
