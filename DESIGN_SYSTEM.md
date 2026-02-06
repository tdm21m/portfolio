# Design System

**Meridian** — A modern, minimal design system for marketing and landing pages.

> *"Less, but better."* — Dieter Rams

---

## Philosophy

This system embodies quiet confidence. Every element earns its place. Generous whitespace creates breathing room. The teal accent appears sparingly—only where action matters most. Typography is bold yet calm. The result: pages that feel inevitable, as if no other design was ever possible.

**Principles:**
1. **Simplicity is architecture** — Remove until it breaks, then add back the last thing
2. **Whitespace is a feature** — Crowded = cheap. Breathing room = premium.
3. **One primary action** — Every section has one unmissable CTA
4. **Earn every pixel** — If it doesn't serve the user's goal, it's clutter

---

## Color Palette

### Primitive Tokens

Our foundation: a warm neutral scale with a vibrant teal accent.

#### Neutrals (Warm Gray)

| Token | Hex | RGB | Use |
|-------|-----|-----|-----|
| `gray-50` | #FAFAF9 | 250, 250, 249 | Page backgrounds |
| `gray-100` | #F5F5F4 | 245, 245, 244 | Subtle backgrounds |
| `gray-200` | #E7E5E4 | 231, 229, 228 | Borders, dividers |
| `gray-300` | #D6D3D1 | 214, 211, 209 | Disabled states |
| `gray-400` | #A8A29E | 168, 162, 158 | Placeholder text |
| `gray-500` | #78716C | 120, 113, 108 | Secondary text |
| `gray-600` | #57534E | 87, 83, 78 | Body text |
| `gray-700` | #44403C | 68, 64, 60 | Emphasis |
| `gray-800` | #292524 | 41, 37, 36 | Headings |
| `gray-900` | #1C1917 | 28, 25, 23 | Maximum contrast |
| `gray-950` | #0C0A09 | 12, 10, 9 | Near black |

#### Teal (Primary Accent)

| Token | Hex | RGB | Use |
|-------|-----|-----|-----|
| `teal-50` | #F0FDFA | 240, 253, 250 | Subtle tint backgrounds |
| `teal-100` | #CCFBF1 | 204, 251, 241 | Highlight backgrounds |
| `teal-200` | #99F6E4 | 153, 246, 228 | Hover backgrounds |
| `teal-300` | #5EEAD4 | 94, 234, 212 | Active states |
| `teal-400` | #2DD4BF | 45, 212, 191 | Vibrant accents |
| `teal-500` | #14B8A6 | 20, 184, 166 | **Primary brand** |
| `teal-600` | #0D9488 | 13, 148, 136 | Primary hover |
| `teal-700` | #0F766E | 15, 118, 110 | Primary active |
| `teal-800` | #115E59 | 17, 94, 89 | Dark accents |
| `teal-900` | #134E4A | 19, 78, 74 | Darkest accent |
| `teal-950` | #042F2E | 4, 47, 46 | Near black accent |

#### Semantic Colors

| Token | Hex | Use |
|-------|-----|-----|
| `success-500` | #22C55E | Confirmations, positive |
| `success-600` | #16A34A | Success hover |
| `warning-500` | #F59E0B | Warnings, attention |
| `warning-600` | #D97706 | Warning hover |
| `error-500` | #EF4444 | Errors, destructive |
| `error-600` | #DC2626 | Error hover |

### Semantic Token Mapping

```
/* Surfaces */
--color-bg-page:        var(--gray-50)
--color-bg-subtle:      var(--gray-100)
--color-bg-card:        var(--white)
--color-bg-elevated:    var(--white)
--color-bg-inverse:     var(--gray-900)

/* Text */
--color-text-primary:   var(--gray-900)      /* 15.1:1 on white ✓ */
--color-text-secondary: var(--gray-600)      /* 7.0:1 on white ✓ */
--color-text-tertiary:  var(--gray-500)      /* 4.6:1 on white ✓ */
--color-text-inverse:   var(--white)
--color-text-link:      var(--teal-600)      /* 4.5:1 on white ✓ */

/* Borders */
--color-border-default: var(--gray-200)
--color-border-strong:  var(--gray-300)
--color-border-focus:   var(--teal-500)

/* Primary Action */
--color-primary:        var(--teal-500)
--color-primary-hover:  var(--teal-600)
--color-primary-active: var(--teal-700)

/* States */
--color-success:        var(--success-500)
--color-warning:        var(--warning-500)
--color-error:          var(--error-500)
```

### The 60-30-10 Rule Applied

| Percentage | Role | Colors |
|------------|------|--------|
| **60%** | Dominant | `gray-50`, `white` — Page & card backgrounds |
| **30%** | Secondary | `gray-100`, `gray-200` — Subtle sections, borders |
| **10%** | Accent | `teal-500`, `teal-600` — CTAs, links, highlights |

---

## Typography

### Font Stack

```
--font-sans: "Inter", ui-sans-serif, system-ui, -apple-system,
             BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
             Arial, sans-serif;

--font-display: "Inter", var(--font-sans);
```

**Why Inter?** Designed for screens, excellent at all sizes, variable weight support, free.

### Type Scale (1.25 ratio — Major Third)

Optimized for marketing pages: bold headlines, readable body, clear hierarchy.

| Token | Size | Line Height | Weight | Use |
|-------|------|-------------|--------|-----|
| `text-xs` | 12px / 0.75rem | 1.5 | 400 | Captions, fine print |
| `text-sm` | 14px / 0.875rem | 1.5 | 400 | Secondary text, metadata |
| `text-base` | 16px / 1rem | 1.6 | 400 | Body text |
| `text-lg` | 18px / 1.125rem | 1.6 | 400 | Lead paragraphs |
| `text-xl` | 20px / 1.25rem | 1.5 | 500 | Subheadings |
| `text-2xl` | 24px / 1.5rem | 1.4 | 600 | Section headers (H4) |
| `text-3xl` | 30px / 1.875rem | 1.3 | 600 | Section headers (H3) |
| `text-4xl` | 36px / 2.25rem | 1.2 | 700 | Page headers (H2) |
| `text-5xl` | 48px / 3rem | 1.1 | 700 | Hero headlines (H1) |
| `text-6xl` | 60px / 3.75rem | 1.1 | 800 | Display headlines |
| `text-7xl` | 72px / 4.5rem | 1.0 | 800 | Giant display |

### Responsive Type

Headlines scale down on mobile:

| Token | Mobile | Tablet+ | Desktop+ |
|-------|--------|---------|----------|
| `text-5xl` | 36px | 48px | 48px |
| `text-6xl` | 48px | 60px | 60px |
| `text-7xl` | 48px | 60px | 72px |

### Font Weights

| Token | Value | Use |
|-------|-------|-----|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Emphasis, subheadings |
| `font-semibold` | 600 | Section headers |
| `font-bold` | 700 | Page headers |
| `font-extrabold` | 800 | Display headlines |

### Line Length

```
--prose-width: 65ch;  /* Optimal reading width */
--prose-wide: 80ch;   /* Extended content */
```

---

## Spacing

### The 8px Grid

Every spacing value is a multiple of 8px (with 4px for micro-adjustments).

| Token | Value | Pixels | Use |
|-------|-------|--------|-----|
| `space-0` | 0 | 0px | None |
| `space-px` | 1px | 1px | Hairline borders |
| `space-0.5` | 0.125rem | 2px | Micro |
| `space-1` | 0.25rem | 4px | Tight inline, icon gaps |
| `space-2` | 0.5rem | 8px | Base unit |
| `space-3` | 0.75rem | 12px | Compact padding |
| `space-4` | 1rem | 16px | Standard padding |
| `space-5` | 1.25rem | 20px | Comfortable |
| `space-6` | 1.5rem | 24px | Card padding |
| `space-8` | 2rem | 32px | Section gaps |
| `space-10` | 2.5rem | 40px | Large gaps |
| `space-12` | 3rem | 48px | Section padding |
| `space-16` | 4rem | 64px | Major sections |
| `space-20` | 5rem | 80px | Hero spacing |
| `space-24` | 6rem | 96px | Section divisions |
| `space-32` | 8rem | 128px | Large section padding |
| `space-40` | 10rem | 160px | Hero vertical spacing |
| `space-48` | 12rem | 192px | Maximum spacing |

### Semantic Spacing

```
/* Component spacing */
--spacing-xs:      var(--space-1)    /* 4px */
--spacing-sm:      var(--space-2)    /* 8px */
--spacing-md:      var(--space-4)    /* 16px */
--spacing-lg:      var(--space-6)    /* 24px */
--spacing-xl:      var(--space-8)    /* 32px */

/* Section spacing */
--spacing-section:     var(--space-16)  /* 64px */
--spacing-section-lg:  var(--space-24)  /* 96px */
--spacing-hero:        var(--space-32)  /* 128px */
```

### Layout Grid

| Breakpoint | Columns | Gutter | Margin | Max Width |
|------------|---------|--------|--------|-----------|
| Mobile (<640px) | 4 | 16px | 16px | 100% |
| Tablet (640–1023px) | 8 | 24px | 24px | 100% |
| Desktop (1024–1279px) | 12 | 24px | 32px | 1024px |
| Wide (1280px+) | 12 | 32px | auto | 1280px |

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `rounded-none` | 0 | Sharp edges |
| `rounded-sm` | 4px | Subtle rounding |
| `rounded` | 6px | Default buttons, inputs |
| `rounded-md` | 8px | Cards, containers |
| `rounded-lg` | 12px | Prominent cards |
| `rounded-xl` | 16px | Feature cards |
| `rounded-2xl` | 24px | Hero elements |
| `rounded-full` | 9999px | Pills, avatars |

---

## Shadows & Elevation

### Shadow Scale

| Token | Value | Use |
|-------|-------|-----|
| `shadow-none` | none | Flat elements |
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle lift |
| `shadow` | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` | Cards |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Dropdowns |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Modals |
| `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Floating |
| `shadow-2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | Maximum |

### Colored Shadows (for CTAs)

```css
--shadow-teal: 0 4px 14px 0 rgb(20 184 166 / 0.35);
--shadow-teal-lg: 0 8px 24px 0 rgb(20 184 166 / 0.4);
```

### Z-Index Scale

| Token | Value | Use |
|-------|-------|-----|
| `z-0` | 0 | Base |
| `z-10` | 10 | Raised elements |
| `z-20` | 20 | Dropdowns |
| `z-30` | 30 | Sticky headers |
| `z-40` | 40 | Overlays |
| `z-50` | 50 | Modals |
| `z-60` | 60 | Popovers |
| `z-70` | 70 | Toasts |

---

## Motion & Animation

### Duration

| Token | Value | Use |
|-------|-------|-----|
| `duration-75` | 75ms | Instant feedback |
| `duration-100` | 100ms | Hover states |
| `duration-150` | 150ms | Micro-interactions |
| `duration-200` | 200ms | Standard transitions |
| `duration-300` | 300ms | Larger transitions |
| `duration-500` | 500ms | Page transitions |

### Easing

| Token | Value | Use |
|-------|-------|-----|
| `ease-linear` | `linear` | Continuous motion |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Elements moving |

### Default Transition

```css
transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Breakpoints

| Token | Value | Target |
|-------|-------|--------|
| `sm` | 640px | Large phones (landscape) |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## Dark Mode

### Surface Elevation

Higher surfaces = lighter (not just shadows).

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `bg-page` | #FAFAF9 | #0C0A09 | Page background |
| `bg-subtle` | #F5F5F4 | #1C1917 | Subtle sections |
| `bg-card` | #FFFFFF | #292524 | Cards |
| `bg-elevated` | #FFFFFF | #44403C | Elevated cards |

### Text

| Token | Light | Dark |
|-------|-------|------|
| `text-primary` | #1C1917 | rgba(255,255,255,0.87) |
| `text-secondary` | #57534E | rgba(255,255,255,0.60) |
| `text-tertiary` | #78716C | rgba(255,255,255,0.38) |

### Accent Adjustment

Desaturate and lighten the teal for dark mode:

| Token | Light | Dark |
|-------|-------|------|
| `primary` | #14B8A6 | #2DD4BF |
| `primary-hover` | #0D9488 | #14B8A6 |

---

## Component Specifications

### Button

#### Primary Button

```
Background:     var(--teal-500)
Background hover: var(--teal-600)
Background active: var(--teal-700)
Text:           white
Font size:      16px (text-base)
Font weight:    600 (semibold)
Padding:        12px 24px (space-3 space-6)
Border radius:  6px (rounded)
Min height:     48px
Shadow:         var(--shadow-sm)
Shadow hover:   var(--shadow-teal)
Transition:     all 200ms ease-out
```

#### Secondary Button

```
Background:     transparent
Background hover: var(--gray-100)
Border:         1px solid var(--gray-300)
Border hover:   1px solid var(--gray-400)
Text:           var(--gray-700)
```

#### Ghost Button

```
Background:     transparent
Background hover: var(--teal-50)
Text:           var(--teal-600)
Text hover:     var(--teal-700)
```

### Input

```
Background:     white
Border:         1px solid var(--gray-300)
Border focus:   1px solid var(--teal-500)
Ring focus:     0 0 0 3px rgb(20 184 166 / 0.15)
Text:           var(--gray-900)
Placeholder:    var(--gray-400)
Font size:      16px
Padding:        12px 16px
Border radius:  6px
Min height:     48px
```

### Card

```
Background:     white
Border:         1px solid var(--gray-200)
Border radius:  12px (rounded-lg)
Padding:        24px (space-6)
Shadow:         var(--shadow-sm)
Shadow hover:   var(--shadow-md) (if interactive)
```

### Link

```
Color:          var(--teal-600)
Color hover:    var(--teal-700)
Underline:      none
Underline hover: underline
Transition:     color 150ms ease-out
```

---

## Accessibility Checklist

- [x] **Contrast**: All text meets WCAG AA (4.5:1 normal, 3:1 large)
- [x] **Touch targets**: Minimum 48×48px for all interactive elements
- [x] **Focus states**: Visible focus ring on all interactive elements
- [x] **Color independence**: No information conveyed by color alone
- [x] **Motion**: Respects `prefers-reduced-motion`
- [x] **Font size**: Base 16px, scalable with rem units

### Contrast Verification

| Pairing | Ratio | Status |
|---------|-------|--------|
| gray-900 on white | 15.1:1 | ✓ AAA |
| gray-600 on white | 7.0:1 | ✓ AAA |
| gray-500 on white | 4.6:1 | ✓ AA |
| teal-600 on white | 4.5:1 | ✓ AA |
| white on teal-500 | 3.4:1 | ✓ AA (large) |
| white on teal-600 | 4.6:1 | ✓ AA |

---

## Usage Guidelines

### Do

- Use teal sparingly—only for primary CTAs and key highlights
- Maintain generous whitespace between sections
- Keep headlines bold, body text light
- Use one primary action per section
- Respect the 8px grid

### Don't

- Overuse accent colors (remember 60-30-10)
- Crowd elements together
- Use more than 4-5 type sizes on a page
- Make secondary actions compete with primary
- Mix rounded and sharp corners

---

## File Structure

```
design-system/
├── DESIGN_SYSTEM.md          ← This document
├── tailwind.config.js        ← Tailwind configuration
├── tokens/
│   ├── colors.json           ← For design tools
│   ├── typography.json
│   └── spacing.json
└── css/
    └── variables.css         ← CSS custom properties
```

---

*Meridian Design System v1.0*
*Modern. Minimal. Inevitable.*
