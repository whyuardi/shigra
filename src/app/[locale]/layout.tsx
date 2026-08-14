import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("title"),
      template: "%s | SHIGRA",
    },
    description: t("description"),
    keywords: [
      "Shigra",
      "Air Purifier",
      "Water Machine",
      "Organic Food",
      "Komunitas Sehat",
      "Mind Body Soul",
      "Gaya Hidup Sehat",
      "SM-S230XNA",
    ],
    authors: [{ name: "Shigra Indonesia" }],
    creator: "Shigra Indonesia",
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      siteName: "SHIGRA",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as "id" | "en")) {
    notFound();
  }

  // Load messages for the client provider
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
