# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server at `http://localhost:4321`.
- `npm run build` — static build to `dist/` (via the `@astrojs/vercel` adapter).
- `npm run preview` — serve the built output locally.
- `npx astro check` — type-check `.astro` files.

There is no test runner or linter configured in this repo.

## Architecture

Astro 7 (static output) with React islands, TypeScript, and Tailwind CSS v4. Single-page site — no client routing, one route at `src/pages/index.astro`.

- **Design system**: "Swiss Editorial Monochrome" — near-black/white palette, one blue accent (`--color-accent`), `Space Grotesk` (display) + `Inter` (body) + `JetBrains Mono` (labels/index numbers), zero border-radius, no shadows/blur. Tokens live in `src/styles/global.css` under `@theme` (Tailwind v4's CSS-first config — there is no `tailwind.config.js`).
- **Page composition**: `src/pages/index.astro` assembles section components in order: `Hero` → `ProjectGrid` → `ExperienceTimeline` → `SkillsGrid` → `ContactSection`, all wrapped in `src/layouts/BaseLayout.astro` (head/SEO/OG meta, `SiteNav`, `SiteFooter`, the scroll-reveal `IntersectionObserver` script, and the Vercel `<Analytics />` component).
- **Content lives in typed content collections**, not hardcoded in components. `src/content.config.ts` defines four collections (`projects`, `experience`, `education`, `skills`) backed by JSON files in `src/content/*.json` via the `file()` loader, each with a Zod schema. Every entry has an explicit `order: number` field — **the `file()` loader does not preserve JSON array order**, so every collection consumer must `.sort((a, b) => a.data.order - b.data.order)` after `getCollection()`, or entries render alphabetically by `id`. To add/edit portfolio content, edit the JSON files (bump/insert `order` values as needed) rather than the `.astro` components.
- **Content-config changes need a dev server restart.** Editing `src/content.config.ts` and the JSON schema together in one dev session can leave Astro's content store in a broken "collection does not exist" state that doesn't self-heal — if collections start rendering empty, stop the dev server (`astro dev stop`) and restart it.
- **Images**: project screenshots and the profile photo live in `src/assets/` (not `public/`) so they go through `astro:assets` for automatic WebP conversion and responsive sizing — this cut the original PNGs by 90%+ (e.g. 2.7MB → ~20KB). `src/assets/projects/index.ts` exports a filename → `ImageMetadata` map that `ProjectCard.astro` looks up by the `image` field from the JSON data, since Vite needs statically analyzable import paths. Small vector icons (skills/tools logos) stay in `public/assets/` and are referenced by plain path — no optimization needed for those.
- **Contact form** (`src/components/ContactForm.tsx`) is the only React island (`client:visible`), using `@emailjs/browser` to send mail client-side with no backend. Service ID / template ID / public key are read from `import.meta.env.PUBLIC_EMAILJS_*` (see `.env.example`) rather than hardcoded — set these in Vercel's project env vars for production, since `.env` is gitignored.
- **Motion**: CSS-only reveal (`.reveal` / `.reveal.is-visible` in `global.css`) driven by a single `IntersectionObserver` in `BaseLayout.astro`; per-card stagger uses an inline `transition-delay` computed from index. Respects `prefers-reduced-motion` via a global CSS override.
