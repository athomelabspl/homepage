export type BrandId = 'studio' | 'breakup-reset';

export interface BrandNavItem {
  label: string;
  href: string;
}

export interface BrandConfig {
  id: BrandId;
  basePath: string;
  name: string;
  logo?: string;
  tokens: BrandId;
  tagline?: string;
  description?: string;
  nav: BrandNavItem[];
  analytics?: {
    posthogProjectKey?: string;
    posthogHost: string;
    enabled: boolean;
  };
  marketing?: {
    metaPixelId?: string;
    tiktokPixelId?: string;
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
      { label: 'About', href: '/about/' },
      { label: 'Portfolio', href: '/#apps' },
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
    logo: '/breakup-reset/logos/bamboo-mark.svg',
    tokens: 'breakup-reset',
    tagline: "You're in the right place.",
    description:
      'No two breakups feel the same. Get support that understands you.',
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
    marketing: {
      metaPixelId:
        import.meta.env.PUBLIC_BREAKUP_META_PIXEL_ID ?? '1577758434133021',
      tiktokPixelId:
        import.meta.env.PUBLIC_BREAKUP_TIKTOK_PIXEL_ID ?? 'D9UO3TBC77U55G1DPKS0',
    },
    stores: {
      ios: {
        appId: '6782842737',
        url: 'https://apps.apple.com/pl/app/breakup-reset/id6782842737',
      },
      android: {
        packageId: 'com.breakupreset',
        url:
          import.meta.env.PUBLIC_BREAKUP_ANDROID_URL ??
          'https://play.google.com/store/apps/details?id=com.breakupreset',
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
