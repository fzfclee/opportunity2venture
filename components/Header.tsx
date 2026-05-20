import Link from "next/link";
import Image from "next/image";
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
  { key: "download", path: "download" },
  { key: "about", path: "about" }
] as const;

export default function Header({ locale }: HeaderProps) {
  const labels = navLabels[locale];

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
    </header>
  );
}
