# Dark Mode Deep Dive

## Table of Contents
1. [Core Principles](#core-principles)
2. [Color Adjustments](#color-adjustments)
3. [Token Strategy](#token-strategy)
4. [Implementation](#implementation)
5. [Testing & Validation](#testing--validation)

---

## Core Principles

### The Golden Rules

1. **Never use pure black (#000000)**
   - Causes eye strain and "halation" effect
   - Use #121212 or warmer dark grays

2. **Never use pure white text (#FFFFFF)**
   - Too harsh on dark backgrounds
   - Use #E0E0E0 or rgba(255,255,255,0.87)

3. **Desaturate colors**
   - Saturated colors vibrate on dark backgrounds
   - Reduce saturation by 10-30%

4. **Elevate with lightness**
   - Higher elements = lighter surfaces
   - Shadows alone don't work in dark mode

5. **Retest all contrast**
   - Light mode ratios don't transfer
   - Every pairing must be rechecked

6. **Respect user preference**
   - `prefers-color-scheme` media query
   - Manual toggle option

### Why Dark Mode?

| Benefit | Explanation |
|---------|-------------|
| **Reduced eye strain** | Less blue light in low-light environments |
| **Battery saving** | OLED screens turn off black pixels |
| **Accessibility** | Some users with light sensitivity prefer dark |
| **Aesthetic** | Modern, premium feel |
| **Focus** | Content stands out against dark background |

---

## Color Adjustments

### Background Surfaces

```css
/* Light mode */
--surface-0: #FFFFFF;
--surface-1: #F9FAFB;
--surface-2: #F3F4F6;
--surface-3: #E5E7EB;

/* Dark mode - elevation increases lightness */
--surface-0: #121212;  /* Base (dp 0) */
--surface-1: #1E1E1E;  /* Raised (dp 1) */
--surface-2: #232323;  /* Overlay (dp 2) */
--surface-3: #282828;  /* Modal (dp 4) */
--surface-4: #2C2C2C;  /* High elevation (dp 6) */
--surface-5: #323232;  /* Maximum (dp 12+) */
```

### Text Colors

```css
/* Light mode */
--text-primary:   #111827;
--text-secondary: #6B7280;
--text-tertiary:  #9CA3AF;
--text-disabled:  #D1D5DB;

/* Dark mode - use opacity for consistency */
--text-primary:   rgba(255, 255, 255, 0.87);  /* High emphasis */
--text-secondary: rgba(255, 255, 255, 0.60);  /* Medium emphasis */
--text-tertiary:  rgba(255, 255, 255, 0.38);  /* Disabled */
--text-disabled:  rgba(255, 255, 255, 0.38);
```

### Brand/Accent Colors

```css
/* Light mode - original brand colors */
--color-primary:   hsl(220, 90%, 50%);  /* Saturated blue */
--color-success:   hsl(142, 76%, 36%);  /* Saturated green */
--color-warning:   hsl(38, 92%, 50%);   /* Saturated amber */
--color-error:     hsl(0, 84%, 60%);    /* Saturated red */

/* Dark mode - desaturated, lighter */
--color-primary:   hsl(220, 70%, 65%);  /* -20% sat, +15% light */
--color-success:   hsl(142, 60%, 50%);  /* -16% sat, +14% light */
--color-warning:   hsl(38, 75%, 60%);   /* -17% sat, +10% light */
--color-error:     hsl(0, 70%, 68%);    /* -14% sat, +8% light */
```

### Border Colors

```css
/* Light mode */
--border-default: #E5E7EB;
--border-strong:  #D1D5DB;

/* Dark mode */
--border-default: rgba(255, 255, 255, 0.12);
--border-strong:  rgba(255, 255, 255, 0.24);
```

---

## Token Strategy

### Semantic Token Mapping

```css
:root {
  /* Define base tokens */
  --white: #FFFFFF;
  --black: #000000;
  --gray-50: #F9FAFB;
  --gray-900: #111827;
  /* ... full scale ... */

  /* Semantic mappings - light mode */
  --color-bg-page: var(--white);
  --color-bg-card: var(--gray-50);
  --color-text-primary: var(--gray-900);
  --color-text-secondary: var(--gray-600);
  --color-border: var(--gray-200);
}

[data-theme="dark"] {
  /* Semantic mappings - dark mode */
  --color-bg-page: #121212;
  --color-bg-card: #1E1E1E;
  --color-text-primary: rgba(255, 255, 255, 0.87);
  --color-text-secondary: rgba(255, 255, 255, 0.60);
  --color-border: rgba(255, 255, 255, 0.12);
}
```

### Component-Level Tokens

```css
/* Button tokens */
:root {
  --button-primary-bg: var(--color-primary);
  --button-primary-text: var(--white);
  --button-primary-hover: var(--color-primary-dark);
}

[data-theme="dark"] {
  --button-primary-bg: var(--color-primary);
  --button-primary-text: var(--gray-900);  /* Dark text on light button */
  --button-primary-hover: var(--color-primary-light);
}
```

---

## Implementation

### CSS Custom Properties Approach

```css
/* Define all tokens in :root */
:root {
  --color-bg: #FFFFFF;
  --color-text: #111827;
  /* ... */
}

/* Override for dark mode */
[data-theme="dark"] {
  --color-bg: #121212;
  --color-text: rgba(255, 255, 255, 0.87);
  /* ... */
}

/* Optional: System preference */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-bg: #121212;
    --color-text: rgba(255, 255, 255, 0.87);
  }
}
```

### JavaScript Toggle

```javascript
// Get system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initialize theme
const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', initialTheme);

// Toggle function
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Listen for system changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute(
        'data-theme',
        e.matches ? 'dark' : 'light'
      );
    }
  });
```

### Preventing Flash (FOUC)

```html
<head>
  <script>
    // Inline script to set theme before render
    (function() {
      const saved = localStorage.getItem('theme');
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = saved || (prefers ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>
</head>
```

### Images in Dark Mode

```css
/* Invert logos/icons */
[data-theme="dark"] .logo-invertible {
  filter: invert(1);
}

/* Reduce image brightness */
[data-theme="dark"] img:not(.no-dim) {
  filter: brightness(0.9);
}

/* Picture element for different images */
<picture>
  <source srcset="logo-dark.svg" media="(prefers-color-scheme: dark)">
  <img src="logo-light.svg" alt="Logo">
</picture>
```

---

## Testing & Validation

### Contrast Checklist

| Element | Light Mode | Dark Mode | Ratio Needed |
|---------|------------|-----------|--------------|
| Body text on bg | ✅ Test | ✅ Test | 4.5:1 |
| Heading on bg | ✅ Test | ✅ Test | 4.5:1 |
| Link on bg | ✅ Test | ✅ Test | 4.5:1 |
| Button text | ✅ Test | ✅ Test | 4.5:1 |
| Placeholder text | ✅ Test | ✅ Test | 4.5:1 |
| Icon on bg | ✅ Test | ✅ Test | 3:1 |
| Border on bg | ✅ Test | ✅ Test | 3:1 |
| Focus ring | ✅ Test | ✅ Test | 3:1 |

### Common Dark Mode Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Text too bright | Pure white (#FFF) | Use rgba(255,255,255,0.87) |
| Colors vibrate | High saturation | Desaturate by 20-30% |
| Cards invisible | Same as background | Use lighter surface |
| Shadows invisible | Dark on dark | Increase opacity or use border |
| Images too bright | No adjustment | Reduce brightness filter |
| Focus ring invisible | Low contrast | Use brighter focus color |

### Testing Tools

1. **Browser DevTools**: Emulate prefers-color-scheme
2. **Contrast Checkers**: WebAIM, Colour Contrast Analyser
3. **Color Blindness**: Sim Daltonism, Chromatic Vision Simulator
4. **Real Devices**: Test on actual screens with varying brightness

### Testing Scenarios

- [ ] Toggle between light and dark mode
- [ ] Respect system preference on first visit
- [ ] Persist user's manual choice
- [ ] No flash of wrong theme on page load
- [ ] All contrast ratios meet WCAG AA
- [ ] Images and logos look correct
- [ ] Shadows and elevation are visible
- [ ] Form fields are distinguishable
- [ ] Focus states are visible
- [ ] Error/success states are visible
