import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { creativeWorkJsonLd, homeContent, sharedHomeClosing } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const statementLabels: Record<Locale, string> = {
  en: "Founding Statement",
  zh: "创始声明",
  de: "Gründungserklärung"
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return homeContent[locale].metadata;
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale } = await params;
  const content = homeContent[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkJsonLd(locale))
        }}
      />
      <ContentLayout
        eyebrow="O2V Framework"
        title={content.title}
        subtitle={statementLabels[locale]}
        deck={[...content.tagline, ...content.deck]}
      >
        {content.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul>
          {content.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {sharedHomeClosing[locale].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="not-prose mt-9 grid gap-3 sm:grid-cols-2">
          {content.buttons.map((button) => (
            <Link
              key={button.href}
              href={button.href}
              className="border border-[#d9ddff] bg-white/80 px-4 py-3 text-sm font-semibold text-[#111427] no-underline shadow-[0_18px_45px_rgba(36,52,170,0.05)] hover:border-[#5a63e9] hover:text-[#2936c7]"
            >
              {button.label}
            </Link>
          ))}
        </div>
      </ContentLayout>
    </>
  );
}
