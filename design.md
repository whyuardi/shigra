# Shigra Web — Design Document

> Project: `shigra-web`
> Status: In progress
> Owner: BGE Prambanan (Shigra product line)

---

## 1. Ringkasan Proyek

Shigra adalah ekosistem lifestyle **Mind, Body & Soul** yang dibangun di sekitar tiga pilar:

| Pilar | Fokus | Produk saat ini |
|---|---|---|
| **Air** | Air Purifier | (Segera Hadir — placeholder) |
| **Water** | Water Ionizer/Machine | **SM-S230XNA** (satu-satunya model yang ditampilkan) |
| **Food** | Organic Food & Healthy Lifestyle | (Segera Hadir — placeholder) |

Website ini **bukan storefront hard-selling**. Tujuannya adalah membangun **komunitas dan edukasi** di sekitar gaya hidup sehat, dengan produk hanya ditampilkan sebagai bagian dari ekosistem — bukan pusat dari narasi.

### Prinsip Non-Negosiabel

1. **Tidak ada klaim medis/kesehatan** yang tidak didukung bukti ilmiah dan regulasi (mengacu pada temuan BPOM RI soal Kangen Water — hindari klaim seperti "menyembuhkan", "detoks", "anti-kanker", dsb).
2. **Legalitas ditampilkan apa adanya.** Jika SNI/BPOM/hasil uji lab belum ada, tampilkan placeholder jujur: *"Dokumen resmi akan ditampilkan setelah proses sertifikasi/pengujian selesai"* — bukan badge yang menyiratkan sudah tersertifikasi.
3. **Kangen Water hanya referensi struktur/desain halaman**, bukan sumber konten, klaim, atau copy. Semua narasi ditulis ulang orisinal oleh tim Shigra.
4. **Satu model produk saja** (SM-S230XNA) ditampilkan di seluruh situs — tidak ada katalog multi-produk.

---

## 2. Tech Stack

| Layer | Pilihan |
|---|---|
| Framework | Next.js 16 (App Router) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS v4 |
| Komponen UI | Custom Tailwind / shadcn/ui primitives |
| Animasi | CSS Transform & Opacity Transitions |
| Font | Playfair Display (Serif editorial heading) & Inter (Sans body) |
| Deployment target | Infra BGE / Vercel |

---

## 3. Brand Identity & Color Palette

| Nama | Hex | Peran |
|---|---|---|
| Dark Navy Blue | `#0A2342` | Warna utama — teks berat, background gelap, navbar |
| Off-white / Cloud | `#F7F8FA` | Background utama, white space |
| Netral abu | `#64748B` | Body text sekunder |
| Aksen Hijau Elegan | `#2F6F5E` | CTA, ikon pilar, highlight (Deep Sage Green) |
