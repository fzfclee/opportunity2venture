import type { Metadata } from "next";
import { localizedAlternates, siteUrl, type Locale } from "@/lib/i18n";

export const releaseVersion = "2.0";
export const publicReleaseDate = "20260614";
export const internalVersion = "v2.0";

export type NavKey =
  | "home"
  | "clear"
  | "personal"
  | "enterprise"
  | "venture"
  | "ainova"
  | "valence"
  | "principles"
  | "copyright"
  | "download"
  | "about";

export type Section = {
  heading: string;
  body?: string[];
  bullets?: string[];
  ordered?: string[];
  flow?: string[];
  visual?: "o2v" | "ainova" | "valence";
};

export type Card = {
  title: string;
  subtitle?: string;
  body: string;
  href?: string;
};

export type PageContent = {
  metadata: Metadata;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  deck?: string[];
  intro?: string[];
  sections: Section[];
  cards?: Card[];
  buttons?: Array<{ label: string; href: string }>;
  jsonLdDescription?: string;
};

type HomeContent = PageContent & {
  title: string;
  subtitle: string;
  tagline: string[];
  deck: string[];
  body: string[];
  bullets: string[];
  buttons: Array<{ label: string; href: string }>;
};

type DownloadCard = {
  key: Locale;
  labels: Record<Locale, string>;
  fileName: string;
  href: string;
};

type DownloadContent = {
  metadata: Metadata;
  title: string;
  deck: string[];
  fullReleaseNote: string;
  note?: string;
  button: string;
  permissionReminder: string;
  fields: {
    language: string;
    fileName: string;
    version: string;
    internalVersion: string;
    copyright: string;
  };
  versionValue: string;
  internalVersionValue: string;
  copyrightValue: string;
};

export type FooterLine = {
  text: string;
  label?: string;
  href?: string;
};

type AboutContent = {
  metadata: Metadata;
  title: string;
  subtitle: string;
  body: RichParagraph[];
  beliefIntro: string;
  belief: RichParagraph;
  contactHeading: string;
  contacts: {
    linkedin: string;
    email: string;
    wechat: string;
  };
};

export type RichTextPart = {
  text: string;
  strong?: boolean;
};

export type RichParagraph = RichTextPart[];

const releaseDeck: Record<Locale, string[]> = {
  en: ["Opportunity-to-Value Framework", `Official Public Release ${publicReleaseDate}`, `Internal Version: ${internalVersion}`],
  zh: ["Opportunity-to-Value Framework", `官方公开发布版 ${publicReleaseDate}`, `内部版本：${internalVersion}`]
};

export const navLabels: Record<Locale, Record<NavKey, string>> = {
  en: {
    home: "Home",
    clear: "CLEAR",
    personal: "Personal",
    enterprise: "Enterprise",
    venture: "Venture",
    ainova: "AiNOVA",
    valence: "Valence",
    principles: "Principles",
    copyright: "Copyright",
    download: "Download",
    about: "About"
  },
  zh: {
    home: "首页",
    clear: "CLEAR",
    personal: "个人配置",
    enterprise: "企业配置",
    venture: "创业配置",
    ainova: "AiNOVA",
    valence: "Valence",
    principles: "原则",
    copyright: "版权",
    download: "下载",
    about: "关于"
  }
};

export const footerContent: Record<Locale, FooterLine[]> = {
  en: [
    { text: "O2V Framework | Opportunity-to-Value Framework" },
    { text: "From Signal to Impact. From Idea to Asset." },
    { text: "Copyright (c) Li Zhi. All rights reserved." },
    {
      text:
        "O2V Enterprise Configuration, O2V Venture Configuration, O2V Personal Configuration, CLEAR / Signal-to-Action, AiNOVA, Valence, related method practices, text, diagrams, artifact taxonomy, and publication materials are O2V-related method assets created by Li Zhi. All rights reserved unless separately licensed in writing."
    },
    { label: "Official site:", text: "www.o2vframework.com", href: "https://www.o2vframework.com" },
    { label: "Email:", text: "contact@o2vframework.com", href: "mailto:contact@o2vframework.com" },
    { text: `Citation: Li Zhi, O2V Framework, Official Public Release ${publicReleaseDate}, Internal Version ${internalVersion}.` }
  ],
  zh: [
    { text: "O2V Framework | Opportunity-to-Value Framework" },
    { text: "从机会信号到实际影响。从创意构想到长期资产。" },
    { text: "版权所有人：李智 / Li Zhi。保留所有权利。" },
    {
      text:
        "O2V Enterprise Configuration、O2V Venture Configuration、O2V Personal Configuration、CLEAR / Signal-to-Action、AiNOVA、Valence 及相关方法实践、文本、图示、工件分类和发布材料，均为李智 / Li Zhi 基于 O2V Framework 创建的相关方法资产。除非另有书面授权，保留所有权利。"
    },
    { label: "官方网站：", text: "www.o2vframework.com", href: "https://www.o2vframework.com" },
    { label: "Email:", text: "contact@o2vframework.com", href: "mailto:contact@o2vframework.com" },
    { text: `引用格式：李智，O2V Framework，官方公开发布版 ${publicReleaseDate}，内部版本 ${internalVersion}。` }
  ]
};

const publicBoundary = {
  en:
    "Detailed playbooks, templates, scoring rules, prompt chains, calculation methods, client-specific implementation materials, and internal working materials are not published on this site.",
  zh:
    "本网站不公开详细 playbook、模板、评分规则、提示词链、计算方法、客户特定实施材料或内部工作材料。"
};

const configurationCards = (locale: Locale): Card[] =>
  locale === "zh"
    ? [
        {
          title: "O2V Enterprise Configuration",
          subtitle: "面向企业价值实现",
          body: "面向企业战略、数字化和 AI 机会，当前核心方法资产为 AiNOVA 和 Valence，并可调用企业语境下的 CLEAR。",
          href: "/zh"
        },
        {
          title: "O2V Venture Configuration",
          subtitle: "面向创业和早期机会验证",
          body: "面向创始人、builder、创业团队和投资相关场景，帮助从机会信号走向验证、商业论证、资产和融资叙事。",
          href: "/zh/venture"
        },
        {
          title: "O2V Personal Configuration",
          subtitle: "以 CLEAR 为核心的个人判断与行动配置",
          body: "面向个人、专业人士和复杂生活/职业情境，帮助把混乱信号转化为更清晰的判断、沟通和下一步行动。",
          href: "/zh/personal"
        }
      ]
    : [
        {
          title: "O2V Enterprise Configuration",
          subtitle: "Enterprise value realization configuration",
          body: "For strategic, digital, and AI opportunities inside organizations. Its current core method assets are AiNOVA and Valence, supported by enterprise-context CLEAR.",
          href: "/en"
        },
        {
          title: "O2V Venture Configuration",
          subtitle: "Venture opportunity and early validation configuration",
          body: "For founders, builders, venture teams, and investor-facing contexts that need to move from opportunity signal to validation, business case, asset, and financing story.",
          href: "/en/venture"
        },
        {
          title: "O2V Personal Configuration",
          subtitle: "Personal judgment and action configuration centered on CLEAR",
          body: "For individuals and professionals who need to turn messy personal, career, communication, relationship, and self-management signals into clearer judgment and next action.",
          href: "/en/personal"
        }
      ];

export const enterpriseContent: Record<Locale, HomeContent> = {
  en: {
    metadata: {
      title: "O2V Framework | Enterprise Configuration",
      description:
        "O2V Enterprise Configuration is the enterprise-facing O2V Framework introduction for turning strategic, digital, and AI signals into evidence-backed value, governance, and assets.",
      alternates: localizedAlternates("en")
    },
    eyebrow: "O2V Enterprise Configuration",
    title: "O2V Framework",
    subtitle: "Enterprise Configuration",
    tagline: ["From Signal to Impact.", "From Idea to Asset."],
    deck: releaseDeck.en,
    intro: [],
    body: [
      "O2V Enterprise Configuration is the enterprise-facing configuration of the O2V Framework. It helps organizations turn strategic, digital, and AI signals into validated opportunities, business cases, governance decisions, measurable impact, and long-term assets."
    ],
    bullets: [
      "O2V Framework is the unique parent Opportunity-to-Value framework.",
      "Enterprise Configuration is centered on AiNOVA and Valence while using CLEAR as an enterprise signal-to-action front layer.",
      "Its boundary is not a department. Its boundary is the value flow across strategy, business, technology, finance, governance, and leadership decision-making."
    ],
    cards: [
      {
        title: "CLEAR",
        subtitle: "Signal-to-action layer for enterprise judgment",
        body: "CLEAR in the Enterprise Configuration helps teams turn ambiguous strategic, business, AI, risk, and governance signals into clearer hypotheses, accountable actions, and validation inputs.",
        href: "/en/enterprise/clear"
      },
      {
        title: "AiNOVA",
        subtitle: "AI-native Operating Model for Enterprise Value Realization",
        body: "AiNOVA translates O2V principles into an operating model for enterprise AI, digital, and strategic value realization.",
        href: "/en/ainova"
      },
      {
        title: "Valence",
        subtitle: "Product Value Operations & Governance Model",
        body: "Valence governs whether products, AI use cases, platforms, shared services, and initiatives continue to create value after launch.",
        href: "/en/valence"
      }
    ],
    sections: [
      {
        heading: "Framework Core",
        body: [
          "The shared O2V chain is Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story.",
          "Evidence is not a separate tenth step. Evidence runs through the whole chain: signals become evidence, evidence supports business cases, impact drives decisions, and decisions may become durable assets."
        ],
        visual: "o2v"
      },
      {
        heading: "Enterprise Method Architecture",
        bullets: [
          "CLEAR handles the front layer: clarify facts, locate signals, expose opportunities, act with a justified next move, and review the evidence.",
          "AiNOVA handles the enterprise operating model: strategic signal, validation, leadership decision, product or initiative governance, and continuous intake.",
          "Valence handles product and initiative value governance after launch or operation."
        ]
      },
      {
        heading: "Configuration Map",
        body: [
          "O2V v2.0 is public as one parent framework with three configurations. Each configuration has its own Home page and its own CLEAR page because the context, audience, and action logic differ."
        ]
      },
      { heading: "Public Scope", body: [publicBoundary.en] }
    ],
    buttons: [
      { label: "CLEAR", href: "/en/enterprise/clear" },
      { label: "AiNOVA", href: "/en/ainova" },
      { label: "Valence", href: "/en/valence" },
      { label: "Principles", href: "/en/principles" }
    ],
    jsonLdDescription:
      "O2V Enterprise Configuration turns strategic, digital, and AI signals into evidence-backed value, governance, impact, and assets."
  },
  zh: {
    metadata: {
      title: "O2V Framework | 企业配置",
      description:
        "O2V Enterprise Configuration 是 O2V Framework 在企业价值实现语境下的框架介绍页，帮助组织把战略、数字化和 AI 信号转化为证据、治理、影响和长期资产。",
      alternates: localizedAlternates("zh")
    },
    eyebrow: "O2V Enterprise Configuration",
    title: "O2V Framework",
    subtitle: "企业配置",
    tagline: ["从机会信号到实际影响。", "从创意构想到长期资产。"],
    deck: releaseDeck.zh,
    intro: [],
    body: [
      "O2V Enterprise Configuration 是 O2V Framework 面向企业场景的配置版本。它帮助组织把战略、数字化和 AI 信号转化为经过验证的机会、Business Case、治理决策、可衡量影响和长期资产。"
    ],
    bullets: [
      "O2V Framework 是唯一的 Opportunity-to-Value 总框架。",
      "企业配置以 AiNOVA 和 Valence 为核心方法资产，并使用企业语境下的 CLEAR 作为信号到行动的前置层。",
      "它的边界不是某个部门，而是贯穿战略、业务、技术、财务、治理和管理层决策的价值流。"
    ],
    cards: [
      {
        title: "CLEAR",
        subtitle: "企业判断中的信号到行动层",
        body: "企业配置下的 CLEAR 帮助团队把模糊的战略、业务、AI、风险和治理信号转化为更清晰的假设、负责的行动和验证输入。",
        href: "/zh/enterprise/clear"
      },
      {
        title: "AiNOVA",
        subtitle: "面向企业价值实现的 AI-native Operating Model",
        body: "AiNOVA 把 O2V 原则转化为企业 AI、数字化和战略价值实现的运营模型。",
        href: "/zh/ainova"
      },
      {
        title: "Valence",
        subtitle: "Product Value Operations & Governance Model",
        body: "Valence 治理产品、AI use case、平台、共享服务和战略举措上线或运行后是否仍在创造价值。",
        href: "/zh/valence"
      }
    ],
    sections: [
      {
        heading: "框架核心",
        body: [
          "O2V 的共同链路是 Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story。",
          "Evidence 不是额外的第十步，而是贯穿全链路：信号变成证据，证据支撑 Business Case，影响进入决策，决策进一步沉淀为长期资产。"
        ],
        visual: "o2v"
      },
      {
        heading: "企业方法架构",
        bullets: [
          "CLEAR 处理前置层：Clarify the Facts、Locate the Signal、Expose the Opportunity、Act with a Justified Next Move、Review the Evidence。",
          "AiNOVA 处理企业运营模型：战略信号、价值验证、管理层决策、产品或举措治理、持续接收与运行。",
          "Valence 处理产品和举措上线或运行后的价值治理。"
        ]
      },
      {
        heading: "配置地图",
        body: [
          "O2V v2.0 对外是一套总框架和三个配置。每个配置都有自己的 Home 页面和 CLEAR 页面，因为使用对象、场景和行动逻辑不同。"
        ]
      },
      { heading: "公开范围", body: [publicBoundary.zh] }
    ],
    buttons: [
      { label: "CLEAR", href: "/zh/enterprise/clear" },
      { label: "AiNOVA", href: "/zh/ainova" },
      { label: "Valence", href: "/zh/valence" },
      { label: "原则", href: "/zh/principles" }
    ],
    jsonLdDescription:
      "O2V Enterprise Configuration 帮助企业把战略、数字化和 AI 信号转化为证据支持的价值、治理、影响和资产。"
  }
};

export const homeContent = enterpriseContent;

export const ventureContent: Record<Locale, PageContent> = {
  en: {
    metadata: {
      title: "O2V Framework | Venture Configuration",
      description:
        "O2V Venture Configuration is the venture-context O2V Framework introduction for founders, builders, venture teams, and investors.",
      alternates: localizedAlternates("en", "venture")
    },
    eyebrow: "O2V Venture Configuration",
    title: "O2V Framework",
    subtitle: "Venture Configuration",
    deck: releaseDeck.en,
    intro: [
      "O2V Venture Configuration applies the O2V Framework to venture opportunity judgment, early validation, business case development, asset formation, and financing story preparation."
    ],
    cards: configurationCards("en"),
    sections: [
      {
        heading: "Framework Core In Venture Context",
        body: [
          "The shared chain remains Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story.",
          "In venture context, Value Story may appear as Financing Story when the audience is an investor, sponsor, or resource allocator."
        ],
        visual: "o2v"
      },
      {
        heading: "What Venture Configuration Helps With",
        bullets: [
          "Clarify whether an early signal is only interest, or a real opportunity worth testing.",
          "Translate customer, market, founder, investor, and product signals into validation actions.",
          "Build an evidence-backed path from idea to product, business case, asset, and financing story."
        ]
      },
      {
        heading: "Relationship To CLEAR",
        body: [
          "CLEAR in the Venture Configuration is the configuration-specific CLEAR page for founders and builders. It handles the front layer: messy venture signals, validation uncertainty, user commitment, investor questions, and next action."
        ]
      },
      { heading: "Public Scope", body: [publicBoundary.en] }
    ],
    buttons: [
      { label: "CLEAR", href: "/en/venture/clear" },
      { label: "Principles", href: "/en/principles" },
      { label: "Download", href: "/en/download" }
    ]
  },
  zh: {
    metadata: {
      title: "O2V Framework | 创业配置",
      description: "O2V Venture Configuration 是 O2V Framework 在创业、早期机会验证和融资叙事语境下的框架介绍页。",
      alternates: localizedAlternates("zh", "venture")
    },
    eyebrow: "O2V Venture Configuration",
    title: "O2V Framework",
    subtitle: "创业配置",
    deck: releaseDeck.zh,
    intro: [
      "O2V Venture Configuration 把 O2V Framework 应用于创业机会判断、早期验证、Business Case、资产形成和融资叙事准备。"
    ],
    cards: configurationCards("zh"),
    sections: [
      {
        heading: "创业语境下的框架核心",
        body: [
          "共同链路仍然是 Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story。",
          "在创业语境下，当听众是投资人、赞助方或资源配置者时，Value Story 可以表现为 Financing Story。"
        ],
        visual: "o2v"
      },
      {
        heading: "创业配置解决什么",
        bullets: [
          "判断一个早期信号只是兴趣，还是值得验证的真实机会。",
          "把客户、市场、创始人、投资人和产品信号转化为验证行动。",
          "建立从创意到产品、Business Case、资产和融资叙事的证据路径。"
        ]
      },
      {
        heading: "与 CLEAR 的关系",
        body: [
          "创业配置下的 CLEAR 页面处理前置层：混乱的创业信号、验证不确定性、用户承诺、投资人问题和下一步行动。"
        ]
      },
      { heading: "公开范围", body: [publicBoundary.zh] }
    ],
    buttons: [
      { label: "CLEAR", href: "/zh/venture/clear" },
      { label: "原则", href: "/zh/principles" },
      { label: "下载", href: "/zh/download" }
    ]
  }
};

export const personalContent: Record<Locale, PageContent> = {
  en: {
    metadata: {
      title: "O2V Framework | Personal Configuration",
      description:
        "O2V Personal Configuration applies O2V and CLEAR to personal judgment, career decisions, communication, relationships, and self-management.",
      alternates: localizedAlternates("en", "personal")
    },
    eyebrow: "O2V Personal Configuration",
    title: "O2V Framework",
    subtitle: "Personal Configuration",
    deck: releaseDeck.en,
    intro: [
      "O2V Personal Configuration applies the O2V Framework to personal judgment, career choices, communication, relationships, self-management, and complex situations where signals are real but not yet clear."
    ],
    cards: configurationCards("en"),
    sections: [
      {
        heading: "Framework Core In Personal Context",
        body: [
          "The O2V logic still starts with signal and moves toward value, but the value may be a clearer decision, better communication, protected optionality, reduced friction, or a more deliberate next move.",
          "Personal Configuration is not a private diary or personal knowledge base. It is a public-facing method configuration for turning personal and professional signals into clearer action."
        ],
        visual: "o2v"
      },
      {
        heading: "CLEAR As The Core Public Method Asset",
        body: [
          "CLEAR / Signal-to-Action is the primary public method asset for O2V Personal Configuration.",
          "It helps users clarify facts, locate the signal, expose the opportunity or tension, act with a justified next move, and review the evidence."
        ]
      },
      {
        heading: "Typical Use Contexts",
        bullets: [
          "Career and role decisions where the facts are incomplete.",
          "Communication and stakeholder situations where intention, signal, and next action are mixed.",
          "Personal productivity and self-management moments where repeated weak signals need structure.",
          "Professional judgment situations where a person needs a grounded next move rather than more abstract reflection."
        ]
      },
      { heading: "Public Scope", body: [publicBoundary.en] }
    ],
    buttons: [
      { label: "CLEAR", href: "/en/personal/clear" },
      { label: "Public Skill Repo", href: "https://github.com/fzfclee/signal-to-action-planner" },
      { label: "Principles", href: "/en/principles" }
    ]
  },
  zh: {
    metadata: {
      title: "O2V Framework | 个人配置",
      description: "O2V Personal Configuration 把 O2V 和 CLEAR 应用于个人判断、职业选择、沟通、关系和自我管理。",
      alternates: localizedAlternates("zh", "personal")
    },
    eyebrow: "O2V Personal Configuration",
    title: "O2V Framework",
    subtitle: "个人配置",
    deck: releaseDeck.zh,
    intro: [
      "O2V Personal Configuration 把 O2V Framework 应用于个人判断、职业选择、沟通、关系、自我管理，以及那些信号真实但尚不清晰的复杂情境。"
    ],
    cards: configurationCards("zh"),
    sections: [
      {
        heading: "个人语境下的框架核心",
        body: [
          "O2V 逻辑仍然从 signal 出发，走向 value；但在个人语境中，value 可能是更清晰的判断、更好的沟通、被保护的选择权、更少的摩擦，或一个更有意识的下一步。",
          "Personal Configuration 不是私人日记，也不是个人知识库公开化，而是一套公开方法配置，用来把个人和职业信号转化为更清晰的行动。"
        ],
        visual: "o2v"
      },
      {
        heading: "CLEAR 是核心公开方法资产",
        body: [
          "CLEAR / Signal-to-Action 是 O2V Personal Configuration 的核心公开方法资产。",
          "它帮助使用者澄清事实、定位信号、暴露机会或张力、基于证据行动，并复盘结果。"
        ]
      },
      {
        heading: "典型使用场景",
        bullets: [
          "事实不完整时的职业和角色选择。",
          "意图、信号和下一步行动混在一起的沟通和 stakeholder 情境。",
          "重复弱信号需要结构化处理的个人效率和自我管理时刻。",
          "需要一个扎实下一步，而不是继续抽象反思的专业判断场景。"
        ]
      },
      { heading: "公开范围", body: [publicBoundary.zh] }
    ],
    buttons: [
      { label: "CLEAR", href: "/zh/personal/clear" },
      { label: "公开 Skill Repo", href: "https://github.com/fzfclee/signal-to-action-planner" },
      { label: "原则", href: "/zh/principles" }
    ]
  }
};

const clearSection = (locale: Locale, mode: "enterprise" | "venture" | "personal"): PageContent => {
  const zh = locale === "zh";
  const path = `${mode}/clear`;
  const names = {
    enterprise: "CLEAR",
    venture: "CLEAR",
    personal: "CLEAR"
  };
  const subtitles = {
    enterprise: zh ? "企业配置下的 CLEAR / Signal-to-Action" : "CLEAR / Signal-to-Action in Enterprise Configuration",
    venture: zh ? "创业配置下的 CLEAR / Signal-to-Action" : "CLEAR / Signal-to-Action in Venture Configuration",
    personal: zh ? "个人配置下的 CLEAR / Signal-to-Action" : "CLEAR / Signal-to-Action in Personal Configuration"
  };
  const intro = {
    enterprise: zh
      ? "企业配置下的 CLEAR 用于把企业中的战略、业务、AI、风险和治理信号转化为可讨论、可负责、可验证的行动输入。"
      : "CLEAR in the Enterprise Configuration turns strategic, business, AI, risk, and governance signals into discussion-ready, accountable, and verifiable action input.",
    venture: zh
      ? "创业配置下的 CLEAR 用于把创始人、客户、市场、产品、投资人和验证信号转化为更清晰的创业行动。"
      : "CLEAR in the Venture Configuration turns founder, customer, market, product, investor, and validation signals into clearer venture action.",
    personal: zh
      ? "个人配置下的 CLEAR 用于把个人、职业、沟通、关系和自我管理中的混乱信号转化为更清晰的判断和下一步行动。"
      : "CLEAR in the Personal Configuration turns messy personal, career, communication, relationship, and self-management signals into clearer judgment and next action."
  };
  const outputs = {
    enterprise: zh
      ? ["企业信号摘要", "行动假设", "验证信号", "决策输入", "AiNOVA / Valence 承接说明"]
      : ["Enterprise signal brief", "Action hypothesis", "Validation signal", "Decision input", "AiNOVA / Valence handoff note"],
    venture: zh
      ? ["机会信号摘要", "用户或市场假设", "验证动作", "行动路线", "融资或资源叙事输入"]
      : ["Opportunity signal brief", "User or market hypothesis", "Validation action", "Action roadmap", "Financing or resource-story input"],
    personal: zh
      ? ["事实与假设澄清", "关键信号", "行动假设", "下一步行动", "复盘证据"]
      : ["Fact and assumption clarification", "Key signal", "Action hypothesis", "Next move", "Review evidence"]
  };

  return {
    metadata: {
      title: `${names[mode]} | O2V Framework`,
      description: intro[mode],
      alternates: localizedAlternates(locale, path)
    },
    eyebrow: `${mode === "enterprise" ? "O2V Enterprise Configuration" : mode === "venture" ? "O2V Venture Configuration" : "O2V Personal Configuration"}`,
    title: names[mode],
    subtitle: subtitles[mode],
    deck: releaseDeck[locale],
    intro: [intro[mode]],
    sections: [
      {
        heading: zh ? "CLEAR 五步" : "CLEAR Five Steps",
        flow: zh
          ? [
              "C - Clarify the Facts：澄清事实与假设",
              "L - Locate the Signal：定位真正信号",
              "E - Expose the Opportunity：暴露机会、张力或风险",
              "A - Act with a Justified Next Move：提出有依据的下一步行动",
              "R - Review the Evidence：复盘证据并调整"
            ]
          : [
              "C - Clarify the Facts",
              "L - Locate the Signal",
              "E - Expose the Opportunity",
              "A - Act with a Justified Next Move",
              "R - Review the Evidence"
            ]
      },
      {
        heading: zh ? "这个配置下 CLEAR 解决什么" : "What CLEAR Solves In This Configuration",
        body: [intro[mode]]
      },
      {
        heading: zh ? "主要 Artifact" : "Main Artifacts",
        bullets: outputs[mode]
      },
      {
        heading: zh ? "与 O2V 的关系" : "Relationship To O2V",
        body: [
          zh
            ? "CLEAR 是 O2V 下的信号到行动层，不是新的父框架。它帮助把模糊输入整理成 O2V 后续链路可以承接的判断、行动和证据。"
            : "CLEAR is the signal-to-action layer under O2V, not a new parent framework. It helps turn ambiguous input into judgment, action, and evidence that the O2V chain can use."
        ]
      },
      { heading: zh ? "公开范围" : "Public Scope", body: [zh ? publicBoundary.zh : publicBoundary.en] }
    ],
    buttons:
      mode === "personal"
        ? [
            { label: zh ? "公开 Skill Repo" : "Public Skill Repo", href: "https://github.com/fzfclee/signal-to-action-planner" },
            { label: zh ? "个人配置" : "Personal Home", href: `/${locale}/personal` }
          ]
        : [{ label: zh ? "返回配置首页" : "Back To Configuration Home", href: mode === "enterprise" ? `/${locale}` : `/${locale}/${mode}` }]
  };
};

export const enterpriseClearContent: Record<Locale, PageContent> = {
  en: clearSection("en", "enterprise"),
  zh: clearSection("zh", "enterprise")
};

export const ventureClearContent: Record<Locale, PageContent> = {
  en: clearSection("en", "venture"),
  zh: clearSection("zh", "venture")
};

export const personalClearContent: Record<Locale, PageContent> = {
  en: clearSection("en", "personal"),
  zh: clearSection("zh", "personal")
};

export const principleContent: Record<Locale, { metadata: Metadata; title: string; principles: string[] }> = {
  en: {
    metadata: {
      title: "Core Principles | O2V Framework",
      description: "Core O2V principles shared by Enterprise, Venture, and Personal configurations.",
      alternates: localizedAlternates("en", "principles")
    },
    title: "Core Principles",
    principles: [
      "Start from signals, not from preferred solutions.",
      "Separate facts, assumptions, signals, implications, and actions.",
      "Treat evidence as a spine across the whole value flow.",
      "Make value explicit before asking for resources.",
      "Use lightweight structure, not heavy bureaucracy.",
      "Keep human judgment at decision points.",
      "Let weak or negative evidence protect resources early.",
      "Turn validated value into reusable assets.",
      "Keep method assets, tools, systems, services, and partners commercially separable.",
      "All O2V configurations and method practices should express the same parent principles while remaining modular, separable, and context-adaptable."
    ]
  },
  zh: {
    metadata: {
      title: "核心原则 | O2V Framework",
      description: "O2V Framework 在企业、创业和个人配置中共同遵循的核心原则。",
      alternates: localizedAlternates("zh", "principles")
    },
    title: "核心原则",
    principles: [
      "从信号出发，而不是从偏好的方案出发。",
      "区分事实、假设、信号、含义和行动。",
      "把证据作为贯穿全价值流的 spine。",
      "在请求资源之前，先把价值说清楚。",
      "使用轻量结构，而不是重型官僚体系。",
      "在关键决策点保留人的判断。",
      "让弱证据或负向证据尽早保护资源。",
      "把经过验证的价值沉淀为可复用资产。",
      "保持方法资产、工具、系统、服务和伙伴在商业上可拆分。",
      "O2V 的所有配置和方法实践都应表达同一套父级原则，同时保持模块化、可拆分和可适配。"
    ]
  }
};

export const downloadCards: DownloadCard[] = [
  {
    key: "en",
    labels: { en: "English PDF", zh: "英文 PDF" },
    fileName: "o2v-framework-enterprise-configuration-20260607-en.pdf",
    href: "/downloads/o2v-framework-enterprise-configuration-20260607-en.pdf"
  },
  {
    key: "zh",
    labels: { en: "Chinese PDF", zh: "中文 PDF" },
    fileName: "o2v-framework-enterprise-configuration-20260607-zh.pdf",
    href: "/downloads/o2v-framework-enterprise-configuration-20260607-zh.pdf"
  }
];

export const downloadContent: Record<Locale, DownloadContent> = {
  en: {
    metadata: {
      title: "Download | O2V Framework",
      description: "Download public O2V Framework PDF materials. PDF files may reference earlier release files; the current web release is v2.0.",
      alternates: localizedAlternates("en", "download")
    },
    title: "Download",
    deck: releaseDeck.en,
    fullReleaseNote:
      "PDF downloads may reference earlier release files. The current web release is O2V Framework / Official Public Release 20260614 / Internal Version v2.0.",
    note: "Detailed configuration-specific PDF introductions may be added later without changing the public website release identity.",
    button: "Download",
    permissionReminder: "Downloads are provided for reference. Method rights remain reserved unless separately licensed in writing.",
    fields: {
      language: "Language",
      fileName: "File name",
      version: "Public release",
      internalVersion: "Internal version",
      copyright: "Copyright"
    },
    versionValue: `Official Public Release ${publicReleaseDate}`,
    internalVersionValue: internalVersion,
    copyrightValue: "Copyright (c) Li Zhi. All rights reserved."
  },
  zh: {
    metadata: {
      title: "下载 | O2V Framework",
      description: "下载 O2V Framework 公开 PDF 材料。PDF 文件可能仍指向早期发布文件；当前官网版本为 v2.0。",
      alternates: localizedAlternates("zh", "download")
    },
    title: "下载",
    deck: releaseDeck.zh,
    fullReleaseNote:
      "PDF 下载文件可能仍指向早期发布文件。当前官网版本为 O2V Framework / Official Public Release 20260614 / Internal Version v2.0。",
    note: "后续可以加入各配置的详细介绍 PDF，但不改变当前官网发布版本口径。",
    button: "下载",
    permissionReminder: "下载材料仅供参考。除非另有书面授权，方法资产权利仍予保留。",
    fields: {
      language: "语言",
      fileName: "文件名",
      version: "公开发布版",
      internalVersion: "内部版本",
      copyright: "版权"
    },
    versionValue: `官方公开发布版 ${publicReleaseDate}`,
    internalVersionValue: internalVersion,
    copyrightValue: "版权所有人：李智 / Li Zhi。保留所有权利。"
  }
};

export const ainovaContent: Record<Locale, PageContent> = {
  en: {
    metadata: {
      title: "AiNOVA | O2V Framework",
      description: "AiNOVA is an AI-native Operating Model for Enterprise Value Realization.",
      alternates: localizedAlternates("en", "ainova")
    },
    title: "AiNOVA",
    subtitle: "AI-native Operating Model for Enterprise Value Realization",
    deck: releaseDeck.en,
    intro: [
      "AiNOVA is a core method asset of the O2V Enterprise Configuration. It translates the parent O2V principles into an enterprise operating model for AI, digital, and strategic value realization."
    ],
    sections: [
      {
        heading: "Operating Model Map",
        body: [
          "AiNOVA is not a Digital & Tech department model. It is a value-flow operating model that can be adopted by strategy offices, business units, digital and AI organizations, product teams, PMO, shared functions, and leadership teams."
        ],
        visual: "ainova"
      },
      {
        heading: "Five Enterprise Public Domains",
        ordered: [
          "Strategic Signal & Opportunity: identifies strategic, business, market, customer, regulatory, competitive, and AI signals worth further judgment.",
          "Value Hypothesis & Validation: turns opportunities into value hypotheses, validation plans, evidence reviews, and resource decisions.",
          "Leadership & Decision: compresses execution information into management signals and decision-ready packets.",
          "Product / Initiative Value Governance: governs whether products, AI use cases, platforms, shared services, or initiatives continue to create value.",
          "Continuous Intake & Run: handles run-phase requests, changes, issues, and improvements through a value-linked intake lens."
        ]
      },
      {
        heading: "Workforce & Ways of Working",
        body: [
          "AiNOVA includes the human side of AI value realization: leadership absorption capacity, decision mechanisms, team ways of working, and the ability of people and organizations to learn how to work with AI without slowing value flow."
        ]
      },
      {
        heading: "Main Artifacts",
        bullets: [
          "Strategic signal and opportunity brief",
          "Value hypothesis and validation note",
          "Leadership decision packet",
          "Product or initiative governance record",
          "Continuous intake and run-phase value record",
          "CLEAR handoff note"
        ]
      },
      { heading: "Public Scope", body: [publicBoundary.en] }
    ],
    buttons: [{ label: "Download detailed introduction PDF", href: "/downloads/ainova-detailed-introduction.pdf" }]
  },
  zh: {
    metadata: {
      title: "AiNOVA | O2V Framework",
      description: "AiNOVA 是面向企业价值实现的 AI-native Operating Model。",
      alternates: localizedAlternates("zh", "ainova")
    },
    title: "AiNOVA",
    subtitle: "面向企业价值实现的 AI-native Operating Model",
    deck: releaseDeck.zh,
    intro: [
      "AiNOVA 是 O2V Enterprise Configuration 的核心方法资产。它把 O2V 的父级原则转化为企业 AI、数字化和战略价值实现的运营模型。"
    ],
    sections: [
      {
        heading: "运营模型总图",
        body: [
          "AiNOVA 不是 Digital & Tech 部门模型，而是一套价值流运营模型，可被战略办公室、业务单元、数字化和 AI 组织、产品团队、PMO、共享职能和管理团队采用。"
        ],
        visual: "ainova"
      },
      {
        heading: "五个企业公开领域",
        ordered: [
          "Strategic Signal & Opportunity：识别值得进一步判断的战略、业务、市场、客户、监管、竞争和 AI 信号。",
          "Value Hypothesis & Validation：把机会转化为价值假设、验证计划、证据复盘和资源决策。",
          "Leadership & Decision：把执行信息压缩成管理信号和可决策的 decision packet。",
          "Product / Initiative Value Governance：治理产品、AI use case、平台、共享服务或战略举措是否仍在创造价值。",
          "Continuous Intake & Run：用价值关联的 intake 视角处理运行阶段的请求、变化、问题和改进。"
        ]
      },
      {
        heading: "Workforce & Ways of Working",
        body: [
          "AiNOVA 包含 AI 价值实现中的人的一面：领导层承接能力、治理机制、团队工作方式，以及组织学习如何与 AI 一起工作的能力，同时不让治理拖慢价值流。"
        ]
      },
      {
        heading: "主要 Artifact",
        bullets: [
          "战略信号与机会摘要",
          "价值假设与验证说明",
          "管理层 decision packet",
          "产品或举措治理记录",
          "持续 intake 与运行阶段价值记录",
          "CLEAR 承接说明"
        ]
      },
      { heading: "公开范围", body: [publicBoundary.zh] }
    ],
    buttons: [{ label: "下载详细介绍 PDF", href: "/downloads/ainova-detailed-introduction.pdf" }]
  }
};

export const valenceContent: Record<Locale, PageContent> = {
  en: {
    metadata: {
      title: "Valence | O2V Framework",
      description: "Valence is a Product Value Operations & Governance Model used in the O2V Enterprise Configuration.",
      alternates: localizedAlternates("en", "valence")
    },
    title: "Valence",
    subtitle: "Product Value Operations & Governance Model",
    deck: releaseDeck.en,
    intro: [
      "Valence is used in the O2V Enterprise Configuration while remaining an independent O2V method asset. AiNOVA uses Valence in its Product / Initiative Value Governance Domain."
    ],
    sections: [
      {
        heading: "Value Governance Map",
        body: [
          "Valence governs whether a product, AI use case, platform, shared service, or strategic initiative continues to create value after launch or operation."
        ],
        visual: "valence"
      },
      {
        heading: "Decision Matrix Overview",
        body: [
          "Valence uses a practical governance matrix around adoption, impact, investment efficiency, risk, and operating friction. The matrix is a governance trigger, not an automatic decision. Final judgment still depends on product type, repeated signals, root cause, risk, and management context."
        ]
      },
      {
        heading: "Lifecycle States",
        bullets: [
          "Monitor: the product is within an acceptable range and needs normal observation.",
          "Promote: the value logic is credible, but target users or stakeholders are not sufficiently activated.",
          "Improve: product, process, data, workflow, or user experience issues need correction.",
          "Optimize: value exists, but cost, complexity, support burden, or operating effort is too high.",
          "Keep as-is with justification: the product is retained temporarily because a documented business reason exists.",
          "Suspend: new investment, delivery, promotion, or active operation is paused until a dependency, decision, budget, compliance answer, strategic clarity, or restart trigger is resolved.",
          "Merge: overlapping products, platforms, services, or capabilities should be consolidated.",
          "Decommission: the product, application, or capability should be retired when continued retention is no longer justified."
        ]
      },
      {
        heading: "Main Artifacts",
        bullets: [
          "Product signal record",
          "Product value view",
          "Investment efficiency snapshot",
          "Lifecycle decision record",
          "Governance action log",
          "Follow-up evidence pack",
          "Product value story"
        ]
      },
      { heading: "Public Scope", body: [publicBoundary.en] }
    ],
    buttons: [{ label: "Download detailed introduction PDF", href: "/downloads/valence-detailed-introduction.pdf" }]
  },
  zh: {
    metadata: {
      title: "Valence | O2V Framework",
      description: "Valence 是 O2V Enterprise Configuration 中使用的 Product Value Operations & Governance Model。",
      alternates: localizedAlternates("zh", "valence")
    },
    title: "Valence",
    subtitle: "Product Value Operations & Governance Model",
    deck: releaseDeck.zh,
    intro: [
      "Valence 被用于 O2V Enterprise Configuration，同时保持为独立的 O2V 方法资产。AiNOVA 在 Product / Initiative Value Governance Domain 中调用 Valence。"
    ],
    sections: [
      {
        heading: "价值治理总图",
        body: [
          "Valence 治理产品、AI use case、平台、共享服务或战略举措上线或运行后是否仍在创造价值。"
        ],
        visual: "valence"
      },
      {
        heading: "决策矩阵概览",
        body: [
          "Valence 围绕 adoption、impact、investment efficiency、risk 和 operating friction 使用实用的治理矩阵。矩阵是治理触发器，不是自动决策器。最终判断仍要结合产品类型、重复信号、根因、风险和管理语境。"
        ]
      },
      {
        heading: "产品生命周期状态",
        bullets: [
          "Monitor：产品处在可接受范围内，只需要正常观察。",
          "Promote：价值逻辑可信，但目标用户或 stakeholder 尚未被充分激活。",
          "Improve：产品、流程、数据、工作流或用户体验问题需要纠偏。",
          "Optimize：价值存在，但成本、复杂度、支持负担或运行投入过高。",
          "Keep as-is with justification：因为有被记录的业务理由，产品被临时保留。",
          "Suspend：暂停新增投入、交付、推广或主动运行，直到依赖、决策、预算、合规回应、战略清晰度或 restart trigger 被解决。",
          "Merge：重叠的产品、平台、服务或能力需要合并。",
          "Decommission：当继续保留不再有充分理由时，产品、应用或能力应被退役。"
        ]
      },
      {
        heading: "主要 Artifact",
        bullets: [
          "产品信号记录",
          "产品价值视图",
          "Investment efficiency 快照",
          "生命周期决策记录",
          "治理行动日志",
          "后续证据包",
          "产品价值故事"
        ]
      },
      { heading: "公开范围", body: [publicBoundary.zh] }
    ],
    buttons: [{ label: "下载详细介绍 PDF", href: "/downloads/valence-detailed-introduction.pdf" }]
  }
};

export const copyrightContent: Record<Locale, { metadata: Metadata; title: string; sections: Section[] }> = {
  en: {
    metadata: {
      title: "Copyright, Citation and Legal Notice | O2V Framework",
      description: "Copyright, citation, rights boundary, source code license boundary, and legal notice for O2V Framework.",
      alternates: localizedAlternates("en", "copyright")
    },
    title: "Copyright, Citation and Legal Notice",
    sections: [
      { heading: "Copyright holder", body: ["Copyright (c) Li Zhi. All rights reserved."] },
      { heading: "Citation format", body: [`Source: Li Zhi, O2V Framework: Opportunity-to-Value Framework, Official Public Release ${publicReleaseDate}, Internal Version ${internalVersion}.`] },
      {
        heading: "Method asset rights",
        body: [
          "O2V Framework, O2V Enterprise Configuration, O2V Venture Configuration, O2V Personal Configuration, CLEAR / Signal-to-Action, AiNOVA, Valence, publication text, diagrams, brand names, logo assets, citation language, and downloadable materials are O2V-related method assets by Li Zhi."
        ]
      },
      {
        heading: "Source code license boundary",
        body: [
          "Website source code is licensed under the Apache License 2.0 unless otherwise stated.",
          "The source code license does not automatically license O2V method assets, publication text, diagrams, brand names, logo assets, PDF materials, or related method practices for unrestricted reuse."
        ]
      },
      { heading: "Public method boundary", body: [publicBoundary.en] },
      { heading: "Legal disclaimer", body: ["This site and framework publication are provided for informational and educational purposes only. They do not constitute legal, investment, financial, tax, medical, psychological, safety, or professional advice."] }
    ]
  },
  zh: {
    metadata: {
      title: "版权、引用与法律声明 | O2V Framework",
      description: "O2V Framework 的版权、引用、权利边界、源代码许可边界和法律声明。",
      alternates: localizedAlternates("zh", "copyright")
    },
    title: "版权、引用与法律声明",
    sections: [
      { heading: "版权所有人", body: ["版权所有人：李智 / Li Zhi。保留所有权利。"] },
      { heading: "引用格式", body: [`来源：李智，O2V Framework: Opportunity-to-Value Framework，官方公开发布版 ${publicReleaseDate}，内部版本 ${internalVersion}。`] },
      {
        heading: "方法资产权利",
        body: [
          "O2V Framework、O2V Enterprise Configuration、O2V Venture Configuration、O2V Personal Configuration、CLEAR / Signal-to-Action、AiNOVA、Valence、发布文本、图示、品牌名称、logo 资产、引用语言和下载材料，均为李智 / Li Zhi 基于 O2V Framework 创建的相关方法资产。"
        ]
      },
      {
        heading: "源代码许可边界",
        body: [
          "除非另有说明，网站源代码采用 Apache License 2.0。",
          "源代码许可不会自动授权 O2V 方法资产、发布文本、图示、品牌名称、logo 资产、PDF 材料或相关方法实践的不受限制复用。"
        ]
      },
      { heading: "公开方法边界", body: [publicBoundary.zh] },
      { heading: "法律免责声明", body: ["本站与框架发布内容仅用于信息和教育目的，不构成法律、投资、金融、税务、医疗、心理、安全或其他专业建议。"] }
    ]
  }
};

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    metadata: {
      title: "About Li Zhi | O2V Framework",
      description: "About Li Zhi, creator of O2V Framework, CLEAR / Signal-to-Action, AiNOVA, and Valence.",
      alternates: localizedAlternates("en", "about")
    },
    title: "About Li Zhi",
    subtitle: "Digital Value Realization Expert | Methodologist | Enterprise Architect",
    body: [
      [
        { text: "Li Zhi", strong: true },
        { text: " is the creator of " },
        { text: "O2V Framework", strong: true },
        { text: ", including O2V Enterprise, Venture, and Personal configurations, CLEAR / Signal-to-Action, AiNOVA, and Valence." }
      ],
      [
        { text: "His work focuses on helping people, builders, and organizations connect signals, evidence, governance, and execution so opportunities can become measurable impact and long-term assets." }
      ]
    ],
    beliefIntro: "His work is grounded in a simple belief:",
    belief: [
      { text: "Technology and methods create real value", strong: true },
      { text: " only when they are connected to evidence, judgment, action, governance, and " },
      { text: "long-term assets", strong: true },
      { text: "." }
    ],
    contactHeading: "Contact",
    contacts: { linkedin: "LinkedIn", email: "Email", wechat: "WeChat" }
  },
  zh: {
    metadata: {
      title: "关于李智 | O2V Framework",
      description: "关于 O2V Framework、CLEAR / Signal-to-Action、AiNOVA 和 Valence 的创建者李智。",
      alternates: localizedAlternates("zh", "about")
    },
    title: "关于李智",
    subtitle: "数字化价值实现专家 | 方法论构建者 | 企业架构师",
    body: [
      [
        { text: "李智", strong: true },
        { text: " 是 " },
        { text: "O2V Framework", strong: true },
        { text: " 的创建者，包括 O2V 企业、创业和个人配置，CLEAR / Signal-to-Action，AiNOVA 和 Valence。" }
      ],
      [
        { text: "他的工作聚焦于帮助个人、builder 和组织连接信号、证据、治理与执行，让机会转化为可衡量影响和长期资产。" }
      ]
    ],
    beliefIntro: "他的核心信念是：",
    belief: [
      { text: "技术和方法", strong: true },
      { text: "只有连接到证据、判断、行动、治理和" },
      { text: "长期资产", strong: true },
      { text: "，才真正创造价值。" }
    ],
    contactHeading: "联系方式",
    contacts: { linkedin: "LinkedIn", email: "Email", wechat: "WeChat" }
  }
};

export function creativeWorkJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "O2V Framework",
    alternateName: [
      "Opportunity-to-Value Framework",
      "O2V Enterprise Configuration",
      "O2V Venture Configuration",
      "O2V Personal Configuration",
      "CLEAR",
      "Signal-to-Action",
      "AiNOVA",
      "Valence"
    ],
    description: enterpriseContent[locale].jsonLdDescription,
    version: releaseVersion,
    creator: { "@type": "Person", name: "Li Zhi" },
    copyrightHolder: { "@type": "Person", name: "Li Zhi" },
    copyrightYear: "2026",
    inLanguage: ["en", "zh-CN"],
    keywords: [
      "O2V Framework",
      "Opportunity-to-Value Framework",
      "CLEAR",
      "Signal-to-Action",
      "O2V Personal Configuration",
      "O2V Venture Configuration",
      "O2V Enterprise Configuration",
      "AiNOVA",
      "Valence"
    ],
    url: `${siteUrl}/${locale}`
  };
}
