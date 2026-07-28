"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const articles = [
  {
    id: 1,
    category: "Kualitas Air",
    title: "Memahami Sistem Filtrasi Air: Apa yang Perlu Anda Ketahui",
    excerpt: "Tidak semua sistem filtrasi air bekerja sama. Artikel ini menjelaskan berbagai teknologi filtrasi secara objektif berdasarkan standar teknis.",
    readTime: "5 min baca",
    date: "15 Juli 2026",
    slug: "memahami-sistem-filtrasi-air",
  },
  {
    id: 2,
    category: "Udara Bersih",
    title: "Polutan Udara Dalam Ruangan: Fakta dan Cara Mengatasinya",
    excerpt: "Udara dalam ruangan bisa mengandung polutan lebih tinggi dari luar. Pelajari sumber-sumber polutan dan langkah pencegahan yang terbukti efektif.",
    readTime: "7 min baca",
    date: "10 Juli 2026",
    slug: "polutan-udara-dalam-ruangan",
  },
  {
    id: 3,
    category: "Pangan Sehat",
    title: "Panduan Memilih Pangan Organik untuk Keluarga",
    excerpt: "Memahami label, sertifikasi, dan prioritas belanja pangan sehat — panduan praktis yang bisa langsung diterapkan.",
    readTime: "6 min baca",
    date: "5 Juli 2026",
    slug: "panduan-memilih-pangan-organik",
  },
];

export default function ArticlesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#f9fafb] border-b border-gray-200" aria-label="Artikel Edukasi">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 pb-6 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
                Jurnal &amp; Edukasi
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2342] mt-1">
                Artikel Terkini
              </h2>
            </div>
            <Link
              href="/articles"
              className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e] hover:underline inline-flex items-center gap-1"
            >
              Lihat Semua Artikel <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <ScrollReveal key={art.id} delay={idx * 0.12} direction="up" distance={35}>
              <Link
                href={`/articles/${art.slug}`}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#2f6f5e] bg-emerald-50 px-2.5 py-1 rounded-md">
                      {art.category}
                    </span>
                    <span className="text-gray-400">{art.readTime}</span>
                  </div>

                  <h3 className="font-bold text-[#0a2342] text-lg leading-snug hover:text-[#2f6f5e] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>{art.date}</span>
                  <span className="font-bold text-[#0a2342] flex items-center gap-1">
                    Baca <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
