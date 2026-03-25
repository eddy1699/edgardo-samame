# Codebase Concerns

**Analysis Date:** 2026-03-24

## Tech Debt

**Monolithic single-file component:**
- Issue: All UI components (Navbar, Hero, ExperienceCard, ProjectCard, SkillGroup, SectionHeader), hooks, and constants import live in a single `App.tsx` file (516 lines). This makes the file hard to navigate, test, and extend.
- Files: `App.tsx`
- Impact: Any change requires touching one large file; merge conflicts become more likely as content grows; no component-level isolation.
- Fix approach: Split into `src/components/` directory with one file per component, and `src/hooks/` for `useActiveSection` and `useScrollReveal`.

**Hardcoded personal data in source code:**
- Issue: All portfolio content (job titles, achievements, phone number, email, addresses, LinkedIn/GitHub URLs) is embedded directly in `constants.ts` and inline in `App.tsx` rather than being driven from a CMS, API, or even a standalone JSON file with a clear update contract.
- Files: `constants.ts`, `App.tsx` (lines 447–449, 91–96)
- Impact: Every content update requires a code change, rebuild, and redeploy.
- Fix approach: Move all data to `metadata.json` (already partially present but unused) and import from it, or adopt a headless CMS.

**Inline scroll logic duplicated:**
- Issue: Two separate scroll implementations exist: `scrollTo` in `Navbar` (lines 98–106) using `getBoundingClientRect` offset math, and the Hero "Ver proyectos" button (lines 190–196) using `scrollIntoView`. Both do the same job with different APIs.
- Files: `App.tsx` (lines 98–106, 190–196)
- Impact: Inconsistent scroll behavior (offset mismatch for fixed navbar), and any future scroll tuning must be done in multiple places.
- Fix approach: Extract a shared `scrollToSection(id: string)` utility and use it everywhere.

**`SkillGroup` icon mapping via string switch:**
- Issue: Icon selection uses a linear string comparison chain: `category.icon === 'cloud' ? Cloud : category.icon === 'code' ? Code2 : ...` (line 325). Adding a new icon type requires editing the component.
- Files: `App.tsx` (lines 325–326)
- Impact: Fragile coupling between data layer (`constants.ts` icon string) and rendering layer; easy to silently use a wrong icon if the string is misspelled.
- Fix approach: Define an icon map object `const ICON_MAP = { cloud: Cloud, code: Code2, ... }` and look up with a fallback.

**`useScrollReveal` runs only once on mount:**
- Issue: The hook in `App.tsx` (lines 41–52) queries `.animate-on-scroll` elements once on mount via `document.querySelectorAll`. Dynamically added elements after mount will never be observed.
- Files: `App.tsx` (lines 41–52)
- Impact: If content is ever rendered conditionally or lazily, the reveal animation will silently fail.
- Fix approach: Re-run or use a MutationObserver, or prefer passing refs rather than relying on a global DOM query.

**`ids` array in `useActiveSection` is recreated on every render:**
- Issue: `Navbar` passes an inline array literal to `useActiveSection` (line 82). This reference changes on every render, causing the `useEffect` to re-subscribe to scroll on every Navbar re-render (e.g., on scroll state changes).
- Files: `App.tsx` (lines 82–83)
- Impact: Minor redundant `addEventListener`/`removeEventListener` churn on each scroll event that also triggers a `scrolled` state update.
- Fix approach: Declare the IDs array outside the component or wrap with `useMemo`.

## Known Bugs

**`"Sobre mí"` section has double `max-w` classes:**
- Symptoms: `<div className="max-w-6xl mx-auto max-w-2xl">` — the second `max-w-2xl` overrides `max-w-6xl` in Tailwind's specificity model, resulting in a narrower-than-intended container.
- Files: `App.tsx` (line 360)
- Trigger: Always visible; the about section paragraph is constrained to 2xl max-width while all other sections use 6xl.
- Workaround: None currently.

**Project links use `"#"` placeholder:**
- Symptoms: Three professional projects (`ShipIT Global Orchestrator`, `Fintech Gateway Connector`, `Cloud Infrastructure as Code`) have `link: "#"` in `constants.ts`. The `ProjectCard` component conditionally hides the external link icon when `link === '#'` (line 301), but the value is still present in the data and can mislead future editors.
- Files: `constants.ts` (lines 47, 52, 58)
- Trigger: Clicking the link icon on those cards does nothing because the icon is not rendered.
- Workaround: The conditional check prevents broken links, but the intent (no link vs. placeholder) is not self-documenting.

**`vite.config.ts` exposes `GEMINI_API_KEY` to the browser bundle:**
- Symptoms: `vite.config.ts` (lines 14–16) replaces `process.env.GEMINI_API_KEY` with the literal key value at build time via `define`. This key is then embedded in the JavaScript bundle shipped to every visitor.
- Files: `vite.config.ts` (lines 14–16)
- Trigger: Any production build where `GEMINI_API_KEY` is set in the environment.
- Workaround: No mitigation is in place. The portfolio currently does not call the Gemini API, so the risk is latent, but the configuration is already wired.

## Security Considerations

**API key exposure via Vite `define`:**
- Risk: `GEMINI_API_KEY` is baked into the client bundle at build time, making it visible to anyone who inspects the JavaScript source. This is a standard Vite pitfall.
- Files: `vite.config.ts` (lines 13–16)
- Current mitigation: The Gemini API is not actively called in the codebase, so the key is only exposed if the environment variable is set during build.
- Recommendations: Remove the `define` block entirely if Gemini is not used. If AI features are added in the future, proxy calls through a server-side function (e.g., Netlify Function, Vercel Edge Function) rather than embedding the key client-side.

**Phone number exposed in static HTML:**
- Risk: The phone number `+51 936 430 407` is hardcoded in `App.tsx` (line 448) and will appear in every visitor's browser and in any cached/indexed versions of the site.
- Files: `App.tsx` (line 448)
- Current mitigation: None.
- Recommendations: Acceptable for a personal portfolio, but worth noting that removing it from the source file later will not remove it from git history.

**Tailwind CSS loaded via CDN in production:**
- Risk: `index.html` (line 23) loads `https://cdn.tailwindcss.com` at runtime. This is the development/play CDN version, not the production build. It ships the full Tailwind stylesheet (~3MB unminified), runs in the browser, and is not recommended for production use by the Tailwind team.
- Files: `index.html` (line 23)
- Current mitigation: None.
- Recommendations: Use the Vite + Tailwind PostCSS plugin pipeline so only used classes are included in the production bundle. Install `tailwindcss` as a dev dependency and configure `vite.config.ts` accordingly.

## Performance Bottlenecks

**Full Tailwind CDN at runtime:**
- Problem: Loading the Tailwind CDN script blocks rendering and ships ~3MB of CSS to every visitor on every page load.
- Files: `index.html` (line 23)
- Cause: CDN variant is designed for prototyping, not production.
- Improvement path: Replace CDN `<script>` with the Vite + Tailwind PostCSS pipeline to generate a purged stylesheet of only used utilities (typically <10KB gzipped).

**No image optimization for profile photo:**
- Problem: `edgardo-samame.jpg` is imported as a raw asset. Vite does not compress or resize images by default, so the full-size JPEG is delivered to all viewports including mobile.
- Files: `App.tsx` (line 19), `edgardo-samame.jpg`
- Cause: No image optimization plugin is configured.
- Improvement path: Add `vite-plugin-imagemin` or convert to WebP/AVIF at build time; add responsive `srcset` to the `<img>` element.

**Multiple independent scroll event listeners:**
- Problem: Three separate `scroll` event listeners are registered on `window`: one in `useActiveSection`, one in `Navbar` for the scrolled state, and one in `App` for the back-to-top button. Each runs its own logic on every scroll event.
- Files: `App.tsx` (lines 25–37, 84–88, 345–349)
- Cause: State is managed independently in each component with no shared scroll context.
- Improvement path: Create a single `useScrollPosition` hook that returns `scrollY` and share it via context or composition.

## Fragile Areas

**`useScrollReveal` depends on global DOM query:**
- Files: `App.tsx` (lines 41–52)
- Why fragile: The hook calls `document.querySelectorAll('.animate-on-scroll')` once on mount. If React re-renders before the DOM has settled, or if elements mount asynchronously, they will be missed. There is no dependency array that would cause re-observation.
- Safe modification: Always add `.animate-on-scroll` to newly introduced elements; test scroll reveal on slow connections or with React Suspense.
- Test coverage: None.

**Icon string type is untyped:**
- Files: `types.ts` (line 13), `constants.ts` (lines 108–128), `App.tsx` (line 325)
- Why fragile: `SkillCategory.icon` is typed as `string`, not as a union `'cloud' | 'code' | 'database' | 'zap'`. Any typo in `constants.ts` will silently fall through to the `Zap` default icon with no TypeScript error.
- Safe modification: Narrow the type in `types.ts` to a string union.
- Test coverage: None.

**`ExperienceCard` type uses inline `typeof EXPERIENCES[0]`:**
- Files: `App.tsx` (line 249)
- Why fragile: The prop type is `(typeof EXPERIENCES)[0]` instead of the `Experience` interface defined in `types.ts`. This means the prop type is structurally derived from the data array rather than the canonical interface. If `constants.ts` is refactored the inferred type changes silently.
- Safe modification: Change to `React.FC<{ exp: Experience }>` and import from `types.ts`.
- Test coverage: None.

## Missing Critical Features

**No linter or formatter configured:**
- Problem: There is no ESLint, Prettier, or Biome configuration file in the project. Code style is unenforced.
- Blocks: Consistent code quality cannot be automatically verified; CI checks cannot enforce style.

**No tests of any kind:**
- Problem: There are no test files, no test runner configuration (`jest.config.*`, `vitest.config.*`), and `package.json` has no `test` script.
- Blocks: Any refactoring of components or hooks is done without a safety net.

**No CI/CD pipeline:**
- Problem: There is no `.github/workflows/`, `netlify.toml`, or equivalent CI configuration. Builds and deployments are manual.
- Blocks: Automated quality gates (type check, lint, test) before deployment.

**No TypeScript strict mode:**
- Problem: `tsconfig.json` does not enable `"strict": true`. There is no `strictNullChecks`, `noImplicitAny`, or similar flags. The compiler is permissive.
- Files: `tsconfig.json`
- Blocks: Many classes of null/undefined bugs and implicit `any` usages will not be caught at compile time.

## Test Coverage Gaps

**Zero test coverage:**
- What's not tested: All custom hooks (`useActiveSection`, `useScrollReveal`), all components (`Navbar`, `Hero`, `ExperienceCard`, `ProjectCard`, `SkillGroup`), and all data constants.
- Files: `App.tsx`, `constants.ts`, `types.ts`
- Risk: Regressions in navigation behavior, scroll logic, or data rendering go undetected.
- Priority: Low for a static portfolio, but High if interactive features (e.g., contact form, AI chat) are added.

---

*Concerns audit: 2026-03-24*
