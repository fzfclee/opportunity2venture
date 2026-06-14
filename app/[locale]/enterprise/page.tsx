import { redirect } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function EnterprisePage({ params }: PageProps) {
  const { locale } = await params;
  redirect(`/${locale}`);
}
