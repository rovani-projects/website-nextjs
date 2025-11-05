# _Rovani Projects, Inc._ - Consultancy Website

A modern, responsive website for _Rovani Projects, Inc._ consultancy built with Next.js, TypeScript, Tailwind CSS, and Claude Code. This site showcases our business services, projects, and company information through a clean, Chicago-inspired design.

## Features

- 📱 Fully responsive design optimized for all device sizes
- 🚀 Fast static site generation for optimal performance
- 📝 Content management through Markdown files
- 🎨 Chicago-inspired color scheme and design elements
- 📊 Showcases services, projects, and company information
- 📬 Netlify form integration for contact submissions

## Tech Stack

- **Framework**: Next.js 16.0.1 (Pages Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.16 with custom Chicago-inspired color scheme
- **Content**: Markdown with gray-matter 4.0.3 and remark 15.0.1
- **Components**: Custom UI components with shadcn/ui integration (Radix UI + Tailwind)
- **Icons**: Lucide React 0.552.0
- **Deployment**: Netlify (static site hosting)
- **Node.js**: 22.x recommended (18.x minimum)

## Project Structure

```
/
├── content/            # Markdown content files
│   ├── pages/          # Static page content
│   ├── projects/       # Project case studies
│   └── services/       # Service descriptions
├── public/             # Static assets
│   └── images/         # Site images
├── src/
│   ├── components/     # React components
│   │   ├── layout/     # Layout components
│   │   └── ui/         # Reusable UI components
│   ├── lib/            # Utility functions
│   ├── pages/          # Next.js pages
│   └── styles/         # Global styles
└── ...configuration files
```

## Getting Started

### Prerequisites

- Node.js 22.x recommended (18.x minimum)
- npm 10.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rovani-projects.git
   cd rovani-projects
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Content Management

Content is managed through Markdown files in the `content/` directory:

- **Pages**: General content pages like About Us
- **Services**: Service offerings with descriptions
- **Projects**: Case studies and project showcases

Each Markdown file includes frontmatter for metadata:

```markdown
---
title: Strategy Consulting
description: Develop comprehensive business strategies to achieve your goals
icon: chart-line
order: 1
---

# Content goes here...
```

## Deployment

The site is configured for deployment on Netlify:

1. Push your repository to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically build and deploy the site

## Scripts

- `npm run dev` - Start development server with hot reload on localhost:3000
- `npm run build` - Build production version (generates static site to `/out` directory)
- `npm run lint` - Run ESLint code quality checks
- `npm run start` - Start production server (not used with static export)

**Build Pipeline:**
```bash
npm run build          # Build static site (next build)
npm run postbuild      # Generate sitemap.xml and robots.txt (next-sitemap)
```

**Note:** The site is configured for static export, so `npm run build` automatically generates static HTML files. The `npm run export` script is an alias and does the same thing.

## Customization

### Colors

The site uses a Chicago-inspired color scheme defined in [src/styles/globals.css](src/styles/globals.css) using OKLch color space:

```css
--color-chicago-red: oklch(0.58 0.2343 23.93)
--color-chicago-blue: oklch(0.73 0.1233 229.5)
```

These CSS variables are mapped to Tailwind classes in [tailwind.config.ts](tailwind.config.ts). Modify the CSS variables to change the theme globally. Dark mode is supported via the `.dark` class selector.

### Content

Add or modify content by editing Markdown files in the `content/` directory. Each file uses YAML frontmatter for metadata:

**Services** (`content/services/`):
```yaml
---
title: My Service
description: Service description
icon: chart-line
order: 1
---
```

**Projects** (`content/projects/`):
```yaml
---
title: Project Name
date: 2025-01-15
client: Client Name
industry: Industry Type
---
```

**Pages** (`content/pages/`):
```yaml
---
title: Page Title
description: Page description
---
```

After adding or modifying content, run `npm run build` to regenerate static pages.

### Components

Custom UI components can be added to `src/components/`. The project uses a shadcn/ui-inspired pattern with Radix UI and Tailwind CSS. New components should follow the existing patterns in button.tsx and card.tsx.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For inquiries about this website, please contact info@rovaniprojects.com.