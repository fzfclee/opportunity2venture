import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { navLabels } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
};

const navItems = [
  { key: "home", path: "" },
  { key: "framework", path: "framework" },
  { key: "principles", path: "principles" },
  { key: "copyright", path: "copyright" },
  { key: "download", path: "download" }
] as const;

export default function Header({ locale }: HeaderProps) {
  const labels = navLabels[locale];

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3">
          <Link href={`/${locale}`} className="text-base font-semibold tracking-normal text-neutral-950 no-underline">
            O2V Framework
          </Link>
          <nav aria-label="Primary navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.path ? `/${locale}/${item.path}` : `/${locale}`}
                className="text-neutral-700 underline hover:text-neutral-950"
              >
                {labels[item.key]}
              </Link>
            ))}
          </nav>
        </div>
        <LanguageSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
