# External Integrations

**Analysis Date:** 2026-03-24

## APIs & External Services

**AI / LLM:**
- Google Gemini API - Referenced via `GEMINI_API_KEY` injected in `vite.config.ts`; not yet actively called in source code (`App.tsx`, `constants.ts` contain no fetch calls to Gemini endpoints). Integration appears planned or dormant.
  - SDK/Client: None installed; key exposed via `process.env.GEMINI_API_KEY` and `process.env.API_KEY`
  - Auth: `GEMINI_API_KEY` (env var, not committed)

**CDN / Asset Delivery:**
- esm.sh - Used in `index.html` import map to serve `react`, `react-dom`, `lucide-react` as ES modules for browser-direct loading
- Tailwind CSS CDN (`https://cdn.tailwindcss.com`) - Loaded in `index.html` for styling; not bundled via npm
- Google Fonts CDN - Inter typeface loaded in `index.html` (`fonts.googleapis.com`, `fonts.gstatic.com`)

## Data Storage

**Databases:**
- None - Application is a static portfolio with all data hardcoded in `constants.ts`

**File Storage:**
- Local static asset: `edgardo-samame.jpg` (profile photo, imported directly in `App.tsx`)

**Caching:**
- None

## Authentication & Identity

**Auth Provider:**
- None - No authentication required; fully public static site

## Monitoring & Observability

**Error Tracking:**
- None detected

**Logs:**
- Browser console only (no logging library)

## CI/CD & Deployment

**Hosting:**
- Netlify - Confirmed by project demo URLs in `constants.ts`:
  - `https://thelastecho.netlify.app`
  - `https://luminafilmfest.netlify.app/`
  - `https://flowcine.netlify.app/`
  - `https://sparkly-liger-4bcd0a.netlify.app/`
  - `https://weather-app-reactv1.netlify.app/`
  - `https://consorcioeinversiones.netlify.app/`
- Target domain referenced in `index.html` Open Graph meta: `https://edgardosamame.dev`

**CI Pipeline:**
- None detected (no `.github/`, `.netlify/`, or CI config files present)

## External Social / Profile Links

These are rendered as anchor tags in `App.tsx` and `constants.ts`:
- GitHub: `https://github.com/eddy1699`
- LinkedIn: `https://linkedin.com/in/edgardosamame`
- Email: `mailto:edgardosamame@gmail.com`

These are static href values only - no OAuth or API calls are made.

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

## Environment Configuration

**Required env vars:**
- `GEMINI_API_KEY` - Google Gemini API key; exposed at build time as `process.env.API_KEY` and `process.env.GEMINI_API_KEY` in `vite.config.ts`

**Secrets location:**
- Expected in `.env` file at project root (not committed); read by `loadEnv(mode, '.')` in `vite.config.ts`

---

*Integration audit: 2026-03-24*
