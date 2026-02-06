# Motion & Animation Deep Dive

## Table of Contents
1. [Timing & Duration](#timing--duration)
2. [Easing Functions](#easing-functions)
3. [Animation Patterns](#animation-patterns)
4. [Micro-interactions](#micro-interactions)
5. [Accessibility](#accessibility)

---

## Timing & Duration

### Duration Scale

| Token | Duration | Use Case |
|-------|----------|----------|
| `--duration-instant` | 0ms | Immediate state changes |
| `--duration-fast` | 100ms | Micro-feedback (hover, focus) |
| `--duration-normal` | 200ms | Standard transitions |
| `--duration-slow` | 300ms | Larger transitions |
| `--duration-slower` | 400ms | Complex animations |
| `--duration-slowest` | 500ms | Full-page transitions |

### Context-Based Duration

| Context | Duration | Reasoning |
|---------|----------|-----------|
| **Hover states** | 100–150ms | Quick feedback, reversible |
| **Focus rings** | 0–100ms | Instant accessibility |
| **Button press** | 100–200ms | Responsive feel |
| **Dropdowns** | 150–250ms | Content reveal |
| **Tooltips** | 200–300ms | Attention without jarring |
| **Modals** | 200–300ms | Entrance/exit |
| **Page transitions** | 300–500ms | Larger context shift |
| **Loading spinners** | 1000–2000ms | Full rotation cycle |

### The 16ms Rule

Human perception threshold: ~16ms (60fps)

- **<16ms**: Perceived as instant
- **16–100ms**: Perceived as fast/reactive
- **100–300ms**: Perceived as smooth
- **300–1000ms**: Perceived as deliberate
- **>1000ms**: Perceived as slow/broken

**Target**: All micro-interactions should complete within 300ms.

---

## Easing Functions

### CSS Cubic Bezier

```css
:root {
  /* Standard easing */
  --ease-linear:    cubic-bezier(0, 0, 1, 1);
  --ease-in:        cubic-bezier(0.4, 0, 1, 1);
  --ease-out:       cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);

  /* Expressive easing */
  --ease-bounce:    cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic:   cubic-bezier(0.68, -0.6, 0.32, 1.6);

  /* Precise easing (Material Design 3) */
  --ease-emphasized:         cubic-bezier(0.2, 0, 0, 1);
  --ease-emphasized-decel:   cubic-bezier(0.05, 0.7, 0.1, 1);
  --ease-emphasized-accel:   cubic-bezier(0.3, 0, 0.8, 0.15);
  --ease-standard:           cubic-bezier(0.2, 0, 0, 1);
  --ease-standard-decel:     cubic-bezier(0, 0, 0, 1);
  --ease-standard-accel:     cubic-bezier(0.3, 0, 1, 1);
}
```

### When to Use Each Easing

| Easing | Use Case | Example |
|--------|----------|---------|
| `ease-out` | **Entering** elements | Modal appearing, dropdown opening |
| `ease-in` | **Exiting** elements | Modal closing, element removing |
| `ease-in-out` | **Moving** elements | Sliding panels, repositioning |
| `linear` | **Continuous** motion | Loading spinners, progress bars |
| `ease-bounce` | **Playful** interactions | Success animations, celebrations |

### The Golden Rule

> Elements **arrive** with `ease-out` (decelerating)
> Elements **leave** with `ease-in` (accelerating)
> Elements **move** with `ease-in-out` (smooth arc)

---

## Animation Patterns

### Fade

```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

/* Fade out */
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

### Slide

```css
/* Slide up (entrance) */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide down (exit) */
@keyframes slideDown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(16px);
  }
}
```

### Scale

```css
/* Scale in (modal, dialog) */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Scale out */
@keyframes scaleOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
```

### Skeleton Shimmer

```css
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--gray-200) 25%,
    var(--gray-100) 50%,
    var(--gray-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

### Spinner

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid var(--gray-200);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

---

## Micro-interactions

### Button States

```css
.button {
  transition:
    background-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.button:hover {
  background-color: var(--button-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

### Toggle/Switch

```css
.toggle-track {
  transition: background-color var(--duration-normal) var(--ease-out);
}

.toggle-thumb {
  transition: transform var(--duration-normal) var(--ease-out);
}

.toggle[aria-checked="true"] .toggle-thumb {
  transform: translateX(20px);
}
```

### Checkbox/Radio

```css
.checkbox-indicator {
  transition:
    background-color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out);
}

.checkbox-check {
  transition:
    opacity var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
  transform: scale(0);
  opacity: 0;
}

.checkbox:checked + .checkbox-indicator .checkbox-check {
  transform: scale(1);
  opacity: 1;
}
```

### Input Focus

```css
.input {
  transition:
    border-color var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.input:focus {
  border-color: var(--color-focus);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}
```

### Dropdown Menu

```css
.dropdown-menu {
  transform-origin: top;
  transition:
    opacity var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);
}

.dropdown-menu[data-state="closed"] {
  opacity: 0;
  transform: scaleY(0.95) translateY(-8px);
  pointer-events: none;
}

.dropdown-menu[data-state="open"] {
  opacity: 1;
  transform: scaleY(1) translateY(0);
}
```

---

## Accessibility

### Respecting User Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Safe Animation Properties

**Always safe** (GPU-accelerated, no reflow):
- `opacity`
- `transform` (translate, scale, rotate)

**Use carefully** (may cause reflow):
- `width`, `height`
- `margin`, `padding`
- `top`, `left`, `right`, `bottom`

**Avoid animating**:
- `box-shadow` (performance heavy)
- `filter` (performance heavy)
- `border-radius` (causes repaint)

### Dangerous Patterns to Avoid

| Pattern | Risk | Alternative |
|---------|------|-------------|
| Rapid flashing (>3/sec) | Seizures | Slow pulse or static |
| Large-scale zooming | Vestibular triggers | Subtle scale (0.95–1.05) |
| Parallax scrolling | Motion sickness | Static or subtle offset |
| Auto-playing carousels | Disorientation | User-controlled |
| Continuous looping | Distraction | Play once or on-demand |

### Motion Principles Checklist

- [ ] All animations complete within 500ms
- [ ] Easing matches animation context (enter/exit/move)
- [ ] `prefers-reduced-motion` is respected
- [ ] No animation is required to understand content
- [ ] Looping animations can be paused
- [ ] Motion enhances, never obstructs
