<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { LOCALES, type Locale } from '$lib/i18n/locales';
  import { SITE } from '$lib/site';
  import { team } from '$lib/data/team';

  let { data, children } = $props();
  let lang = $derived(data.lang);
  let strings = $derived(data.strings);

  const OG_LOCALE: Record<Locale, string> = {
    en: 'en_US',
    es: 'es_ES',
    sv: 'sv_SE'
  };

  const jsonLd = $derived(
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      description: strings.meta.description,
      founder: team.map((m) => ({
        '@type': 'Person',
        name: m.name,
        url: m.personalSite,
        sameAs: [m.personalSite, m.linkedin].filter(Boolean)
      }))
    }).replace(/</g, '\\u003c')
  );
</script>

<svelte:head>
  <title>{strings.meta.title}</title>
  <meta name="description" content={strings.meta.description} />
  <link rel="canonical" href={`${SITE.url}/${lang}/`} />
  {#each LOCALES as l}
    <link rel="alternate" hreflang={l} href={`${SITE.url}/${l}/`} />
  {/each}
  <link rel="alternate" hreflang="x-default" href={`${SITE.url}/en/`} />
  <meta property="og:site_name" content={SITE.name} />
  <meta property="og:title" content={strings.meta.title} />
  <meta property="og:description" content={strings.meta.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${SITE.url}/${lang}/`} />
  <meta property="og:locale" content={OG_LOCALE[lang]} />
  {#each LOCALES.filter((l) => l !== lang) as l}
    <meta property="og:locale:alternate" content={OG_LOCALE[l]} />
  {/each}
  <meta name="twitter:card" content="summary" />
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<Header {lang} {strings} />
<main id="main">
  {@render children?.()}
</main>
<Footer {strings} />
