import { writeFileSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const origin = (process.env.VITE_SITE_URL ?? "https://etc.ibtikar.tr").replace(/\/$/, "")
const langs = ["ar", "tr", "en"]
const pages = ["", "/etc-2024"]

const urls = pages.flatMap((page) =>
  langs.map((lang) => {
    const loc = `${origin}/${lang}${page}`
    const priority = page === "" ? (lang === "ar" ? "1.0" : "0.9") : "0.7"
    const changefreq = page === "" ? "weekly" : "monthly"
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
