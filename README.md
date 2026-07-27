# Video Belajar

Platform pembelajaran online berbasis video course. React + TypeScript + Vite.

## Fitur

### Course Marketplace
- **Beranda** — Halaman utama dengan hero section, daftar kursus unggulan filterable by kategori, newsletter
- **Semua Produk** — Katalog lengkap kursus dengan pencarian, filter bidang studi/harga/durasi, sorting (termurah/termahal/rating), pagination
- **Detail Produk** — Banner, deskripsi, kartu instruktur, silabus accordion, review & rating, rekomendasi kursus terkait

### Learning Management
- **Kelas Saya** — Daftar kursus terdaftar dengan filter status (Semua/Sedang Berjalan/Selesai), pencarian, progress bar per kursus
- **Course Player** — Belajar interaktif: video pembelajaran, rangkuman, pre-test, quiz, final test. Navigasi next/prev antar materi, accordion daftar modul, review & rating setelah belajar
- **Sertifikat** — Preview dan download sertifikat kelulusan

### Checkout & Payment
- **Metode Pembayaran** — Pilih metode dari kategori (Transfer Bank, E-Wallet, Kartu Kredit), ringkasan pesanan
- **Pembayaran** — Virtual account info, ringkasan biaya (harga + admin fee), tombol bayar, panduan cara bayar accordion
- **Ganti Metode** — Ubah metode pembayaran sebelum transaksi selesai
- **Selesai Pembayaran** — Status sukses atau tertunda (manual toggle untuk debugging)

### Order Management
- **Pesanan** — Riwayat pesanan dengan filter tab (Semua/Menunggu/Berhasil/Gagal), pencarian, pagination

### User System
- **Login / Register** — Auth dengan Firebase Realtime DB, validasi password, opsi login Google (UI placeholder)
- **Profile** — Edit profil (nama, email, no HP, foto), persistent via Redux + localStorage

## Tech Stack

| Teknologi | Fungsi |
|---|---|
| React 19 | UI library |
| TypeScript | Type safety |
| Vite 8 | Build tool |
| Tailwind CSS 4 | Utility-first styling |
| Redux Toolkit | State management (auth) |
| TanStack React Query | Data fetching & caching |
| React Router 8 | Client-side routing |
| Axios | HTTP client |
| Firebase Realtime DB | Backend database |
| Headless UI | Accessible UI primitives |

## Routing

| Path | Halaman |
|---|---|
| `/` | Beranda |
| `/login` | Login |
| `/register` | Register |
| `/produk` | Semua Produk |
| `/produk/:id` | Detail Produk |
| `/produk/:id/metode` | Metode Pembayaran |
| `/produk/:id/pembayaran` | Pembayaran |
| `/produk/:id/ganti-metode` | Ganti Metode |
| `/produk/:id/pembayaran-selesai` | Status Pembayaran |
| `/pesanan` | Pesanan Saya |
| `/kelas` | Kelas Saya |
| `/course/:idCourse` | Belajar (course player) |
| `/sertifikat/:id` | Sertifikat |
| `/profile` | Profil |

## Struktur Proyek

```
src/
├── components/        # UI komponen reusable
│   ├── common/        # Button, Card, Footer, Pagination, dll
│   ├── course/        # ModuleAccordion, ReviewModal, screens (Video, Quiz)
│   └── layout/        # Layout, LayoutAuth, LayoutBeranda
├── features/          # Feature-based modul
│   ├── auth/          # Form auth components
│   ├── beranda/       # Hero overlay, newsletter
│   ├── course/        # Course player (types, utils, CourseHeader, Navigation)
│   ├── kelas/         # Kelas saya (sidebar, filter tabs, search, progress card)
│   ├── metode/        # Payment method selector & order summary
│   ├── pembayaran/    # Virtual account, payment summary, payment guide
│   ├── ganti-metode/  # Change payment method
│   ├── pesanan/       # Order list (sidebar, filter, search, order card)
│   ├── produk/        # Banner, instructor, syllabus, reviews, related, checkout
│   ├── profile/       # Profile header, form, sidebar
│   ├── selesai-pembayaran/ # Success & delayed payment cards
│   └── semuaProduk/   # Filter sidebar
├── hooks/             # useIsMobile
├── lib/               # Axios instance
├── pages/             # 14 halaman
├── services/api/      # 8 service modules (courses, categories, orders, dll)
└── store/             # Redux store + auth slice
```

## Scripts

```
npm run dev      — Start dev server
npm run build    — Type check + build
npm run preview  — Preview build
npm run lint     — ESLint
```

## API

Firebase Realtime Database REST API.

**Base URL:**
https://videobelajar-1a0b3-default-rtdb.asia-southeast1.firebasedatabase.app


## ENV

VITE_API_URL=https://videobelajar-1a0b3-default-rtdb.asia-southeast1.firebasedatabase.app
