// By Heart's blog has no locales, unlike Breakup Reset's — so this stays a
// small, single-language counterpart to utils/blog.ts rather than adding a
// locale parameter to that file's locale-keyed helpers. Pure, locale-agnostic
// helpers (readingTimeMinutes, postSlug) are reused directly from there.

export function formatByHeartBlogDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
