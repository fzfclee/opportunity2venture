export const locales = ["en", "zh", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const languageLabels: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  de: "Deutsch"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedAlternates(locale: Locale, path = "") {
  const cleanPath = path ? `/${path.replace(/^\/+/, "")}` : "";

  return {
    canonical: `/${locale}${cleanPath}`,
    languages: {
      en: `/en${cleanPath}`,
      zh: `/zh${cleanPath}`,
      de: `/de${cleanPath}`
    }
  };
}
