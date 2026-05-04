import { test, expect, type Page } from '@playwright/test';

const LOCALES = ['en', 'es', 'sv'] as const;

async function expectNoConsoleErrors(page: Page, run: () => Promise<void>) {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(err.message));
  await run();
  expect(errors, `console errors: ${errors.join('\n')}`).toHaveLength(0);
}

test.describe('rendering smoke', () => {
  test('root redirects to a locale', async ({ page }) => {
    const res = await page.goto('/', { waitUntil: 'domcontentloaded' });
    expect(res?.ok()).toBe(true);
    expect(page.url()).toMatch(/\/(en|es|sv)\/?$/);
  });

  for (const lang of LOCALES) {
    test(`/${lang}/ renders all sections without console errors`, async ({ page }) => {
      await expectNoConsoleErrors(page, async () => {
        const res = await page.goto(`/${lang}/`);
        expect(res?.ok()).toBe(true);
        await expect(page.getByTestId('hero')).toBeVisible();
        await expect(page.getByTestId('mission')).toBeVisible();
        await expect(page.getByTestId('services')).toBeVisible();
        await expect(page.getByTestId('products')).toBeVisible();
        await expect(page.getByTestId('team')).toBeVisible();
        await expect(page.getByTestId('contact')).toBeVisible();
        await expect(page.locator('h1')).toBeVisible();
      });
    });

    test(`/${lang}/ has correct html lang attribute`, async ({ page }) => {
      await page.goto(`/${lang}/`);
      const htmlLang = await page.locator('html').getAttribute('lang');
      expect(htmlLang).toBe(lang);
    });

    test(`/${lang}/ has correct canonical and hreflang tags`, async ({ page }) => {
      await page.goto(`/${lang}/`);
      const canonical = await page.locator('link[rel=canonical]').getAttribute('href');
      expect(canonical).toBe(`https://ignidevs.com/${lang}/`);

      for (const other of LOCALES) {
        const href = await page.locator(`link[rel=alternate][hreflang=${other}]`).getAttribute('href');
        expect(href).toBe(`https://ignidevs.com/${other}/`);
      }
      const xDefault = await page.locator('link[rel=alternate][hreflang="x-default"]').getAttribute('href');
      expect(xDefault).toBe('https://ignidevs.com/en/');
    });
  }
});
