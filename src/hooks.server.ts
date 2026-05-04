import type { Handle } from '@sveltejs/kit';
import { DEFAULT_LOCALE, isLocale } from '$lib/i18n/locales';

export const handle: Handle = async ({ event, resolve }) => {
  const firstSegment = event.url.pathname.split('/').filter(Boolean)[0] ?? '';
  const lang = isLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;

  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%paramsLang%', lang)
  });
};
