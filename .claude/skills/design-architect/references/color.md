# Color Theory Deep Dive

## Table of Contents
1. [Color Psychology](#color-psychology)
2. [Building Palettes](#building-palettes)
3. [Semantic Color Tokens](#semantic-color-tokens)
4. [Accessibility & Contrast](#accessibility--contrast)
5. [Color in Context](#color-in-context)

---

## Color Psychology

### Primary Colors & Associations

| Color | Positive | Negative | Best For |
|-------|----------|----------|----------|
| **Blue** | Trust, calm, stability, professionalism | Cold, distant | Finance, tech, healthcare |
| **Red** | Energy, urgency, passion, excitement | Danger, aggression | CTAs, errors, sales |
| **Green** | Growth, nature, success, health | Envy, inexperience | Eco, finance, confirmations |
| **Yellow** | Optimism, warmth, attention | Caution, anxiety | Warnings, highlights |
| **Orange** | Creativity, enthusiasm, friendliness | Cheapness | CTAs, playful brands |
| **Purple** | Luxury, creativity, wisdom | Artificiality | Premium, creative tools |
| **Pink** | Compassion, playfulness, romance | Immaturity | Beauty, youth brands |
| **Black** | Sophistication, power, elegance | Death, evil | Luxury, fashion |
| **White** | Purity, simplicity, cleanliness | Sterility, emptiness | Minimalist, medical |

### Warm vs Cool

**Warm colors** (red, orange, yellow): Advance toward viewer, feel energetic, increase arousal
**Cool colors** (blue, green, purple): Recede from viewer, feel calm, reduce stress

**Application**: Use warm for CTAs, cool for backgrounds.

### Cultural Considerations

| Color | Western | Eastern | Middle Eastern |
|-------|---------|---------|----------------|
| White | Purity, weddings | Death, mourning | Purity |
| Red | Danger, love | Luck, prosperity | Danger |
| Yellow | Happiness | Royalty (China) | Mourning (Egypt) |
| Green | Nature, money | Fertility | Islam, paradise |

---

## Building Palettes

### The 60-30-10 Rule

```
60% — Primary/Neutral (backgrounds, large areas)
30% — Secondary (UI surfaces, cards)
10% — Accent (CTAs, highlights, interactive elements)
```

### Palette Generation Methods

**1. Monochromatic** (one hue, varying saturation/lightness)
- Safe, harmonious
- Risk: monotonous
- Use: Minimalist, sophisticated brands

**2. Analogous** (adjacent on color wheel)
- Naturally harmonious
- Low contrast
- Use: Serene, nature-inspired designs

**3. Complementary** (opposite on color wheel)
- High contrast, vibrant
- Risk: jarring if overused
- Use: CTAs that need to pop

**4. Triadic** (three equidistant colors)
- Balanced, vibrant
- Requires careful saturation control
- Use: Playful, creative brands

**5. Split-Complementary** (one color + two adjacent to its complement)
- High contrast with more nuance
- Easier than complementary
- Use: Marketing, landing pages

### Neutral Scale Generation

Start with a base gray, then:
1. Add slight hue tint (warm or cool)
2. Generate 9–11 stops from near-white to near-black
3. Ensure each step is perceptually even

```css
/* Warm neutral scale */
--gray-50:  #FAFAF9;
--gray-100: #F5F5F4;
--gray-200: #E7E5E4;
--gray-300: #D6D3D1;
--gray-400: #A8A29E;
--gray-500: #78716C;
--gray-600: #57534E;
--gray-700: #44403C;
--gray-800: #292524;
--gray-900: #1C1917;
--gray-950: #0C0A09;
```

---

## Semantic Color Tokens

### Three-Tier System

```
Primitive → Semantic → Component
   ↓           ↓          ↓
blue-500   color-primary  button-bg-primary
```

### Semantic Token Examples

```css
/* Intent-based tokens */
--color-primary:     var(--blue-600);
--color-secondary:   var(--gray-600);
--color-success:     var(--green-600);
--color-warning:     var(--amber-500);
--color-error:       var(--red-600);
--color-info:        var(--sky-500);

/* Surface tokens */
--color-bg-primary:   var(--white);
--color-bg-secondary: var(--gray-50);
--color-bg-tertiary:  var(--gray-100);

/* Text tokens */
--color-text-primary:   var(--gray-900);
--color-text-secondary: var(--gray-600);
--color-text-tertiary:  var(--gray-400);
--color-text-inverse:   var(--white);

/* Border tokens */
--color-border-default: var(--gray-200);
--color-border-strong:  var(--gray-300);
--color-border-focus:   var(--blue-500);
```

### State Variations

For each semantic color, define states:

```css
/* Primary button states */
--button-primary-bg:         var(--blue-600);
--button-primary-bg-hover:   var(--blue-700);
--button-primary-bg-active:  var(--blue-800);
--button-primary-bg-disabled: var(--blue-300);
```

---

## Accessibility & Contrast

### WCAG Contrast Requirements

| Level | Normal Text | Large Text | UI Components |
|-------|------------|------------|---------------|
| **AA** | 4.5:1 | 3:1 | 3:1 |
| **AAA** | 7:1 | 4.5:1 | 4.5:1 |

**Large text**: 18px+ regular, or 14px+ bold

### Contrast Calculation

```
Contrast Ratio = (L1 + 0.05) / (L2 + 0.05)

Where L1 = lighter color luminance
      L2 = darker color luminance
```

### Common Contrast Pairs

| Background | Text | Ratio | Pass |
|------------|------|-------|------|
| #FFFFFF | #000000 | 21:1 | ✅ AAA |
| #FFFFFF | #757575 | 4.6:1 | ✅ AA |
| #FFFFFF | #959595 | 2.9:1 | ❌ Fail |
| #F5F5F5 | #666666 | 5.7:1 | ✅ AA |
| #1A1A1A | #FFFFFF | 17.4:1 | ✅ AAA |
| #121212 | #E0E0E0 | 13.1:1 | ✅ AAA |

### Color Blindness Considerations

| Type | Affected Colors | % Population |
|------|----------------|--------------|
| Deuteranopia | Red-green | 6% |
| Protanopia | Red-green | 2% |
| Tritanopia | Blue-yellow | 0.01% |

**Rules**:
1. Never convey meaning with color alone
2. Add icons, patterns, or text labels
3. Test with color blindness simulators
4. Use blue/orange as safe contrasting pair

---

## Color in Context

### Dark Mode Adjustments

1. **Reduce saturation**: Bright colors vibrate on dark backgrounds
2. **Increase lightness**: Colors need to be lighter to maintain perceived vibrancy
3. **Flip surface elevation**: Lighter = higher (not shadows)
4. **Retest contrast**: All ratios must be rechecked

```css
/* Light mode */
--color-primary: hsl(220, 90%, 50%);

/* Dark mode - less saturated, lighter */
--color-primary: hsl(220, 70%, 65%);
```

### Contextual Meaning

| Context | Red | Green | Yellow |
|---------|-----|-------|--------|
| **Forms** | Error | Success | Warning |
| **Finance** | Loss | Gain | Neutral |
| **Traffic** | Stop | Go | Caution |
| **Health** | Critical | Healthy | Attention |

### Brand Color Integration

When integrating brand colors:
1. Use brand color for primary accent (10%)
2. Derive supporting colors through tints/shades
3. Keep neutrals truly neutral or slightly tinted
4. Reserve brand color for key moments (CTAs, highlights)

```css
/* Brand color extended */
--brand: #5046E4;
--brand-50:  #F0F0FF;
--brand-100: #E0E0FF;
--brand-200: #C7C4FE;
--brand-300: #A5A0FC;
--brand-400: #8B83F9;
--brand-500: #5046E4;  /* Original */
--brand-600: #3F37C4;
--brand-700: #312BA0;
--brand-800: #251F7A;
--brand-900: #1A1654;
```
