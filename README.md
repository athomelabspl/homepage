# At Home Labs Website

Multi-brand Astro site for [athomelabs.eu](https://athomelabs.eu): studio lobby + isolated app zones.

## Stack

- [Astro](https://astro.build) (static)
- MDX blog via content collections
- Netlify deploy (`dist/`)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Build

```bash
npm run build
npm run preview
```

## Test Netlify redirects locally

```bash
npm run build
npx netlify dev
```

Then open `http://localhost:8888/privacy-policy-en/` — should redirect to `/breakup-reset/legal/privacy/en/`.

## Project structure

```
src/
  config/          brands.ts, locales.ts, legal.ts
  content/
    breakup-blog/  MDX posts: {locale}/{slug}.mdx
  layouts/         StudioLayout, AppLayout
  pages/           Routes (studio + /breakup-reset/...)
public/
  _redirects       Legacy legal URL 301 rules
  _headers         BIMI + security headers
.policy-sync/      Legal markdown (CI sync source — do not move)
```

## Adding a blog post

Create `src/content/breakup-blog/en/your-slug.mdx`:

```mdx
---
title: "Your title"
description: "Meta description"
pubDate: 2026-06-10
locale: en
translationKey: your-slug
---

<AISummary>
- Key fact one
- Key fact two
</AISummary>

Your content here...
```

Published at `/breakup-reset/blog/en/your-slug/`.

## Environment variables

Copy `.env.example` to `.env` for optional PostHog and App Store URLs.

## Deployment

Netlify: build `npm run build`, publish `dist/`. Config in `netlify.toml`.
