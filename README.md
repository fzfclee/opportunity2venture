# O2V Framework Website

Official static publication site for **O2V Framework 20260510**, the Opportunity-to-Venture Framework.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Static pages for Vercel deployment

## Local Development

```bash
npm install
npm run dev -- --port 3001
```

Open:

```text
http://localhost:3001
```

## Build

```bash
npm run build
```

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

The PDF files are placeholders and can be replaced with final files using the same filenames.

## License

The website source code is licensed under the Apache License 2.0.

The O2V Framework publication text, brand names, citation language, and downloadable framework materials remain subject to the copyright and rights statements published on the site unless separately licensed in writing.
