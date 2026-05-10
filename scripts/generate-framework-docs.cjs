const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, ".tmp-docgen");
fs.mkdirSync(outDir, { recursive: true });

const common = {
  chain: "Signal → Scenario → Persona → Pain → Product → Validation → Business Case → Asset → Financing Story",
  validation: "Benefits Hypothesis → MVP → Leading Indicators → Financial Metrics → Verification Plan",
  deliverablesEn: [
    "Opportunity Signal List",
    "Opportunity Card",
    "O2V Score",
    "Compliance Risk Level",
    "Business Case",
    "Validation Plan",
    "Assetization Path",
    "Financing Story"
  ],
  businessCase: [
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
  ],
  principlesEn: [
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
  ],
  dimensions: [
    ["Demand Strength", "15", "Is the demand frequent, painful, or valuable?"],
    ["Scenario Fit", "15", "Does it fit the target scenario and market?"],
    ["Willingness to Pay", "15", "Is there a clear payment motivation?"],
    ["AI Leverage", "12", "Does AI significantly improve efficiency, quality, or experience?"],
    ["MVP Feasibility", "10", "Can it be validated at low cost?"],
    ["Acquisition Feasibility", "10", "Is there a clear acquisition path?"],
    ["Differentiation Space", "8", "Can it avoid pure commodity competition?"],
    ["Assetization Potential", "10", "Can it build long-term assets?"],
    ["Founder Fit", "5", "Does it match founder capability, resources, and direction?"]
  ],
  risks: [
    ["Level 0: Low Risk", "0 to -5", "Normal tool or service, no sensitive data or heavy regulation."],
    ["Level 1: Controllable Risk", "-5 to -15", "Light data, content, copyright, or platform rule risk."],
    ["Level 2: Medium-High Risk", "-15 to -30", "Sensitive data, scraping, financial, medical, legal, or minor-related risk."],
    ["Level 3: Major Risk", "-30 to -50", "Business model depends on high-risk data, regulatory boundaries, or platform grey areas."],
    ["Level 4: Red-Line Risk", "Eliminate", "Clearly illegal, grey or black industry, illegal finance, medical diagnosis, privacy trading, or illegal scraping."]
  ]
};

const docs = {
  en: {
    htmlLang: "en",
    file: "o2v-framework-20260510-en",
    meta: "OFFICIAL PUBLIC RELEASE 20260510 | INTERNAL VERSION V1.4",
    title: "O2V Framework 20260510",
    subtitle: "Opportunity-to-Venture Framework",
    descriptor: "A Front-End Opportunity Judgment Framework for the AI Era",
    tagline: "From Signal to Venture. From Idea to Asset.",
    release: "Official Public Release 20260510",
    internal: "Internal Version: v1.4",
    copyright: "Copyright © Li Zhi. All rights reserved.",
    contents: "Contents",
    sections: [
      ["One-Sentence Definition", [
        "O2V Framework is a front-end opportunity judgment framework for the AI era, designed to convert external opportunity signals into verifiable, executable, manageable, investable, and asset-ready venture opportunities.",
        "In short: From Signal to Venture. From Idea to Asset."
      ]],
      ["Founding Statement", [
        "O2V Framework is a front-end opportunity judgment framework for the AI era.",
        "It was created to answer a simple but critical question: When opportunities are everywhere, how do we know which ones are worth building?",
        "In the AI era, ideas are no longer scarce. Signals are everywhere. Products can be prototyped faster than ever. Content can be generated instantly. Almost every trend can be turned into a startup story.",
        "But speed does not remove uncertainty. More ideas do not mean better opportunities. A working demo does not prove real demand. User interest does not always become willingness to pay. Growth without compliance boundaries can become a hidden liability. A business that earns short-term income may still fail to become a long-term asset.",
        "O2V Framework was designed to bring discipline to the earliest stage of venture creation. It helps entrepreneurs, innovators, consultants, and early-stage investors move from scattered market signals to structured opportunity judgment."
      ], ["It asks whether an opportunity has a real scenario, a clear persona, a strong pain, a viable MVP, measurable leading indicators, a credible Business Case, a controllable compliance boundary, an assetization path, and a financing story supported by evidence."]],
      ["Positioning Statement", [
        "O2V Framework is not an attempt to invent a completely new theory from scratch. Nor is it a copy, replacement, or upgraded version of any single existing methodology.",
        "O2V Framework is a structured integration and recomposition of mature methodologies and practices from entrepreneurship validation, product discovery, user research, business case design, investment screening, risk governance, MVP validation, leading indicator design, assetization thinking, and financing narrative assessment.",
        "The independent value of O2V lies in organizing mature practices into a continuous judgment chain: Signal → Business Case → Venture Asset."
      ]],
      ["Why the AI Era Needs O2V", [
        "AI lowers the cost of generating ideas, creating prototypes, producing content, and building first versions of products. It does not automatically improve the quality of opportunity judgment.",
        "O2V addresses early-stage misjudgment by asking teams to prove scenario, persona, pain, validation evidence, financial logic, compliance boundary, asset potential, and financing readability before major time, capital, and execution are committed."
      ]],
      ["Applicable Scenarios", [], [
        "Early-stage startup idea assessment",
        "Side business and second-curve opportunity assessment",
        "Corporate innovation opportunity screening",
        "Product opportunity discovery",
        "University entrepreneurship project development",
        "Early-stage investment pre-screening",
        "Overseas product localization opportunity analysis",
        "AI application scenario assessment",
        "Consulting-led innovation opportunity discovery"
      ]],
      ["The 9-Step Judgment Chain", [
        common.chain
      ], [
        "Signal: Opportunity Signal Capture",
        "Scenario: Scenario Recomposition",
        "Persona: Target User Persona",
        "Pain: Real Pain and Willingness to Pay",
        "Product: Minimum Product Definition",
        "Validation: Validation Design",
        "Business Case: Verifiable Business Case",
        "Asset: Assetization Path",
        "Financing Story: Financing Narrative Assessment"
      ]],
      ["Step Details", [
        "Signal captures opportunity signals before judging them. Scenario tests whether the signal can exist in a real use context. Persona clarifies who uses, pays, decides, recommends, and repeats demand.",
        "Pain tests whether the problem is frequent, intense, valuable, and connected to willingness to pay. Product defines the minimum way to validate the most critical assumption. Validation turns the MVP into measurable evidence.",
        "Business Case integrates value hypothesis, MVP, leading indicators, financial metrics, and verification plan. Asset identifies whether the opportunity can build long-term user, data, content, methodology, product, channel, brand, ecosystem, or rights assets. Financing Story evaluates whether the opportunity has capital readability and what evidence must be proven before the next financing milestone."
      ]],
      ["O2V Scoring Model", [
        "Base Opportunity Score: maximum 100 points.",
        "Compliance Risk Adjustment: up to -50 points.",
        "Red-line risks: immediate elimination.",
        "Formula: O2V Score = Base Opportunity Score - Compliance Risk Deduction"
      ], [], "scoreTable"],
      ["Compliance Risk Gate", [
        "O2V treats compliance risk not as a minor scoring item, but as a gate that determines whether an opportunity can enter validation, financing narrative, and scaling.",
        "Compliance risk is not a minor deduction. It is a gate."
      ], [], "riskTable"],
      ["Business Case Template", [
        "The O2V Business Case includes 16 modules in the following order:"
      ], common.businessCase.map((item, index) => `${index + 1}. ${item}`).concat([
        `Core validation chain: ${common.validation}`,
        "Leading indicators exist to judge whether the MVP is validating the value hypothesis."
      ])],
      ["Core Principles", [], common.principlesEn.map((item, index) => `${index + 1}. ${item}`)],
      ["Framework Deliverables", [
        "Framework Deliverables define the stable outputs of the O2V Framework."
      ], common.deliverablesEn.map((item, index) => `${index + 1}. ${item}`)],
      ["Copyright, Citation, and Legal Notice", [
        "Copyright Holder: Li Zhi. Copyright © Li Zhi. All rights reserved.",
        "O2V Framework, including its name, definition, 9-step judgment chain, Business Case template, scoring model, compliance risk gate, validation chain, assetization path, financing story structure, case expressions, course materials, diagrams, templates, documents, articles, and derivative expressions, is a framework asset created by Li Zhi through recomposing, structuring, and independently expressing proven methodologies and practices.",
        "Any citation, reproduction, adaptation, translation, training use, consulting delivery, commercial use, productization, model training, or substantial reuse of O2V Framework requires prior explicit permission from Li Zhi and must clearly indicate the source.",
        "Citation format: Source: Li Zhi, O2V Framework: Opportunity-to-Venture Framework, Official Public Release 20260510.",
        "O2V Framework does not claim exclusive rights over general concepts such as MVP, persona, business model, leading indicators, risk assessment, or business case.",
        "O2V Framework is not affiliated with, endorsed by, certified by, or officially connected with Lean Startup, Design Thinking, Jobs to Be Done, Business Model Canvas, Value Proposition Canvas, Stage-Gate, or any referenced methodology or organization.",
        "O2V Framework does not constitute legal, financial, medical, investment, financing, tax, or regulatory advice."
      ]],
      ["Version Note", [
        "Public Release Version: O2V Framework 20260510.",
        "Internal Version: v1.4.",
        "Release Type: Official Public Release 20260510.",
        "This PDF is the complete official public release of O2V Framework 20260510. The website provides an Official Web Overview for quick reading and online reference."
      ]]
    ]
  },
  zh: {
    htmlLang: "zh-CN",
    file: "o2v-framework-20260510-zh",
    meta: "官方公开发布版 20260510 | 内部版本 V1.4",
    title: "O2V Framework 20260510",
    subtitle: "Opportunity-to-Venture Framework",
    descriptor: "从机会信号到创业资产的前端机会判断框架",
    tagline: "从机会信号到创业资产。",
    release: "官方公开发布版 20260510",
    internal: "内部版本：v1.4",
    copyright: "版权所有人：李智 / Li Zhi",
    contents: "目录",
    sections: [
      ["一句话定义", ["O2V Framework 是一套面向 AI 时代的前端机会判断框架，用于将外部机会信号转化为可验证、可执行、可经营、可融资、可资产化的创业机会。", "一句话表达：从机会信号到创业资产。"]],
      ["创始声明", ["O2V Framework 是一套面向 AI 时代的前端机会判断框架。", "它试图回答一个简单但关键的问题：当机会看起来无处不在时，我们如何判断哪些机会真正值得投入？", "在 AI 时代，点子不再稀缺，信号到处都是，产品原型可以被更快做出来，内容可以被瞬间生成，几乎每一个趋势都可以被包装成一个创业故事。", "但速度并不会自动消除不确定性。更多点子不等于更好机会。一个能运行的 Demo 不等于真实需求成立。用户感兴趣不等于愿意付费。没有合规边界的增长可能变成隐藏负债。一个能赚短期收入的生意，也未必能沉淀为长期资产。", "O2V Framework 的目的，是为创业机会的最前端判断建立一套纪律。它帮助创业者、创新团队、咨询顾问和早期投资相关方，从分散的市场信号出发，形成结构化的机会判断。"]],
      ["方法定位", ["O2V Framework 并不是凭空发明一套全新理论，也不是对某一种既有方法的复制、替代或升级。", "更准确地说，O2V Framework 是对创业验证、产品发现、用户研究、Business Case 设计、投资筛选、风险治理、MVP 验证、领先指标设计、资产化思维和融资叙事评估等成熟方法论与实践的结构化整合与重新编排。", "O2V 的独立价值不在于主张对通用概念本身的所有权，而在于将成熟实践组织成一条连续判断链：机会信号 → Business Case → 创业资产。"]],
      ["为什么 AI 时代需要 O2V", ["AI 降低了生成点子、制作原型、生产内容和构建产品早期版本的成本，但它不会自动提高机会判断质量。", "O2V 通过场景、用户、痛点、验证证据、财务逻辑、合规边界、资产潜力和融资可读性，帮助团队在投入大量时间、资本和执行之前降低早期误判。"]],
      ["适用场景", [], ["早期创业想法评估", "副业与第二曲线机会评估", "企业创新机会筛选", "产品机会发现", "高校创业项目孵化", "早期投资预筛选", "海外产品本地化机会分析", "AI 应用场景评估", "咨询驱动的创新机会发现"]],
      ["O2V 九步判断链路", [common.chain, "中文解释：机会信号 → 场景重构 → 目标用户画像 → 真实痛点与付费动机 → 最小产品定义 → 验证设计 → 完整商业案例 → 资产化路径设计 → 融资叙事预判"]],
      ["九步法说明", ["Signal 捕捉机会信号，不急于做判断。Scenario 判断信号是否能落入真实使用场景。Persona 明确谁使用、谁付费、谁决策、谁推荐、谁会反复需要。", "Pain 判断问题是否高频、高强度、高价值，并与付费动机相连。Product 定义验证最关键假设的最小方式。Validation 把 MVP 转化为可衡量证据。", "Business Case 整合价值收益假设、MVP、领先指标、财务指标和验证计划。Asset 判断机会是否能沉淀用户、数据、内容、方法论、产品、渠道、品牌、生态或长期权利资产。Financing Story 判断机会是否具备融资可读性，以及下一阶段融资前必须证明的证据。"]],
      ["O2V 评分模型", ["基础机会分：100 分。", "合规风险调整项：最高扣 50 分。", "红线风险：直接淘汰。", "公式：O2V Score = Base Opportunity Score - Compliance Risk Deduction"], [], "scoreTable"],
      ["合规风险闸门", ["O2V 将合规风险视为决定机会能否进入验证、融资叙事和规模化的闸门，而不是普通扣分项。", "合规风险不是普通扣分项，而是闸门。"], [], "riskTable"],
      ["Business Case 模板", ["O2V Business Case 包含以下 16 个模块，顺序不能打乱："], common.businessCase.map((item, index) => `${index + 1}. ${item}`).concat([`核心验证链条：价值收益假设 → MVP → 领先验证指标 → 财务验证指标 → 验证计划`, "领先指标用于判断 MVP 是否正在验证价值假设。"])],
      ["核心原则", [], ["1. O2V 不是凭空发明的理论，而是面向 AI 时代对成熟实践的结构化重组。", "2. 机会可以始于信号，但必须通过场景、用户、痛点和证据被证明。", "3. 没有清晰用户和强痛点，就没有真正的机会。", "4. MVP 不是最小产品，而是验证最关键假设的最小方式。", "5. 领先指标必须在 MVP 之后定义，因为它们的作用是判断 MVP 是否正在验证价值假设。", "6. Business Case 不是展示材料，而是说明一个机会为何值得投入资源的结构化论证。", "7. 短期收入证明需求，长期资产决定天花板。", "8. 融资叙事必须由验证数据支撑，而不能只靠愿景。", "9. 合规风险不是普通扣分项，而是决定机会能否继续推进的闸门。", "10. O2V 的存在，是为了在投入时间、资本和执行之前，降低早期机会误判。"]],
      ["Framework Deliverables / 框架交付物", ["框架交付物定义 O2V Framework 的稳定输出物。"], ["1. Opportunity Signal List｜机会信号清单", "2. Opportunity Card｜机会卡片", "3. O2V Score｜O2V 评分", "4. Compliance Risk Level｜合规风险等级", "5. Business Case｜商业案例", "6. Validation Plan｜验证计划", "7. Assetization Path｜资产化路径", "8. Financing Story｜融资叙事框架"]],
      ["版权、引用与法律声明", ["版权所有人：李智 / Li Zhi。Copyright © Li Zhi. All rights reserved.", "O2V Framework，包括其名称、定义、九步判断链路、Business Case 模板、评分模型、合规风险闸门、验证链条、资产化路径、融资叙事结构、案例表达、课程材料、图表、模板、文档、文章及其他衍生表达形式，均为版权所有人李智基于成熟方法论与实践重新编排、结构化整理和独立表达形成的框架资产。", "任何单位或个人如需引用、转载、改编、摘编、翻译、培训使用、咨询交付、商业使用、产品化、模型训练或实质性复用 O2V Framework，应事先征得李智明确同意，并在显著位置标明出处。", "中文引用格式：来源：李智，O2V Framework：Opportunity-to-Venture Framework，从机会信号到创业资产的前端机会判断框架，官方公开发布版 20260510。", "英文引用格式：Source: Li Zhi, O2V Framework: Opportunity-to-Venture Framework, Official Public Release 20260510.", "O2V Framework 不主张对 MVP、用户画像、商业模式、领先指标、风险评估、商业案例等通用概念本身享有排他性权利。", "O2V Framework 与 Lean Startup、Design Thinking、Jobs to Be Done、Business Model Canvas、Value Proposition Canvas、Stage-Gate 或任何被参考的方法论或组织均不存在从属、背书、认证或官方连接关系。", "O2V Framework 不构成法律、财务、医疗、投资、融资、税务或监管建议。"]],
      ["版本说明", ["公开发布版本：O2V Framework 20260510。", "内部版本：v1.4。", "版本类型：官方公开发布版 20260510。", "本 PDF 是 O2V Framework 20260510 的完整官方公开发布版。官网页面提供官方网页概览版，用于快速阅读和在线引用。"]]
    ]
  },
  de: {
    htmlLang: "de",
    file: "o2v-framework-20260510-de",
    meta: "OFFIZIELLE ÖFFENTLICHE VERÖFFENTLICHUNG 20260510 | INTERNE VERSION V1.4",
    title: "O2V Framework 20260510",
    subtitle: "Opportunity-to-Venture Framework",
    descriptor: "Ein Front-End-Framework zur Chancenbewertung im KI-Zeitalter",
    tagline: "Vom Signal zum Venture. Von der Idee zum Asset.",
    release: "Offizielle öffentliche Veröffentlichung 20260510",
    internal: "Interne Version: v1.4",
    copyright: "Copyright © Li Zhi. All rights reserved.",
    contents: "Inhalt",
    sections: [
      ["Definition in einem Satz", ["Das O2V Framework ist ein Front-End-Framework zur Chancenbewertung im KI-Zeitalter. Es dient dazu, externe Chancensignale systematisch in überprüfbare, umsetzbare, steuerbare, investierbare und assetfähige Venture-Chancen zu überführen.", "Kurz gesagt: Vom Signal zum Venture. Von der Idee zum Asset."]],
      ["Gründungserklärung", ["Das O2V Framework ist ein Front-End-Framework zur Chancenbewertung im KI-Zeitalter.", "Es wurde entwickelt, um eine einfache, aber entscheidende Frage zu beantworten: Wenn Chancen überall sichtbar sind, woran erkennen wir, welche davon wirklich den Aufbau wert sind?", "Im KI-Zeitalter sind Ideen nicht mehr knapp. Signale sind überall. Produktprototypen können schneller erstellt werden als je zuvor. Inhalte können sofort generiert werden. Fast jeder Trend kann in eine Startup-Geschichte verwandelt werden.", "Doch Geschwindigkeit beseitigt keine Unsicherheit. Mehr Ideen bedeuten nicht automatisch bessere Chancen. Ein funktionierender Demo-Prototyp beweist noch keine echte Nachfrage. Nutzerinteresse führt nicht immer zu Zahlungsbereitschaft. Wachstum ohne Compliance-Grenzen kann zu einer versteckten Verbindlichkeit werden. Ein Geschäft mit kurzfristigen Einnahmen wird nicht automatisch zu einem langfristigen Asset.", "Das O2V Framework bringt Disziplin in die früheste Phase der Venture-Entstehung. Es hilft Unternehmern, Innovationsteams, Beratern und Early-Stage-Investoren, aus verstreuten Marktsignalen eine strukturierte Chancenbewertung abzuleiten."]],
      ["Positionierung", ["Das O2V Framework ist nicht der Versuch, eine völlig neue Theorie aus dem Nichts zu erfinden. Es ist auch keine Kopie, kein Ersatz und keine aktualisierte Version einer einzelnen bestehenden Methode.", "Es ist eine strukturierte Integration und Rekombination reifer Methoden und Praktiken aus Entrepreneurship Validation, Product Discovery, User Research, Business-Case-Design, Investment Screening, Risk Governance, MVP Validation, Leading Indicator Design, Assetisierung und Financing Narrative Assessment.", "Der eigenständige Wert von O2V liegt darin, reife Praktiken in eine kontinuierliche Bewertungskette zu bringen: Signal → Business Case → Venture Asset."]],
      ["Warum das KI-Zeitalter O2V braucht", ["KI senkt die Kosten für Ideen, Prototypen, Inhalte und erste Produktversionen. Sie verbessert aber nicht automatisch die Qualität der Chancenbewertung.", "O2V reduziert frühe Fehlbewertungen, indem Szenario, Persona, Pain Point, Validierungsevidenz, finanzielle Logik, Compliance-Grenze, Asset-Potenzial und Finanzierungslesbarkeit geprüft werden, bevor erhebliche Zeit, Kapital und Umsetzung gebunden werden."]],
      ["Anwendungsbereiche", [], ["Bewertung früher Startup-Ideen", "Bewertung von Side-Business- und Second-Curve-Chancen", "Screening von Corporate-Innovation-Chancen", "Product Opportunity Discovery", "Entwicklung universitärer Entrepreneurship-Projekte", "Pre-Screening früher Investments", "Analyse von Lokalisierungschancen für internationale Produkte", "Bewertung von KI-Anwendungsszenarien", "Consulting-led Innovation Opportunity Discovery"]],
      ["Die 9-stufige Bewertungskette", [common.chain], ["Signal: Opportunity Signal Capture", "Scenario: Scenario Recomposition", "Persona: Target User Persona", "Pain: Real Pain and Willingness to Pay", "Product: Minimum Product Definition", "Validation: Validation Design", "Business Case: Verifiable Business Case", "Asset: Assetization Path", "Financing Story: Financing Narrative Assessment"]],
      ["Erläuterung der Schritte", ["Signal erfasst Chancensignale, bevor sie bewertet werden. Scenario prüft, ob ein Signal in einem realen Nutzungskontext bestehen kann. Persona klärt, wer nutzt, zahlt, entscheidet, empfiehlt und wiederkehrenden Bedarf hat.", "Pain prüft, ob das Problem häufig, intensiv, wertvoll und mit Zahlungsbereitschaft verbunden ist. Product definiert den kleinsten Weg, die kritischste Annahme zu validieren. Validation macht aus dem MVP messbare Evidenz.", "Business Case integriert Benefits Hypothesis, MVP, Leading Indicators, Financial Metrics und Verification Plan. Asset bewertet, ob die Chance langfristige User-, Daten-, Content-, Methodology-, Product-, Channel-, Brand-, Ecosystem- oder Rights-Assets aufbauen kann. Financing Story bewertet Kapitalverständlichkeit und die Evidenz, die vor dem nächsten Finanzierungsschritt erforderlich ist."]],
      ["O2V Scoring Model", ["Base Opportunity Score: maximal 100 Punkte.", "Compliance Risk Adjustment: bis zu -50 Punkte.", "Red-Line-Risiken: sofortige Eliminierung.", "Formel: O2V Score = Base Opportunity Score - Compliance Risk Deduction"], [], "scoreTable"],
      ["Compliance Risk Gate", ["O2V behandelt Compliance-Risiko nicht als kleinen Scoring-Abzug, sondern als Gate, das bestimmt, ob eine Chance in Validierung, Finanzierungserzählung und Skalierung eintreten kann.", "Compliance-Risiko ist kein kleiner Abzug. Es ist ein Gate."], [], "riskTable"],
      ["Business Case Template", ["Der O2V Business Case umfasst 16 Module in der folgenden Reihenfolge:"], common.businessCase.map((item, index) => `${index + 1}. ${item}`).concat([`Core validation chain: ${common.validation}`, "Leading Indicators beurteilen, ob das MVP die Value Hypothesis validiert."])],
      ["Core Principles", [], common.principlesEn.map((item, index) => `${index + 1}. ${item}`)],
      ["Framework Deliverables", ["Framework Deliverables definieren die stabilen Outputs des O2V Framework."], common.deliverablesEn.map((item, index) => `${index + 1}. ${item}`)],
      ["Urheberrecht, Zitierung und rechtlicher Hinweis", ["Urheberrechtsinhaber: Li Zhi. Copyright © Li Zhi. All rights reserved.", "Das O2V Framework, einschließlich seines Namens, seiner Definition, der 9-stufigen Bewertungskette, des Business Case Templates, des Scoring Models, des Compliance Risk Gates, der Validierungskette, des Assetisierungspfads, der Financing Story Structure, der Fallformulierungen, Kursmaterialien, Diagramme, Templates, Dokumente, Artikel und abgeleiteten Ausdrucksformen, ist ein Framework-Asset, das von Li Zhi durch Rekombination, Strukturierung und eigenständige Ausdrucksform bewährter Methoden und Praktiken geschaffen wurde.", "Jede Zitierung, Reproduktion, Anpassung, Übersetzung, Nutzung in Trainings, Beratungsleistungen, kommerzielle Nutzung, Produktisierung, Nutzung für Modelltraining oder substanzielle Wiederverwendung des O2V Frameworks bedarf der vorherigen ausdrücklichen Zustimmung von Li Zhi und muss die Quelle deutlich angeben.", "Zitierformat: Source: Li Zhi, O2V Framework: Opportunity-to-Venture Framework, Official Public Release 20260510.", "Das O2V Framework erhebt keinen exklusiven Anspruch auf allgemeine Konzepte wie MVP, Persona, Business Model, Leading Indicators, Risk Assessment oder Business Case.", "Das O2V Framework ist nicht mit Lean Startup, Design Thinking, Jobs to Be Done, Business Model Canvas, Value Proposition Canvas, Stage-Gate oder einer referenzierten Methodology oder Organisation verbunden, von diesen unterstützt, zertifiziert oder offiziell angeschlossen.", "Das O2V Framework stellt keine rechtliche, finanzielle, medizinische, Investment-, Finanzierungs-, Steuer- oder Regulierungsberatung dar."]],
      ["Versionshinweis", ["Öffentliche Version: O2V Framework 20260510.", "Interne Version: v1.4.", "Veröffentlichungstyp: Offizielle öffentliche Veröffentlichung 20260510.", "Dieses PDF ist die vollständige offizielle Veröffentlichung des O2V Framework 20260510. Die Website bietet einen offiziellen Web-Überblick für schnelle Lektüre und Online-Referenz."]]
    ]
  }
};

function esc(value) {
  return String(value).replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]));
}

const highlightTerms = [
  "asset-ready venture opportunities",
  "9-step judgment chain",
  "Business Case validation chain",
  "Compliance Risk Gate",
  "Framework Deliverables",
  "complete official public release",
  "Leading indicators exist to judge whether the MVP is validating the value hypothesis",
  "九步判断链路",
  "核心验证链条",
  "合规风险闸门",
  "框架交付物",
  "完整官方公开发布版",
  "领先指标用于判断 MVP 是否正在验证价值假设",
  "9-stufige Bewertungskette",
  "Business-Case-Validierungskette",
  "vollständige offizielle Veröffentlichung"
];

function renderInline(value) {
  let text = esc(value);
  for (const term of highlightTerms) {
    const escaped = esc(term);
    text = text.split(escaped).join(`<strong>${escaped}</strong>`);
  }
  return text;
}

function table(headers, rows) {
  return `<table><thead><tr>${headers.map((h) => `<th>${renderInline(h)}</th>`).join("")}</tr></thead><tbody>${rows
    .map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`)
    .join("")}</tbody></table>`;
}

function renderSection(section, index) {
  const [heading, paragraphs = [], bullets = [], special] = section;
  let html = `<section><h2>${index + 1}. ${esc(heading)}</h2>`;
  for (const paragraph of paragraphs) html += `<p>${renderInline(paragraph)}</p>`;
  if (special === "scoreTable") {
    html += table(["Dimension", "Score", "Core Question"], common.dimensions);
  }
  if (special === "riskTable") {
    html += table(["Level", "Deduction", "Meaning"], common.risks);
  }
  if (bullets.length) {
    let listOpen = false;
    const closeList = () => {
      if (listOpen) {
        html += "</ul>";
        listOpen = false;
      }
    };

    for (const item of bullets) {
      if (/^\d+\.\s/.test(item)) {
        closeList();
        html += `<p class="numbered-line">${renderInline(item)}</p>`;
      } else if (/^(Core validation chain|核心验证链条|Leading indicators|领先指标|Core validation chain:)/.test(item)) {
        closeList();
        html += `<p class="note-line">${renderInline(item)}</p>`;
      } else {
        if (!listOpen) {
          html += "<ul>";
          listOpen = true;
        }
        html += `<li>${renderInline(item)}</li>`;
      }
    }
    closeList();
  }
  html += "</section>";
  return html;
}

function build(doc) {
  const toc = doc.sections.map(([heading], index) => `<div class="toc-entry">${index + 1}. ${esc(heading)}</div>`).join("");
  const sections = doc.sections.map(renderSection).join("");
  return `<!doctype html>
<html lang="${doc.htmlLang}">
<head>
<meta charset="utf-8">
<title>${esc(doc.title)}</title>
<style>
@page { size: A4; margin: 24mm 21mm 22mm; }
body {
  margin: 0;
  color: #111;
  background: white;
  font-family: "Aptos", "Segoe UI", "Noto Sans", "Noto Sans CJK SC", "Microsoft YaHei", Arial, sans-serif;
  font-size: 10.5pt;
  line-height: 1.48;
}
.cover {
  min-height: 245mm;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.page-break {
  page-break-before: always;
  break-before: page;
  mso-page-break-before: always;
}
.eyebrow {
  font-size: 8pt;
  color: #666;
  letter-spacing: .08em;
  text-transform: uppercase;
  margin-bottom: 20mm;
}
h1 {
  font-size: 30pt;
  line-height: 1.08;
  margin: 0 0 8mm;
  font-weight: 760;
}
.subtitle {
  font-size: 14pt;
  line-height: 1.35;
  margin: 0 0 17mm;
}
.tagline {
  font-size: 16pt;
  font-weight: 700;
  margin: 0 0 20mm;
}
.meta {
  border-top: 1px solid #777;
  padding-top: 7mm;
  font-size: 9pt;
  color: #333;
}
.toc {
  page-break-after: always;
}
.toc h2 {
  border: none;
  margin-top: 0;
}
.toc-list {
  columns: 2;
  column-gap: 18mm;
}
.toc-entry {
  break-inside: avoid;
  margin-bottom: 4mm;
}
section {
  margin-bottom: 8mm;
}
h2 {
  font-size: 15.5pt;
  margin: 7mm 0 4mm;
  padding: 2mm 0 2.5mm;
  border-bottom: 1px solid #ddd;
  line-height: 1.25;
  page-break-after: avoid;
}
section:first-of-type h2 {
  margin-top: 0;
}
p {
  margin: 0 0 3mm;
}
.numbered-line {
  margin: 0 0 1.8mm;
}
.note-line {
  margin: 3mm 0 2.4mm;
}
ul {
  margin: 0 0 3.5mm 0;
  padding-left: 6mm;
}
li {
  margin: 0 0 1.8mm;
}
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  margin: 3mm 0 4mm;
  page-break-inside: avoid;
  font-size: 9pt;
}
th, td {
  border: 1px solid #cfcfcf;
  padding: 2.2mm;
  vertical-align: top;
}
th {
  background: #f2f2f2;
  font-weight: 700;
}
th:nth-child(1), td:nth-child(1) { width: 27%; }
th:nth-child(2), td:nth-child(2) { width: 15%; }
th:nth-child(3), td:nth-child(3) { width: 58%; }
</style>
</head>
<body>
<div class="cover">
  <div class="eyebrow">${esc(doc.meta)}</div>
  <h1>${esc(doc.title)}</h1>
  <p class="subtitle">${esc(doc.subtitle)}<br>${esc(doc.descriptor)}</p>
  <p class="tagline">${esc(doc.tagline)}</p>
  <div class="meta"><div>${esc(doc.release)}</div><div>${esc(doc.internal)}</div><div>${esc(doc.copyright)}</div></div>
</div>
<div class="page-break"></div>
<div class="toc"><h2>${esc(doc.contents)}</h2><div class="toc-list">${toc}</div></div>
<div class="page-break"></div>
${sections}
</body>
</html>`;
}

for (const doc of Object.values(docs)) {
  fs.writeFileSync(path.join(outDir, `${doc.file}.html`), build(doc), "utf8");
}

console.log(outDir);
