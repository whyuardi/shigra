import type { Metadata } from "next";
import Image from "next/image";
import { MessageSquare, BookOpen, Calendar, ArrowRight, Heart, ShieldCheck } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "community" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function CommunityPage() {
  const t = useTranslations("community");

  const features = [
    {
      icon: MessageSquare,
      num: "01",
      title: t("feature1Title"),
      desc: t("feature1Desc"),
    },
    {
      icon: BookOpen,
      num: "02",
      title: t("feature2Title"),
      desc: t("feature2Desc"),
    },
    {
      icon: Calendar,
      num: "03",
      title: t("feature3Title"),
      desc: t("feature3Desc"),
    },
    {
      icon: Heart,
      num: "04",
      title: t("feature4Title"),
      desc: t("feature4Desc"),
    },
  ];

  const testimonials = [
    {
      name: t("testimonial1Name"),
      role: t("testimonial1Role"),
      text: t("testimonial1Text"),
    },
    {
      name: t("testimonial2Name"),
      role: t("testimonial2Role"),
      text: t("testimonial2Text"),
    },
    {
      name: t("testimonial3Name"),
      role: t("testimonial3Role"),
      text: t("testimonial3Text"),
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0a2342]">
      {/* Hero Header */}
      <section className="pt-20 pb-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              {t("badge")}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] mt-2">
              {t("title")}
            </h1>
            <p className="text-gray-600 text-base mt-3 max-w-2xl leading-relaxed">
              {t("description")}
            </p>
            <div className="pt-4">
              <Link href="/contact" className="btn-accent text-xs py-2.5 px-6">
                {t("joinFree")} <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">{t("benefitsBadge")}</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">{t("benefitsTitle")}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, num, title, desc }, idx) => (
              <ScrollReveal key={title} delay={idx * 0.1} direction="up" distance={30}>
                <div className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 space-y-3 h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#2f6f5e]">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-400">{num}</span>
                  </div>
                  <h3 className="font-bold text-[#0a2342] text-lg">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="left" distance={40} className="lg:col-span-6">
              <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src="/community.png"
                  alt="Komunitas Shigra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.15} className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">{t("principlesBadge")}</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">{t("principlesTitle")}</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {t("principlesDesc")}
              </p>
              <ul className="space-y-2 pt-2">
                {[
                  t("principle1"),
                  t("principle2"),
                  t("principle3"),
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <ShieldCheck size={16} className="text-[#2f6f5e] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">{t("testimonialsBadge")}</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">{t("testimonialsTitle")}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text }, idx) => (
              <ScrollReveal key={name} delay={idx * 0.12} direction="up" distance={30}>
                <div className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 space-y-4 flex flex-col justify-between h-full">
                  <p className="text-gray-700 text-sm leading-relaxed italic">"{text}"</p>
                  <div>
                    <h3 className="font-bold text-[#0a2342] text-base">{name}</h3>
                    <p className="text-xs text-[#2f6f5e] font-medium">{role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
