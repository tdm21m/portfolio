# Accessibility Deep Dive

## Table of Contents
1. [WCAG Overview](#wcag-overview)
2. [Color & Contrast](#color--contrast)
3. [Keyboard Navigation](#keyboard-navigation)
4. [Screen Readers](#screen-readers)
5. [Motion & Animation](#motion--animation)
6. [Forms & Inputs](#forms--inputs)
7. [Testing Checklist](#testing-checklist)

---

## WCAG Overview

### The Four Principles (POUR)

| Principle | Meaning | Examples |
|-----------|---------|----------|
| **Perceivable** | Users can perceive content | Alt text, captions, contrast |
| **Operable** | Users can navigate/interact | Keyboard access, focus states |
| **Understandable** | Users can understand content | Clear language, predictable UI |
| **Robust** | Works with assistive tech | Semantic HTML, ARIA |

### Conformance Levels

| Level | Requirement | Impact |
|-------|-------------|--------|
| **A** | Minimum | Basic accessibility |
| **AA** | Standard | Legal requirement in many places |
| **AAA** | Enhanced | Highest accessibility |

**Target**: WCAG 2.1 AA for most applications.

---

## Color & Contrast

### Contrast Ratios

| Content Type | AA Minimum | AAA Enhanced |
|--------------|------------|--------------|
| Normal text (<18px) | 4.5:1 | 7:1 |
| Large text (≥18px or ≥14px bold) | 3:1 | 4.5:1 |
| UI components & graphics | 3:1 | 4.5:1 |
| Focus indicators | 3:1 | 4.5:1 |

### Common Contrast Failures

| Background | Text | Ratio | Status |
|------------|------|-------|--------|
| #FFFFFF | #CCCCCC | 1.6:1 | ❌ Fail |
| #FFFFFF | #767676 | 4.5:1 | ✅ AA Pass |
| #FFFFFF | #595959 | 7.0:1 | ✅ AAA Pass |
| #F5F5F5 | #767676 | 4.1:1 | ❌ AA Fail |
| #121212 | #757575 | 4.6:1 | ✅ AA Pass |

### Color Independence

Never convey information with color alone.

```
❌ Wrong:
"Fields marked in red are required"

✅ Correct:
"Required fields are marked with *"
+ Red color + asterisk icon
```

### Implementation

```css
/* Ensure sufficient contrast */
:root {
  --text-primary: #111827;    /* 15.8:1 on white */
  --text-secondary: #4B5563;  /* 7.5:1 on white */
  --text-tertiary: #6B7280;   /* 5.0:1 on white - AA only */
}

/* Visual indicators beyond color */
.error-field {
  border-color: var(--color-error);
  border-width: 2px;  /* Thicker border */
}

.error-field::before {
  content: "⚠";  /* Icon indicator */
}
```

---

## Keyboard Navigation

### Focus Management

```css
/* Visible focus indicator */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* NEVER do this */
:focus {
  outline: none;  /* Breaks keyboard navigation */
}

/* Better: custom focus that's still visible */
.button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}
```

### Focus Order

1. **Logical flow**: Matches visual order (left-to-right, top-to-bottom)
2. **No traps**: Users can always Tab out of any element
3. **Skip links**: Provide "Skip to content" link

```html
<!-- Skip link -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px 16px;
  background: var(--color-primary);
  color: white;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>
```

### Focus Trapping (Modals)

```javascript
// Trap focus within modal
function trapFocus(element) {
  const focusables = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  first.focus();
}
```

### Keyboard Shortcuts

| Key | Expected Behavior |
|-----|-------------------|
| Tab | Move to next focusable element |
| Shift+Tab | Move to previous focusable element |
| Enter | Activate button/link |
| Space | Activate button, toggle checkbox |
| Escape | Close modal/dropdown |
| Arrow keys | Navigate within menus, sliders |

---

## Screen Readers

### Semantic HTML

```html
<!-- Use semantic elements -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<aside>...</aside>
<footer>...</footer>

<!-- Use proper headings hierarchy -->
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>

<!-- Use lists for lists -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### ARIA Essentials

```html
<!-- Labels -->
<button aria-label="Close modal">×</button>
<input aria-labelledby="label-id">

<!-- Descriptions -->
<input aria-describedby="help-text">
<span id="help-text">Password must be 8+ characters</span>

<!-- States -->
<button aria-pressed="true">Toggle</button>
<div aria-expanded="false">Accordion</div>
<input aria-invalid="true">

<!-- Live regions -->
<div aria-live="polite">Status updates here</div>
<div aria-live="assertive">Urgent alerts here</div>

<!-- Landmarks -->
<nav aria-label="Main navigation">...</nav>
<nav aria-label="Footer navigation">...</nav>
```

### Images

```html
<!-- Informative image -->
<img src="chart.png" alt="Sales increased 25% in Q4">

<!-- Decorative image -->
<img src="decoration.png" alt="" role="presentation">

<!-- Complex image -->
<figure>
  <img src="complex-chart.png" alt="Quarterly sales comparison">
  <figcaption>
    Detailed description of the chart data...
  </figcaption>
</figure>
```

### Screen Reader Testing

| Tool | Platform |
|------|----------|
| VoiceOver | macOS, iOS |
| NVDA | Windows (free) |
| JAWS | Windows |
| TalkBack | Android |
| Narrator | Windows |

---

## Motion & Animation

### Respecting User Preferences

```css
/* Reduce or remove motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Safe Motion Guidelines

| Safe | Avoid |
|------|-------|
| Opacity changes | Rapid flashing (>3/sec) |
| Small transforms | Large zooming/scaling |
| Short durations (<500ms) | Parallax effects |
| Subtle movements | Auto-playing videos |
| User-triggered | Continuous loops |

### Vestibular-Friendly Animation

```css
/* Prefer transform over position changes */
.animate-in {
  animation: fadeSlideIn 300ms ease-out;
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(8px);  /* Small movement */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Provide controls for auto-play */
.video-container {
  position: relative;
}

.video-pause-btn {
  position: absolute;
  /* Always visible, easy to access */
}
```

---

## Forms & Inputs

### Accessible Form Pattern

```html
<form>
  <!-- Associated label -->
  <div class="form-group">
    <label for="email">Email address</label>
    <input
      type="email"
      id="email"
      name="email"
      autocomplete="email"
      aria-describedby="email-help email-error"
      aria-invalid="false"
    >
    <span id="email-help" class="help-text">
      We'll never share your email
    </span>
    <span id="email-error" class="error-text" hidden>
      Please enter a valid email address
    </span>
  </div>

  <!-- Required fields -->
  <div class="form-group">
    <label for="password">
      Password <span aria-hidden="true">*</span>
      <span class="sr-only">(required)</span>
    </label>
    <input
      type="password"
      id="password"
      required
      aria-required="true"
      autocomplete="new-password"
    >
  </div>

  <!-- Submit -->
  <button type="submit">Create account</button>
</form>
```

### Error Handling

```javascript
// Announce errors to screen readers
function showError(input, message) {
  const errorEl = document.getElementById(`${input.id}-error`);
  errorEl.textContent = message;
  errorEl.hidden = false;
  input.setAttribute('aria-invalid', 'true');

  // Focus the input
  input.focus();

  // Announce to screen readers
  const liveRegion = document.getElementById('form-errors');
  liveRegion.textContent = message;
}
```

### Touch Targets

```css
/* Minimum 44×44px touch targets */
.button,
.link,
input[type="checkbox"] + label,
input[type="radio"] + label {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}

/* Spacing between targets */
.button + .button {
  margin-left: 8px;
}
```

---

## Testing Checklist

### Automated Testing

- [ ] Run axe-core or similar tool
- [ ] Check with Lighthouse accessibility audit
- [ ] Validate HTML (no ARIA misuse)
- [ ] Run color contrast checker

### Keyboard Testing

- [ ] Tab through entire page
- [ ] Verify focus is always visible
- [ ] Confirm focus order is logical
- [ ] Test all interactive elements work with Enter/Space
- [ ] Escape closes modals/dropdowns
- [ ] Arrow keys work in menus
- [ ] No keyboard traps

### Screen Reader Testing

- [ ] All images have appropriate alt text
- [ ] Headings create logical outline
- [ ] Links and buttons are descriptive
- [ ] Forms have associated labels
- [ ] Error messages are announced
- [ ] Dynamic content is announced (aria-live)
- [ ] Landmarks are present and labeled

### Visual Testing

- [ ] Page is readable at 200% zoom
- [ ] Content reflows at narrow widths
- [ ] No horizontal scroll at 320px
- [ ] Color contrast meets AA minimum
- [ ] Focus indicators are visible
- [ ] No information by color alone

### Motion Testing

- [ ] Test with prefers-reduced-motion
- [ ] No rapid flashing
- [ ] Animations can be paused
- [ ] Auto-play video has controls

### Tools Reference

| Category | Tools |
|----------|-------|
| Automated | axe, Lighthouse, WAVE |
| Contrast | WebAIM Contrast Checker, Colour Contrast Analyser |
| Screen readers | VoiceOver, NVDA, JAWS |
| Color blindness | Sim Daltonism, Color Oracle |
| Keyboard | Just use your keyboard! |
