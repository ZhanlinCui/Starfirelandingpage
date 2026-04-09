# Starfire Landing Page

Standalone Vite workspace for the Starfire public landing page.

This project is intentionally isolated from the main Starfire monorepo implementation.  
All landing iterations should stay inside `Starfirelandingpage-main/**`.

## Run

```bash
cd Starfirelandingpage-main
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
```

## Current IA

1. `Header`
2. `Hero`
3. `WhyNow`
4. `Moats`
5. `CapabilityProof`
6. `UseCases`
7. `FinalCTA`
8. `Footer`

## Content System

All bilingual copy and external links are centralized in:

- `src/app/content.ts`

This file owns:

- `siteLinks` (GitHub, README, PRD, Architecture)
- EN/ZH section content
- Proof cards and use-case data

Components should consume this content layer instead of hardcoding page copy.

## Styling System

- Tailwind v4 utilities + custom tokens in `src/styles/theme.css`
- Typography:
  - Display: `Space Grotesk`
  - Body: `Manrope`
  - Mono: `JetBrains Mono`
- Motion uses `motion/react` and respects `prefers-reduced-motion`.

## Directory Guide

```text
Starfirelandingpage-main/
├─ public/branding/                # Starfire branding assets
├─ src/app/
│  ├─ App.tsx                      # Page composition
│  ├─ content.ts                   # Typed bilingual content + links
│  ├─ i18n.ts                      # Locale and localStorage key
│  └─ components/                  # Section components
└─ src/styles/                     # Tailwind + tokens + fonts
```

## Quality Checklist

- `npm run build` passes
- No `href="#"` placeholder links
- No external placeholder media URLs
- No hardcoded marketing copy outside `content.ts` (except minor technical labels)

