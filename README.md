# Outreach boilerplate (stack only)

Minimal **Next.js 16** (App Router) + **Tailwind CSS v4** + TypeScript. Remote images allow `images.unsplash.com` via `next.config.ts`.

## Client demos

Each business under [`../projects/`](../projects/) is a **standalone** site: its own information architecture, visual system, and copy. This folder is not the shared UI — only the toolchain pattern.

## Commands

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` in Vercel for correct `sitemap.xml` / `robots.txt` URLs.

## Contact API

`POST /api/contact` accepts JSON `{ name, email, phone?, message }` and returns `{ ok: true }` (wire to email/CRM in production).
