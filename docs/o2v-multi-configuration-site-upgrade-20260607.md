# O2V Multi-Configuration Site Upgrade 20260607

Status: implemented after Zhi confirmed `docs/o2v-site-public-content-draft-20260607.md`.

## Scope

- Public identity upgraded to `O2V Framework / Official Public Release 20260614 / Internal Version: v2.0`.
- Default public website entry changed to O2V Enterprise Configuration.
- O2V Framework retained as the only parent framework.
- O2V Enterprise Configuration now presents AiNOVA and Valence as the current public methodology scope.
- AiNOVA is positioned as `AI-native Operating Model for Enterprise Value Realization`.
- Valence is positioned as `Product Value Operations & Governance Model`.
- Venture content is retained as `O2V Venture Configuration`.
- Future ecosystem items are presented only as roadmap-level context.

## Routes Added Or Confirmed

- `/en/enterprise`, `/zh/enterprise`, `/de/enterprise`
- `/en/venture`, `/zh/venture`, `/de/venture`
- `/en/ainova`, `/zh/ainova`, `/de/ainova`
- `/en/valence`, `/zh/valence`, `/de/valence`
- Existing `/`, `/en`, `/zh`, `/de` now point to the Enterprise-first public entry.

## Public Boundary

The public website content does not disclose detailed playbooks, templates, scorecards, calculation formulas, internal knowledge-base paths, client details, specific systems, or partner names.

## Files Updated

- `lib/content.ts`
- `components/Header.tsx`
- `components/LanguageSwitcher.tsx`
- `components/ConfigurationSwitcher.tsx`
- `components/EnterpriseContentPage.tsx`
- `components/PublicContentPage.tsx`
- `app/[locale]/page.tsx`
- `app/[locale]/enterprise/page.tsx`
- `app/[locale]/venture/page.tsx`
- `app/[locale]/ainova/page.tsx`
- `app/[locale]/valence/page.tsx`
- `Framework content is embedded in configuration home pages; the former standalone framework route is not used`
- `app/[locale]/principles/page.tsx`
- `app/[locale]/copyright/page.tsx`
- `app/[locale]/about/page.tsx`
- `public/sitemap.xml`
- `public/llms.txt`
- `README.md`
- `scripts/verify-public-site-boundaries.cjs`
- `scripts/generate-framework-docs.cjs`

## Checks

- `npm run verify:public-site -- --self-test`
- `npm run verify:public-site`
- `npm run build`
