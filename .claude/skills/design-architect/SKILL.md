---
name: design-architect
description: |
  **Premium UI/UX Design Architect**: Comprehensive design system for auditing, refining, and elevating digital interfaces to feel inevitable, quiet, and effortless—inspired by Steve Jobs, Jony Ive, and Dieter Rams.

  MANDATORY TRIGGERS: UI audit, UX review, design system, visual hierarchy, typography, color theory, spacing, accessibility, dark mode, responsive design, mobile-first, component styling, design tokens, micro-interactions, empty states, loading states, error states, Gestalt principles, 8px grid, elevation, shadows, design refinement, premium UI, polish, design critique

  Use when: (1) Auditing existing UI/UX for hierarchy, consistency, and polish (2) Refining typography, color, spacing, or layout (3) Creating or updating design systems and tokens (4) Implementing accessibility improvements (5) Designing responsive/mobile-first interfaces (6) Adding micro-interactions and motion (7) Designing empty, loading, and error states (8) Implementing dark mode (9) Any task requiring design excellence
---

# Design Architect

Transform interfaces from functional to inevitable. This skill embeds the design philosophy of Steve Jobs, Jony Ive, and Dieter Rams into every pixel.

## Core Philosophy

**"Simplicity is the ultimate sophistication."** — Leonardo da Vinci / Steve Jobs

Design is not decoration. It is how it works. Every element must justify its existence. If a user needs to think about how to use it, you've failed. If an element can be removed without losing meaning, it must be removed.

### Dieter Rams' 10 Principles

1. **Innovative** — Pushes boundaries while solving real problems
2. **Useful** — Every element serves the user's goal
3. **Aesthetic** — Beauty emerges from clarity, not ornamentation
4. **Understandable** — Self-explanatory without instruction
5. **Unobtrusive** — Tools, not obstacles; neutral, purposeful
6. **Honest** — No manipulation or false promises
7. **Long-lasting** — Timeless, not trendy
8. **Thorough** — Every detail refined, even the invisible ones
9. **Environmentally friendly** — Respects resources (including attention)
10. **As little design as possible** — Less, but better

### The Jobs Filter

For every element, ask:
- "Would a user need to be told this exists?" → If yes, redesign until obvious
- "Can this be removed without losing meaning?" → If yes, remove it
- "Does this feel inevitable?" → If no, it's not done
- "Is this detail as refined as the ones users will never see?" → The back of the fence must be painted too

---

## Visual Hierarchy

Every screen has ONE primary action. Make it unmissable. Secondary actions support—they never compete.

### Eye Scanning Patterns

**F-Pattern** (text-heavy pages): Users scan horizontally across the top, then down the left side. Place critical content in top-left, key information along left edge.

**Z-Pattern** (minimal pages): Eye moves top-left → top-right → diagonal to bottom-left → bottom-right. Place CTA at the terminal point (bottom-right).

### Hierarchy Tools

| Tool | Effect |
|------|--------|
| **Size** | Larger = more important |
| **Weight** | Bolder = more emphasis |
| **Color** | Contrast draws attention |
| **Position** | Top-left gets first attention |
| **Whitespace** | Isolation creates focus |
| **Contrast** | Difference creates hierarchy |

**Rule**: If everything is bold, nothing is bold. Visual weight must match functional importance.

---

## Typography

See [references/typography.md](references/typography.md) for complete type scale and pairing guide.

### Quick Reference

- **Body text**: 16–18px, line-height 1.5×
- **Line length**: 45–75 characters optimal
- **Type scale ratio**: 1.25 (minor third) or 1.333 (perfect fourth)
- **Max typefaces**: 2–3 per project
- **Hierarchy levels**: Limit to 4–5 distinct sizes

### Typography Tokens

```
--font-size-xs:    12px
--font-size-sm:    14px
--font-size-base:  16px
--font-size-lg:    18px
--font-size-xl:    20px
--font-size-2xl:   24px
--font-size-3xl:   30px
--font-size-4xl:   36px
--font-size-5xl:   48px

--line-height-tight:  1.25
--line-height-normal: 1.5
--line-height-relaxed: 1.75

--font-weight-normal:   400
--font-weight-medium:   500
--font-weight-semibold: 600
--font-weight-bold:     700
```

---

## Color Theory

See [references/color.md](references/color.md) for psychology, palettes, and accessibility.

### The 60-30-10 Rule

- **60%** — Dominant (backgrounds, large areas) — neutral
- **30%** — Secondary (cards, sections) — complementary
- **10%** — Accent (CTAs, highlights) — bold, intentional

### Color Psychology Quick Reference

| Color | Associations | UI Use |
|-------|-------------|--------|
| **Blue** | Trust, calm, professionalism | Primary actions, links |
| **Green** | Success, growth, nature | Confirmations, positive states |
| **Red** | Urgency, error, passion | Errors, destructive actions |
| **Yellow/Orange** | Warning, energy, optimism | Warnings, highlights |
| **Purple** | Luxury, creativity | Premium features |
| **Neutral grays** | Sophistication, balance | Backgrounds, text |

### Contrast Requirements (WCAG)

- **Normal text**: 4.5:1 minimum (AA), 7:1 enhanced (AAA)
- **Large text** (18px+): 3:1 minimum
- **UI components**: 3:1 against adjacent colors
- **Focus indicators**: 3:1 against surrounding colors

---

## Spacing & The 8px Grid

See [references/spacing.md](references/spacing.md) for complete spacing system.

### Why 8px?

- Divisible by 2 and 4 for sub-grids
- Scales cleanly across device densities
- Creates consistent visual rhythm
- Reduces decision fatigue

### Spacing Scale

```
--space-0:   0px
--space-1:   4px   (half-step, tight situations)
--space-2:   8px   (base unit)
--space-3:   12px
--space-4:   16px
--space-5:   24px
--space-6:   32px
--space-7:   40px
--space-8:   48px
--space-9:   64px
--space-10:  80px
--space-11:  96px
--space-12:  128px
```

### Spacing Rules

1. **Internal ≤ External**: Padding inside elements should never exceed margin between elements
2. **Consistent rhythm**: Related elements share the same spacing
3. **Whitespace is a feature**: Crowded = cheap. Breathing room = premium.
4. **Grid alignment**: Every element snaps to the 8px grid

### Layout Grid

- **Desktop**: 12 columns, 24px gutters, auto margins
- **Tablet**: 8 columns, 16px gutters
- **Mobile**: 4 columns, 16px gutters

---

## Responsive & Mobile-First

Design for thumbs first, then cursors. Mobile is the constraint that reveals the essential.

### Breakpoints

```
--breakpoint-sm:  640px   (large phones)
--breakpoint-md:  768px   (tablets)
--breakpoint-lg:  1024px  (laptops)
--breakpoint-xl:  1280px  (desktops)
--breakpoint-2xl: 1536px  (large screens)
```

### Touch Targets

- **Minimum size**: 44×44px (Apple), 48×48px (Material)
- **Recommended**: 48×48px for primary actions
- **Spacing between targets**: 8px minimum

### Thumb Zone

```
┌─────────────────────┐
│   HARD TO REACH     │  ← Avoid primary actions
├─────────────────────┤
│   STRETCH ZONE      │  ← Secondary actions OK
├─────────────────────┤
│   NATURAL ZONE      │  ← Primary actions here
│   (Bottom center)   │
└─────────────────────┘
```

**Best practice**: Navigation bars, FABs, and primary CTAs belong at the bottom.

---

## Gestalt Principles

The brain groups visual elements automatically. Use this to create intuitive interfaces.

| Principle | Meaning | Application |
|-----------|---------|-------------|
| **Proximity** | Near = related | Group related controls; separate unrelated ones |
| **Similarity** | Same style = same meaning | Consistent button styles, icon sets |
| **Closure** | Brain completes incomplete shapes | Logo design, progress indicators |
| **Continuity** | Eye follows lines/curves | Alignment guides scanning |
| **Figure/Ground** | Foreground vs background | Modals, cards, overlays |
| **Common Region** | Shared container = grouped | Cards, sections, panels |

---

## Elevation & Shadows

See [references/elevation.md](references/elevation.md) for complete shadow tokens.

### Elevation Scale

| Level | Use Case | Shadow |
|-------|----------|--------|
| **0** | Base content | None |
| **1** | Cards, raised surfaces | Subtle |
| **2** | Dropdowns, popovers | Medium |
| **3** | Sticky headers, navigation | Pronounced |
| **4** | Modals, dialogs | Strong |
| **5** | Toasts, alerts (top layer) | Maximum |

### Shadow Tokens

```css
--shadow-sm:  0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow:     0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg:  0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl:  0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

---

## Motion & Micro-interactions

See [references/motion.md](references/motion.md) for timing functions and animation patterns.

### Duration Guidelines

| Action | Duration | Use |
|--------|----------|-----|
| **Micro** | 100–200ms | Button press, toggle, hover |
| **Small** | 200–300ms | Dropdowns, tooltips |
| **Medium** | 300–400ms | Page transitions, modals |
| **Large** | 400–500ms | Complex choreography |

**Rule**: Button feedback within 16ms. Never exceed 500ms.

### Easing Functions

```css
--ease-in:      cubic-bezier(0.4, 0, 1, 1);    /* Accelerating (exit) */
--ease-out:     cubic-bezier(0, 0, 0.2, 1);    /* Decelerating (enter) */
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);  /* Smooth (move) */
```

**Pattern**: Use `ease-out` for elements entering, `ease-in` for elements exiting.

### Animation Principles

1. **Purposeful** — Every animation communicates something
2. **Fast** — Respect user's time; quick but smooth
3. **Natural** — Follow physics; no linear motion
4. **Accessible** — Respect `prefers-reduced-motion`

---

## Component States

Every interactive element needs these states defined:

### State Matrix

| State | Visual Treatment |
|-------|------------------|
| **Default** | Base appearance |
| **Hover** | Subtle lift, color shift, cursor change |
| **Focus** | Visible ring (3:1 contrast), never remove |
| **Active/Pressed** | Slight depression, darker shade |
| **Disabled** | 40–50% opacity, cursor: not-allowed |
| **Loading** | Spinner or skeleton, disabled interaction |
| **Error** | Red border, error message |
| **Success** | Green indicator, confirmation |

### Focus Indicators

```css
/* Accessible focus ring */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* Never do this */
:focus { outline: none; } /* Breaks keyboard navigation */
```

---

## Empty, Loading & Error States

See [references/states.md](references/states.md) for patterns and examples.

### Empty States

- **Explain** what will appear when populated
- **Guide** the user to take action
- **Delight** with illustration or personality (optional)
- **Replace** the component entirely (no empty tables with headers)

### Loading States

| Wait Time | Pattern |
|-----------|---------|
| **<2s** | None (feels instant) |
| **2–10s** | Skeleton screen or spinner |
| **>10s** | Progress bar with % |

**Skeleton rules**:
- Match the layout of loaded content
- Use subtle shimmer animation
- Never skeleton action components (buttons, inputs)

### Error States

- **Clear message** — What went wrong
- **Recovery action** — How to fix it
- **Friendly tone** — Never blame the user

---

## Dark Mode

See [references/dark-mode.md](references/dark-mode.md) for complete implementation guide.

### Quick Rules

1. **Never pure black** (#000000) — Use #121212 or dark grays
2. **Never pure white text** — Use #E0E0E0 or similar
3. **Desaturate colors** — Bright colors vibrate on dark backgrounds
4. **Elevate with lightness** — Higher surfaces = lighter (not just shadows)
5. **Maintain contrast** — Retest all contrast ratios
6. **Respect system preference** — `prefers-color-scheme` media query

### Dark Mode Tokens

```css
/* Surfaces (lighter = higher elevation) */
--surface-0: #121212;  /* Base */
--surface-1: #1E1E1E;  /* Cards */
--surface-2: #232323;  /* Elevated */
--surface-3: #282828;  /* Dialogs */

/* Text */
--text-primary:   rgba(255, 255, 255, 0.87);
--text-secondary: rgba(255, 255, 255, 0.60);
--text-disabled:  rgba(255, 255, 255, 0.38);
```

---

## Accessibility Checklist

### WCAG 2.1 AA Requirements

- [ ] Color contrast 4.5:1 (text), 3:1 (large text, UI)
- [ ] Focus indicators visible on all interactive elements
- [ ] Touch targets minimum 44×44px
- [ ] No information conveyed by color alone
- [ ] All images have alt text
- [ ] Form inputs have visible labels
- [ ] Error messages are clear and helpful
- [ ] Keyboard navigation works for all actions
- [ ] `prefers-reduced-motion` respected
- [ ] Screen reader testing completed

---

## Design Audit Protocol

When auditing an existing interface:

### 1. Full Audit Dimensions

1. Visual Hierarchy — Where does the eye land?
2. Spacing & Rhythm — Consistent, intentional whitespace?
3. Typography — Clear hierarchy, calm not chaotic?
4. Color — Restrained, purposeful, accessible?
5. Alignment & Grid — Pixel-perfect precision?
6. Component Consistency — Same elements styled identically?
7. Iconography — Cohesive set, consistent weight/size?
8. Motion — Natural, purposeful, not decorative?
9. Empty States — Intentional, not broken?
10. Loading States — Alive, not frozen?
11. Error States — Helpful, not hostile?
12. Dark Mode — Designed, not inverted?
13. Density — Can anything be removed?
14. Responsiveness — Fluid at every viewport?
15. Accessibility — WCAG compliant?

### 2. Phased Approach

**Phase 1 — Critical**: Hierarchy, usability, accessibility issues
**Phase 2 — Refinement**: Spacing, typography, color, alignment
**Phase 3 — Polish**: Micro-interactions, states, dark mode

### 3. Implementation Notes

Every recommendation must specify:
- Exact file
- Exact component
- Exact property
- Old value → New value

"Make cards feel softer" is not an instruction.
"CardComponent border-radius: 8px → 12px" is.

---

## Design System Token Structure

### Three-Tier Hierarchy

```
Global (Primitive) → Semantic (Alias) → Component
     ↓                    ↓                ↓
  blue-500         color-primary      button-bg
```

**Global**: Raw values (`blue-500`, `space-4`)
**Semantic**: Purpose-based (`color-primary`, `spacing-section`)
**Component**: Specific use (`button-padding`, `card-radius`)

---

## Reference Files

For deep dives on specific topics:

- [references/typography.md](references/typography.md) — Type scales, pairing, responsive type
- [references/color.md](references/color.md) — Color psychology, palettes, accessibility
- [references/spacing.md](references/spacing.md) — 8px grid, spacing scale, layout grids
- [references/motion.md](references/motion.md) — Timing, easing, animation patterns
- [references/elevation.md](references/elevation.md) — Shadow system, z-index, depth
- [references/states.md](references/states.md) — Empty, loading, error state patterns
- [references/dark-mode.md](references/dark-mode.md) — Dark theme implementation
- [references/accessibility.md](references/accessibility.md) — WCAG compliance, testing

---

## Final Mantra

> "Design is not just what it looks like and feels like. Design is how it works."
> — Steve Jobs

> "Less, but better."
> — Dieter Rams

> "Simplicity is not the absence of clutter. Simplicity is somehow essentially describing the purpose and place of an object and product."
> — Jony Ive

Make it inevitable. Make it quiet. Make it effortless.
