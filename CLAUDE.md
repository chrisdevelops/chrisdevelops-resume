# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5 resume/portfolio application built with React 19, TypeScript, and Tailwind CSS 4. It uses the App Router architecture and is configured with Turbopack for faster development builds. The application is configured for static export (`output: "export"` in next.config.ts:4).

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm start

# Lint and check code with Biome
npm run lint

# Format code with Biome
npm run format
```

## Code Quality & Tooling

This project uses **Biome** (not ESLint/Prettier) for linting and formatting:
- Configured with Next.js and React recommended rules in `biome.json:26-28`
- 2-space indentation
- Auto-organizes imports on save
- Run `npm run lint` to check for issues
- Run `npm run format` to auto-format code

## UI Component System

The project is configured for **shadcn/ui** components:
- Style: "new-york" variant
- Components located in `@/components/ui` (via path alias)
- Utilities in `@/lib/utils`
- Uses `cn()` utility from `src/lib/utils.ts:4` for className merging
- Tailwind CSS variables enabled
- Base color: slate
- Icon library: lucide-react

When adding shadcn components, use the shadcn CLI with the configured aliases.

## Path Aliases

Configure imports using these TypeScript path aliases (tsconfig.json:21-23):
- `@/*` → `./src/*`

shadcn-specific aliases (components.json:14-19):
- `@/components` → components directory
- `@/ui` → UI components
- `@/lib` → utilities and helpers
- `@/hooks` → React hooks

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout with Geist fonts and ThemeProvider
│   ├── page.tsx      # Home page (Navbar, Hero, Resume, Footer)
│   └── globals.css   # Global styles, Tailwind directives, and custom theme
├── components/       # React components
│   ├── ui/           # shadcn/ui components (card, badge, separator)
│   ├── hero.tsx      # Hero section with animated gradient text
│   ├── navbar.tsx    # Navigation bar component
│   ├── resume.tsx    # Main resume content with scroll animations
│   ├── footer.tsx    # Footer component
│   ├── particles.tsx # Particle background effect
│   └── theme-provider.tsx # next-themes wrapper
└── lib/
    └── utils.ts      # Utility functions (cn() for classNames)
```

## Animations and Accessibility

The application uses Motion (formerly Framer Motion) for animations with comprehensive accessibility support:
- All animations respect `prefers-reduced-motion` media query
- Motion variants check `window.matchMedia('(prefers-reduced-motion: reduce)')` to adjust timing and disable transforms
- Reduced motion: shorter durations (0.15-0.2s) and opacity-only transitions
- Normal motion: full animations with y-transforms and stagger effects
- See `src/components/resume.tsx:11-13` and `src/components/hero.tsx:7-9` for implementation patterns

## Styling and Theming

The project uses Tailwind CSS 4 with a custom pastel color theme:
- Custom theme variables defined in `src/app/globals.css:7-39` using OKLCH color space
- Dark mode support via next-themes with class-based switching
- Custom pastel utility classes for colors: pink, cyan, purple, coral, mint, lavender, yellow
- Utilities available in text, background, and border variants (e.g., `text-pastel-pink`, `bg-pastel-cyan`)
- Geist Sans and Geist Mono fonts loaded via next/font in layout
- Custom radius values and responsive design patterns

## Technologies

- **Framework**: Next.js 15.5 with App Router and Turbopack
- **React**: v19.1.0 with React Server Components enabled
- **Styling**: Tailwind CSS 4 with tw-animate-css
- **Animations**: Motion (formerly Framer Motion) v12
- **Themes**: next-themes v0.4.6 for light/dark mode switching
- **UI Components**: shadcn/ui with lucide-react icons
- **Fonts**: Geist and Geist Mono via next/font

## Design System Integration

This project includes integration with a design workflow system (`.cursor/rules/design.mdc`) for creating standalone HTML prototypes:
- Design iterations are saved to `.superdesign/design_iterations/`
- Uses Flowbite as base UI library for prototypes
- Follows a structured workflow: Layout → Theme → Animation → HTML generation
- Prototypes are separate from the main Next.js application
