"use client";

import { ShieldCheck, FileText, FlaskConical, Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function LegalitasStrip() {
  const t = useTranslations("home.legalitas");

  const certs = [
    { icon: FileText, code: "SNI", title: t("sniTitle"), desc: t("sniDesc") },
    { icon: ShieldCheck, code: "BPOM", title: t("bpomTitle"), desc: t("bpomDesc") },
    { icon: FlaskConical, code: "LAB TEST", title: t("labTitle"), desc: t("labDesc") },
    { icon: FileText, code: "ISO", title: t("isoTitle"), desc: t("isoDesc") },
  ];

  return (
    <section className="py-20 bg-[#f9fafb] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

          {/* Left Text */}
          <ScrollReveal direction="up" distance={30} className="lg:w-1/3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              {t("badge")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">
              {t("title")}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t("description")}
            </p>
            <Link
              href="/legalitas"
              className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e] hover:underline inline-flex items-center gap-1 pt-1"
            >
              {t("viewDocs")} <ArrowRight size={14} />
            </Link>
          </ScrollReveal>

          {/* 4 Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map(({ icon: Icon, code, title, desc }) => (
              <div
                key={code}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-[#0a2342]">
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-flex items-center gap-1">
                    <Clock size={10} /> {t("process")}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-xs font-bold text-[#0a2342] block">{code}</span>
                  <p className="font-bold text-xs text-[#0a2342] mt-0.5 leading-snug">{title}</p>
                  <p className="text-[11px] text-gray-500 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
