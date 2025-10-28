# Gazaporto — Portfolio

Portfolio pribadi Gaza Al Ghozali Chansa. Dibangun dengan Vite + React + TypeScript + Tailwind CSS + shadcn/ui, dilengkapi animasi halus via Framer Motion dan routing dengan React Router.

## Fitur

- Halaman: `Home`, `Projects`, `Certifications`, `Blogs`, `Social`.
- Sidebar untuk desktop dan Bottom Navigation untuk mobile.
- Animasi transisi halaman dan komponen (`framer-motion`).
- Toggle tema terang/gelap di navigasi bawah.
- Komponen UI modern dari `shadcn/ui` dan ikon `lucide-react`.
- Responsif dan mobile-first.

## Teknologi

- Vite, React, TypeScript
- Tailwind CSS, shadcn/ui
- Framer Motion, React Router
- TanStack Query (react-query)

## Prasyarat

- Node.js v18+ dan npm

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Aplikasi akan tersedia di `http://localhost:8081/` (sesuai konfigurasi Vite). Gunakan perangkat mobile atau devtools untuk melihat Bottom Navigation (`md:hidden`).

## Build & Preview

```bash
npm run build
npm run preview
```

## Scripts NPM

- `dev` — menjalankan server pengembangan Vite.
- `build` — build produksi.
- `preview` — menjalankan server preview hasil build.
- `lint` — menjalankan ESLint.

## Struktur Proyek

```
src/
  components/       // Komponen UI (Sidebar, BottomNavigation, dll.)
  pages/            // Halaman (Index, Projects, Certifications, Blogs, Social, Admin)
  hooks/            // Hooks kustom
  lib/              // Utilitas umum
  main.tsx          // Entrypoint React
```

Alias path `@/*` dikonfigurasi di `tsconfig.json` untuk impor berbasis root.

## Deployment

Proyek dapat dideploy ke platform seperti Vercel, Netlify, atau GitHub Pages.
- Vercel: import repo, set framework = Vite, lalu deploy.
- Netlify: build command `npm run build`, publish directory `dist`.

## Kredit

Ikon oleh `lucide-react`. Komponen UI oleh `shadcn/ui`. Desain dan implementasi oleh Gaza Al Ghozali Chansa.
