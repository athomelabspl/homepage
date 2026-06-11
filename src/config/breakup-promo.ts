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
  image: '/breakup-reset/promo/todays-pulse.png',
  copies: {
    en: {
      title: 'Free support for the week ahead',
      subtitle: '',
      features: [
        'Completely free',
        'Three challenges a day',
        'At your own pace',
      ],
      comingSoonLabel: 'Coming soon',
      waitlistCtaLabel: 'Join the waitlist',
      liveCtaLabel: 'Get started',
      imageAlt:
        "Breakup Reset Today's Pulse screen with daily inspiration, insights, and peace tracking.",
    },
  } satisfies Partial<Record<Locale, PromoCopy>>,
} as const;

export function getPromoCopy(locale: Locale): PromoCopy {
  return breakupPromo.copies[locale] ?? breakupPromo.copies[DEFAULT_LOCALE]!;
}
