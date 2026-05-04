export const LOCALES = ['en', 'es', 'sv'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  sv: 'Svenska'
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  sv: 'sv'
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
