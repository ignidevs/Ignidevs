import { test, expect } from '@playwright/test';

const LOCALES = ['en', 'es', 'sv'] as const;

const productCopy = {
  en: 'Community ops for Discord',
  es: 'Operaciones de comunidad para Discord',
  sv: 'Community-ops för Discord'
} as const;

test.describe('products section', () => {
  for (const lang of LOCALES) {
    test(`/${lang}/ shows the Echo product card with correct copy`, async ({ page }) => {
      await page.goto(`/${lang}/`);
      const section = page.getByTestId('products');
      await expect(section).toBeVisible();
      await expect(section.getByText('Echo', { exact: true })).toBeVisible();
      await expect(section.getByText(productCopy[lang])).toBeVisible();
    });

    test(`/${lang}/ Echo CTA links to goecho.xyz`, async ({ page }) => {
      await page.goto(`/${lang}/`);
      const link = page
        .getByTestId('products')
        .getByRole('link', { name: /goecho\.xyz/i });
      await expect(link).toHaveAttribute('href', 'https://goecho.xyz/');
      await expect(link).toHaveAttribute('rel', /noopener/);
      await expect(link).toHaveAttribute('target', '_blank');
    });
  }

  test('Echo card lists at least four features', async ({ page }) => {
    await page.goto('/en/');
    const features = page.getByTestId('products').locator('.features li');
    await expect(features).toHaveCount(5);
  });
});
