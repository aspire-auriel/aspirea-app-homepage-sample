# Changelog

## v2.0.0
Aspire homepage sample — Hero, Features, and Testimonials slider replicated
in Next.js 15 + TypeScript + Tailwind.

Included in this version:
- Hero with mint-green box using the `home-01` background image, product image
  vertically centered, and a compact near-black button with green
  (`rgb(190,255,207)`) label text.
- Full-bleed, edge-to-edge customer logo marquee.
- "Everything you need to grow your business" — six flat `#FAFAFA` cards,
  near-black titles, muted slate description text.
- "Hear it first from our customers" — testimonial slider with portrait card,
  brand logo, black stats, and "Read the case study" link. Bottom pager dots
  only (no top dots).
- Fully responsive at 375px (mobile) and 1440px (desktop): email bar stacks on
  mobile, hero padding scales down, testimonial edge-chevrons hide on mobile and
  move inline beside the dots.
- Fixed: duplicate React `key` on the stats map (labels repeat, so keyed on
  index instead).
- Next.js pinned to a patched 15.5.x (resolves CVE-2025-66478).
- Verified with a production build (`npm run build`) — compiles clean.

Content lives in `src/data/home.ts` and design tokens in `tailwind.config.ts`
so both map cleanly onto a future Sanity + Brand 2.0 migration.

## v2.1.0
- Added `.gitignore` (excludes node_modules, .next, .vercel, env files) so the
  project is ready to push to GitHub and deploy on Vercel.
