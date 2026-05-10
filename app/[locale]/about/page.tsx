import type { Metadata } from "next";
import Image from "next/image";
import ContentLayout from "@/components/ContentLayout";
import { aboutContent } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return aboutContent[locale].metadata;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const content = aboutContent[locale];

  return (
    <ContentLayout eyebrow="O2V Framework" title={content.title} subtitle={content.subtitle}>
      <div className="not-prose mb-8 flex flex-col gap-6 border-b border-neutral-200 pb-8 sm:flex-row sm:items-start">
        <Image
          src="/lizhi.jpg"
          alt="Li Zhi"
          width={180}
          height={180}
          className="h-40 w-40 border border-neutral-200 object-cover sm:h-44 sm:w-44"
          priority
        />
        <div className="max-w-xl text-sm leading-7 text-neutral-700">
          <p>O2V Framework 20260510</p>
          <p>Opportunity-to-Venture Framework</p>
          <p>Official Public Release 20260510</p>
        </div>
      </div>

      {content.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <p>{content.beliefIntro}</p>
      <blockquote className="border-l border-neutral-300 pl-5 text-neutral-800">{content.belief}</blockquote>

      <section>
        <h2>{content.contactHeading}</h2>
        <ul>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/li-zhi/" rel="noreferrer" target="_blank">
              https://www.linkedin.com/in/li-zhi/
            </a>
          </li>
          <li>
            Email: <a href="mailto:contact@o2vframework.com">contact@o2vframework.com</a>
          </li>
          <li>WeChat: lizhi_ch</li>
        </ul>
      </section>
    </ContentLayout>
  );
}
