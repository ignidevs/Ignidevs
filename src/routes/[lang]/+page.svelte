<script lang="ts">
  import { team } from '$lib/data/team';
  import { products } from '$lib/data/products';
  import { SITE } from '$lib/site';
  import EmberDivider from '$lib/components/EmberDivider.svelte';
  import Reveal from '$lib/components/Reveal.svelte';

  let { data } = $props();
  let lang = $derived(data.lang);
  let strings = $derived(data.strings);
</script>

<section class="hero" data-testid="hero">
  <div class="container">
    <span class="eyebrow">{strings.hero.eyebrow}</span>
    <h1>
      {strings.hero.title}
      <span class="ember">{strings.hero.titleAccent}</span>
    </h1>
    <p class="lede">{strings.hero.subtitle}</p>
    <div class="cta-row">
      <a class="button" href="#contact">{strings.hero.ctaPrimary} →</a>
      <a class="button secondary" href="#what-we-do">{strings.hero.ctaSecondary}</a>
    </div>
  </div>
  <div class="ember-glow" aria-hidden="true"></div>
</section>

<section class="section" id="mission" data-testid="mission">
  <div class="container narrow">
    <span class="eyebrow">{strings.mission.eyebrow}</span>
    <h2>{strings.mission.title}</h2>
    <p>{strings.mission.body}</p>
  </div>
</section>

<section class="section" id="what-we-do" data-testid="services">
  <div class="container">
    <span class="eyebrow">{strings.services.eyebrow}</span>
    <h2>{strings.services.title}</h2>
    <ul class="services-grid">
      {#each strings.services.items as item, i}
        <li class="service-card">
          <span class="numeral">0{i + 1}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<EmberDivider />

<section class="section products-section" id="products" data-testid="products">
  <div class="container">
    <Reveal>
      <span class="eyebrow">{strings.products.eyebrow}</span>
      <h2>{strings.products.title}</h2>
      <p class="section-lede">{strings.products.lede}</p>
    </Reveal>

    <ul class="products-grid">
      {#each products as product, i}
        <li>
          <Reveal delay={120 + i * 80}>
            <article class="product-card">
              <header class="product-head">
                <div class="product-name">
                  <span class="product-mark" aria-hidden="true">
                    <span class="dot"></span>
                  </span>
                  <span class="product-title">{product.name}</span>
                </div>
                <span class="status status-{product.status}">{product.statusLabel[lang]}</span>
              </header>
              <p class="tagline">{product.tagline[lang]}</p>
              <p class="description">{product.description[lang]}</p>
              <ul class="features">
                {#each product.features[lang] as feature}
                  <li>{feature}</li>
                {/each}
              </ul>
              <a class="button" href={product.url} target="_blank" rel="noopener noreferrer">
                {product.cta[lang]} ↗
              </a>
            </article>
          </Reveal>
        </li>
      {/each}
      <li class="more-soon" aria-hidden="true">
        <Reveal delay={120 + products.length * 80}>
          <div class="placeholder-card">
            <span class="dashed"></span>
            <p>{strings.products.moreSoon}</p>
          </div>
        </Reveal>
      </li>
    </ul>
  </div>
</section>

<section class="section" id="team" data-testid="team">
  <div class="container">
    <span class="eyebrow">{strings.team.eyebrow}</span>
    <h2>{strings.team.title}</h2>
    <p class="section-lede">{strings.team.subtitle}</p>
    <ul class="team-grid">
      {#each team as member}
        <li class="team-card">
          <div class="avatar" aria-hidden="true">{member.initials}</div>
          <h3>{member.name}</h3>
          <p class="role">{member.role[lang]}</p>
          <p class="bio">{member.bio[lang]}</p>
          {#if member.personalSite}
            <a
              class="personal-site"
              href={member.personalSite}
              target="_blank"
              rel="noopener noreferrer me"
            >
              {member.personalSite.replace(/^https?:\/\//, '')} ↗
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>

<section class="section contact-section" id="contact" data-testid="contact">
  <div class="container narrow">
    <span class="eyebrow">{strings.contact.eyebrow}</span>
    <h2>{strings.contact.title}</h2>
    <p>{strings.contact.body}</p>
    <div class="cta-row">
      <a class="button" href={`mailto:${SITE.email}`}>{strings.contact.emailLabel} →</a>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: clamp(4rem, 9vw, 7rem) 0 clamp(3rem, 6vw, 5rem);
    overflow: hidden;
  }

  .hero h1 {
    max-width: 18ch;
  }

  .ember {
    background: var(--gradient-ember);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .lede {
    max-width: 56ch;
    font-size: 1.125rem;
    color: var(--fg-muted);
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: var(--space-5);
  }

  .ember-glow {
    position: absolute;
    inset: auto -10% -50% auto;
    width: 50rem;
    height: 50rem;
    background: radial-gradient(closest-side, rgba(255, 106, 31, 0.18), transparent 70%);
    pointer-events: none;
    z-index: -1;
  }

  .narrow {
    max-width: 720px;
  }

  .section-lede {
    max-width: 56ch;
  }

  .services-grid,
  .team-grid {
    list-style: none;
    margin: var(--space-6) 0 0;
    padding: 0;
    display: grid;
    gap: 1.25rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 720px) {
    .services-grid,
    .team-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .service-card,
  .team-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    transition: border-color 0.18s ease, transform 0.18s ease;
  }

  .service-card:hover,
  .team-card:hover {
    border-color: var(--border-strong);
    transform: translateY(-2px);
  }

  .numeral {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--accent-2);
    letter-spacing: 0.1em;
  }

  .service-card h3,
  .team-card h3 {
    margin-top: var(--space-3);
    color: var(--fg);
  }

  .avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--gradient-ember-soft);
    border: 1px solid var(--border-strong);
    display: grid;
    place-items: center;
    font-family: var(--font-mono);
    font-weight: 600;
    color: var(--accent-2);
    margin-bottom: var(--space-3);
  }

  .role {
    color: var(--accent-2);
    font-size: 0.9rem;
    margin-bottom: var(--space-2);
  }

  .bio {
    color: var(--fg-muted);
    font-size: 0.95rem;
  }

  .personal-site {
    display: inline-block;
    margin-top: var(--space-3);
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--accent-2);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.18s ease, color 0.18s ease;
  }

  .personal-site:hover {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }

  .contact-section {
    text-align: center;
  }

  .contact-section .cta-row {
    justify-content: center;
  }

  .products-section {
    padding-top: var(--space-7);
  }

  .products-grid {
    list-style: none;
    margin: var(--space-6) 0 0;
    padding: 0;
    display: grid;
    gap: 1.25rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 880px) {
    .products-grid {
      grid-template-columns: 1.6fr 1fr;
    }
  }

  .product-card {
    position: relative;
    height: 100%;
    background:
      radial-gradient(120% 80% at 0% 0%, rgba(255, 106, 31, 0.12), transparent 60%),
      var(--bg-card);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    padding: clamp(1.5rem, 3vw, 2.25rem);
    overflow: hidden;
  }

  .product-card::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 1px;
    background: var(--gradient-ember);
    opacity: 0.85;
  }

  .product-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: var(--space-4);
  }

  .product-name {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
  }

  .product-mark {
    display: inline-flex;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--gradient-ember);
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 24px rgba(255, 106, 31, 0.45);
  }

  .product-mark .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-fg);
  }

  .product-title {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .status {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 0.3rem 0.6rem;
    border-radius: 999px;
    border: 1px solid var(--border-strong);
    color: var(--accent-2);
  }

  .status-live {
    background: rgba(255, 106, 31, 0.12);
    border-color: var(--accent);
    color: var(--accent-2);
  }

  .tagline {
    font-size: 1.125rem;
    color: var(--fg);
    margin-bottom: var(--space-3);
  }

  .description {
    color: var(--fg-muted);
    margin-bottom: var(--space-5);
  }

  .features {
    list-style: none;
    margin: 0 0 var(--space-6);
    padding: 0;
    display: grid;
    gap: 0.5rem;
  }

  .features li {
    color: var(--fg-muted);
    font-size: 0.95rem;
    padding-left: 1.25rem;
    position: relative;
  }

  .features li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--gradient-ember);
  }

  .more-soon {
    list-style: none;
  }

  .placeholder-card {
    height: 100%;
    min-height: 200px;
    border-radius: var(--radius-lg);
    border: 1px dashed var(--border-strong);
    display: grid;
    place-items: center;
    color: var(--fg-dim);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-align: center;
    padding: 1.5rem;
  }

  .placeholder-card p {
    margin: 0;
  }
</style>
