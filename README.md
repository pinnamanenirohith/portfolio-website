# Rohith Pinnamaneni — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

> Personal portfolio website for Rohith Pinnamaneni — CS (Cloud Native Engineering) student, Full Stack Developer, and President of the Student Activity Center at KL University.

---

## Live Demo

🔗 **[portfolio-website-seven-silk-89.vercel.app](https://portfolio-website-seven-silk-89.vercel.app)**

---

## About

Immersive dark portfolio with a premium editorial feel — inspired by Spencer Gabor-level interaction design. Multi-page architecture with cinematic animations, custom cursor, magnetic buttons, and scroll-linked parallax.

**Design philosophy:** Bottom-anchored hero with outrageously large Syne display type, film grain overlay, mouse parallax grid, word-reveal animations, and a marquee ticker. Product-website feel — not a single endless scroll.

---

## Pages

| Route | Description |
|---|---|
| `/` | Cinematic hero · Featured project · Leadership preview · Stack · CTA |
| `/projects` | All projects listing |
| `/projects/sac-platform` | SAC Council Management Platform case study with animated architecture diagram |
| `/experience` | Full leadership progression · Internships · Certifications · Education |
| `/contact` | Contact links |

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, static export) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first, no config file) |
| Animations | [Framer Motion 12](https://www.framer.com/motion/) |
| Fonts | Syne (display) · Inter (body) · JetBrains Mono (code) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Interaction Design

- **Custom cursor** — `mix-blend-difference` ring with spring physics, expands on hover
- **Magnetic buttons** — `useSpring` displacement on mouse proximity
- **Hero parallax** — scroll-linked fade/lift + mouse-driven grid background
- **Word reveals** — clip-path animation (`y: 108% → 0`) with custom easing
- **CSS marquee** — GPU-accelerated ticker, no JS
- **Film grain** — SVG `feTurbulence` overlay with 6-step keyframe animation
- **InView stagger** — all sections animate in as they enter the viewport
- **Animated diagram** — RBAC bars grow, architecture layers fade, feature grid scales on scroll

---

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx                    # Root layout, metadata, custom cursor
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Design tokens, grain, marquee keyframes
│   ├── not-found.tsx                 # Custom 404
│   ├── projects/
│   │   ├── page.tsx                  # Projects listing
│   │   └── sac-platform/
│   │       └── page.tsx              # SAC Platform case study
│   ├── experience/
│   │   └── page.tsx                  # Experience page
│   └── contact/
│       └── page.tsx                  # Contact page
├── components/
│   ├── graphics/
│   │   └── ERPDiagram.tsx            # Animated RBAC + architecture diagram
│   ├── layout/
│   │   ├── Navbar.tsx                # Sticky nav with Next.js Link routing
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx                  # Cinematic hero, bottom-anchored
│   │   ├── HomeFeatured.tsx          # Featured project teaser
│   │   ├── HomeLeadership.tsx        # Leadership preview
│   │   ├── HomeStack.tsx             # Technical skills grid
│   │   └── HomeCTA.tsx               # Call to action
│   └── ui/
│       ├── CustomCursor.tsx          # mix-blend-difference cursor
│       ├── MagneticButton.tsx        # Spring-physics magnetic button
│       └── Marquee.tsx               # CSS ticker
├── data/
│   └── content.ts                    # All site content — single source of truth
├── public/
│   └── favicon.svg
├── next.config.ts                    # output: "export", trailingSlash
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher

### Run locally

```bash
git clone https://github.com/pinnamanenirohith/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

Output is in `out/` as static HTML — deployable to any static host.

---

## Customisation

All content lives in [`data/content.ts`](data/content.ts). Update `personal`, `projects`, `leadership`, `internships`, `certifications`, and `skills` there — no component edits needed.

---

## Deployment

Auto-deployed on Vercel on every push to `main`.

**Deploy your own:**

1. Fork this repo
2. Import at [vercel.com/new](https://vercel.com/new)
3. Click Deploy — no config needed

---

## Contact

**Pinnamaneni Rohith Venkata Sai**

- Email: [pinnamanenirohith@gmail.com](mailto:pinnamanenirohith@gmail.com)
- LinkedIn: [linkedin.com/in/rohith-pinnamaneni](https://www.linkedin.com/in/rohith-pinnamaneni)
- GitHub: [github.com/pinnamanenirohith](https://github.com/pinnamanenirohith)

---

## License

MIT
