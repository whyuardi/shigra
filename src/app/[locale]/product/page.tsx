import type { Metadata } from "next";
import Image from "next/image";
import { AlertTriangle, CheckCircle2, Info, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "product" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function ProductPage() {
  const t = useTranslations("product");

  const filterStages = [
    { num: "01", name: "Fiber Filter", desc: t("filter1Desc") },
    { num: "02", name: "Mesh Gauze", desc: t("filter2Desc") },
    { num: "03", name: "Tourmaline", desc: t("filter3Desc") },
    { num: "04", name: "Calcium Medium", desc: t("filter4Desc") },
    { num: "05", name: "Activated Carbon", desc: t("filter5Desc") },
    { num: "06", name: "Hollow Fiber Membrane (UF)", desc: t("filter6Desc") },
  ];

  const specs = [
    { label: t("specModel"), value: "SM-S230XNA" },
    { label: t("specPlates"), value: t("specPlatesVal") },
    { label: t("specFilter"), value: t("specFilterVal") },
    { label: t("specPower"), value: t("specPowerVal") },
    { label: t("specRfid"), value: t("specRfidVal") },
    { label: t("specPh"), value: t("specPhVal") },
    { label: t("specOutput"), value: t("specOutputVal") },
    { label: t("specMembrane"), value: t("specMembraneVal") },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0a2342]">
      {/* Hero Header */}
      <section className="pt-20 pb-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="up" distance={30} className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
                {t("badge")}
              </span>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0a2342]">
                SM-S230XNA
              </h1>
              <p className="text-[#2f6f5e] text-lg font-medium">
                {t("subtitle")}
              </p>
              <p className="text-gray-600 text-base leading-relaxed max-w-xl">
                {t("description")}
              </p>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3 max-w-xl">
                <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-amber-900 text-xs leading-relaxed">
                  <strong>{t("regulatoryNote")}</strong> {t("regulatoryText")}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="btn-accent text-xs py-2.5 px-6">
                  {t("consultProduct")} <ArrowRight size={14} />
                </Link>
                <Link href="/legalitas" className="btn-secondary text-xs py-2.5 px-6">
                  {t("legalStatus")}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={40} delay={0.15} className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm h-80 sm:h-[420px] bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <Image
                  src="/product-brochure.jpg"
                  alt="Shigra SM-S230XNA Water Machine"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6 Stage Filtration */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">{t("filtrationBadge")}</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">{t("filtrationTitle")}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterStages.map((stage, idx) => (
              <ScrollReveal key={stage.num} delay={idx * 0.1} direction="up" distance={30}>
                <div className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 space-y-3 h-full">
                  <span className="font-mono text-xs font-bold text-[#2f6f5e]">{stage.num}</span>
                  <h3 className="font-bold text-[#0a2342] text-lg">{stage.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{stage.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">{t("specsBadge")}</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">{t("specsTitle")}</h2>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-200 shadow-sm overflow-hidden">
              {specs.map(({ label, value }) => (
                <div key={label} className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-5 hover:bg-gray-50 transition-colors">
                  <div className="text-sm font-bold text-[#0a2342]">{label}</div>
                  <div className="sm:col-span-2 text-sm text-gray-700">{value}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">{t("transparencyBadge")}</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">{t("transparencyTitle")}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200 space-y-3 h-full">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-700" />
                  <h3 className="font-bold text-[#0a2342] text-base">{t("claimedTitle")}</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• {t("claimed1")}</li>
                  <li>• {t("claimed2")}</li>
                  <li>• {t("claimed3")}</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <div className="bg-red-50/50 p-6 rounded-2xl border border-red-200 space-y-3 h-full">
                <div className="flex items-center gap-2">
                  <Info size={18} className="text-red-700" />
                  <h3 className="font-bold text-[#0a2342] text-base">{t("notClaimedTitle")}</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• {t("notClaimed1")}</li>
                  <li>• {t("notClaimed2")}</li>
                  <li>• {t("notClaimed3")}</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
