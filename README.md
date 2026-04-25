# NorthBucket List — web UI

Curated travel marketing site (Next.js App Router) for Northern Pakistan trips.

- **Run** — `npm install` then `npm run dev`
- **Build** — `npm run build`
- **Structure** — See [`docs/architecture.md`](./docs/architecture.md)
- **Agent / LLM** — [`AGENTS.md`](./AGENTS.md) and [`docs/ai/LLM-CONTEXT.md`](./docs/ai/LLM-CONTEXT.md)
- **Copy & routes** — `lib/content/` (start with `lib/content/site.ts`)

## Folders (short)

| Path | Role |
|------|------|
| `app/` | Routes |
| `components/landing/shell/` | Layout, nav, footer |
| `components/landing/home/` | Home (and some shared) sections |
| `components/landing/blocks/` | e.g. pricing, how it works (used on `/trips`) |
| `components/landing/shared/` | `PageHero`, `SectionContainer`, etc. |
| `lib/content/` | Global marketing copy |
| `docs/` | Architecture, reusability, per-section notes |
