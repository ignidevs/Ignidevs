<script lang="ts">
  import Logo from './Logo.svelte';
  import { SITE } from '$lib/site';
  import type { Strings } from '$lib/i18n/strings';

  type Props = { strings: Strings };
  let { strings }: Props = $props();

  const year = new Date().getFullYear();
</script>

<footer class="site-footer">
  <div class="container footer-inner">
    <div class="brand-line">
      <Logo size={24} />
      <span>{strings.footer.tagline}</span>
    </div>
    <p class="rights">© {year} {SITE.name}. {strings.footer.rights}</p>
  </div>
</footer>

<style>
  .site-footer {
    border-top: 1px solid var(--border);
    margin-top: var(--space-9);
    padding: var(--space-7) 0;
  }

  .footer-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .brand-line {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    color: var(--fg-muted);
  }

  .rights {
    margin: 0;
    color: var(--fg-dim);
    font-size: 0.875rem;
  }
</style>
