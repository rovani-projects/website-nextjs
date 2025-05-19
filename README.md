# _Rovani Projects_ - Consultancy Website

A modern, responsive website for _Rovani Projects_ consultancy built with Next.js, TypeScript, Tailwind CSS, and Claude Code. This site showcases our business services, projects, and company information through a clean, Chicago-inspired design.

## Features

- 📱 Fully responsive design optimized for all device sizes
- 🚀 Fast static site generation for optimal performance
- 📝 Content management through Markdown files
- 🎨 Chicago-inspired color scheme and design elements
- 📊 Showcases services, projects, and company information
- 📬 Netlify form integration for contact submissions

## Tech Stack

- **Framework**: Next.js (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Content**: Markdown with gray-matter and remark
- **Components**: Custom UI components with shadcn/ui integration
- **Icons**: Lucide React
- **Deployment**: Netlify

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

- Node.js 18.x or later
- npm

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

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run export` - Generate static site output
- `npm run lint` - Run ESLint
- `npm run postbuild` - Generate sitemap

## Customization

### Colors

The site uses a Chicago-inspired color scheme defined in `src/styles/globals.css`. You can customize these colors by modifying the CSS variables.

### Content

Add or modify content by editing the Markdown files in the `content/` directory.

### Components

Custom UI components can be added to `src/components/`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For inquiries about this website, please contact projects@rovani.net.