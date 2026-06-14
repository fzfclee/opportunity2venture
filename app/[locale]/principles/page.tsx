import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import { internalVersion, principleContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const principlesDeck: Record<Locale, string[]> = {
  en: ["O2V Framework", "Opportunity-to-Value Framework", `Internal Version: ${internalVersion}`],
  zh: ["O2V Framework", "Opportunity-to-Value Framework", `内部版本：${internalVersion}`]
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return principleContent[locale].metadata;
}

export default async function PrinciplesPage({ params }: PageProps) {
  const { locale } = await params;
  const content = principleContent[locale];

  return (
    <ContentLayout eyebrow="O2V Framework" title={content.title} deck={principlesDeck[locale]}>
      <ol>
        {content.principles.map((principle) => (
          <li key={principle}>{principle}</li>
        ))}
      </ol>
    </ContentLayout>
  );
}
