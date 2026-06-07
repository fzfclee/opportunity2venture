import type { Metadata } from "next";
import { localizedAlternates, siteUrl, type Locale } from "@/lib/i18n";

export const releaseVersion = "20260607";
export const internalVersion = "v1.6";

export type NavKey =
  | "home"
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

type HomeContent = {
  metadata: Metadata;
  title: string;
  subtitle: string;
  tagline: string[];
  deck: string[];
  body: string[];
  bullets: string[];
  buttons: Array<{ label: string; href: string }>;
  cards?: Card[];
  sections?: Section[];
  jsonLdDescription: string;
};

type DownloadCard = {
  key: "zh" | "en" | "de";
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
  en: ["Opportunity-to-Value Framework", `Official Public Release ${releaseVersion}`, `Internal Version: ${internalVersion}`],
  zh: ["Opportunity-to-Value Framework", `官方公开发布版 ${releaseVersion}`, `内部版本：${internalVersion}`],
  de: ["Opportunity-to-Value Framework", `Official Public Release ${releaseVersion}`, `Interne Version: ${internalVersion}`]
};

export const navLabels: Record<Locale, Record<NavKey, string>> = {
  en: {
    home: "Home",
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
    enterprise: "企业配置",
    venture: "创业配置",
    ainova: "AiNOVA",
    valence: "Valence",
    principles: "原则",
    copyright: "版权",
    download: "下载",
    about: "关于"
  },
  de: {
    home: "Startseite",
    enterprise: "Enterprise",
    venture: "Venture",
    ainova: "AiNOVA",
    valence: "Valence",
    principles: "Prinzipien",
    copyright: "Urheberrecht",
    download: "Download",
    about: "Über"
  }
};

export const footerContent: Record<Locale, FooterLine[]> = {
  en: [
    { text: `O2V Framework ${releaseVersion} | Opportunity-to-Value Framework` },
    { text: "From Signal to Impact. From Idea to Asset." },
    { text: "Copyright © Li Zhi. All rights reserved." },
    {
      text:
        "O2V Enterprise Configuration, AiNOVA, Valence, O2V Venture Configuration, related method practices, text, diagrams, artifact taxonomy, and publication materials are O2V-related method assets by Li Zhi. All rights reserved unless separately licensed in writing."
    },
    { label: "Official site:", text: "www.o2vframework.com", href: "https://www.o2vframework.com" },
    { label: "Email:", text: "contact@o2vframework.com", href: "mailto:contact@o2vframework.com" },
    { text: `Citation: Li Zhi, O2V Framework, Official Public Release ${releaseVersion}.` }
  ],
  zh: [
    { text: `O2V Framework ${releaseVersion} | Opportunity-to-Value Framework` },
    { text: "从机会信号到实际影响。从创意构想到长期资产。" },
    { text: "版权所有人：李智 / Li Zhi。保留所有权利。" },
    {
      text:
        "O2V Enterprise Configuration、AiNOVA、Valence、O2V Venture Configuration 及相关方法实践、文本、图示、工件分类和发布材料，均为李智 / Li Zhi 基于 O2V Framework 创建的相关方法资产。除非另有书面授权，保留所有权利。"
    },
    { label: "官方网站：", text: "www.o2vframework.com", href: "https://www.o2vframework.com" },
    { label: "Email:", text: "contact@o2vframework.com", href: "mailto:contact@o2vframework.com" },
    { text: `引用格式：李智，O2V Framework，官方公开发布版 ${releaseVersion}。` }
  ],
  de: [
    { text: `O2V Framework ${releaseVersion} | Opportunity-to-Value Framework` },
    { text: "Vom Signal zur Wirkung. Von der Idee zum Asset." },
    { text: "Copyright © Li Zhi. All rights reserved." },
    {
      text:
        "O2V Enterprise Configuration, AiNOVA, Valence, O2V Venture Configuration, related method practices, text, diagrams, artifact taxonomy, and publication materials are O2V-related method assets by Li Zhi. All rights reserved unless separately licensed in writing."
    },
    { label: "Offizielle Website:", text: "www.o2vframework.com", href: "https://www.o2vframework.com" },
    { label: "Email:", text: "contact@o2vframework.com", href: "mailto:contact@o2vframework.com" },
    { text: `Zitierformat: Li Zhi, O2V Framework, Official Public Release ${releaseVersion}.` }
  ]
};

const enterpriseDescriptions: Record<Locale, string> = {
  en:
    "O2V Framework is a multi-configuration Opportunity-to-Value Framework. The default Enterprise Configuration helps organizations turn strategic, digital, and AI opportunities into measurable impact and long-term assets.",
  zh:
    "O2V Framework 是一个多配置的 Opportunity-to-Value Framework。默认企业配置帮助组织把战略、数字化和 AI 机会转化为可衡量的实际影响和长期资产。",
  de:
    "Das O2V Framework ist ein mehrkonfigurierbares Opportunity-to-Value Framework. Die Enterprise Configuration hilft Organisationen, strategische, digitale und KI-bezogene Chancen in messbare Wirkung und langfristige Assets zu überführen."
};

export const enterpriseContent: Record<Locale, HomeContent> = {
  en: {
    metadata: {
      title: `O2V Framework ${releaseVersion} | Enterprise Configuration`,
      description: enterpriseDescriptions.en,
      alternates: localizedAlternates("en")
    },
    title: "O2V Framework",
    subtitle: "Opportunity-to-Value Framework",
    tagline: ["From Signal to Impact.", "From Idea to Asset."],
    deck: [`Official Public Release ${releaseVersion}`, `Internal Version: ${internalVersion}`],
    body: [
      "An enterprise-first framework for turning strategic, digital, and AI opportunities into measurable impact and long-term assets."
    ],
    bullets: [
      "O2V Framework ist ein Opportunity-to-Value Framework.",
      "Die standardmäßige Enterprise Configuration hilft Organisationen, strategische, digitale und KI-bezogene Chancen in messbare Wirkung und langfristige Assets zu überführen.",
      "Die Venture Configuration hilft Gründern, Buildern, Beratern, unabhängigen Fachleuten, Creators, AI Buildern und kleinen Teams, Ideen in validierte Ventures, Business Cases und Assets zu überführen."
    ],
    cards: [
      {
        title: "AiNOVA",
        subtitle: "AI-native Operating Model for Enterprise Value Realization",
        body: "AiNOVA helps enterprises operate opportunity-to-value logic across strategic signals, validation evidence, leadership decision-making, product governance, and continuous run-phase intake.",
        href: "/en/ainova"
      },
      {
        title: "Valence",
        subtitle: "Product Value Operations & Governance Model",
        body: "Valence helps organizations govern whether digital products, AI use cases, platforms, shared services, and strategic initiatives continue to create value after launch.",
        href: "/en/valence"
      }
    ],
    sections: [
      {
        heading: "Why Enterprise Needs O2V",
        body: [
          "Many organizations do not lack strategy, AI ideas, digital initiatives, or technology investments.",
          "They lack a lightweight operating model that continuously turns strategic signals into opportunity judgment, validation evidence, investment decisions, product governance, and measurable business impact.",
          "O2V Enterprise Configuration is designed for that gap."
        ]
      },
      {
        heading: "What Is O2V Enterprise Configuration",
        body: [
          "O2V Enterprise Configuration is the enterprise-facing configuration of the O2V Framework.",
          "It helps enterprises run opportunity-to-value logic across strategy, business, technology, finance, governance, and leadership decision-making.",
          "Its scope is not defined by department. Its scope is defined by the value flow: from signal to impact, from idea to asset."
        ]
      },
      {
        heading: "Framework Core",
        body: [
          "The shared O2V chain is Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story.",
          "Evidence is not a separate tenth step. It runs through every step, turning signals into evidence, evidence into business cases, impact into decisions, and decisions into long-term assets.",
          "Enterprise methods such as AiNOVA and Valence are concrete method practices built from the same O2V principles."
        ],
        visual: "o2v"
      },
      {
        heading: "Future Ecosystem Note",
        body: [
          "Around the core method assets, future O2V Enterprise Ecosystem capabilities may include enterprise toolkits, agents, evidence systems, partner platforms, and advisory services.",
          "These ecosystem components are intentionally kept commercially separable from the core method IP."
        ]
      }
    ],
    buttons: [
      { label: "Principles", href: "/en/principles" },
      { label: "AiNOVA", href: "/en/ainova" },
      { label: "Valence", href: "/en/valence" },
      { label: "Download", href: "/en/download" }
    ],
    jsonLdDescription: enterpriseDescriptions.en
  },
  zh: {
    metadata: {
      title: `O2V Framework ${releaseVersion}｜企业配置`,
      description: enterpriseDescriptions.zh,
      alternates: localizedAlternates("zh")
    },
    title: "O2V Framework",
    subtitle: "Opportunity-to-Value Framework",
    tagline: ["从机会信号到实际影响。", "从创意构想到长期资产。"],
    deck: [`官方公开发布版 ${releaseVersion}`, `内部版本：${internalVersion}`],
    body: [
      "一套面向企业价值实现的框架，帮助组织把战略、数字化和 AI 机会转化为可衡量的实际影响和长期资产。"
    ],
    bullets: [
      "O2V Framework 是一套 Opportunity-to-Value Framework。",
      "默认的企业配置帮助组织把战略、数字化和 AI 机会转化为可衡量的实际影响和长期资产。",
      "创业配置帮助创业者、构建者、顾问、专家型个体、内容创作者、AI builder 和小团队，把创意构想转化为可验证的新事业、Business Case 和长期资产。"
    ],
    cards: [
      {
        title: "AiNOVA",
        subtitle: "面向企业价值实现的 AI-native 运营模型",
        body: "AiNOVA 帮助企业在战略信号、验证证据、管理层决策、产品治理和持续运营接收之间运行 opportunity-to-value 逻辑。",
        href: "/zh/ainova"
      },
      {
        title: "Valence",
        subtitle: "产品价值运营与治理模型",
        body: "Valence 帮助组织治理数字产品、AI use case、业务平台、共享服务和战略举措上线后是否仍然在持续创造价值。",
        href: "/zh/valence"
      }
    ],
    sections: [
      {
        heading: "为什么企业需要 O2V",
        body: [
          "很多组织并不缺战略、AI 想法、数字化项目或技术投入。",
          "真正缺的是一套轻量运营模型，能够持续把战略信号转化为机会判断、验证证据、投入决策、产品治理和可衡量的业务影响。",
          "O2V Enterprise Configuration 解决的正是这个断点。"
        ]
      },
      {
        heading: "什么是 O2V Enterprise Configuration",
        body: [
          "O2V Enterprise Configuration 是 O2V Framework 面向企业场景的配置版本。",
          "它帮助企业在战略、业务、技术、财务、治理和管理层决策之间运行 opportunity-to-value 逻辑。",
          "它的边界不是部门。它的边界是价值流：从机会信号到实际影响，从创意构想到长期资产。"
        ]
      },
      {
        heading: "框架核心",
        body: [
          "O2V 的共同链路是 Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story。",
          "Evidence 不是额外的第十步，而是贯穿每个环节：让信号变成证据，让证据支撑 Business Case，让影响进入决策，并让决策沉淀为长期资产。",
          "AiNOVA 和 Valence 等企业方法实践，都是同一套 O2V 原则在企业场景中的具象化。"
        ],
        visual: "o2v"
      },
      {
        heading: "未来生态说明",
        body: [
          "围绕核心方法资产，未来 O2V Enterprise Ecosystem 可以逐步发展 Enterprise Toolkit、Agents、Evidence System、Partner Platform 和 Advisory Services 等生态化能力。",
          "这些生态组件与核心方法资产应保持商业上可拆分。"
        ]
      }
    ],
    buttons: [
      { label: "原则", href: "/zh/principles" },
      { label: "AiNOVA", href: "/zh/ainova" },
      { label: "Valence", href: "/zh/valence" },
      { label: "下载", href: "/zh/download" }
    ],
    jsonLdDescription: enterpriseDescriptions.zh
  },
  de: {
    metadata: {
      title: `O2V Framework ${releaseVersion} | Enterprise Configuration`,
      description: enterpriseDescriptions.de,
      alternates: localizedAlternates("de")
    },
    title: "O2V Framework",
    subtitle: "Opportunity-to-Value Framework",
    tagline: ["Vom Signal zur Wirkung.", "Von der Idee zum Asset."],
    deck: [`Official Public Release ${releaseVersion}`, `Internal Version: ${internalVersion}`],
    body: [
      "Ein Enterprise-first Framework, das strategische, digitale und KI-bezogene Chancen in messbare Wirkung und langfristige Assets überführt."
    ],
    bullets: [
      "O2V Framework ist ein Opportunity-to-Value Framework.",
      "Die standardmäßige Enterprise Configuration hilft Organisationen, strategische, digitale und KI-bezogene Chancen in messbare Wirkung und langfristige Assets zu überführen.",
      "Die Venture Configuration hilft Gründern, Buildern, Beratern, unabhängigen Fachleuten, Creators, AI Buildern und kleinen Teams, Ideen in validierte Ventures, Business Cases und Assets zu überführen."
    ],
    cards: [
      {
        title: "AiNOVA",
        subtitle: "AI-native Operating Model for Enterprise Value Realization",
        body: "AiNOVA hilft Unternehmen, die Opportunity-to-Value-Logik über strategische Signale, Validierungsevidenz, Leadership-Entscheidungen, Produkt-Governance und kontinuierliche Run-Phase-Intake hinweg zu betreiben.",
        href: "/de/ainova"
      },
      {
        title: "Valence",
        subtitle: "Product Value Operations & Governance Model",
        body: "Valence hilft Organisationen zu steuern, ob digitale Produkte, AI Use Cases, Plattformen, Shared Services und strategische Initiativen nach dem Launch weiterhin Wert schaffen.",
        href: "/de/valence"
      }
    ],
    sections: [
      {
        heading: "Warum Unternehmen O2V brauchen",
        body: [
          "Viele Organisationen haben nicht zu wenig Strategie, KI-Ideen, digitale Initiativen oder Technologieinvestitionen.",
          "Was häufig fehlt, ist ein leichtgewichtiges Operating Model, das strategische Signale kontinuierlich in Opportunity Judgment, Validierungsevidenz, Investitionsentscheidungen, Product Governance und messbare Business-Wirkung übersetzt.",
          "Die O2V Enterprise Configuration wurde für genau diese Lücke entwickelt."
        ]
      },
      {
        heading: "Was ist die O2V Enterprise Configuration",
        body: [
          "Die O2V Enterprise Configuration ist die Enterprise-orientierte Konfiguration des O2V Framework.",
          "Sie hilft Unternehmen, Opportunity-to-Value-Logik über Strategie, Business, Technologie, Finanzen, Governance und Führungsentscheidungen hinweg zu betreiben.",
          "Ihr Geltungsbereich wird nicht durch eine Abteilung definiert. Ihr Geltungsbereich wird durch den Value Flow definiert: vom Signal zur Wirkung, von der Idee zum Asset."
        ]
      },
      {
        heading: "Framework-Kern",
        body: [
          "Die gemeinsame O2V-Kette lautet: Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story.",
          "Evidence ist kein separater zehnter Schritt. Sie zieht sich durch jeden Schritt und verwandelt Signale in Evidenz, Evidenz in Business Cases, Wirkung in Entscheidungen und Entscheidungen in langfristige Assets.",
          "Enterprise-Methoden wie AiNOVA und Valence sind konkrete Method Practices, die aus denselben O2V-Prinzipien abgeleitet sind."
        ],
        visual: "o2v"
      },
      {
        heading: "Hinweis zum zukünftigen Ökosystem",
        body: [
          "Rund um die zentralen Methoden-Assets können zukünftige O2V Enterprise Ecosystem Capabilities Enterprise Toolkits, Agents, Evidence Systems, Partner Platforms und Advisory Services umfassen.",
          "Diese Ökosystem-Komponenten werden bewusst kommerziell vom Kern-IP der Methodik getrennt gehalten."
        ]
      }
    ],
    buttons: [
      { label: "Prinzipien", href: "/de/principles" },
      { label: "AiNOVA", href: "/de/ainova" },
      { label: "Valence", href: "/de/valence" },
      { label: "Download", href: "/de/download" }
    ],
    jsonLdDescription: enterpriseDescriptions.de
  }
};

export const homeContent = enterpriseContent;

const ventureDescriptions: Record<Locale, string> = {
  en:
    "O2V Venture Configuration helps founders, builders, consultants, independent professionals, creators, AI builders, and small teams turn ideas into validated ventures, business cases, and long-term assets.",
  zh:
    "O2V 创业配置面向创业者、构建者、顾问、专家型个体、内容创作者、AI builder 和小团队，帮助他们将创意构想转化为可验证的新事业、Business Case 和长期资产。",
  de:
    "O2V Venture Configuration helps founders, builders, consultants, independent professionals, creators, AI builders, and small teams turn ideas into validated ventures, business cases, and long-term assets."
};

export const ventureContent: Record<Locale, PageContent> = {
  en: {
    metadata: {
      title: "O2V Venture Configuration | O2V Framework",
      description: ventureDescriptions.en,
      alternates: localizedAlternates("en", "venture")
    },
    eyebrow: "O2V Framework",
    title: "O2V Venture Configuration",
    subtitle: "Opportunity-to-Value Framework for venture-context opportunity judgment",
    deck: releaseDeck.en,
    intro: [
      "This configuration is for founders, builders, consultants, independent professionals, creators, AI builders, and small teams turning ideas into validated ventures, business cases, and long-term assets.",
      "It retains the current public O2V venture-context content while placing it under the broader Opportunity-to-Value Framework."
    ],
    sections: [
      {
        heading: "O2V-Logik im Venture-Kontext",
        body: [
          "In the AI era, ideas are no longer scarce. Signals are everywhere, prototypes can be created quickly, and almost every trend can become a compelling story.",
          "But speed does not remove uncertainty. A working demo does not prove real demand, user interest does not always become willingness to pay, and short-term income may still fail to become a long-term asset.",
          "O2V brings discipline to early opportunity judgment by asking whether an idea has a real scenario, a clear persona, a strong pain, a viable MVP, measurable leading indicators, a credible Business Case, a controllable compliance boundary, an assetization path, and a value story supported by evidence."
        ]
      },
      {
        heading: "Evidence-throughout-Prinzip",
        body: [
          "Evidence runs through every step. Signals must become evidence before they deserve commitment.",
          "Evidence reveals impact, and impact drives better decisions: Proceed, Pivot, Reframe, or Stop.",
          "A Stop decision can also be a successful value outcome when it protects time, resources, capital, and execution capacity from weak or negative opportunities."
        ]
      },
      {
        heading: "Framework-Kern",
        body: [
          "Die gemeinsame O2V-Kette lautet: Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story.",
          "Die Venture Configuration nutzt dieselben O2V-Prinzipien wie die Enterprise Configuration, wendet sie aber auf Kontexte von Gründern, Buildern, Beratern, Creators, AI Buildern und kleinen Teams an.",
          "Financing Story kann in Venture-Kontexten erscheinen, bleibt aber eine spezifische Ausprägung der Value Story und ersetzt nicht die O2V-Kette."
        ],
        visual: "o2v"
      }
    ],
    buttons: [
      { label: "Principles", href: "/en/principles" },
      { label: "Download", href: "/en/download" }
    ]
  },
  zh: {
    metadata: {
      title: "O2V 创业配置｜O2V Framework",
      description: ventureDescriptions.zh,
      alternates: localizedAlternates("zh", "venture")
    },
    eyebrow: "O2V Framework",
    title: "O2V 创业配置",
    subtitle: "面向创业语境的 Opportunity-to-Value Framework 配置",
    deck: releaseDeck.zh,
    intro: [
      "该配置面向创业者、构建者、顾问、专家型个体、内容创作者、AI builder 和小团队，帮助他们将创意构想转化为可验证的新事业、Business Case 和长期资产。",
      "它保留当前公开 O2V 创业语境内容，并将其放回更大的 Opportunity-to-Value Framework 之下。"
    ],
    sections: [
      {
        heading: "创业语境下的 O2V 逻辑",
        body: [
          "在 AI 时代，点子不再稀缺。信号到处都是，产品原型可以被更快做出来，几乎每一个趋势都可以被包装成一个诱人的故事。",
          "但速度并不会自动消除不确定性。一个能运行的 Demo 不等于真实需求成立，用户感兴趣不等于愿意付费，短期收入也未必能沉淀为长期资产。",
          "O2V 为早期机会判断建立纪律：一个机会是否具备真实场景、清晰用户、强痛点、可验证 MVP、可衡量领先指标、可信 Business Case、可控合规边界、可沉淀资产化路径，以及能够被证据支撑的价值叙事。"
        ]
      },
      {
        heading: "证据贯穿原则",
        body: [
          "证据贯穿每一个环节。信号必须先变成证据，才值得被继续投入。",
          "证据揭示真实影响，真实影响驱动 Proceed、Pivot、Reframe 或 Stop。",
          "当 Stop 决策避免时间、资源、资本和执行能力继续被弱机会或负向机会消耗时，它也可以是一种成功的价值结果。"
        ]
      },
      {
        heading: "框架核心",
        body: [
          "O2V 的共同链路是 Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story。",
          "创业配置与企业配置共享同一套 O2V 原则，只是把这些原则应用到创业者、构建者、顾问、创作者、AI builder 和小团队场景。",
          "Financing Story 可以出现在创业语境中，但它只是 Value Story 的一种具体表达，而不是对 O2V 链路的替代。"
        ],
        visual: "o2v"
      }
    ],
    buttons: [
      { label: "原则", href: "/zh/principles" },
      { label: "下载", href: "/zh/download" }
    ]
  },
  de: {
    metadata: {
      title: "O2V Venture Configuration | O2V Framework",
      description: ventureDescriptions.de,
      alternates: localizedAlternates("de", "venture")
    },
    eyebrow: "O2V Framework",
    title: "O2V Venture Configuration",
    subtitle: "Opportunity-to-Value Framework for venture-context opportunity judgment",
    deck: releaseDeck.de,
    intro: [
      "Diese Konfiguration richtet sich an Gründer, Builder, Berater, unabhängige Professionals, Creator, AI Builder und kleine Teams, die Ideen in validierte Ventures, Business Cases und langfristige Assets überführen möchten.",
      "Sie bewahrt den aktuellen öffentlichen Venture-Kontext und ordnet ihn dem breiteren Opportunity-to-Value Framework unter."
    ],
    sections: [
      {
        heading: "O2V-Logik im Venture-Kontext",
        body: [
          "Im KI-Zeitalter sind Ideen nicht mehr knapp. Signale sind überall, Prototypen können schnell entstehen, und fast jeder Trend kann in eine überzeugende Geschichte verwandelt werden.",
          "Doch Geschwindigkeit beseitigt keine Unsicherheit. Ein funktionierender Demo-Prototyp beweist noch keine echte Nachfrage, Nutzerinteresse führt nicht immer zu Zahlungsbereitschaft, und kurzfristige Einnahmen werden nicht automatisch zu einem langfristigen Asset.",
          "O2V bringt Disziplin in frühe Chancenbewertung: reales Szenario, klare Persona, starker Pain Point, validierbares MVP, messbare Leading Indicators, glaubwürdiger Business Case, kontrollierbare Compliance-Grenze, Assetisierungspfad und eine evidenzgestützte Value Story."
        ]
      },
      {
        heading: "Evidence-throughout-Prinzip",
        body: [
          "Evidenz läuft durch jeden Schritt. Signale müssen zu Evidenz werden, bevor sie Commitment verdienen.",
          "Evidenz zeigt Wirkung, und Wirkung führt zu besseren Entscheidungen: Proceed, Pivot, Reframe oder Stop.",
          "Eine Stop-Entscheidung kann ebenfalls ein erfolgreiches Wertergebnis sein, wenn sie Zeit, Ressourcen, Kapital und Umsetzungskapazität vor schwachen oder negativen Chancen schützt."
        ]
      },
      {
        heading: "Framework-Kern",
        body: [
          "Die gemeinsame O2V-Kette lautet: Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story.",
          "Die Venture Configuration nutzt dieselben O2V-Prinzipien wie die Enterprise Configuration, wendet sie aber auf Kontexte von Gründern, Buildern, Beratern, Creators, AI Buildern und kleinen Teams an.",
          "Financing Story kann in Venture-Kontexten erscheinen, bleibt aber eine spezifische Ausprägung der Value Story und ersetzt nicht die O2V-Kette."
        ],
        visual: "o2v"
      }
    ],
    buttons: [
      { label: "Prinzipien", href: "/de/principles" },
      { label: "Download", href: "/de/download" }
    ]
  }
};

export const sharedHomeClosing: Record<Locale, string[]> = {
  en: [
    "Minimum structure. Maximum evidence. AI-assisted execution. Human judgment at decision points.",
    "O2V does not make every idea worth pursuing. It helps organizations and builders decide what deserves commitment and what should stop before consuming more resources."
  ],
  zh: [
    "最小结构。最大证据。AI 辅助执行。人在关键决策点判断。",
    "O2V 并不让每一个想法都变得值得推进。它帮助组织和构建者判断什么值得投入，什么应在继续消耗资源前停止。"
  ],
  de: [
    "Minimum structure. Maximum evidence. AI-assisted execution. Human judgment at decision points.",
    "O2V does not make every idea worth pursuing. It helps organizations and builders decide what deserves commitment and what should stop before consuming more resources."
  ]
};

export const principleContent: Record<Locale, { metadata: Metadata; title: string; principles: string[] }> = {
  en: {
    metadata: {
      title: "Core Principles | O2V Framework",
      description:
        "Core principles of O2V Framework 20260607: minimum structure, maximum evidence, AI-assisted execution, and human judgment at decision points.",
      alternates: localizedAlternates("en", "principles")
    },
    title: "Core Principles",
    principles: [
      "O2V is the parent Opportunity-to-Value Framework. Configurations and method assets sit under O2V rather than competing with it.",
      "Signals are not opportunities yet. Signals must become evidence before they deserve commitment.",
      "Evidence runs through every step of the O2V chain.",
      "Impact is neutral. It can be positive, weak, negative, or not meaningful.",
      "A Stop decision can be a successful value outcome when it protects time, resources, capital, and execution capacity.",
      "Minimum structure creates enough discipline without turning O2V into a heavy management framework.",
      "Maximum evidence means every major commitment should be supported by fit-for-stage evidence.",
      "AI-assisted execution can increase speed, but human judgment remains required at decision points.",
      "All O2V configurations, method practices, and future ecosystem components should express the same parent principles while remaining modular, separable, and context-adaptable."
    ]
  },
  zh: {
    metadata: {
      title: "核心原则｜O2V Framework",
      description:
        "O2V Framework 20260607 的核心原则：最小结构、最大证据、AI 辅助执行、人在关键决策点判断。",
      alternates: localizedAlternates("zh", "principles")
    },
    title: "核心原则",
    principles: [
      "O2V 是唯一总框架，配置版本和方法资产都应放在 O2V 之下，而不是与 O2V 并列竞争。",
      "信号还不是机会。信号必须先变成证据，才值得被继续投入。",
      "证据贯穿 O2V 的每一个环节。",
      "Impact 是中性结果，可以是正向、弱、负向，也可以没有有意义影响。",
      "当 Stop 决策保护了时间、资源、资本和执行能力时，它也可以是一种成功的价值结果。",
      "最小结构提供必要纪律，但不把 O2V 变成重型管理框架。",
      "最大证据意味着每一次重要承诺都应有匹配阶段的证据支撑。",
      "AI 辅助执行可以提升速度，但关键决策点仍需要人的判断。",
      "O2V 的所有配置版本、方法实践和未来生态组件，都应表达同一套总原则，同时保持模块化、可拆分，并能适配不同场景。"
    ]
  },
  de: {
    metadata: {
      title: "Core Principles | O2V Framework",
      description:
        "Core principles of O2V Framework 20260607: minimum structure, maximum evidence, AI-assisted execution, and human judgment at decision points.",
      alternates: localizedAlternates("de", "principles")
    },
    title: "Core Principles",
    principles: [
      "O2V is the parent Opportunity-to-Value Framework. Configurations and method assets sit under O2V rather than competing with it.",
      "Signals are not opportunities yet. Signals must become evidence before they deserve commitment.",
      "Evidence runs through every step of the O2V chain.",
      "Impact is neutral. It can be positive, weak, negative, or not meaningful.",
      "A Stop decision can be a successful value outcome when it protects time, resources, capital, and execution capacity.",
      "Minimum structure creates enough discipline without turning O2V into a heavy management framework.",
      "Maximum evidence means every major commitment should be supported by fit-for-stage evidence.",
      "AI-assisted execution can increase speed, but human judgment remains required at decision points.",
      "All O2V configurations, method practices, and future ecosystem components should express the same parent principles while remaining modular, separable, and context-adaptable."
    ]
  }
};

export const downloadCards: DownloadCard[] = [
  {
    key: "en",
    labels: {
      en: "English PDF",
      zh: "英文 PDF",
      de: "Englische PDF"
    },
    fileName: "o2v-framework-enterprise-configuration-20260607-en.pdf",
    href: "/downloads/o2v-framework-enterprise-configuration-20260607-en.pdf"
  },
  {
    key: "zh",
    labels: {
      en: "Chinese PDF",
      zh: "中文 PDF",
      de: "Chinesische PDF"
    },
    fileName: "o2v-framework-enterprise-configuration-20260607-zh.pdf",
    href: "/downloads/o2v-framework-enterprise-configuration-20260607-zh.pdf"
  },
  {
    key: "de",
    labels: {
      en: "German PDF",
      zh: "德文 PDF",
      de: "Deutsche PDF"
    },
    fileName: "o2v-framework-enterprise-configuration-20260607-de.pdf",
    href: "/downloads/o2v-framework-enterprise-configuration-20260607-de.pdf"
  }
];

export const downloadContent: Record<Locale, DownloadContent> = {
  en: {
    metadata: {
      title: `Download O2V Framework ${releaseVersion}`,
      description:
        "Download page for O2V Framework. Existing PDF files remain available in Chinese, English, and German while the public website identity is updated to the 20260607 release.",
      alternates: localizedAlternates("en", "download")
    },
    title: `Download O2V Framework ${releaseVersion}`,
    deck: releaseDeck.en,
    fullReleaseNote:
      "PDF downloads may reference earlier release files. The current web release is O2V Framework 20260607 / Internal Version v1.6.",
    note: "PDF filenames may be updated separately from the current web release.",
    button: "Download PDF",
    permissionReminder:
      "Permission is required for substantial reuse, adaptation, commercial use, training, consulting delivery, productization, model training, or redistribution.",
    fields: {
      language: "Language",
      fileName: "File name",
      version: "Website release",
      internalVersion: "Internal version",
      copyright: "Copyright"
    },
    versionValue: `Official Public Release ${releaseVersion}`,
    internalVersionValue: internalVersion,
    copyrightValue: "Copyright © Li Zhi. All rights reserved."
  },
  zh: {
    metadata: {
      title: `下载 O2V Framework ${releaseVersion}`,
      description:
        "下载 O2V Framework。现有中文、英文、德文 PDF 文件继续保留，同时官网公开身份升级为 20260607 版本。",
      alternates: localizedAlternates("zh", "download")
    },
    title: `下载 O2V Framework ${releaseVersion}`,
    deck: releaseDeck.zh,
    fullReleaseNote:
      "PDF 下载文件可能仍指向早期发布文件。当前官网版本为 O2V Framework 20260607 / Internal Version v1.6。",
    note: "PDF 文件名可能与当前官网版本分开更新。",
    button: "下载 PDF",
    permissionReminder:
      "对框架进行实质性复用、改编、商业使用、培训、咨询交付、产品化、模型训练或再分发，应获得授权。",
    fields: {
      language: "语言",
      fileName: "文件名",
      version: "官网发布版",
      internalVersion: "内部版本",
      copyright: "版权"
    },
    versionValue: `官方公开发布版 ${releaseVersion}`,
    internalVersionValue: internalVersion,
    copyrightValue: "版权所有人：李智 / Li Zhi。保留所有权利。"
  },
  de: {
    metadata: {
      title: `O2V Framework ${releaseVersion} herunterladen`,
      description:
        "Download page for O2V Framework. Existing PDF files remain available in Chinese, English, and German while the public website identity is updated to the 20260607 release.",
      alternates: localizedAlternates("de", "download")
    },
    title: `O2V Framework ${releaseVersion} herunterladen`,
    deck: releaseDeck.de,
    fullReleaseNote:
      "PDF downloads may reference earlier release files. The current web release is O2V Framework 20260607 / Internal Version v1.6.",
    note: "PDF filenames may be updated separately from the current web release.",
    button: "PDF herunterladen",
    permissionReminder:
      "Permission is required for substantial reuse, adaptation, commercial use, training, consulting delivery, productization, model training, or redistribution.",
    fields: {
      language: "Sprache",
      fileName: "Dateiname",
      version: "Website release",
      internalVersion: "Internal version",
      copyright: "Copyright"
    },
    versionValue: `Official Public Release ${releaseVersion}`,
    internalVersionValue: internalVersion,
    copyrightValue: "Copyright © Li Zhi. All rights reserved."
  }
};

export const ainovaContent: Record<Locale, PageContent> = {
  en: {
    metadata: {
      title: "AiNOVA | O2V Framework",
      description:
        "AiNOVA is an AI-native Operating Model for Enterprise Value Realization under O2V Framework.",
      alternates: localizedAlternates("en", "ainova")
    },
    eyebrow: "AiNOVA by O2V",
    title: "AiNOVA",
    subtitle: "AI-native Operating Model for Enterprise Value Realization",
    deck: releaseDeck.en,
    intro: [
      "AiNOVA by O2V is not an IT operating model.",
      "It is an AI-native operating model for enterprise value realization. It helps organizations turn strategic, digital, and AI opportunities into evidence-backed decisions, measurable impact, reusable capability assets, and long-term value.",
      "Its boundary is not a department. Its boundary is the value flow: from signal to impact, from idea to asset."
    ],
    sections: [
      {
        heading: "Adoption Levels",
        ordered: [
          "Enterprise Overlay Model: for large organizations with existing governance systems.",
          "Digital & Tech / Digital / AI Operating Model: for digital, technology, data, or AI organizations.",
          "Enterprise Value Realization Reference Model: for Strategy Office, CSO, business leadership, and enterprise-level strategic initiatives."
        ]
      },
      {
        heading: "AiNOVA Operating Flow",
        body: [
          "AiNOVA organizes enterprise value realization as a flow from signal capture to run-phase value governance. The flow is deliberately stage-based, not department-based."
        ],
        visual: "ainova"
      },
      {
        heading: "Workforce & Ways of Working",
        body: [
          "AiNOVA includes Workforce & Ways of Working because enterprise AI value depends on more than use cases. People, roles, leadership absorption capacity, decision rights, governance mechanisms, evidence routines, and operating rhythms must change together.",
          "This layer helps organizations move from isolated AI pilots to repeatable AI-native work patterns. It also gives leadership a practical way to absorb high-density evidence, make timely trade-off decisions, and keep governance lightweight rather than ceremonial."
        ]
      },
      {
        heading: "Five Domains",
        ordered: [
          "Strategic Signal & Opportunity Domain: captures signals from strategy, market shifts, business pressure, digital change, AI capability, customer needs, and operational friction, then decides which signals deserve structured attention.",
          "Value Hypothesis & Validation Domain: turns selected signals into value hypotheses and evidence plans, so the organization can test value before making heavy commitments.",
          "Leadership & Decision Domain: compresses evidence into decision-ready material and supports leadership choices such as proceed, pivot, reframe, pause, merge, scale, or stop.",
          "Product / Initiative Value Governance Domain: governs whether products, platforms, AI use cases, shared services, or strategic initiatives continue to create measurable value after launch.",
          "Continuous Intake & Run Domain: keeps run-phase requests connected to value realization, so change requests, enhancements, operational needs, risk changes, and new signals do not become disconnected demand."
        ]
      },
      {
        heading: "Where AiNOVA Fits",
        body: [
          "AiNOVA sits inside O2V Enterprise Configuration. It translates the parent O2V principles into an enterprise operating model for strategy, digital, technology, data, AI, product, finance, governance, and leadership contexts.",
          "It is useful when an organization has many AI or digital ideas, but lacks a consistent way to judge which signals deserve commitment, which initiatives should be validated, and which products or capabilities should become long-term assets."
        ]
      },
      {
        heading: "Operating Logic",
        ordered: [
          "Capture strategic, digital, and AI signals without assuming they are already opportunities.",
          "Convert selected signals into value hypotheses and validation evidence.",
          "Compress evidence into leadership-ready decision material.",
          "Use product and initiative governance to decide whether to scale, improve, pause, merge, or stop.",
          "Keep run-phase intake connected to value realization rather than treating it as disconnected BAU demand."
        ]
      },
      {
        heading: "Who AiNOVA Is For",
        bullets: [
          "Enterprise leadership teams that need AI and digital investment to connect with measurable business outcomes.",
          "Strategy, transformation, finance, product, data, technology, and governance leaders who need a shared opportunity-to-value language.",
          "Organizations with many AI ideas, but uneven validation discipline, unclear ownership, or fragmented decision forums.",
          "Business and functional teams that need AI-native ways of operating without reducing value realization to an IT delivery queue."
        ]
      },
      {
        heading: "What AiNOVA Governs",
        body: [
          "AiNOVA governs the enterprise value realization flow, not a single department.",
          "Its governance objects include strategic signals, opportunity hypotheses, validation evidence, leadership decision material, AI or digital initiatives, product and platform value, run-phase intake, and enterprise value stories."
        ]
      },
      {
        heading: "What AiNOVA Changes",
        body: [
          "AiNOVA shifts enterprise AI and digital work from initiative accumulation to value realization discipline.",
          "It makes strategic signals visible, turns selected signals into value hypotheses, connects validation evidence with leadership decisions, and keeps product or initiative governance tied to value after launch.",
          "The model is designed to sit on top of existing enterprise governance where needed. It does not require organizations to replace every existing forum, portfolio process, or product operating model."
        ]
      },
      {
        heading: "Decision Questions",
        bullets: [
          "Which strategic, digital, or AI signals deserve structured attention?",
          "What evidence is strong enough to move from interest to commitment?",
          "Which opportunities should become pilots, products, platforms, capabilities, or assets?",
          "Which initiatives should scale, pivot, reframe, pause, merge, or stop?",
          "How should leadership see value, risk, adoption, and investment efficiency without drowning in project status detail?"
        ]
      },
      {
        heading: "Expected Public Outcomes",
        bullets: [
          "A clearer enterprise opportunity-to-value language.",
          "More consistent validation discipline before commitment.",
          "Leadership decisions supported by compressed evidence rather than isolated opinions.",
          "A stronger connection between AI-native execution, product governance, and long-term asset creation.",
          "A practical bridge between enterprise strategy, business ownership, digital execution, and value realization."
        ]
      },
      {
        heading: "Main Artifacts",
        bullets: [
          "Strategic Signal Map: a structured view of strategic, digital, and AI signals worth attention.",
          "Opportunity Framing Brief: a concise description of the scenario, stakeholder, pain, value hypothesis, and decision need.",
          "Validation Evidence Pack: the evidence base used to judge whether a signal deserves commitment.",
          "Leadership Decision Brief: compressed decision material for leadership review and commitment choices.",
          "Product / Initiative Value View: a governance view connecting product or initiative state with value, adoption, risk, and investment efficiency.",
          "Run-phase Value Intake Record: a value-connected record for post-launch changes, enhancements, risk updates, and operational requests.",
          "Enterprise Value Story: the evidence-backed narrative of what value was created, protected, avoided, or stopped."
        ]
      },
      {
        heading: "Important Relationships",
        body: [
          "Leadership Governance Model belongs to the Leadership & Decision Domain. It is not a project status meeting. It is a leadership information compression and decision preparation mechanism. The cadence should be adapted to each enterprise context.",
          "Run-phase Value Intake Model belongs to the Continuous Intake & Run Domain. It governs change requests, bugs, enhancements, business-as-usual requests, shared-service requests, compliance changes, and run-phase changes after the initial validation cycle.",
          "Valence is used by AiNOVA in the Product / Initiative Value Governance Domain, but Valence remains an independent O2V method asset."
        ]
      },
      {
        heading: "Publication Scope",
        body: [
          "This page publishes AiNOVA's public expression layer: naming, positioning, domain structure, operating flow, artifact categories, and relationship with O2V and Valence.",
          "Detailed playbooks, templates, scoring rules, calculation methods and client-specific implementation materials are not published on this site."
        ]
      }
    ],
    buttons: [{ label: "Download Detailed Introduction PDF", href: "/downloads/ainova-detailed-introduction.pdf" }]
  },
  zh: {
    metadata: {
      title: "AiNOVA｜O2V Framework",
      description: "AiNOVA 是 O2V Framework 下的面向企业价值实现的 AI-native 运营模型。",
      alternates: localizedAlternates("zh", "ainova")
    },
    eyebrow: "AiNOVA by O2V",
    title: "AiNOVA",
    subtitle: "面向企业价值实现的 AI-native 运营模型",
    deck: releaseDeck.zh,
    intro: [
      "AiNOVA by O2V 不是 IT 运营模型。",
      "它是一套面向企业价值实现的 AI-native 运营模型，帮助组织把战略、数字化和 AI 机会转化为由证据支撑的决策、可衡量的实际影响、可复用能力资产和长期价值。",
      "它的边界不是部门。它的边界是价值流：从机会信号到实际影响，从创意构想到长期资产。"
    ],
    sections: [
      {
        heading: "三层采用模式",
        ordered: [
          "Enterprise Overlay Model：适用于已有成熟治理体系的大型组织。",
          "Digital & Tech / Digital / AI Operating Model：适用于数字化、技术、数据或 AI 组织。",
          "Enterprise Value Realization Reference Model：适用于 Strategy Office、CSO、业务管理层和企业级战略举措。"
        ]
      },
      {
        heading: "AiNOVA 总流程图",
        body: [
          "AiNOVA 把企业价值实现组织成从信号捕捉到运行期价值治理的一条流。这个流是按阶段组织的，不是按部门组织的。"
        ],
        visual: "ainova"
      },
      {
        heading: "五个核心域",
        ordered: [
          "Strategic Signal & Opportunity Domain：捕捉来自战略、市场变化、业务压力、数字化变化、AI 能力、客户需求和运营摩擦的信号，并判断哪些信号值得进入结构化关注。",
          "Value Hypothesis & Validation Domain：把被选择的信号转化为价值假设和验证证据安排，让组织在重投入之前先测试价值。",
          "Leadership & Decision Domain：把证据压缩成可决策的信息，支持 proceed、pivot、reframe、pause、merge、scale 或 stop 等管理层选择。",
          "Product / Initiative Value Governance Domain：治理产品、平台、AI use case、共享服务或战略举措上线后是否仍然创造可衡量价值。",
          "Continuous Intake & Run Domain：让运行期需求继续连接价值实现，避免 change request、enhancement、运营需求、风险变化和新信号变成孤立需求。"
        ]
      },
      {
        heading: "AiNOVA 在哪里发挥作用",
        body: [
          "AiNOVA 位于 O2V Enterprise Configuration 之内，把 O2V 的总原则转译为企业在战略、数字化、技术、数据、AI、产品、财务、治理和管理层决策中的运营模型。",
          "当组织拥有大量 AI 或数字化想法，却缺少一致方式判断哪些信号值得投入、哪些举措需要验证、哪些产品或能力应该沉淀为长期资产时，AiNOVA 可以发挥作用。"
        ]
      },
      {
        heading: "运行逻辑",
        ordered: [
          "捕捉战略、数字化和 AI 信号，但不预设它们已经是机会。",
          "把被选择的信号转化为价值假设和验证证据。",
          "把证据压缩为管理层可以用于决策的信息。",
          "通过产品和举措治理判断扩展、改进、暂停、合并或停止。",
          "让运行期需求接收继续连接价值实现，而不是变成孤立的 BAU demand。"
        ]
      },
      {
        heading: "AiNOVA 适用于谁",
        bullets: [
          "需要把 AI 和数字化投入连接到可衡量业务结果的企业管理团队。",
          "需要共享 opportunity-to-value 语言的战略、转型、财务、产品、数据、技术和治理负责人。",
          "拥有大量 AI 想法，但验证纪律不稳定、责任边界不清或决策论坛碎片化的组织。",
          "需要 AI-native 运营方式，但不希望把价值实现降级为 IT delivery queue 的业务和职能团队。"
        ]
      },
      {
        heading: "AiNOVA 治理对象",
        body: [
          "AiNOVA 治理的是企业价值实现流，而不是某一个部门。",
          "它的治理对象包括战略信号、机会假设、验证证据、管理层决策材料、AI 或数字化举措、产品与平台价值、运行期接收，以及企业价值叙事。"
        ]
      },
      {
        heading: "AiNOVA 改变什么",
        body: [
          "AiNOVA 把企业 AI 和数字化工作从举措堆积，转向价值实现纪律。",
          "它让战略信号变得可见，把被选择的信号转化为价值假设，把验证证据连接到管理层决策，并让产品或举措上线后的治理继续绑定价值。",
          "必要时，AiNOVA 可以叠加在既有企业治理体系之上。它不要求组织替换所有既有会议、组合管理流程或产品运营模型。"
        ]
      },
      {
        heading: "关键决策问题",
        bullets: [
          "哪些战略、数字化或 AI 信号值得进入结构化关注？",
          "什么证据足以让一个想法从兴趣进入承诺？",
          "哪些机会应该成为 pilot、产品、平台、能力或资产？",
          "哪些举措应该扩展、转向、重构、暂停、合并或停止？",
          "管理层如何看到价值、风险、采用和投入效率，而不是被项目状态细节淹没？"
        ]
      },
      {
        heading: "公开层面可期待的结果",
        bullets: [
          "更清晰的企业 opportunity-to-value 语言。",
          "投入承诺前更一致的验证纪律。",
          "由压缩证据支持的管理层决策，而不是孤立观点。",
          "AI-native 执行、产品治理和长期资产创建之间更强的连接。",
          "企业战略、业务 ownership、数字化执行和价值实现之间更实用的桥梁。"
        ]
      },
      {
        heading: "主要工件 Artifact",
        bullets: [
          "Strategic Signal Map：结构化呈现值得关注的战略、数字化和 AI 信号。",
          "Opportunity Framing Brief：简明描述场景、利益相关方、痛点、价值假设和决策需求。",
          "Validation Evidence Pack：用于判断信号是否值得承诺投入的证据基础。",
          "Leadership Decision Brief：面向管理层评审和承诺选择的压缩决策材料。",
          "Product / Initiative Value View：连接产品或举措状态、价值、adoption、风险和投入效率的治理视图。",
          "Run-phase Value Intake Record：面向上线后变更、增强、风险更新和运营请求的价值连接记录。",
          "Enterprise Value Story：由证据支持的价值叙事，说明创造、保护、避免或停止了什么价值。"
        ]
      },
      {
        heading: "重要关系",
        body: [
          "Leadership Governance Model 属于 Leadership & Decision Domain。它不是项目状态会，而是管理层信息压缩与决策准备机制。具体节奏应根据企业情境调整。",
          "Run-phase Value Intake Model 属于 Continuous Intake & Run Domain。它治理初始验证周期之后的 change request、bug、enhancement、business-as-usual request、shared-service request、compliance change 和 run-phase change。",
          "Valence 被 AiNOVA 在 Product / Initiative Value Governance Domain 中调用，但 Valence 仍然是一个独立的 O2V 方法资产。"
        ]
      },
      {
        heading: "公开范围",
        body: [
          "本页公开的是 AiNOVA 的公开表达层：名称、定位、核心域结构、运行流程、工件类别，以及它与 O2V 和 Valence 的关系。",
          "详细 playbook、模板、评分规则、计算方式和客户特定实施材料不在本站发布。"
        ]
      }
    ],
    buttons: [{ label: "下载详细介绍 PDF", href: "/downloads/ainova-detailed-introduction.pdf" }]
  },
  de: {
    metadata: {
      title: "AiNOVA | O2V Framework",
      description:
        "AiNOVA is an AI-native Operating Model for Enterprise Value Realization under O2V Framework.",
      alternates: localizedAlternates("de", "ainova")
    },
    eyebrow: "AiNOVA by O2V",
    title: "AiNOVA",
    subtitle: "AI-native Operating Model for Enterprise Value Realization",
    deck: releaseDeck.de,
    intro: [
      "AiNOVA by O2V is not an IT operating model.",
      "It is an AI-native operating model for enterprise value realization. It helps organizations turn strategic, digital, and AI opportunities into evidence-backed decisions, measurable impact, reusable capability assets, and long-term value.",
      "Its boundary is not a department. Its boundary is the value flow: from signal to impact, from idea to asset."
    ],
    sections: [
      {
        heading: "Adoption Levels",
        ordered: [
          "Enterprise Overlay Model: for large organizations with existing governance systems.",
          "Digital & Tech / Digital / AI Operating Model: for digital, technology, data, or AI organizations.",
          "Enterprise Value Realization Reference Model: for Strategy Office, CSO, business leadership, and enterprise-level strategic initiatives."
        ]
      },
      {
        heading: "AiNOVA Operating Flow",
        body: [
          "AiNOVA organizes enterprise value realization as a flow from signal capture to run-phase value governance. The flow is deliberately stage-based, not department-based."
        ],
        visual: "ainova"
      },
      {
        heading: "Workforce & Ways of Working",
        body: [
          "AiNOVA includes Workforce & Ways of Working because enterprise AI value depends on more than use cases. People, roles, leadership absorption capacity, decision rights, governance mechanisms, evidence routines, and operating rhythms must change together.",
          "This layer helps organizations move from isolated AI pilots to repeatable AI-native work patterns. It also gives leadership a practical way to absorb high-density evidence, make timely trade-off decisions, and keep governance lightweight rather than ceremonial."
        ]
      },
      {
        heading: "Five Domains",
        ordered: [
          "Strategic Signal & Opportunity Domain: captures signals from strategy, market shifts, business pressure, digital change, AI capability, customer needs, and operational friction, then decides which signals deserve structured attention.",
          "Value Hypothesis & Validation Domain: turns selected signals into value hypotheses and evidence plans, so the organization can test value before making heavy commitments.",
          "Leadership & Decision Domain: compresses evidence into decision-ready material and supports leadership choices such as proceed, pivot, reframe, pause, merge, scale, or stop.",
          "Product / Initiative Value Governance Domain: governs whether products, platforms, AI use cases, shared services, or strategic initiatives continue to create measurable value after launch.",
          "Continuous Intake & Run Domain: keeps run-phase requests connected to value realization, so change requests, enhancements, operational needs, risk changes, and new signals do not become disconnected demand."
        ]
      },
      {
        heading: "Where AiNOVA Fits",
        body: [
          "AiNOVA sits inside O2V Enterprise Configuration. It translates the parent O2V principles into an enterprise operating model for strategy, digital, technology, data, AI, product, finance, governance, and leadership contexts.",
          "It is useful when an organization has many AI or digital ideas, but lacks a consistent way to judge which signals deserve commitment, which initiatives should be validated, and which products or capabilities should become long-term assets."
        ]
      },
      {
        heading: "Operating Logic",
        ordered: [
          "Capture strategic, digital, and AI signals without assuming they are already opportunities.",
          "Convert selected signals into value hypotheses and validation evidence.",
          "Compress evidence into leadership-ready decision material.",
          "Use product and initiative governance to decide whether to scale, improve, pause, merge, or stop.",
          "Keep run-phase intake connected to value realization rather than treating it as disconnected BAU demand."
        ]
      },
      {
        heading: "Who AiNOVA Is For",
        bullets: [
          "Enterprise leadership teams that need AI and digital investment to connect with measurable business outcomes.",
          "Strategy, transformation, finance, product, data, technology, and governance leaders who need a shared opportunity-to-value language.",
          "Organizations with many AI ideas, but uneven validation discipline, unclear ownership, or fragmented decision forums.",
          "Business and functional teams that need AI-native ways of operating without reducing value realization to an IT delivery queue."
        ]
      },
      {
        heading: "What AiNOVA Governs",
        body: [
          "AiNOVA governs the enterprise value realization flow, not a single department.",
          "Its governance objects include strategic signals, opportunity hypotheses, validation evidence, leadership decision material, AI or digital initiatives, product and platform value, run-phase intake, and enterprise value stories."
        ]
      },
      {
        heading: "What AiNOVA Changes",
        body: [
          "AiNOVA shifts enterprise AI and digital work from initiative accumulation to value realization discipline.",
          "It makes strategic signals visible, turns selected signals into value hypotheses, connects validation evidence with leadership decisions, and keeps product or initiative governance tied to value after launch.",
          "The model is designed to sit on top of existing enterprise governance where needed. It does not require organizations to replace every existing forum, portfolio process, or product operating model."
        ]
      },
      {
        heading: "Decision Questions",
        bullets: [
          "Which strategic, digital, or AI signals deserve structured attention?",
          "What evidence is strong enough to move from interest to commitment?",
          "Which opportunities should become pilots, products, platforms, capabilities, or assets?",
          "Which initiatives should scale, pivot, reframe, pause, merge, or stop?",
          "How should leadership see value, risk, adoption, and investment efficiency without drowning in project status detail?"
        ]
      },
      {
        heading: "Expected Public Outcomes",
        bullets: [
          "A clearer enterprise opportunity-to-value language.",
          "More consistent validation discipline before commitment.",
          "Leadership decisions supported by compressed evidence rather than isolated opinions.",
          "A stronger connection between AI-native execution, product governance, and long-term asset creation.",
          "A practical bridge between enterprise strategy, business ownership, digital execution, and value realization."
        ]
      },
      {
        heading: "Main Artifacts",
        bullets: [
          "Strategic Signal Map: a structured view of strategic, digital, and AI signals worth attention.",
          "Opportunity Framing Brief: a concise description of the scenario, stakeholder, pain, value hypothesis, and decision need.",
          "Validation Evidence Pack: the evidence base used to judge whether a signal deserves commitment.",
          "Leadership Decision Brief: compressed decision material for leadership review and commitment choices.",
          "Product / Initiative Value View: a governance view connecting product or initiative state with value, adoption, risk, and investment efficiency.",
          "Run-phase Value Intake Record: a value-connected record for post-launch changes, enhancements, risk updates, and operational requests.",
          "Enterprise Value Story: the evidence-backed narrative of what value was created, protected, avoided, or stopped."
        ]
      },
      {
        heading: "Important Relationships",
        body: [
          "Leadership Governance Model belongs to the Leadership & Decision Domain. It is not a project status meeting. It is a leadership information compression and decision preparation mechanism. The cadence should be adapted to each enterprise context.",
          "Run-phase Value Intake Model belongs to the Continuous Intake & Run Domain. It governs change requests, bugs, enhancements, business-as-usual requests, shared-service requests, compliance changes, and run-phase changes after the initial validation cycle.",
          "Valence is used by AiNOVA in the Product / Initiative Value Governance Domain, but Valence remains an independent O2V method asset."
        ]
      },
      {
        heading: "Publication Scope",
        body: [
          "This page publishes AiNOVA's public expression layer: naming, positioning, domain structure, operating flow, artifact categories, and relationship with O2V and Valence.",
          "Detailed playbooks, templates, scoring rules, calculation methods and client-specific implementation materials are not published on this site."
        ]
      }
    ],
    buttons: [{ label: "Download Detailed Introduction PDF", href: "/downloads/ainova-detailed-introduction.pdf" }]
  }
};

export const valenceContent: Record<Locale, PageContent> = {
  en: {
    metadata: {
      title: "Valence | O2V Framework",
      description: "Valence is a Product Value Operations & Governance Model under O2V Framework.",
      alternates: localizedAlternates("en", "valence")
    },
    eyebrow: "Valence by O2V",
    title: "Valence",
    subtitle: "Product Value Operations & Governance Model",
    deck: releaseDeck.en,
    intro: [
      "Valence by O2V is an independent product value operations and governance model.",
      "It helps organizations judge whether digital products, AI use cases, business platforms, shared services, or strategic initiatives continue to create value after launch.",
      "It is not delivery tracking. It is value governance."
    ],
    sections: [
      {
        heading: "Questions Valence Helps Answer",
        bullets: [
          "Is the product still being adopted?",
          "Is investment efficiency still justified?",
          "Should the product or initiative be promoted, improved, optimized, merged, suspended, or decommissioned?",
          "Are governance actions producing measurable signals?",
          "Is the product becoming a long-term asset or only consuming resources?"
        ]
      },
      {
        heading: "Valence Governance Flow",
        body: [
          "Valence organizes product value operations as a lifecycle governance flow after launch. The flow connects product signals, value evidence, governance decisions, action records, and the O2V value story."
        ],
        visual: "valence"
      },
      {
        heading: "Where Valence Fits",
        body: [
          "Valence is used in the O2V Enterprise Configuration while remaining an independent O2V method asset.",
          "It is most useful after a product, platform, AI use case, shared service, or strategic initiative has moved beyond initial launch and needs continuing value judgment.",
          "It helps teams see whether product activity is turning into adoption, impact, investment efficiency, reusable capability, and long-term asset value."
        ]
      },
      {
        heading: "Governance Logic",
        ordered: [
          "Read product or initiative signals after launch.",
          "Compare evidence of adoption, business value, operational value, and investment efficiency.",
          "Identify whether the current state suggests scale, improvement, optimization, merge, suspension, or decommissioning.",
          "Turn governance decisions into visible action records and follow-up evidence.",
          "Connect product lifecycle decisions back to the O2V value story."
        ]
      },
      {
        heading: "Who Valence Is For",
        bullets: [
          "Product, platform, digital, data, AI, and shared-service owners who need value-based governance after launch.",
          "Leadership teams that need to see whether product portfolios are creating impact or only consuming resources.",
          "Organizations with many live products or initiatives, but weak lifecycle discipline after go-live.",
          "Teams that need a practical way to discuss adoption, value, investment efficiency, and product lifecycle decisions together."
        ]
      },
      {
        heading: "What Valence Governs",
        body: [
          "Valence governs product value after launch. It looks at whether a product, AI use case, platform, shared service, or strategic initiative is still being adopted, still creating impact, and still justified by the resources it consumes.",
          "It is designed for ongoing product and initiative decisions, not only annual portfolio cleanup. It helps teams see when a product should receive more focus, when it needs correction, and when it should stop consuming capacity."
        ]
      },
      {
        heading: "Lifecycle Decisions",
        bullets: [
          "Monitor when adoption and investment efficiency are acceptable and no major governance action is needed.",
          "Promote when the product is valuable and usable, but target users have not been sufficiently activated.",
          "Improve when low adoption is caused by product, process, data, or user-experience issues.",
          "Optimize when the product creates value but cost, resource burden, or operating effort is too high.",
          "Keep as-is with justification, suspend, or decommission when weak evidence, dependencies, cost, risk, low-value retention needs, or lack of continued justification require management attention."
        ]
      },
      {
        heading: "Decision Matrix Overview",
        body: [
          "Valence uses a practical value-governance matrix built around Adoption and Investment Efficiency.",
          "When both are acceptable, the default state is Monitor. When adoption is weak but value logic remains credible, the product may need Promote or Improve. When adoption is acceptable but investment efficiency is weak, the product may need Optimize. When both are weak, the product enters Management Attention.",
          "The matrix is a governance trigger, not an automatic decision. Final state should also consider repeated weak signals, product type, root cause, risk events, and management judgment."
        ]
      },
      {
        heading: "Lifecycle States",
        bullets: [
          "Monitor: the product is performing within acceptable range and only needs normal observation.",
          "Promote: the product is valuable but not sufficiently adopted; the main issue is activation.",
          "Improve: the product, process, data, or experience needs correction before users can use it well.",
          "Optimize: the product has value, but cost, effort, support load, or resource consumption is too high.",
          "Keep as-is with Justification: temporarily keep a weak or hard-to-prove product because an approved business reason exists.",
          "Suspend: pause new investment, delivery, promotion, or active operation while waiting for a dependency, decision, budget, compliance answer, strategic clarity, or defined restart trigger.",
          "Decommission: retire and close the product, application, or capability when continued retention is no longer justified."
        ]
      },
      {
        heading: "What Valence Is Not",
        body: [
          "Valence is not a project status tracker, release calendar, ticket queue, or delivery performance dashboard.",
          "It can use delivery and adoption signals, but its purpose is value governance: deciding what deserves more commitment, what needs correction, and what should stop."
        ]
      },
      {
        heading: "Expected Public Outcomes",
        bullets: [
          "A clearer language for product value after launch.",
          "More disciplined product lifecycle decisions.",
          "Better visibility into adoption, impact, investment efficiency, and asset potential.",
          "Governance actions that connect back to O2V evidence and value story.",
          "Less unmanaged accumulation of low-value products, platforms, services, or initiatives."
        ]
      },
      {
        heading: "Main Artifacts",
        bullets: [
          "Product Value Signal Log: a structured view of adoption, usage, value, risk, and operating signals after launch.",
          "Product Value View: a concise view of whether the product or initiative is still creating measurable value.",
          "Investment Efficiency Snapshot: a lightweight view of value relative to cost, complexity, and operating capacity.",
          "Lifecycle Decision Record: a record of decisions such as scale, improve, optimize, merge, suspend, or decommission.",
          "Governance Action Log: visible follow-up actions tied to governance decisions.",
          "Follow-up Evidence Pack: evidence used to check whether governance actions changed adoption, impact, or efficiency.",
          "Product Value Story: the evidence-backed narrative of what value the product created, protected, improved, avoided, or stopped."
        ]
      },
      {
        heading: "Relationship with AiNOVA",
        body: [
          "Valence is an independent O2V method asset.",
          "AiNOVA uses Valence in its Product / Initiative Value Governance Domain."
        ]
      },
      {
        heading: "Publication Scope",
        body: [
          "This page publishes Valence's public expression layer: naming, positioning, governance flow, decision matrix overview, lifecycle states, artifact categories, and relationship with O2V and AiNOVA.",
          "Detailed playbooks, templates, scoring rules, calculation methods and client-specific implementation materials are not published on this site."
        ]
      }
    ],
    buttons: [{ label: "Download Detailed Introduction PDF", href: "/downloads/valence-detailed-introduction.pdf" }]
  },
  zh: {
    metadata: {
      title: "Valence｜O2V Framework",
      description: "Valence 是 O2V Framework 下的产品价值运营与治理模型。",
      alternates: localizedAlternates("zh", "valence")
    },
    eyebrow: "Valence by O2V",
    title: "Valence",
    subtitle: "产品价值运营与治理模型",
    deck: releaseDeck.zh,
    intro: [
      "Valence by O2V 是一个独立的产品价值运营与治理模型。",
      "它帮助组织判断数字产品、AI use case、业务平台、共享服务或战略举措上线后，是否仍然在持续创造价值。",
      "它不是交付进度追踪。它是价值治理。"
    ],
    sections: [
      {
        heading: "Valence 帮助回答的问题",
        bullets: [
          "产品是否仍然被采用？",
          "投入效率是否仍然成立？",
          "产品或举措应该继续推广、改进、优化、合并、暂停，还是退役？",
          "治理动作是否产生了可衡量信号？",
          "产品是在沉淀长期资产，还是只是在持续消耗资源？"
        ]
      },
      {
        heading: "Valence 治理流程图",
        body: [
          "Valence 把产品价值运营组织成上线后的生命周期治理流程。这个流程连接产品信号、价值证据、治理决策、行动记录和 O2V 的 Value Story。"
        ],
        visual: "valence"
      },
      {
        heading: "Valence 在哪里发挥作用",
        body: [
          "Valence 在 O2V Enterprise Configuration 中被使用，同时仍然是独立的 O2V 方法资产。",
          "当数字产品、平台、AI use case、共享服务或战略举措已经越过初始上线阶段，需要持续判断价值时，Valence 最能发挥作用。",
          "它帮助团队判断产品活动是否真正转化为 adoption、impact、investment efficiency、可复用能力和长期资产价值。"
        ]
      },
      {
        heading: "治理逻辑",
        ordered: [
          "读取产品或举措上线后的持续信号。",
          "比较 adoption、业务价值、运营价值和投入效率等证据。",
          "判断当前状态更适合扩展、改进、优化、合并、暂停还是退役。",
          "把治理决策转化为可见的行动记录和后续证据。",
          "把产品生命周期决策重新连接到 O2V 的 Value Story。"
        ]
      },
      {
        heading: "Valence 适用于谁",
        bullets: [
          "需要在上线后进行价值治理的产品、平台、数字化、数据、AI 和共享服务 owner。",
          "需要判断产品组合是在创造影响，还是只是在消耗资源的管理团队。",
          "拥有大量存量产品或举措，但 go-live 之后生命周期纪律较弱的组织。",
          "需要把 adoption、value、investment efficiency 和产品生命周期决策放在一起讨论的团队。"
        ]
      },
      {
        heading: "Valence 治理什么",
        body: [
          "Valence 治理的是产品上线后的价值。它关注一个产品、AI use case、平台、共享服务或战略举措是否仍然被采用、仍然创造影响，并且仍然值得继续消耗资源。",
          "它服务于持续的产品和举措决策，而不只是年度产品组合清理。它帮助团队看清什么时候应该加大关注，什么时候需要纠偏，什么时候应该停止继续占用能力。"
        ]
      },
      {
        heading: "生命周期决策",
        bullets: [
          "Adoption 和 Investment Efficiency 都可接受时，进入 Monitor，保持正常观察。",
          "产品有价值、可用，但目标用户没有被充分激活时，进入 Promote。",
          "低 adoption 来自产品、流程、数据或用户体验问题时，进入 Improve。",
          "产品有价值，但成本、资源负担或运营努力过高时，进入 Optimize。",
          "当证据偏弱、存在依赖、成本压力、风险事件、低价值保留需求或缺少继续投入理由时，进入 Keep as-is with Justification、Suspend 或 Decommission 等管理关注状态。"
        ]
      },
      {
        heading: "决策矩阵概览",
        body: [
          "Valence 使用围绕 Adoption 和 Investment Efficiency 的价值治理矩阵来讨论产品状态。",
          "两者都可接受时，默认状态是 Monitor。Adoption 弱但价值逻辑仍成立时，可能需要 Promote 或 Improve。Adoption 可接受但 Investment Efficiency 弱时，可能需要 Optimize。两者都弱时，产品进入 Management Attention。",
          "这个矩阵是治理触发线，不是自动决策器。最终状态还要结合连续弱信号、产品类型、root cause、风险事件和 management judgment。"
        ]
      },
      {
        heading: "产品生命周期状态",
        bullets: [
          "Monitor：产品表现处于可接受范围，只需要正常观察。",
          "Promote：产品有价值但使用没有被充分激活，核心问题是用户激活。",
          "Improve：产品、流程、数据或体验需要纠偏，否则用户知道也用不好或用不下去。",
          "Optimize：产品有价值，但成本、支持负担、资源消耗或运行努力过高。",
          "Keep as-is with Justification：产品指标弱或价值难以证明，但有经过认可的业务理由，需要临时保留。",
          "Suspend：在等待依赖、决策、预算、合规判断、资源、战略清晰度或重启触发条件时，暂停新的投入、交付、推广或主动运行。",
          "Decommission：当继续保留不再有充分理由时，正式退役并关闭产品、应用或能力。"
        ]
      },
      {
        heading: "Valence 不是什么",
        body: [
          "Valence 不是项目状态跟踪器、发布日历、ticket queue 或交付绩效看板。",
          "它可以使用交付和采用信号，但目的不是追踪交付本身，而是做价值治理：判断什么值得更多承诺、什么需要纠偏、什么应该停止。"
        ]
      },
      {
        heading: "公开层面可期待的结果",
        bullets: [
          "更清晰的上线后产品价值语言。",
          "更有纪律的产品生命周期决策。",
          "对 adoption、impact、investment efficiency 和资产潜力更好的可见性。",
          "能连接回 O2V evidence 和 Value Story 的治理动作。",
          "减少低价值产品、平台、服务或举措的无管理堆积。"
        ]
      },
      {
        heading: "主要工件 Artifact",
        bullets: [
          "Product Value Signal Log：结构化记录上线后的 adoption、usage、value、risk 和 operating signal。",
          "Product Value View：简明呈现产品或举措是否仍然创造可衡量价值。",
          "Investment Efficiency Snapshot：轻量呈现价值相对于成本、复杂度和运营能力消耗是否仍然成立。",
          "Lifecycle Decision Record：记录 scale、improve、optimize、merge、suspend 或 decommission 等生命周期决策。",
          "Governance Action Log：记录与治理决策相绑定的后续行动。",
          "Follow-up Evidence Pack：用于检查治理动作是否改变 adoption、impact 或 efficiency 的证据集合。",
          "Product Value Story：由证据支持的产品价值叙事，说明产品创造、保护、改进、避免或停止了什么价值。"
        ]
      },
      {
        heading: "与 AiNOVA 的关系",
        body: [
          "Valence 是一个独立的 O2V 方法资产。",
          "AiNOVA 在 Product / Initiative Value Governance Domain 中调用 Valence。"
        ]
      },
      {
        heading: "公开范围",
        body: [
          "本页公开的是 Valence 的公开表达层：名称、定位、治理流程、决策矩阵概览、生命周期状态、工件类别，以及它与 O2V 和 AiNOVA 的关系。",
          "详细 playbook、模板、评分规则、计算方式和客户特定实施材料不在本站发布。"
        ]
      }
    ],
    buttons: [{ label: "下载详细介绍 PDF", href: "/downloads/valence-detailed-introduction.pdf" }]
  },
  de: {
    metadata: {
      title: "Valence | O2V Framework",
      description: "Valence is a Product Value Operations & Governance Model under O2V Framework.",
      alternates: localizedAlternates("de", "valence")
    },
    eyebrow: "Valence by O2V",
    title: "Valence",
    subtitle: "Product Value Operations & Governance Model",
    deck: releaseDeck.de,
    intro: [
      "Valence by O2V is an independent product value operations and governance model.",
      "It helps organizations judge whether digital products, AI use cases, business platforms, shared services, or strategic initiatives continue to create value after launch.",
      "It is not delivery tracking. It is value governance."
    ],
    sections: [
      {
        heading: "Questions Valence Helps Answer",
        bullets: [
          "Is the product still being adopted?",
          "Is investment efficiency still justified?",
          "Should the product or initiative be promoted, improved, optimized, merged, suspended, or decommissioned?",
          "Are governance actions producing measurable signals?",
          "Is the product becoming a long-term asset or only consuming resources?"
        ]
      },
      {
        heading: "Valence Governance Flow",
        body: [
          "Valence organizes product value operations as a lifecycle governance flow after launch. The flow connects product signals, value evidence, governance decisions, action records, and the O2V value story."
        ],
        visual: "valence"
      },
      {
        heading: "Where Valence Fits",
        body: [
          "Valence is used in the O2V Enterprise Configuration while remaining an independent O2V method asset.",
          "It is most useful after a product, platform, AI use case, shared service, or strategic initiative has moved beyond initial launch and needs continuing value judgment.",
          "It helps teams see whether product activity is turning into adoption, impact, investment efficiency, reusable capability, and long-term asset value."
        ]
      },
      {
        heading: "Governance Logic",
        ordered: [
          "Read product or initiative signals after launch.",
          "Compare evidence of adoption, business value, operational value, and investment efficiency.",
          "Identify whether the current state suggests scale, improvement, optimization, merge, suspension, or decommissioning.",
          "Turn governance decisions into visible action records and follow-up evidence.",
          "Connect product lifecycle decisions back to the O2V value story."
        ]
      },
      {
        heading: "Who Valence Is For",
        bullets: [
          "Product, platform, digital, data, AI, and shared-service owners who need value-based governance after launch.",
          "Leadership teams that need to see whether product portfolios are creating impact or only consuming resources.",
          "Organizations with many live products or initiatives, but weak lifecycle discipline after go-live.",
          "Teams that need a practical way to discuss adoption, value, investment efficiency, and product lifecycle decisions together."
        ]
      },
      {
        heading: "What Valence Governs",
        body: [
          "Valence governs product value after launch. It looks at whether a product, AI use case, platform, shared service, or strategic initiative is still being adopted, still creating impact, and still justified by the resources it consumes.",
          "It is designed for ongoing product and initiative decisions, not only annual portfolio cleanup. It helps teams see when a product should receive more focus, when it needs correction, and when it should stop consuming capacity."
        ]
      },
      {
        heading: "Lifecycle Decisions",
        bullets: [
          "Monitor when adoption and investment efficiency are acceptable and no major governance action is needed.",
          "Promote when the product is valuable and usable, but target users have not been sufficiently activated.",
          "Improve when low adoption is caused by product, process, data, or user-experience issues.",
          "Optimize when the product creates value but cost, resource burden, or operating effort is too high.",
          "Keep as-is with justification, suspend, or decommission when weak evidence, dependencies, cost, risk, low-value retention needs, or lack of continued justification require management attention."
        ]
      },
      {
        heading: "Decision Matrix Overview",
        body: [
          "Valence uses a practical value-governance matrix built around Adoption and Investment Efficiency.",
          "When both are acceptable, the default state is Monitor. When adoption is weak but value logic remains credible, the product may need Promote or Improve. When adoption is acceptable but investment efficiency is weak, the product may need Optimize. When both are weak, the product enters Management Attention.",
          "The matrix is a governance trigger, not an automatic decision. Final state should also consider repeated weak signals, product type, root cause, risk events, and management judgment."
        ]
      },
      {
        heading: "Lifecycle States",
        bullets: [
          "Monitor: the product is performing within acceptable range and only needs normal observation.",
          "Promote: the product is valuable but not sufficiently adopted; the main issue is activation.",
          "Improve: the product, process, data, or experience needs correction before users can use it well.",
          "Optimize: the product has value, but cost, effort, support load, or resource consumption is too high.",
          "Keep as-is with Justification: temporarily keep a weak or hard-to-prove product because an approved business reason exists.",
          "Suspend: pause new investment, delivery, promotion, or active operation while waiting for a dependency, decision, budget, compliance answer, strategic clarity, or defined restart trigger.",
          "Decommission: retire and close the product, application, or capability when continued retention is no longer justified."
        ]
      },
      {
        heading: "What Valence Is Not",
        body: [
          "Valence is not a project status tracker, release calendar, ticket queue, or delivery performance dashboard.",
          "It can use delivery and adoption signals, but its purpose is value governance: deciding what deserves more commitment, what needs correction, and what should stop."
        ]
      },
      {
        heading: "Expected Public Outcomes",
        bullets: [
          "A clearer language for product value after launch.",
          "More disciplined product lifecycle decisions.",
          "Better visibility into adoption, impact, investment efficiency, and asset potential.",
          "Governance actions that connect back to O2V evidence and value story.",
          "Less unmanaged accumulation of low-value products, platforms, services, or initiatives."
        ]
      },
      {
        heading: "Main Artifacts",
        bullets: [
          "Product Value Signal Log: a structured view of adoption, usage, value, risk, and operating signals after launch.",
          "Product Value View: a concise view of whether the product or initiative is still creating measurable value.",
          "Investment Efficiency Snapshot: a lightweight view of value relative to cost, complexity, and operating capacity.",
          "Lifecycle Decision Record: a record of decisions such as scale, improve, optimize, merge, suspend, or decommission.",
          "Governance Action Log: visible follow-up actions tied to governance decisions.",
          "Follow-up Evidence Pack: evidence used to check whether governance actions changed adoption, impact, or efficiency.",
          "Product Value Story: the evidence-backed narrative of what value the product created, protected, improved, avoided, or stopped."
        ]
      },
      {
        heading: "Relationship with AiNOVA",
        body: [
          "Valence is an independent O2V method asset.",
          "AiNOVA uses Valence in its Product / Initiative Value Governance Domain."
        ]
      },
      {
        heading: "Publication Scope",
        body: [
          "This page publishes Valence's public expression layer: naming, positioning, governance flow, decision matrix overview, lifecycle states, artifact categories, and relationship with O2V and AiNOVA.",
          "Detailed playbooks, templates, scoring rules, calculation methods and client-specific implementation materials are not published on this site."
        ]
      }
    ],
    buttons: [{ label: "Download Detailed Introduction PDF", href: "/downloads/valence-detailed-introduction.pdf" }]
  }
};

export const copyrightContent: Record<Locale, { metadata: Metadata; title: string; sections: Section[] }> = {
  en: {
    metadata: {
      title: "Copyright, Citation and Legal Notice | O2V Framework",
      description:
        "Copyright, citation format, permission statement, rights boundary, source code license boundary, and legal notice for O2V Framework, AiNOVA, and Valence.",
      alternates: localizedAlternates("en", "copyright")
    },
    title: "Copyright, Citation and Legal Notice",
    sections: [
      { heading: "Copyright holder", body: ["Copyright © Li Zhi. All rights reserved."] },
      {
        heading: "Citation format",
        body: [`Source: Li Zhi, O2V Framework: Opportunity-to-Value Framework, Official Public Release ${releaseVersion}.`]
      },
      {
        heading: "Source code license boundary",
        body: [
          "Website source code is licensed under the Apache License 2.0 unless otherwise stated.",
          "O2V Framework, Opportunity-to-Value Framework, AiNOVA, Valence, publication text, diagrams, brand names, logo assets, citation language, and downloadable materials are not automatically licensed for unrestricted reuse by the source code license."
        ]
      },
      {
        heading: "Permission statement",
        body: [
          "Permission is required for citation beyond fair reference, adaptation, translation, reproduction, commercial use, training, consulting delivery, productization, model training, or substantial reuse of O2V Framework, AiNOVA, Valence, or related method assets."
        ]
      },
      {
        heading: "Public method boundary",
        body: [
          "Public website content intentionally summarizes method positioning, relationships, and boundaries. It does not disclose detailed playbooks, templates, scorecards, calculation formulas, implementation procedures, client-specific materials, or internal knowledge-base paths."
        ]
      },
      {
        heading: "Rights boundary",
        body: [
          "O2V does not claim exclusive rights over generic concepts such as MVP, persona, business case, adoption, investment efficiency, governance, or product lifecycle."
        ]
      },
      {
        heading: "Legal disclaimer",
        body: [
          "This site and framework publication are provided for informational and educational purposes only. They do not constitute legal, investment, financial, tax, or professional advice."
        ]
      }
    ]
  },
  zh: {
    metadata: {
      title: "版权、引用与法律声明｜O2V Framework",
      description: "O2V Framework、AiNOVA、Valence 的版权、引用格式、授权说明、代码许可边界、公开方法边界与法律声明。",
      alternates: localizedAlternates("zh", "copyright")
    },
    title: "版权、引用与法律声明",
    sections: [
      { heading: "版权所有人", body: ["版权所有人：李智 / Li Zhi。保留所有权利。"] },
      {
        heading: "引用格式",
        body: [`来源：李智，O2V Framework：Opportunity-to-Value Framework，官方公开发布版 ${releaseVersion}。`]
      },
      {
        heading: "源代码许可边界",
        body: [
          "除非另有说明，网站源代码采用 Apache License 2.0。",
          "O2V Framework、Opportunity-to-Value Framework、AiNOVA、Valence、发布文本、图示、品牌名称、Logo 资产、引用语言和下载材料，并不会因为网站源代码许可而自动获得不受限制的复用许可。"
        ]
      },
      {
        heading: "授权说明",
        body: [
          "对 O2V Framework、AiNOVA、Valence 或相关方法资产进行超出合理引用范围的引用、改编、翻译、复制、商业使用、培训、咨询交付、产品化、模型训练或实质性复用，应获得授权。"
        ]
      },
      {
        heading: "公开方法边界",
        body: [
          "官网公开内容只总结方法定位、关系和边界，不公开详细 playbook、模板、评分表、计算公式、实施流程、客户细节或内部知识库路径。"
        ]
      },
      {
        heading: "权利边界",
        body: [
          "O2V 不主张对 MVP、用户画像、Business Case、adoption、investment efficiency、governance、product lifecycle 等通用概念本身享有排他性权利。"
        ]
      },
      {
        heading: "法律免责声明",
        body: ["本站与框架发布内容仅用于信息和教育目的，不构成法律、投资、金融、税务或其他专业建议。"]
      }
    ]
  },
  de: {
    metadata: {
      title: "Urheberrecht, Zitierung und rechtlicher Hinweis | O2V Framework",
      description:
        "Copyright, citation format, permission statement, rights boundary, source code license boundary, and legal notice for O2V Framework, AiNOVA, and Valence.",
      alternates: localizedAlternates("de", "copyright")
    },
    title: "Urheberrecht, Zitierung und rechtlicher Hinweis",
    sections: [
      { heading: "Copyright holder", body: ["Copyright © Li Zhi. All rights reserved."] },
      {
        heading: "Citation format",
        body: [`Source: Li Zhi, O2V Framework: Opportunity-to-Value Framework, Official Public Release ${releaseVersion}.`]
      },
      {
        heading: "Source code license boundary",
        body: [
          "Website source code is licensed under the Apache License 2.0 unless otherwise stated.",
          "O2V Framework, Opportunity-to-Value Framework, AiNOVA, Valence, publication text, diagrams, brand names, logo assets, citation language, and downloadable materials are not automatically licensed for unrestricted reuse by the source code license."
        ]
      },
      {
        heading: "Permission statement",
        body: [
          "Permission is required for citation beyond fair reference, adaptation, translation, reproduction, commercial use, training, consulting delivery, productization, model training, or substantial reuse of O2V Framework, AiNOVA, Valence, or related method assets."
        ]
      },
      {
        heading: "Public method boundary",
        body: [
          "Public website content intentionally summarizes method positioning, relationships, and boundaries. It does not disclose detailed playbooks, templates, scorecards, calculation formulas, implementation procedures, client-specific materials, or internal knowledge-base paths."
        ]
      },
      {
        heading: "Rights boundary",
        body: [
          "O2V does not claim exclusive rights over generic concepts such as MVP, persona, business case, adoption, investment efficiency, governance, or product lifecycle."
        ]
      },
      {
        heading: "Legal disclaimer",
        body: [
          "Diese Website und Framework-Veröffentlichung dienen ausschließlich Informations- und Bildungszwecken und stellen keine Rechts-, Anlage-, Finanz-, Steuer- oder professionelle Beratung dar."
        ]
      }
    ]
  }
};

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    metadata: {
      title: "About Li Zhi | O2V Framework",
      description:
        "About Li Zhi, creator of O2V Framework, AiNOVA, and Valence, digital value realization expert, methodologist, and enterprise architect.",
      alternates: localizedAlternates("en", "about")
    },
    title: "About Li Zhi",
    subtitle: "Digital Value Realization Expert | Methodologist | Enterprise Architect",
    body: [
      [
        { text: "Li Zhi", strong: true },
        { text: " is the creator of " },
        { text: "O2V Framework", strong: true },
        { text: ", including the current Enterprise Configuration method assets AiNOVA and Valence." }
      ],
      [
        { text: "His work focuses on helping organizations and builders connect strategy, evidence, governance, and execution so opportunities can become measurable impact and long-term assets." }
      ]
    ],
    beliefIntro: "His work is grounded in a simple belief:",
    belief: [
      { text: "Technology creates real value", strong: true },
      { text: " only when it is connected to strategy, validated through evidence, governed through discipline, and converted into " },
      { text: "long-term assets", strong: true },
      { text: "." }
    ],
    contactHeading: "Contact",
    contacts: { linkedin: "LinkedIn", email: "Email", wechat: "WeChat" }
  },
  zh: {
    metadata: {
      title: "关于李智｜O2V Framework",
      description: "李智是 O2V Framework、AiNOVA 和 Valence 的创建者，长期关注数字化价值实现、方法论构建和企业架构。",
      alternates: localizedAlternates("zh", "about")
    },
    title: "关于李智",
    subtitle: "数字化价值实现专家｜方法论构建者｜企业架构师",
    body: [
      [
        { text: "李智", strong: true },
        { text: "是 " },
        { text: "O2V Framework", strong: true },
        { text: " 的创建者，也创建了当前企业配置中的核心方法资产 AiNOVA 和 Valence。" }
      ],
      [
        { text: "他的工作聚焦于帮助组织和构建者连接战略、证据、治理与执行，让机会转化为可衡量的实际影响和长期资产。" }
      ]
    ],
    beliefIntro: "他的核心信念是：",
    belief: [
      { text: "技术", strong: true },
      { text: "只有被连接到战略，被证据验证，被治理机制承接，并最终沉淀为" },
      { text: "长期资产", strong: true },
      { text: "，才真正创造价值。" }
    ],
    contactHeading: "联系方式",
    contacts: { linkedin: "LinkedIn", email: "Email", wechat: "WeChat" }
  },
  de: {
    metadata: {
      title: "Über Li Zhi | O2V Framework",
      description:
        "About Li Zhi, creator of O2V Framework, AiNOVA, and Valence, digital value realization expert, methodologist, and enterprise architect.",
      alternates: localizedAlternates("de", "about")
    },
    title: "Über Li Zhi",
    subtitle: "Digital Value Realization Expert | Methodologist | Enterprise Architect",
    body: [
      [
        { text: "Li Zhi", strong: true },
        { text: " is the creator of " },
        { text: "O2V Framework", strong: true },
        { text: ", including the current Enterprise Configuration method assets AiNOVA and Valence." }
      ],
      [
        { text: "His work focuses on helping organizations and builders connect strategy, evidence, governance, and execution so opportunities can become measurable impact and long-term assets." }
      ]
    ],
    beliefIntro: "Seine Arbeit basiert auf einer einfachen Überzeugung:",
    belief: [
      { text: "Technologie schafft erst dann echten Wert", strong: true },
      { text: ", wenn sie mit Strategie verbunden, durch Evidenz validiert, durch Governance gesteuert und in " },
      { text: "langfristige Assets", strong: true },
      { text: " überführt wird." }
    ],
    contactHeading: "Kontakt",
    contacts: { linkedin: "LinkedIn", email: "Email", wechat: "WeChat" }
  }
};

export function creativeWorkJsonLd(locale: Locale) {
  const url = `${siteUrl}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "O2V Framework",
    alternateName: [
      "Opportunity-to-Value Framework",
      "O2V",
      "O2V Enterprise Configuration",
      "O2V Venture Configuration",
      "AiNOVA",
      "Valence"
    ],
    description: enterpriseContent[locale].jsonLdDescription,
    version: releaseVersion,
    creator: {
      "@type": "Person",
      name: "Li Zhi"
    },
    copyrightHolder: {
      "@type": "Person",
      name: "Li Zhi"
    },
    copyrightYear: "2026",
    inLanguage: ["en", "zh-CN", "de"],
    keywords: [
      "O2V Framework",
      "Opportunity-to-Value Framework",
      "O2V Enterprise Configuration",
      "O2V Venture Configuration",
      "AiNOVA",
      "Valence",
      "AI-native Operating Model for Enterprise Value Realization",
      "Product Value Operations & Governance Model",
      "evidence-backed opportunity judgment",
      "value realization",
      "assetization"
    ],
    url
  };
}
