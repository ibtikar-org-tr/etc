import type { Lang } from "@/lib/i18n"
import { dict, LANGS } from "@/lib/i18n"
import { ETC_2024_HERO_IMAGE } from "@/lib/etc-2024-images"
import { buildPath, type Page } from "@/lib/lang-url"
import { absoluteUrl, getSiteOrigin, pageUrl, SITE_LOCALES } from "@/lib/site"

export type SeoMeta = {
  title: string
  description: string
  keywords: string
  path: string
  canonical: string
  ogImage: string
  ogLocale: string
  robots: string
  jsonLd: Record<string, unknown>[]
  alternates: { lang: Lang | "x-default"; href: string }[]
}

const ORGANIZER = {
  "@type": "Organization",
  name: "Ibtikar Assembly",
  alternateName: "تجمّع إبتكار",
  url: "https://ibtikar.org.tr",
}

function eventJsonLd(opts: {
  name: string
  description: string
  startDate: string
  endDate: string
  url: string
  image: string
  attendeeCount?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: opts.name,
    description: opts.description,
    startDate: opts.startDate,
    endDate: opts.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: [opts.image],
    url: opts.url,
    location: {
      "@type": "Place",
      name: "Istanbul",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressCountry: "TR",
      },
    },
    organizer: ORGANIZER,
    ...(opts.attendeeCount
      ? { maximumAttendeeCapacity: opts.attendeeCount, offers: { "@type": "Offer", price: "0", priceCurrency: "TRY", availability: "https://schema.org/InStock", url: opts.url } }
      : {}),
  }
}

function websiteJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Emerging Technologies Conference (ETC)",
    alternateName: ["مؤتمر التّقنيّات الصّاعدة", "Yükselen Teknolojiler Konferansı"],
    url: absoluteUrl("/ar", origin),
    publisher: ORGANIZER,
    inLanguage: ["ar", "tr", "en"],
  }
}

const HOME_SEO: Record<Lang, Omit<SeoMeta, "path" | "canonical" | "ogImage" | "ogLocale" | "alternates" | "jsonLd">> = {
  ar: {
    title: "مؤتمر التّقنيّات الصّاعدة 2026 · تجمّع إبتكار · إسطنبول",
    description:
      "مؤتمر طلّابي للتقنيات الصاعدة ينظّمه تجمّع إبتكار في إسطنبول، 27–28 يونيو 2026. محاضرات نظريّة وورش عمل في الذكاء الاصطناعي، إنترنت الأشياء، الأمن السيبراني والمزيد. التسجيل مجّاني.",
    keywords:
      "مؤتمر التقنيات الصاعدة, ETC 2026, إبتكار, إسطنبول, مؤتمر طلابي, ذكاء اصطناعي, ورش عمل تقنية, تجمّع إبتكار",
    robots: "index, follow, max-image-preview:large, max-snippet:-1",
  },
  tr: {
    title: "Yükselen Teknolojiler Konferansı 2026 · İbtikar · İstanbul",
    description:
      "İbtikar Topluluğu tarafından İstanbul'da 27–28 Haziran 2026'da düzenlenen öğrenci teknoloji konferansı. Yapay zeka, IoT, siber güvenlik ve daha fazlası. Ücretsiz kayıt.",
    keywords:
      "Yükselen Teknolojiler, ETC 2026, İbtikar, İstanbul, öğrenci konferansı, yapay zeka, teknoloji atölyeleri",
    robots: "index, follow, max-image-preview:large, max-snippet:-1",
  },
  en: {
    title: "Emerging Technologies Conference 2026 · Ibtikar · Istanbul",
    description:
      "Student tech conference hosted by Ibtikar Assembly in Istanbul, June 27–28, 2026. Theoretical lectures and hands-on workshops on AI, IoT, cybersecurity, and more. Free registration.",
    keywords:
      "Emerging Technologies Conference, ETC 2026, Ibtikar Assembly, Istanbul, student conference, AI workshops, tech event Turkey",
    robots: "index, follow, max-image-preview:large, max-snippet:-1",
  },
}

const ARCHIVE_SEO: Record<Lang, Omit<SeoMeta, "path" | "canonical" | "ogImage" | "ogLocale" | "alternates" | "jsonLd">> = {
  ar: {
    title: "مؤتمر التّقنيّات الصّاعدة 2024 · أرشيف · تجمّع إبتكار",
    description:
      "أرشيف مؤتمر التّقنيّات الصّاعدة 2024 في إسطنبول (17–18 فبراير). محاضرات في Blockchain والذكاء الاصطناعي والميتافيرس، و9 ورش عمل تقنية، ومعرض صور من الحدث.",
    keywords:
      "ETC 2024, مؤتمر التقنيات الصاعدة 2024, إبتكار, إسطنبول, blockchain, ذكاء اصطناعي, أرشيف مؤتمر",
    robots: "index, follow, max-image-preview:large, max-snippet:-1",
  },
  tr: {
    title: "Yükselen Teknolojiler Konferansı 2024 · Arşiv · İbtikar",
    description:
      "İstanbul'da 17–18 Şubat 2024'te düzenlenen Yükselen Teknolojiler Konferansı arşivi. Blockchain, yapay zeka, metaverse dersleri, 9 atölye ve etkinlik fotoğrafları.",
    keywords:
      "ETC 2024, Yükselen Teknolojiler 2024, İbtikar, İstanbul, blockchain, yapay zeka, konferans arşivi",
    robots: "index, follow, max-image-preview:large, max-snippet:-1",
  },
  en: {
    title: "Emerging Technologies Conference 2024 · Archive · Ibtikar",
    description:
      "Archive of the Emerging Technologies Conference 2024 in Istanbul (Feb 17–18). Lectures on blockchain, AI, metaverse, 9 hands-on workshops, and event photo gallery.",
    keywords:
      "ETC 2024, Emerging Technologies Conference 2024, Ibtikar, Istanbul, blockchain, AI, conference archive",
    robots: "index, follow, max-image-preview:large, max-snippet:-1",
  },
}

function alternatesFor(page: Page, origin: string): SeoMeta["alternates"] {
  const langs = LANGS.map((l) => ({
    lang: l.code,
    href: pageUrl(l.code, page, origin),
  }))
  return [...langs, { lang: "x-default", href: pageUrl("ar", page, origin) }]
}

export function getSeoMeta(lang: Lang, page: Page, origin = getSiteOrigin()): SeoMeta {
  const path = buildPath(lang, page)
  const canonical = pageUrl(lang, page, origin)
  const base = page === "etc-2024" ? ARCHIVE_SEO[lang] : HOME_SEO[lang]
  const ogImage = page === "etc-2024" ? ETC_2024_HERO_IMAGE : absoluteUrl("/square_logo.svg", origin)

  const eventName =
    lang === "ar"
      ? `مؤتمر التّقنيّات الصّاعدة ${page === "etc-2024" ? "2024" : "2026"}`
      : lang === "tr"
        ? `Yükselen Teknolojiler Konferansı ${page === "etc-2024" ? "2024" : "2026"}`
        : `Emerging Technologies Conference ${page === "etc-2024" ? "2024" : "2026"}`

  const jsonLd: Record<string, unknown>[] = [
    websiteJsonLd(origin),
    eventJsonLd({
      name: eventName,
      description: base.description,
      startDate: page === "etc-2024" ? "2024-02-17" : "2026-06-27",
      endDate: page === "etc-2024" ? "2024-02-18" : "2026-06-28",
      url: canonical,
      image: ogImage,
      attendeeCount: page === "etc-2024" ? 250 : undefined,
    }),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "ar" ? "الرئيسية" : lang === "tr" ? "Ana Sayfa" : "Home",
          item: pageUrl(lang, "home", origin),
        },
        ...(page === "etc-2024"
          ? [
              {
                "@type": "ListItem",
                position: 2,
                name: "ETC 2024",
                item: canonical,
              },
            ]
          : []),
      ],
    },
  ]

  if (page === "home") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: dict[lang].faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    })
  }

  return {
    ...base,
    path,
    canonical,
    ogImage,
    ogLocale: SITE_LOCALES[lang],
    alternates: alternatesFor(page, origin),
    jsonLd,
  }
}
