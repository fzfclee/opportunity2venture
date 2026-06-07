import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { frameworkContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const frameworkDeck: Record<Locale, string[]> = {
  en: ["Opportunity-to-Value Framework", "Official Public Release 20260520", "Internal Version: v1.5"],
  zh: ["Opportunity-to-Value Framework", "官方公开发布版 20260520", "内部版本：v1.5"],
  de: ["Opportunity-to-Value Framework", "Offizielle öffentliche Veröffentlichung 20260520", "Interne Version: v1.5"]
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return frameworkContent[locale].metadata;
}

export default async function FrameworkPage({ params }: PageProps) {
  const { locale } = await params;
  const content = frameworkContent[locale];

  return (
    <ContentLayout
      eyebrow="O2V Framework"
      title={content.title}
      subtitle={content.subtitle}
      deck={frameworkDeck[locale]}
    >
      <section className="border-b border-[#dfe3ff] pb-8">
        {content.overview.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="mt-6">
          <Link
            href={content.cta.href}
            className="inline-flex border border-[#5a63e9] bg-[#f7f8ff] px-4 py-2 text-sm font-semibold text-[#2733c3] no-underline hover:bg-[#eef1ff]"
          >
            {content.cta.label}
          </Link>
        </div>
      </section>
      {content.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.ordered ? (
            <ol>
              {section.ordered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}
    </ContentLayout>
  );
}
