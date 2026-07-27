"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    id: "air",
    num: "01",
    label: "AIR",
    title: "Udara Bersih",
    status: "Segera Hadir",
    isAvailable: false,
    description: "Solusi filtrasi udara berteknologi tinggi untuk menghirup udara segar yang mendukung kesehatan dan konsentrasi.",
    image: "/air-pillar.png",
    href: "/#pillars",
  },
  {
    id: "water",
    num: "02",
    label: "WATER",
    title: "Air Berkualitas",
    status: "Tersedia",
    isAvailable: true,
    description: "Mesin olah air SM-S230XNA dengan sistem filtrasi multi-tahap dan Hollow Fiber Membrane 0.01μm.",
    image: "/water-pillar.png",
    href: "/product",
  },
  {
    id: "food",
    num: "03",
    label: "FOOD",
    title: "Pangan Sehat",
    status: "Segera Hadir",
    isAvailable: false,
    description: "Akses informasi, resep, dan pasokan pangan organik terpercaya untuk pemenuhan nutrisi harian keluarga.",
    image: "/food-pillar.png",
    href: "/#pillars",
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
            Ekosistem Mind, Body &amp; Soul
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2342]">
            Tiga Pilar Kesehatan Holistik
          </h2>
          <p className="text-gray-600 text-base">
            Kesehatan menyeluruh dimulai dari lingkungan yang bersih — udara, air, dan pangan yang Anda konsumsi.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="card-minimal overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gray-400">
                    {pillar.num} · {pillar.label}
                  </span>
                  {pillar.isAvailable ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      <CheckCircle2 size={12} /> {pillar.status}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      <Clock size={12} /> {pillar.status}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#0a2342]">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>

              <div>
                <div className="relative h-48 w-full bg-gray-100 border-t border-b border-gray-100">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 pt-4 flex items-center justify-between">
                  {pillar.isAvailable ? (
                    <Link
                      href={pillar.href}
                      className="text-xs font-bold text-[#2f6f5e] hover:underline inline-flex items-center gap-1"
                    >
                      Lihat Produk SM-S230XNA <ArrowRight size={12} />
                    </Link>
                  ) : (
                    <span className="text-xs text-gray-400 font-medium">
                      Tahap Pengembangan
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
