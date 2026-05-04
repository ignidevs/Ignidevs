import type { Locale } from './locales';

export type Strings = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    skipToContent: string;
    home: string;
    services: string;
    team: string;
    contact: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    body: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
    bookCall: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

const en: Strings = {
  meta: {
    title: 'Ignidevs — We light up hard problems.',
    description:
      'Ignidevs is a small team that helps niche communities solve the problems no off-the-shelf tool ever will. We build SaaS that fits.'
  },
  nav: {
    skipToContent: 'Skip to content',
    home: 'Home',
    services: 'What we do',
    team: 'Team',
    contact: 'Contact',
    languageLabel: 'Language'
  },
  hero: {
    eyebrow: 'Studio · SaaS · Niche communities',
    title: 'We light up',
    titleAccent: 'hard problems.',
    subtitle:
      'Ignidevs is a small team that ships software for the communities the big platforms forget. We sit with you, find the real friction, and build the thing that finally makes it disappear.',
    ctaPrimary: 'Spark a project',
    ctaSecondary: 'See what we do'
  },
  mission: {
    eyebrow: 'Why we exist',
    title: 'Niche is not small. It is just specific.',
    body: 'Every community we have ever worked with had the same story: the generic tool nearly works, but the last 20% costs them hours every week. We focus on that last 20%. Smaller scope, sharper fit, software that actually feels made for the people using it.'
  },
  services: {
    eyebrow: 'What we do',
    title: 'Three ways we help.',
    items: [
      {
        title: 'SaaS for niche communities',
        body: 'From first sketch to a production product your community pays for. We design, build, host, and keep it healthy.'
      },
      {
        title: 'Discovery & shaping',
        body: 'A focused engagement to turn a vague problem into a roadmap. You leave with a plan you could hand to anyone.'
      },
      {
        title: 'Pickup & rescue',
        body: 'Inherited a half-built product or a stalled team? We come in, untangle it, and ship the next milestone.'
      }
    ]
  },
  team: {
    eyebrow: 'Team',
    title: 'Small on purpose.',
    subtitle: 'A handful of senior people, no middle layer, and a strong opinion about what "done" means.'
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Got a niche problem worth solving?',
    body: 'Tell us about your community and what is in the way. We reply within two working days.',
    emailLabel: 'Email us',
    bookCall: 'Book a call'
  },
  footer: {
    tagline: 'We light up hard problems.',
    rights: 'All rights reserved.'
  }
};

const es: Strings = {
  meta: {
    title: 'Ignidevs — Encendemos los problemas difíciles.',
    description:
      'Ignidevs es un equipo pequeño que ayuda a comunidades específicas a resolver lo que ninguna herramienta genérica resolverá. Construimos SaaS a medida.'
  },
  nav: {
    skipToContent: 'Saltar al contenido',
    home: 'Inicio',
    services: 'Qué hacemos',
    team: 'Equipo',
    contact: 'Contacto',
    languageLabel: 'Idioma'
  },
  hero: {
    eyebrow: 'Estudio · SaaS · Comunidades específicas',
    title: 'Encendemos los',
    titleAccent: 'problemas difíciles.',
    subtitle:
      'Ignidevs es un equipo pequeño que crea software para las comunidades que las grandes plataformas olvidan. Nos sentamos contigo, encontramos la verdadera fricción y construimos lo que la elimina.',
    ctaPrimary: 'Inicia un proyecto',
    ctaSecondary: 'Ver qué hacemos'
  },
  mission: {
    eyebrow: 'Por qué existimos',
    title: 'Específico no es pequeño. Solo es preciso.',
    body: 'Toda comunidad con la que hemos trabajado tenía la misma historia: la herramienta genérica casi funciona, pero ese último 20 % les cuesta horas cada semana. Nos enfocamos en ese 20 %. Alcance más reducido, ajuste más fino, software que parece hecho a propósito para quien lo usa.'
  },
  services: {
    eyebrow: 'Qué hacemos',
    title: 'Tres maneras de ayudarte.',
    items: [
      {
        title: 'SaaS para comunidades específicas',
        body: 'Desde el primer boceto hasta un producto en producción que tu comunidad paga. Diseñamos, construimos, alojamos y lo mantenemos sano.'
      },
      {
        title: 'Descubrimiento y definición',
        body: 'Una colaboración corta para convertir un problema difuso en una hoja de ruta. Te llevas un plan que cualquiera podría ejecutar.'
      },
      {
        title: 'Rescate y continuidad',
        body: '¿Heredaste un producto a medias o un equipo bloqueado? Entramos, lo desenredamos y entregamos el siguiente hito.'
      }
    ]
  },
  team: {
    eyebrow: 'Equipo',
    title: 'Pequeños a propósito.',
    subtitle: 'Un puñado de personas senior, sin capas intermedias y con una opinión firme sobre lo que significa "terminado".'
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Tienes un problema específico que valga la pena resolver?',
    body: 'Cuéntanos sobre tu comunidad y lo que se interpone. Respondemos en menos de dos días hábiles.',
    emailLabel: 'Escríbenos',
    bookCall: 'Reserva una llamada'
  },
  footer: {
    tagline: 'Encendemos los problemas difíciles.',
    rights: 'Todos los derechos reservados.'
  }
};

const sv: Strings = {
  meta: {
    title: 'Ignidevs — Vi tänder gnistan i svåra problem.',
    description:
      'Ignidevs är ett litet team som hjälper nischade communities lösa det ingen standardprodukt klarar. Vi bygger SaaS som passar.'
  },
  nav: {
    skipToContent: 'Hoppa till innehåll',
    home: 'Hem',
    services: 'Det vi gör',
    team: 'Team',
    contact: 'Kontakt',
    languageLabel: 'Språk'
  },
  hero: {
    eyebrow: 'Studio · SaaS · Nischade communities',
    title: 'Vi tänder gnistan',
    titleAccent: 'i svåra problem.',
    subtitle:
      'Ignidevs är ett litet team som bygger mjukvara för communities som de stora plattformarna glömmer. Vi sätter oss ner med dig, hittar den verkliga friktionen och bygger det som äntligen får den att försvinna.',
    ctaPrimary: 'Starta ett projekt',
    ctaSecondary: 'Se vad vi gör'
  },
  mission: {
    eyebrow: 'Därför finns vi',
    title: 'Nisch är inte litet. Det är bara specifikt.',
    body: 'Varje community vi jobbat med har samma historia: standardverktyget funkar nästan, men de sista 20 procenten kostar dem timmar varje vecka. Vi fokuserar på de 20 procenten. Mindre omfång, vassare passform, mjukvara som faktiskt känns gjord för dem som använder den.'
  },
  services: {
    eyebrow: 'Det vi gör',
    title: 'Tre sätt vi hjälper på.',
    items: [
      {
        title: 'SaaS för nischade communities',
        body: 'Från första skiss till en produkt i drift som din community betalar för. Vi designar, bygger, driftar och håller den frisk.'
      },
      {
        title: 'Förstudie & ramning',
        body: 'En kort insats för att förvandla ett luddigt problem till en plan. Du går därifrån med en roadmap vem som helst kan exekvera.'
      },
      {
        title: 'Övertagande & räddning',
        body: 'Ärvt en halvbyggd produkt eller ett team som kört fast? Vi kliver in, reder ut och levererar nästa milstolpe.'
      }
    ]
  },
  team: {
    eyebrow: 'Team',
    title: 'Små med flit.',
    subtitle: 'En handfull seniora personer, inga mellanlager, och en stark åsikt om vad "klart" faktiskt betyder.'
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Har du ett nischat problem värt att lösa?',
    body: 'Berätta om din community och vad som står i vägen. Vi svarar inom två arbetsdagar.',
    emailLabel: 'Mejla oss',
    bookCall: 'Boka ett samtal'
  },
  footer: {
    tagline: 'Vi tänder gnistan i svåra problem.',
    rights: 'Alla rättigheter förbehållna.'
  }
};

export const STRINGS: Record<Locale, Strings> = { en, es, sv };

export function t(locale: Locale): Strings {
  return STRINGS[locale];
}
