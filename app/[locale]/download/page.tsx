import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import { downloadCards, downloadContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return downloadContent[locale].metadata;
}

export default async function DownloadPage({ params }: PageProps) {
  const { locale } = await params;
  const content = downloadContent[locale];

  return (
    <ContentLayout
      eyebrow="O2V Framework"
      title={content.title}
      deck={["Opportunity-to-Venture Framework", "Official Public Release 20260510", "Internal Version: v1.4"]}
    >
      <p>{content.fullReleaseNote}</p>
      <p>{content.note}</p>
      <div className="not-prose mt-8 grid gap-4">
        {downloadCards.map((card) => (
          <section key={card.fileName} className="border border-neutral-200 p-5">
            <h2 className="text-lg font-semibold text-neutral-950">{card.language}</h2>
            <dl className="mt-4 grid gap-2 text-sm leading-6 text-neutral-700 sm:grid-cols-[160px_1fr]">
              <dt className="font-semibold text-neutral-950">Language</dt>
              <dd>{card.language}</dd>
              <dt className="font-semibold text-neutral-950">File name</dt>
              <dd className="break-all">{card.fileName}</dd>
              <dt className="font-semibold text-neutral-950">Version</dt>
              <dd>Official Public Release 20260510</dd>
              <dt className="font-semibold text-neutral-950">Internal Version</dt>
              <dd>v1.4</dd>
              <dt className="font-semibold text-neutral-950">Copyright</dt>
              <dd>Copyright © Li Zhi. All rights reserved.</dd>
            </dl>
            <p className="mt-4 text-sm leading-6 text-neutral-700">{content.permissionReminder}</p>
            <a
              href={card.href}
              className="mt-5 inline-flex border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-950 no-underline hover:border-neutral-950"
            >
              {content.button}
            </a>
          </section>
        ))}
      </div>
    </ContentLayout>
  );
}
