import type { Locale } from './locales';
import { DEFAULT_LOCALE } from './locales';

export type PromoMode = 'coming-soon' | 'waitlist' | 'live';

export interface PromoCopy {
  title: string;
  subtitle: string;
  features: string[];
  comingSoonLabel: string;
  waitlistCtaLabel: string;
  liveCtaLabel: string;
  imageAlt: string;
}

export const breakupPromo = {
  mode: 'coming-soon' satisfies PromoMode,
  waitlistUrl: '',
  image: '/breakup-reset/promo/coming-soon.png',
  copies: {
    en: {
      title: 'Time to heal after your breakup',
      subtitle:
        'No two breakups feel the same. Get support that understands you.',
      features: [
        'Daily challenges for your situation',
        'Recovery that fits how you actually feel',
        'Start your journey in 2 minutes',
      ],
      comingSoonLabel: 'Coming soon',
      waitlistCtaLabel: 'Join the waitlist',
      liveCtaLabel: 'Get started',
      imageAlt:
        'Breakup Reset app preview: daily challenges, personalized recovery support, and a calm path forward after a breakup.',
    },
  } satisfies Partial<Record<Locale, PromoCopy>>,
} as const;

export function getPromoCopy(locale: Locale): PromoCopy {
  return breakupPromo.copies[locale] ?? breakupPromo.copies[DEFAULT_LOCALE]!;
}
