"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ConfigurationSwitcher from "@/components/ConfigurationSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { navLabels, type NavKey } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
};

type NavItem = {
  key: NavKey;
  path: string;
};

const enterpriseNavItems: NavItem[] = [
  { key: "home", path: "" },
  { key: "principles", path: "principles" },
  { key: "ainova", path: "ainova" },
  { key: "valence", path: "valence" },
  { key: "copyright", path: "enterprise/copyright" },
  { key: "download", path: "download" },
  { key: "about", path: "about" }
];

const ventureNavItems: NavItem[] = [
  { key: "home", path: "" },
  { key: "principles", path: "principles" },
  { key: "copyright", path: "venture/copyright" },
  { key: "download", path: "download" },
  { key: "about", path: "about" }
];

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const labels = navLabels[locale];
  const activeMode = pathname.includes(`/${locale}/venture`) ? "venture" : "enterprise";
  const navItems = activeMode === "venture" ? ventureNavItems : enterpriseNavItems;

  return (
    <header className="border-b border-[#dfe3ff] bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-3 sm:px-8">
        <div className="flex items-start justify-between gap-4">
          <Link
            href={`/${locale}`}
            className="inline-flex w-fit shrink-0 items-center no-underline"
            aria-label="O2V Framework home"
          >
            <Image
              src="/brand/o2v-logo-primary-blue-purple-header.png"
              alt="O2V Framework"
              width={260}
              height={80}
              className="h-auto w-36 object-contain sm:w-44"
              priority
            />
          </Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <ConfigurationSwitcher locale={locale} activeMode={activeMode} />
          <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.path ? `/${locale}/${item.path}` : `/${locale}`}
                className="text-neutral-700 underline decoration-[#5a63e9]/40 hover:text-[#2936c7]"
              >
                {labels[item.key]}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
