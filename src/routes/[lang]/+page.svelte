<script lang="ts">
  import { team } from '$lib/data/team';
  import { SITE } from '$lib/site';

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
      <a class="button secondary" href={SITE.calendly} rel="noopener noreferrer">
        {strings.contact.bookCall}
      </a>
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

  .contact-section {
    text-align: center;
  }

  .contact-section .cta-row {
    justify-content: center;
  }
</style>
