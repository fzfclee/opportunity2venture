# O2V Framework Website

Official static publication site for **O2V Framework 20260510**, the **Opportunity-to-Venture Framework**.

## Publication Identity

- Project name: O2V Framework website
- Official public release: 20260510
- Internal version: v1.4
- Brand: O2V Framework / Opportunity-to-Venture Framework
- Main domain: https://www.o2vframework.com
- Backup / alias domain: https://www.opportunity2venture.com

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

## Build

```bash
npm run build
```

## Important Content Rules

- Do not use O2V Methodology as the main brand.
- Do not use Agile Manifesto-style "A over B" language.
- Do not add Daily / Weekly / Monthly outputs to the framework.
- Framework Deliverables must remain generic.
- Public version uses 20260510.
- Internal version uses v1.4.
- Canonical domain is https://www.o2vframework.com.

## Publish to GitHub

On Windows, run:

```cmd
publish-to-github.cmd
```

The script publishes this project to:

```text
https://github.com/fzfclee/opportunity2venture.git
```

## Routes

- `/` redirects to `/en`
- `/en`, `/zh`, `/de`
- `/en/framework`, `/zh/framework`, `/de/framework`
- `/en/principles`, `/zh/principles`, `/de/principles`
- `/en/copyright`, `/zh/copyright`, `/de/copyright`
- `/en/download`, `/zh/download`, `/de/download`

## Public Files

- `public/llms.txt`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/downloads/o2v-framework-20260510-zh.pdf`
- `public/downloads/o2v-framework-20260510-en.pdf`
- `public/downloads/o2v-framework-20260510-de.pdf`

The PDF files should keep the same filenames so published download links remain stable.

## License

The website source code is licensed under the Apache License 2.0.

The O2V Framework publication text, brand names, citation language, and downloadable framework materials remain subject to the copyright and rights statements published on the site unless separately licensed in writing.
