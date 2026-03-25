# Codebase Structure

**Analysis Date:** 2026-03-24

## Directory Layout

```
edgardo-samame/           # Project root — all source files live here (no src/ subdirectory)
├── index.html            # HTML shell: Tailwind CDN, import map, root div
├── index.tsx             # React bootstrap entry point
├── App.tsx               # Entire application: hooks, components, page layout
├── constants.ts          # Static portfolio data (experiences, projects, skills, education)
├── types.ts              # TypeScript interfaces for all domain entities
├── vite-env.d.ts         # Vite client types + image module declarations
├── vite.config.ts        # Vite build/dev config with React plugin and @ alias
├── tsconfig.json         # TypeScript compiler options
├── package.json          # Dependencies and npm scripts
├── package-lock.json     # Lockfile
├── metadata.json         # Project metadata (name, description, permissions)
├── edgardo-samame.jpg    # Profile photo asset (3.6 MB, imported in App.tsx)
├── README.md             # Project readme
├── .gitignore            # Git ignore rules
├── .planning/            # GSD planning directory (not part of the app)
│   └── codebase/         # Codebase analysis documents
└── node_modules/         # Dependencies (not committed)
```

## Directory Purposes

**Root (project root):**
- Purpose: Contains all application source directly — no `src/` subdirectory
- Contains: All `.tsx`, `.ts`, HTML, config, and asset files
- Key files: `App.tsx`, `constants.ts`, `types.ts`, `index.tsx`, `index.html`

**.planning/codebase/:**
- Purpose: GSD codebase analysis documents used by planning and execution commands
- Contains: Architecture, structure, conventions, and concern documents
- Generated: By GSD map-codebase commands
- Committed: Yes

## Key File Locations

**Entry Points:**
- `index.html`: Browser entry — loads Tailwind, fonts, sets up import map, bootstraps module
- `index.tsx`: React entry — creates root and renders `<App />`
- `App.tsx`: Application root — all UI, hooks, components, and layout

**Configuration:**
- `vite.config.ts`: Build tool config — dev server port 3000, React plugin, `@` path alias resolving to project root
- `tsconfig.json`: TypeScript config — ES2022 target, `react-jsx` transform, `@/*` path alias, `bundler` module resolution
- `package.json`: Project manifest — scripts `dev`, `build`, `preview`

**Core Logic:**
- `constants.ts`: All content data — `EXPERIENCES`, `PROJECTS`, `SKILL_CATEGORIES`, `EDUCATIONS`
- `types.ts`: Domain interfaces — `Experience`, `Project`, `SkillCategory`, `Education`

**Assets:**
- `edgardo-samame.jpg`: Profile photo, imported as a module in `App.tsx` (`import profilePhoto from './edgardo-samame.jpg'`)
- `vite-env.d.ts`: Declares image module types (`*.jpg`, `*.png`, `*.webp`, `*.jpeg`) so TypeScript accepts image imports

**Testing:**
- Not applicable — no test files or test framework present

## Naming Conventions

**Files:**
- PascalCase is NOT used for filenames — all files use camelCase or lowercase: `App.tsx`, `constants.ts`, `types.ts`, `index.tsx`
- Config files use kebab-case: `vite.config.ts`, `tsconfig.json`

**Components (inside App.tsx):**
- PascalCase: `Navbar`, `Hero`, `SectionHeader`, `ExperienceCard`, `ProjectCard`, `SkillGroup`

**Hooks (inside App.tsx):**
- camelCase with `use` prefix: `useActiveSection`, `useScrollReveal`

**Constants:**
- SCREAMING_SNAKE_CASE for exported data arrays: `EXPERIENCES`, `PROJECTS`, `SKILL_CATEGORIES`, `EDUCATIONS`

**Interfaces:**
- PascalCase in `types.ts`: `Experience`, `Project`, `SkillCategory`, `Education`

**Style variables:**
- camelCase short descriptors for Tailwind string constants: `card`, `cardHover`

## Where to Add New Code

**New portfolio section (e.g., Certifications):**
- Data definition: Add a typed array to `constants.ts` (follow `EDUCATIONS` pattern)
- Interface: Add the corresponding interface to `types.ts`
- Component: Add a card component and section block directly in `App.tsx`, following the existing section pattern
- Navigation: Add an entry to the `links` array inside the `Navbar` component in `App.tsx` and add `id` to the section element

**New standalone component:**
- Place in `App.tsx` alongside the other components (this project has no component subdirectory)
- If the project grows enough to warrant splitting: create a `components/` directory at root level and use the `@/components/ComponentName.tsx` path

**New content data:**
- Add to `constants.ts` with explicit TypeScript type from `types.ts`

**New shared utility or hook:**
- Add directly in `App.tsx` near the existing hooks section (lines 21–52) for now
- If the project grows: create `hooks/` or `utils/` directories at root level

**New static asset (image):**
- Place at project root alongside `edgardo-samame.jpg`
- The image module declaration in `vite-env.d.ts` already covers `jpg`, `jpeg`, `png`, `webp` extensions — no changes needed for those formats

## Special Directories

**node_modules/:**
- Purpose: Installed npm dependencies
- Generated: Yes (by `npm install`)
- Committed: No

**.git/:**
- Purpose: Git repository history and metadata
- Generated: Yes (by git)
- Committed: No

**.planning/:**
- Purpose: GSD planning artifacts and codebase analysis
- Generated: By GSD commands
- Committed: Yes

---

*Structure analysis: 2026-03-24*
