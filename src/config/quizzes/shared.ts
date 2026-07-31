import type { MarketingLocale } from '../breakup-chrome';
import { LANDING_LOCALES, MARKETING_LOCALES } from '../breakup-chrome';

/** Alias used by quiz copy modules. */
export type QuizLocale = MarketingLocale;

export interface QuizFaqItem {
  question: string;
  answer: string;
}

export interface QuizRelatedLink {
  href: string;
  title: string;
}

/**
 * Related-links block shown at the end of each quiz.
 * - EN: other breakup-reset articles + "Back to blog".
 * - Other marketing locales: only same-locale quizzes + app download CTA.
 */
export interface QuizRelatedSection {
  heading: string;
  items: QuizRelatedLink[];
  footerLabel: string;
  footerHref: string;
}

export const OG_LOCALE_MAP: Record<QuizLocale, string> = {
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  pl: 'pl_PL',
  pt: 'pt_BR',
};

export function ogLocaleAlternate(locale: QuizLocale): string[] {
  return MARKETING_LOCALES.filter((l) => l !== locale).map(
    (l) => OG_LOCALE_MAP[l]
  );
}

export function isNonEnMarketingLocale(
  locale: QuizLocale
): locale is Exclude<QuizLocale, 'en'> {
  return locale !== 'en' && (LANDING_LOCALES as string[]).includes(locale);
}
