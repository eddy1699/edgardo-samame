# Technology Stack

**Analysis Date:** 2026-03-24

## Languages

**Primary:**
- TypeScript ~5.8.2 - All application source files (`App.tsx`, `index.tsx`, `constants.ts`, `types.ts`)

**Secondary:**
- HTML5 - Entry document (`index.html`)
- CSS (inline via Tailwind) - Styling via CDN utility classes in `index.html`

## Runtime

**Environment:**
- Browser (SPA - no server runtime)
- Node.js required for development tooling only

**Package Manager:**
- npm (inferred from `package-lock.json` presence)
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React ^19.2.3 - UI rendering, component model
- react-dom ^19.2.3 - DOM mounting (`index.tsx`)

**Build/Dev:**
- Vite ^6.2.0 - Dev server (port 3000, host 0.0.0.0) and production bundler (`vite.config.ts`)
- @vitejs/plugin-react ^5.0.0 - React JSX transform and HMR support

**CSS:**
- Tailwind CSS - Loaded via CDN (`https://cdn.tailwindcss.com`) in `index.html` rather than as a npm package. No `tailwind.config.*` file present.

**Fonts:**
- Inter (Google Fonts CDN) - weights 300–800, loaded in `index.html`

## Key Dependencies

**Critical:**
- `lucide-react` ^0.562.0 - Icon library used extensively throughout `App.tsx` (Github, Linkedin, Mail, ExternalLink, MapPin, Phone, Menu, X, Code2, Cloud, Database, Zap, ArrowUp)
- `react` ^19.2.3 - Core UI framework
- `react-dom` ^19.2.3 - DOM rendering

**Dev Only:**
- `typescript` ~5.8.2 - Type checking
- `@types/node` ^22.14.0 - Node type declarations (used in `vite.config.ts` for `path`)
- `vite` ^6.2.0 - Bundler and dev server
- `@vitejs/plugin-react` ^5.0.0 - Vite React plugin

## Configuration

**TypeScript (`tsconfig.json`):**
- Target: ES2022
- Module: ESNext, resolution: bundler
- JSX: react-jsx
- Path alias: `@/*` maps to project root `./*`
- `noEmit: true` (Vite handles bundling)
- `allowJs: true`, `isolatedModules: true`

**Vite (`vite.config.ts`):**
- Dev server: port 3000, host 0.0.0.0
- Plugin: `@vitejs/plugin-react`
- Path alias: `@` resolves to project root
- Environment injection: `GEMINI_API_KEY` exposed as `process.env.API_KEY` and `process.env.GEMINI_API_KEY` via `define`
- Env loading: `loadEnv(mode, '.')` reads `.env` files from project root

**Environment:**
- `GEMINI_API_KEY` - Required env var for Google Gemini API access (injected at build time via Vite `define`)
- No `.env` file currently committed (file not present in repo)

**HTML (`index.html`):**
- Import map for ESM module resolution: maps `react`, `react-dom`, `lucide-react` to `esm.sh` CDN
- Dual loading strategy: CDN import map for browser-direct loading + Vite bundling for build output

## Platform Requirements

**Development:**
- Node.js (version not pinned - no `.nvmrc` or `.node-version` file)
- npm for dependency management

**Production:**
- Static site hosting (Netlify confirmed from project links in `constants.ts`)
- No server-side runtime required

---

*Stack analysis: 2026-03-24*
