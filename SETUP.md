# Portfolio Setup Documentation

## Overview
This document explains the setup and configuration of the portfolio site deployed at [tannermoehle.com](https://tannermoehle.com).

## Project Structure
```
portfolio/
├── index.html          # Main landing page
├── vercel.json         # Vercel deployment configuration
└── SETUP.md           # This file
```

## Vercel Configuration

### vercel.json
```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

This minimal configuration:
- Enables clean URLs (removes `.html` extensions)
- Removes trailing slashes from URLs

### Vercel Project Settings

**Build & Deployment Settings:**
- Framework Preset: `Other`
- Build Command: (empty)
- Output Directory: `.` (root directory)
- Install Command: (empty)
- Development Command: `None`

**Domains:**
- `tannermoehle.com` → redirects to `www.tannermoehle.com`
- `www.tannermoehle.com` → Production
- `portfolio-gold-zeta-j8jzu6iw2i.vercel.app` → Vercel default URL

## Deployment Workflow

1. Push changes to the `main` branch on GitHub
2. Vercel automatically detects the push
3. Vercel deploys the site (no build step needed for static HTML)
4. Changes go live at tannermoehle.com

## Key Issue Resolved

**Problem:** Site was showing 404 error with "DEPLOYMENT_NOT_FOUND"

**Root Cause:** The custom domain `tannermoehle.com` was not connected to the Vercel project. The domain existed in Vercel but wasn't linked to this specific portfolio project.

**Solution:**
1. Set Output Directory to `.` in Vercel Build & Deployment settings
2. Added `tannermoehle.com` domain to the project via Vercel Dashboard → Settings → Domains
3. Enabled redirect from apex domain to www subdomain

## Testing Checklist

- [ ] `https://tannermoehle.com` - redirects to www
- [ ] `https://www.tannermoehle.com` - loads the site
- [ ] Navigation links (Home, Projects, Bio) are visible
- [ ] Site deploys automatically on git push to main

## Future Development

To add new pages:
1. Create new `.html` files in the root directory (e.g., `projects.html`, `bio.html`)
2. Update navigation links in `index.html` if needed
3. Push to GitHub - Vercel will auto-deploy

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Repository](https://github.com/tdm21m/portfolio)
- [Live Site](https://tannermoehle.com)
