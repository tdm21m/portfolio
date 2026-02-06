# UI States Deep Dive

## Table of Contents
1. [Empty States](#empty-states)
2. [Loading States](#loading-states)
3. [Error States](#error-states)
4. [Success States](#success-states)
5. [Interactive States](#interactive-states)

---

## Empty States

### Anatomy of an Empty State

```
┌─────────────────────────────────────┐
│                                     │
│         [Illustration/Icon]         │
│                                     │
│      Primary Message (What)         │
│   Secondary Message (Why/How)       │
│                                     │
│         [ Primary Action ]          │
│          Secondary Action           │
│                                     │
└─────────────────────────────────────┘
```

### Types of Empty States

| Type | When | Message Focus |
|------|------|---------------|
| **First Use** | User hasn't created anything yet | Onboarding, guidance |
| **No Results** | Search/filter returned nothing | Suggestions, alternatives |
| **Cleared** | User deleted all items | Confirmation, undo option |
| **No Data** | System has no data to show | Explanation, status |
| **Error** | Failed to load | Recovery actions |

### Empty State Examples

#### First Use (Inbox)
```
Icon: Inbox illustration

"Your inbox is empty"
"Messages from your team will appear here"

[ Invite Team Members ]
```

#### No Search Results
```
Icon: Search illustration

"No results for 'xyz'"
"Try adjusting your search or filters"

[ Clear Filters ]   [ Browse All ]
```

#### Cleared State
```
Icon: Checkmark in circle

"All caught up!"
"You've completed all your tasks"

[ View Completed ]
```

### Design Guidelines

1. **Replace entirely**: Don't show empty tables with headers
2. **Be specific**: "No projects yet" not "Nothing here"
3. **Guide to action**: Always provide a clear next step
4. **Match the tone**: Error empty states are different from success
5. **Keep it light**: Optional illustration adds personality

### CSS Pattern

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-12);
  text-align: center;
  min-height: 300px;
}

.empty-state-icon {
  width: 120px;
  height: 120px;
  margin-bottom: var(--space-6);
  color: var(--color-text-tertiary);
}

.empty-state-title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.empty-state-description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  max-width: 400px;
}
```

---

## Loading States

### Loading Patterns by Duration

| Duration | Pattern | Example |
|----------|---------|---------|
| **<100ms** | None | Instant operations |
| **100ms–1s** | Subtle indicator | Button spinner |
| **1s–3s** | Skeleton screen | Page content |
| **3s–10s** | Progress indicator | File upload |
| **>10s** | Progress bar + % | Large downloads |

### Skeleton Screens

#### When to Use
- Page loads
- Tab switching
- Data fetching
- Infinite scroll

#### When NOT to Use
- Form submissions
- Button clicks
- Quick API calls

#### Skeleton CSS

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--gray-200) 25%,
    var(--gray-100) 50%,
    var(--gray-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Skeleton variants */
.skeleton-text {
  height: 1em;
  width: 100%;
}

.skeleton-text-short {
  width: 60%;
}

.skeleton-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.skeleton-button {
  width: 100px;
  height: 40px;
  border-radius: var(--radius-md);
}
```

### Spinner

```css
.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--gray-200);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Size variants */
.spinner-sm { width: 16px; height: 16px; }
.spinner-lg { width: 32px; height: 32px; }
```

### Progress Bar

```css
.progress {
  height: 4px;
  background: var(--gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--color-primary);
  transition: width var(--duration-normal) var(--ease-out);
}

/* Indeterminate */
.progress-indeterminate .progress-bar {
  width: 30%;
  animation: progress-slide 1s infinite;
}

@keyframes progress-slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
```

### Button Loading State

```css
.button {
  position: relative;
}

.button[data-loading="true"] {
  color: transparent;
  pointer-events: none;
}

.button[data-loading="true"]::after {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
```

---

## Error States

### Error State Anatomy

```
┌─────────────────────────────────────┐
│ ⚠️ Error Icon                       │
│                                     │
│   What went wrong (clear message)   │
│   Why it happened (if helpful)      │
│                                     │
│   [ Try Again ]  [ Get Help ]       │
└─────────────────────────────────────┘
```

### Error Message Guidelines

| Do | Don't |
|----|-------|
| "We couldn't save your changes" | "Error 500" |
| "Check your internet connection" | "Network error" |
| "Email address isn't valid" | "Invalid input" |
| "Password must be 8+ characters" | "Password too short" |

### Error Types

#### Inline Field Error
```css
.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgb(239 68 68 / 0.2);
}

.error-message {
  color: var(--color-error);
  font-size: var(--text-sm);
  margin-top: var(--space-1);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
```

#### Toast Error
```css
.toast-error {
  background: var(--color-error);
  color: white;
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}
```

#### Full Page Error
```css
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--space-8);
  text-align: center;
}

.error-code {
  font-size: var(--text-6xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-tertiary);
}
```

### Error Recovery Patterns

1. **Retry**: Automatic with exponential backoff
2. **Manual retry**: Clear "Try Again" button
3. **Alternative**: Suggest different approach
4. **Support**: Link to help resources
5. **Undo**: Restore previous state

---

## Success States

### Success Indicators

#### Inline Success
```css
.input-success {
  border-color: var(--color-success);
}

.success-message {
  color: var(--color-success);
  font-size: var(--text-sm);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
```

#### Toast Success
```css
.toast-success {
  background: var(--color-success);
  color: white;
}
```

#### Checkmark Animation
```css
.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-success);
  position: relative;
}

.checkmark::after {
  content: "";
  position: absolute;
  left: 18px;
  top: 12px;
  width: 12px;
  height: 24px;
  border: solid white;
  border-width: 0 4px 4px 0;
  transform: rotate(45deg);
  animation: checkmark-draw 0.3s ease-out forwards;
}

@keyframes checkmark-draw {
  0% {
    height: 0;
    width: 0;
    opacity: 0;
  }
  40% {
    height: 0;
    width: 12px;
    opacity: 1;
  }
  100% {
    height: 24px;
    width: 12px;
    opacity: 1;
  }
}
```

---

## Interactive States

### Complete State Matrix

| State | Background | Border | Text | Shadow | Cursor |
|-------|------------|--------|------|--------|--------|
| **Default** | Base | Default | Primary | None/sm | pointer |
| **Hover** | Lighter/Darker | Stronger | Primary | sm/md | pointer |
| **Focus** | Base | Focus ring | Primary | ring | - |
| **Active** | Darker | Stronger | Primary | none/inset | pointer |
| **Disabled** | Muted | Muted | Muted | none | not-allowed |
| **Loading** | Base | Default | Hidden | none | wait |
| **Error** | Error-bg | Error | Error | none | - |
| **Success** | Success-bg | Success | Success | none | - |

### Comprehensive Button States

```css
.button {
  /* Base */
  background: var(--button-bg);
  border: 1px solid var(--button-border);
  color: var(--button-text);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

/* Hover */
.button:hover:not(:disabled) {
  background: var(--button-bg-hover);
  border-color: var(--button-border-hover);
}

/* Focus */
.button:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* Active */
.button:active:not(:disabled) {
  background: var(--button-bg-active);
  transform: scale(0.98);
}

/* Disabled */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Loading */
.button[data-loading="true"] {
  color: transparent;
  pointer-events: none;
  position: relative;
}
```

### Link States

```css
.link {
  color: var(--color-link);
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color var(--duration-fast);
}

.link:hover {
  text-decoration-color: currentColor;
}

.link:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: 2px;
}

.link:active {
  color: var(--color-link-active);
}

.link:visited {
  color: var(--color-link-visited);
}
```
