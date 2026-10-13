# Instructions for the Desktop AI assistant

You are picking up a working React 19 + Tailwind static site deployed to
GitHub Pages at **https://leaner.ch**. The repo lives at
`github.com/Silimon4ikGitHub/Leaner`.

Read `README.md` first — it covers the repo layout and deploy flow. This file
is for YOU (the AI) to understand constraints and conventions before editing.

---

## Hard constraints — never break these

1. **Static-only.** No backend, no API, no database. The lead form uses
   `mailto:` in `src/components/site/Contact.jsx`. Do NOT re-introduce
   `/api/*` endpoints, `axios`, or any `REACT_APP_BACKEND_URL`.

2. **GitHub Pages SPA fallback.** `public/404.html` and the restoration script
   in `public/index.html` make client-side routing work on GitHub Pages. Do
   NOT edit them unless you know the spa-github-pages pattern.

3. **Custom domain.** `public/CNAME` must contain exactly `leaner.ch\n` — if
   you ever rebuild the public/ folder from scratch, re-create it.

4. **Package manager = yarn.** Never use npm. Always edit `yarn.lock` through
   `yarn add` / `yarn remove`. The GitHub Actions workflow runs
   `yarn install --frozen-lockfile`.

5. **Favicon letter L + green dot.** Brand mark lives in `public/favicon.svg`,
   `favicon.ico`, `favicon-16/32/64/192/512.png`, `apple-touch-icon.png`. If
   you regenerate them, use the script pattern in `scripts/build_favicons.py`
   (black square, white "L", green `#16C47F` accent dot).

## File map (read these before editing)

| What | File |
|------|------|
| Routing + layout wrapper | `src/App.js`, `src/components/site/SiteLayout.jsx` |
| Smooth scroll (Lenis) | `src/hooks/useLenis.js` |
| Per-route SEO (title + canonical) | `src/hooks/useSeo.js` |
| i18n (DE/EN/IT) | `src/i18n/translations.js`, `src/context/LanguageContext.jsx` |
| Brand constants | `src/lib/constants.js` |
| Home (all sections stacked) | `src/pages/HomePage.jsx` |
| Sub-pages | `src/pages/ServicesPage.jsx`, `TechnologyPage.jsx`, `GalleryPage.jsx`, `ContactPage.jsx` |
| Hero + masked reveal + parallax | `src/components/site/Hero.jsx` |
| Numbered manifesto chapters | `src/components/site/Manifesto.jsx` |
| Pricing cards (incl. B2B) | `src/components/site/Services.jsx` |
| Photo-bg materials | `src/components/site/Materials.jsx` |
| CSS fade before/after gallery | `src/components/site/Gallery.jsx` |
| Contact form (mailto) | `src/components/site/Contact.jsx` |
| Footer | `src/components/site/Footer.jsx` |

## Design system (don't invent new tokens)

- Primary blue: `#003B5C` (hover `#002A42`)
- Dark surface: `#0F172A`
- Light surface: `#F8F9FA`, `#EEF3F8` (contact card)
- Green accent dot: `#16C47F`
- Font: **Inter** only, loaded from Google Fonts via `src/index.css`
- Shadcn/ui is available in `src/components/ui/` but currently unused; feel
  free to reuse `button.jsx`, `input.jsx`, `toaster.jsx` if adding features.
- Animations: `framer-motion` (already a dep) + `lenis` for scroll.

## i18n rules

- Default language = **German** (`de`). Supported: `de`, `en`, `it`.
- All visible copy must exist in `translations.js` for all three locales.
- When adding a new string: add it to **DE**, **EN** and **IT** blocks in the
  same shape. Language switcher persists via `localStorage` key `leaner_lang`.

## Testing checklist before you push

1. `cd frontend && yarn build` — the production bundle must compile with 0
   errors (warnings are fine).
2. `yarn serve` → open http://localhost:3000, verify every page renders:
   - `/`, `/services`, `/technology`, `/gallery`, `/contact`
3. Switch DE → EN → IT in the header. All copy must change; refresh — the
   selection must persist.
4. Contact form: fill it in and click "Send" → the OS mail client must open
   with a pre-filled message to `chebanovandriy111@gmail.com`.

## Deploy

Any push to `main` ships to `https://leaner.ch` in ~2 minutes via GitHub
Actions. There is no "staging": edit → PR → merge → live.

## What NOT to touch

- `public/CNAME`, `public/404.html`, `public/manifest.json`
- The `<script>` in `public/index.html` that restores SPA routes
- `.github/workflows/deploy.yml` unless you understand GitHub Pages Actions
- `public/favicon.*` without regenerating the full set

If the user asks for a backend/API/database, say **no — this is a static
GitHub Pages site**. If they really need it, migrate to Vercel / Netlify
first and change the deployment pipeline accordingly.
