import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type ConfigurationMode = "enterprise" | "venture";

type ConfigurationSwitcherProps = {
  locale: Locale;
  activeMode: ConfigurationMode;
};

const labels: Record<Locale, Record<ConfigurationMode, string>> = {
  en: {
    enterprise: "Enterprise",
    venture: "Venture"
  },
  zh: {
    enterprise: "企业配置",
    venture: "创业配置"
  },
  de: {
    enterprise: "Enterprise",
    venture: "Venture"
  }
};

export default function ConfigurationSwitcher({
  locale,
  activeMode
}: ConfigurationSwitcherProps) {
  const items: Array<{ mode: ConfigurationMode; href: string }> = [
    { mode: "enterprise", href: `/${locale}` },
    { mode: "venture", href: `/${locale}/venture` }
  ];

  return (
    <div
      aria-label="O2V configuration"
      className="inline-flex w-fit overflow-hidden border border-[#d9ddff] bg-white text-sm"
    >
      {items.map((item) => {
        const isActive = item.mode === activeMode;

        return (
          <Link
            key={item.mode}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "px-3 py-1.5 font-semibold no-underline transition",
              isActive
                ? "bg-[#eef1ff] text-[#2733c3]"
                : "text-neutral-400 hover:bg-[#f7f8ff] hover:text-neutral-600"
            ].join(" ")}
          >
            {labels[locale][item.mode]}
          </Link>
        );
      })}
    </div>
  );
}
