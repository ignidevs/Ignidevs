import { test, expect } from '@playwright/test';

const expected = {
  en: {
    titleAccent: 'hard problems',
    services: 'Three ways we help',
    contactCta: 'Email us'
  },
  es: {
    titleAccent: 'problemas difíciles',
    services: 'Tres maneras de ayudarte',
    contactCta: 'Escríbenos'
  },
  sv: {
    titleAccent: 'svåra problem',
    services: 'Tre sätt vi hjälper på',
    contactCta: 'Mejla oss'
  }
} as const;

test.describe('locale text', () => {
  for (const [lang, copy] of Object.entries(expected) as [keyof typeof expected, (typeof expected)[keyof typeof expected]][]) {
    test(`/${lang}/ shows ${lang} copy`, async ({ page }) => {
      await page.goto(`/${lang}/`);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(copy.titleAccent);
      await expect(page.getByRole('heading', { level: 2, name: new RegExp(copy.services, 'i') })).toBeVisible();
      await expect(page.getByRole('link', { name: new RegExp(copy.contactCta, 'i') })).toBeVisible();
    });
  }

  test('language switcher navigates between locales and preserves path', async ({ page }) => {
    await page.goto('/en/');
    await page.getByRole('link', { name: /SV/i }).first().click();
    await expect(page).toHaveURL(/\/sv\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('svåra problem');

    await page.getByRole('link', { name: /ES/i }).first().click();
    await expect(page).toHaveURL(/\/es\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('problemas difíciles');
  });

  test('current locale is marked aria-current in switcher', async ({ page }) => {
    await page.goto('/es/');
    const current = page.locator('nav[aria-label] a[aria-current="true"]').first();
    await expect(current).toHaveText(/ES/);
  });
});
