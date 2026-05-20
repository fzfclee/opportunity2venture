import type { Metadata } from "next";
import { localizedAlternates, siteUrl, type Locale } from "@/lib/i18n";

export type NavKey = "home" | "framework" | "principles" | "copyright" | "download" | "about";

type Section = {
  heading: string;
  body?: string[];
  bullets?: string[];
  ordered?: string[];
};

type FrameworkContent = {
  metadata: Metadata;
  title: string;
  subtitle: string;
  overview: string[];
  cta: {
    label: string;
    href: string;
  };
  sections: Section[];
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

export const navLabels: Record<Locale, Record<NavKey, string>> = {
  en: {
    home: "Home",
    framework: "Framework",
    principles: "Principles",
    copyright: "Copyright",
    download: "Download",
    about: "About"
  },
  zh: {
    home: "首页",
    framework: "框架",
    principles: "原则",
    copyright: "版权",
    download: "下载",
    about: "关于"
  },
  de: {
    home: "Startseite",
    framework: "Framework",
    principles: "Prinzipien",
    copyright: "Urheberrecht",
    download: "Download",
    about: "Über"
  }
};

export const footerContent: Record<Locale, FooterLine[]> = {
  en: [
    { text: "O2V Framework 20260520 | Opportunity-to-Value Framework" },
    { text: "From Signal to Value. From Idea to Asset." },
    { text: "Copyright © Li Zhi. All rights reserved." },
    { label: "Official site:", text: "www.o2vframework.com", href: "https://www.o2vframework.com" },
    { label: "Email:", text: "contact@o2vframework.com", href: "mailto:contact@o2vframework.com" },
    { text: "Citation: Li Zhi, O2V Framework, Official Public Release 20260520." }
  ],
  zh: [
    { text: "O2V Framework 20260520 | Opportunity-to-Value Framework" },
    { text: "从机会信号到可验证价值。从想法到长期资产。" },
    { text: "版权所有人：李智 / Li Zhi" },
    { label: "官方网站：", text: "www.o2vframework.com", href: "https://www.o2vframework.com" },
    { label: "Email:", text: "contact@o2vframework.com", href: "mailto:contact@o2vframework.com" },
    { text: "引用格式：李智，O2V Framework，官方公开发布版 20260520。" }
  ],
  de: [
    { text: "O2V Framework 20260520 | Opportunity-to-Value Framework" },
    { text: "Vom Signal zum Wert. Von der Idee zum Asset." },
    { text: "Copyright © Li Zhi. All rights reserved." },
    { label: "Offizielle Website:", text: "www.o2vframework.com", href: "https://www.o2vframework.com" },
    { label: "Email:", text: "contact@o2vframework.com", href: "mailto:contact@o2vframework.com" },
    { text: "Zitierformat: Li Zhi, O2V Framework, Official Public Release 20260520." }
  ]
};

const homeDescriptions: Record<Locale, string> = {
  en:
    "O2V Framework, also known as Opportunity-to-Value Framework, is an AI-era opportunity judgment and value realization framework. It helps convert opportunity signals into validated value, Business Cases, value assets, and evidence-backed value stories.",
  zh:
    "O2V Framework 是一套面向 AI 时代的机会判断与价值实现框架，用于将机会信号转化为可验证价值、Business Case、价值资产和由证据支撑的价值叙事。版权所有人：李智。",
  de:
    "Das O2V Framework, auch Opportunity-to-Value Framework genannt, ist ein Framework für Chancenbewertung und Wertrealisierung im KI-Zeitalter. Es hilft, Chancensignale in validierten Wert, Business Cases, Value Assets und evidenzgestützte Value Stories zu überführen."
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    metadata: {
      title: "O2V Framework | Opportunity-to-Value Framework for the AI Era",
      description: homeDescriptions.en,
      alternates: localizedAlternates("en")
    },
    title: "Opportunity-to-Value Framework",
    subtitle: "Opportunity-to-Value Framework",
    tagline: ["From Signal to Value.", "From Idea to Asset."],
    deck: [
      "Official Public Release 20260520",
      "Internal Version: v1.5",
      "Copyright © Li Zhi. All rights reserved."
    ],
    body: [
      "O2V Framework is an AI-era opportunity judgment and value realization framework.",
      "It was created to answer a simple but critical question:",
      "When opportunities are everywhere, how do we know which ones deserve resources, validation, ownership, and execution?",
      "In the AI era, ideas are no longer scarce.",
      "Signals are everywhere.",
      "Products can be prototyped faster than ever.",
      "Content can be generated instantly.",
      "Almost every trend can be turned into a compelling story.",
      "But speed does not remove uncertainty.",
      "More ideas do not mean better opportunities.",
      "A working demo does not prove real demand.",
      "User interest does not always become willingness to pay.",
      "Growth without compliance boundaries can become a hidden liability.",
      "And a business that earns short-term income may still fail to become a long-term asset.",
      "O2V Framework was designed to bring discipline to the earliest stage of opportunity judgment and value creation.",
      "It helps individual builders, entrepreneurs, innovators, consultants, enterprise leaders, and early-stage investors move from scattered market signals to structured opportunity judgment and value realization.",
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
      "and a value story that can be supported by evidence."
    ],
    buttons: [
      { label: "Framework Overview", href: "/en/framework" },
      { label: "Core Principles", href: "/en/principles" },
      { label: "Copyright & Citation", href: "/en/copyright" },
      { label: "Download PDF", href: "/en/download" }
    ],
    jsonLdDescription: homeDescriptions.en
  },
  zh: {
    metadata: {
      title: "O2V Framework｜从机会信号到可验证价值的机会判断与价值实现框架",
      description: homeDescriptions.zh,
      alternates: localizedAlternates("zh")
    },
    title: "Opportunity-to-Value Framework",
    subtitle: "Opportunity-to-Value Framework",
    tagline: ["从机会信号到可验证价值。", "从想法到长期资产。"],
    deck: ["官方公开发布版 20260520", "内部版本：v1.5", "版权所有人：李智 / Li Zhi"],
    body: [
      "O2V Framework 是一套面向 AI 时代的机会判断与价值实现框架。",
      "它试图回答一个简单但关键的问题：",
      "当机会看起来无处不在时，我们如何判断哪些机会真正值得投入资源、验证、owner 和执行？",
      "在 AI 时代，点子不再稀缺。",
      "信号到处都是。",
      "产品原型可以被更快做出来。",
      "内容可以被瞬间生成。",
      "几乎每一个趋势，都可以被包装成一个诱人的故事。",
      "但速度并不会自动消除不确定性。",
      "更多点子不等于更好的机会。",
      "一个能运行的 Demo 不等于真实需求成立。",
      "用户感兴趣不等于愿意付费。",
      "没有合规边界的增长，可能变成隐藏负债。",
      "一个能赚短期收入的业务，也未必能沉淀为长期资产。",
      "O2V Framework 的目的，是为机会判断与价值创造的最前端建立一套纪律。",
      "它帮助个人构建者、创业者、创新团队、咨询顾问、企业负责人和早期投资相关方，从分散的市场信号出发，形成结构化的机会判断与价值实现。",
      "它关注一个机会是否具备："
    ],
    bullets: [
      "真实场景；",
      "清晰用户；",
      "强痛点；",
      "可验证 MVP；",
      "可衡量的领先指标；",
      "可信的 Business Case；",
      "可控制的合规边界；",
      "可沉淀的资产化路径；",
      "以及能够被证据支撑的价值叙事。"
    ],
    buttons: [
      { label: "阅读框架概览", href: "/zh/framework" },
      { label: "核心原则", href: "/zh/principles" },
      { label: "版权与引用", href: "/zh/copyright" },
      { label: "下载 PDF", href: "/zh/download" }
    ],
    jsonLdDescription: homeDescriptions.zh
  },
  de: {
    metadata: {
      title: "O2V Framework | Opportunity-to-Value Framework für das KI-Zeitalter",
      description: homeDescriptions.de,
      alternates: localizedAlternates("de")
    },
    title: "Opportunity-to-Value Framework",
    subtitle: "Opportunity-to-Value Framework",
    tagline: ["Vom Signal zum Wert.", "Von der Idee zum Asset."],
    deck: [
      "Offizielle öffentliche Veröffentlichung 20260520",
      "Interne Version: v1.5",
      "Copyright © Li Zhi. All rights reserved."
    ],
    body: [
      "Das O2V Framework ist ein Framework für Chancenbewertung und Wertrealisierung im KI-Zeitalter.",
      "Es wurde entwickelt, um eine einfache, aber entscheidende Frage zu beantworten:",
      "Wenn Chancen überall sichtbar sind, woran erkennen wir, welche davon Ressourcen, Validierung, Ownership und Umsetzung verdienen?",
      "Im KI-Zeitalter sind Ideen nicht mehr knapp.",
      "Signale sind überall.",
      "Produktprototypen können schneller erstellt werden als je zuvor.",
      "Inhalte können sofort generiert werden.",
      "Fast jeder Trend kann in eine überzeugende Geschichte verwandelt werden.",
      "Doch Geschwindigkeit beseitigt keine Unsicherheit.",
      "Mehr Ideen bedeuten nicht automatisch bessere Chancen.",
      "Ein funktionierender Demo-Prototyp beweist noch keine echte Nachfrage.",
      "Nutzerinteresse führt nicht immer zu Zahlungsbereitschaft.",
      "Wachstum ohne Compliance-Grenzen kann zu einer versteckten Verbindlichkeit werden.",
      "Und ein Geschäft, das kurzfristige Einnahmen erzielt, wird nicht automatisch zu einem langfristigen Asset.",
      "Das O2V Framework wurde entwickelt, um Disziplin in die früheste Phase der Chancenbewertung und Wertschöpfung zu bringen.",
      "Es hilft individuellen Buildern, Unternehmern, Innovationsteams, Beratern, Unternehmensverantwortlichen und Early-Stage-Investoren, aus verstreuten Marktsignalen strukturierte Chancenbewertung und Wertrealisierung abzuleiten.",
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
      "und eine Value Story, die durch Evidenz gestützt werden kann."
    ],
    buttons: [
      { label: "Framework-Überblick", href: "/de/framework" },
      { label: "Prinzipien", href: "/de/principles" },
      { label: "Urheberrecht & Zitierung", href: "/de/copyright" },
      { label: "PDF herunterladen", href: "/de/download" }
    ],
    jsonLdDescription: homeDescriptions.de
  }
};

export const sharedHomeClosing: Record<Locale, string[]> = {
  en: [
    "O2V does not try to replace proven methodologies.",
    "It integrates and recomposes mature practices from entrepreneurship, product discovery, innovation management, business case design, value realization, investment screening, and risk governance.",
    "Its purpose is not to generate more ideas.",
    "Its purpose is to identify which opportunities deserve time, resources, validation, ownership, and execution."
  ],
  zh: [
    "O2V 并不试图替代已有成熟方法论。",
    "它融合并重新编排了创业验证、产品发现、创新管理、商业案例设计、价值实现、投资筛选和风险治理等领域的成熟方法论与实践。",
    "它的目的不是生成更多点子。",
    "它的目的，是判断哪些机会真正值得投入时间、资源、验证、owner 和执行。"
  ],
  de: [
    "O2V versucht nicht, bewährte Methoden zu ersetzen.",
    "Es integriert und rekombiniert reife Praktiken aus Entrepreneurship, Product Discovery, Innovationsmanagement, Business-Case-Design, Wertrealisierung, Investment Screening und Risk Governance.",
    "Sein Ziel ist nicht, mehr Ideen zu generieren.",
    "Sein Ziel ist es, zu erkennen, welche Chancen Zeit, Ressourcen, Validierung, Ownership und Umsetzung verdienen."
  ]
};

export const principleContent: Record<Locale, { metadata: Metadata; title: string; principles: string[] }> = {
  en: {
    metadata: {
      title: "Core Principles | O2V Framework",
      description:
        "Core principles of O2V Framework, the Opportunity-to-Value Framework for AI-era opportunity judgment, business case validation, compliance gate review, value asset development, and value realization.",
      alternates: localizedAlternates("en", "principles")
    },
    title: "Core Principles",
    principles: [
      "O2V is not invented from scratch. It is a structured recomposition of proven practices for the AI era.",
      "An opportunity starts with a signal, but it must be proven through scenario, persona, pain, and evidence.",
      "Without a clear persona and strong pain, there is no real opportunity.",
      "MVP is not the smallest product. It is the smallest way to validate the most critical assumption.",
      "Leading indicators must be defined after the MVP, because they exist to judge whether the MVP is validating the value hypothesis.",
      "A Business Case is not a presentation. It is a structured argument for why an opportunity deserves resources.",
      "Short-term revenue proves demand, but long-term assets define the ceiling.",
      "Value stories must be supported by validation data, not ambition alone.",
      "Compliance risk is not a minor deduction. It is a gate that determines whether an opportunity can move forward.",
      "O2V exists to reduce early-stage misjudgment before time, resources, ownership, and execution are committed."
    ]
  },
  zh: {
    metadata: {
      title: "核心原则｜O2V Framework",
      description:
        "O2V Framework 核心原则：面向 AI 时代的机会判断与价值实现框架，用于 Business Case 验证、合规风险闸门、价值资产发展和价值叙事。",
      alternates: localizedAlternates("zh", "principles")
    },
    title: "核心原则",
    principles: [
      "O2V 不是凭空发明的理论，而是面向 AI 时代对成熟实践的结构化重组。",
      "机会可以始于信号，但必须通过场景、用户、痛点和证据被证明。",
      "没有清晰用户和强痛点，就没有真正的机会。",
      "MVP 不是最小产品，而是验证最关键假设的最小方式。",
      "领先指标必须在 MVP 之后定义，因为它们的作用是判断 MVP 是否正在验证价值假设。",
      "Business Case 不是展示材料，而是说明一个机会为何值得投入资源的结构化论证。",
      "短期收入证明需求，长期资产决定天花板。",
      "价值叙事必须由验证数据支撑，而不能只靠愿景。",
      "合规风险不是普通扣分项，而是决定机会能否继续推进的闸门。",
      "O2V 的存在，是为了在投入时间、资源、owner 和执行之前，降低早期机会误判。"
    ]
  },
  de: {
    metadata: {
      title: "Core Principles | O2V Framework",
      description:
        "Core Principles des O2V Framework zur Chancenbewertung und Wertrealisierung im KI-Zeitalter, Business Case Validierung, Compliance Gate, Value Asset Development und Value Story.",
      alternates: localizedAlternates("de", "principles")
    },
    title: "Core Principles",
    principles: [
      "O2V ist nicht aus dem Nichts erfunden. Es ist eine strukturierte Rekombination bewährter Praktiken für das KI-Zeitalter.",
      "Eine Chance kann mit einem Signal beginnen, muss aber durch Szenario, Persona, Pain Point und Evidenz bewiesen werden.",
      "Ohne klare Persona und starken Pain Point gibt es keine echte Chance.",
      "MVP ist nicht das kleinste Produkt. Es ist der kleinste Weg, die kritischste Annahme zu validieren.",
      "Leading Indicators müssen nach dem MVP definiert werden, weil sie beurteilen sollen, ob das MVP die Value Hypothesis validiert.",
      "Ein Business Case ist keine Präsentation. Er ist ein strukturiertes Argument dafür, warum eine Chance Ressourcen verdient.",
      "Kurzfristiger Umsatz beweist Nachfrage, aber langfristige Assets definieren die Obergrenze.",
      "Value Stories müssen durch Validierungsdaten gestützt werden, nicht nur durch Ambition.",
      "Compliance-Risiko ist kein kleiner Abzug. Es ist ein Gate, das bestimmt, ob eine Chance weiterverfolgt werden kann.",
      "O2V existiert, um frühe Fehlbewertungen zu reduzieren, bevor Zeit, Ressourcen, Ownership und Umsetzung gebunden werden."
    ]
  }
};

export const downloadCards: DownloadCard[] = [
  {
    key: "zh",
    labels: {
      en: "Chinese PDF — O2V Framework 20260520",
      zh: "中文 PDF — O2V Framework 20260520",
      de: "Chinesische PDF — O2V Framework 20260520"
    },
    fileName: "o2v-framework-20260520-zh.pdf",
    href: "/downloads/o2v-framework-20260520-zh.pdf"
  },
  {
    key: "en",
    labels: {
      en: "English PDF — O2V Framework 20260520",
      zh: "英文 PDF — O2V Framework 20260520",
      de: "Englische PDF — O2V Framework 20260520"
    },
    fileName: "o2v-framework-20260520-en.pdf",
    href: "/downloads/o2v-framework-20260520-en.pdf"
  },
  {
    key: "de",
    labels: {
      en: "German PDF — O2V Framework 20260520",
      zh: "德文 PDF — O2V Framework 20260520",
      de: "Deutsche PDF — O2V Framework 20260520"
    },
    fileName: "o2v-framework-20260520-de.pdf",
    href: "/downloads/o2v-framework-20260520-de.pdf"
  }
];

export const downloadContent: Record<Locale, DownloadContent> = {
  en: {
    metadata: {
      title: "Download O2V Framework 20260520",
      description:
        "Download page for O2V Framework 20260520, the Opportunity-to-Value Framework, with current release PDF downloads in Chinese, English, and German.",
      alternates: localizedAlternates("en", "download")
    },
    title: "Download O2V Framework 20260520",
    deck: ["Opportunity-to-Value Framework", "Official Public Release 20260520", "Transition Release"],
    fullReleaseNote: "O2V Framework 20260520 PDF downloads are available in Chinese, English, and German.",
    button: "Download PDF",
    permissionReminder:
      "Permission is required for adaptation, translation, commercial use, training, consulting delivery, productization, model training, or substantial reuse.",
    fields: {
      language: "Language",
      fileName: "File name",
      version: "Version",
      internalVersion: "Internal version",
      copyright: "Copyright"
    },
    versionValue: "Official Public Release 20260520",
    internalVersionValue: "v1.5",
    copyrightValue: "Copyright © Li Zhi. All rights reserved."
  },
  zh: {
    metadata: {
      title: "下载 O2V Framework 20260520",
      description:
        "下载 O2V Framework 20260520，即 Opportunity-to-Value Framework，提供中文、英文、德文 PDF 下载入口。",
      alternates: localizedAlternates("zh", "download")
    },
    title: "下载 O2V Framework 20260520",
    deck: ["Opportunity-to-Value Framework", "官方公开发布版 20260520", "Transition Release"],
    fullReleaseNote: "O2V Framework 20260520 PDF 提供中文、英文和德文下载。",
    button: "下载 PDF",
    permissionReminder:
      "任何改编、翻译、商业使用、培训、咨询交付、产品化、模型训练或实质性复用均需获得授权。",
    fields: {
      language: "语言",
      fileName: "文件名",
      version: "版本",
      internalVersion: "内部版本",
      copyright: "版权"
    },
    versionValue: "官方公开发布版 20260520",
    internalVersionValue: "v1.5",
    copyrightValue: "版权所有人：李智 / Li Zhi"
  },
  de: {
    metadata: {
      title: "O2V Framework 20260520 herunterladen",
      description:
        "Download-Seite für das O2V Framework 20260520, das Opportunity-to-Value Framework, mit aktuellen PDF-Downloads auf Chinesisch, Englisch und Deutsch.",
      alternates: localizedAlternates("de", "download")
    },
    title: "O2V Framework 20260520 herunterladen",
    deck: ["Opportunity-to-Value Framework", "Official Public Release 20260520", "Transition Release"],
    fullReleaseNote: "O2V Framework 20260520 PDF-Downloads sind auf Chinesisch, Englisch und Deutsch verfügbar.",
    button: "PDF herunterladen",
    permissionReminder:
      "Für Anpassung, Übersetzung, kommerzielle Nutzung, Training, Beratung, Produktisierung, Modelltraining oder wesentliche Wiederverwendung ist eine Genehmigung erforderlich.",
    fields: {
      language: "Sprache",
      fileName: "Dateiname",
      version: "Version",
      internalVersion: "Interne Version",
      copyright: "Copyright"
    },
    versionValue: "Official Public Release 20260520",
    internalVersionValue: "v1.5",
    copyrightValue: "Copyright © Li Zhi. All rights reserved."
  }
};

export const businessCaseModules: Record<Locale, string[]> = {
  en: [
    "Project Name",
    "One-Sentence Opportunity Judgment",
    "Target User & Persona",
    "Core Pain and Willingness to Pay / Act",
    "Benefits Hypothesis",
    "MVP",
    "Leading Indicators",
    "Financial Metrics",
    "Verification Plan",
    "Solution Roadmap",
    "Market & Channel Fit",
    "Business Model",
    "Assetization Path",
    "Value Story",
    "Key Risks & Compliance Level",
    "O2V Score + Recommendation"
  ],
  zh: [
    "项目名称",
    "一句话机会判断",
    "目标用户与用户画像",
    "核心痛点与付费 / 行动意愿",
    "价值收益假设",
    "MVP",
    "领先指标",
    "财务指标",
    "验证计划",
    "解决方案路线图",
    "市场与渠道匹配",
    "商业模式",
    "资产化路径",
    "价值叙事",
    "关键风险与合规等级",
    "O2V 评分与建议"
  ],
  de: [
    "Projektname",
    "Opportunity Judgment in einem Satz",
    "Target User & Persona",
    "Core Pain and Willingness to Pay / Act",
    "Benefits Hypothesis",
    "MVP",
    "Leading Indicators",
    "Financial Metrics",
    "Verification Plan",
    "Solution Roadmap",
    "Market & Channel Fit",
    "Business Model",
    "Assetization Path",
    "Value Story",
    "Key Risks & Compliance Level",
    "O2V Score + Recommendation"
  ]
};

export const deliverables: Record<Locale, string[]> = {
  en: [
    "Opportunity Signal List",
    "Opportunity Card",
    "O2V Score",
    "Compliance Risk Level",
    "Business Case",
    "Validation Plan",
    "Assetization Path",
    "Value Story"
  ],
  zh: ["机会信号清单", "机会卡片", "O2V 评分", "合规风险等级", "Business Case", "验证计划", "资产化路径", "价值叙事框架"],
  de: [
    "Opportunity Signal List",
    "Opportunity Card",
    "O2V Score",
    "Compliance Risk Level",
    "Business Case",
    "Validation Plan",
    "Assetization Path",
    "Value Story / Wertnarrativ"
  ]
};

export const frameworkContent: Record<Locale, FrameworkContent> = {
  en: {
    metadata: {
      title: "O2V Framework 20260520 | Official Web Overview",
      description:
        "A web overview of O2V Framework 20260520, the Opportunity-to-Value Framework, presenting the core structure, 9-step judgment chain, scoring logic, and key principles.",
      alternates: localizedAlternates("en", "framework")
    },
    title: "O2V Framework 20260520",
    subtitle: "Opportunity-to-Value Framework",
    overview: [
      "This page provides a web overview of O2V Framework 20260520. It presents the core structure, judgment chain, scoring logic, and key principles for quick reading and online reference.",
      "The download page points to the 20260520 PDF release files in Chinese, English, and German."
    ],
    cta: { label: "Download PDFs", href: "/en/download" },
    sections: [
      {
        heading: "One-Sentence Definition",
        body: [
          "O2V Framework, the Opportunity-to-Value Framework, is an AI-era opportunity judgment and value realization framework that helps convert opportunity signals into validated value, Business Cases, value assets, and evidence-backed value stories."
        ]
      },
      {
        heading: "Founding Statement",
        body: [
          "O2V Framework was designed to bring discipline to the earliest stage of opportunity judgment and value creation.",
          "It helps teams decide whether a signal can become a validated opportunity, a credible Business Case, a value asset, and a story that deserves continued resources."
        ]
      },
      {
        heading: "Positioning Statement",
        body: [
          "O2V is not a replacement for existing methodologies. It is a structured integration and recomposition of mature practices from entrepreneurship, product discovery, innovation management, business case design, value realization, investment screening, and risk governance.",
          "Its independent value lies in organizing mature practices into a continuous opportunity-to-value assessment chain."
        ]
      },
      {
        heading: "Why the AI Era Needs O2V",
        body: [
          "AI increases the speed of ideation, prototyping, and content production. It also increases the risk of mistaking activity for validated opportunity.",
          "O2V provides a disciplined path from signal to evidence, from evidence to Business Case, and from Business Case to value asset."
        ]
      },
      {
        heading: "Applicable Scenarios",
        bullets: [
          "Opportunity validation before founders, builders, or teams commit resources.",
          "Corporate innovation screening before a pilot, AI use case, or internal venture is approved.",
          "Consulting work that requires a clear opportunity card, validation plan, and recommendation.",
          "Early-stage investment review before an investor story is accepted.",
          "AI-era opportunity judgment for new products, services, content ventures, enterprise initiatives, and platform opportunities."
        ]
      },
      {
        heading: "9-Step Judgment Chain",
        body: ["Signal → Scenario → Persona → Pain → Product → Validation → Business Case → Asset → Value Story"]
      },
      {
        heading: "Step Details",
        ordered: [
          "Signal: capture opportunity signals before judging them.",
          "Scenario: test whether the signal can exist in a real use context.",
          "Persona: clarify who uses, pays, decides, recommends, and repeatedly needs the solution.",
          "Pain: judge whether the problem is frequent, intense, valuable, and connected to willingness to pay.",
          "Product: define the minimum product or experience needed to validate the most critical assumption.",
          "Validation: turn the MVP into measurable evidence.",
          "Business Case: connect the value hypothesis, MVP, leading indicators, financial metrics, and verification plan.",
          "Asset: identify whether the opportunity can build long-term user, data, content, methodology, product, channel, brand, ecosystem, or rights assets.",
          "Value Story: translate validated evidence into a clear narrative explaining why the opportunity deserves resources, ownership, scaling, or investment."
        ]
      },
      {
        heading: "Business Case Template",
        body: [
          "Business Case validation chain: Benefits Hypothesis → MVP → Leading Indicators → Financial Metrics → Verification Plan",
          "Leading Indicators exist to judge whether the MVP is validating the Value Hypothesis.",
          "This chain is not only for fundraising. It is used to judge whether an opportunity deserves further resources, ownership, operation, scaling, or investment."
        ],
        ordered: businessCaseModules.en
      },
      { heading: "Core Principles", ordered: principleContent.en.principles },
      { heading: "Framework Deliverables", ordered: deliverables.en },
      {
        heading: "Copyright, Citation and Legal Notice",
        body: [
          "Copyright © Li Zhi. All rights reserved.",
          "Citation: Source: Li Zhi, O2V Framework: Opportunity-to-Value Framework, Official Public Release 20260520.",
          "Opportunity-to-Venture is retained only as historical release wording and as a venture-context configuration."
        ]
      }
    ]
  },
  zh: {
    metadata: {
      title: "O2V Framework 20260520｜官方网页概览版",
      description:
        "O2V Framework 20260520 的官方网页概览版，即 Opportunity-to-Value Framework，呈现核心结构、九步判断链路、评分逻辑和关键原则。",
      alternates: localizedAlternates("zh", "framework")
    },
    title: "O2V Framework 20260520",
    subtitle: "Opportunity-to-Value Framework",
    overview: [
      "本页面为 O2V Framework 20260520 的官方网页概览版，用于快速阅读和在线引用，重点呈现框架的核心结构、九步判断链路、评分逻辑和关键原则。",
      "下载页已指向中文、英文和德文的 20260520 PDF 发布文件。"
    ],
    cta: { label: "下载 PDF", href: "/zh/download" },
    sections: [
      {
        heading: "一句话定义",
        body: [
          "O2V Framework，即 Opportunity-to-Value Framework，是一套面向 AI 时代的机会判断与价值实现框架，用于将机会信号转化为可验证价值、Business Case、价值资产和由证据支撑的价值叙事。"
        ]
      },
      {
        heading: "创始声明",
        body: [
          "O2V Framework 的目的，是为机会判断与价值创造的最前端建立一套纪律。",
          "它帮助团队判断一个信号是否能够成为经过验证的机会、可信的 Business Case、可沉淀的价值资产，以及值得继续获得资源支持的价值叙事。"
        ]
      },
      {
        heading: "定位声明",
        body: [
          "O2V 并不是替代既有方法论，而是将创业验证、产品发现、创新管理、商业案例设计、价值实现、投资筛选和风险治理等成熟实践进行结构化整合与重新编排。",
          "它的独立价值，在于将成熟实践组织为一条连续的 opportunity-to-value assessment 链路。"
        ]
      },
      {
        heading: "为什么 AI 时代需要 O2V",
        body: [
          "AI 提高了构思、原型和内容生产的速度，也提高了把活动误认为已验证机会的风险。",
          "O2V 提供一条从信号到证据、从证据到 Business Case、从 Business Case 到价值资产的纪律化路径。"
        ]
      },
      {
        heading: "适用场景",
        bullets: [
          "创始人、构建者或团队投入资源之前的机会验证。",
          "企业在批准试点、AI 用例或内部创业项目前的创新筛选。",
          "需要形成清晰机会卡片、验证计划和建议的咨询工作。",
          "早期投资人在接受投资叙事之前的机会审查。",
          "面向新产品、服务、内容型机会、企业倡议和平台机会的 AI 时代机会判断。"
        ]
      },
      {
        heading: "九步判断链路",
        body: [
          "机会信号 → 场景重构 → 目标用户画像 → 真实痛点与付费动机 → 最小产品定义 → 验证设计 → 完整商业案例 → 资产化路径设计 → 价值叙事"
        ]
      },
      {
        heading: "步骤说明",
        ordered: [
          "Signal：捕捉机会信号，不急于做判断。",
          "Scenario：判断信号是否能落入真实使用场景。",
          "Persona：明确谁使用、谁付费、谁决策、谁推荐、谁会反复需要。",
          "Pain：判断问题是否高频、高强度、高价值，并与付费动机相连。",
          "Product：定义验证最关键假设的最小产品或体验。",
          "Validation：把 MVP 转化为可衡量证据。",
          "Business Case：整合价值收益假设、MVP、领先指标、财务指标和验证计划。",
          "Asset：判断机会是否能沉淀用户、数据、内容、方法论、产品、渠道、品牌、生态或长期权利资产。",
          "Value Story：将已验证证据转化为清晰的价值叙事，说明该机会为什么值得继续获得资源、owner、规模化投入或投资支持。"
        ]
      },
      {
        heading: "Business Case 模板",
        body: [
          "Business Case 验证链条：Benefits Hypothesis → MVP → Leading Indicators → Financial Metrics → Verification Plan",
          "Leading Indicators 用于判断 MVP 是否正在验证 Value Hypothesis。",
          "这条链路不只是为了融资，而是为了判断一个机会是否值得继续获得资源、owner、运营投入、规模化支持或投资支持。"
        ],
        ordered: businessCaseModules.zh
      },
      { heading: "核心原则", ordered: principleContent.zh.principles },
      { heading: "框架交付物", ordered: deliverables.zh },
      {
        heading: "版权、引用与法律声明",
        body: [
          "版权所有人：李智 / Li Zhi。保留所有权利。",
          "引用格式：来源：李智，O2V Framework：Opportunity-to-Value Framework，从机会信号到可验证价值的机会判断与价值实现框架，官方公开发布版 20260520。",
          "Opportunity-to-Venture 仅作为历史发布措辞和创业语境配置保留。"
        ]
      }
    ]
  },
  de: {
    metadata: {
      title: "O2V Framework 20260520 | Offizieller Web-Überblick",
      description:
        "Ein Web-Überblick über das O2V Framework 20260520, das Opportunity-to-Value Framework, mit Kernstruktur, 9-stufiger Bewertungskette, Scoring-Logik und wichtigsten Prinzipien.",
      alternates: localizedAlternates("de", "framework")
    },
    title: "O2V Framework 20260520",
    subtitle: "Opportunity-to-Value Framework",
    overview: [
      "Diese Seite bietet einen Web-Überblick über das O2V Framework 20260520. Sie stellt die Kernstruktur, die Bewertungskette, die Scoring-Logik und die wichtigsten Prinzipien für schnelle Lektüre und Online-Referenz dar.",
      "Die Download-Seite verweist auf die PDF-Dateien der Version 20260520 auf Chinesisch, Englisch und Deutsch."
    ],
    cta: { label: "PDFs herunterladen", href: "/de/download" },
    sections: [
      {
        heading: "Definition in einem Satz",
        body: [
          "Das O2V Framework, das Opportunity-to-Value Framework, ist ein Framework für Chancenbewertung und Wertrealisierung im KI-Zeitalter, das Chancensignale in validierten Wert, Business Cases, Value Assets und evidenzgestützte Value Stories überführt."
        ]
      },
      {
        heading: "Gründungserklärung",
        body: [
          "Das O2V Framework wurde entwickelt, um Disziplin in die früheste Phase der Chancenbewertung und Wertschöpfung zu bringen.",
          "Es hilft Teams zu entscheiden, ob ein Signal zu einer validierten Chance, einem glaubwürdigen Business Case, einem Value Asset und einer Story werden kann, die weitere Ressourcen verdient."
        ]
      },
      {
        heading: "Positionierung",
        body: [
          "O2V ersetzt keine bestehenden Methoden. Es ist eine strukturierte Integration und Rekombination reifer Praktiken aus Entrepreneurship, Product Discovery, Innovationsmanagement, Business-Case-Design, Wertrealisierung, Investment Screening und Risk Governance.",
          "Sein eigenständiger Wert liegt darin, reife Praktiken in eine kontinuierliche opportunity-to-value assessment chain zu bringen."
        ]
      },
      {
        heading: "Warum das KI-Zeitalter O2V braucht",
        body: [
          "KI erhöht die Geschwindigkeit von Ideenfindung, Prototyping und Content-Produktion. Sie erhöht auch das Risiko, Aktivität mit validierter Chance zu verwechseln.",
          "O2V bietet einen disziplinierten Pfad vom Signal zur Evidenz, von der Evidenz zum Business Case und vom Business Case zum Value Asset."
        ]
      },
      {
        heading: "Anwendungsszenarien",
        bullets: [
          "Opportunity Validation, bevor Gründer, Builder oder Teams Ressourcen binden.",
          "Corporate-Innovation-Screening, bevor ein Pilot, AI Use Case oder internes Venture freigegeben wird.",
          "Beratungsarbeit, die eine klare Opportunity Card, einen Validierungsplan und eine Empfehlung benötigt.",
          "Early-Stage-Investmentprüfung, bevor eine Investor Story akzeptiert wird.",
          "Chancenbewertung im KI-Zeitalter für neue Produkte, Services, Content Ventures, Enterprise Initiatives und Plattformchancen."
        ]
      },
      {
        heading: "9-stufige Bewertungskette",
        body: ["Signal → Scenario → Persona → Pain → Product → Validation → Business Case → Asset → Value Story"]
      },
      {
        heading: "Erläuterung der Schritte",
        ordered: [
          "Signal: Chancensignale erfassen, bevor sie bewertet werden.",
          "Scenario: prüfen, ob das Signal in einem realen Nutzungskontext bestehen kann.",
          "Persona: klären, wer nutzt, zahlt, entscheidet, empfiehlt und wiederkehrenden Bedarf hat.",
          "Pain: prüfen, ob das Problem häufig, intensiv, wertvoll und mit Zahlungsbereitschaft verbunden ist.",
          "Product: das minimale Produkt oder Erlebnis definieren, mit dem die kritischste Annahme validiert wird.",
          "Validation: das MVP in messbare Evidenz überführen.",
          "Business Case: Value Hypothesis, MVP, Leading Indicators, Financial Metrics und Verification Plan verbinden.",
          "Asset: prüfen, ob die Chance langfristige User-, Daten-, Content-, Methodology-, Product-, Channel-, Brand-, Ecosystem- oder Rights-Assets aufbauen kann.",
          "Value Story: validierte Evidenz in ein klares Narrativ übersetzen, das erklärt, warum die Chance Ressourcen, Ownership, Skalierung oder Investment verdient."
        ]
      },
      {
        heading: "Business Case Template",
        body: [
          "Business Case validation chain: Benefits Hypothesis → MVP → Leading Indicators → Financial Metrics → Verification Plan",
          "Leading Indicators exist to judge whether the MVP is validating the Value Hypothesis.",
          "Diese Kette dient nicht nur Fundraising. Sie beurteilt, ob eine Chance weitere Ressourcen, Ownership, Betrieb, Skalierung oder Investment verdient."
        ],
        ordered: businessCaseModules.de
      },
      { heading: "Core Principles", ordered: principleContent.de.principles },
      { heading: "Framework Deliverables", ordered: deliverables.de },
      {
        heading: "Urheberrecht, Zitierung und rechtlicher Hinweis",
        body: [
          "Copyright © Li Zhi. All rights reserved.",
          "Zitierformat: Source: Li Zhi, O2V Framework: Opportunity-to-Value Framework, Official Public Release 20260520.",
          "Opportunity-to-Venture bleibt nur als historische Release-Sprache und Venture-Kontext-Konfiguration erhalten."
        ]
      }
    ]
  }
};

export const copyrightContent: Record<Locale, { metadata: Metadata; title: string; sections: Section[] }> = {
  en: {
    metadata: {
      title: "Copyright, Citation and Legal Notice | O2V Framework",
      description:
        "Copyright, citation format, permission statement, rights boundary, reference methodologies statement, trademark notice, and legal disclaimer for O2V Framework.",
      alternates: localizedAlternates("en", "copyright")
    },
    title: "Copyright, Citation and Legal Notice",
    sections: [
      { heading: "Copyright holder", body: ["Copyright © Li Zhi. All rights reserved."] },
      {
        heading: "Citation format",
        body: ["Source: Li Zhi, O2V Framework: Opportunity-to-Value Framework, Official Public Release 20260520."]
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
          "O2V Framework and Opportunity-to-Value Framework are used as identifiers for this publication site and framework release.",
          "Opportunity2Venture is retained as a historical / legacy alias and backup domain.",
          "Opportunity-to-Venture Framework is retained only as historical release wording and venture-context wording."
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
      description:
        "O2V Framework 的版权、引用格式、授权说明、权利边界、参考方法声明、商标说明与法律免责声明。",
      alternates: localizedAlternates("zh", "copyright")
    },
    title: "版权、引用与法律声明",
    sections: [
      { heading: "版权所有人", body: ["版权所有人：李智 / Li Zhi。保留所有权利。"] },
      {
        heading: "引用格式",
        body: [
          "来源：李智，O2V Framework：Opportunity-to-Value Framework，从机会信号到可验证价值的机会判断与价值实现框架，官方公开发布版 20260520。"
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
          "O2V Framework 和 Opportunity-to-Value Framework 在本站中作为本框架发布与官方网站识别名称使用。",
          "Opportunity2Venture 作为 historical / legacy alias 和备用域名保留。",
          "Opportunity-to-Venture Framework 仅作为历史发布措辞和创业语境措辞保留。"
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
      title: "Urheberrecht, Zitierung und rechtlicher Hinweis | O2V Framework",
      description:
        "Urheberrecht, Zitierformat, Genehmigung, Rechteabgrenzung, Referenzmethoden, Markenhinweis und rechtlicher Disclaimer für das O2V Framework.",
      alternates: localizedAlternates("de", "copyright")
    },
    title: "Urheberrecht, Zitierung und rechtlicher Hinweis",
    sections: [
      { heading: "Copyright holder", body: ["Copyright © Li Zhi. All rights reserved."] },
      {
        heading: "Citation format",
        body: ["Source: Li Zhi, O2V Framework: Opportunity-to-Value Framework, Official Public Release 20260520."]
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
          "O2V Framework und Opportunity-to-Value Framework werden als Kennzeichen für diese Veröffentlichungsseite und Framework-Version verwendet.",
          "Opportunity2Venture bleibt als historical / legacy alias und Backup-Domain erhalten.",
          "Opportunity-to-Venture Framework bleibt nur als historische Release-Sprache und Venture-Kontext-Wording erhalten."
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
        "About Li Zhi, creator of O2V Framework, digital value realization expert, methodologist, enterprise architect, and former management consultant at a world-renowned consulting firm with over 15 years of experience in digital transformation, product governance, enterprise architecture, and AI-enabled innovation.",
      alternates: localizedAlternates("en", "about")
    },
    title: "About Li Zhi",
    subtitle: "Digital Value Realization Expert | Methodologist | Enterprise Architect",
    body: [
      [
        { text: "Li Zhi", strong: true },
        { text: " is the creator of " },
        { text: "O2V Framework — Opportunity-to-Value Framework", strong: true },
        { text: ", an AI-era opportunity judgment and value realization framework." }
      ],
      [
        { text: "Zhi holds a " },
        { text: "Diplom-Informatiker degree from the Technical University of Berlin", strong: true },
        { text: " and has over 15 years of experience in digital transformation, management consulting, enterprise architecture, product innovation, portfolio governance, and " },
        { text: "digital value realization", strong: true },
        { text: "." }
      ],
      [
        { text: "Before creating O2V Framework, Zhi built his career as a " },
        { text: "management consultant and digital transformation expert", strong: true },
        { text: " at a " },
        { text: "world-renowned consulting firm", strong: true },
        { text: ", supporting large-scale enterprise transformation programs for multinational and leading domestic organizations." }
      ],
      [
        { text: "He has served " },
        { text: "Fortune 500 companies", strong: true },
        { text: " and large enterprise groups across high-tech, financial services, life sciences, consumer goods, energy, and other industries. His work spans digital strategy, enterprise agility, product governance, business case design, portfolio management, stakeholder alignment, and AI-enabled innovation." }
      ],
      [
        { text: "O2V Framework", strong: true },
        { text: " reflects Zhi's long-term professional focus: helping organizations and innovators move from scattered signals and ideas to " },
        { text: "structured, validated, value-generating, investable, and asset-ready opportunities", strong: true },
        { text: "." }
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
    contacts: {
      linkedin: "LinkedIn",
      email: "Email",
      wechat: "WeChat"
    }
  },
  zh: {
    metadata: {
      title: "关于李智｜O2V Framework",
      description:
        "李智是 O2V Framework 的创建者，数字化价值实现专家、方法论构建者、企业架构师，曾任职于世界知名咨询公司，拥有超过 15 年数字化转型、产品治理、企业架构和 AI 赋能创新经验。",
      alternates: localizedAlternates("zh", "about")
    },
    title: "关于李智",
    subtitle: "数字化价值实现专家｜方法论构建者｜企业架构师",
    body: [
      [
        { text: "李智", strong: true },
        { text: "是" },
        { text: "O2V Framework — Opportunity-to-Value Framework", strong: true },
        { text: " 的创建者。O2V Framework 是一套面向 AI 时代的机会判断与价值实现框架，用于将外部机会信号转化为可验证、可执行、可经营、可投入、可资产化的价值机会。" }
      ],
      [
        { text: "李智毕业于" },
        { text: "柏林工业大学", strong: true },
        { text: "，获" },
        { text: "信息学硕士", strong: true },
        { text: "学位，拥有超过 15 年数字化转型、管理咨询、企业架构、数字化产品创新、投资组合治理、产品治理和" },
        { text: "数字化价值实现", strong: true },
        { text: "经验。" }
      ],
      [
        { text: "在创建 O2V Framework 之前，李智曾任职于" },
        { text: "世界知名咨询公司", strong: true },
        { text: "，作为管理咨询专家、数字化转型及数字化价值实现专家，参与并推动多个大型企业转型项目，服务跨国企业及国内外大型集团化企业。" }
      ],
      [
        { text: "过去多年中，李智服务过" },
        { text: "全球财富 500 强企业", strong: true },
        { text: "及大型企业集团，覆盖高科技、金融、生命科学、快消、能源等多个行业。他的工作领域包括数字化战略、企业敏捷、产品治理、Business Case 设计、投资组合管理、利益相关方协同，以及 AI 赋能的业务创新。" }
      ],
      [
        { text: "O2V Framework", strong: true },
        { text: " 是李智长期专业积累的一次系统化表达：帮助组织和创新者，从分散的市场信号、业务想法和技术机会出发，形成" },
        { text: "可验证、可执行、可经营、可投入、可资产化的价值机会", strong: true },
        { text: "。" }
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
    contacts: {
      linkedin: "LinkedIn",
      email: "Email",
      wechat: "WeChat"
    }
  },
  de: {
    metadata: {
      title: "Über Li Zhi | O2V Framework",
      description:
        "Über Li Zhi, Entwickler des O2V Frameworks, Digital Value Realization Expert, Methodologist, Enterprise Architect und ehemaliger Management Consultant bei einem weltweit renommierten Beratungsunternehmen mit über 15 Jahren Erfahrung.",
      alternates: localizedAlternates("de", "about")
    },
    title: "Über Li Zhi",
    subtitle: "Digital Value Realization Expert | Methodologist | Enterprise Architect",
    body: [
      [
        { text: "Li Zhi", strong: true },
        { text: " ist der Entwickler des " },
        { text: "O2V Framework — Opportunity-to-Value Framework", strong: true },
        { text: ", eines Frameworks für Chancenbewertung und Wertrealisierung im KI-Zeitalter." }
      ],
      [
        { text: "Zhi besitzt einen " },
        { text: "Diplom-Informatiker-Abschluss der Technischen Universität Berlin", strong: true },
        { text: " und verfügt über mehr als 15 Jahre Erfahrung in digitaler Transformation, Management Consulting, Enterprise Architecture, digitaler Produktinnovation, Portfolio Governance und " },
        { text: "Digital Value Realization", strong: true },
        { text: "." }
      ],
      [
        { text: "Vor der Entwicklung des O2V Frameworks baute Zhi seine berufliche Laufbahn als " },
        { text: "Management Consultant und Experte für digitale Transformation", strong: true },
        { text: " bei einem " },
        { text: "weltweit renommierten Beratungsunternehmen", strong: true },
        { text: " auf. Dort unterstützte er groß angelegte Transformationsprogramme für multinationale Unternehmen und führende Unternehmensgruppen." }
      ],
      [
        { text: "Im Laufe seiner Karriere hat Zhi " },
        { text: "Fortune-500-Unternehmen", strong: true },
        { text: " sowie große internationale und chinesische Unternehmensgruppen beraten. Seine Projekterfahrung umfasst Hightech, Finanzdienstleistungen, Life Sciences, Konsumgüter, Energie und weitere Industrien." }
      ],
      [
        { text: "Das " },
        { text: "O2V Framework", strong: true },
        { text: " spiegelt den langfristigen professionellen Fokus von Zhi wider: Organisationen und Innovatoren dabei zu helfen, aus verstreuten Signalen und Ideen strukturierte, validierte, wertschaffende, investierbare und " },
        { text: "assetfähige Chancen", strong: true },
        { text: " zu entwickeln." }
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
    contacts: {
      linkedin: "LinkedIn",
      email: "Email",
      wechat: "WeChat"
    }
  }
};

export function creativeWorkJsonLd(locale: Locale) {
  const url = `${siteUrl}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "O2V Framework",
    alternateName: ["Opportunity-to-Value Framework", "O2V", "Opportunity-to-Venture Framework"],
    description: homeContent[locale].jsonLdDescription,
    version: "20260520",
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
      "AI-era opportunity judgment framework",
      "value realization framework",
      "business case validation",
      "compliance gate",
      "value asset",
      "value story",
      "Opportunity-to-Venture Framework historical alias"
    ],
    url
  };
}
