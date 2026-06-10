export type BrandId = 'studio' | 'breakup-reset';

export interface BrandNavItem {
  label: string;
  href: string;
}

export interface BrandConfig {
  id: BrandId;
  basePath: string;
  name: string;
  tokens: BrandId;
  tagline?: string;
  description?: string;
  nav: BrandNavItem[];
  analytics?: {
    posthogProjectKey?: string;
    posthogHost: string;
    enabled: boolean;
  };
  stores?: {
    ios: { appId?: string; url?: string };
    android: { packageId: string; url?: string };
    deepLinkScheme: string;
  };
  smartAppBanner?: boolean;
}

const posthogHost = 'https://eu.i.posthog.com';

export const brands: Record<BrandId, BrandConfig> = {
  studio: {
    id: 'studio',
    basePath: '/',
    name: 'At Home Labs',
    tokens: 'studio',
    nav: [
      { label: 'About us', href: '/about/' },
      { label: 'Our apps', href: '/apps/' },
    ],
    analytics: {
      posthogProjectKey: import.meta.env.PUBLIC_POSTHOG_STUDIO_KEY,
      posthogHost,
      enabled: Boolean(import.meta.env.PUBLIC_POSTHOG_STUDIO_KEY),
    },
  },
  'breakup-reset': {
    id: 'breakup-reset',
    basePath: '/breakup-reset/',
    name: 'Breakup Reset',
    tokens: 'breakup-reset',
    tagline: 'Navigate your breakup, rediscover yourself.',
    description:
      'A gentle, structured reset to help you move forward after a breakup.',
    nav: [
      { label: 'Home', href: '/breakup-reset/' },
      { label: 'Blog', href: '/breakup-reset/blog/en/' },
      { label: 'Privacy', href: '/breakup-reset/legal/privacy/en/' },
    ],
    analytics: {
      posthogProjectKey: import.meta.env.PUBLIC_POSTHOG_BREAKUP_KEY,
      posthogHost,
      enabled: Boolean(import.meta.env.PUBLIC_POSTHOG_BREAKUP_KEY),
    },
    stores: {
      ios: {
        appId: import.meta.env.PUBLIC_BREAKUP_IOS_APP_ID,
        url: import.meta.env.PUBLIC_BREAKUP_IOS_URL,
      },
      android: {
        packageId: 'com.athomelabs.breakupreset',
        url: import.meta.env.PUBLIC_BREAKUP_ANDROID_URL,
      },
      deepLinkScheme: 'breakupreset://',
    },
    smartAppBanner: true,
  },
};

export function getBrandFromPath(pathname: string): BrandConfig {
  if (pathname.startsWith('/breakup-reset')) {
    return brands['breakup-reset'];
  }
  return brands.studio;
}
