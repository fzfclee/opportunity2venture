# Repo Rename Plan: o2v-framework-site

## Current State

- Current GitHub repo: `fzfclee/opportunity2venture`
- Current local project folder: `opportunity2venture`
- Canonical website domain: `https://www.o2vframework.com`
- Legacy / backup domain: `https://www.opportunity2venture.com`
- Current public brand: O2V Framework / Opportunity-to-Value Framework
- Current public release: O2V Framework / Official Public Release 20260614 / Internal Version v2.0

The current repo name reflects the original Opportunity-to-Venture release. It should be treated as historical naming while the website brand now centers on O2V Framework.

## Recommended Target Repo Name

`fzfclee/o2v-framework-site`

This name is stable because it follows the long-term master brand, O2V Framework, and the site purpose. It also aligns cleanly with `www.o2vframework.com`.

## Why Not opportunity2value

- Opportunity-to-Value is the current primary brand meaning, but it may not be the right permanent repo identifier.
- O2V Framework is the durable master brand.
- A repo named `opportunity2value` would over-bind implementation and operations to one expansion of O2V.
- `o2v-framework-site` is clearer for maintainers, deployment systems, and future brand evolution.

## Why Not Merge Into Knowledge-Base Repo

- This repo is an official public website, not a general knowledge base.
- It has deployment concerns, static assets, SEO files, canonical domain settings, and downloadable public materials.
- Keeping the website source separate reduces accidental content drift and avoids mixing private notes or broader knowledge management workflows with the public release site.
- A dedicated site repo makes Vercel deployment, access control, and rollback cleaner.

## Rename Steps

1. Confirm no active deployment, release, or DNS change is in progress.
2. In GitHub, rename `fzfclee/opportunity2venture` to `fzfclee/o2v-framework-site`.
3. Verify GitHub redirects from the old repo URL are active.
4. Update local remotes:

```bash
git remote set-url origin https://github.com/fzfclee/o2v-framework-site.git
```

5. Update any publishing scripts that still reference the old repo.
6. Search the repo and deployment settings for:
   - `fzfclee/opportunity2venture`
   - `opportunity2venture.git`
   - `github.com/fzfclee/opportunity2venture`
7. Commit the post-rename reference update.

## Vercel Deployment Checklist

- Confirm the Vercel project still points to the renamed GitHub repository.
- If Vercel does not follow the GitHub rename automatically, reconnect the project to `fzfclee/o2v-framework-site`.
- Confirm production domain remains `www.o2vframework.com`.
- Confirm `opportunity2venture.com` remains only as a legacy alias / backup domain.
- Trigger a production redeploy after reconnecting.
- Verify these routes after deploy:
  - `/`
  - `/en`
  - `/zh`
  - `/de`
  - `/en/download`
  - `/en/about`
- Verify current page routes resolve. PDF download files may reference earlier release assets and should not be treated as the current web release identity.

## Rollback Considerations

- GitHub usually preserves redirects after repo rename, but external integrations should still be checked.
- If deployment breaks, reconnect Vercel to the renamed repo rather than changing the canonical domain.
- If a critical integration cannot follow the rename, GitHub can rename the repo back to `fzfclee/opportunity2venture`.
- Do not treat historical 20260520 PDF URLs as the current web release identity during or after the repo rename.
- Do not change website canonical URLs as part of repo rollback.

## Links / References To Check After Rename

- GitHub remote origin
- `publish-to-github.cmd`
- README repository references
- Vercel Git integration
- Vercel deployment logs
- GitHub Actions or future CI settings, if added
- Any external bookmarks or documentation pointing to the source repo
- Any local automation that runs `git pull`, `git push`, or deployment commands against the old repo URL
- Website public URLs and sitemap, which should remain on `https://www.o2vframework.com`

## Important Constraint

Do not execute the GitHub repository rename automatically. Rename only after explicit authorization.
