import { footerContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto w-full max-w-4xl px-5 py-8 text-sm leading-7 text-neutral-700 sm:px-8">
        {footerContent[locale].map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </footer>
  );
}
