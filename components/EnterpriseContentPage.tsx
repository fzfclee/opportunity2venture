import Link from "next/link";
import ContentLayout from "@/components/ContentLayout";
import MethodVisual from "@/components/MethodVisuals";
import type { Card } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type EnterprisePageContent = {
  title: string;
  subtitle: string;
  tagline: string[];
  deck: string[];
  body: string[];
  bullets: string[];
  buttons: Array<{ label: string; href: string }>;
  cards?: Card[];
};

type EnterpriseContentPageProps = {
  content: EnterprisePageContent;
  locale?: Locale;
};

const enterpriseCopy = {
  en: {
    framingHeading: "Enterprise Framing Lenses",
    framingIntro:
      "The O2V core chain should not be read as an isolated linear process. In enterprise use, every opportunity is framed by two cross-cutting lenses: Strategy and Capability.",
    strategyTitle: "Strategy Lens",
    strategyBody:
      "Strategy provides direction, boundaries, and investment priorities. It helps the enterprise decide which signals deserve attention, which opportunities fit the agenda, and what should deliberately not be funded.",
    capabilityTitle: "Capability Lens",
    capabilityBody:
      "Capability asks what the enterprise should reuse, strengthen, or build. It prevents every new opportunity from becoming another local solution and helps connect multiple initiatives to shared organizational ability.",
    framingLine:
      "Strategy and Capability frame the O2V journey. They are not missing steps in the core chain.",
    coreHeading: "O2V Core Chain",
    coreIntro:
      "The nine-step core chain traces how a specific opportunity moves from an early signal to an evidence-backed Value Story:",
    evidenceLine: "Evidence is continuous. Validation is intentional.",
    evidenceBody:
      "Evidence supports judgment at every step. Validation is the deliberate testing of assumptions that could change a decision. Evidence is not a separate tenth step, and Validation is not replaced by the Evidence Spine.",
    distinctionsHeading: "Four Distinctions That Keep the Framework Coherent",
    capabilityDefinition:
      "Capability is a repeatable organizational ability that may support multiple opportunities, products, and value streams.",
    assetDefinition:
      "Asset is a reusable value object created, preserved, or strengthened through an opportunity, such as data, models, standards, components, processes, knowledge, IP, or operating patterns.",
    capabilityAssetLine:
      "An opportunity may reuse or strengthen a capability. The work may create reusable assets. Those assets may further strengthen the capability.",
    businessCaseDefinition:
      "The Business Case begins as a hypothesis and matures through validation. The formal O2V Business Case is the evidence-backed decision logic for the next material commitment.",
    impactDefinition:
      "Impact is the realized change in a real operating environment. Value Story is the evidence-backed account of that change, the learning, and the next decision.",
    methodsHeading: "How the Enterprise Methods Work Together",
    methods: [
      "CLEAR frames the first justified next move from ambiguous signals.",
      "O2V traces the opportunity logic from Signal to Value Story.",
      "AiNOVA operationalizes the enterprise value-realization flow across roles, decisions, readiness, validation, and operation.",
      "Valence governs product and initiative value in operation and across lifecycle decisions."
    ],
    methodLine:
      "CLEAR frames the next move. O2V traces the opportunity logic. AiNOVA operationalizes the enterprise flow. Valence governs value in operation.",
    feedbackHeading: "Enterprise Realization and Feedback Loop",
    feedbackBody:
      "The journey does not end with a Value Story. Build, adoption, operation, governance, and impact realization are supported by AiNOVA and Valence. The loop closes when evidence changes the next product decision, capability priority, portfolio allocation, or strategic choice.",
    feedbackLine:
      "Strategy defines where the organization wants to go. Capability defines what it must become able to do. O2V determines whether a specific opportunity deserves to move from signal to value.",
    publicScopeHeading: "Public Scope",
    publicScope:
      "Detailed playbooks, templates, scoring rules, prompt chains, calculation methods, client-specific implementation materials, and internal working materials are not published on this site."
  },
  zh: {
    framingHeading: "企业框定视角",
    framingIntro:
      "O2V 九步核心链不应被理解为一条孤立的线性流程。在企业应用中，每个机会都需要由两个跨链视角来框定：战略与能力。",
    strategyTitle: "战略视角",
    strategyBody:
      "战略提供方向、边界和投资优先级，帮助企业判断哪些信号值得关注、哪些机会符合当前战略议程，以及哪些事项应当明确不投入。",
    capabilityTitle: "能力视角",
    capabilityBody:
      "能力视角判断企业应该复用、强化还是新建什么能力，避免每个新机会都形成一个新的局部解决方案，并把多个举措连接到共享的组织能力。",
    framingLine: "战略与能力共同框定 O2V 价值旅程。它们不是九步核心链中遗漏的步骤。",
    coreHeading: "O2V 九步核心链",
    coreIntro:
      "九步核心链描述一个具体机会如何从早期信号走向由证据支撑的 Value Story：",
    evidenceLine: "Evidence 持续贯穿，Validation 有意设计。",
    evidenceBody:
      "Evidence 在每一步支持判断；Validation 则是针对可能改变决策的关键假设所进行的有意验证。Evidence 不是额外的第十步，Evidence Spine 也不会取代 Validation。",
    distinctionsHeading: "保持框架自洽的四个关键区分",
    capabilityDefinition:
      "Capability 是企业可重复完成某类价值活动的组织能力，可以支持多个机会、产品和价值流。",
    assetDefinition:
      "Asset 是机会推进过程中形成、保留或强化的可复用价值载体，例如数据、模型、标准、组件、流程、知识、IP 或运营模式。",
    capabilityAssetLine:
      "一个机会可以复用或强化企业能力；机会推进可以形成可复用资产；这些资产又可以进一步增强能力。",
    businessCaseDefinition:
      "Business Case 从假设开始，并在验证中逐步成熟。O2V 中正式的 Business Case，是支持下一次重要投入承诺的证据化决策逻辑。",
    impactDefinition:
      "Impact 是真实运营环境中已经发生的变化；Value Story 是对该变化、组织学习和下一步决策的证据化表达。",
    methodsHeading: "企业方法资产如何协同",
    methods: [
      "CLEAR 从模糊信号中框定第一个有依据的下一步行动。",
      "O2V 追踪机会从 Signal 到 Value Story 的价值逻辑。",
      "AiNOVA 把企业价值实现流转化为角色、决策、准备度、验证和运营机制。",
      "Valence 治理产品和举措在运营期及生命周期决策中的持续价值。"
    ],
    methodLine:
      "CLEAR 框定下一步；O2V 追踪机会逻辑；AiNOVA 运行企业价值流；Valence 治理运营中的价值。",
    feedbackHeading: "企业实现层与反馈闭环",
    feedbackBody:
      "价值旅程不会在 Value Story 处终止。构建、采用、运营、治理和影响实现由 AiNOVA 与 Valence 承接。只有当证据真正改变下一次产品决策、能力优先级、投资组合分配或战略选择时，闭环才算完成。",
    feedbackLine:
      "战略定义企业要去哪里；能力定义企业必须能够做什么；O2V 判断一个具体机会是否值得从信号走向价值。",
    publicScopeHeading: "公开范围",
    publicScope:
      "本网站不公开详细 playbook、模板、评分规则、提示词链、计算方法、客户特定实施材料或内部工作材料。"
  }
};

export default function EnterpriseContentPage({ content, locale = "en" }: EnterpriseContentPageProps) {
  const copy = enterpriseCopy[locale];

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
        <div className="not-prose mt-8 grid gap-3 min-[560px]:grid-cols-3">
          {content.cards.map((card) => (
            <section
              key={card.title}
              className="border border-[#d9ddff] bg-white p-4 shadow-[0_18px_45px_rgba(36,52,170,0.06)]"
            >
              <h2 className="text-base font-semibold leading-6 text-[#111427]">
                {card.href ? (
                  <Link href={card.href} className="no-underline hover:text-[#2936c7]">
                    {card.title}
                  </Link>
                ) : (
                  card.title
                )}
              </h2>
              {card.subtitle ? <p className="mt-2 text-xs font-semibold leading-5 text-[#4f58dd]">{card.subtitle}</p> : null}
              <p className="mt-3 text-xs leading-6 text-neutral-700">{card.body}</p>
            </section>
          ))}
        </div>
      ) : null}

      <section>
        <h2>{copy.framingHeading}</h2>
        <p>{copy.framingIntro}</p>
        <div className="not-prose mt-6 grid gap-4 md:grid-cols-2">
          <article className="border border-[#d9ddff] bg-white p-5 shadow-[0_18px_45px_rgba(36,52,170,0.06)]">
            <h3 className="text-base font-semibold text-[#111427]">{copy.strategyTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">{copy.strategyBody}</p>
          </article>
          <article className="border border-[#d9ddff] bg-white p-5 shadow-[0_18px_45px_rgba(36,52,170,0.06)]">
            <h3 className="text-base font-semibold text-[#111427]">{copy.capabilityTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">{copy.capabilityBody}</p>
          </article>
        </div>
        <p><strong>{copy.framingLine}</strong></p>
      </section>

      <section>
        <h2>{copy.coreHeading}</h2>
        <p>{copy.coreIntro}</p>
        <p><strong>Signal → Scenario → Persona → Pain → Product → Validation → Business Case → Asset → Value Story</strong></p>
        <MethodVisual type="o2v" locale={locale} />
        <p><strong>{copy.evidenceLine}</strong></p>
        <p>{copy.evidenceBody}</p>
      </section>

      <section>
        <h2>{copy.distinctionsHeading}</h2>
        <ul>
          <li>{copy.capabilityDefinition}</li>
          <li>{copy.assetDefinition}</li>
          <li>{copy.businessCaseDefinition}</li>
          <li>{copy.impactDefinition}</li>
        </ul>
        <p><strong>{copy.capabilityAssetLine}</strong></p>
      </section>

      <section>
        <h2>{copy.methodsHeading}</h2>
        <ul>
          {copy.methods.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p><strong>{copy.methodLine}</strong></p>
      </section>

      <section>
        <h2>{copy.feedbackHeading}</h2>
        <p>{copy.feedbackBody}</p>
        <p><strong>{copy.feedbackLine}</strong></p>
      </section>

      <section>
        <h2>{copy.publicScopeHeading}</h2>
        <p>{copy.publicScope}</p>
      </section>

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
