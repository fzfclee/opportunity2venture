export const locales = ["en", "zh", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const siteUrl = "https://www.o2vframework.com";

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
  const localizedPath = `/${locale}${cleanPath}`;
  const defaultPath = `/en${cleanPath}`;

  return {
    canonical: `${siteUrl}${localizedPath}`,
    languages: {
      en: `${siteUrl}/en${cleanPath}`,
      "zh-CN": `${siteUrl}/zh${cleanPath}`,
      de: `${siteUrl}/de${cleanPath}`,
      "x-default": `${siteUrl}${defaultPath}`
    }
  };
}
