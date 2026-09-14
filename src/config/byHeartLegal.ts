export type LegalDocType = 'privacy' | 'terms';

// By Heart has no i18n (English only, deliberately), so unlike
// src/config/legal.ts this map has no per-locale variants.
export const BYHEART_LEGAL_FILE_MAP: Record<LegalDocType, string> = {
  privacy: 'PRIVACY_POLICY_APP.md',
  terms: 'TERMS_OF_SERVICE_APP.md',
};

export function getByHeartLegalPath(docType: LegalDocType): string {
  return `/by-heart/legal/${docType}/`;
}
