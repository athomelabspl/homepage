import { brands } from '../config/brands';

/** Stable placement ids for Play Console / analytics breakdowns. */
export const storePlacements = {
  homeHeaderDownload: 'home_header_download',
  homeHeroAndroid: 'home_hero_android',
  blogSidebarLaunch: 'blog_sidebar_launch',
  blogDownloadCta: 'blog_download_cta',
  blogPromo: 'blog_promo',
  quizFriendsWithEx: 'quiz_friends_with_ex',
  quizNoContact: 'quiz_no_contact',
  quizReadyToDate: 'quiz_ready_to_date',
} as const;

export type StorePlacement =
  (typeof storePlacements)[keyof typeof storePlacements];

const DEFAULT_UTM = {
  utm_source: 'website',
  utm_medium: 'web',
  utm_campaign: 'breakup_reset',
} as const;

function isPlayStoreUrl(url: string): boolean {
  try {
    return new URL(url).hostname.includes('play.google.com');
  } catch {
    return false;
  }
}

/**
 * Attach acquisition tracking to a store / CTA URL.
 * - Play Store: standard UTM params (+ `source` mirrored to utm_content)
 * - Other URLs (waitlist, App Store): `source` only
 */
export function withStoreTracking(
  url: string,
  content: string | StorePlacement
): string {
  const parsed = new URL(url);

  if (isPlayStoreUrl(url)) {
    parsed.searchParams.set('utm_source', DEFAULT_UTM.utm_source);
    parsed.searchParams.set('utm_medium', DEFAULT_UTM.utm_medium);
    parsed.searchParams.set('utm_campaign', DEFAULT_UTM.utm_campaign);
    parsed.searchParams.set('utm_content', content);
  }

  parsed.searchParams.set('source', content);
  return parsed.toString();
}

/** Canonical Breakup Reset Play Store URL with placement tracking. */
export function getBreakupPlayStoreUrl(
  content: string | StorePlacement
): string {
  const stores = brands['breakup-reset'].stores;
  const base =
    stores?.android?.url ??
    `https://play.google.com/store/apps/details?id=${stores?.android?.packageId ?? 'com.breakupreset'}`;
  return withStoreTracking(base, content);
}

/**
 * Prefer iOS when configured; otherwise tracked Play Store URL.
 * Non-Play destinations still receive `source`.
 */
export function getBreakupDownloadUrl(
  content: string | StorePlacement
): string {
  const iosUrl = brands['breakup-reset'].stores?.ios?.url;
  if (iosUrl) return withStoreTracking(iosUrl, content);
  return getBreakupPlayStoreUrl(content);
}
