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
});

test.describe('language detection (Accept-Language header)', () => {
  test('Spanish browser is sent to /es/', async ({ browser }) => {
    const ctx = await browser.newContext({ locale: 'es-ES' });
    const page = await ctx.newPage();
    const res = await page.goto('/');
    expect(res?.ok()).toBe(true);
    expect(page.url()).toMatch(/\/es\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('problemas difíciles');
    await ctx.close();
  });

  test('Swedish browser is sent to /sv/', async ({ browser }) => {
    const ctx = await browser.newContext({ locale: 'sv-SE' });
    const page = await ctx.newPage();
    const res = await page.goto('/');
    expect(res?.ok()).toBe(true);
    expect(page.url()).toMatch(/\/sv\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('svåra problem');
    await ctx.close();
  });

  test('English browser is sent to /en/', async ({ browser }) => {
    const ctx = await browser.newContext({ locale: 'en-US' });
    const page = await ctx.newPage();
    const res = await page.goto('/');
    expect(res?.ok()).toBe(true);
    expect(page.url()).toMatch(/\/en\/?$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('hard problems');
    await ctx.close();
  });

  test('Unsupported browser locale falls back to /en/', async ({ browser }) => {
    const ctx = await browser.newContext({ locale: 'fr-FR' });
    const page = await ctx.newPage();
    const res = await page.goto('/');
    expect(res?.ok()).toBe(true);
    expect(page.url()).toMatch(/\/en\/?$/);
    await ctx.close();
  });

  test('no manual language switcher is rendered', async ({ page }) => {
    await page.goto('/en/');
    const switchers = page.getByRole('navigation', { name: /language|idioma|språk/i });
    await expect(switchers).toHaveCount(0);
  });
});
