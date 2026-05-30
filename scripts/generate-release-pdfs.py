from __future__ import annotations

import re
from pathlib import Path

from docx import Document
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Image, PageBreak, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
DOWNLOADS = ROOT / "public" / "downloads"
LOGO = ROOT / "public" / "brand" / "o2v-logo-primary-blue-purple.png"

RELEASES = {
    "en": {
        "docx": DOWNLOADS / "o2v-framework-20260520-en.docx",
        "pdf": DOWNLOADS / "o2v-framework-20260520-en.pdf",
        "title": "O2V Framework",
        "subtitle": "Opportunity-to-Value Framework",
        "descriptor": "An AI-Era Opportunity Judgment and Value Realization Framework",
        "slogan": "From Signal to Impact. From Idea to Asset.",
        "release": "Official Public Release 20260520",
        "internal": "Internal Version: v1.5",
        "copyright": "Copyright © Li Zhi. All rights reserved.",
        "font": "Arial",
        "bold_font": "Arial-Bold",
    },
    "zh": {
        "docx": DOWNLOADS / "o2v-framework-20260520-zh.docx",
        "pdf": DOWNLOADS / "o2v-framework-20260520-zh.pdf",
        "title": "O2V Framework",
        "subtitle": "Opportunity-to-Value Framework",
        "descriptor": "面向 AI 时代的机会判断与价值实现框架",
        "slogan": "从机会信号到实际影响。从创意构想到长期资产。",
        "release": "官方公开发布版 20260520",
        "internal": "内部版本：v1.5",
        "copyright": "版权所有人：李智 / Li Zhi。保留所有权利。",
        "font": "MicrosoftYaHei",
        "bold_font": "MicrosoftYaHei-Bold",
    },
    "de": {
        "docx": DOWNLOADS / "o2v-framework-20260520-de.docx",
        "pdf": DOWNLOADS / "o2v-framework-20260520-de.pdf",
        "title": "O2V Framework",
        "subtitle": "Opportunity-to-Value Framework",
        "descriptor": "Ein Framework zur Chancenbewertung und Wertrealisierung im KI-Zeitalter",
        "slogan": "Vom Signal zur Wirkung. Von der Idee zum Asset.",
        "release": "Offizielle öffentliche Veröffentlichung 20260520",
        "internal": "Interne Version: v1.5",
        "copyright": "Copyright © Li Zhi. All rights reserved.",
        "font": "Arial",
        "bold_font": "Arial-Bold",
    },
}

SKIP_COVER_TEXT = {
    "O2V Framework",
    "Opportunity-to-Value Framework",
    "An AI-Era Opportunity Judgment and Value Realization Framework",
    "面向 AI 时代的机会判断与价值实现框架",
    "Ein Framework zur Chancenbewertung und Wertrealisierung im KI-Zeitalter",
    "From Signal to Impact. From Idea to Asset.",
    "从机会信号到实际影响。从创意构想到长期资产。",
    "Vom Signal zur Wirkung. Von der Idee zum Asset.",
    "Official Public Release 20260520",
    "官方公开发布版 20260520",
    "Offizielle öffentliche Veröffentlichung 20260520",
    "Internal Version: v1.5",
    "内部版本：v1.5",
    "Interne Version: v1.5",
    "Copyright © Li Zhi. All rights reserved.",
    "版权所有人：李智 / Li Zhi。保留所有权利。",
}


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("Arial", r"C:\Windows\Fonts\arial.ttf"))
    pdfmetrics.registerFont(TTFont("Arial-Bold", r"C:\Windows\Fonts\arialbd.ttf"))
    pdfmetrics.registerFont(TTFont("MicrosoftYaHei", r"C:\Windows\Fonts\msyh.ttc"))
    pdfmetrics.registerFont(TTFont("MicrosoftYaHei-Bold", r"C:\Windows\Fonts\msyhbd.ttc"))


def paragraph_texts(path: Path) -> list[str]:
    doc = Document(path)
    texts: list[str] = []
    for paragraph in doc.paragraphs:
        text = " ".join(paragraph.text.split())
        if not text:
            continue
        if text in SKIP_COVER_TEXT:
            continue
        if "PUBLIC RELEASE 20260520" in text or "公开发布版 20260520" in text or "VERÖFFENTLICHUNG 20260520" in text:
            continue
        texts.append(text)
    return texts


def escape(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def is_heading(text: str) -> bool:
    if re.match(r"^\d+\.\s+", text):
        return True
    if text in {
        "Contents",
        "目录",
        "Inhalt",
        "One-Sentence Definition",
        "Founding Statement",
        "Positioning Statement",
        "Why the AI Era Needs O2V",
        "Applicable Scenarios",
        "The 9-Step Judgment Chain",
        "Step Details",
        "O2V Scoring Model",
        "Compliance Risk Gate",
        "Business Case Template",
        "Core Principles",
        "Framework Deliverables",
        "Copyright, Citation, and Legal Notice",
        "Version Note",
        "一句话定义",
        "创始声明",
        "方法定位",
        "为什么 AI 时代需要 O2V",
        "适用场景",
        "O2V 九步判断链路",
        "九步法说明",
        "评分模型",
        "合规风险闸门",
        "Business Case 模板",
        "核心原则",
        "框架交付物",
        "版权、引用与法律声明",
        "版本说明",
        "Definition in einem Satz",
        "Gründungserklärung",
        "Positionierung",
        "Warum das KI-Zeitalter O2V braucht",
        "Anwendungsbereiche",
        "Die 9-stufige Bewertungskette",
        "Erläuterung der Schritte",
        "Urheberrecht, Zitierung und rechtlicher Hinweis",
        "Versionshinweis",
    }:
        return True
    return False


def make_styles(font: str, bold_font: str) -> dict[str, ParagraphStyle]:
    styles = getSampleStyleSheet()
    return {
        "cover_title": ParagraphStyle(
            "cover_title",
            parent=styles["Title"],
            fontName=bold_font,
            fontSize=27,
            leading=32,
            textColor=colors.HexColor("#080F23"),
            alignment=TA_CENTER,
            spaceAfter=6,
        ),
        "cover_subtitle": ParagraphStyle(
            "cover_subtitle",
            parent=styles["Normal"],
            fontName=bold_font,
            fontSize=16,
            leading=21,
            textColor=colors.HexColor("#1A2BFF"),
            alignment=TA_CENTER,
            spaceAfter=8,
        ),
        "cover_body": ParagraphStyle(
            "cover_body",
            parent=styles["Normal"],
            fontName=font,
            fontSize=10.5,
            leading=15,
            textColor=colors.HexColor("#0B0F23"),
            alignment=TA_CENTER,
            spaceAfter=5,
        ),
        "slogan": ParagraphStyle(
            "slogan",
            parent=styles["Normal"],
            fontName=bold_font,
            fontSize=13.5,
            leading=18,
            textColor=colors.HexColor("#1A2BFF"),
            alignment=TA_CENTER,
            spaceAfter=14,
        ),
        "heading": ParagraphStyle(
            "heading",
            parent=styles["Heading2"],
            fontName=bold_font,
            fontSize=13.5,
            leading=18,
            textColor=colors.HexColor("#080F23"),
            spaceBefore=11,
            spaceAfter=5,
        ),
        "body": ParagraphStyle(
            "body",
            parent=styles["BodyText"],
            fontName=font,
            fontSize=9.8,
            leading=14.3,
            textColor=colors.HexColor("#172033"),
            alignment=TA_LEFT,
            spaceAfter=4.5,
        ),
        "footer": ParagraphStyle(
            "footer",
            parent=styles["Normal"],
            fontName=font,
            fontSize=7.5,
            leading=9,
            textColor=colors.HexColor("#697386"),
            alignment=TA_CENTER,
        ),
    }


def draw_page(canvas, doc, release: dict[str, str]) -> None:
    canvas.saveState()
    width, height = A4
    canvas.setStrokeColor(colors.HexColor("#DCE3F8"))
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, 14 * mm, width - 18 * mm, 14 * mm)
    canvas.setFillColor(colors.HexColor("#697386"))
    canvas.setFont(release["font"], 7.5)
    canvas.drawCentredString(width / 2, 9 * mm, f"O2V Framework 20260520 | {release['internal']} | www.o2vframework.com")
    canvas.restoreState()


def build_pdf(locale: str, release: dict[str, str]) -> None:
    texts = paragraph_texts(release["docx"])
    styles = make_styles(release["font"], release["bold_font"])
    doc = SimpleDocTemplate(
        str(release["pdf"]),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=18 * mm,
        bottomMargin=20 * mm,
        title=f"O2V Framework 20260520 {locale.upper()}",
        author="Li Zhi",
        subject="Opportunity-to-Value Framework",
    )

    story = []
    story.append(Spacer(1, 16 * mm))
    story.append(Image(str(LOGO), width=135 * mm, height=64 * mm, kind="proportional"))
    story.append(Spacer(1, 8 * mm))
    story.append(Paragraph(escape(release["title"]), styles["cover_title"]))
    story.append(Paragraph(escape(release["subtitle"]), styles["cover_subtitle"]))
    story.append(Paragraph(escape(release["descriptor"]), styles["cover_body"]))
    story.append(Paragraph(escape(release["slogan"]), styles["slogan"]))
    story.append(Spacer(1, 5 * mm))
    story.append(Paragraph(escape(release["release"]), styles["cover_body"]))
    story.append(Paragraph(escape(release["internal"]), styles["cover_body"]))
    story.append(Paragraph(escape(release["copyright"]), styles["cover_body"]))
    story.append(PageBreak())

    for text in texts:
        style = styles["heading"] if is_heading(text) else styles["body"]
        story.append(Paragraph(escape(text), style))

    doc.build(story, onFirstPage=lambda c, d: draw_page(c, d, release), onLaterPages=lambda c, d: draw_page(c, d, release))


def main() -> None:
    register_fonts()
    for locale, release in RELEASES.items():
        build_pdf(locale, release)
        print(f"Generated {release['pdf'].relative_to(ROOT)}")


if __name__ == "__main__":
    main()
