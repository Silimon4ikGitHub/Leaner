# Leaner — Premium Cleaning & Facility

Static multilingual landing page for Leaner (DE/EN/IT) served from GitHub Pages
at [leaner.ch](https://leaner.ch).

- React 19 + Tailwind, static build (no backend)
- Lead form opens the visitor's email client (`mailto:` → chebanovandriy111@gmail.com)
- Auto-deploy via GitHub Actions on every push to `main`

## Repo structure

```
.
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages
└── frontend/                      # React app (CRA + craco)
    ├── public/
    │   ├── CNAME                  # leaner.ch — DO NOT delete
    │   ├── 404.html               # SPA fallback for GitHub Pages
    │   ├── index.html             # <title>, SEO meta, JSON-LD, favicon links
    │   ├── sitemap.xml, robots.txt
    │   └── gallery/*.jpg          # AI-generated before/after images
    ├── src/
    │   ├── pages/                 # Home + 4 sub-pages
    │   ├── components/site/       # Hero, Services, Materials, Gallery, Contact, …
    │   ├── i18n/translations.js   # DE/EN/IT copy
    │   └── lib/constants.js       # WhatsApp / Telegram / CONTACT_EMAIL
    └── package.json
```

## Local development

```bash
cd frontend
yarn install
yarn start           # http://localhost:3000
```

Build and preview the production bundle:

```bash
yarn build
yarn serve           # serves ./build on :3000
```

## Deployment (automatic)

Every push to `main` triggers `.github/workflows/deploy.yml`, which:

1. Installs deps with `yarn install --frozen-lockfile`
2. Runs `yarn build` → outputs to `frontend/build`
3. Publishes via **actions/deploy-pages@v4** to the GitHub Pages environment

### One-time setup on GitHub

1. Repo → **Settings** → **Pages** → **Source**: *GitHub Actions*
2. Repo → **Settings** → **Pages** → **Custom domain**: `leaner.ch` → Save
3. Enable **Enforce HTTPS** once the certificate is issued (~1 hour)

### DNS at your registrar (`leaner.ch`)

| Type | Host | Value |
|------|------|-------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `silimon4ikgithub.github.io.` |

Propagation: 5 – 60 minutes. Verify with `dig leaner.ch`.

## Editing content

| Change | File |
|--------|------|
| Translations (DE/EN/IT) | `frontend/src/i18n/translations.js` |
| WhatsApp / Telegram / email | `frontend/src/lib/constants.js` |
| Hero visual + layout | `frontend/src/components/site/Hero.jsx` |
| Pricing cards | `frontend/src/components/site/Services.jsx` |
| Materials cards + photos | `frontend/src/components/site/Materials.jsx` |
| Gallery before/after images | `frontend/public/gallery/*.jpg` + `Gallery.jsx` |
| Favicon | `frontend/public/favicon.*` |
| SEO (title, OG, JSON-LD) | `frontend/public/index.html` |
| Sitemap | `frontend/public/sitemap.xml` |

Push changes → GitHub Actions deploys automatically within ~2 min.
