import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export type ConfigurationMode = "enterprise" | "venture" | "personal";

type ConfigurationSwitcherProps = {
  locale: Locale;
  activeMode: ConfigurationMode;
};

const labels: Record<Locale, Record<ConfigurationMode, string>> = {
  en: {
    enterprise: "Enterprise",
    venture: "Venture",
    personal: "Personal"
  },
  zh: {
    enterprise: "企业配置",
    venture: "创业配置",
    personal: "个人配置"
  }
};

export default function ConfigurationSwitcher({ locale, activeMode }: ConfigurationSwitcherProps) {
  const items: Array<{ mode: ConfigurationMode; href: string }> = [
    { mode: "enterprise", href: `/${locale}` },
    { mode: "venture", href: `/${locale}/venture` },
    { mode: "personal", href: `/${locale}/personal` }
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
                : "text-neutral-300 hover:bg-[#f7f8ff] hover:text-neutral-500"
            ].join(" ")}
          >
            {labels[locale][item.mode]}
          </Link>
        );
      })}
    </div>
  );
}
