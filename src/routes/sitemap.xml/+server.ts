import { LOCALES } from '$lib/i18n/locales';
import { SITE } from '$lib/site';

export const prerender = true;

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = LOCALES.map((lang) => {
    const loc = `${SITE.url}/${lang}/`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
