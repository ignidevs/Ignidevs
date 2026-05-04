<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { LOCALES } from '$lib/i18n/locales';
  import { SITE } from '$lib/site';

  let { data, children } = $props();
  let lang = $derived(data.lang);
  let strings = $derived(data.strings);
</script>

<svelte:head>
  <title>{strings.meta.title}</title>
  <meta name="description" content={strings.meta.description} />
  <link rel="canonical" href={`${SITE.url}/${lang}/`} />
  {#each LOCALES as l}
    <link rel="alternate" hreflang={l} href={`${SITE.url}/${l}/`} />
  {/each}
  <link rel="alternate" hreflang="x-default" href={`${SITE.url}/en/`} />
  <meta property="og:title" content={strings.meta.title} />
  <meta property="og:description" content={strings.meta.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${SITE.url}/${lang}/`} />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<Header {lang} {strings} />
<main id="main">
  {@render children?.()}
</main>
<Footer {strings} />
