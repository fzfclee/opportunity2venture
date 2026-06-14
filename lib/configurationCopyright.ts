import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { localizedAlternates } from "@/lib/i18n";
import { internalVersion, publicReleaseDate, type Section } from "@/lib/content";

export type CopyrightScope = "enterprise" | "venture" | "personal";

type ConfigurationCopyrightContent = {
  metadata: Metadata;
  title: string;
  subtitle: string;
  deck: string[];
  sections: Section[];
};

const releaseDeck: Record<Locale, string[]> = {
  en: ["Opportunity-to-Value Framework", `Official Public Release ${publicReleaseDate}`, `Internal Version: ${internalVersion}`],
  zh: ["Opportunity-to-Value Framework", `官方公开发布版 ${publicReleaseDate}`, `内部版本：${internalVersion}`]
};

const scopeNames: Record<Locale, Record<CopyrightScope, string>> = {
  en: {
    enterprise: "Enterprise Configuration",
    venture: "Venture Configuration",
    personal: "Personal Configuration"
  },
  zh: {
    enterprise: "企业配置",
    venture: "创业配置",
    personal: "个人配置"
  }
};

const scopeAssets: Record<Locale, Record<CopyrightScope, string>> = {
  en: {
    enterprise: "O2V Enterprise Configuration, CLEAR in the Enterprise Configuration, AiNOVA, Valence, related enterprise method practices, publication text, diagrams, artifact taxonomy, citation language, and downloadable materials",
    venture: "O2V Venture Configuration, CLEAR in the Venture Configuration, venture-context method practices, publication text, diagrams, artifact taxonomy, citation language, and downloadable materials",
    personal: "O2V Personal Configuration, CLEAR in the Personal Configuration, Signal-to-Action Planner public Skill positioning, personal-context method practices, publication text, diagrams, artifact taxonomy, citation language, and downloadable materials"
  },
  zh: {
    enterprise: "O2V Enterprise Configuration、企业配置下的 CLEAR、AiNOVA、Valence、相关企业方法实践、发布文本、图示、工件分类、引用语言和下载材料",
    venture: "O2V Venture Configuration、创业配置下的 CLEAR、创业语境方法实践、发布文本、图示、工件分类、引用语言和下载材料",
    personal: "O2V Personal Configuration、个人配置下的 CLEAR、Signal-to-Action Planner 公开 Skill 定位、个人语境方法实践、发布文本、图示、工件分类、引用语言和下载材料"
  }
};

export function getConfigurationCopyrightContent(locale: Locale, scope: CopyrightScope): ConfigurationCopyrightContent {
  const path = `${scope}/copyright`;
  const name = scopeNames[locale][scope];
  const assets = scopeAssets[locale][scope];

  if (locale === "zh") {
    const title = `${name}版权、引用与法律声明`;
    const subtitle = `适用于 O2V ${name} 及其相关公开方法实践。`;

    return {
      metadata: {
        title: `${title} | O2V Framework`,
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
          body: [`${assets} 均为李智 / Li Zhi 基于 O2V Framework 创建的相关方法资产。除非另有书面授权，保留所有权利。`]
        },
        {
          heading: "源代码许可边界",
          body: [
            "网站源代码采用 Apache License 2.0。",
            "源代码许可不自动授权 O2V Framework、配置方法、方法实践、文本、品牌、logo、PDF 或其他方法资产的自由复用。"
          ]
        },
        {
          heading: "公开方法边界",
          body: [
            "官网公开内容只总结方法定位、关系和边界，不公开详细 playbook、模板、评分规则、提示词链、计算方法、客户细节、具体系统、partner 名称或内部工作材料。"
          ]
        },
        {
          heading: "法律免责声明",
          body: ["本站与框架发布内容仅用于信息和教育目的，不构成法律、投资、金融、税务、医疗、心理、安全或其他专业建议。"]
        }
      ]
    };
  }

  const title = `${name} Copyright, Citation and Legal Notice`;
  const subtitle = `Applies to O2V ${name} and its related public method practices.`;

  return {
    metadata: {
      title: `${title} | O2V Framework`,
      description: subtitle,
      alternates: localizedAlternates(locale, path)
    },
    title,
    subtitle,
    deck: releaseDeck.en,
    sections: [
      { heading: "Copyright holder", body: ["Copyright (c) Li Zhi. All rights reserved."] },
      { heading: "Configuration scope", body: [subtitle] },
      {
        heading: "Method practice rights",
        body: [`${assets} are O2V-related method assets created by Li Zhi. All rights reserved unless separately licensed in writing.`]
      },
      {
        heading: "Source code license boundary",
        body: [
          "Website source code is licensed under the Apache License 2.0 unless otherwise stated.",
          "The source code license does not automatically license O2V Framework, configuration methods, method practices, text, brand names, logo assets, PDF materials, or other method assets for unrestricted reuse."
        ]
      },
      {
        heading: "Public method boundary",
        body: [
          "Public website content intentionally summarizes method positioning, relationships, and boundaries. It does not disclose detailed playbooks, templates, scoring rules, prompt chains, calculation methods, client details, specific systems, partner names, or internal working materials."
        ]
      },
      {
        heading: "Legal disclaimer",
        body: [
          "This site and framework publication are provided for informational and educational purposes only. They do not constitute legal, investment, financial, tax, medical, psychological, safety, or professional advice."
        ]
      }
    ]
  };
}
