import type { Metadata } from "next";
import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import { frameworkContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return frameworkContent[locale].metadata;
}

export default async function FrameworkPage({ params }: PageProps) {
  const { locale } = await params;
  const content = frameworkContent[locale];

  return (
    <ContentLayout
      eyebrow="O2V Framework 20260510"
      title={content.title}
      subtitle={content.subtitle}
      deck={["Opportunity-to-Venture Framework", "Official Public Release 20260510", "Internal Version: v1.4"]}
    >
      <section className="border-b border-neutral-200 pb-8">
        {content.overview.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="mt-6">
          <Link
            href={content.cta.href}
            className="inline-flex border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-950 no-underline hover:border-neutral-950"
          >
            {content.cta.label}
          </Link>
        </div>
      </section>
      {content.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.ordered ? (
            <ol>
              {section.ordered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}
    </ContentLayout>
  );
}
