"use client";

import { Heart, Droplets, MapPin, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function SocialImpactTeaser() {
  const t = useTranslations("home.socialImpact");

  const programs = [
    { icon: Heart, num: "500+", unit: t("program1Unit"), title: t("program1Title"), desc: t("program1Desc") },
    { icon: Droplets, num: "120", unit: t("program2Unit"), title: t("program2Title"), desc: t("program2Desc") },
    { icon: MapPin, num: "8", unit: t("program3Unit"), title: t("program3Title"), desc: t("program3Desc") },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100" aria-label="Social Impact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">{t("badge")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2342] mt-1">{t("title")}</h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-md">{t("description")}</p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map(({ icon: Icon, num, unit, title, desc }, idx) => (
            <ScrollReveal key={title} delay={idx * 0.12} direction="up" distance={35}>
              <div className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 space-y-4">
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
            </ScrollReveal>
          ))}
        </div>

        {/* Action Row */}
        <ScrollReveal direction="up" distance={25} delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-[#0a2342] text-white rounded-2xl">
            <div>
              <h3 className="text-xl font-bold mb-1">{t("ctaTitle")}</h3>
              <p className="text-white/70 text-sm">{t("ctaDescription")}</p>
            </div>
            <Link href="/social-impact" className="btn-accent shrink-0 text-xs py-3 px-6">
              {t("ctaButton")} <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
