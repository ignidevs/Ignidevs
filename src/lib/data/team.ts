import teamData from './team.json';
import type { Locale } from '$lib/i18n/locales';

export type TeamMember = {
  id: string;
  name: string;
  role: Record<Locale, string>;
  bio: Record<Locale, string>;
  initials: string;
};

export const team: TeamMember[] = teamData as TeamMember[];
