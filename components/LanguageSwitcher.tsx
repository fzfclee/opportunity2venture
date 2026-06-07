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
    <nav aria-label="Language switcher" className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1 text-xs leading-5">
      {locales.map((locale, index) => {
        const href = safeSuffix ? `/${locale}/${safeSuffix}` : `/${locale}`;
        const active = locale === currentLocale;

        return (
          <span key={locale} className="inline-flex items-center gap-x-2">
            <Link
              href={href}
              hrefLang={locale}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "font-semibold text-[#2733c3] no-underline"
                  : "text-neutral-600 underline decoration-[#5a63e9]/40 hover:text-[#2936c7]"
              }
            >
              {languageLabels[locale]}
            </Link>
            {index < locales.length - 1 ? <span className="text-[#c9cffd]">|</span> : null}
          </span>
        );
      })}
    </nav>
  );
}
