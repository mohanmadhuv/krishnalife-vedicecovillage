# Krishna Life — Vedic Ecovillage

Marketing site for Krishna Life, a Vedic ecovillage taking shape in Tennessee.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Inter](https://rsms.me/inter/) via `next/font/google`

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Structure

- `src/app/layout.tsx` — root layout: font, `<Navbar />`, page metadata
- `src/app/page.tsx` — homepage content (hero + Life in the Village)
- `src/components/` — `Navbar`, `VillageLife`
- `src/app/globals.css` — design tokens and shared text styles (`h1`–`h3`, `.subtitle`, `.p1`/`.p2`, `.link`)
