import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import { principleContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
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
    <ContentLayout
      eyebrow="O2V Framework"
      title={content.title}
      deck={["Opportunity-to-Venture Framework", "Official Public Release 20260510"]}
    >
      <ol>
        {content.principles.map((principle) => (
          <li key={principle}>{principle}</li>
        ))}
      </ol>
    </ContentLayout>
  );
}
