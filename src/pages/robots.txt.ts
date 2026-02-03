import type { APIRoute } from "astro";

export const prerender = true;

const site = (import.meta.env.SITE_URL ?? "https://example.com").replace(/\/$/, "");

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
