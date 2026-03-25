# Coding Conventions

**Analysis Date:** 2026-03-24

## Naming Patterns

**Files:**
- PascalCase for component/app files: `App.tsx`, `index.tsx`
- camelCase for non-component modules: `constants.ts`, `types.ts`, `vite.config.ts`
- `.tsx` extension for files containing JSX; `.ts` for pure TypeScript

**Components:**
- PascalCase for all React components: `SectionHeader`, `Navbar`, `Hero`, `ExperienceCard`, `ProjectCard`, `SkillGroup`
- Components are defined either as arrow functions with `React.FC<Props>` or plain arrow functions without explicit type

**Custom Hooks:**
- `use` prefix, camelCase: `useActiveSection`, `useScrollReveal`
- Defined as `const` arrow functions at module level

**Constants:**
- SCREAMING_SNAKE_CASE for exported data arrays: `EXPERIENCES`, `SKILL_CATEGORIES`, `EDUCATIONS`, `PROJECTS`

**Variables:**
- camelCase for local variables and state: `scrolled`, `open`, `active`, `showTop`
- Short, abbreviated names acceptable in small scopes: `fn`, `obs`, `el`, `e`, `y`

**Event Handlers:**
- Inline arrow functions for simple handlers
- Named `const` functions for reusable handlers: `scrollTo`, `onScroll`

**Shared Style Variables:**
- camelCase module-level `const` for reusable Tailwind class strings: `card`, `cardHover`

## Code Style

**Formatting:**
- No formatter config file detected (no `.prettierrc`, `.eslintrc`, `biome.json`)
- Indentation: 2 spaces throughout all `.ts` and `.tsx` files
- Single quotes for strings in TypeScript/JSX
- Trailing commas present in multi-line arrays and objects
- Semicolons used consistently at end of statements

**Linting:**
- No ESLint or Biome config detected; no lint scripts in `package.json`
- TypeScript compiler acts as primary static check (`tsconfig.json` with `noEmit: true`)

**TypeScript:**
- `strict` mode not explicitly set, but `isolatedModules: true` and `moduleDetection: force` are enabled
- Target: `ES2022`; module: `ESNext`; `jsx: react-jsx` (no React import needed for JSX transform, but `React` is still imported explicitly in `App.tsx`)
- `experimentalDecorators: true` and `useDefineForClassFields: false` configured (unusual for a plain React app — likely carried over from a template)
- `allowJs: true` permits `.js` files alongside `.ts`

## Import Organization

**Order observed in `App.tsx`:**
1. React and React hooks (`react`)
2. Third-party icon library (`lucide-react`)
3. Internal constants (`./constants`)
4. Internal assets (`./edgardo-samame.jpg`)

**Path Aliases:**
- `@/*` maps to the project root (configured in both `tsconfig.json` and `vite.config.ts`)
- Not actively used in current source files; all imports use relative paths (`./constants`, `./types`)

## Component Design

**Patterns:**
- All components are function components; no class components
- Props defined inline as TypeScript object literals on `React.FC<{...}>` — no separate named interface for most components
- `types.ts` provides named interfaces (`Experience`, `SkillCategory`, `Education`, `Project`) used only in `constants.ts`
- Components that accept a single data prop use `typeof ARRAY[0]` to derive the prop type from the constant: `React.FC<{ exp: (typeof EXPERIENCES)[0] }>`
- Stateless presentational components use arrow function shorthand returning JSX directly: `const Hero = () => (...)`
- Stateful components use `const Name = () => { ... return (...) }`

**JSX Patterns:**
- Conditional rendering via `&&` short-circuit and ternary (`? : `)
- Inline arrays mapped to JSX with `.map()` — key prop uses `idx` (array index) when a stable unique string is not available
- Tailwind classes composed using template literals and shared `card`/`cardHover` strings

## Shared Style Constants

**Location:** top of `App.tsx` (lines 56–57)

```typescript
const card = 'border border-white/10 bg-white/[0.02] rounded-xl';
const cardHover = `${card} hover:border-white/20 hover:bg-white/[0.04] transition-colors`;
```

Use these constants when applying card styles to new components rather than repeating Tailwind strings.

## Section Comments

**Pattern:** ASCII banner comments used to delimit logical sections in `App.tsx`:

```typescript
// ─── Hooks ────────────────────────────────────────────────────────────────────
// ─── Shared styles ────────────────────────────────────────────────────────────
// ─── SectionHeader ────────────────────────────────────────────────────────────
```

Use this same style when adding new top-level component definitions.

## Error Handling

**Current approach:**
- Minimal explicit error handling; single guard in `index.tsx`:
  ```typescript
  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }
  ```
- No try/catch blocks in component logic
- Optional chaining used defensively: `document.getElementById('projects')?.scrollIntoView(...)`
- Conditional guards before DOM operations: `if (el) { ... }`

## Logging

- No logging framework; no `console.log` or `console.error` calls present in source files

## Exports

- `App.tsx`: single `export default App` at bottom of file
- `constants.ts`: named exports for each data array (`export const EXPERIENCES`, etc.)
- `types.ts`: named `export interface` for each type
- `index.tsx`: no exports (entry point only)

---

*Convention analysis: 2026-03-24*
