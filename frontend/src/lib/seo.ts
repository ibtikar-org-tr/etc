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

const STARTUPS_SEO: Record<Lang, Omit<SeoMeta, "path" | "canonical" | "ogImage" | "ogLocale" | "alternates" | "jsonLd">> = {
  ar: {
    title: "جناح الشركات الناشئة · ETC 2026 · تجمّع إبتكار",
    description:
      "قدّم طلبًا للمشاركة بجناح عرض في مؤتمر التّقنيّات الصّاعدة 2026 في إسطنبول. مخصّص للشركات الناشئة — وليس لتسجيل حضور الطلاب.",
    keywords:
      "جناح الشركات الناشئة, ETC 2026, إبتكار, شركات ناشئة, جناح عرض, مؤتمر تقني إسطنبول",
    robots: "index, follow, max-image-preview:large, max-snippet:-1",
  },
  tr: {
    title: "Girişim Standı · ETC 2026 · İbtikar",
    description:
      "Yükselen Teknolojiler Konferansı 2026'da girişim standında yer almak için başvurun. Girişimler içindir — öğrenci kaydı değildir.",
    keywords:
      "girişim standı, ETC 2026, İbtikar, startup booth, İstanbul teknoloji konferansı",
    robots: "index, follow, max-image-preview:large, max-snippet:-1",
  },
  en: {
    title: "Startup Booth · ETC 2026 · Ibtikar",
    description:
      "Apply for an exhibition booth at the Emerging Technologies Conference 2026 in Istanbul. For startups — not student attendance registration.",
    keywords:
      "startup booth, ETC 2026, Ibtikar Assembly, exhibition booth, Istanbul tech conference",
    robots: "index, follow, max-image-preview:large, max-snippet:-1",
  },
}

const TICKET_QR_SEO: Record<Lang, Omit<SeoMeta, "path" | "canonical" | "ogImage" | "ogLocale" | "alternates" | "jsonLd">> = {
  ar: {
    title: "رمز الدخول · ETC 2026 · تجمّع إبتكار",
    description:
      "استرجع رمز QR للدخول إلى مؤتمر التّقنيّات الصّاعدة 2026 في إسطنبول باستخدام البريد الإلكتروني المسجّل.",
    keywords: "رمز الدخول, QR, ETC 2026, إبتكار, تذكرة المؤتمر, إسطنبول",
    robots: "noindex, follow",
  },
  tr: {
    title: "Giriş QR Kodu · ETC 2026 · İbtikar",
    description:
      "Kayıt olduğunuz e-posta ile Yükselen Teknolojiler Konferansı 2026 giriş QR kodunuzu alın.",
    keywords: "giriş QR kodu, ETC 2026, İbtikar, konferans bileti, İstanbul",
    robots: "noindex, follow",
  },
  en: {
    title: "Entrance QR Code · ETC 2026 · Ibtikar",
    description:
      "Retrieve your entrance QR code for the Emerging Technologies Conference 2026 in Istanbul using your registration email.",
    keywords: "entrance QR code, ETC 2026, Ibtikar Assembly, conference ticket, Istanbul",
    robots: "noindex, follow",
  },
}

function pageSeo(page: Page, lang: Lang) {
  if (page === "etc-2024") return ARCHIVE_SEO[lang]
  if (page === "startups") return STARTUPS_SEO[lang]
  if (page === "ticket-qr") return TICKET_QR_SEO[lang]
  return HOME_SEO[lang]
}

function eventYear(page: Page) {
  if (page === "etc-2024") return "2024"
  return "2026"
}

function eventDates(page: Page) {
  if (page === "etc-2024") return { start: "2024-02-17", end: "2024-02-18", attendeeCount: 250 as number | undefined }
  return { start: "2026-06-27", end: "2026-06-28", attendeeCount: undefined as number | undefined }
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
  const base = pageSeo(page, lang)
  const ogImage = page === "etc-2024" ? ETC_2024_HERO_IMAGE : absoluteUrl("/square_logo.svg", origin)
  const year = eventYear(page)
  const dates = eventDates(page)

  const eventName =
    page === "startups"
      ? lang === "ar"
        ? "جناح الشركات الناشئة · ETC 2026"
        : lang === "tr"
          ? "Girişim Standı · ETC 2026"
          : "Startup Booth · ETC 2026"
      : page === "ticket-qr"
        ? lang === "ar"
          ? "رمز الدخول · ETC 2026"
          : lang === "tr"
            ? "Giriş QR Kodu · ETC 2026"
            : "Entrance QR · ETC 2026"
      : lang === "ar"
        ? `مؤتمر التّقنيّات الصّاعدة ${year}`
        : lang === "tr"
          ? `Yükselen Teknolojiler Konferansı ${year}`
          : `Emerging Technologies Conference ${year}`

  const breadcrumbCurrent =
    page === "etc-2024"
      ? "ETC 2024"
      : page === "startups"
        ? lang === "ar"
          ? "جناح الشركات الناشئة"
          : lang === "tr"
            ? "Girişim Standı"
            : "Startup Booth"
        : page === "ticket-qr"
          ? lang === "ar"
            ? "رمز الدخول"
            : lang === "tr"
              ? "Giriş QR Kodu"
              : "Entrance QR"
          : null

  const jsonLd: Record<string, unknown>[] = [
    websiteJsonLd(origin),
    eventJsonLd({
      name: eventName,
      description: base.description,
      startDate: dates.start,
      endDate: dates.end,
      url: canonical,
      image: ogImage,
      attendeeCount: dates.attendeeCount,
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
        ...(breadcrumbCurrent
          ? [
              {
                "@type": "ListItem",
                position: 2,
                name: breadcrumbCurrent,
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
