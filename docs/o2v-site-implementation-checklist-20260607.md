# O2V Site Implementation Checklist 20260607

Status: implementation-ready after Zhi approves the public content draft

## Baseline

- Working tree: `O:\O2VFramework`
- Branch: `o2v-site-content-system-upgrade-20260607`
- Baseline build command: `npm run build`
- Baseline build result before public page changes: passed
- Baseline route count: 22 generated static pages

## Content Approval Gate

Do not write final public content into routed pages until Zhi approves:

```text
docs/o2v-site-public-content-draft-20260607.md
```

The approved draft becomes the source for public website content.

## Files To Update After Approval

Primary content and navigation:

- `lib/content.ts`
- `components/Header.tsx`
- `components/ConfigurationSwitcher.tsx`
- `app/[locale]/page.tsx`
- `app/[locale]/enterprise/page.tsx`
- `app/[locale]/venture/page.tsx`
- `app/[locale]/ainova/page.tsx`
- `app/[locale]/valence/page.tsx`
- `Framework content is embedded in configuration home pages; the former standalone framework route is not used`
- `app/[locale]/copyright/page.tsx`
- `app/[locale]/download/page.tsx`

Public metadata and machine-readable files:

- `public/sitemap.xml`
- `public/llms.txt`
- `README.md`
- `docs/o2v-multi-configuration-site-upgrade-20260607.md`

## Version Requirements

All public identity surfaces must use:

```text
O2V Framework
Internal Version: v2.0
```

Use Enterprise Configuration PDF filenames with the 20260607 release date.

Where needed, distinguish:

- website / framework public release: `20260607`
- download filenames currently linked: `o2v-framework-enterprise-configuration-20260607-*.pdf`

## Route Requirements

Default Enterprise:

- `/`
- `/en`
- `/zh`
- `/de`
- `/en/enterprise`
- `/zh/enterprise`
- `/de/enterprise`

Venture:

- `/en/venture`
- `/zh/venture`
- `/de/venture`

Method pages:

- `/en/ainova`
- `/zh/ainova`
- `/de/ainova`
- `/en/valence`
- `/zh/valence`
- `/de/valence`

Shared:

- Framework content is embedded in `/en`, `/zh`, `/de`, and Venture configuration home pages; the former standalone framework routes are not used.
- `/en/principles`, `/zh/principles`, `/de/principles`
- `/en/download`, `/zh/download`, `/de/download`
- `/en/about`, `/zh/about`, `/de/about`
- `/en/copyright`, `/zh/copyright`, `/de/copyright`

## Public Content Boundaries

Must not expose:

- internal knowledge-base paths;
- playbook details;
- workshop templates;
- scorecards;
- calculation formulas;
- detailed decision matrices;
- client-specific details;
- specific partner or system names;
- confidential delivery procedures.

Must not use:

- `Personal Configuration`
- `Venture / Personal Configuration`

Use:

- `O2V Venture Configuration`
- `O2V 鍒涗笟閰嶇疆`

## Verification Commands After Implementation

Run:

```powershell
npm run build
Select-String -Path README.md,public\llms.txt,public\sitemap.xml,lib\content.ts,app\**\*.tsx,components\*.tsx -Pattern 'Personal Configuration|Venture / Personal Configuration' -CaseSensitive:$false
Select-String -Path README.md,public\llms.txt,lib\content.ts,app\**\*.tsx,components\*.tsx -Pattern 'O2V Framework 20260520|Internal Version: v1.5|鍐呴儴鐗堟湰锛歷1.5|Interne Version: v1.5' -CaseSensitive:$false
Select-String -Path lib\content.ts,app\**\*.tsx,components\*.tsx,public\llms.txt,README.md -Pattern 'zhi-consulting-knowledge-base|02_o2v_framework|04_playbooks|05_templates|calculation formula|scorecard|scoring formula|瀹㈡埛缁嗚妭|鍐呴儴鐭ヨ瘑搴? -CaseSensitive:$false
```

Expected:

- `npm run build` exits 0.
- forbidden configuration names return no matches.
- old website release identity returns no matches outside intentional PDF filename references.
- internal source / detailed method boundary terms return no matches outside the explicit copyright boundary statement and review docs.
