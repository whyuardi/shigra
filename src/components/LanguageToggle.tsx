"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: "id" | "en") => {
    if (newLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      className={`relative flex items-center bg-gray-100 rounded-lg p-0.5 text-xs font-semibold transition-opacity ${
        isPending ? "opacity-60" : ""
      }`}
    >
      <button
        onClick={() => switchLocale("id")}
        className={`relative z-10 px-2.5 py-1.5 rounded-md transition-all duration-200 ${
          locale === "id"
            ? "bg-[#0a2342] text-white shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
        aria-label="Bahasa Indonesia"
      >
        ID
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`relative z-10 px-2.5 py-1.5 rounded-md transition-all duration-200 ${
          locale === "en"
            ? "bg-[#0a2342] text-white shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
