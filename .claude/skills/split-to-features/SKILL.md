---
name: split-to-features
description: Membaca file React besar, menganalisis modul, memecah kode menjadi komponen modular berbasis props, dan menulisnya ke direktori features/.
metadata:
  type: skill
  trigger: /split-to-features
---

# split-to-features

Custom Skill untuk Claude Code — memecah file React/TSX besar menjadi komponen-komponen kecil di folder `features/[namaModul]/components/`.

## Metadata

| Atribut       | Nilai                                                                   |
|---------------|-------------------------------------------------------------------------|
| **Nama**      | `split-to-features`                                                     |
| **Trigger**   | `/split-to-features <path>`                                             |
| **Tujuan**    | Memecah file React yang besar dan kompleks menjadi komponen modular     |
| **Output**    | Folder `features/[namaModul]/components/` dengan barrel exports         |

## Trigger

Skill ini dipanggil dengan:

```
/split-to-features src/pages/NamaFileBesar.tsx
```

Atau dengan path relatif/absolut lain yang menunjuk ke satu file React/TSX.

---

## Instruksi Eksekusi Agen

### Fase 0 — Persiapan & Validasi

1. **Terima argumen path** dari user. Path bisa relatif terhadap CWD atau absolut.
2. **Validasi file:**
   - Pastikan file tersebut ada dan dapat dibaca.
   - Jika tidak ditemukan, tampilkan error: `[ERROR] File tidak ditemukan: <path>`. Hentikan eksekusi.
3. **Validasi format:** Pastikan file memiliki ekstensi `.tsx`, `.jsx`, `.ts`, atau `.js`. Jika tidak, tampilkan error dan hentikan.
4. **Baca seluruh konten file** menggunakan `Read` tool.
5. Jika ukuran file terlalu besar (>2000 baris), lakukan pembacaan bertahap (chunked) untuk menjaga konteks.

### Fase 1 — Analisis Modul (Penentuan `[namaModul]`)

1. Analisis konten file untuk menentukan `[namaModul]` yang paling representatif, dengan urutan prioritas:
   - **Prioritas 1:** Nama folder dari path file (misal `src/pages/Produk.tsx` → `produk`).
   - **Prioritas 2:** Nama `export default function` atau `export const` utama dalam file.
   - **Prioritas 3:** Nama file tanpa ekstensi (fallback).
2. `[namaModul]` **WAJIB** menggunakan format **lowercase** dan **kebab-case** jika multi-kata.
3. Setelah ditentukan, tampilkan konfirmasi ke user:
   ```
   [INFO] Modul terdeteksi: <namaModul>
   [INFO] File sumber: <path>
   ```
4. Jika ragu dengan penentuan modul, tanyakan ke user secara singkat.

### Fase 2 — Identifikasi Komponen Anak (Sub-Components)

1. Analisis struktur JSX/TSX untuk mengidentifikasi bagian-bagian UI yang layak dipisah:
   - **Blok JSX besar** — bagian dengan >15-20 baris JSX di dalam satu return/render.
   - **Blok berulang** — pola JSX yang muncul lebih dari satu kali (daftar item, card, row, dll).
   - **Bagian yang memiliki state lokal** (`useState`, `useReducer`) yang bisa dienkapsulasi.
   - **Bagian yang menerima data via props/params** dan bisa dibuat murni presentasional.
   - **Fragment dengan banyak event handler** (`onClick`, `onChange`, `onSubmit`, dll.).
2. Setiap komponen yang teridentifikasi harus memenuhi kriteria:
   - Memiliki satu **tanggung jawab yang jelas** (Single Responsibility Principle).
   - Semua data dan fungsi yang dibutuhkan dioper melalui **Props** (TypeScript Interface).
   - **Tidak ada** ketergantungan langsung ke store/context global (props-only).
3. Buat daftar komponen anak yang akan dibuat, dengan nama yang deskriptif:
   ```
   [INFO] Komponen teridentifikasi:
     - ProdukHeader
     - ProdukGallery
     - ProdukInfo
     - ProdukActions
     - ProdukReviews
   ```
4. Tampilkan daftar ke user dan minta konfirmasi untuk melanjutkan. Jika user menolak, batalkan eksekusi.

### Fase 3 — Eksekusi Pemecahan (File System Write)

> **PENTING:** Semua operasi berikut WAJIB dieksekusi menggunakan tool yang tersedia (Write, Edit, Bash untuk mkdir), BUKAN hanya menampilkan kode di terminal.

#### 3a. Buat Struktur Folder

Gunakan `Bash` untuk membuat folder komponen:

```bash
mkdir -p "features/[namaModul]/components/[NamaKomponen1]"
mkdir -p "features/[namaModul]/components/[NamaKomponen2]"
...
```

#### 3b. Tulis File Komponen

Setiap komponen anak dengan Props Interface:

**Template `[NamaKomponen].tsx`:**

```tsx
import React from 'react';

// ================================================
// Interface Props — semua data dan fungsi dioper
// melalui props secara eksplisit
// ================================================
export interface [NamaKomponen]Props {
  /** Data yang ditampilkan (jelaskan tipe dan tujuannya) */
  data: /* tipe data */;
  /** Handler saat user mengklik/interaksi */
  onAction?: (/* params */) => void;
  /** Opsional: className tambahan */
  className?: string;
  /** Opsional: children */
  children?: React.ReactNode;
}

// ================================================
// Component
// ================================================
export const [NamaKomponen]: React.FC<[NamaKomponen]Props> = ({
  data,
  onAction,
  className,
  children,
}) => {
  // --- State & Hooks ---
  // (jika perlu, pastikan state lokal relevan untuk komponen ini)

  // --- Event Handlers ---
  const handleAction = (/* params */) => {
    onAction?.(/* params */);
  };

  // --- Render ---
  return (
    <div className={className}>
      {/* JSX konten */}
      {children}
    </div>
  );
};

[NamaKomponen].displayName = '[NamaKomponen]';
```

**Template `index.ts` (barrel export):**

```ts
export { [NamaKomponen], type [NamaKomponen]Props } from './[NamaKomponen]';
```

**Aturan penulisan:**

| Aturan | Keterangan |
|--------|------------|
| **Import React** | `import React from 'react'` — selalu disertakan (untuk JSX transform). |
| **Props Interface** | Gunakan `export interface XxxProps { ... }`. Tiap properti diberi JSDoc. |
| **Named Export** | `export const NamaKomponen: React.FC<Props> = (...) => { ... }`. |
| **displayName** | Set `NamaKomponen.displayName = 'NamaKomponen'` untuk debugging. |
| **Default Props** | Jika ada default value, gunakan default parameter di destructuring, bukan `defaultProps`. |
| **Tidak ada default export** | Hanya **Named Export** — `export default` dilarang. |

#### 3c. Perbarui / Buat File Parent

1. **Baca file parent asli** (file input).
2. **Tulis ulang file parent** menjadi file yang bersih dengan:
   - Import semua sub-komponen dari barrel file masing-masing.
   - Mengganti blok JSX besar dengan pemanggilan komponen yang sudah dibuat.
   - `[namaKomponen]` dioper melalui props — semua event handler didefinisikan di parent.
3. **Simpan sebagai file baru** di `src/pages/` (nama yang sama, atau `.refactored.tsx` jika ingin aman).
4. **Opsional:** File parent asli bisa di-backup dengan rename.

### Fase 4 — Verifikasi

Setelah semua file ditulis, lakukan:

1. **Cek keberadaan file:**
   ```bash
   ls -R "features/[namaModul]/components/"
   ```
2. **Cek impor:** Pastikan semua impor di parent mengarah ke barrel export (`index.ts`).
3. **Cek tipe** (jika proyek menggunakan TypeScript):
   ```bash
   npx tsc --noEmit 2>&1 | head -50
   ```
4. Jika ada error impor atau tipe, perbaiki segera.
5. Jika semua OK, tampilkan ringkasan:
   ```
   ✅ Split selesai!
   Modul        : <namaModul>
   Komponen     : N (daftar singkat)
   Parent       : <path file parent>
   Folder       : features/<namaModul>/components/
   ```

### Fase 5 — Error Handling & Rollback

1. **Jika error saat write:** Hentikan, beri tahu user, dan jangan lanjut ke komponen berikutnya.
2. **Jika TypeScript error:** Tampilkan error dan tawarkan perbaikan otomatis.
3. **Jika user cancel:** Hentikan semua operasi. Folder yang sudah terlanjur dibuat tetap ada (untuk inspeksi manual).
4. **Jika ada error setelah partial write:**
   - Informasikan user bahwa split belum selesai.
   - Tawarkan untuk melanjutkan dari posisi terakhir jika dipanggil ulang.

---

## Workflow Otomatis

Ketika skill ini dipanggil, agen WAJIB mengeksekusi seluruh rangkaian berikut secara otomatis tanpa interupsi yang tidak perlu:

```
1. Baca file input
2. Tentukan `[namaModul]`  ───────────────────────┐
3. Analisis & identifikasi komponen anak            │→ Lakukan otomatis
4. Tampilkan konfirmasi ke user                     │   tanpa jeda
5. Buat folder dan tulis file (write ke disk)       │
6. Perbarui file parent                              │
7. Verifikasi dan tampilkan hasil ──────────────────┘
```

**Prinsip:** Skill ini bersifat **agentic dan eksekusional** — Claude Code harus langsung bertindak (create, write, edit, mkdir), bukan sekadar menyarankan kode atau menampilkan output teks. Semua penulisan file dilakukan dengan **Write tool** atau **Edit tool**, dan pembuatan folder dengan **Bash tool**.

---

## Contoh Skenario

### Input

```
/split-to-features src/pages/Produk.tsx
```

### Output Agen

```
🔍 Membaca file: src/pages/Produk.tsx ...
📦 Modul terdeteksi: produk

📋 Komponen yang akan dipisah:
  1. ProductHeader      — header dengan judul & navigasi
  2. ProductGallery     — galeri gambar produk
  3. ProductInfo        — detail informasi produk (harga, deskripsi)
  4. ProductActions     — tombol aksi (beli, wishlist, share)
  5. ProductReviews     — daftar review & rating

Lanjutkan? (Y/n)
> Y

📁 Membuat struktur folder...
✅ features/produk/components/ProductHeader/
✅ features/produk/components/ProductGallery/
✅ features/produk/components/ProductInfo/
✅ features/produk/components/ProductActions/
✅ features/produk/components/ProductReviews/

✍️  Menulis komponen...
✅ ProductHeader.tsx + index.ts
✅ ProductGallery.tsx + index.ts
✅ ProductInfo.tsx + index.ts
✅ ProductActions.tsx + index.ts
✅ ProductReviews.tsx + index.ts

🔄 Memperbarui parent: src/pages/Produk.tsx

🔎 Verifikasi...
✅ TypeScript OK

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Split selesai!
   Modul    : produk
   Komponen : 5 (ProductHeader, ProductGallery, ProductInfo, ProductActions, ProductReviews)
   Parent   : src/pages/Produk.tsx
   Folder   : features/produk/components/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Catatan Tambahan

- **TypeScript Strict:** Semua Props Interface harus eksplisit — hindari `any`.
- **DRY:** Jangan membuat komponen jika hanya digunakan sekali dan sederhana (<10 baris).
- **Konsistensi:** Gunakan konvensi penamaan yang konsisten dengan kode yang sudah ada di proyek.
- **Modularitas:** Komponen harus bisa dipindahkan tanpa mengubah fungsionalitas — tidak ada ketergantungan implisit ke parent scope.
- **Backup Aman:** Jika file parent diubah, Claude Code membuat backup dengan menambahkan ekstensi `.bak` atau `.original` sebelum modifikasi.
