import type { Metadata } from "next";
import EnterpriseContentPage from "@/components/EnterpriseContentPage";
import { enterpriseContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return enterpriseContent[locale].metadata;
}

export default async function EnterprisePage({ params }: PageProps) {
  const { locale } = await params;
  const content = enterpriseContent[locale];

  return <EnterpriseContentPage content={content} locale={locale} />;
}
