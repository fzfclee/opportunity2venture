import type { Metadata } from "next";
import Image from "next/image";
import ContentLayout from "@/components/ContentLayout";
import { aboutContent, internalVersion, releaseVersion, type RichParagraph } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

const releaseLabel: Record<Locale, string> = {
  en: "Official Public Release",
  zh: "官方公开发布版",
  de: "Official Public Release"
};

const internalLabel: Record<Locale, string> = {
  en: "Internal Version",
  zh: "内部版本",
  de: "Interne Version"
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return aboutContent[locale].metadata;
}

function RichText({ parts }: { parts: RichParagraph }) {
  return (
    <>
      {parts.map((part, index) =>
        part.strong ? (
          <strong key={`${part.text}-${index}`}>{part.text}</strong>
        ) : (
          <span key={`${part.text}-${index}`}>{part.text}</span>
        )
      )}
    </>
  );
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const content = aboutContent[locale];

  return (
    <ContentLayout eyebrow="O2V Framework" title={content.title} subtitle={content.subtitle}>
      <div className="not-prose mb-8 flex flex-col gap-6 border-b border-[#dfe3ff] pb-8 sm:flex-row sm:items-start">
        <Image
          src="/lizhi.jpg"
          alt="Li Zhi"
          width={180}
          height={180}
          className="h-40 w-40 border border-[#d9ddff] object-cover sm:h-44 sm:w-44"
          priority
        />
        <div className="max-w-xl text-sm leading-7 text-neutral-700">
          <p>O2V Framework {releaseVersion}</p>
          <p>Opportunity-to-Value Framework</p>
          <p>{releaseLabel[locale]} {releaseVersion}</p>
          <p>{internalLabel[locale]}: {internalVersion}</p>
        </div>
      </div>

      {content.body.map((paragraph, index) => (
        <p key={index}>
          <RichText parts={paragraph} />
        </p>
      ))}

      <p>{content.beliefIntro}</p>
      <blockquote className="border-l border-[#5a63e9] pl-5 text-neutral-800">
        <RichText parts={content.belief} />
      </blockquote>

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
