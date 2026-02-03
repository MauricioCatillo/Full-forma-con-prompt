# Gimnasio Full Forma

Sitio web premium para captación de leads y cierre por WhatsApp/llamada.

## Requisitos
- Node.js 20+

## Inicio rápido
1. `npm install`
2. `cp .env.example .env`
3. `npm run dev`

## Variables de entorno
- `SITE_URL`: URL pública del sitio (se usa para canonical, sitemap y OpenGraph).
- `PUBLIC_GA4_ID`: ID de Google Analytics 4. Si está vacío, no se carga analytics.

## Analytics
El tracking se activa con `data-analytics` en enlaces:
- `click_whatsapp` (con `page` y `button_location`)
- `click_call`
- `open_map`

## Imágenes
Los placeholders están en `public/images` y `public/og-placeholder.svg`.
Reemplaza por fotos reales optimizadas (WebP recomendado).
    