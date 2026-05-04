import type { Locale } from '$lib/i18n/locales';

declare global {
  namespace App {
    interface PageData {
      lang: Locale;
    }
  }
}

export {};
