# Claude Memory Backup
*Last updated: April 8, 2026*

---

## Who I'm Working With

**User:** Tanner Moehle  
**Email:** tmoehle@mac.com  
**Role:** Product Designer (Microsoft Teams, AI, Enterprise Platforms)  
**GitHub portfolio project folder:** `/sessions/clever-gallant-newton/mnt/portfolio`

---

## What We've Built Together

### 1. UI/UX Architect Prompt
- Saved to: `/sessions/clever-gallant-newton/mnt/outputs/UI_UX_ARCHITECT_PROMPT.md`
- A comprehensive design philosophy prompt inspired by Steve Jobs and Jony Ive
- Covers: design audit protocol, scope discipline, design rules

### 2. Design Architect Skill
- Packaged at: `/sessions/clever-gallant-newton/mnt/outputs/design-architect.skill`
- Also installed to: `/sessions/clever-gallant-newton/mnt/portfolio/.claude/skills/design-architect/`
- Contains SKILL.md + 8 reference files:
  - `typography.md` — type scale, Inter, tight letter-spacing
  - `color.md` — palette architecture, warm neutrals
  - `spacing.md` — 8px grid system
  - `motion.md` — cubic-bezier easing, 220ms timing
  - `elevation.md` — shadow layers
  - `states.md` — empty/loading/error states
  - `dark-mode.md` — surface elevation in dark
  - `accessibility.md` — WCAG 4.5:1 contrast

### 3. Design System (Meridian)
- `DESIGN_SYSTEM.md` — full documentation
- `tailwind.config.js` — Tailwind config with teal accent (original version)
- `design-tokens.css` — CSS custom properties
- All in `/sessions/clever-gallant-newton/mnt/outputs/`
- Copies also in `/sessions/clever-gallant-newton/mnt/portfolio/`

### 4. Portfolio Website
- **Main file:** `/sessions/clever-gallant-newton/mnt/portfolio/index.html`
- **Backup of original:** `/sessions/clever-gallant-newton/mnt/portfolio/index-backup.html`
- **Hosted at:** Tanner's GitHub repo (pushed via GitHub Desktop)

---

## Current Portfolio Design (Premium Redesign)

This is the latest version of `index.html`. It was a full premium redesign based on a detailed brief from Tanner.

### Design Language
- **Inspiration:** Apple restraint + Stripe polish + Linear interaction detail
- **Palette:** Warm neutrals (`surface-50: #FAFAF8` → `surface-950: #0D0D0C`)
- **Accent:** Muted warm stone `#8B7355`
- **Font:** Inter with tight letter-spacing, custom display sizes
- **Feel:** Calm, precise, crafted, system-driven

### Typography Scale
```
display:    4.5rem / -0.03em / weight 500
display-sm: 3rem   / -0.025em / weight 500
title:      1.75rem / -0.015em / weight 500
body-lg:    1.125rem / lh 1.7
body:       1rem / lh 1.7
caption:    0.875rem / weight 450
micro:      0.75rem / +0.02em tracking / weight 500 / uppercase labels
```

### Special Effects
- **Cursor glow:** 600px radial gradient that lazily follows mouse via `requestAnimationFrame`
- **Noise texture:** Fixed SVG overlay, `opacity: 0.025` (light) / `0.04` (dark)
- **Page entrance:** `fadeUp` animation with staggered delays (100ms–500ms)
- **Reduced motion:** Fully respected via `@media (prefers-reduced-motion)`

### Project Card Hover System
- `translateY(-4px)` lift on card
- `scale(1.02) translateY(-2px)` on card image
- `translateX(2px)` on card title
- Line draw: `width: 0 → 24px` on accent line
- Arrow fade-in: `opacity: 0 → 1` + `translateX(-8px → 0)`
- All at 220ms `cubic-bezier(0.22, 1, 0.36, 1)`

### Nav Links
- Underline draw via `::after` pseudo-element, `width: 0 → 100%`

### Page Sections
1. **Hero** — Name, title, 3-paragraph bio, "View selected work" scroll link
2. **Work** — Bento grid (2-col), 5 project cards
3. **About** — 2-col layout, "Designing systems, not screens" headline, Focus Areas grid
4. **Contact** — "Let's build something meaningful" + email CTA button
5. **Footer** — LinkedIn + Twitter links

### Projects Featured
| Card | Color | Tags |
|------|-------|------|
| Microsoft Teams | Blue/Indigo | Notifications, Together Mode, Breakout Rooms |
| Decisions | Violet/Purple | AI Intelligence, Meeting Minutes |
| Mara | Amber/Orange | Field Research, Fintech |
| EA Games | Emerald/Teal | UI Systems, Iconography |
| IBM | Slate/Gray | Blueworks Live, Enterprise UX |

### Light/Dark Mode
- `darkMode: 'class'` via Tailwind
- Persisted in `localStorage`
- Respects `prefers-color-scheme` as default
- Toggle button in nav (sun/moon icons)

---

## Git Status
- All files committed to local git repo
- **Push requires GitHub Desktop** — VM cannot authenticate with GitHub
- Tanner pushes via GitHub Desktop on his Mac

---

## Pending / Next Steps
- Tanner may want to:
  1. Push latest premium redesign via GitHub Desktop
  2. Add real project screenshots/images to replace gradient placeholders
  3. Add a Writing/Blog section
  4. Link project cards to case study pages
  5. Add LinkedIn/Twitter URLs in footer

---

## Key Technical Notes
- Using **Tailwind CDN** (not compiled) — config passed via `tailwind.config = {...}`
- All in a single `index.html` — no build step required
- Custom colors use Tailwind's `extend.colors` — accessible as `bg-surface-50`, `text-accent`, etc.
- Custom font sizes require full tuple syntax for CDN Tailwind to pick up line-height/tracking

---

## Files in Portfolio Folder
```
/sessions/clever-gallant-newton/mnt/portfolio/
├── index.html              ← Main portfolio (premium redesign, latest)
├── index-backup.html       ← Original version before redesign
├── tailwind.config.js      ← Standalone Tailwind config (Meridian system)
├── design-tokens.css       ← CSS custom properties
├── DESIGN_SYSTEM.md        ← Meridian design system docs
├── CLAUDE_MEMORY.md        ← This file
└── .claude/
    └── skills/
        └── design-architect/   ← Installed design skill
```
