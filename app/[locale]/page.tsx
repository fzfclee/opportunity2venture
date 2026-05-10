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
        eyebrow={statementLabels[locale]}
        title={content.title}
        subtitle={content.subtitle}
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
              className="border border-neutral-300 px-4 py-3 text-sm font-semibold text-neutral-950 no-underline hover:border-neutral-950"
            >
              {button.label}
            </Link>
          ))}
        </div>
      </ContentLayout>
    </>
  );
}
