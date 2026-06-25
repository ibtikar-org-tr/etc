import { writeFileSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const origin = (process.env.VITE_SITE_URL ?? "https://etc.ibtikar.tr").replace(/\/$/, "")
const langs = ["ar", "tr", "en"]
const pages = ["", "/2024", "/etc-2024", "/2026/startups", "/2026/qr"]

const urls = pages.flatMap((page) =>
  langs.map((lang) => {
    const loc = `${origin}/${lang}${page}`
    const priority =
      page === "" ? (lang === "ar" ? "1.0" : "0.9") : page === "/2026/startups" ? "0.8" : page === "/2026/qr" ? "0.5" : page === "/2024" ? "0.7" : "0.6"
    const changefreq =
      page === "" ? "weekly" : page === "/2026/startups" || page === "/2024" ? "weekly" : page === "/2026/qr" ? "monthly" : "monthly"
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  }),
)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`

writeFileSync(resolve(__dirname, "../public/sitemap.xml"), sitemap, "utf8")
writeFileSync(resolve(__dirname, "../public/robots.txt"), robots, "utf8")
console.log(`Generated sitemap & robots.txt for ${origin}`)
