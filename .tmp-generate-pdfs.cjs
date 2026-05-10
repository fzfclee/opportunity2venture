const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = process.cwd();
const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.join(root, '.tmp-pdf-build');
fs.mkdirSync(outDir, { recursive: true });

const configs = {
  en: {
    lang: 'en',
    title: 'O2V Framework 20260510',
    name: 'Opportunity-to-Venture Framework',
    descriptor: 'A Front-End Opportunity Judgment Framework for the AI Era',
    tagline: 'From Signal to Venture. From Idea to Asset.',
    release: 'Official Public Release 20260510',
    internal: 'Internal Version: v1.4',
    copyright: 'Copyright © Li Zhi. All rights reserved.',
    metaTop: 'OFFICIAL PUBLIC RELEASE 20260510 | INTERNAL VERSION V1.4',
    contents: 'Contents',
    versionHeading: '14. Version Note',
    versionLines: [
      'Public Release Version: O2V Framework 20260510',
      'Internal Version: v1.4',
      'Release Type: Official Public Release 20260510',
      'This PDF is the complete official public release of O2V Framework 20260510.',
      'The website provides an Official Web Overview for quick reading and online reference.',
      'Future updates, if any, should preserve the O2V Framework brand, the 9-step judgment chain, the Business Case validation chain, the scoring model, the Compliance Risk Gate, and the Framework Deliverables.'
    ],
    replacements: [
      [/assetable venture opportunities/g, 'asset-ready venture opportunities'],
      [/assetable venture opportunity/g, 'asset-ready venture opportunity'],
      [/assetable/g, 'asset-ready']
    ]
  },
  zh: {
    lang: 'zh-CN',
    title: 'O2V Framework 20260510',
    name: 'Opportunity-to-Venture Framework',
    descriptor: '从机会信号到创业资产的前端机会判断框架',
    tagline: '从机会信号到创业资产。',
    release: '官方公开发布版 20260510',
    internal: '内部版本：v1.4',
    copyright: '版权所有人：李智 / Li Zhi',
    metaTop: '官方公开发布版 20260510 | 内部版本 V1.4',
    contents: '目录',
    versionHeading: '14. 版本说明',
    versionLines: [
      '公开发布版本：O2V Framework 20260510',
      '内部版本：v1.4',
      '版本类型：官方公开发布版 20260510',
      '本 PDF 是 O2V Framework 20260510 的完整官方公开发布版。',
      '官网页面提供官方网页概览版，用于快速阅读和在线引用。',
      '未来如有更新，应继续保持 O2V Framework 主品牌、九步判断链路、Business Case 验证链条、评分模型、合规风险闸门和框架交付物的一致性。'
    ],
    replacements: []
  },
  de: {
    lang: 'de',
    title: 'O2V Framework 20260510',
    name: 'Opportunity-to-Venture Framework',
    descriptor: 'Ein Front-End-Framework zur Chancenbewertung im KI-Zeitalter',
    tagline: 'Vom Signal zum Venture. Von der Idee zum Asset.',
    release: 'Offizielle öffentliche Veröffentlichung 20260510',
    internal: 'Interne Version: v1.4',
    copyright: 'Copyright © Li Zhi. All rights reserved.',
    metaTop: 'OFFIZIELLE ÖFFENTLICHE VERÖFFENTLICHUNG 20260510 | INTERNE VERSION V1.4',
    contents: 'Inhalt',
    versionHeading: '14. Versionshinweis',
    versionLines: [
      'Öffentliche Version: O2V Framework 20260510',
      'Interne Version: v1.4',
      'Veröffentlichungstyp: Offizielle öffentliche Veröffentlichung 20260510',
      'Dieses PDF ist die vollständige offizielle Veröffentlichung des O2V Framework 20260510.',
      'Die Website bietet einen offiziellen Web-Überblick für schnelle Lektüre und Online-Referenz.',
      'Künftige Aktualisierungen sollten die Marke O2V Framework, die 9-stufige Bewertungskette, die Business-Case-Validierungskette, das Scoring Model, das Compliance Risk Gate und die Framework Deliverables konsistent beibehalten.'
    ],
    replacements: []
  }
};

function escapeHtml(s) {
  return s.replace(/[&<>]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch]));
}

function cleanLines(lang) {
  const txtPath = path.join(root, `.tmp-pdf-text/o2v-framework-20260510-${lang}.txt`);
  let text = fs.readFileSync(txtPath, 'utf8').replace(/\r\n/g, '\n');
  const cfg = configs[lang];
  for (const [from, to] of cfg.replacements) text = text.replace(from, to);
  let lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  lines = lines.filter(l => !/^-- \d+ of \d+ --$/.test(l));
  lines = lines.filter(l => !/^O2V Framework 20260510 \| \d+$/.test(l));
  lines = lines.filter(l => !/^([1-9]|1[0-4])\.$/.test(l));
  lines = lines.filter(l => l !== cfg.metaTop);
  lines = lines.filter(l => l !== cfg.title && l !== cfg.name && l !== cfg.descriptor && l !== cfg.tagline && l !== cfg.release && l !== cfg.internal && l !== cfg.copyright);

  // Remove extracted contents block; we rebuild it cleanly.
  const contentStart = lines.findIndex(l => ['Contents', '目录', 'Inhalt'].includes(l));
  const firstSection = lines.findIndex(l => /^1\.\s/.test(l));
  if (contentStart >= 0 && firstSection > contentStart) {
    lines.splice(contentStart, firstSection - contentStart);
  }

  // Replace internal-looking version note with a stable publication note.
  const vIdx = lines.findIndex(l => l === cfg.versionHeading);
  if (vIdx >= 0) {
    lines = lines.slice(0, vIdx).concat([cfg.versionHeading], cfg.versionLines);
  }
  return lines;
}

function groupSections(lines) {
  const sections = [];
  let current = null;
  let next = 1;
  for (const line of lines) {
    const match = line.match(/^(\d+)\.\s/);
    if (match && Number(match[1]) === next && next <= 14) {
      current = { heading: line, lines: [] };
      sections.push(current);
      next += 1;
    } else if (current) {
      current.lines.push(line);
    }
  }
  return sections;
}

function isBullet(line) {
  return line.startsWith('•') || /[;；]$/.test(line) || /^[-–]\s/.test(line);
}

function isTableLine(line) {
  return line.includes('\t') || /^(Dimension|Level|维度|等级|Dimensionen?|Stufe)\b/.test(line);
}

function renderBody(lines) {
  let html = '';
  let listOpen = false;
  let pre = [];
  const flushList = () => { if (listOpen) { html += '</ul>'; listOpen = false; } };
  const flushPre = () => { if (pre.length) { html += `<pre>${escapeHtml(pre.join('\n'))}</pre>`; pre = []; } };
  for (let raw of lines) {
    let line = raw.replace(/^•\s*/, '').trim();
    if (!line) continue;
    if (isTableLine(line)) {
      flushList();
      pre.push(line.replace(/\t/g, '    '));
      continue;
    }
    flushPre();
    if (isBullet(line)) {
      if (!listOpen) { html += '<ul>'; listOpen = true; }
      html += `<li>${escapeHtml(line.replace(/^[-–]\s*/, ''))}</li>`;
    } else {
      flushList();
      const cls = /^(In short:|Formula:|Core principle:|Citation format:|中文引用格式：|英文引用格式：|Kurz gesagt:|Formel:|Kernprinzip:|Zitierformat:|版本：|Version:|Interne Version:|内部版本：|Positioning:|Copyright Holder:)/.test(line) ? ' class="leadline"' : '';
      html += `<p${cls}>${escapeHtml(line)}</p>`;
    }
  }
  flushList();
  flushPre();
  return html;
}

function buildHtml(lang) {
  const cfg = configs[lang];
  const sections = groupSections(cleanLines(lang));
  const toc = sections.map(s => `<li>${escapeHtml(s.heading)}</li>`).join('');
  const body = sections.map(s => `<section><h2>${escapeHtml(s.heading)}</h2>${renderBody(s.lines)}</section>`).join('\n');
  return `<!doctype html>
<html lang="${cfg.lang}">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(cfg.title)}</title>
<style>
@page { size: A4; margin: 20mm 18mm 18mm; }
* { box-sizing: border-box; }
body { margin: 0; color: #111; background: #fff; font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", "Noto Sans CJK SC", "Microsoft YaHei", Arial, sans-serif; font-size: 10.5pt; line-height: 1.55; }
.cover { min-height: 235mm; display: flex; flex-direction: column; justify-content: center; page-break-after: always; }
.eyebrow { font-size: 8pt; letter-spacing: .08em; text-transform: uppercase; color: #666; margin-bottom: 22mm; }
h1 { font-size: 30pt; line-height: 1.08; margin: 0 0 8mm; font-weight: 760; }
.subtitle { font-size: 14pt; line-height: 1.35; margin: 0 0 18mm; max-width: 140mm; }
.tagline { font-size: 16pt; line-height: 1.35; font-weight: 700; margin: 0 0 20mm; }
.meta { border-top: 1px solid #777; padding-top: 8mm; font-size: 9pt; color: #333; }
.toc { page-break-after: always; }
.toc h2 { border: 0; margin-top: 0; }
.toc ol { columns: 2; column-gap: 20mm; padding-left: 0; list-style: none; list-style-position: inside; }
.toc li { break-inside: avoid; margin: 0 0 4mm; }
section { break-inside: auto; margin: 0 0 9mm; }
h2 { font-size: 16pt; line-height: 1.25; margin: 0 0 5mm; padding-top: 2mm; padding-bottom: 2.5mm; border-bottom: 1px solid #ddd; font-weight: 740; break-after: avoid; }
p { margin: 0 0 3.2mm; orphans: 3; widows: 3; }
.leadline { font-weight: 650; margin-top: 1mm; }
ul { margin: 0 0 3.5mm 0; padding-left: 4.5mm; }
li { margin: 0 0 1.7mm; }
pre { white-space: pre-wrap; font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", "Noto Sans CJK SC", "Microsoft YaHei", Arial, sans-serif; font-size: 8.5pt; line-height: 1.45; border: 1px solid #d8d8d8; background: #fafafa; padding: 3mm; margin: 0 0 4mm; }
.footer { position: fixed; bottom: 8mm; left: 18mm; right: 18mm; color: #777; font-size: 7.5pt; text-align: center; }
</style>
</head>
<body>
<div class="cover">
  <div class="eyebrow">${escapeHtml(cfg.metaTop)}</div>
  <h1>${escapeHtml(cfg.title)}</h1>
  <p class="subtitle">${escapeHtml(cfg.name)}<br>${escapeHtml(cfg.descriptor)}</p>
  <p class="tagline">${escapeHtml(cfg.tagline)}</p>
  <div class="meta">
    <div>${escapeHtml(cfg.release)}</div>
    <div>${escapeHtml(cfg.internal)}</div>
    <div>${escapeHtml(cfg.copyright)}</div>
  </div>
</div>
<div class="toc"><h2>${escapeHtml(cfg.contents)}</h2><ol>${toc}</ol></div>
${body}
<div class="footer">O2V Framework 20260510</div>
</body></html>`;
}

for (const lang of ['en', 'zh', 'de']) {
  const htmlPath = path.join(outDir, `o2v-framework-20260510-${lang}.html`);
  const pdfPath = path.join(outDir, `o2v-framework-20260510-${lang}.pdf`);
  fs.writeFileSync(htmlPath, buildHtml(lang), 'utf8');
  try { fs.unlinkSync(pdfPath); } catch {}
  execFileSync(edge, [
    '--headless',
    '--disable-gpu', '--disable-software-rasterizer', '--disable-dev-shm-usage', '--no-sandbox', '--disable-setuid-sandbox', '--disable-features=UseChromeOSDirectVideoDecoder',
    '--no-pdf-header-footer',
    `--print-to-pdf=${pdfPath}`,
    `file:///${htmlPath.replace(/\\/g, '/')}`
  ], { stdio: 'inherit' });
  console.log(`Generated ${pdfPath}`);
}





