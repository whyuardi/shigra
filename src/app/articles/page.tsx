import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Artikel & Edukasi",
  description:
    "Konten edukasi seputar kualitas udara, air bersih, dan pangan sehat dari komunitas Shigra. Informasi berbasis fakta, bukan klaim pemasaran.",
};

const categories = ["Semua", "Kualitas Air", "Udara Bersih", "Pangan Sehat", "Gaya Hidup", "Regulasi"];

const articles = [
  {
    id: 1,
    category: "Kualitas Air",
    title: "Memahami Sistem Filtrasi Air: Apa yang Perlu Anda Ketahui",
    excerpt:
      "Tidak semua sistem filtrasi air bekerja sama. Artikel ini menjelaskan berbagai teknologi filtrasi di pasaran secara objektif berdasarkan standar teknis.",
    readTime: "5 min baca",
    date: "15 Juli 2026",
    slug: "memahami-sistem-filtrasi-air",
  },
  {
    id: 2,
    category: "Udara Bersih",
    title: "Polutan Udara Dalam Ruangan: Fakta dan Cara Mengatasinya",
    excerpt:
      "Udara dalam ruangan bisa mengandung polutan lebih tinggi dari udara luar. Pelajari sumber-sumber polutan dan langkah pencegahan teruji.",
    readTime: "7 min baca",
    date: "10 Juli 2026",
    slug: "polutan-udara-dalam-ruangan",
  },
  {
    id: 3,
    category: "Pangan Sehat",
    title: "Panduan Memilih Pangan Organik: Tips Praktis untuk Keluarga",
    excerpt:
      "Memahami label, sertifikasi, dan prioritas belanja pangan sehat untuk keluarga tanpa terjebak gimik pemasaran.",
    readTime: "6 min baca",
    date: "5 Juli 2026",
    slug: "panduan-memilih-pangan-organik",
  },
  {
    id: 4,
    category: "Regulasi",
    title: "Memahami Regulasi BPOM untuk Produk Olah Air Minum",
    excerpt:
      "Penjelasan aturan resmi BPOM mengenai izin edar dan batas klaim produk olah air minum di Indonesia.",
    readTime: "8 min baca",
    date: "1 Juli 2026",
    slug: "regulasi-bpom-produk-air-minum",
  },
  {
    id: 5,
    category: "Gaya Hidup",
    title: "Hidrasi dan Kebutuhan Cairan Harian: Sains vs Mitos",
    excerpt:
      "Mengkaji mitos umum hidrasi dan apa yang disampaikan oleh riset medis terkini secara proporsional.",
    readTime: "5 min baca",
    date: "25 Juni 2026",
    slug: "hidrasi-fakta-vs-mitos",
  },
  {
    id: 6,
    category: "Kualitas Air",
    title: "Membaca Laporan Hasil Uji Kualitas Air Laboratorium",
    excerpt:
      "Panduan membaca parameter penting dalam laporan hasil uji laboratorium independen secara tepat.",
    readTime: "10 min baca",
    date: "20 Juni 2026",
    slug: "cara-membaca-hasil-uji-air",
  },
];

export default function ArticlesPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a2342]">
      {/* Hero Header */}
      <section className="pt-20 pb-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              Artikel &amp; Edukasi
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] mt-2">
              Pengetahuan Adalah Dasar Keputusan Sehat
            </h1>
            <p className="text-gray-600 text-base mt-3 max-w-2xl leading-relaxed">
              Seluruh sajian edukasi didasarkan pada data terverifikasi dan regulasi resmi — bukan janji manis pemasaran.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Categories */}
          <ScrollReveal direction="up" distance={20}>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                    idx === 0
                      ? "bg-[#0a2342] text-white border-[#0a2342]"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <ScrollReveal key={art.id} delay={idx * 0.08} direction="up" distance={30}>
                <article className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4 h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4 text-xs">
                      <span className="font-semibold text-[#2f6f5e] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                        {art.category}
                      </span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <Clock size={12} /> {art.readTime}
                      </span>
                    </div>
                    <h2 className="font-bold text-[#0a2342] text-lg leading-snug hover:text-[#2f6f5e] transition-colors">
                      {art.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{art.excerpt}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>{art.date}</span>
                    <Link href={`/articles/${art.slug}`} className="font-bold text-[#0a2342] hover:text-[#2f6f5e] inline-flex items-center gap-1">
                      Baca <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
