import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import MethodVisual from "@/components/MethodVisuals";
import type { Card, Section } from "@/lib/content";

type EnterprisePageContent = {
  title: string;
  subtitle: string;
  tagline: string[];
  deck: string[];
  body: string[];
  bullets: string[];
  buttons: Array<{ label: string; href: string }>;
  cards?: Card[];
  sections?: Section[];
};

type EnterpriseContentPageProps = {
  content: EnterprisePageContent;
};

export default function EnterpriseContentPage({ content }: EnterpriseContentPageProps) {
  return (
    <ContentLayout
      eyebrow="O2V Enterprise Configuration"
      title={content.title}
      subtitle={content.subtitle}
      deck={[...content.tagline, ...content.deck]}
    >
      {content.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <ul>
        {content.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {content.cards?.length ? (
        <div className="not-prose mt-8 grid gap-4 sm:grid-cols-2">
          {content.cards.map((card) => (
            <section
              key={card.title}
              className="border border-[#d9ddff] bg-white p-5 shadow-[0_18px_45px_rgba(36,52,170,0.06)]"
            >
              <h2 className="text-lg font-semibold leading-7 text-[#111427]">
                {card.href ? (
                  <Link href={card.href} className="no-underline hover:text-[#2936c7]">
                    {card.title}
                  </Link>
                ) : (
                  card.title
                )}
              </h2>
              {card.subtitle ? <p className="mt-2 text-sm font-semibold text-[#4f58dd]">{card.subtitle}</p> : null}
              <p className="mt-3 text-sm leading-7 text-neutral-700">{card.body}</p>
            </section>
          ))}
        </div>
      ) : null}

      {content.sections?.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets?.length ? (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.ordered?.length ? (
            <ol>
              {section.ordered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          ) : null}
          {section.visual ? <MethodVisual type={section.visual} /> : null}
        </section>
      ))}

      <div className="not-prose mt-9 grid gap-3 sm:grid-cols-2">
        {content.buttons.map((button) => (
          <Link
            key={button.href}
            href={button.href}
            className="border border-[#d9ddff] bg-white/80 px-4 py-3 text-sm font-semibold text-[#111427] no-underline shadow-[0_18px_45px_rgba(36,52,170,0.05)] hover:border-[#5a63e9] hover:text-[#2936c7]"
          >
            {button.label}
          </Link>
        ))}
      </div>
    </ContentLayout>
  );
}
