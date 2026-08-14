import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  localePrefix: "as-needed", // no prefix for default locale (id)
});
