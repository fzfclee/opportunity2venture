import type { Metadata } from "next";
import PrinciplesPageContent from "@/components/PrinciplesPageContent";
import { principleContent } from "@/lib/content";
import { localizedAlternates, locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...principleContent[locale].metadata,
    alternates: localizedAlternates(locale, "venture/principles")
  };
}

export default async function VenturePrinciplesPage({ params }: PageProps) {
  const { locale } = await params;
  return <PrinciplesPageContent locale={locale} scope="venture" />;
}
