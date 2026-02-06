# Elevation & Shadows Deep Dive

## Table of Contents
1. [Elevation System](#elevation-system)
2. [Shadow Tokens](#shadow-tokens)
3. [Z-Index Scale](#z-index-scale)
4. [Dark Mode Elevation](#dark-mode-elevation)
5. [Implementation Patterns](#implementation-patterns)

---

## Elevation System

### Philosophy

Elevation creates visual hierarchy through perceived depth. Higher elevation = more important/temporary.

### Elevation Scale

| Level | dp | Use Case |
|-------|-----|----------|
| **0** | 0 | Base surfaces, backgrounds |
| **1** | 1–2 | Cards, list items, subtle raise |
| **2** | 3–4 | Buttons (raised), dropdowns |
| **3** | 6–8 | App bars, sticky headers |
| **4** | 12–16 | Modals, dialogs, drawers |
| **5** | 24+ | Toasts, tooltips, popovers |

### Elevation Roles

```css
/* Semantic elevation tokens */
--elevation-surface:    var(--shadow-none);  /* Level 0 */
--elevation-raised:     var(--shadow-sm);    /* Level 1 */
--elevation-overlay:    var(--shadow-md);    /* Level 2 */
--elevation-sticky:     var(--shadow-lg);    /* Level 3 */
--elevation-modal:      var(--shadow-xl);    /* Level 4 */
--elevation-popover:    var(--shadow-2xl);   /* Level 5 */
```

---

## Shadow Tokens

### Complete Shadow Scale

```css
:root {
  /* None */
  --shadow-none: none;

  /* Extra Small - Subtle depth hint */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  /* Small - Cards, raised surfaces */
  --shadow-sm:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);

  /* Medium - Dropdowns, popovers */
  --shadow-md:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);

  /* Large - Sticky headers, floating elements */
  --shadow-lg:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  /* Extra Large - Modals, dialogs */
  --shadow-xl:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

  /* 2XL - Maximum elevation */
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  /* Inner shadow - Inset effects */
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
}
```

### Colored Shadows

For brand-colored or tinted shadows:

```css
/* Primary color shadow */
--shadow-primary:
  0 4px 14px 0 rgb(59 130 246 / 0.25);

/* Error color shadow */
--shadow-error:
  0 4px 14px 0 rgb(239 68 68 / 0.25);

/* Success color shadow */
--shadow-success:
  0 4px 14px 0 rgb(34 197 94 / 0.25);
```

### Shadow Anatomy

```
box-shadow: offset-x offset-y blur spread color;

Example: 0 4px 6px -1px rgb(0 0 0 / 0.1)
         │ │   │   │    └── Color with opacity
         │ │   │   └── Spread (negative = smaller)
         │ │   └── Blur radius
         │ └── Y offset (down)
         └── X offset (usually 0)
```

---

## Z-Index Scale

### Token Definition

```css
:root {
  --z-behind:    -1;    /* Behind everything */
  --z-base:       0;    /* Default layer */
  --z-raised:    10;    /* Raised elements */
  --z-dropdown:  20;    /* Dropdowns, selects */
  --z-sticky:    30;    /* Sticky headers */
  --z-overlay:   40;    /* Overlays, backdrops */
  --z-modal:     50;    /* Modal dialogs */
  --z-popover:   60;    /* Popovers, tooltips */
  --z-toast:     70;    /* Toast notifications */
  --z-tooltip:   80;    /* Tooltips (highest) */
  --z-max:      9999;   /* Reserved for dev tools */
}
```

### Component Z-Index Mapping

| Component | Z-Index | Token |
|-----------|---------|-------|
| Background elements | -1 | `--z-behind` |
| Page content | 0 | `--z-base` |
| Cards, raised surfaces | 10 | `--z-raised` |
| Dropdown menus | 20 | `--z-dropdown` |
| Sticky header | 30 | `--z-sticky` |
| Modal backdrop | 40 | `--z-overlay` |
| Modal dialog | 50 | `--z-modal` |
| Popovers | 60 | `--z-popover` |
| Toast notifications | 70 | `--z-toast` |
| Tooltips | 80 | `--z-tooltip` |

### Stacking Context Rules

1. **Create new context** with `isolation: isolate` or `z-index` + position
2. **Keep it flat** — Avoid deeply nested z-index
3. **Use tokens** — Never hardcode arbitrary z-index values
4. **Document exceptions** — If you need a custom z-index, document why

---

## Dark Mode Elevation

### The Lightness Principle

In dark mode, elevation is shown through **surface lightness**, not just shadows.

```
Light Mode:  Shadow intensity increases with elevation
Dark Mode:   Surface lightness increases with elevation
```

### Dark Mode Surface Scale

```css
/* Dark mode surfaces (lighter = higher) */
--surface-0: #121212;  /* dp 0 - Base */
--surface-1: #1E1E1E;  /* dp 1 */
--surface-2: #232323;  /* dp 2 */
--surface-3: #252525;  /* dp 3 */
--surface-4: #272727;  /* dp 4 */
--surface-6: #2C2C2C;  /* dp 6 */
--surface-8: #2E2E2E;  /* dp 8 */
--surface-12: #333333; /* dp 12 */
--surface-16: #363636; /* dp 16 */
--surface-24: #383838; /* dp 24 */
```

### Overlay Opacity (Material Design)

| Elevation | Overlay Opacity |
|-----------|-----------------|
| dp 0 | 0% |
| dp 1 | 5% |
| dp 2 | 7% |
| dp 3 | 8% |
| dp 4 | 9% |
| dp 6 | 11% |
| dp 8 | 12% |
| dp 12 | 14% |
| dp 16 | 15% |
| dp 24 | 16% |

### Dark Mode Shadows

Shadows are still used in dark mode, but more subtly:

```css
/* Dark mode shadows - reduced opacity */
--shadow-sm-dark:
  0 1px 3px 0 rgb(0 0 0 / 0.3),
  0 1px 2px -1px rgb(0 0 0 / 0.3);

--shadow-md-dark:
  0 4px 6px -1px rgb(0 0 0 / 0.4),
  0 2px 4px -2px rgb(0 0 0 / 0.3);

--shadow-lg-dark:
  0 10px 15px -3px rgb(0 0 0 / 0.5),
  0 4px 6px -4px rgb(0 0 0 / 0.4);
```

---

## Implementation Patterns

### Card Elevation

```css
.card {
  background: var(--surface-card);
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-lg);
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

/* Dark mode */
[data-theme="dark"] .card {
  background: var(--surface-1);
  box-shadow: var(--shadow-sm-dark);
}
```

### Button Elevation

```css
.button-raised {
  box-shadow: var(--shadow-sm);
  transition:
    box-shadow var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.button-raised:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.button-raised:active {
  box-shadow: var(--shadow-xs);
  transform: translateY(0);
}
```

### Modal Elevation

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 0.5);
  z-index: var(--z-overlay);
}

.modal {
  position: fixed;
  z-index: var(--z-modal);
  background: var(--surface-modal);
  box-shadow: var(--shadow-xl);
  border-radius: var(--radius-xl);
}

/* Dark mode */
[data-theme="dark"] .modal {
  background: var(--surface-3);
  box-shadow: var(--shadow-lg-dark);
}
```

### Sticky Header

```css
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: var(--surface-header);
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.header[data-scrolled="true"] {
  box-shadow: var(--shadow-md);
}
```

### Dropdown/Popover

```css
.dropdown {
  position: absolute;
  z-index: var(--z-dropdown);
  background: var(--surface-dropdown);
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

/* Dark mode - add subtle border */
[data-theme="dark"] .dropdown {
  background: var(--surface-2);
  box-shadow: var(--shadow-md-dark);
  border-color: var(--color-border-dark);
}
```

### Toast Notification

```css
.toast {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: var(--z-toast);
  background: var(--surface-toast);
  box-shadow: var(--shadow-xl);
  border-radius: var(--radius-lg);
}
```
