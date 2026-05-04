<script lang="ts">
  import Logo from './Logo.svelte';
  import type { Locale } from '$lib/i18n/locales';
  import type { Strings } from '$lib/i18n/strings';

  type Props = { lang: Locale; strings: Strings };
  let { lang, strings }: Props = $props();

  let base = $derived(`/${lang}`);
</script>

<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href={base} aria-label="Ignidevs — home">
      <Logo size={32} />
      <span class="wordmark">IGNIDEVS</span>
    </a>

    <nav class="primary" aria-label="Primary">
      <a href={`${base}#what-we-do`}>{strings.nav.services}</a>
      <a href={`${base}#team`}>{strings.nav.team}</a>
      <a href={`${base}#contact`}>{strings.nav.contact}</a>
    </nav>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(10px);
    background: rgba(20, 16, 14, 0.7);
    border-bottom: 1px solid var(--border);
  }

  .header-inner {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: var(--fg);
    font-weight: 700;
    letter-spacing: 0.18em;
  }

  .brand:hover {
    color: var(--fg);
  }

  .wordmark {
    font-family: var(--font-display);
    font-size: 0.95rem;
  }

  .primary {
    display: none;
    margin-left: auto;
    gap: 1.5rem;
  }

  .primary a {
    color: var(--fg-muted);
    text-decoration: none;
    font-size: 0.95rem;
  }

  .primary a:hover {
    color: var(--fg);
  }

  @media (min-width: 720px) {
    .primary {
      display: flex;
    }
  }
</style>
