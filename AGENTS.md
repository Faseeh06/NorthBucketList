# NorthBucket List — AI / agent context

This file helps coding agents work safely in this repo. Read it before large refactors.

## Stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4** — tokens in `app/globals.css` (`:root` + `@theme inline`)
- **shadcn-style UI** in `components/ui/`
- Path alias: `@/*` → project root (see `tsconfig.json`)

## Project layout (high level)

| Area | Path | Notes |
|------|------|--------|
| App routes | `app/` | `page.tsx`, `layout.tsx`, per-route `metadata` |
| Marketing shell | `components/landing/shell/` | `SiteLayout`, `Navigation`, `FooterSection` |
| Home + reusable marketing sections | `components/landing/home/` | Hero, intro, features, featured trips, testimonials |
| Composed “blocks” (other pages) | `components/landing/blocks/` | e.g. How it works, pricing, developers (if used) |
| Shared landing primitives | `components/landing/shared/` | `PageHero`, `SectionContainer`, `BrandSquare` |
| Feature folders | `components/landing/contact/`, `discover/` | Page-specific UIs |
| **Global copy** | `lib/content/` | Edit strings and lists here, not only in components |
| **Brand constants** | `lib/constants/brand.ts` | Accent hex, layout class names |
| **Hooks** | `hooks/` | e.g. `use-in-view-once` for section animations |
| Docs for humans/AI | `docs/` | Architecture, per-section notes, reusability |
| Deeper doc index | `docs/README.md` | Start here |
| Theming | `app/globals.css` | Page background, foreground, `font-sans` (Instrument Sans) |

## Conventions

1. **Copy** — Long marketing text and structured data: `lib/content/`. Re-exported from `lib/content/index.ts` for convenience.
2. **Colors** — UI theme: CSS variables. Repeated **marketing red** for dots/CTA circles: `BRAND_ACCENT_HEX` in `lib/constants/brand.ts` (or `BrandSquare` / inline `style` where needed).
3. **Section width** — Use `SectionContainer` from `components/landing/shared/section-container.tsx` for the standard `max-w-[min(100%,1760px)]` + horizontal padding.
4. **Reusable scroll animation** — `useInViewOnce` in `hooks/use-in-view-once.ts` for one-shot intersection-based fades (same idea as `FeaturesSection` / `TestimonialsSection`).

## What not to do

- Do not add duplicate hardcoded `max-w-[...]` everywhere — prefer `SectionContainer` + `LAYOUT` from brand constants.
- Do not remove `lib/content` indirection for featured trips or intro without updating `docs/sections/`.
- Keep `/trips` and other subpages importing from `components/landing/blocks/*` and `home/*` as they do now.

## Build

- `npm run build` — production build
- `npm run dev` — dev server (webpack per `package.json`)

## Product

**NorthBucket List** — curated travel in Northern Pakistan (Hunza, Skardu, KKH, etc.). Tone: grounded, local, not brochure-fantasy.
