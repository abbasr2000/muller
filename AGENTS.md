# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16 (App Router) static marketing site** for Dr. Muller Dentistry. It is a single frontend app — there is no backend, database, or auth. Package manager is **npm** (`package-lock.json`), Node 22.

### Running / building / testing
- Dev server: `npm run dev` (Next.js + Turbopack) on `http://localhost:3000`. This is the primary way to verify UI changes; it does not fail on lint errors.
- Lint: `npm run lint` (ESLint via `eslint.config.mjs`).
- Tests: `node --test` (Node's built-in test runner). There is **no `test` script** in `package.json`; the suite lives in `tests/*.test.mjs` and only asserts that certain routes/content exist as files/strings.
- Typecheck: `npx tsc --noEmit`.

### Non-obvious gotchas
- `next build` runs ESLint and **fails the build on lint errors**. The rule that bites most is `react/no-unescaped-entities`, so keep JSX text lint-clean: escape apostrophes as `&apos;` and `&` as `&amp;`, or wrap text in `{`...`}` string literals. `npm run dev` does not enforce this, so always run `npm run lint` (or `npm run build`) before pushing anything meant to deploy.
- Content is data-driven: services come from `SERVICES` in `lib/site-config.ts`, and site navigation from `NAV_MAIN` in the same file. Adding a `ServiceSlug` + `SERVICES` entry automatically surfaces it in the services grid, footer, and sitemap. A service page must also be created at `app/services/<slug>/page.tsx`. Static (non-service) pages must be added to `app/sitemap.ts` manually.
- Business-wide structured data (`Dentist`/`LocalBusiness` JSON-LD) lives in `components/json-ld.tsx` and is rendered once in `app/layout.tsx`. Per-page SEO (canonical, OpenGraph, FAQ/Breadcrumb/MedicalProcedure JSON-LD) is defined inside each `page.tsx`.
