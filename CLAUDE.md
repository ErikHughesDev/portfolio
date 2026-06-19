# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `portfolio/` directory:

```bash
npm run dev      # Start dev server (webpack mode) at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

Single-page portfolio site built with Next.js 16 (App Router), React 19, TypeScript, and SCSS Modules.

**Page structure** — `src/app/page.tsx` renders one root page composed of section components in order: `Navbar → Hero → About → Projects → Contact → Footer`.

**Component layout:**
- `src/components/layout/` — `Navbar`, `Footer`
- `src/components/sections/` — one file per page section; each section has a paired `.module.scss`
- `src/components/ui/` — shared primitives (`Container`, `Section`)

**Data** — `src/data/projects.ts` is the single source of truth for all project cards. The `Project` type is defined in `src/types/project.ts`. To add or update a project, edit only `projects.ts`.

**Styling system:**
- `globals.scss` — resets, CSS custom properties (design tokens), `.container` utility class. Imported once in `layout.tsx`.
- `src/styles/variables.scss` — SCSS breakpoint variables (`$bp-sm/md/lg/xl`)
- `src/styles/mixins.scss` — reusable SCSS mixins (`@include flex-center`, `@include card-base`, `@include tag-base`, etc.)
- `src/styles/_mediaQueries.scss` — responsive mixins (`@include sm/md/lg/xl`, `@include below-lg`, `@include hover`)
- `next.config.ts` auto-injects `variables`, `mixins`, and `_mediaQueries` into every SCSS module — import them directly without re-importing in module files.

**Design tokens** — all color, spacing, typography, and radius values are CSS custom properties defined in `:root` in `globals.scss`. Use `var(--token-name)` in SCSS modules; do not hardcode values.

**Path alias** — `@/` maps to `src/`.
