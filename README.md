# Sekolah Karir — Landing Page Rekrutmen

Landing page rekrutmen Sekolah Karir yang memperkenalkan peluang kerja melalui daftar lowongan, informasi singkat, dan formulir lamaran demo. Proyek ini dibuat sebagai mini assignment Web Developer dengan tampilan responsif untuk desktop dan perangkat mobile.

## Fitur

- **Headline dan CTA utama** untuk mengarahkan pengunjung ke daftar lowongan.
- **Enam kartu lowongan** yang menampilkan perusahaan, status, posisi, lokasi, dan estimasi gaji.
- **Detail lowongan** yang dibuka melalui modal Apply, termasuk ringkasan posisi, tanggung jawab, dan kualifikasi.
- **Form lamaran demo** dengan validasi nama dan email serta konfirmasi simulasi.
- **Navigasi halaman** untuk menuju bagian Home, About, dan lowongan.
- **DotPattern dan animasi AOS** sebagai elemen visual.

## Tampilan responsif

- Kartu lowongan tersusun satu kolom pada layar kecil dan dua kolom pada layar desktop.
- Form modal menyesuaikan ukuran layar; field tampil satu kolom di layar kecil dan dua kolom di layar lebih lebar.
- Navigasi, tombol, dan tautan mendukung penggunaan mouse maupun layar sentuh.

## Teknologi

- React 18
- Vite
- Tailwind CSS
- AOS
- React Router

## Persyaratan

- Node.js
- npm

## Menjalankan proyek secara lokal

Clone repository, masuk ke folder proyek, lalu pasang dependensi:

```bash
npm install
```

Jalankan server pengembangan:

```bash
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal.

## Build produksi

Buat build produksi dengan:

```bash
npm run build
```

Untuk melihat hasil build secara lokal:

```bash
npm run preview
```

## Struktur komponen utama

| File | Kegunaan |
| --- | --- |
| `src/pages/Home.jsx` | Menyusun halaman utama. |
| `src/partials/HeroHome.jsx` | Headline dan CTA pembuka. |
| `src/partials/About.jsx` | Ringkasan Sekolah Karir. |
| `src/partials/Lowongan.jsx` | Kartu lowongan dan modal Apply. |
| `src/partials/Newsletter.jsx` | CTA penutup. |
| `src/partials/Header.jsx` dan `src/partials/Footer.jsx` | Navigasi halaman. |
| `src/components/ui/dot-pattern.jsx` | Latar berpola titik. |

## Catatan data dan formulir

Data posisi, deskripsi, kualifikasi, lokasi, dan kisaran gaji yang ditampilkan merupakan data contoh. Form Apply hanya simulasi: data tidak dikirim ke server atau disimpan. Untuk penggunaan produksi, hubungkan formulir ke backend atau layanan penerimaan lamaran dan gunakan informasi lowongan yang telah diverifikasi.

## Penggunaan AI

AI digunakan secara terbatas untuk membantu merapikan dokumentasi proyek. Pengembangan dan penyesuaian utama landing page dikerjakan secara mandiri.
