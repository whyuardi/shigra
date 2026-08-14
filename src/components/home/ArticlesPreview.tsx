"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function ArticlesPreview() {
  const t = useTranslations("home.articles");

  const articles = [
    {
      id: 1,
      category: t("article1Category"),
      title: t("article1Title"),
      excerpt: t("article1Excerpt"),
      readTime: t("article1ReadTime"),
      date: t("article1Date"),
      slug: "memahami-sistem-filtrasi-air",
    },
    {
      id: 2,
      category: t("article2Category"),
      title: t("article2Title"),
      excerpt: t("article2Excerpt"),
      readTime: t("article2ReadTime"),
      date: t("article2Date"),
      slug: "polutan-udara-dalam-ruangan",
    },
    {
      id: 3,
      category: t("article3Category"),
      title: t("article3Title"),
      excerpt: t("article3Excerpt"),
      readTime: t("article3ReadTime"),
      date: t("article3Date"),
      slug: "panduan-memilih-pangan-organik",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f9fafb] border-b border-gray-200" aria-label="Articles">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 pb-6 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
                {t("badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2342] mt-1">
                {t("title")}
              </h2>
            </div>
            <Link
              href="/articles"
              className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e] hover:underline inline-flex items-center gap-1"
            >
              {t("viewAll")} <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <ScrollReveal key={art.id} delay={idx * 0.12} direction="up" distance={35}>
              <Link
                href={`/articles/${art.slug}` as "/articles"}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#2f6f5e] bg-emerald-50 px-2.5 py-1 rounded-md">
                      {art.category}
                    </span>
                    <span className="text-gray-400">{art.readTime}</span>
                  </div>

                  <h3 className="font-bold text-[#0a2342] text-lg leading-snug hover:text-[#2f6f5e] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>{art.date}</span>
                  <span className="font-bold text-[#0a2342] flex items-center gap-1">
                    {t("read")} <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
