import type { Metadata } from "next";
import PublicContentPage from "@/components/PublicContentPage";
import { valenceContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return valenceContent[locale].metadata;
}

export default async function ValencePage({ params }: PageProps) {
  const { locale } = await params;

  return <PublicContentPage content={valenceContent[locale]} eyebrow="Valence by O2V" locale={locale} />;
}
