import type { Locale } from './locales';

export type LegalDocType = 'privacy' | 'terms';

export const LEGAL_FILE_MAP: Record<
  LegalDocType,
  Record<Locale, string>
> = {
  privacy: {
    en: 'PRIVACY_POLICY_APP.en.md',
    es: 'PRIVACY_POLICY_APP.es.md',
    fr: 'PRIVACY_POLICY_APP.fr.md',
    de: 'PRIVACY_POLICY_APP.de.md',
    pt: 'PRIVACY_POLICY_APP.pt.md',
    pl: 'PRIVACY_POLICY_APP.md',
  },
  terms: {
    en: 'TERMS_OF_SERVICE_APP.en.md',
    es: 'TERMS_OF_SERVICE_APP.es.md',
    fr: 'TERMS_OF_SERVICE_APP.fr.md',
    de: 'TERMS_OF_SERVICE_APP.de.md',
    pt: 'TERMS_OF_SERVICE_APP.pt.md',
    pl: 'TERMS_OF_SERVICE_APP.md',
  },
};

export function getLegalPath(docType: LegalDocType, locale: Locale): string {
  return `/breakup-reset/legal/${docType}/${locale}/`;
}
