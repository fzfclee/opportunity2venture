# O2V Framework Website

Official static publication site for **O2V Framework**, the **Opportunity-to-Value Framework**.

## Publication Identity

- Project name: O2V Framework website
- Official public release date: 20260614
- Internal version: v2.0
- Brand: O2V Framework / Opportunity-to-Value Framework
- Main domain: https://www.o2vframework.com
- Backup domain: https://www.opportunity2venture.com
- Backup domain status: legacy alias / historical alias / backup domain

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel
- App Router static pages

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build And Verification

```bash
npm run build
npm run verify:public-site
```

## Important Content Rules

- O2V Framework is the only parent framework.
- O2V Framework uses Opportunity-to-Value Framework as the primary brand meaning.
- Current public configurations are O2V Enterprise Configuration, O2V Venture Configuration, and O2V Personal Configuration.
- Each configuration has its own Home / framework introduction page and its own configuration-specific CLEAR / Signal-to-Action page.
- Default public entry remains Enterprise Home at `/en` and `/zh`; `/enterprise` is a compatibility redirect.
- O2V Enterprise Configuration currently centers on AiNOVA and Valence and uses CLEAR in the Enterprise Configuration as the signal-to-action front layer.
- O2V Personal Configuration centers on CLEAR / Signal-to-Action as the primary public method asset.
- AiNOVA is the AI-native Operating Model for Enterprise Value Realization, not an IT or Digital & Tech department model.
- Valence is the Product Value Operations & Governance Model. It designs value before major investment, validates value after launch, and governs value throughout operation. It remains an independent O2V method asset and can be used with AiNOVA.
- O2V Venture Configuration is retained for venture-context opportunity judgment and uses CLEAR in the Venture Configuration as its signal-to-action front layer.
- Core Principles are shared by Enterprise, Venture, and Personal configurations. Configuration-specific method practices are concrete expressions of the same principles.
- Opportunity-to-Venture is retained only as a venture-context configuration / historical release wording.
- Core slogan is: From Signal to Impact. From Idea to Asset.
- Evidence runs through every step of O2V. Signals, Business Cases, and Value Stories should be supported by evidence.
- Impact in the slogan is intentionally neutral. O2V uses evidence to reveal whether an opportunity creates positive impact, weak impact, negative impact, or no meaningful impact, and then supports Proceed, Pivot, Reframe, or Stop decisions.
- Primary 9-step chain ends with Value Story, not Financing Story.
- Financing Story can appear only as a venture-context form of Value Story.
- Toolkit, Agents, Evidence System, Advisory Services, and Partner Ecosystem are future ecosystem roadmap items.
- The public website content does not disclose detailed playbooks, templates, scoring rules, prompt chains, client thresholds, calculation methods, client details, specific systems, partner names, or internal working materials.
- Primary website logo is the blue-purple version with a transparent background.
- Do not use O2V Methodology as the main brand.
- Do not use Agile Manifesto-style "A over B" language.
- Do not add Daily / Weekly / Monthly outputs to the framework.
- Framework Deliverables must remain generic.
- Public website identity uses O2V Framework with Official Public Release 20260614 and Internal Version v2.0.
- Current download links use Enterprise Configuration filenames with the 20260607 release date.
- Internal version uses v2.0.
- Canonical domain is https://www.o2vframework.com.

## Publish to GitHub

On Windows, run:

```cmd
publish-to-github.cmd
```

The script publishes this project to:

```text
Current repo pending rename: https://github.com/fzfclee/opportunity2venture.git
```

## Repository Rename Plan

- Current repo: `fzfclee/opportunity2venture`
- Recommended future repo: `fzfclee/o2v-framework-site`
- `opportunity2venture` is historical naming from the original Opportunity-to-Venture release.
- `opportunity2venture.com` is retained only as a legacy alias / backup domain.
- Canonical brand and domain are O2V Framework / https://www.o2vframework.com.
- Do not rename the GitHub repository until explicitly authorized.

## Routes

- `/` redirects to `/en`
- `/en`, `/zh`
- `/en/enterprise`, `/zh/enterprise` redirect to the language home pages
- `/en/enterprise/clear`, `/zh/enterprise/clear`
- `/en/venture`, `/zh/venture`
- `/en/venture/clear`, `/zh/venture/clear`
- `/en/personal`, `/zh/personal`
- `/en/personal/clear`, `/zh/personal/clear`
- `/en/ainova`, `/zh/ainova`
- `/en/valence`, `/zh/valence`
- `/en/enterprise/principles`, `/zh/enterprise/principles`
- `/en/venture/principles`, `/zh/venture/principles`
- `/en/personal/principles`, `/zh/personal/principles`
- `/en/copyright`, `/zh/copyright`
- `/en/enterprise/copyright`, `/zh/enterprise/copyright`
- `/en/venture/copyright`, `/zh/venture/copyright`
- `/en/personal/copyright`, `/zh/personal/copyright`
- `/en/download`, `/zh/download`
- `/en/about`, `/zh/about`
- `/de...` is intentionally hidden and should return 404.

## Public Files

- `public/llms.txt`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/brand/o2v-logo-primary-blue-purple.png`
- `public/brand/o2v-logo-primary-blue-purple-compact.png`
- `public/brand/o2v-logo-primary-blue-purple-header.png`
- `public/downloads/o2v-framework-enterprise-configuration-20260607-zh.pdf`
- `public/downloads/o2v-framework-enterprise-configuration-20260607-en.pdf`
- `public/downloads/valence-detailed-introduction.pdf`
- `public/downloads/valence-detailed-introduction-zh.pdf`

Keep the existing 20260607 Enterprise Configuration English and Chinese PDF filenames stable for public download links until replacement PDFs are added. The Valence detailed introduction PDFs are derived public assets and may use their own content version without changing the O2V website release identity.

## License

The website source code is licensed under the Apache License 2.0.

The O2V Framework publication text, brand names, citation language, logo assets, downloadable framework materials, O2V configurations, CLEAR / Signal-to-Action, AiNOVA, Valence, and derivative methodology assets remain subject to the copyright and rights statements published on the site unless separately licensed in writing.
