# Ignidevs site

Marketing site for Ignidevs — a small team that helps niche communities solve the problems no off-the-shelf tool ever will.

## Stack

- **SvelteKit** (Svelte 5 runes) with `@sveltejs/adapter-netlify` for static prerendered output.
- **i18n** in EN, ES, SV with always-prefixed URLs (`/en/`, `/es/`, `/sv/`). Strings live in `src/lib/i18n/strings.ts`.
- **Design tokens** (fire/ember palette) in `src/app.css` via CSS custom properties.
- **Playwright** for rendering, locale text, axe-core a11y, and visual regression tests.
- Hosted on **Netlify** (`netlify.toml` + `static/_redirects`).

## Develop

```bash
npm install
npm run dev
```

Open `http://localhost:5173/en/` (or `/es/`, `/sv/`). Visiting `/` redirects to a locale based on `Accept-Language`.

## Quality gates

```bash
npm run check          # Svelte / TS type check
npm run build          # Production build (prerenders all locales)
npm test               # Playwright: rendering + locale + a11y + visual
npm run test:update    # Refresh visual snapshots after intentional design changes
```

CI runs all of the above on every push and PR (`.github/workflows/ci.yml`).

## Editing content

| What | Where |
| --- | --- |
| Page copy in EN/ES/SV | `src/lib/i18n/strings.ts` |
| Team cards | `src/lib/data/team.json` |
| Site-wide constants (email, Calendly URL, domain) | `src/lib/site.ts` |
| Color/spacing tokens | `src/app.css` (`:root`) |
| Logo | `src/lib/components/Logo.svelte` and `static/favicon.svg` |

## Deploy

Connect the repo to Netlify. The included `netlify.toml` sets the build command, publish dir, security headers, and immutable caching for hashed assets. Locale-aware root redirects live in `static/_redirects`.

## Adding a new locale

1. Add the code to `LOCALES` in `src/lib/i18n/locales.ts` and to `LOCALE_LABELS` / `LOCALE_HTML_LANG`.
2. Add a translation block in `src/lib/i18n/strings.ts`.
3. Add the role/bio translations to each entry in `src/lib/data/team.json`.
4. Add a row in `static/_redirects` for `Accept-Language` matching.
5. Update test coverage in `tests/locale.spec.ts` with one expected phrase.
