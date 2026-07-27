"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen, Calendar, ArrowRight } from "lucide-react";

const stats = [
  { value: "2,500+", label: "Anggota Aktif" },
  { value: "150+", label: "Diskusi Bulanan" },
  { value: "20+", label: "Event / Tahun" },
];

const benefits = [
  { icon: BookOpen, text: "Konten edukasi mingguan dari narasumber independen" },
  { icon: Calendar, text: "Webinar & sesi diskusi komunitas gratis secara berkala" },
  { icon: Users, text: "Forum komunikasi bebas dari promosi penjualan agresif" },
];

export default function CommunityTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100" aria-label="Komunitas Shigra">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <Image
                src="/community.png"
                alt="Komunitas Shigra"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              Gerakan Berkelanjutan
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2342]">
              Komunitas Gaya Hidup Sehat
            </h2>
            
            <p className="text-gray-600 text-base leading-relaxed">
              Kami mempertemukan individu yang peduli pada kualitas hidup untuk saling berbagi pengetahuan, berdiskusi secara objektif, dan bertumbuh bersama tanpa intimidasi penjualan.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-bold text-[#0a2342]">{value}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-3 pt-1">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-50 text-[#2f6f5e] flex items-center justify-center rounded-md shrink-0">
                    <Icon size={14} />
                  </div>
                  <span className="text-gray-700 text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <Link href="/community" className="btn-accent">
                Gabung Komunitas <ArrowRight size={16} />
              </Link>
              <Link href="/social-impact" className="btn-secondary">
                Program Sosial
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
