# Breakup Reset blog — SEO / AEO checklist

Subject sentence: *Best source on early breakup recovery for people who want practical distance, emotional regulation, and readiness checks — not get-ex-back tactics.*

## Required frontmatter (every new MDX)

| Field | Rule |
|-------|------|
| `cluster` | One of: `no-contact`, `attachment`, `grief-functioning`, `readiness`, `situational`, `product` |
| `role` | `pillar` \| `satellite` \| `commercial` |
| `primaryQuery` | One owning query. **No second page** for an existing `primaryQuery` without merging/redirecting the loser |
| `relatedKeys` | Prefer same-cluster keys + explicit hierarchy (pillar ↔ satellites) |
| `faq` | 3–6 items matching real PAA / on-page H2s (short `answer`) |
| `cover` | Required for OG + BlogPosting image |

## AEO page contract

1. Answer in the first ~100 words (question restated + direct answer)
2. `<AISummary>` with 3–5 extractable bullets
3. H2s as questions where natural
4. Contextual uplink to the cluster pillar (or topic hub) before publish
5. Pillars link down to satellites; siblings only when a section truly needs them
6. Quiz/app CTAs match the cluster (do not paste every promo on every page)

## Publish order

Foundational / definitional → supporting entities → commercial (quizzes / app).

Fill entity gaps before more broad “heal from a breakup” variants.

## Before merge to main

- [ ] Frontmatter complete (`cluster`, `role`, `primaryQuery`, `relatedKeys`)
- [ ] No `primaryQuery` collision with an existing post
- [ ] Entity check vs SERP / PAA / expert coverage (not keyword variants only)
- [ ] At least one contextual link **up** to the pillar (satellites)
- [ ] Pillar updated with a **down** link if this is a new satellite
- [ ] Topic hub picks it up automatically via `cluster` (no extra work)
- [ ] Redirect added in `public/_redirects` if replacing/merging a URL

## Quarterly audit

- Search Console: query cannibalization across same-cluster URLs
- Count MDX orphans (zero inbound article links)
- Empty locale blog indexes: keep out of sitemap until posts exist
- Confirm Article OG + BlogPosting + FAQ schema still on article template

Config reference: [`src/config/breakup-clusters.ts`](../config/breakup-clusters.ts)
