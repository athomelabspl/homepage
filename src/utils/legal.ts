import fs from 'node:fs';
import path from 'node:path';
import type { Locale } from '../config/locales';
import type { LegalDocType } from '../config/legal';
import { LEGAL_FILE_MAP } from '../config/legal';
import { renderMarkdown } from './markdown';

const policySyncDir = path.join(process.cwd(), '.policy-sync');

export function loadLegalHtml(docType: LegalDocType, locale: Locale): string {
  const filename = LEGAL_FILE_MAP[docType][locale];
  const filePath = path.join(policySyncDir, filename);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Legal file not found: ${filePath}`);
  }

  const md = fs.readFileSync(filePath, 'utf-8');
  return renderMarkdown(md);
}

export function getLegalTitle(docType: LegalDocType, locale: Locale): string {
  if (docType === 'privacy') {
    const titles: Record<Locale, string> = {
      en: 'Privacy Policy',
      es: 'Política de privacidad',
      fr: 'Politique de confidentialité',
      de: 'Datenschutzerklärung',
      pt: 'Política de privacidade',
      pl: 'Polityka prywatności',
    };
    return titles[locale];
  }

  const titles: Record<Locale, string> = {
    en: 'Terms of Service',
    es: 'Términos de servicio',
    fr: "Conditions d'utilisation",
    de: 'Nutzungsbedingungen',
    pt: 'Termos de serviço',
    pl: 'Warunki korzystania z usługi',
  };
  return titles[locale];
}
