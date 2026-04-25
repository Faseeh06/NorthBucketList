# Blocks (trips and optional home)

- **Folder** — `components/landing/blocks/`
- **Files** — `how-it-works-section.tsx`, `pricing-section.tsx`, `developers-section.tsx`
- **Usage** — `/trips` composes `HowItWorksSection` and `PricingSection` under `PageHero` + `FeaturesSection`. Home no longer includes pricing/developers; blocks remain for inner pages.
- **Docs** — See each file’s header comment; `PricingSection` exposes `id="pricing"` for `/trips#pricing`.
