import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Social Impact",
  description:
    "Program sosial Shigra: makan gratis, subsidi air bersih, dan komunitas binaan desa. Komitmen nyata untuk masyarakat Indonesia.",
};

const programs = [
  {
    icon: Heart,
    num: "500+",
    subtitle: "Makan Bergizi Bulanan",
    title: "Program Edukasi & Pangan Bergizi",
    desc: "Menyediakan santapan bergizi seimbang setiap bulan untuk masyarakat yang membutuhkan di sekitar wilayah kerja komunitas Shigra.",
    detail: "Bekerja sama dengan petani organik lokal untuk memastikan kualitas nutrisi sekaligus memberdayakan ekonomi lokal.",
  },
  {
    icon: Users,
    num: "120",
    subtitle: "Keluarga Terbantu",
    title: "Subsidi Akses Air Bersih",
    desc: "Program subsidi penyediaan fasilitas dan filtrasi air bersih bagi keluarga prasejahtera.",
    detail: "Proses pendataan dilakukan secara terbuka bersama perangkat desa/kelurahan setempat agar bantuan tepat sasaran.",
  },
  {
    icon: MapPin,
    num: "8",
    subtitle: "Desa Binaan",
    title: "Program Pendampingan Desa Sehat",
    desc: "Mendampingi desa-desa terpilih dalam membangun sistem sanitasi, pengelolaan air bersih, dan kebun gizi mandiri.",
    detail: "Mendorong kemandirian warga desa melalui pelatihan berkelanjutan dan pendampingan lapangan.",
  },
];

const stats = [
  { value: "500+", label: "Porsi Pangan Bergizi / Bulan" },
  { value: "120", label: "Keluarga Subsidi Air Bersih" },
  { value: "8", label: "Desa Binaan Aktif" },
  { value: "100%", label: "Transparansi Audit Sosial" },
];

export default function SocialImpactPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a2342]">
      {/* Hero Header */}
      <section className="pt-20 pb-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              Social Impact
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] mt-2">
              Tanggung Jawab Sosial Adalah Misi Utama
            </h1>
            <p className="text-gray-600 text-base mt-3 max-w-2xl leading-relaxed">
              Bagi Shigra, keberadaan bisnis harus membawa manfaat konkrit bagi lingkungan dan sesama. Program sosial kami bukan pelengkap — melainkan alasan utama mengapa kami berdiri.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200">
                  <div className="text-3xl sm:text-4xl font-bold text-[#0a2342]">{value}</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {programs.map(({ icon: Icon, num, subtitle, title, desc, detail }, idx) => (
            <ScrollReveal key={title} delay={idx * 0.12} direction="up" distance={30}>
              <div className="bg-[#f9fafb] p-6 sm:p-8 rounded-2xl border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#2f6f5e]">
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-[#2f6f5e] uppercase">{subtitle}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0a2342]">{title}</h2>
                  <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{detail}</p>
                </div>

                <div className="lg:col-span-4 bg-white p-6 rounded-xl text-center border border-gray-200 flex flex-col justify-center items-center">
                  <span className="text-4xl font-bold text-[#0a2342]">{num}</span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">{subtitle}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
