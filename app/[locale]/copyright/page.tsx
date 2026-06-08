import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import { copyrightContent, internalVersion, releaseVersion } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const copyrightDeck: Record<Locale, string[]> = {
  en: ["Opportunity-to-Value Framework", `Official Public Release ${releaseVersion}`, `Internal Version: ${internalVersion}`],
  zh: ["Opportunity-to-Value Framework", `官方公开发布版 ${releaseVersion}`, `内部版本：${internalVersion}`],
  de: ["Opportunity-to-Value Framework", `Offizielle öffentliche Version ${releaseVersion}`, `Interne Version: ${internalVersion}`]
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
