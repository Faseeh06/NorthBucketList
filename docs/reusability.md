# Reusability

## When to use what

| Need | Use |
|------|-----|
| Standard content width + horizontal padding | `SectionContainer` + optional `className` for vertical padding on inner wrapper or parent `<section>` |
| Red marketing square (mono label row) | `BrandSquare` from `components/landing/shared/brand-square.tsx` (uses `BRAND_ACCENT_HEX`) |
| Red CTA icon circle (same as intro / featured) | `style={{ backgroundColor: BRAND_ACCENT_HEX }}` on a rounded span, or extend a tiny `PrimaryCircleButton` if it grows |
| “Animate once on scroll” | `useInViewOnce({ threshold: 0.1 })` → `{ ref, visible }` on `<section>` |
| New marketing paragraph | Add to `lib/content/...` and import; or `lib/content/site.ts` for global strings |
| New route | Add to `routes` in `lib/content/site.ts` and import in components |

## Extending the content layer

1. Add a file under `lib/content/<area>/<name>.ts` (e.g. `home/testimonials.ts` when you extract copy).
2. Export constants with clear names; use `as const` for string literals and tuples.
3. Re-export from `lib/content/index.ts` if the export is part of the public “copy API”.

## Anti-patterns

- Copy-pasting the same `max-w-[min(100%,1760px)]` block — use `SectionContainer` or `LAYOUT.maxWidthClass` from `lib/constants/brand.ts`.
- Hardcoding `hello@...` in many files — use `site.email` from `lib/content/site.ts`.

## Testing layout changes

- Run `npm run build` after moving components or changing imports.
- Home: `/` · Trips flow: `/trips` (uses `PageHero` + blocks + home `FeaturesSection`).
