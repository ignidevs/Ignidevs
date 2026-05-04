import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const LOCALES = ['en', 'es', 'sv'] as const;

test.describe('accessibility (axe-core, WCAG 2.1 AA)', () => {
  for (const lang of LOCALES) {
    test(`/${lang}/ has no serious or critical a11y violations`, async ({ page }) => {
      await page.goto(`/${lang}/`);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      const blocking = results.violations.filter(
        (v) => v.impact === 'serious' || v.impact === 'critical'
      );
      expect(
        blocking,
        blocking.map((v) => `${v.id}: ${v.help} (${v.nodes.length} nodes)`).join('\n')
      ).toEqual([]);
    });
  }

  test('skip link is the first focusable element', async ({ page }) => {
    await page.goto('/en/');
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.textContent ?? '');
    expect(focused).toMatch(/skip/i);
  });

  test('content stays visible when JavaScript is disabled (no Reveal-stuck-hidden regression)', async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto('/en/');
    // The Products and Team sections both use Reveal wrappers; with JS off
    // they must still render content visibly, not as opacity:0 ghosts.
    const products = page.getByTestId('products');
    await expect(products).toBeVisible();
    await expect(products.getByText('Echo', { exact: true })).toBeVisible();
    const team = page.getByTestId('team');
    await expect(team).toBeVisible();
    const opacity = await products.evaluate((el) =>
      window.getComputedStyle(el).getPropertyValue('opacity')
    );
    expect(parseFloat(opacity)).toBe(1);
    await ctx.close();
  });

  test('all images and svg logos have accessible labels or aria-hidden', async ({ page }) => {
    await page.goto('/en/');
    const offenders = await page.evaluate(() => {
      const results: string[] = [];
      document.querySelectorAll('img').forEach((img) => {
        if (!img.alt && img.getAttribute('aria-hidden') !== 'true') {
          results.push(`img missing alt: ${img.outerHTML.slice(0, 80)}`);
        }
      });
      document.querySelectorAll('svg').forEach((svg) => {
        const labelled =
          svg.getAttribute('aria-hidden') === 'true' ||
          svg.getAttribute('role') === 'img' ||
          svg.querySelector('title');
        if (!labelled) results.push(`svg unlabeled: ${svg.outerHTML.slice(0, 80)}`);
      });
      return results;
    });
    expect(offenders).toEqual([]);
  });
});
