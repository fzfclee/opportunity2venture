import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import { copyrightContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const copyrightDeck: Record<Locale, string[]> = {
  en: ["Opportunity-to-Value Framework", "Official Public Release 20260520", "Internal Version: v1.5"],
  zh: ["Opportunity-to-Value Framework", "官方公开发布版 20260520", "内部版本：v1.5"],
  de: ["Opportunity-to-Value Framework", "Offizielle öffentliche Veröffentlichung 20260520", "Interne Version: v1.5"]
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return copyrightContent[locale].metadata;
}

export default async function CopyrightPage({ params }: PageProps) {
  const { locale } = await params;
  const content = copyrightContent[locale];

  return (
    <ContentLayout eyebrow="O2V Framework" title={content.title} deck={copyrightDeck[locale]}>
      {content.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </ContentLayout>
  );
}
