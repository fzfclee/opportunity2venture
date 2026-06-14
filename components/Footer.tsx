import { footerContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-[#dfe3ff] bg-[#f7f8ff]">
      <div className="mx-auto w-full max-w-4xl px-5 py-6 text-xs leading-5 text-neutral-600 sm:px-8">
        {footerContent[locale].map((line) => (
          <p key={line.text} className="mb-1 last:mb-0">
            {line.label ? <span>{line.label} </span> : null}
            {line.href ? (
              <a className="underline decoration-[#5a63e9]/40 hover:text-[#2936c7]" href={line.href}>
                {line.text}
              </a>
            ) : (
              line.text
            )}
          </p>
        ))}
      </div>
    </footer>
  );
}
