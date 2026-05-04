import type { Locale } from '$lib/i18n/locales';

export type Product = {
  id: string;
  name: string;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  features: Record<Locale, string[]>;
  url: string;
  cta: Record<Locale, string>;
  status: 'live' | 'beta' | 'building';
  statusLabel: Record<Locale, string>;
};

export const products: Product[] = [
  {
    id: 'echo',
    name: 'Echo',
    tagline: {
      en: 'Community ops for Discord, in one bot.',
      es: 'Operaciones de comunidad para Discord, en un solo bot.',
      sv: 'Community-ops för Discord, i en enda bot.'
    },
    description: {
      en: 'Echo replaces the half-dozen single-purpose bots most Discord servers stitch together. Moderation, tickets, leveling, automation, and analytics — one install, one dashboard.',
      es: 'Echo sustituye el conjunto de bots monofunción que la mayoría de servidores de Discord acaban encadenando. Moderación, tickets, niveles, automatización y analítica — una instalación, un panel.',
      sv: 'Echo ersätter den halvdussin enskilda botar som de flesta Discord-servrar sytt ihop. Moderering, ärenden, leveling, automatisering och analys — en installation, en dashboard.'
    },
    features: {
      en: [
        'AI-assisted moderation with full audit trail',
        'Support tickets with transcripts and SLAs',
        'Engagement & XP with seasonal rewards',
        'Onboarding, posting & escalation automations',
        'Real-time retention and channel analytics'
      ],
      es: [
        'Moderación asistida por IA con registro completo',
        'Tickets de soporte con transcripciones y SLAs',
        'Compromiso y XP con recompensas por temporada',
        'Automatizaciones de onboarding, publicación y escalado',
        'Analítica de retención y canales en tiempo real'
      ],
      sv: [
        'AI-assisterad moderering med fullt revisionsspår',
        'Supportärenden med transkript och SLA:er',
        'Engagemang och XP med säsongsbelöningar',
        'Automatisering för onboarding, publicering och eskalering',
        'Realtidsanalys av retention och kanaler'
      ]
    },
    url: 'https://goecho.xyz/',
    cta: {
      en: 'Visit goecho.xyz',
      es: 'Ir a goecho.xyz',
      sv: 'Besök goecho.xyz'
    },
    status: 'live',
    statusLabel: {
      en: 'Live',
      es: 'En vivo',
      sv: 'Live'
    }
  }
];
