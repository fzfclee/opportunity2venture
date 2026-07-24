import type { Metadata } from "next";
import PublicContentPage from "@/components/PublicContentPage";
import { valenceContentV06 } from "@/lib/valenceContentV06";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return valenceContentV06[locale].metadata;
}

export default async function ValencePage({ params }: PageProps) {
  const { locale } = await params;

  return <PublicContentPage content={valenceContentV06[locale]} eyebrow="Valence" locale={locale} />;
}
