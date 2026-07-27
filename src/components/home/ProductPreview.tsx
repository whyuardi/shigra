"use client";

import Image from "next/image";
import Link from "next/link";
import { Layers, Shield, Zap, ArrowRight, AlertTriangle } from "lucide-react";

const specs = [
  { value: "12 Plat", label: "Titanium Solid (SP+7P)" },
  { value: "Dual Filter", label: "Sistem Komposit" },
  { value: "350W", label: "SMPS Power Control" },
  { value: "pH 2.5 – 12", label: "Rentang pH Air" },
  { value: "RFID Chip", label: "Filter Otentik" },
  { value: "0.01 Micron", label: "UF Membrane" },
];

const features = [
  {
    icon: Layers,
    title: "6-Stage Multi Filtration",
    desc: "Serat komposit, kasa mesh, tourmaline, kalsium, karbon aktif, dan membran UF menyaring kontaminan secara bertahap.",
  },
  {
    icon: Shield,
    title: "Hollow Fiber Membrane",
    desc: "Menyaring partikel mikroskopis hingga 0.01μm tanpa menghilangkan kandungan mineral alami penting dalam air.",
  },
  {
    icon: Zap,
    title: "350W SMPS Technology",
    desc: "Sistem pengatur daya presisi tinggi menghasilkan stabilitas kerja mesin dan efisiensi energi yang optimal.",
  },
];

export default function ProductPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#f9fafb] border-b border-gray-200" aria-label="Produk SM-S230XNA">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-gray-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              Produk Ekosistem Shigra
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] mt-1">
              SM-S230XNA Water Machine
            </h2>
            <p className="text-gray-600 text-base mt-2 max-w-xl">
              Mesin olah air minum presisi tinggi dengan teknologi filtrasi multi-tahap.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/product" className="btn-accent text-xs py-2.5 px-5">
              Detail Spesifikasi <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-secondary text-xs py-2.5 px-5">
              Konsultasi
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
          {/* Product Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm h-80 sm:h-[420px] bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <Image
                src="/product-brochure.jpg"
                alt="Shigra SM-S230XNA Water Machine"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3">
              <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-900 text-xs leading-relaxed">
                <strong>Catatan Regulasi:</strong> Produk ini adalah perangkat pengolah air minum. Shigra tidak membuat klaim kesehatan atau klaim medis yang tidak didukung bukti terverifikasi.
              </p>
            </div>

            <div className="space-y-5">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 bg-[#2f6f5e]/10 text-[#2f6f5e] flex items-center justify-center rounded-lg shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a2342] text-base mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div className="pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specs.map(({ value, label }) => (
              <div key={label} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                <div className="font-bold text-[#0a2342] text-lg">{value}</div>
                <div className="text-gray-500 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
