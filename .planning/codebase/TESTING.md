# Testing Patterns

**Analysis Date:** 2026-03-24

## Test Framework

**Runner:**
- None configured. No test runner (Jest, Vitest, Playwright, Cypress, etc.) is installed.
- `package.json` contains no test script and no testing dependencies.
- No config files: `jest.config.*`, `vitest.config.*`, or similar are absent.

**Assertion Library:**
- None installed.

**Run Commands:**
```bash
# No test commands available — only:
npm run dev       # Start dev server (Vite, port 3000)
npm run build     # Production build
npm run preview   # Preview production build
```

## Test File Organization

**Location:**
- No test files exist in the project source. The only `.test.js` found is inside `node_modules/gensync/test/index.test.js` (a transitive dependency, not project code).

**Naming:**
- No established pattern — no tests to reference.

## Current State

This is a single-page portfolio application with no automated test suite. The entire application is contained in four source files:

- `App.tsx` — all components and custom hooks
- `constants.ts` — static data arrays
- `types.ts` — TypeScript interfaces
- `index.tsx` — React DOM entry point

There are no API calls, no server-side logic, no form submissions, and no asynchronous data fetching. All data is hardcoded in `constants.ts`.

## What Should Be Tested (If Tests Were Added)

**Recommended framework:** Vitest (compatible with existing Vite setup, zero additional config needed)

**Install:**
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

**Vitest config addition to `vite.config.ts`:**
```typescript
test: {
  environment: 'jsdom',
  globals: true,
  setupFiles: ['./src/setupTests.ts'],
}
```

**Unit test targets — custom hooks:**
- `useActiveSection` in `App.tsx` — scroll position logic that sets active nav section
- `useScrollReveal` in `App.tsx` — IntersectionObserver-based class toggle

**Component render targets:**
- `SectionHeader` — renders title, optional subtitle, alignment variants
- `ExperienceCard` — renders all `Experience` fields, optional `technologies`
- `ProjectCard` — renders all `Project` fields, conditional github/link display
- `SkillGroup` — renders icon selection logic (icon string to component mapping)

**Integration test targets:**
- `Navbar` — scroll state, mobile menu open/close toggle, active link highlighting
- `App` — renders all sections, back-to-top button visibility

## Recommended Test Structure (When Adopted)

**File placement:** Co-located with source, e.g. `App.test.tsx` alongside `App.tsx`

**Suite pattern:**
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('SectionHeader', () => {
  it('renders title', () => {
    render(<SectionHeader title="Experiencia" />);
    expect(screen.getByText('Experiencia')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<SectionHeader title="T" subtitle="Sub" />);
    expect(screen.getByText('Sub')).toBeInTheDocument();
  });
});
```

**Mocking browser APIs:**
```typescript
// IntersectionObserver mock (required for useScrollReveal)
const mockObserver = { observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() };
vi.stubGlobal('IntersectionObserver', vi.fn(() => mockObserver));

// Scroll mock (required for useActiveSection, Navbar)
vi.stubGlobal('scrollY', 200);
window.dispatchEvent(new Event('scroll'));
```

## Coverage

**Requirements:** None enforced.

**View Coverage (if Vitest added):**
```bash
npx vitest run --coverage
```

## Test Types

**Unit Tests:**
- Not present. Would target individual hook logic and component rendering.

**Integration Tests:**
- Not present. Would target multi-component interactions (Navbar scroll + active section).

**E2E Tests:**
- Not used. No Playwright or Cypress installed.

---

*Testing analysis: 2026-03-24*
