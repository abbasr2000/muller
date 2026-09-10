# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16 (App Router) static marketing site** for Dr. Muller Dentistry. It is a single frontend app — there is no backend, database, or auth. Package manager is **npm** (`package-lock.json`), Node 22.

### Running / building / testing
- Dev server: `npm run dev` (Next.js + Turbopack) on `http://localhost:3000`. This is the primary way to verify UI changes; it does not fail on lint errors.
- Lint: `npm run lint` (ESLint via `eslint.config.mjs`).
- Tests: `node --test` (Node's built-in test runner). There is **no `test` script** in `package.json`; the suite lives in `tests/*.test.mjs` and only asserts that certain routes/content exist as files/strings.
- Typecheck: `npx tsc --noEmit`.

### Non-obvious gotchas
- `npm run build` (`next build`) currently **fails on pre-existing `react/no-unescaped-entities` ESLint errors** in several service pages (e.g. unescaped `'` in `app/services/*/page.tsx`). These are pre-existing and unrelated to any new feature work. Use `npm run dev` to validate changes; keep new/edited files lint-clean (escape apostrophes as `&apos;`, `&` as `&amp;`, or use `{`...`}` string literals).
- Content is data-driven: services come from `SERVICES` in `lib/site-config.ts`, and site navigation from `NAV_MAIN` in the same file. Adding a `ServiceSlug` + `SERVICES` entry automatically surfaces it in the services grid, footer, and sitemap. A service page must also be created at `app/services/<slug>/page.tsx`. Static (non-service) pages must be added to `app/sitemap.ts` manually.
