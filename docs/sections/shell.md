# Shell: layout, navigation, footer

- **Files** — `components/landing/shell/site-layout.tsx`, `navigation.tsx`, `footer-section.tsx`
- **Role** — `SiteLayout` is the main wrapper: `<main id="top">` + `Navigation` + page content + `FooterSection`.
- **Imports** — Pages use `@/components/landing/shell/site-layout`.
- **Changes** — Global nav links or footer columns: edit the corresponding file; for site name/email, prefer `lib/content/site.ts`.
