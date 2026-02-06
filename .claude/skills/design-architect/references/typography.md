# Typography Deep Dive

## Table of Contents
1. [Type Scale Systems](#type-scale-systems)
2. [Font Pairing](#font-pairing)
3. [Responsive Typography](#responsive-typography)
4. [Line Height & Spacing](#line-height--spacing)
5. [Readability Guidelines](#readability-guidelines)

---

## Type Scale Systems

### Mathematical Ratios

| Ratio | Name | Multiplier | Best For |
|-------|------|------------|----------|
| 1.067 | Minor Second | ×1.067 | Tight, compact UIs |
| 1.125 | Major Second | ×1.125 | Body-heavy content |
| 1.200 | Minor Third | ×1.200 | General purpose |
| 1.250 | Major Third | ×1.250 | **Recommended default** |
| 1.333 | Perfect Fourth | ×1.333 | Marketing, headlines |
| 1.414 | Augmented Fourth | ×1.414 | Bold statements |
| 1.500 | Perfect Fifth | ×1.500 | Dramatic hierarchy |
| 1.618 | Golden Ratio | ×1.618 | High-impact landing pages |

### Example Scale (1.25 ratio, 16px base)

```
--text-xs:   10px   (16 ÷ 1.25 ÷ 1.25)
--text-sm:   13px   (16 ÷ 1.25)
--text-base: 16px   (base)
--text-lg:   20px   (16 × 1.25)
--text-xl:   25px   (16 × 1.25²)
--text-2xl:  31px   (16 × 1.25³)
--text-3xl:  39px   (16 × 1.25⁴)
--text-4xl:  49px   (16 × 1.25⁵)
--text-5xl:  61px   (16 × 1.25⁶)
```

### Semantic Token Mapping

```css
/* Map scale to purpose */
--font-size-caption:    var(--text-xs);
--font-size-body-small: var(--text-sm);
--font-size-body:       var(--text-base);
--font-size-body-large: var(--text-lg);
--font-size-heading-6:  var(--text-lg);
--font-size-heading-5:  var(--text-xl);
--font-size-heading-4:  var(--text-2xl);
--font-size-heading-3:  var(--text-3xl);
--font-size-heading-2:  var(--text-4xl);
--font-size-heading-1:  var(--text-5xl);
```

---

## Font Pairing

### Classic Combinations

| Headings | Body | Personality |
|----------|------|-------------|
| **Playfair Display** | Source Sans Pro | Editorial, elegant |
| **Montserrat** | Open Sans | Modern, clean |
| **Roboto Slab** | Roboto | Technical, trustworthy |
| **Merriweather** | Lato | Warm, readable |
| **Poppins** | Inter | Contemporary, friendly |
| **Space Grotesk** | Work Sans | Tech-forward, geometric |

### Pairing Rules

1. **Contrast in structure**: Pair serif with sans-serif
2. **Harmony in x-height**: Similar x-heights blend better
3. **Complementary weights**: If heading is light, body can be regular
4. **Same designer/family**: Often share proportions (e.g., Freight Sans + Freight Text)
5. **Maximum 2 families**: Add a third only for code/monospace

### Safe System Font Stacks

```css
/* Sans-serif (modern) */
--font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* Serif (editorial) */
--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;

/* Monospace (code) */
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  "Liberation Mono", "Courier New", monospace;
```

---

## Responsive Typography

### Fluid Type Scale

```css
/* Clamp: min, preferred, max */
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-lg:   clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
--text-xl:   clamp(1.25rem, 1rem + 1.5vw, 2rem);
--text-2xl:  clamp(1.5rem, 1rem + 2.5vw, 3rem);
--text-3xl:  clamp(2rem, 1rem + 4vw, 4rem);
```

### Breakpoint-Based Scaling

```css
/* Mobile first */
:root {
  --text-base: 16px;
  --text-h1: 32px;
}

/* Tablet */
@media (min-width: 768px) {
  :root {
    --text-base: 17px;
    --text-h1: 40px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  :root {
    --text-base: 18px;
    --text-h1: 48px;
  }
}
```

---

## Line Height & Spacing

### Line Height by Size

| Text Size | Line Height | Ratio |
|-----------|-------------|-------|
| 12–14px | 18–20px | 1.4–1.5 |
| 16–18px | 24–28px | 1.5–1.6 |
| 20–24px | 28–32px | 1.4–1.5 |
| 28–36px | 32–40px | 1.15–1.25 |
| 40px+ | 44–52px | 1.1–1.2 |

**Rule**: Larger text needs tighter line height.

### Paragraph Spacing

```css
/* Space between paragraphs = line-height × 0.5–1.0 */
p + p {
  margin-top: 1em; /* Tied to font-size for proportional spacing */
}

/* Headings: more space above, less below */
h2 {
  margin-top: 2em;
  margin-bottom: 0.5em;
}
```

### Letter Spacing

| Context | Adjustment |
|---------|------------|
| **Uppercase text** | +0.05–0.1em (wider) |
| **Large headings** | -0.01–0.02em (tighter) |
| **Small text** | +0.01–0.02em (wider) |
| **Body text** | 0 (normal) |

```css
.uppercase {
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.display-heading {
  letter-spacing: -0.02em;
}
```

---

## Readability Guidelines

### Optimal Line Length

| Context | Characters | Width |
|---------|------------|-------|
| **Optimal** | 50–75 | ~65ch |
| **Acceptable** | 45–90 | 45–90ch |
| **Minimum** | 30 | 30ch |
| **Maximum** | 100 | 100ch |

```css
.prose {
  max-width: 65ch; /* Character-based width */
}
```

### Text Alignment

| Alignment | Use Case |
|-----------|----------|
| **Left** | Body text, default (best for readability) |
| **Center** | Headlines, short text, cards |
| **Right** | Numbers in tables, RTL languages |
| **Justify** | Rarely—causes uneven spacing |

**Never justify on screens**: Creates "rivers" of whitespace.

### Hierarchy Signals

Use **maximum 4 levels** of visual distinction:

1. **Size** — Primary differentiator
2. **Weight** — Secondary emphasis
3. **Color** — Tertiary (semantic meaning)
4. **Style** — Quaternary (italic for quotes, captions)

**Anti-pattern**: Using all four simultaneously creates visual noise.

### Accessibility Requirements

- **Minimum body size**: 16px (browser default)
- **Contrast ratio**: 4.5:1 for normal text, 3:1 for large text
- **Scalability**: Text must be resizable to 200% without loss
- **Line spacing**: Adjustable to at least 1.5× font size
- **Paragraph spacing**: At least 2× font size
- **Letter spacing**: Adjustable to at least 0.12× font size
