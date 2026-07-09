# Aspire Homepage — Next.js + Tailwind Sample

A migration sample replicating three sections of https://aspireapp.com/:

1. **Hero / header** — announcement bar, headline, email capture, logo marquee
2. **Everything you need to grow your business** — 6-card feature grid
3. **Hear it first from our customers** — interactive testimonial slider

## Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3

## Run
```bash
npm install
npm run dev
# http://localhost:3000
```

## Structure
```
src/
  app/
    layout.tsx      # root layout, Inter font
    page.tsx        # composes the 3 sections
    globals.css     # tailwind + reduced-motion
  components/
    Hero.tsx        # server component
    Features.tsx    # server component
    Testimonials.tsx# client component (slider state)
  data/
    home.ts         # all copy + image URLs (maps to Sanity later)
```

## Migration notes
- Content is isolated in `src/data/home.ts` so it maps cleanly onto Sanity
  documents/GROQ queries when you wire up the CMS.
- Images use remote URLs from the Webflow CDN with `unoptimized`. For
  production, move assets into Sanity's CDN or `/public` and drop `unoptimized`
  to get `next/image` optimization.
- Only `Testimonials` is a client component; Hero and Features stay server
  components (no JS shipped for them).
