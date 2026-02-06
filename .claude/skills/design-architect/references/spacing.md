# Spacing & Layout Deep Dive

## Table of Contents
1. [The 8px Grid System](#the-8px-grid-system)
2. [Spacing Scale](#spacing-scale)
3. [Layout Grids](#layout-grids)
4. [Spacing Principles](#spacing-principles)
5. [Component Spacing Patterns](#component-spacing-patterns)

---

## The 8px Grid System

### Why 8px?

- **Divisibility**: 8 ÷ 2 = 4, 8 ÷ 4 = 2 (clean sub-divisions)
- **Scalability**: Works across all device densities (1x, 2x, 3x)
- **Screen compatibility**: Most screen dimensions are divisible by 8
- **Decision reduction**: Eliminates arbitrary values

### The 4px Exception

Use 4px only for:
- Icon-to-text spacing
- Tight inline elements
- Subtle adjustments within components
- Small component internal padding

**Never use** 4px for:
- Margins between components
- Section spacing
- Layout gaps

---

## Spacing Scale

### Token Definition

```css
:root {
  --space-0:    0px;
  --space-0.5:  2px;   /* Rare, micro-adjustments only */
  --space-1:    4px;   /* Half-step */
  --space-2:    8px;   /* Base unit */
  --space-3:    12px;
  --space-4:    16px;
  --space-5:    20px;
  --space-6:    24px;
  --space-7:    28px;
  --space-8:    32px;
  --space-9:    36px;
  --space-10:   40px;
  --space-12:   48px;
  --space-14:   56px;
  --space-16:   64px;
  --space-20:   80px;
  --space-24:   96px;
  --space-28:   112px;
  --space-32:   128px;
  --space-36:   144px;
  --space-40:   160px;
  --space-44:   176px;
  --space-48:   192px;
  --space-52:   208px;
  --space-56:   224px;
  --space-60:   240px;
  --space-64:   256px;
}
```

### Semantic Spacing Tokens

```css
/* Component spacing */
--spacing-xs:   var(--space-1);   /* 4px */
--spacing-sm:   var(--space-2);   /* 8px */
--spacing-md:   var(--space-4);   /* 16px */
--spacing-lg:   var(--space-6);   /* 24px */
--spacing-xl:   var(--space-8);   /* 32px */
--spacing-2xl:  var(--space-12);  /* 48px */
--spacing-3xl:  var(--space-16);  /* 64px */

/* Layout spacing */
--spacing-section:     var(--space-16);  /* 64px */
--spacing-section-lg:  var(--space-24);  /* 96px */
--spacing-page:        var(--space-32);  /* 128px */
```

---

## Layout Grids

### Responsive Grid System

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| **Mobile** (<640px) | 4 | 16px | 16px |
| **Tablet** (640–1023px) | 8 | 24px | 24px |
| **Desktop** (1024–1279px) | 12 | 24px | 32px |
| **Wide** (1280px+) | 12 | 32px | auto |

### CSS Grid Implementation

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0 16px;
  max-width: 1280px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .container {
    grid-template-columns: repeat(8, 1fr);
    gap: 24px;
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
    padding: 0 32px;
  }
}

@media (min-width: 1280px) {
  .container {
    gap: 32px;
    padding: 0;
  }
}
```

### Common Column Spans

| Layout | Columns | Use Case |
|--------|---------|----------|
| Full width | 12 | Hero sections, full-bleed images |
| Wide content | 10 | Article body with margins |
| Standard content | 8 | Main content area |
| Narrow content | 6 | Focused reading, forms |
| Sidebar | 3–4 | Navigation, filters |
| Card in grid | 3–4 | Product cards, articles |

---

## Spacing Principles

### 1. Internal ≤ External

Component padding should never exceed margin between components.

```
✅ Correct:
┌──────────────────┐
│ 16px padding     │  ← Internal: 16px
└──────────────────┘
        24px gap      ← External: 24px (larger)
┌──────────────────┐
│ 16px padding     │
└──────────────────┘

❌ Wrong:
┌──────────────────┐
│ 32px padding     │  ← Internal: 32px
└──────────────────┘
        16px gap      ← External: 16px (smaller!)
┌──────────────────┐
│ 32px padding     │
└──────────────────┘
```

### 2. Proximity Creates Relationship

Elements that are related should be closer together than unrelated elements.

```
Form Field           ← Label and input are related
┌────────────────┐
│ Label          │  4px gap (tight)
│ ┌────────────┐ │
│ │ Input      │ │
│ └────────────┘ │
└────────────────┘
        24px gap     ← Separate from next field
┌────────────────┐
│ Label          │
│ ┌────────────┐ │
│ │ Input      │ │
│ └────────────┘ │
└────────────────┘
```

### 3. Consistent Rhythm

Use the same spacing values throughout related sections.

```css
/* All cards in a grid use same gap */
.card-grid {
  gap: var(--space-6); /* 24px everywhere */
}

/* All sections use same vertical rhythm */
.section {
  padding: var(--space-16) 0; /* 64px top and bottom */
}
```

### 4. Progressive Density

More important content = more breathing room.

| Content Type | Spacing |
|--------------|---------|
| Hero/Primary | Generous (64–128px) |
| Secondary sections | Medium (32–48px) |
| Dense UI (dashboards) | Tight (16–24px) |
| Inline elements | Minimal (4–8px) |

---

## Component Spacing Patterns

### Button

```css
.button {
  padding: var(--space-2) var(--space-4); /* 8px 16px */
  gap: var(--space-2); /* 8px between icon and text */
}

.button-sm {
  padding: var(--space-1) var(--space-3); /* 4px 12px */
}

.button-lg {
  padding: var(--space-3) var(--space-6); /* 12px 24px */
}
```

### Card

```css
.card {
  padding: var(--space-6); /* 24px */
}

.card-header {
  margin-bottom: var(--space-4); /* 16px */
}

.card-body > * + * {
  margin-top: var(--space-3); /* 12px between elements */
}

.card-footer {
  margin-top: var(--space-6); /* 24px */
  padding-top: var(--space-4); /* 16px with border */
}
```

### Form

```css
.form-group {
  margin-bottom: var(--space-6); /* 24px between fields */
}

.form-label {
  margin-bottom: var(--space-1); /* 4px above input */
}

.form-helper {
  margin-top: var(--space-1); /* 4px below input */
}

.form-actions {
  margin-top: var(--space-8); /* 32px before submit */
  gap: var(--space-3); /* 12px between buttons */
}
```

### List

```css
.list-item {
  padding: var(--space-3) var(--space-4); /* 12px 16px */
}

.list-item + .list-item {
  border-top: 1px solid var(--color-border);
}

/* Or with gap */
.list {
  gap: var(--space-2); /* 8px between items */
}
```

### Modal

```css
.modal {
  padding: var(--space-6); /* 24px */
  max-width: 480px;
}

.modal-header {
  margin-bottom: var(--space-4); /* 16px */
}

.modal-body {
  margin-bottom: var(--space-6); /* 24px */
}

.modal-footer {
  display: flex;
  gap: var(--space-3); /* 12px between buttons */
  justify-content: flex-end;
}
```

### Navigation

```css
.nav {
  padding: 0 var(--space-4); /* 16px horizontal */
  height: 64px; /* Fixed height, multiple of 8 */
}

.nav-item {
  padding: var(--space-2) var(--space-4); /* 8px 16px */
}

.nav-item + .nav-item {
  margin-left: var(--space-1); /* 4px gap */
}
```
