import { error } from '@sveltejs/kit';
import { isLocale } from '$lib/i18n/locales';
import { t } from '$lib/i18n/strings';

export const prerender = true;

export function load({ params }) {
  if (!isLocale(params.lang)) {
    error(404, 'Unknown locale');
  }
  const lang = params.lang;
  return {
    lang,
    strings: t(lang)
  };
}
