# Portfolio Image Specifications

## Tile Sizes (Homepage Grid)

Based on your grid layout, here are the recommended image dimensions:

### Large Tile (2 columns × 2 rows)
- **Dimensions:** 800 × 600px (4:3 ratio)
- **@2x Retina:** 1600 × 1200px
- **Use for:** Hero projects (Microsoft Teams)

### Medium Square Tile (1 column × 1 row)
- **Dimensions:** 400 × 400px (1:1 ratio)
- **@2x Retina:** 800 × 800px
- **Use for:** Standard projects (Decisions, Mara, IBM)

### Wide Tile (2 columns × 1 row)
- **Dimensions:** 800 × 400px (2:1 ratio)
- **@2x Retina:** 1600 × 800px
- **Use for:** Landscape projects (EA Games)

### Tall Tile (1 column × 2 rows)
- **Dimensions:** 400 × 800px (1:2 ratio)
- **@2x Retina:** 800 × 1600px
- **Use for:** Vertical content (Writing)

### Extra Wide Tile (2 columns, shorter)
- **Dimensions:** 800 × 320px (2.5:1 ratio)
- **@2x Retina:** 1600 × 640px
- **Use for:** Banner-style projects (AI & ML Design)

---

## Project Page Content Images

### Hero Image
- **Dimensions:** 1400 × 800px
- **@2x Retina:** 2800 × 1600px
- **Aspect ratio:** 16:9 or 7:4

### Full-Width Section Image
- **Dimensions:** 1400 × 900px
- **@2x Retina:** 2800 × 1800px

### Two-Column Image (side by side)
- **Dimensions:** 680 × 500px each
- **@2x Retina:** 1360 × 1000px

### Device Mockups
- **Desktop:** 1200 × 750px
- **Tablet:** 600 × 800px
- **Mobile:** 375 × 812px (iPhone Pro ratio)

### Detail/Close-up Images
- **Dimensions:** 800 × 600px
- **@2x Retina:** 1600 × 1200px

---

## File Format Recommendations

| Format | Use Case |
|--------|----------|
| **WebP** | Primary format - best compression, wide support |
| **PNG** | UI screenshots, images with text, transparency |
| **JPG** | Photos, complex gradients |
| **SVG** | Icons, logos, simple illustrations |

---

## Figma Make Prompt

Copy this prompt into Figma Make to generate your image template frames:

```
Create a Figma file called "Portfolio Image Templates" with the following:

## Page 1: Homepage Tiles
Create frames for each tile size with:
- A subtle 12px rounded corner guide
- Safe zone padding of 32px from edges
- Center alignment guides
- Light gray (#F5F5F5) background

Frames needed:
1. "Tile - Large" at 1600×1200px (retina)
2. "Tile - Square" at 800×800px (retina)
3. "Tile - Wide" at 1600×800px (retina)
4. "Tile - Tall" at 800×1600px (retina)
5. "Tile - Extra Wide" at 1600×640px (retina)

## Page 2: Project Page Images
Create frames for:
1. "Hero" at 2800×1600px
2. "Full Width" at 2800×1800px
3. "Two Column" at 1360×1000px
4. "Detail" at 1600×1200px

## Page 3: Device Mockups
Include simple device frames for:
1. Desktop browser (1200×750 viewport)
2. iPad Pro (600×800 viewport)
3. iPhone 15 Pro (375×812 viewport)

## Color Styles
Create color styles for each project theme:
- Microsoft Teams: #4F52B2 (primary), #6264D9 (light)
- Decisions: #7C3AED (primary), #8B5CF6 (light)
- Mara: #F59E0B (primary), #FBBF24 (light)
- EA Games: #059669 (primary), #10B981 (light)
- IBM: #475569 (primary), #64748B (light)
- Design Systems: #F43F5E (primary), #FB7185 (light)
- AI & ML: #4F46E5 (primary), #6366F1 (light)

## Export Settings
Configure exports for:
- 1x (standard)
- 2x (retina)
- WebP format with 85% quality
```

---

## Quick Reference Card

```
┌─────────────────────────────────────────┐
│  HOMEPAGE TILES                         │
├─────────────────────────────────────────┤
│  Large:      800×600   (@2x: 1600×1200) │
│  Square:     400×400   (@2x: 800×800)   │
│  Wide:       800×400   (@2x: 1600×800)  │
│  Tall:       400×800   (@2x: 800×1600)  │
│  Extra Wide: 800×320   (@2x: 1600×640)  │
├─────────────────────────────────────────┤
│  PROJECT PAGES                          │
├─────────────────────────────────────────┤
│  Hero:       1400×800  (@2x: 2800×1600) │
│  Full Width: 1400×900  (@2x: 2800×1800) │
│  Two Column: 680×500   (@2x: 1360×1000) │
│  Detail:     800×600   (@2x: 1600×1200) │
└─────────────────────────────────────────┘
```
