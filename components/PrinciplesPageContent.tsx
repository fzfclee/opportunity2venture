import ContentLayout from "@/components/ContentLayout";
import { internalVersion, principleContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export type PrinciplesScope = "enterprise" | "venture" | "personal";

const scopeEyebrow: Record<Locale, Record<PrinciplesScope, string>> = {
  en: {
    enterprise: "O2V Enterprise Configuration",
    venture: "O2V Venture Configuration",
    personal: "O2V Personal Configuration"
  },
  zh: {
    enterprise: "O2V Enterprise Configuration",
    venture: "O2V Venture Configuration",
    personal: "O2V Personal Configuration"
  }
};

const principlesDeck: Record<Locale, string[]> = {
  en: ["O2V Framework", "Opportunity-to-Value Framework", `Internal Version: ${internalVersion}`],
  zh: ["O2V Framework", "Opportunity-to-Value Framework", `内部版本：${internalVersion}`]
};

export default function PrinciplesPageContent({ locale, scope }: { locale: Locale; scope: PrinciplesScope }) {
  const content = principleContent[locale];

  return (
    <ContentLayout eyebrow={scopeEyebrow[locale][scope]} title={content.title} deck={principlesDeck[locale]}>
      <ol>
        {content.principles.map((principle) => (
          <li key={principle}>{principle}</li>
        ))}
      </ol>
    </ContentLayout>
  );
}
