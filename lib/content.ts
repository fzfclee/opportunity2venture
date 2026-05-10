import type { Metadata } from "next";
import { localizedAlternates, type Locale } from "@/lib/i18n";

export type NavKey = "home" | "framework" | "principles" | "copyright" | "download";

type Section = {
  heading: string;
  body?: string[];
  bullets?: string[];
  ordered?: string[];
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
  jsonLdDescription: string;
};

type DownloadCard = {
  language: string;
  fileName: string;
  href: string;
};

export const navLabels: Record<Locale, Record<NavKey, string>> = {
  en: {
    home: "Home",
    framework: "Framework",
    principles: "Principles",
    copyright: "Copyright",
    download: "Download"
  },
  zh: {
    home: "首页",
    framework: "框架",
    principles: "原则",
    copyright: "版权",
    download: "下载"
  },
  de: {
    home: "Startseite",
    framework: "Framework",
    principles: "Prinzipien",
    copyright: "Urheberrecht",
    download: "Download"
  }
};

export const footerContent: Record<Locale, string[]> = {
  en: [
    "O2V Framework 20260510 | Opportunity-to-Venture Framework",
    "From Signal to Venture. From Idea to Asset.",
    "Copyright © Li Zhi. All rights reserved.",
    "Official site: Opportunity2Venture.com",
    "Citation: Li Zhi, O2V Framework, Official Public Release 20260510."
  ],
  zh: [
    "O2V Framework 20260510 | Opportunity-to-Venture Framework",
    "从机会信号到创业资产。",
    "版权所有人：李智 / Li Zhi",
    "Official site: Opportunity2Venture.com",
    "引用格式：李智，O2V Framework，官方公开发布版 20260510。"
  ],
  de: [
    "O2V Framework 20260510 | Opportunity-to-Venture Framework",
    "Vom Signal zum Venture. Von der Idee zum Asset.",
    "Copyright © Li Zhi. All rights reserved.",
    "Offizielle Website: Opportunity2Venture.com",
    "Zitierformat: Li Zhi, O2V Framework, Official Public Release 20260510."
  ]
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    metadata: {
      title: "O2V Framework | Opportunity-to-Venture Framework for the AI Era",
      description:
        "O2V Framework, also known as Opportunity-to-Venture Framework, is a front-end opportunity judgment framework for the AI era. It helps convert opportunity signals into verifiable business cases and venture assets. Official public release by Li Zhi.",
      alternates: localizedAlternates("en")
    },
    title: "O2V Framework",
    subtitle: "Opportunity-to-Venture Framework",
    tagline: ["From Signal to Venture.", "From Idea to Asset."],
    deck: [
      "Official Public Release 20260510",
      "Internal Version: v1.4",
      "Copyright © Li Zhi. All rights reserved."
    ],
    body: [
      "O2V Framework is a front-end opportunity judgment framework for the AI era.",
      "It was created to answer a simple but critical question:",
      "When opportunities are everywhere, how do we know which ones are worth building?",
      "In the AI era, ideas are no longer scarce.",
      "Signals are everywhere.",
      "Products can be prototyped faster than ever.",
      "Content can be generated instantly.",
      "Almost every trend can be turned into a startup story.",
      "But speed does not remove uncertainty.",
      "More ideas do not mean better opportunities.",
      "A working demo does not prove real demand.",
      "User interest does not always become willingness to pay.",
      "Growth without compliance boundaries can become a hidden liability.",
      "And a business that earns short-term income may still fail to become a long-term asset.",
      "O2V Framework was designed to bring discipline to the earliest stage of venture creation.",
      "It helps entrepreneurs, innovators, consultants, and early-stage investors move from scattered market signals to structured opportunity judgment.",
      "It asks whether an opportunity has:"
    ],
    bullets: [
      "a real scenario;",
      "a clear persona;",
      "a strong pain;",
      "a viable MVP;",
      "measurable leading indicators;",
      "a credible Business Case;",
      "a controllable compliance boundary;",
      "an assetization path;",
      "and a financing story that can be supported by evidence."
    ],
    buttons: [
      { label: "Read the Framework", href: "/en/framework" },
      { label: "Core Principles", href: "/en/principles" },
      { label: "Copyright & Citation", href: "/en/copyright" },
      { label: "Download PDF", href: "/en/download" }
    ],
    jsonLdDescription:
      "O2V Framework is a front-end opportunity judgment framework for the AI era, designed to convert opportunity signals into verifiable business cases and venture assets."
  },
  zh: {
    metadata: {
      title: "O2V Framework｜从机会信号到创业资产的前端机会判断框架",
      description:
        "O2V Framework 是一套面向 AI 时代的前端机会判断框架，用于将机会信号转化为可验证的 Business Case 和可经营、可融资、可资产化的创业机会。版权所有人：李智。",
      alternates: localizedAlternates("zh")
    },
    title: "O2V Framework",
    subtitle: "Opportunity-to-Venture Framework",
    tagline: ["从机会信号到创业资产。"],
    deck: ["官方公开发布版 20260510", "内部版本：v1.4", "版权所有人：李智 / Li Zhi"],
    body: [
      "O2V Framework 是一套面向 AI 时代的前端机会判断框架。",
      "它试图回答一个简单但关键的问题：",
      "当机会看起来无处不在时，我们如何判断哪些机会真正值得投入？",
      "在 AI 时代，点子不再稀缺。",
      "信号到处都是。",
      "产品原型可以被更快做出来。",
      "内容可以被瞬间生成。",
      "几乎每一个趋势，都可以被包装成一个创业故事。",
      "但速度并不会自动消除不确定性。",
      "更多点子不等于更好机会。",
      "一个能运行的 Demo 不等于真实需求成立。",
      "用户感兴趣不等于愿意付费。",
      "没有合规边界的增长，可能变成隐藏负债。",
      "一个能赚短期收入的生意，也未必能沉淀为长期资产。",
      "O2V Framework 的目的，是为创业机会的最前端判断建立一套纪律。",
      "它帮助创业者、创新团队、咨询顾问和早期投资相关方，从分散的市场信号出发，形成结构化的机会判断。",
      "它关注一个机会是否具备："
    ],
    bullets: [
      "真实场景；",
      "清晰用户；",
      "强痛点；",
      "可验证 MVP；",
      "可衡量的领先指标；",
      "可信的 Business Case；",
      "可控的合规边界；",
      "可沉淀的资产化路径；",
      "以及能够被证据支撑的融资叙事。"
    ],
    buttons: [
      { label: "阅读完整框架", href: "/zh/framework" },
      { label: "核心原则", href: "/zh/principles" },
      { label: "版权与引用", href: "/zh/copyright" },
      { label: "下载 PDF", href: "/zh/download" }
    ],
    jsonLdDescription:
      "O2V Framework 是一套面向 AI 时代的前端机会判断框架，用于将机会信号转化为可验证的 Business Case 和可资产化的创业机会。"
  },
  de: {
    metadata: {
      title: "O2V Framework | Opportunity-to-Venture Framework im KI-Zeitalter",
      description:
        "Das O2V Framework ist ein Front-End-Framework zur Chancenbewertung im KI-Zeitalter. Es hilft, Chancensignale in überprüfbare Business Cases und Venture Assets zu überführen. Offizielle Veröffentlichung von Li Zhi.",
      alternates: localizedAlternates("de")
    },
    title: "O2V Framework",
    subtitle: "Opportunity-to-Venture Framework",
    tagline: ["Vom Signal zum Venture.", "Von der Idee zum Asset."],
    deck: [
      "Official Public Release 20260510",
      "Interne Version: v1.4",
      "Copyright © Li Zhi. All rights reserved."
    ],
    body: [
      "Das O2V Framework ist ein Front-End-Framework zur Chancenbewertung im KI-Zeitalter.",
      "Es wurde entwickelt, um eine einfache, aber entscheidende Frage zu beantworten:",
      "Wenn Chancen überall sichtbar sind, woran erkennen wir, welche davon wirklich den Aufbau wert sind?",
      "Im KI-Zeitalter sind Ideen nicht mehr knapp.",
      "Signale sind überall.",
      "Produktprototypen können schneller erstellt werden als je zuvor.",
      "Inhalte können sofort generiert werden.",
      "Fast jeder Trend kann in eine Startup-Geschichte verwandelt werden.",
      "Doch Geschwindigkeit beseitigt keine Unsicherheit.",
      "Mehr Ideen bedeuten nicht automatisch bessere Chancen.",
      "Ein funktionierender Demo-Prototyp beweist noch keine echte Nachfrage.",
      "Nutzerinteresse führt nicht immer zu Zahlungsbereitschaft.",
      "Wachstum ohne Compliance-Grenzen kann zu einer versteckten Verbindlichkeit werden.",
      "Und ein Geschäft, das kurzfristige Einnahmen erzielt, wird nicht automatisch zu einem langfristigen Asset.",
      "Das O2V Framework wurde entwickelt, um Disziplin in die früheste Phase der Venture-Entstehung zu bringen.",
      "Es hilft Unternehmern, Innovationsteams, Beratern und Early-Stage-Investoren, aus verstreuten Marktsignalen eine strukturierte Chancenbewertung abzuleiten.",
      "Es fragt, ob eine Chance Folgendes besitzt:"
    ],
    bullets: [
      "ein reales Szenario;",
      "eine klare Persona;",
      "einen starken Pain Point;",
      "ein validierbares MVP;",
      "messbare Leading Indicators;",
      "einen glaubwürdigen Business Case;",
      "eine kontrollierbare Compliance-Grenze;",
      "einen Pfad zur Assetisierung;",
      "und eine Finanzierungsgeschichte, die durch Evidenz gestützt werden kann."
    ],
    buttons: [
      { label: "Framework lesen", href: "/de/framework" },
      { label: "Prinzipien", href: "/de/principles" },
      { label: "Urheberrecht & Zitierung", href: "/de/copyright" },
      { label: "PDF herunterladen", href: "/de/download" }
    ],
    jsonLdDescription:
      "Das O2V Framework ist ein Front-End-Framework zur Chancenbewertung im KI-Zeitalter, das Chancensignale in überprüfbare Business Cases und Venture Assets überführt."
  }
};

export const sharedHomeClosing: Record<Locale, string[]> = {
  en: [
    "O2V does not try to replace proven methodologies.",
    "It integrates and recomposes mature practices from entrepreneurship, product discovery, innovation management, business case design, investment screening, and risk governance.",
    "Its purpose is not to generate more ideas.",
    "Its purpose is to identify which ideas deserve time, capital, and execution."
  ],
  zh: [
    "O2V 并不试图替代已有成熟方法论。",
    "它融合并重新编排了创业验证、产品发现、创新管理、商业案例设计、投资筛选和风险治理等领域的成熟方法论与实践。",
    "它的目的不是生成更多点子。",
    "它的目的，是判断哪些点子真正值得投入时间、资本和执行。"
  ],
  de: [
    "O2V versucht nicht, bewährte Methoden zu ersetzen.",
    "Es integriert und rekombiniert reife Praktiken aus Entrepreneurship, Product Discovery, Innovationsmanagement, Business-Case-Design, Investment Screening und Risk Governance.",
    "Sein Ziel ist nicht, mehr Ideen zu generieren.",
    "Sein Ziel ist es, zu erkennen, welche Ideen Zeit, Kapital und Umsetzung verdienen."
  ]
};

export const principleContent: Record<Locale, { metadata: Metadata; title: string; principles: string[] }> = {
  en: {
    metadata: {
      title: "O2V Core Principles",
      description:
        "Core principles of O2V Framework, the Opportunity-to-Venture Framework for AI-era opportunity judgment, business case validation, compliance gate review, and venture asset development.",
      alternates: localizedAlternates("en", "principles")
    },
    title: "O2V Core Principles",
    principles: [
      "O2V is not invented from scratch. It is a structured recomposition of proven practices for the AI era.",
      "An opportunity starts with a signal, but it must be proven through scenario, persona, pain, and evidence.",
      "Without a clear persona and strong pain, there is no real opportunity.",
      "MVP is not the smallest product. It is the smallest way to validate the most critical assumption.",
      "Leading indicators must be defined after the MVP, because they exist to judge whether the MVP is validating the value hypothesis.",
      "A Business Case is not a presentation. It is a structured argument for why an opportunity deserves resources.",
      "Short-term revenue proves demand, but long-term assets define the ceiling.",
      "Financing stories must be supported by validation data, not ambition alone.",
      "Compliance risk is not a minor deduction. It is a gate that determines whether an opportunity can move forward.",
      "O2V exists to reduce early-stage misjudgment before time, capital, and execution are committed."
    ]
  },
  zh: {
    metadata: {
      title: "O2V 核心原则",
      description:
        "O2V 框架核心原则：面向 AI 时代的前端机会判断框架，用于创业机会验证、Business Case、合规风险闸门、资产化路径和融资叙事。",
      alternates: localizedAlternates("zh", "principles")
    },
    title: "O2V 核心原则",
    principles: [
      "O2V 不是凭空发明的理论，而是面向 AI 时代对成熟实践的结构化重组。",
      "机会可以始于信号，但必须通过场景、用户、痛点和证据被证明。",
      "没有清晰用户和强痛点，就没有真正的机会。",
      "MVP 不是最小产品，而是验证最关键假设的最小方式。",
      "领先指标必须在 MVP 之后定义，因为它们的作用是判断 MVP 是否正在验证价值假设。",
      "Business Case 不是展示材料，而是说明一个机会为何值得投入资源的结构化论证。",
      "短期收入证明需求，长期资产决定天花板。",
      "融资叙事必须由验证数据支撑，而不能只靠愿景。",
      "合规风险不是普通扣分项，而是决定机会能否继续推进的闸门。",
      "O2V 的存在，是为了在投入时间、资本和执行之前，降低早期机会误判。"
    ]
  },
  de: {
    metadata: {
      title: "O2V Core Principles",
      description:
        "Core Principles des O2V Framework zur Chancenbewertung im KI-Zeitalter, Business Case Validierung, Compliance Gate, Assetisierung und Financing Story.",
      alternates: localizedAlternates("de", "principles")
    },
    title: "O2V Core Principles",
    principles: [
      "O2V ist nicht aus dem Nichts erfunden. Es ist eine strukturierte Rekombination bewährter Praktiken für das KI-Zeitalter.",
      "Eine Chance kann mit einem Signal beginnen, muss aber durch Szenario, Persona, Pain Point und Evidenz bewiesen werden.",
      "Ohne klare Persona und starken Pain Point gibt es keine echte Chance.",
      "MVP ist nicht das kleinste Produkt. Es ist der kleinste Weg, die kritischste Annahme zu validieren.",
      "Leading Indicators müssen nach dem MVP definiert werden, weil sie beurteilen sollen, ob das MVP die Value Hypothesis validiert.",
      "Ein Business Case ist keine Präsentation. Er ist ein strukturiertes Argument dafür, warum eine Chance Ressourcen verdient.",
      "Kurzfristiger Umsatz beweist Nachfrage, aber langfristige Assets definieren die Obergrenze.",
      "Finanzierungserzählungen müssen durch Validierungsdaten gestützt werden, nicht nur durch Ambition.",
      "Compliance-Risiko ist kein kleiner Abzug. Es ist ein Gate, das bestimmt, ob eine Chance weiterverfolgt werden kann.",
      "O2V existiert, um frühe Fehlbewertungen zu reduzieren, bevor Zeit, Kapital und Umsetzung gebunden werden."
    ]
  }
};

export const downloadCards: DownloadCard[] = [
  {
    language: "Chinese PDF",
    fileName: "o2v-framework-20260510-zh.pdf",
    href: "/downloads/o2v-framework-20260510-zh.pdf"
  },
  {
    language: "English PDF",
    fileName: "o2v-framework-20260510-en.pdf",
    href: "/downloads/o2v-framework-20260510-en.pdf"
  },
  {
    language: "German PDF",
    fileName: "o2v-framework-20260510-de.pdf",
    href: "/downloads/o2v-framework-20260510-de.pdf"
  }
];

export const downloadContent: Record<Locale, { metadata: Metadata; title: string; note: string; button: string }> = {
  en: {
    metadata: {
      title: "Download O2V Framework 20260510",
      description:
        "Download page for O2V Framework 20260510, Official Public Release 20260510, in Chinese, English, and German PDF formats.",
      alternates: localizedAlternates("en", "download")
    },
    title: "Download O2V Framework 20260510",
    note: "Official PDF versions are available below.",
    button: "Download"
  },
  zh: {
    metadata: {
      title: "下载 O2V Framework 20260510",
      description:
        "下载 O2V Framework 20260510 官方公开发布版，提供中文、英文、德文 PDF 下载入口。",
      alternates: localizedAlternates("zh", "download")
    },
    title: "下载 O2V Framework 20260510",
    note: "官方 PDF 版本可在下方下载。",
    button: "下载"
  },
  de: {
    metadata: {
      title: "O2V Framework 20260510 herunterladen",
      description:
        "Download-Seite für O2V Framework 20260510, Official Public Release 20260510, mit chinesischen, englischen und deutschen PDF-Dateien.",
      alternates: localizedAlternates("de", "download")
    },
    title: "O2V Framework 20260510 herunterladen",
    note: "Die offiziellen PDF-Versionen stehen unten zum Download bereit.",
    button: "Herunterladen"
  }
};

export const businessCaseModules = [
  "Project Name",
  "One-Sentence Opportunity Judgment",
  "Target User & Persona",
  "Core Pain and Willingness to Pay",
  "Benefits Hypothesis",
  "MVP",
  "Leading Indicators",
  "Financial Metrics",
  "Verification Plan",
  "Solution Roadmap",
  "Market & Channel Fit",
  "Business Model",
  "Assetization Path",
  "Financing Story",
  "Key Risks & Compliance Level",
  "O2V Score + Recommendation"
];

export const deliverables = [
  "Opportunity Signal List",
  "Opportunity Card",
  "O2V Score",
  "Compliance Risk Level",
  "Business Case",
  "Validation Plan",
  "Assetization Path",
  "Financing Story"
];

const frameworkMetadata: Record<Locale, Metadata> = {
  en: {
    title: "O2V Framework 20260510 | Full Official Public Release",
    description:
      "Full official public release of O2V Framework 20260510, an AI-era opportunity judgment framework for startup opportunity validation, venture opportunity assessment, business case validation, compliance gate review, assetization path, and financing story.",
    alternates: localizedAlternates("en", "framework")
  },
  zh: {
    title: "O2V Framework 20260510｜官方公开发布版",
    description:
      "O2V Framework 20260510 官方公开发布版：从机会信号到创业资产的前端机会判断框架，覆盖 Business Case、合规风险闸门、资产化路径和融资叙事。",
    alternates: localizedAlternates("zh", "framework")
  },
  de: {
    title: "O2V Framework 20260510 | Vollständige offizielle Veröffentlichung",
    description:
      "Vollständige offizielle Veröffentlichung des O2V Framework 20260510, ein Framework zur Chancenbewertung im KI-Zeitalter mit Business Case, Compliance Gate, Assetisierung und Financing Story.",
    alternates: localizedAlternates("de", "framework")
  }
};

export const frameworkContent: Record<Locale, { metadata: Metadata; title: string; subtitle: string; sections: Section[] }> = {
  en: {
    metadata: frameworkMetadata.en,
    title: "O2V Framework 20260510",
    subtitle: "Full Official Public Release",
    sections: [
      {
        heading: "One-Sentence Definition",
        body: [
          "O2V Framework, the Opportunity-to-Venture Framework, is an AI-era opportunity judgment framework that helps convert market signals into verifiable Business Cases, venture assets, and financing stories."
        ]
      },
      {
        heading: "Founding Statement",
        body: [
          "O2V Framework was created for a world where ideas, prototypes, and content can be produced rapidly, but opportunity quality remains hard to judge.",
          "Its role is to help founders, innovators, consultants, and early-stage investors decide which signals deserve time, capital, and execution."
        ]
      },
      {
        heading: "Positioning Statement",
        body: [
          "O2V is a front-end judgment framework, not a software product, sales funnel, or operating system.",
          "It integrates methodologies and practices from entrepreneurship, product discovery, innovation management, business case validation framework design, venture opportunity assessment framework thinking, investment screening, and risk governance."
        ]
      },
      {
        heading: "Why the AI Era Needs O2V",
        body: [
          "The AI era makes opportunity signals abundant and execution faster. It also makes weak opportunities easier to package as convincing narratives.",
          "O2V provides a disciplined path from signal to evidence, from evidence to Business Case, and from Business Case to venture asset."
        ]
      },
      {
        heading: "Applicable Scenarios",
        bullets: [
          "Startup opportunity validation framework for founders before committing resources.",
          "Corporate innovation screening before a pilot or internal venture is approved.",
          "Consulting work that requires a clear opportunity card, validation plan, and recommendation.",
          "Early-stage investment review before a financing story is accepted.",
          "AI-era opportunity judgment framework for new products, services, content ventures, and platform opportunities."
        ]
      },
      {
        heading: "The 9-Step Judgment Chain",
        body: ["Signal → Scenario → Persona → Pain → Product → Validation → Business Case → Asset → Financing Story"]
      },
      {
        heading: "Step Details",
        ordered: [
          "Signal: identify the external change, user behavior, market anomaly, technology shift, or regulatory trigger.",
          "Scenario: define the concrete situation where the signal creates a new or intensified need.",
          "Persona: specify the target user, decision-maker, payer, or beneficiary.",
          "Pain: assess urgency, frequency, cost of inaction, and willingness to pay.",
          "Product: define the smallest testable solution direction and the MVP required for learning.",
          "Validation: connect the MVP to Benefits Hypothesis, Leading Indicators, Financial Metrics, and Verification Plan.",
          "Business Case: build the structured argument for why the opportunity deserves resources.",
          "Asset: clarify the Assetization Path, including reusable data, workflow, IP, brand, channel, or operational advantage.",
          "Financing Story: translate validated evidence into an investable narrative supported by facts."
        ]
      },
      {
        heading: "O2V Scoring Model",
        bullets: [
          "Base Opportunity Score: 100 points",
          "Compliance Risk Adjustment: up to -50 points",
          "Red-line risk: immediate elimination"
        ],
        body: [
          "The score is a judgment aid, not a substitute for judgment. Compliance gate review is treated as a boundary condition because unmanaged risk can invalidate an otherwise attractive opportunity."
        ]
      },
      {
        heading: "Compliance Risk Gate",
        body: [
          "The compliance gate evaluates legal, regulatory, data, privacy, platform, content, financial, employment, and sector-specific risks.",
          "A high score cannot rescue an opportunity with red-line risk. Where boundaries are unclear, the recommendation should require expert review before execution."
        ]
      },
      {
        heading: "Business Case Template",
        body: ["Business Case validation chain: Benefits Hypothesis → MVP → Leading Indicators → Financial Metrics → Verification Plan"],
        ordered: businessCaseModules
      },
      {
        heading: "Core Principles",
        ordered: principleContent.en.principles
      },
      {
        heading: "Framework Deliverables",
        ordered: deliverables
      },
      {
        heading: "Copyright, Citation, and Legal Notice",
        body: [
          "Copyright © Li Zhi. All rights reserved.",
          "Citation: Source: Li Zhi, O2V Framework: Opportunity-to-Venture Framework, Official Public Release 20260510.",
          "O2V Framework does not claim exclusive rights over general concepts such as MVP, persona, business model, leading indicators, risk assessment, or business case.",
          "O2V Framework is not affiliated with, endorsed by, certified by, or officially connected with Lean Startup, Design Thinking, Jobs to Be Done, Business Model Canvas, Value Proposition Canvas, Stage-Gate, or any referenced methodology or organization.",
          "This publication is for informational and educational purposes and does not constitute legal, investment, financial, tax, or professional advice."
        ]
      },
      {
        heading: "Version Note",
        body: [
          "Version name: O2V Framework 20260510.",
          "Release type: Official Public Release 20260510.",
          "Internal Version: v1.4.",
          "Official site: Opportunity2Venture.com."
        ]
      }
    ]
  },
  zh: {
    metadata: frameworkMetadata.zh,
    title: "O2V Framework 20260510",
    subtitle: "官方公开发布版",
    sections: [
      {
        heading: "一句话定义",
        body: [
          "O2V Framework，即 Opportunity-to-Venture Framework，是一套面向 AI 时代的前端机会判断框架，用于将机会信号转化为可验证的 Business Case、创业资产和融资叙事。"
        ]
      },
      {
        heading: "创始声明",
        body: [
          "O2V Framework 面向一个点子、原型和内容都可以被快速生产，但机会质量仍然难以判断的时代。",
          "它帮助创业者、创新团队、咨询顾问和早期投资相关方判断哪些信号真正值得投入时间、资本和执行。"
        ]
      },
      {
        heading: "方法定位",
        body: [
          "O2V 是一套前端判断框架，不是软件产品、销售漏斗或运营系统。",
          "它融合了创业验证、产品发现、创新管理、Business Case 验证框架、创业机会评估框架、投资筛选和风险治理中的成熟方法论与实践。"
        ]
      },
      {
        heading: "为什么 AI 时代需要 O2V",
        body: [
          "AI 时代让机会信号变得丰富，也让执行速度变得更快。与此同时，弱机会也更容易被包装成看似可信的叙事。",
          "O2V 提供从信号到证据、从证据到 Business Case、从 Business Case 到创业资产的纪律化路径。"
        ]
      },
      {
        heading: "适用场景",
        bullets: [
          "创业者在投入资源前，用于创业机会验证。",
          "企业创新团队在批准试点或内部创业项目前，用于筛选机会。",
          "咨询项目中，用于形成机会卡、验证计划和建议结论。",
          "早期投资评估中，用于判断融资叙事是否具备证据基础。",
          "面向 AI 时代的新产品、新服务、内容型业务和平台机会的前端机会判断。"
        ]
      },
      {
        heading: "O2V 九步判断链路",
        body: ["Signal → Scenario → Persona → Pain → Product → Validation → Business Case → Asset → Financing Story"]
      },
      {
        heading: "九步法说明",
        ordered: [
          "Signal：识别外部变化、用户行为、市场异常、技术变化或监管触发因素。",
          "Scenario：定义信号产生新需求或强化既有需求的具体场景。",
          "Persona：明确目标用户、决策者、付费方或受益方。",
          "Pain：评估痛点的紧迫性、频率、不行动成本和付费意愿。",
          "Product：定义最小可测试解决方案方向，以及用于学习的 MVP。",
          "Validation：将 MVP 连接到 Benefits Hypothesis、Leading Indicators、Financial Metrics 和 Verification Plan。",
          "Business Case：形成说明机会为何值得投入资源的结构化论证。",
          "Asset：明确 Assetization Path，包括可复用数据、流程、知识产权、品牌、渠道或运营优势。",
          "Financing Story：将已验证证据转化为由事实支撑的可融资叙事。"
        ]
      },
      {
        heading: "O2V 评分模型",
        bullets: ["基础机会分：100 分", "合规风险调整项：最高扣 50 分", "红线风险：直接淘汰"],
        body: [
          "评分是判断辅助，不是判断本身的替代。合规风险闸门被视为边界条件，因为未被控制的风险可能使一个看似有吸引力的机会失效。"
        ]
      },
      {
        heading: "合规风险闸门",
        body: [
          "合规风险闸门评估法律、监管、数据、隐私、平台、内容、金融、用工和行业特定风险。",
          "高机会分不能挽救存在红线风险的机会。边界不清时，建议应要求在执行前进行专家审查。"
        ]
      },
      {
        heading: "Business Case 模板",
        body: ["Business Case validation chain: Benefits Hypothesis → MVP → Leading Indicators → Financial Metrics → Verification Plan"],
        ordered: businessCaseModules
      },
      {
        heading: "核心原则",
        ordered: principleContent.zh.principles
      },
      {
        heading: "框架交付物",
        ordered: deliverables
      },
      {
        heading: "版权、引用与法律声明",
        body: [
          "版权所有人：李智 / Li Zhi。保留所有权利。",
          "引用格式：来源：李智，O2V Framework：Opportunity-to-Venture Framework，从机会信号到创业资产的前端机会判断框架，官方公开发布版 20260510。",
          "O2V Framework 不主张对 MVP、用户画像、商业模式、领先指标、风险评估、商业案例等通用概念本身享有排他性权利。",
          "O2V Framework is not affiliated with, endorsed by, certified by, or officially connected with Lean Startup, Design Thinking, Jobs to Be Done, Business Model Canvas, Value Proposition Canvas, Stage-Gate, or any referenced methodology or organization.",
          "本发布内容仅用于信息和教育目的，不构成法律、投资、金融、税务或专业建议。"
        ]
      },
      {
        heading: "版本说明",
        body: [
          "版本名称：O2V Framework 20260510。",
          "发布类型：官方公开发布版 20260510。",
          "内部版本：v1.4。",
          "官网：Opportunity2Venture.com。"
        ]
      }
    ]
  },
  de: {
    metadata: frameworkMetadata.de,
    title: "O2V Framework 20260510",
    subtitle: "Vollständige offizielle Veröffentlichung",
    sections: [
      {
        heading: "Definition in einem Satz",
        body: [
          "Das O2V Framework, das Opportunity-to-Venture Framework, ist ein Framework zur Chancenbewertung im KI-Zeitalter, das Marktsignale in überprüfbare Business Cases, Venture Assets und Financing Stories überführt."
        ]
      },
      {
        heading: "Gründungserklärung",
        body: [
          "Das O2V Framework wurde für eine Welt entwickelt, in der Ideen, Prototypen und Inhalte schnell produziert werden können, die Qualität einer Chance jedoch schwer zu beurteilen bleibt.",
          "Es hilft Unternehmern, Innovationsteams, Beratern und Early-Stage-Investoren zu entscheiden, welche Signale Zeit, Kapital und Umsetzung verdienen."
        ]
      },
      {
        heading: "Positionierung",
        body: [
          "O2V ist ein Front-End-Bewertungsframework, kein Softwareprodukt, Sales Funnel oder Betriebssystem.",
          "Es integriert Methodologien und Praktiken aus Entrepreneurship, Product Discovery, Innovationsmanagement, Business-Case-Validierung, Venture Opportunity Assessment, Investment Screening und Risk Governance."
        ]
      },
      {
        heading: "Warum das KI-Zeitalter O2V braucht",
        body: [
          "Das KI-Zeitalter macht Chancensignale reichlich verfügbar und beschleunigt die Umsetzung. Zugleich lassen sich schwache Chancen leichter als überzeugende Narrative verpacken.",
          "O2V bietet einen disziplinierten Pfad vom Signal zur Evidenz, von der Evidenz zum Business Case und vom Business Case zum Venture Asset."
        ]
      },
      {
        heading: "Anwendungsbereiche",
        bullets: [
          "Startup Opportunity Validation Framework für Gründer vor der Ressourcenbindung.",
          "Screening von Corporate-Innovation-Vorhaben vor Pilotfreigabe oder internem Venture.",
          "Beratungsarbeit mit Opportunity Card, Validation Plan und Empfehlung.",
          "Early-Stage-Investmentprüfung, bevor eine Financing Story akzeptiert wird.",
          "Framework zur Chancenbewertung im KI-Zeitalter für neue Produkte, Services, Content Ventures und Plattformchancen."
        ]
      },
      {
        heading: "Die 9-stufige Bewertungskette",
        body: ["Signal → Scenario → Persona → Pain → Product → Validation → Business Case → Asset → Financing Story"]
      },
      {
        heading: "Erläuterung der Schritte",
        ordered: [
          "Signal: externe Veränderung, Nutzerverhalten, Marktanomalie, technologische Verschiebung oder regulatorischen Auslöser identifizieren.",
          "Scenario: konkrete Situation definieren, in der das Signal einen neuen oder verstärkten Bedarf erzeugt.",
          "Persona: Zielnutzer, Entscheider, Zahler oder Begünstigten spezifizieren.",
          "Pain: Dringlichkeit, Häufigkeit, Kosten des Nicht-Handelns und Zahlungsbereitschaft bewerten.",
          "Product: kleinste testbare Lösungsrichtung und das MVP für Lernen definieren.",
          "Validation: MVP mit Benefits Hypothesis, Leading Indicators, Financial Metrics und Verification Plan verbinden.",
          "Business Case: strukturiertes Argument erstellen, warum die Chance Ressourcen verdient.",
          "Asset: Assetization Path klären, einschließlich wiederverwendbarer Daten, Workflows, IP, Marke, Kanal oder operativer Vorteile.",
          "Financing Story: validierte Evidenz in ein investierbares, faktenbasiertes Narrativ übersetzen."
        ]
      },
      {
        heading: "O2V Scoring Model",
        bullets: [
          "Base Opportunity Score: maximal 100 Punkte",
          "Compliance Risk Adjustment: bis zu -50 Punkte",
          "Red-Line-Risiken: sofortige Eliminierung"
        ],
        body: [
          "Der Score ist eine Entscheidungshilfe, kein Ersatz für Urteilskraft. Das Compliance Gate wird als Grenzbedingung behandelt, weil nicht kontrolliertes Risiko eine attraktive Chance entwerten kann."
        ]
      },
      {
        heading: "Compliance Risk Gate",
        body: [
          "Das Compliance Risk Gate bewertet rechtliche, regulatorische, datenbezogene, Datenschutz-, Plattform-, Content-, Finanz-, Beschäftigungs- und branchenspezifische Risiken.",
          "Ein hoher Score kann eine Chance mit Red-Line-Risiko nicht retten. Bei unklaren Grenzen sollte die Empfehlung eine fachliche Prüfung vor der Umsetzung verlangen."
        ]
      },
      {
        heading: "Business Case Template",
        body: ["Business Case validation chain: Benefits Hypothesis → MVP → Leading Indicators → Financial Metrics → Verification Plan"],
        ordered: businessCaseModules
      },
      {
        heading: "Core Principles",
        ordered: principleContent.de.principles
      },
      {
        heading: "Framework Deliverables",
        ordered: deliverables
      },
      {
        heading: "Urheberrecht, Zitierung und rechtlicher Hinweis",
        body: [
          "Copyright © Li Zhi. All rights reserved.",
          "Zitierformat: Source: Li Zhi, O2V Framework: Opportunity-to-Venture Framework, Official Public Release 20260510.",
          "Das O2V Framework erhebt keinen exklusiven Anspruch auf allgemeine Konzepte wie MVP, Persona, Business Model, Leading Indicators, Risk Assessment oder Business Case.",
          "O2V Framework is not affiliated with, endorsed by, certified by, or officially connected with Lean Startup, Design Thinking, Jobs to Be Done, Business Model Canvas, Value Proposition Canvas, Stage-Gate, or any referenced methodology or organization.",
          "Diese Veröffentlichung dient Informations- und Bildungszwecken und stellt keine Rechts-, Anlage-, Finanz-, Steuer- oder professionelle Beratung dar."
        ]
      },
      {
        heading: "Versionshinweis",
        body: [
          "Versionsname: O2V Framework 20260510.",
          "Veröffentlichungstyp: Official Public Release 20260510.",
          "Interne Version: v1.4.",
          "Offizielle Website: Opportunity2Venture.com."
        ]
      }
    ]
  }
};

export const copyrightContent: Record<Locale, { metadata: Metadata; title: string; sections: Section[] }> = {
  en: {
    metadata: {
      title: "O2V Framework Copyright, Citation, References and Legal Notice",
      description:
        "Copyright, citation format, permission statement, rights boundary, reference methodologies statement, trademark notice, and legal disclaimer for O2V Framework.",
      alternates: localizedAlternates("en", "copyright")
    },
    title: "Copyright, Citation, References and Legal Notice",
    sections: [
      { heading: "Copyright holder", body: ["Copyright © Li Zhi. All rights reserved."] },
      {
        heading: "Citation format",
        body: ["Source: Li Zhi, O2V Framework: Opportunity-to-Venture Framework, Official Public Release 20260510."]
      },
      {
        heading: "Permission statement",
        body: [
          "Permission is required for citation beyond fair reference, adaptation, translation, reproduction, commercial use, training, consulting delivery, productization, model training, or substantial reuse of O2V Framework."
        ]
      },
      {
        heading: "Rights boundary",
        body: [
          "O2V Framework does not claim exclusive rights over general concepts such as MVP, persona, business model, leading indicators, risk assessment, or business case."
        ]
      },
      {
        heading: "Reference methodologies statement",
        body: [
          "O2V Framework is not affiliated with, endorsed by, certified by, or officially connected with Lean Startup, Design Thinking, Jobs to Be Done, Business Model Canvas, Value Proposition Canvas, Stage-Gate, or any referenced methodology or organization."
        ]
      },
      {
        heading: "Trademark notice",
        body: [
          "O2V Framework, Opportunity-to-Venture Framework, and Opportunity2Venture are used as identifiers for this publication site and framework release."
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
      title: "O2V Framework 版权、引用、参考方法与法律声明",
      description:
        "O2V Framework 的版权、引用格式、授权说明、权利边界、参考方法声明、商标说明与法律免责声明。",
      alternates: localizedAlternates("zh", "copyright")
    },
    title: "版权、引用、参考方法、商标与法律声明",
    sections: [
      { heading: "版权所有人", body: ["版权所有人：李智 / Li Zhi。保留所有权利。"] },
      {
        heading: "引用格式",
        body: [
          "来源：李智，O2V Framework：Opportunity-to-Venture Framework，从机会信号到创业资产的前端机会判断框架，官方公开发布版 20260510。"
        ]
      },
      {
        heading: "授权说明",
        body: [
          "对 O2V Framework 进行超出合理引用范围的引用、改编、翻译、复制、商业使用、培训、咨询交付、产品化、模型训练或实质性复用，应获得授权。"
        ]
      },
      {
        heading: "权利边界",
        body: [
          "O2V Framework 不主张对 MVP、用户画像、商业模式、领先指标、风险评估、商业案例等通用概念本身享有排他性权利。"
        ]
      },
      {
        heading: "参考方法声明",
        body: [
          "O2V Framework is not affiliated with, endorsed by, certified by, or officially connected with Lean Startup, Design Thinking, Jobs to Be Done, Business Model Canvas, Value Proposition Canvas, Stage-Gate, or any referenced methodology or organization."
        ]
      },
      {
        heading: "商标说明",
        body: [
          "O2V Framework、Opportunity-to-Venture Framework 和 Opportunity2Venture 在本站中作为本框架发布与官方网站识别名称使用。"
        ]
      },
      {
        heading: "法律免责声明",
        body: [
          "本站与框架发布内容仅用于信息和教育目的，不构成法律、投资、金融、税务或其他专业建议。"
        ]
      }
    ]
  },
  de: {
    metadata: {
      title: "O2V Framework Urheberrecht, Zitierung und Rechtshinweise",
      description:
        "Urheberrecht, Zitierformat, Genehmigung, Rechteabgrenzung, Referenzmethoden, Markenhinweis und rechtlicher Disclaimer für das O2V Framework.",
      alternates: localizedAlternates("de", "copyright")
    },
    title: "Urheberrecht-, Zitier- und Rechtshinweise",
    sections: [
      { heading: "Copyright holder", body: ["Copyright © Li Zhi. All rights reserved."] },
      {
        heading: "Citation format",
        body: ["Source: Li Zhi, O2V Framework: Opportunity-to-Venture Framework, Official Public Release 20260510."]
      },
      {
        heading: "Permission statement",
        body: [
          "Permission is required for citation beyond fair reference, adaptation, translation, reproduction, commercial use, training, consulting delivery, productization, model training, or substantial reuse of O2V Framework."
        ]
      },
      {
        heading: "Rights boundary",
        body: [
          "Das O2V Framework erhebt keinen exklusiven Anspruch auf allgemeine Konzepte wie MVP, Persona, Business Model, Leading Indicators, Risk Assessment oder Business Case."
        ]
      },
      {
        heading: "Reference methodologies statement",
        body: [
          "O2V Framework is not affiliated with, endorsed by, certified by, or officially connected with Lean Startup, Design Thinking, Jobs to Be Done, Business Model Canvas, Value Proposition Canvas, Stage-Gate, or any referenced methodology or organization."
        ]
      },
      {
        heading: "Trademark notice",
        body: [
          "O2V Framework, Opportunity-to-Venture Framework und Opportunity2Venture werden als Bezeichnungen für diese Veröffentlichung und das Framework verwendet."
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

export function creativeWorkJsonLd(locale: Locale) {
  const url = `https://opportunity2venture.com/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "O2V Framework",
    alternateName: ["Opportunity-to-Venture Framework", "Opportunity2Venture", "O2V"],
    description: homeContent[locale].jsonLdDescription,
    version: "20260510",
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
      "Opportunity-to-Venture Framework",
      "Opportunity2Venture",
      "startup opportunity validation framework",
      "venture opportunity assessment framework",
      "AI-era opportunity judgment framework",
      "business case validation",
      "compliance gate",
      "venture asset"
    ],
    url
  };
}
