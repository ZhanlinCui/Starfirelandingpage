# Landing Page Handoff

Last updated: 2026-04-09

## 1) Isolation Rule

- Keep all work inside `Starfirelandingpage-main/**`.
- Do not edit `platform/`, `canvas/`, or `workspace-template/` for landing tasks.
- This folder is a standalone repo and should stay logically independent.

## 2) Information Architecture

Page assembly is in `src/app/App.tsx`:

1. `Header`
2. `Hero`
3. `WhyNow`
4. `Moats`
5. `CapabilityProof`
6. `UseCases`
7. `FinalCTA`
8. `Footer`

## 3) Content Ownership

- Bilingual copy is centralized in `src/app/content.ts`.
- Real external links are centralized in `siteLinks` in the same file.
- Section components should read content from this file instead of embedding large copy blocks.

## 4) Visual System

- Palette: deep navy + steel blue + cyan accent.
- Typography:
  - Display: Space Grotesk
  - Body: Manrope
  - Technical labels: JetBrains Mono
- Tokens and global baseline are defined in `src/styles/theme.css`.
- Reduced-motion mode is supported through CSS media query and `useReducedMotion`.

## 5) Hero Visual Policy

- `HeroVisual.tsx` is code-native (no photo assets).
- Use Starfire context only (no generic tenant placeholders like "Acme").
- Keep cards short, factual, and linked to shipped capability language.

## 6) Quality Guards

- No `href="#"` placeholders.
- No Unsplash or other placeholder media URLs.
- No `Inter` font usage.
- `npm run build` must pass before merge.
- Validate responsive layout at 375 / 768 / 1280 widths.

## 7) Next Iteration Suggestions

1. Add light analytics hooks for CTA clicks.
2. Add visual regression snapshots for key sections.
3. Replace minor in-component technical labels with content-layer entries for full copy centralization.

