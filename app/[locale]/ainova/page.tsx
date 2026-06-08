import type { Metadata } from "next";
import PublicContentPage from "@/components/PublicContentPage";
import { ainovaContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return ainovaContent[locale].metadata;
}

export default async function AiNOVAPage({ params }: PageProps) {
  const { locale } = await params;

  return <PublicContentPage content={ainovaContent[locale]} eyebrow="AiNOVA by O2V" locale={locale} />;
}
