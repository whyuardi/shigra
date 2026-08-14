"use client";

import Image from "next/image";
import { Layers, Shield, Zap, ArrowRight, AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProductPreview() {
  const t = useTranslations("home.product");

  const specs = [
    { value: "12 Plat", label: t("spec1Label") },
    { value: "Dual Filter", label: t("spec2Label") },
    { value: "350W", label: t("spec3Label") },
    { value: "pH 2.5 – 12", label: t("spec4Label") },
    { value: "RFID Chip", label: t("spec5Label") },
    { value: "0.01 Micron", label: t("spec6Label") },
  ];

  const features = [
    { icon: Layers, title: t("feature1Title"), desc: t("feature1Desc") },
    { icon: Shield, title: t("feature2Title"), desc: t("feature2Desc") },
    { icon: Zap, title: t("feature3Title"), desc: t("feature3Desc") },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f9fafb] border-b border-gray-200" aria-label="SM-S230XNA">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
                {t("badge")}
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] mt-1">
                SM-S230XNA Water Machine
              </h2>
              <p className="text-gray-600 text-base mt-2 max-w-xl">
                {t("description")}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/product" className="btn-accent text-xs py-2.5 px-5">
                {t("detailSpecs")} <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-secondary text-xs py-2.5 px-5">
                {t("consultation")}
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
          {/* Product Image */}
          <ScrollReveal delay={0.1} direction="left" distance={50} duration={0.9} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm h-80 sm:h-[420px] bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <Image
                src="/product-brochure.jpg"
                alt="Shigra SM-S230XNA Water Machine"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </ScrollReveal>

          {/* Features */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.1} direction="up" distance={20}>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3">
                <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-amber-900 text-xs leading-relaxed">
                  <strong>{t("regulatoryNote")}</strong> {t("regulatoryText")}
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-5">
              {features.map(({ icon: Icon, title, desc }, idx) => (
                <ScrollReveal key={title} delay={0.15 + idx * 0.12} direction="up" distance={25}>
                  <div className="flex gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 bg-[#2f6f5e]/10 text-[#2f6f5e] flex items-center justify-center rounded-lg shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a2342] text-base mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <ScrollReveal direction="up" distance={30}>
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
        </ScrollReveal>

      </div>
    </section>
  );
}
