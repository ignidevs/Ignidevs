import { test, expect } from '@playwright/test';

const LOCALES = ['en', 'es', 'sv'] as const;

test.describe('visual regression', () => {
  for (const lang of LOCALES) {
    test(`/${lang}/ visual snapshot`, async ({ page }) => {
      await page.goto(`/${lang}/`);
      await page.evaluate(() => document.fonts.ready);
      // Disable animations and background to keep snapshots stable.
      await page.addStyleTag({
        content: `
          *, *::before, *::after { animation: none !important; transition: none !important; }
          .ember-glow { display: none !important; }
        `
      });
      await expect(page).toHaveScreenshot(`home-${lang}.png`, {
        fullPage: true,
        animations: 'disabled',
        caret: 'hide'
      });
    });
  }
});
