"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languageLabels, locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

const supportedPageSuffixes = new Set(["", "framework", "principles", "copyright", "download", "about"]);

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const hasLocale = locales.includes(parts[0] as Locale);
  const suffix = hasLocale ? parts.slice(1).join("/") : "";
  const safeSuffix = supportedPageSuffixes.has(suffix) ? suffix : "";

  return (
    <nav aria-label="Language switcher" className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      {locales.map((locale, index) => {
        const href = safeSuffix ? `/${locale}/${safeSuffix}` : `/${locale}`;
        const active = locale === currentLocale;

        return (
          <span key={locale} className="inline-flex items-center gap-x-3">
            <Link
              href={href}
              hrefLang={locale}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "font-semibold text-neutral-950 no-underline"
                  : "text-neutral-600 underline hover:text-neutral-950"
              }
            >
              {languageLabels[locale]}
            </Link>
            {index < locales.length - 1 ? <span className="text-neutral-300">|</span> : null}
          </span>
        );
      })}
    </nav>
  );
}
