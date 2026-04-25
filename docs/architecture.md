# Architecture

## Route → layout → sections

- Each **route** in `app/<name>/page.tsx` composes `SiteLayout` (from `components/landing/shell/site-layout.tsx`) and zero or more **sections**.
- `SiteLayout` wraps **Navigation** + `children` + **FooterSection**.

## Folder map

```
app/
  layout.tsx          # Root layout, fonts, globals
  page.tsx            # Home: hero → intro → features → featured trips → testimonials
  contact/|discover/|feedbacks/|trips/

components/landing/
  shell/              # site-layout, navigation, footer
  home/               # Sections used on home (and sometimes reused, e.g. features on /trips)
  blocks/             # Optional composite sections (how-it-works, pricing, developers)
  shared/             # SectionContainer, PageHero, BrandSquare, ascii-scene
  contact/            # Contact page
  discover/           # Discover page

lib/
  content/            # Marketing copy (TypeScript modules)
  constants/            # brand.ts (accent, layout)
hooks/
  use-in-view-once.ts  # One-shot in-view for animations

docs/
  sections/            # Per-section notes for maintainers
  ai/                  # LLM-oriented context
```

## Theming

- **Colors & fonts**: `app/globals.css` — `--background` (warm paper `#f7f7f2`), `--foreground`, `font-sans` (Instrument Sans).
- **shadcn tokens** map to those CSS variables via Tailwind 4 `@theme inline`.

## Content layer

- **Why**: keep paragraphs, CTAs, and lists editable in one place and avoid string duplication in JSX.
- **Entry**: `lib/content/index.ts` re-exports; section-specific: `lib/content/home/intro.ts`, `featured-trips.ts`.
- **Routes**: `lib/content/site.ts` — `routes` object for `href` values.

## Images & assets

- **Public** images: `public/images/` (referenced as `/images/...`).
