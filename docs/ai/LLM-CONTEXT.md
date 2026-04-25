# LLM context — NorthBucket List UI

Use this with `AGENTS.md` at repo root. Optimized for automated edits and refactors.

## Invariants

- **Lang**: TypeScript + React function components. Prefer `export function` for components.
- **Styling**: Tailwind utility classes; design tokens from `globals.css` (no inline colors except `BRAND_ACCENT_HEX` where the red marketing accent must match the brand).
- **Imports**: `@/components/...`, `@/lib/...`, `@/hooks/...`.

## Safe edit zones

- **Copy-only changes**: `lib/content/**/*.ts` first; then re-read the consuming component for formatting.
- **New home section**: Add under `components/landing/home/`, register in `app/page.tsx`, add `docs/sections/<name>.md`.
- **Subpages**: Keep `contact/`, `discover/` as feature folders; do not move without updating routes.

## Commands

- `npm run build` — required before considering a refactor done.
- `npm run lint` — if ESLint is configured for the project.

## Do not

- Reintroduce removed home sections (developers, pricing) without explicit product request.
- Change `public/images` paths in content without verifying files exist.

## File naming

- **Sections**: `*-section.tsx` in `home/` or `blocks/`.
- **Content**: `kebab-case` files under `lib/content/`, `camelCase` exports.
