import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "articles" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function ArticlesPage() {
  const t = useTranslations("articles");

  const categories = [
    t("all"),
    t("waterQuality"),
    t("cleanAir"),
    t("healthyFood"),
    t("lifestyle"),
    t("regulation"),
  ];

  const articles = [
    {
      id: 1,
      category: t("waterQuality"),
      title: t("article1Title"),
      excerpt: t("article1Excerpt"),
      readTime: t("article1ReadTime"),
      date: t("article1Date"),
      slug: "memahami-sistem-filtrasi-air",
    },
    {
      id: 2,
      category: t("cleanAir"),
      title: t("article2Title"),
      excerpt: t("article2Excerpt"),
      readTime: t("article2ReadTime"),
      date: t("article2Date"),
      slug: "polutan-udara-dalam-ruangan",
    },
    {
      id: 3,
      category: t("healthyFood"),
      title: t("article3Title"),
      excerpt: t("article3Excerpt"),
      readTime: t("article3ReadTime"),
      date: t("article3Date"),
      slug: "panduan-memilih-pangan-organik",
    },
    {
      id: 4,
      category: t("regulation"),
      title: t("article4Title"),
      excerpt: t("article4Excerpt"),
      readTime: t("article4ReadTime"),
      date: t("article4Date"),
      slug: "regulasi-bpom-produk-air-minum",
    },
    {
      id: 5,
      category: t("lifestyle"),
      title: t("article5Title"),
      excerpt: t("article5Excerpt"),
      readTime: t("article5ReadTime"),
      date: t("article5Date"),
      slug: "hidrasi-fakta-vs-mitos",
    },
    {
      id: 6,
      category: t("waterQuality"),
      title: t("article6Title"),
      excerpt: t("article6Excerpt"),
      readTime: t("article6ReadTime"),
      date: t("article6Date"),
      slug: "cara-membaca-hasil-uji-air",
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
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Categories */}
          <ScrollReveal direction="up" distance={20}>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                    idx === 0
                      ? "bg-[#0a2342] text-white border-[#0a2342]"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <ScrollReveal key={art.id} delay={idx * 0.08} direction="up" distance={30}>
                <article className="bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4 h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4 text-xs">
                      <span className="font-semibold text-[#2f6f5e] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                        {art.category}
                      </span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <Clock size={12} /> {art.readTime}
                      </span>
                    </div>
                    <h2 className="font-bold text-[#0a2342] text-lg leading-snug hover:text-[#2f6f5e] transition-colors">
                      {art.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{art.excerpt}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>{art.date}</span>
                    <Link href={`/articles/${art.slug}` as "/articles"} className="font-bold text-[#0a2342] hover:text-[#2f6f5e] inline-flex items-center gap-1">
                      {t("read")} <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
