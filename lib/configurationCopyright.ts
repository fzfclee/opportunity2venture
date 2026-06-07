import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { localizedAlternates } from "@/lib/i18n";
import { internalVersion, releaseVersion, type Section } from "@/lib/content";

export type CopyrightScope = "enterprise" | "venture";

type ConfigurationCopyrightContent = {
  metadata: Metadata;
  title: string;
  subtitle: string;
  deck: string[];
  sections: Section[];
};

const releaseDeck: Record<Locale, string[]> = {
  en: ["Opportunity-to-Value Framework", `Official Public Release ${releaseVersion}`, `Internal Version: ${internalVersion}`],
  zh: ["Opportunity-to-Value Framework", `官方公开发布版 ${releaseVersion}`, `内部版本：${internalVersion}`],
  de: ["Opportunity-to-Value Framework", `Official Public Release ${releaseVersion}`, `Interne Version: ${internalVersion}`]
};

export function getConfigurationCopyrightContent(
  locale: Locale,
  scope: CopyrightScope
): ConfigurationCopyrightContent {
  const path = `${scope}/copyright`;

  if (locale === "zh") {
    const title = scope === "enterprise" ? "企业配置版权、引用与法律声明" : "创业配置版权、引用与法律声明";
    const subtitle =
      scope === "enterprise"
        ? "适用于 O2V Enterprise Configuration、AiNOVA 和 Valence。"
        : "适用于 O2V 创业配置及其创业语境方法实践。";
    const methodAssets =
      scope === "enterprise"
        ? "O2V Enterprise Configuration、AiNOVA、Valence、相关方法实践、文本、图示、品牌名称、引用语言和下载材料"
        : "O2V 创业配置、创业语境方法实践、文本、图示、品牌名称、引用语言和下载材料";

    return {
      metadata: {
        title: `${title}｜O2V Framework`,
        description: subtitle,
        alternates: localizedAlternates(locale, path)
      },
      title,
      subtitle,
      deck: releaseDeck.zh,
      sections: [
        { heading: "版权所有人", body: ["版权所有人：李智 / Li Zhi。保留所有权利。"] },
        { heading: "配置范围", body: [subtitle] },
        {
          heading: "方法实践版权",
          body: [`${methodAssets} 均为李智基于 O2V Framework 的相关方法资产。除非另有书面授权，保留所有权利。`]
        },
        {
          heading: "源代码许可边界",
          body: [
            "网站源代码采用 Apache License 2.0。",
            "源代码许可不自动授权 O2V Framework、配置方法、方法实践、文本、品牌、Logo、PDF 或其他方法资产的自由复用。"
          ]
        },
        {
          heading: "授权说明",
          body: [
            "超出合理引用范围的引用、改编、翻译、复制、商业使用、培训、咨询交付、产品化、模型训练或实质性复用，应获得授权。"
          ]
        },
        {
          heading: "公开方法边界",
          body: [
            "官网公开内容只总结方法定位、关系和边界，不公开详细 playbook、模板、评分表、计算公式、实施流程、客户细节、具体系统、partner 名称或内部知识库路径。"
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
    };
  }

  const title =
    scope === "enterprise"
      ? "Enterprise Configuration Copyright, Citation and Legal Notice"
      : "Venture Configuration Copyright, Citation and Legal Notice";
  const subtitle =
    scope === "enterprise"
      ? "Applies to O2V Enterprise Configuration, AiNOVA, and Valence."
      : "Applies to O2V Venture Configuration and its venture-context method practices.";
  const methodAssets =
    scope === "enterprise"
      ? "O2V Enterprise Configuration, AiNOVA, Valence, related method practices, publication text, diagrams, brand names, citation language, and downloadable materials"
      : "O2V Venture Configuration, venture-context method practices, publication text, diagrams, brand names, citation language, and downloadable materials";

  return {
    metadata: {
      title: `${title} | O2V Framework`,
      description: subtitle,
      alternates: localizedAlternates(locale, path)
    },
    title,
    subtitle,
    deck: releaseDeck[locale],
    sections: [
      { heading: "Copyright holder", body: ["Copyright © Li Zhi. All rights reserved."] },
      { heading: "Configuration scope", body: [subtitle] },
      {
        heading: "Method practice rights",
        body: [
          `${methodAssets} are O2V-related method assets by Li Zhi. All rights reserved unless separately licensed in writing.`
        ]
      },
      {
        heading: "Source code license boundary",
        body: [
          "Website source code is licensed under the Apache License 2.0 unless otherwise stated.",
          "The source code license does not automatically license O2V Framework, configuration methods, method practices, publication text, brand names, logo assets, PDF materials, or other method assets for unrestricted reuse."
        ]
      },
      {
        heading: "Permission statement",
        body: [
          "Permission is required for citation beyond fair reference, adaptation, translation, reproduction, commercial use, training, consulting delivery, productization, model training, or substantial reuse."
        ]
      },
      {
        heading: "Public method boundary",
        body: [
          "Public website content intentionally summarizes method positioning, relationships, and boundaries. It does not disclose detailed playbooks, templates, scorecards, calculation formulas, implementation procedures, client details, specific systems, partner names, or internal knowledge-base paths."
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
  };
}
