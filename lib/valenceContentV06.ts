import type { PageContent } from "@/lib/content";
import { localizedAlternates, type Locale } from "@/lib/i18n";

const publicBoundary: Record<Locale, string> = {
  en:
    "This public introduction explains Valence positioning, principles, and high-level flow. Detailed playbooks, client thresholds, calculation rules, templates, prompt chains, and implementation materials are not published here.",
  zh:
    "本公开介绍仅说明 Valence 的定位、原则和高层流程，不公开详细 Playbook、客户阈值、计算规则、模板、提示词链或实施材料。"
};

export const valenceContentV06: Record<Locale, PageContent> = {
  en: {
    metadata: {
      title: "Valence | Product Value Operations & Governance | O2V Framework",
      description:
        "Valence helps organizations design product value before investment, validate value after launch, and govern value throughout operation.",
      alternates: localizedAlternates("en", "valence")
    },
    title: "Valence",
    subtitle: "Product Value Operations & Governance Model",
    intro: [
      "Valence is an independent method asset within the O2V Enterprise Configuration. It helps organizations design how products and initiatives should realize economic value, establish measurement readiness, and make evidence-backed investment and lifecycle decisions after launch."
    ],
    sections: [
      {
        heading: "Design, Validate, Govern",
        body: [
          "Design value before build. Validate value after launch. Govern value throughout operation.",
          "Valence applies to digital products, AI use cases, applications, data products, platforms, shared services, customer-facing digital assets, and product-like strategic initiatives."
        ],
        visual: "valence"
      },
      {
        heading: "Value Realization Chain",
        flow: [
          "Primary Audience",
          "Main Problem",
          "Expected Change",
          "Evidence KPI",
          "Monetization Logic",
          "Planned Monetized Value",
          "Actual Recognized Value",
          "Governance Decision"
        ],
        body: [
          "Delivery outputs are not economic value. Every material value claim should show a measurable path from a defined audience and problem to a business change and a monetizable result."
        ]
      },
      {
        heading: "Three Economic Outcomes",
        bullets: [
          "Grow: increase revenue, contribution profit, or cash inflow.",
          "Save: reduce or avoid cost and resource consumption.",
          "Protect: reduce revenue loss, risk loss, or business interruption loss."
        ],
        body: [
          "Productivity, experience, decision quality, branding, time criticality, risk reduction, platform reuse, learning, and strategic capability are value mechanisms. They become recognized value only when they connect to Grow, Save, or Protect through credible evidence."
        ]
      },
      {
        heading: "Value Governance in Operation",
        bullets: [
          "Adoption Rate tests whether the primary audience completes the core value behavior.",
          "Investment Efficiency tests whether recognized economic value justifies the current operating cost.",
          "Planned value and cost determine governance attention; actual evidence determines performance.",
          "Repeated weak signals trigger root-cause, product-form, consolidation, investment, or lifecycle discussion."
        ]
      },
      {
        heading: "Product Need Is Not Product Form",
        body: [
          "A required capability, official presence, or business need does not automatically justify a standalone app, mini-program, platform, or dashboard. Valence asks whether the current form creates incremental value relative to a lower-cost alternative."
        ]
      },
      {
        heading: "Relationship With O2V, CLEAR, and AiNOVA",
        bullets: [
          "O2V defines the end-to-end opportunity-to-value logic.",
          "CLEAR turns ambiguous signals into justified action and validation input.",
          "AiNOVA operates enterprise roles, decisions, funding, and governance rhythm.",
          "Valence designs and governs how products and initiatives realize economic value."
        ]
      },
      {
        heading: "Typical Decisions",
        bullets: [
          "Monitor",
          "Promote or Improve",
          "Optimize or simplify the product form",
          "Consolidate or reuse",
          "Keep with time-boxed justification",
          "Suspend or decommission"
        ]
      },
      { heading: "Public Scope", body: [publicBoundary.en] }
    ],
    buttons: [
      {
        label: "Download detailed introduction PDF",
        href: "/downloads/valence-detailed-introduction.pdf"
      }
    ],
    jsonLdDescription:
      "Valence is the O2V product value operations and governance model for designing, validating, and governing economic value."
  },
  zh: {
    metadata: {
      title: "Valence｜产品价值运营与治理｜O2V Framework",
      description:
        "Valence 帮助企业在立项前设计产品如何实现价值，上线后验证价值，并在运行中持续支持投资与生命周期决策。",
      alternates: localizedAlternates("zh", "valence")
    },
    title: "Valence",
    subtitle: "产品价值运营与治理模型",
    intro: [
      "Valence 是 O2V Enterprise Configuration 中的独立方法资产，帮助企业设计产品和举措如何实现经济价值，建立测量准备度，并在上线后通过证据支持投资与生命周期决策。"
    ],
    sections: [
      {
        heading: "立项前设计，上线后验证，运行中治理",
        body: [
          "Design value before build. Validate value after launch. Govern value throughout operation.",
          "Valence 适用于数字化产品、AI use case、应用、数据产品、平台、共享服务、客户数字触点，以及具有持续运行周期的战略举措。"
        ],
        visual: "valence"
      },
      {
        heading: "Value Realization Chain",
        flow: [
          "Primary Audience",
          "Main Problem",
          "Expected Change",
          "Evidence KPI",
          "Monetization Logic",
          "Planned Monetized Value",
          "Actual Recognized Value",
          "Governance Decision"
        ],
        body: [
          "交付产出不等于经济价值。每一个重大价值主张，都应说明它如何从明确的目标受众和问题，经过可测量的变化，最终形成可货币化的业务结果。"
        ]
      },
      {
        heading: "三类最终经济结果",
        bullets: [
          "Grow：增加收入、贡献利润或现金流入。",
          "Save：减少或避免成本和资源消耗。",
          "Protect：减少收入损失、风险损失或业务中断损失。"
        ],
        body: [
          "生产力、体验、决策质量、品牌、时间敏感性、风险降低、平台复用、学习和战略能力，都是价值实现机制。只有通过可信证据连接到 Grow、Save 或 Protect，才能成为被确认的经济价值。"
        ]
      },
      {
        heading: "运行中的价值治理",
        bullets: [
          "Adoption Rate 判断 Primary Audience 是否完成核心价值行为。",
          "Investment Efficiency 判断已确认经济价值是否足以支持当前运行成本。",
          "计划价值和计划成本决定治理关注度，实际证据决定产品表现。",
          "连续弱信号触发根因、产品形态、整合、投资或生命周期讨论。"
        ]
      },
      {
        heading: "产品需求不等于产品形态",
        body: [
          "必要能力、官方存在或业务需求，并不会自动证明必须保留一个独立 App、小程序、平台或 Dashboard。Valence 要求比较当前形态相对于更低成本替代方案创造的增量价值。"
        ]
      },
      {
        heading: "与 O2V、CLEAR 和 AiNOVA 的关系",
        bullets: [
          "O2V 定义端到端的 opportunity-to-value 逻辑。",
          "CLEAR 把模糊信号转化为有依据的行动和验证输入。",
          "AiNOVA 运行企业角色、决策、资金和治理节奏。",
          "Valence 设计并治理产品与举措如何实现经济价值。"
        ]
      },
      {
        heading: "典型治理决策",
        bullets: [
          "Monitor",
          "Promote 或 Improve",
          "Optimize 或简化产品形态",
          "Consolidate 或 Reuse",
          "有时限地 Keep with Justification",
          "Suspend 或 Decommission"
        ]
      },
      { heading: "公开范围", body: [publicBoundary.zh] }
    ],
    buttons: [
      {
        label: "下载详细介绍 PDF（英文）",
        href: "/downloads/valence-detailed-introduction.pdf"
      }
    ],
    jsonLdDescription:
      "Valence 是 O2V 体系下用于设计、验证和持续治理产品经济价值的产品价值运营与治理模型。"
  }
};
