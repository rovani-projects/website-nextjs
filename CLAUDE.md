# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Development
npm run dev                    # Start dev server on localhost:3000 with hot reload

# Production Build
npm run build                  # Build static site (creates /out directory)

# Code Quality
npm run lint                   # Run ESLint checks

# Build & Deploy Pipeline
npm run build && npm run postbuild  # Build + generate sitemap for production
```

**Note**: The `npm run export` script is an alias for `npm run build` and does the same thing. The project uses static export (`output: "export"` in next.config.ts), so `npm run build` automatically generates static files to `/out`.

## Architecture Overview

### Static Site Generation (JAMstack)

This is a **static site generator** built with Next.js Pages Router. The entire site is pre-rendered at build time:

- **No server-side rendering**: All pages are static HTML
- **No API routes**: No backend needed
- **No state management library**: Content-display focused, no global state needed
- **Build-time processing**: Markdown → HTML conversion happens during `npm run build`
- **CDN-friendly**: Deploy anywhere (Netlify, Vercel, GitHub Pages, S3, etc.)

### Content Pipeline

```
Markdown files (content/)
  → gray-matter (YAML parsing)
  → markdown.ts functions (getAllContent, getContentBySlug)
  → markdownToHtml (remark + remark-html)
  → getStaticProps (Next.js static generation)
  → React components (receive pre-rendered HTML)
  → Static HTML files (/out)
```

Content is organized by type in `/content`:
- **pages/**: Static pages (e.g., About Us)
- **services/**: Service descriptions (sorted by `order` field)
- **projects/**: Case studies (sorted by `date` field, newest first)

Each markdown file uses YAML frontmatter with type-specific fields:
- **Services**: `title`, `description`, `icon` (Lucide icon name), `order`
- **Projects**: `title`, `date` (ISO format), `client`, `industry`
- **Pages**: `title`, `description`

See [lib/markdown.ts](src/lib/markdown.ts) for type definitions and processing logic.

### Routing & Page Generation

Dynamic routes use Next.js static generation:

| Route | File | Generation |
|-------|------|-----------|
| `/services` | `src/pages/services/index.tsx` | getStaticProps loads all services |
| `/services/[service]` | `src/pages/services/[service].tsx` | getStaticPaths + getStaticProps for each service |
| `/projects/[project]` | `src/pages/projects/[project].tsx` | getStaticPaths + getStaticProps for each project |
| `/[page]` | `src/pages/[page].tsx` | getStaticPaths + getStaticProps for dynamic pages |
| `/contact` | `src/pages/contact.tsx` | Static form with Netlify form submission |

All routes use `fallback: false`, returning 404 for unknown paths.

### Styling System

**Multi-layer architecture:**

1. **CSS Variables** ([src/styles/globals.css](src/styles/globals.css)): Chicago-inspired OKLch color space
   - `--color-chicago-red`, `--color-chicago-blue`, etc.
   - Dark mode support via `.dark` class selector

2. **Tailwind CSS 4.1.16**: PostCSS-based utility-first styling
   - Modern @theme syntax (not Tailwind 3)
   - Custom colors mapped to CSS variables
   - Tailwind Typography plugin for prose styling (markdown HTML)

3. **CVA (Class Variance Authority)**: Component variant system
   - Button, Card, Separator components use CVA patterns
   - `cn()` utility merges Tailwind classes with conflict resolution

### Component Architecture

**Layout**: [src/components/layout/Layout.tsx](src/components/layout/Layout.tsx) wraps all pages
- Composes Header + main content + Footer
- Uses flexbox (`min-h-screen flex flex-col`) to push footer to bottom

**Reusable Components**:
- [ServiceCards.tsx](src/components/services/ServiceCards.tsx): Maps Lucide icon names to React components
- shadcn/ui pattern components: button, card, separator (Radix UI + Tailwind)

**Utility**: [lib/utils.ts](src/lib/utils.ts) exports `cn()` for conditional class merging using clsx + tailwind-merge

### Key Files

- **[src/lib/markdown.ts](src/lib/markdown.ts)**: Content loading and processing (getAllContent, getContentBySlug, markdownToHtml)
- **[src/pages/_app.tsx](src/pages/_app.tsx)**: Next.js app wrapper with global styles
- **[src/pages/_document.tsx](src/pages/_document.tsx)**: HTML document structure
- **[next.config.ts](next.config.ts)**: Configuration (static export, images, trailing slashes)
- **[tailwind.config.ts](tailwind.config.ts)**: Tailwind configuration with Chicago colors
- **[netlify.toml](netlify.toml)**: Deployment configuration
- **[next-sitemap.config.js](next-sitemap.config.js)**: SEO sitemap generation

## Build & Deployment

**Netlify Configuration** ([netlify.toml](netlify.toml)):
- Runs `npm run build` on push to main branch
- Publishes `/out` directory as static site
- Automatic CDN distribution and edge caching

**Build Process**:
1. `next build` - Analyzes all pages, runs getStaticPaths/getStaticProps, converts markdown to HTML
2. Output written to `/out` directory (pre-configured in next.config.ts)
3. `next-sitemap` - Post-build script generates sitemap.xml and robots.txt for SEO

**Performance Optimizations**:
- Trailing slashes enable consistent CDN caching (`trailingSlash: true`)
- All images marked `unoptimized` (required for static export, lazy loaded via Next Image)
- CSS minified by Tailwind, JS minified by Next.js
- Static HTML means zero runtime processing

## Development Notes

### Adding Content

1. Create markdown file in appropriate folder:
   - `content/services/my-service.md`
   - `content/projects/my-project.md`
   - `content/pages/my-page.md`

2. Add frontmatter with required fields (see type definitions in [src/lib/markdown.ts](src/lib/markdown.ts))

3. Add markdown content below frontmatter

4. Run `npm run build` to generate static pages (or test with `npm run dev` for local preview)

### Adding Services

Services are displayed on the home page and services index. Use icon names from [Lucide React](https://lucide.dev/).

```markdown
---
title: My Service
description: What this service does
icon: chart-line
order: 2
---

# Service Details
...
```

The `order` field controls display order (lowest first). The [ServiceCards.tsx](src/components/services/ServiceCards.tsx) component maps icon names to React components.

### Modifying Styles

**Global colors**: Edit CSS variables in [src/styles/globals.css](src/styles/globals.css)

**Component styles**:
- Edit Tailwind classes in component files
- Modify `cn()` utility calls for conditional styles
- Add CVA variants to button/card components if needed

**Tailwind config**: [tailwind.config.ts](tailwind.config.ts) maps CSS variables to Tailwind color names

### Testing

No automated tests are configured (static output and minimal component logic make this appropriate). ESLint (`npm run lint`) acts as the primary quality gate, catching type errors and style violations.

## Tech Stack Details

- **Next.js 16.0.1**: React framework with Pages Router (not App Router)
- **React 19.2.0**: UI library (uses automatic JSX transform, no React import needed)
- **TypeScript 5.9.3**: Type safety with strict mode enabled
- **Tailwind CSS 4.1.16**: Utility-first styling (modern @theme syntax)
- **gray-matter 4.0.3**: YAML frontmatter parsing
- **remark 15.0.1 + remark-html 16.0.1**: Markdown to HTML conversion
- **next-sitemap 4.2.3**: SEO sitemap generation
- **Lucide React 0.552.0**: Icon components
- **@radix-ui/***: Headless UI components (shadcn/ui)
- **ESLint 9.39.1**: Code quality and style enforcement

## Node.js & Environment

- **Node.js**: 22.x recommended (18.x minimum)
- **npm**: 10.x
- **Git**: Required for version control and commits

## Important Reminders

- The project uses **Pages Router**, not App Router. Keep dynamic routes in [src/pages](src/pages) with `[slug].tsx` pattern.
- Markdown processing happens at build time via `getStaticProps`. Changes require rebuild via `npm run build`.
- Static export means no server-side features: no API routes, no middleware, no dynamic headers.
- When modifying content, run `npm run build` to test locally before pushing to main.
