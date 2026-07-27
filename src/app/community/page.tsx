import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, MessageSquare, BookOpen, Calendar, ArrowRight, Heart, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Komunitas",
  description:
    "Bergabunglah dengan komunitas Shigra — ruang berbagi, belajar, dan bertumbuh bersama dalam gaya hidup sehat yang berkelanjutan.",
};

const features = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Forum Diskusi Terbuka",
    desc: "Ruang berbagi pengalaman dan bertanya seputar pola hidup sehat secara rasional dan objektif.",
  },
  {
    icon: BookOpen,
    num: "02",
    title: "Perpustakaan Edukasi",
    desc: "Akses artikel, riset terverifikasi, dan panduan praktis dari sumber independen terpercaya.",
  },
  {
    icon: Calendar,
    num: "03",
    title: "Webinar & Sesi Berbagi",
    desc: "Pertemuan berkala secara daring maupun luring bersama para praktisi dan akademisi.",
  },
  {
    icon: Heart,
    num: "04",
    title: "Program Dampak Sosial",
    desc: "Keterlibatan aktif dalam penyediaan pangan bergizi dan subsidi akses air bersih masyarakat.",
  },
];

const testimonials = [
  {
    name: "Rina S.",
    role: "Anggota Komunitas",
    text: "Yang paling saya hargai dari Shigra adalah kejujurannya. Tidak ada tekanan pembelian atau janji berlebihan. Diskusi fokus pada fakta edukatif.",
  },
  {
    name: "Budi W.",
    role: "Praktisi Kesehatan Lingkungan",
    text: "Melihat komunitas yang fokus pada pemahaman filtrasi air dan kualitas udara secara ilmiah sangat menyegarkan. Inisiatif yang sangat positif.",
  },
  {
    name: "Sari M.",
    role: "Penerima Manfaat Program Sosial",
    text: "Program sosial air bersih dan edukasi pangan sehat sangat membantu keluarga kami memahami pentingnya air dan makanan berkualitas.",
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a2342]">
      {/* Hero Header */}
      <section className="pt-20 pb-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
            Komunitas Shigra
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] mt-2">
            Tumbuh Bersama Tanpa Hard Selling
          </h1>
          <p className="text-gray-600 text-base mt-3 max-w-2xl leading-relaxed">
            Komunitas Shigra menghadirkan ruang kolaboratif untuk belajar, berbagi pengetahuan, dan saling mendukung dalam mencapai kualitas hidup yang lebih sehat.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-accent text-xs py-2.5 px-6">
              Gabung Komunitas (Gratis) <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">Manfaat Komunitas</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">Apa yang Anda Dapatkan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, num, title, desc }) => (
              <div key={title} className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#2f6f5e]">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-400">{num}</span>
                </div>
                <h3 className="font-bold text-[#0a2342] text-lg">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src="/community.png"
                  alt="Komunitas Shigra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">Prinsip Komunitas</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">Komunitas Tanpa Hard Selling</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Kami secara ketat menjaga komunitas Shigra agar bebas dari intimidasi jualan atau promosi agresif. Fokus utama kami adalah edukasi dan saling bantu sesama anggota.
              </p>
              <ul className="space-y-2 pt-2">
                {[
                  "Diskusi berbasis data dan penelitian obyektif",
                  "Moderasi aktif untuk menjaga kenyamanan anggota",
                  "Transparansi penuh mengenai produk dan sains pendukung",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <ShieldCheck size={16} className="text-[#2f6f5e] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">Suara Anggota</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">Pengalaman di Komunitas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text }) => (
              <div key={name} className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 space-y-4 flex flex-col justify-between">
                <p className="text-gray-700 text-sm leading-relaxed italic">"{text}"</p>
                <div>
                  <h3 className="font-bold text-[#0a2342] text-base">{name}</h3>
                  <p className="text-xs text-[#2f6f5e] font-medium">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
