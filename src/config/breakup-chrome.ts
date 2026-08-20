import type { BrandNavItem } from './brands';
import type { Locale } from './locales';
import { getLegalPath } from './legal';

/** Locales with marketing landing + quizzes (EN lives at brand root). */
export type MarketingLocale = 'en' | 'es' | 'fr' | 'de' | 'pl' | 'pt';

/** Non-EN locales that get `/breakup-reset/{locale}/` landings. */
export type LandingLocale = Exclude<MarketingLocale, 'en'>;

export const MARKETING_LOCALES: MarketingLocale[] = [
  'en',
  'es',
  'fr',
  'de',
  'pl',
  'pt',
];

export const LANDING_LOCALES: LandingLocale[] = [
  'es',
  'fr',
  'de',
  'pl',
  'pt',
];

export function isLandingLocale(locale: string): locale is LandingLocale {
  return (LANDING_LOCALES as string[]).includes(locale);
}

export function isMarketingLocale(locale: string): locale is MarketingLocale {
  return (MARKETING_LOCALES as string[]).includes(locale);
}

export function breakupHomeHref(locale: MarketingLocale = 'en'): string {
  return locale === 'en' ? '/breakup-reset/' : `/breakup-reset/${locale}/`;
}

export type QuizSlug =
  | 'friends-with-ex-quiz'
  | 'should-i-do-no-contact-quiz'
  | 'ready-to-date-again-quiz';

export function breakupQuizHref(
  slug: QuizSlug,
  locale: MarketingLocale
): string {
  return `/breakup-reset/blog/${locale}/${slug}/`;
}

export function marketingLandingHreflangPaths(): Partial<
  Record<string, string>
> {
  return Object.fromEntries(
    MARKETING_LOCALES.map((locale) => [locale, breakupHomeHref(locale)])
  );
}

export function marketingQuizHreflangPaths(
  slug: QuizSlug
): Partial<Record<string, string>> {
  return Object.fromEntries(
    MARKETING_LOCALES.map((locale) => [locale, breakupQuizHref(slug, locale)])
  );
}

const CHROME: Record<
  LandingLocale,
  {
    homeLabel: string;
    privacyLabel: string;
    downloadLabel: string;
    faqHeading: string;
    ogLocale: string;
  }
> = {
  es: {
    homeLabel: 'Inicio',
    privacyLabel: 'Privacidad',
    downloadLabel: 'Descargar',
    faqHeading: 'Preguntas frecuentes',
    ogLocale: 'es_ES',
  },
  fr: {
    homeLabel: 'Accueil',
    privacyLabel: 'Confidentialité',
    downloadLabel: 'Télécharger',
    faqHeading: 'Questions fréquentes',
    ogLocale: 'fr_FR',
  },
  de: {
    homeLabel: 'Start',
    privacyLabel: 'Datenschutz',
    downloadLabel: 'Herunterladen',
    faqHeading: 'Häufige Fragen',
    ogLocale: 'de_DE',
  },
  pl: {
    homeLabel: 'Start',
    privacyLabel: 'Prywatność',
    downloadLabel: 'Pobierz',
    faqHeading: 'Częste pytania',
    ogLocale: 'pl_PL',
  },
  pt: {
    homeLabel: 'Início',
    privacyLabel: 'Privacidade',
    downloadLabel: 'Baixar',
    faqHeading: 'Perguntas frequentes',
    ogLocale: 'pt_BR',
  },
};

export function getBreakupChrome(locale: Locale | MarketingLocale): {
  lang: Locale;
  homeHref: string;
  downloadLabel: string;
  faqHeading: string;
  nav: BrandNavItem[];
  ogLocale: string;
  ogLocaleAlternates: string[];
} {
  if (locale !== 'en' && locale in CHROME) {
    const landing = locale as LandingLocale;
    const ui = CHROME[landing];
    return {
      lang: landing,
      homeHref: breakupHomeHref(landing),
      downloadLabel: ui.downloadLabel,
      faqHeading: ui.faqHeading,
      nav: [
        { label: ui.homeLabel, href: breakupHomeHref(landing) },
        { label: ui.privacyLabel, href: getLegalPath('privacy', landing) },
      ],
      ogLocale: ui.ogLocale,
      ogLocaleAlternates: MARKETING_LOCALES.filter((l) => l !== landing).map(
        (l) => (l === 'en' ? 'en_US' : CHROME[l as LandingLocale].ogLocale)
      ),
    };
  }

  return {
    lang: 'en',
    homeHref: breakupHomeHref('en'),
    downloadLabel: 'Download',
    faqHeading: 'Frequently Asked Questions',
    nav: [
      { label: 'Home', href: '/breakup-reset/' },
      { label: 'Blog', href: '/breakup-reset/blog/en/' },
      { label: 'Privacy', href: getLegalPath('privacy', 'en') },
    ],
    ogLocale: 'en_US',
    ogLocaleAlternates: LANDING_LOCALES.map((l) => CHROME[l].ogLocale),
  };
}
