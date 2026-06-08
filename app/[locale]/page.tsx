import type { Metadata } from "next";
import EnterpriseContentPage from "@/components/EnterpriseContentPage";
import { creativeWorkJsonLd, homeContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
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
      <EnterpriseContentPage content={content} locale={locale} />
    </>
  );
}
