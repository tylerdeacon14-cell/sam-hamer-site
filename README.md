# Dream — Site Management

## How to update tylerdream.com

1. Edit files in the `tylerdream/` folder
2. Open command prompt and run:

```
cd "C:\Users\tyler\OneDrive\Documents\Claude\Projects\Dream"
git add -A
git commit -m "describe what you changed"
git push
```

Netlify auto-deploys within ~60 seconds. Done.

---

## Folder structure

```
Dream/
  tylerdream/               <- tylerdream.com (live site)
    index.html              <- main homepage
    affiliate.html          <- affiliate page
    build.html              <- build page
    get-started.html        <- get started page
    success.html            <- success page
    preview.html            <- preview page
    netlify/functions/      <- backend functions
      generate-script.js
      generate.js
    package.json

  affiliates/               <- affiliate media kit sites (separate Netlify sites, manual deploy)
    ayden/index.html        <- aydenlorz.netlify.app
    kristyn/index.html      <- kristyn's site
    sam/index.html          <- sam's site

  _archive/                 <- old files, do not touch
```

---

## Affiliate sites (Ayden, Kristyn, Sam)

These are NOT connected to GitHub. To update:
1. Edit the file in `affiliates/[name]/index.html`
2. Go to Netlify
3. Open the site
4. Drag the folder (e.g. `ayden/`) into the deploy drop zone

---

## GitHub repo

`https://github.com/tylerdeacon14-cell/sam-hamer-site`

Connected to Netlify site: tylerdream (tylerdream.com)

---

## Environment variables (stored in Netlify, never in files)

- `ANTHROPIC_API_KEY` — Anthropic API key for script generation
- `STRIPE_SECRET_KEY` — Stripe (not active yet)

---

## Important rules

- Never hardcode API keys in any file
- Always edit from `tylerdream/` folder for the main site
- Always edit from `affiliates/[name]/` for client sites
- `_archive/` is junk — ignore it
