import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import { getConfigurationCopyrightContent } from "@/lib/configurationCopyright";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return getConfigurationCopyrightContent(locale, "venture").metadata;
}

export default async function VentureCopyrightPage({ params }: PageProps) {
  const { locale } = await params;
  const content = getConfigurationCopyrightContent(locale, "venture");

  return (
    <ContentLayout eyebrow="O2V Venture Configuration" title={content.title} subtitle={content.subtitle} deck={content.deck}>
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
