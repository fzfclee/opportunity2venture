import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import MethodVisual from "@/components/MethodVisuals";
import type { PageContent } from "@/lib/content";

type PublicContentPageProps = {
  content: PageContent;
  eyebrow?: string;
};

export default function PublicContentPage({
  content,
  eyebrow = "O2V Framework"
}: PublicContentPageProps) {
  return (
    <ContentLayout
      eyebrow={content.eyebrow ?? eyebrow}
      title={content.title}
      subtitle={content.subtitle}
      deck={content.deck}
    >
      {content.intro?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

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

      {content.sections.map((section) => (
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
          {section.flow?.length ? (
            <div className="not-prose mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.flow.map((item, index) => (
                <div key={item} className="border border-[#d9ddff] bg-white p-4 shadow-[0_16px_34px_rgba(36,52,170,0.05)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4f58dd]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#111427]">{item}</p>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ))}

      {content.buttons?.length ? (
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
      ) : null}
    </ContentLayout>
  );
}
