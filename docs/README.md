# NorthBucket List — documentation

| Document | Purpose |
|----------|---------|
| [architecture.md](./architecture.md) | Folders, data flow, theming |
| [reusability.md](./reusability.md) | Shared hooks, components, copy pattern |
| [sections/](./sections/) | One short file per major landing block |
| [ai/LLM-CONTEXT.md](./ai/LLM-CONTEXT.md) | Extra hints for large language models |

## Quick links

- **Global text & routes** → `lib/content/site.ts`, `lib/content/home/*.ts`
- **Shell (nav, footer, layout wrapper)** → `components/landing/shell/`
- **Home page sections** → `components/landing/home/`

When you change product copy, prefer `lib/content` so editors and code stay aligned.
