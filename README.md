# Subathira Rajavel — Portfolio

Personal portfolio for Subathira Rajavel, biomedical engineer, researcher and educator.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · GSAP 3 (ScrollTrigger, SplitText, DrawSVG) · `@gsap/react`

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                     |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the dev server             |
| `npm run build`     | Production build                 |
| `npm run start`     | Serve the production build       |
| `npm run lint`      | ESLint (Next.js core-web-vitals) |
| `npm run typecheck` | TypeScript, no emit              |

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the deployed domain (used for metadata, sitemap and robots.txt).

## Folder structure

```
subathira-portfolio/
├── public/
│   └── Subathira-Rajavel-CV.pdf     # downloadable CV
├── src/
│   ├── app/                         # App Router: routes, metadata, global styles
│   │   ├── globals.css              # Tailwind v4 theme tokens + animation pre-states
│   │   ├── icon.svg                 # favicon
│   │   ├── layout.tsx               # fonts, metadata, navbar/footer, scroll animations
│   │   ├── not-found.tsx
│   │   ├── page.tsx                 # composes the page from sections
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── assets/fonts/                # self-hosted Fraunces variable font
│   ├── components/
│   │   ├── animations/              # client-side GSAP components
│   │   │   ├── EcgTrace.tsx         # self-drawing ECG signature line
│   │   │   └── ScrollAnimations.tsx # data-attribute driven scroll effects
│   │   ├── layout/                  # Navbar, Footer
│   │   ├── sections/                # one file per page section
│   │   └── ui/                      # Button, Container, SectionHeading, Tag, Icons
│   ├── config/site.ts               # site metadata + navigation
│   ├── data/                        # ALL content lives here (edit these to update the site)
│   ├── hooks/                       # useActiveSection, useScrolled
│   ├── lib/                         # gsap setup, fonts, utils (cn)
│   └── types/                       # shared TypeScript interfaces
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Editing content

Every word on the site comes from `src/data/*.ts`, typed by `src/types/index.ts`:

- `profile.ts` — name, headline, objective, contact details, hero stats, strengths, hobbies
- `experience.ts` — roles shown on the timeline
- `projects.ts` — set `featured: true` to show a project as a large dark card
- `publications.ts`, `education.ts`, `skills.ts`, `training.ts`

To replace the CV, overwrite `public/Subathira-Rajavel-CV.pdf` (or change `resumeUrl` in `profile.ts`).

> **To do:** add the full LinkedIn profile URL in `src/data/profile.ts` (the CV only lists the name, so it currently links to a LinkedIn search).

## Animations

GSAP plugins are registered once in `src/lib/gsap.ts`. Section components stay as server components and opt into motion with data attributes handled by `ScrollAnimations`:

| Attribute                 | Effect                                        |
| ------------------------- | --------------------------------------------- |
| `data-reveal`             | Fade and rise when scrolled into view         |
| `data-timeline` + `data-timeline-progress` | Scroll-linked progress line  |
| `data-count="9.2"`        | Number counts up (`data-decimals` for precision) |
| `data-parallax="-18"`     | Vertical drift while crossing the viewport    |

All motion runs inside `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`. Visitors who prefer reduced motion, or have JavaScript disabled, see all content immediately.

## Design

- **Palette:** warm paper `#f5f2eb`, ink `#15181b`, signal red `#c9442b` (from an ECG trace)
- **Type:** Fraunces (display serif), Geist Sans (body), Geist Mono (labels)
- Tokens live in the `@theme` block of `src/app/globals.css`.

## Deploying

The site is fully static and deploys as-is to Vercel: import the repository, set `NEXT_PUBLIC_SITE_URL`, and deploy.
