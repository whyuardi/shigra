"use client";

import Image from "next/image";
import { Users, BookOpen, Calendar, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function CommunityTeaser() {
  const t = useTranslations("home.community");

  const stats = [
    { value: "2,500+", label: t("stat1Label") },
    { value: "150+", label: t("stat2Label") },
    { value: "20+", label: t("stat3Label") },
  ];

  const benefits = [
    { icon: BookOpen, text: t("benefit1") },
    { icon: Calendar, text: t("benefit2") },
    { icon: Users, text: t("benefit3") },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100" aria-label="Community">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <ScrollReveal direction="left" distance={50} duration={0.9} className="lg:col-span-5">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <Image src="/community.png" alt="Shigra Community" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </ScrollReveal>

          {/* Copy */}
          <ScrollReveal delay={0.15} direction="up" distance={30} className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">{t("badge")}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2342]">{t("title")}</h2>
            <p className="text-gray-600 text-base leading-relaxed">{t("description")}</p>

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
                {t("joinCommunity")} <ArrowRight size={16} />
              </Link>
              <Link href="/social-impact" className="btn-secondary">
                {t("socialProgram")}
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
