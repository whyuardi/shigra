import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Heart, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Shigra adalah komunitas gaya hidup sehat yang dibangun atas dasar kepercayaan, transparansi, dan dampak nyata. Kenali misi, visi, dan nilai-nilai kami.",
};

const values = [
  {
    icon: Target,
    num: "01",
    title: "Misi Utama",
    desc: "Membangun komunitas sehat dan sadar lingkungan melalui akses ke udara bersih, air berkualitas, dan pangan sehat — tanpa klaim berlebihan.",
  },
  {
    icon: Eye,
    num: "02",
    title: "Visi Masa Depan",
    desc: "Menjadi platform komunitas terpercaya yang menghubungkan keluarga Indonesia dengan gaya hidup sehat yang berkelanjutan dan terjangkau.",
  },
  {
    icon: Heart,
    num: "03",
    title: "Nilai Inti",
    desc: "Transparansi dalam setiap informasi, kepatuhan ketat pada regulasi, dan dampak sosial nyata adalah fondasi utama Shigra.",
  },
  {
    icon: Globe,
    num: "04",
    title: "Komitmen Edukasi",
    desc: "Kami berkomitmen tidak menyesatkan konsumen. Seluruh informasi yang kami sampaikan berbasis fakta, data teknis, dan regulasi resmi.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a2342]">
      {/* Hero Header */}
      <section className="pt-20 pb-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              Tentang Shigra
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] mt-2">
              Komunitas yang Dibangun atas Kepercayaan
            </h1>
            <p className="text-gray-600 text-base mt-3 max-w-2xl leading-relaxed">
              Shigra lahir dari keyakinan bahwa setiap keluarga berhak mendapatkan informasi yang jujur dan akses ke gaya hidup sehat yang berkelanjutan — tanpa manipulasi.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="up" distance={30} className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
                Cerita Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2342]">
                Mengapa Shigra Ada?
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Shigra berawal dari keprihatinan terhadap maraknya produk dan klaim kesehatan yang tidak didukung bukti ilmiah serta regulasi resmi. Konsumen yang jujur ingin hidup sehat seringkali terjebak oleh informasi yang menyesatkan.
                </p>
                <p>
                  Kami memilih jalan yang transparan: membangun komunitas yang mengutamakan edukasi berbasis fakta, transparansi penuh, dan kepatuhan pada aturan BPOM &amp; BSN. Ini bukan tentang menjual produk — ini tentang membangun ekosistem gaya hidup sehat yang dapat dipercaya.
                </p>
                <p>
                  Tiga pilar utama kami — Air (udara bersih), Water (air berkualitas), dan Food (pangan sehat) — mencerminkan keyakinan bahwa kesehatan holistik dimulai dari lingkungan yang bersih dan nutrisi yang tepat.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={40} delay={0.15} className="lg:col-span-5">
              <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src="/community.png"
                  alt="Komunitas Shigra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <div className="mb-10 space-y-2 text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">Nilai &amp; Prinsip</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">Apa yang Kami Pegang Teguh</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, num, title, desc }, idx) => (
              <ScrollReveal key={title} delay={idx * 0.12} direction="up" distance={35}>
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-[#2f6f5e]/10 text-[#2f6f5e] flex items-center justify-center rounded-xl">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-400">{num}</span>
                  </div>
                  <h3 className="font-bold text-[#0a2342] text-xl">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Banner */}
      <section className="py-12 bg-[#0a2342] text-white">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-4">
            <ShieldCheck size={32} className="text-[#2f6f5e] mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Komitmen Pada Regulasi Resmi</h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Shigra beroperasi sesuai dengan ketentuan BPOM RI dan regulasi terkait lainnya. Kami tidak membuat klaim medis atau janji pengobatan yang tidak didukung bukti ilmiah valid.
            </p>
            <div className="pt-2">
              <Link href="/legalitas" className="btn-accent text-xs py-2.5 px-6">
                Lihat Dokumen Legalitas <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
