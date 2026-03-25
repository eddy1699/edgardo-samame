# Architecture

**Analysis Date:** 2026-03-24

## Pattern Overview

**Overall:** Single-page application (SPA) — flat, monolithic React component tree with no routing layer.

**Key Characteristics:**
- All UI and logic lives in a single file (`App.tsx`) structured into named component sections
- Data is fully static, defined in `constants.ts` and typed in `types.ts` — no API calls, no server
- State is local to components via `useState`; no global state manager
- Scroll-driven UX behavior managed by two custom hooks defined at the top of `App.tsx`

## Layers

**Data / Content Layer:**
- Purpose: Hold all portfolio content as typed, exported constants
- Location: `constants.ts`
- Contains: `EXPERIENCES`, `PROJECTS`, `SKILL_CATEGORIES`, `EDUCATIONS` arrays
- Depends on: `types.ts` for interface definitions
- Used by: `App.tsx` (imported and passed as props to section components)

**Type Definitions:**
- Purpose: Define the shape of all domain entities
- Location: `types.ts`
- Contains: `Experience`, `SkillCategory`, `Education`, `Project` interfaces
- Depends on: Nothing
- Used by: `constants.ts` (for array typing), `App.tsx` (for prop typing)

**Presentation / UI Layer:**
- Purpose: Render all sections and handle visual interaction
- Location: `App.tsx`
- Contains: Custom hooks, shared style constants, all section components, and the root `App` component
- Depends on: `constants.ts`, `types.ts`, `lucide-react`, `./edgardo-samame.jpg`
- Used by: `index.tsx` (mounted as root)

**Application Entry:**
- Purpose: Bootstrap React and mount the App into the DOM
- Location: `index.tsx`
- Contains: ReactDOM root creation and `<App />` render inside `<React.StrictMode>`
- Depends on: `App.tsx`, React, ReactDOM
- Used by: `index.html` via `<script type="module" src="./index.tsx">`

## Data Flow

**Content Rendering:**

1. `constants.ts` exports typed arrays (`EXPERIENCES`, `PROJECTS`, etc.)
2. `App.tsx` imports those arrays at module load
3. The root `App` component renders section components (`<Hero />`, `<Navbar />`, etc.)
4. Section components receive data arrays as props or close over the imported constants
5. Card components (`ExperienceCard`, `ProjectCard`, `SkillGroup`) receive individual items and render them

**Scroll Interaction:**

1. `useActiveSection(ids)` hook attaches a `scroll` event listener to `window`
2. On scroll, it compares `window.scrollY` against each section element's `offsetTop`
3. Returns the active section `id` string, used by `Navbar` to highlight the current nav link
4. `useScrollReveal()` hook uses `IntersectionObserver` to add `animate-visible` class to `.animate-on-scroll` elements when they enter the viewport

**State Management:**
- No global state. Each component manages its own local state:
  - `Navbar`: `scrolled` (boolean), `open` (boolean for mobile menu)
  - `App`: `showTop` (boolean for scroll-to-top button visibility)
  - Active section derived from `useActiveSection` hook

## Key Abstractions

**Custom Hooks:**
- Purpose: Encapsulate scroll-driven side effects
- Location: `App.tsx` (lines 23–52)
- `useActiveSection(ids: string[])`: Returns current active section id string
- `useScrollReveal()`: Triggers CSS-class-based entrance animations via IntersectionObserver

**Section Components:**
- Purpose: Render a discrete portfolio section
- Examples: `Hero`, `Navbar`, `ExperienceCard`, `ProjectCard`, `SkillGroup`
- Pattern: Functional components with typed props, using imported constants directly or via props

**Shared Style Constants:**
- Purpose: Reusable Tailwind class strings to enforce visual consistency
- Location: `App.tsx` (lines 56–57)
- `card`: Base card border/background styles
- `cardHover`: Extends `card` with hover transition classes

**SectionHeader:**
- Purpose: Reusable heading component with decorative underline and optional subtitle
- Location: `App.tsx` (lines 61–75)
- Pattern: Accepts `title`, `subtitle`, and `align` props; renders `<h2>` with a blue underline rule

## Entry Points

**HTML Shell:**
- Location: `index.html`
- Triggers: Browser navigation / direct file open
- Responsibilities: Sets `lang="es"`, loads Tailwind via CDN, sets up import map for `react` and `lucide-react` from `esm.sh`, defines scroll animation CSS, mounts `<div id="root">`, loads `index.tsx` as a module

**React Bootstrap:**
- Location: `index.tsx`
- Triggers: Browser executes the module script
- Responsibilities: Creates React root on `#root`, renders `<App />` inside `<React.StrictMode>`

**Root Component:**
- Location: `App.tsx` — `App` function (line 341)
- Triggers: React renders the component tree
- Responsibilities: Registers `useScrollReveal`, tracks `showTop` state, composes all section components in page order (Navbar → Hero → About → Experience → Projects → Skills → Education/Contact → Footer), renders scroll-to-top button

## Error Handling

**Strategy:** Minimal — this is a static portfolio with no async operations.

**Patterns:**
- `index.tsx` throws a hard error if `#root` element is missing: `throw new Error("Could not find root element to mount to")`
- No try/catch blocks anywhere else
- No error boundaries defined

## Cross-Cutting Concerns

**Logging:** None — no `console.log` or logging library used
**Validation:** Not applicable — all data is static and local
**Authentication:** Not applicable — public portfolio, no auth layer

---

*Architecture analysis: 2026-03-24*
