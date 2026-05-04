<script lang="ts">
  import { page } from '$app/state';
  import { LOCALES, LOCALE_LABELS, type Locale } from '$lib/i18n/locales';

  type Props = { current: Locale; label: string };
  let { current, label }: Props = $props();

  function urlFor(locale: Locale): string {
    const path = page.url.pathname;
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0 && (LOCALES as readonly string[]).includes(segments[0])) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    return '/' + segments.join('/');
  }
</script>

<nav class="lang" aria-label={label}>
  <ul>
    {#each LOCALES as locale}
      <li>
        <a
          href={urlFor(locale)}
          aria-current={locale === current ? 'true' : undefined}
          hreflang={locale}
          lang={locale}
        >
          {locale.toUpperCase()}
          <span class="visually-hidden">— {LOCALE_LABELS[locale]}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .lang ul {
    display: flex;
    gap: 0.25rem;
    list-style: none;
    margin: 0;
    padding: 0.25rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border);
    border-radius: 999px;
  }

  .lang a {
    display: inline-block;
    padding: 0.35rem 0.7rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    color: var(--fg-muted);
    text-decoration: none;
    border-radius: 999px;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .lang a:hover {
    color: var(--fg);
    background: rgba(255, 255, 255, 0.05);
  }

  .lang a[aria-current='true'] {
    background: var(--gradient-ember);
    color: var(--accent-fg);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
