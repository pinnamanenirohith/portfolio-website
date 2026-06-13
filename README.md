# Rohith Pinnamaneni — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

> Personal portfolio website for Rohith Pinnamaneni — CS (Cloud Native Engineering) student, Full Stack Developer, and President of the Student Activity Center at KL University.

---

## Live Demo

**[rohithpinnamaneni.vercel.app](https://rohithpinnamaneni.vercel.app)**

---

## About

Premium dark portfolio with an editorial, immersive feel. Multi-page architecture with a cinematic homepage, scroll-driven case study narratives, and Apple/Linear-quality micro-interactions — no gimmicks, no lag.

**Design philosophy:** Bottom-anchored hero with large Syne display type, film grain overlay, spotlight effect, scroll-linked parallax, and word-reveal animations. Information architecture prioritises storytelling over dashboard-style layouts.

---

## Pages

| Route | Description |
|---|---|
| `/` | Cinematic hero · Featured project (editorial) · Leadership preview · CTA |
| `/work` | Projects listing — editorial row layout |
| `/work/sac-platform` | SAC Platform — 7-chapter scroll-driven case study |
| `/work/smart-farming` | Smart Farming Advisor case study |
| `/leadership` | Full leadership progression · Internships · Certifications · Education |
| `/contact` | Contact links |

Old routes (`/projects`, `/experience`) redirect to the new URLs.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, static export) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first, no config file) |
| Animations | [Framer Motion 12](https://www.framer.com/motion/) |
| Fonts | Syne (display) · Inter (body) · JetBrains Mono (mono) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Interaction Design

- **Spotlight** — zero-lag radial glow that follows the cursor; implemented via direct CSS custom property writes (`--sx`, `--sy`) on `mousemove` — no React state, no spring, no repaints
- **Button feedback** — `whileHover: y: -1.5px` lift + `whileTap: scale(0.96)` press with stiffness 900 spring; feels tactile and immediate
- **Navbar underlines** — pure CSS `::after` slide-in at 160ms, no JS
- **Scroll parallax** — `useScroll` + `useTransform` on hero and featured section titles
- **Word reveals** — overflow-clip animation (`y: 108% → 0`) with custom cubic-bezier easing
- **InView stagger** — sections animate in as they enter the viewport
- **Chapter narrative** — SAC case study uses ghost chapter numbers (28vw) and scroll-triggered reveals per chapter
- **RBAC visualiser** — animated horizontal bars that draw left-to-right on scroll
- **Film grain** — SVG `feTurbulence` overlay with 6-step keyframe animation, GPU-composited
- **CSS marquee** — GPU-accelerated ticker, zero JS

---

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx                    # Root layout, metadata
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Design tokens, grain, marquee keyframes
│   ├── not-found.tsx
│   ├── work/
│   │   ├── page.tsx                  # Projects listing
│   │   ├── sac-platform/
│   │   │   └── page.tsx              # 7-chapter scroll case study
│   │   └── smart-farming/
│   │       └── page.tsx              # Smart Farming case study
│   ├── leadership/
│   │   └── page.tsx                  # Leadership, internships, certifications
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/                     # Redirect stubs → /work
│   └── experience/                   # Redirect stub → /leadership
├── components/
│   ├── graphics/
│   │   ├── ERPDiagram.tsx            # Animated architecture diagram
│   │   └── FarmingCard.tsx
│   ├── layout/
│   │   ├── Navbar.tsx                # Sticky nav, scroll-aware
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx                  # Cinematic hero with spotlight
│   │   ├── HomeFeatured.tsx          # Editorial featured project
│   │   ├── HomeLeadership.tsx        # Leadership pull-quote + timeline
│   │   └── HomeCTA.tsx
│   └── ui/
│       ├── MagneticButton.tsx        # Tactile lift/press button
│       └── Marquee.tsx               # CSS ticker
├── hooks/
│   └── useSpotlight.ts               # Zero-lag cursor spotlight hook
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
- LinkedIn: [linkedin.com/in/rohith-venkata-sai-pinnamaneni-38807a2b2](https://www.linkedin.com/in/rohith-venkata-sai-pinnamaneni-38807a2b2)
- GitHub: [github.com/pinnamanenirohith](https://github.com/pinnamanenirohith)

---

## License

This project is open source and available under the [MIT License](LICENSE).
