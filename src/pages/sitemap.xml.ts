import type { APIRoute } from "astro";

export const prerender = true;

const site = (import.meta.env.SITE_URL ?? "https://example.com").replace(/\/$/, "");
const pages = [
  "",
  "/planes",
  "/clases",
  "/instalaciones",
  "/ubicacion",
  "/contacto",
  "/faq",
  "/privacidad"
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();
  const urls = pages
    .map((path) => {
      const loc = `${site}${path || "/"}`;
      return `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
