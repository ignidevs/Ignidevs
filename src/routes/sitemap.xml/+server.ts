import { LOCALES } from '$lib/i18n/locales';
import { SITE } from '$lib/site';

export const prerender = true;

export function GET() {
  const urls = LOCALES.map((lang) => {
    const loc = `${SITE.url}/${lang}/`;
    const alternates = LOCALES.map(
      (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE.url}/${l}/" />`
    ).join('\n');
    return `  <url>
    <loc>${loc}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}/en/" />
  </url>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
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
