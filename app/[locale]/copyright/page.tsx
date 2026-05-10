import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import { copyrightContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
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
    <ContentLayout
      eyebrow="O2V Framework"
      title={content.title}
      deck={["Opportunity-to-Venture Framework", "Official Public Release 20260510", "Internal Version: v1.4"]}
    >
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
