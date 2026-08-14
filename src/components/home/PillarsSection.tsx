"use client";

import Image from "next/image";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function PillarsSection() {
  const t = useTranslations("home.pillars");

  const pillars = [
    {
      id: "air",
      num: "01",
      label: "AIR",
      title: t("air.title"),
      status: t("air.status"),
      isAvailable: false,
      description: t("air.description"),
      image: "/air-pillar.png",
      href: "/#pillars" as const,
    },
    {
      id: "water",
      num: "02",
      label: "WATER",
      title: t("water.title"),
      status: t("water.status"),
      isAvailable: true,
      description: t("water.description"),
      image: "/water-pillar.png",
      href: "/product" as const,
    },
    {
      id: "food",
      num: "03",
      label: "FOOD",
      title: t("food.title"),
      status: t("food.status"),
      isAvailable: false,
      description: t("food.description"),
      image: "/food-pillar.png",
      href: "/#pillars" as const,
    },
  ];

  return (
    <section id="pillars" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              {t("badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2342]">
              {t("title")}
            </h2>
            <p className="text-gray-600 text-base">
              {t("description")}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={idx * 0.15} direction="up" distance={40}>
              <div className="card-minimal overflow-hidden flex flex-col justify-between h-full">
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
                        {t("viewProduct")} <ArrowRight size={12} />
                      </Link>
                    ) : (
                      <span className="text-xs text-gray-400 font-medium">
                        {t("inDevelopment")}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
