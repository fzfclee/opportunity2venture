import type { Metadata } from "next";
import PublicContentPage from "@/components/PublicContentPage";
import { personalContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return personalContent[locale].metadata;
}

export default async function PersonalPage({ params }: PageProps) {
  const { locale } = await params;

  return <PublicContentPage content={personalContent[locale]} eyebrow="O2V Personal Configuration" locale={locale} />;
}
