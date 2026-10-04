# Prasanna M — Portfolio

A premium, dark/electric-blue developer portfolio for Prasanna M built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Identity & Configuration

1. **Identity & Links**
   - `app/layout.tsx` — site metadata, keywords, and OpenGraph.
   - `components/Navbar/Navbar.tsx`, `components/Footer/Footer.tsx` — "PM" monogram, "Prasanna M", and `SOCIAL_LINKS` (GitHub, LinkedIn, resume path).
   - `components/Contact/Contact.tsx` — email address, phone, and social links.

2. **Real projects**
   - `data/projects.ts` — replace the four placeholder entries with your real projects. Set `featured: true` on exactly one to control the large showcase slot at the top of the Projects section.
   - Drop real screenshots into `public/images/` and point each project's `image` field at them (replacing the generated placeholder SVGs).

3. **Resume**
   - Add your resume PDF to `public/resume.pdf` (the Navbar "Resume" button already links to `/resume.pdf`).

4. **Skills**
   - `data/skills.ts` — add, remove, or re-categorize technologies. Categories are `frontend`, `backend`, `database`, `tools`.

5. **About stats**
   - `data/about.ts` — currently qualitative placeholders ("Growing", "Full-Stack", "Ongoing", "Yes") since no real numbers were provided. Swap in real figures once you have them.

6. **Experience / roadmap**
   - `data/timeline.ts` — update as your focus areas shift. `status` accepts `"done" | "active" | "upcoming"`.

7. **Contact form backend**
   - `app/api/contact/route.ts` currently validates input and returns success without sending anything. Wire it up to an email provider (Resend, SendGrid, Nodemailer, etc.) inside the marked comment block.
   - Copy `.env.example` to `.env.local` and fill in real values — never commit `.env.local`.

## Project structure

```
app/
  layout.tsx        — root layout, fonts, metadata
  page.tsx           — composes all sections
  globals.css        — design tokens & global styles
  api/contact/route.ts

components/
  Navbar/  Hero/  About/  Skills/  Projects/  Experience/  Contact/  Footer/
  ui/                — shared primitives (Container, Reveal, SectionHeading, AmbientGlow, MotionProvider)

data/
  navigation.ts  skills.ts  projects.ts  timeline.ts  about.ts

lib/
  utils.ts  types.ts
```

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load via a `<link>` tag in `app/layout.tsx` rather than `next/font/google`, so the production build doesn't require network access to Google Fonts at build time — only the visitor's browser needs it at runtime.
- Animations respect `prefers-reduced-motion` automatically via Framer Motion's `MotionConfig`.
- Verified: `tsc --noEmit`, `eslint .`, and `next build` all pass clean.
