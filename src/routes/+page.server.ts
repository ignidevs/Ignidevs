import { redirect } from '@sveltejs/kit';
import { DEFAULT_LOCALE, isLocale } from '$lib/i18n/locales';

export function load({ request }) {
  const accept = request.headers.get('accept-language') ?? '';
  const preferred = accept
    .split(',')
    .map((part) => part.split(';')[0].trim().slice(0, 2).toLowerCase())
    .find((code) => isLocale(code));
  redirect(307, `/${preferred ?? DEFAULT_LOCALE}/`);
}
