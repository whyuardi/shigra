"use client";

import Link from "next/link";
import { Heart, Droplets, MapPin, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Heart,
    num: "500+",
    unit: "Penerima Manfaat / Bulan",
    title: "Program Makan Bergizi",
    desc: "Menyediakan santapan bergizi seimbang setiap bulan untuk masyarakat yang membutuhkan di wilayah binaan.",
  },
  {
    icon: Droplets,
    num: "120",
    unit: "Keluarga Terbantu",
    title: "Subsidi Air Bersih",
    desc: "Program subsidi penyediaan fasilitas dan filtrasi air bersih bagi keluarga prasejahtera.",
  },
  {
    icon: MapPin,
    num: "8",
    unit: "Desa Binaan",
    title: "Pendampingan Desa Sehat",
    desc: "Mendampingi warga desa terpilih dalam membangun sanitasi dan pengelolaan air bersih berkelanjutan.",
  },
];

export default function SocialImpactTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100" aria-label="Social Impact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-6 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              Tanggung Jawab Sosial
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2342] mt-1">
              Dampak Nyata Untuk Masyarakat
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md">
            Program sosial Shigra bukan kegiatan promosi — ini adalah bagian inti dari alasan utama mengapa ekosistem Shigra dibangun.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map(({ icon: Icon, num, unit, title, desc }) => (
            <div key={title} className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#2f6f5e] shadow-sm">
                  <Icon size={20} />
                </div>
                <span className="text-xs font-medium text-gray-500">{unit}</span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#0a2342] mb-1">{num}</div>
                <h3 className="font-bold text-[#0a2342] text-base mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-[#0a2342] text-white rounded-2xl">
          <div>
            <h3 className="text-xl font-bold mb-1">Ingin Tahu Lebih Lanjut Soal Program Sosial?</h3>
            <p className="text-white/70 text-sm">Pelajari detail pelaksanaan dan transparansi laporan dampak sosial Shigra.</p>
          </div>
          <Link href="/social-impact" className="btn-accent shrink-0 text-xs py-3 px-6">
            Pelajari Program Sosial <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
