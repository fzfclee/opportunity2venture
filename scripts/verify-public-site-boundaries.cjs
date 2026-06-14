const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const sourceFiles = [
  "README.md",
  "public/llms.txt",
  "public/sitemap.xml",
  "lib/content.ts",
  "lib/configurationCopyright.ts",
  "lib/i18n.ts",
  "components/Header.tsx",
  "components/ConfigurationSwitcher.tsx",
  "app/layout.tsx"
];

const requiredRoutes = [
  "/en",
  "/zh",
  "/en/enterprise/clear",
  "/zh/enterprise/clear",
  "/en/venture",
  "/zh/venture",
  "/en/venture/clear",
  "/zh/venture/clear",
  "/en/personal",
  "/zh/personal",
  "/en/personal/clear",
  "/zh/personal/clear",
  "/en/ainova",
  "/zh/ainova",
  "/en/valence",
  "/zh/valence",
  "/en/principles",
  "/zh/principles",
  "/en/copyright",
  "/zh/copyright",
  "/en/enterprise/copyright",
  "/zh/enterprise/copyright",
  "/en/venture/copyright",
  "/zh/venture/copyright",
  "/en/personal/copyright",
  "/zh/personal/copyright",
  "/en/download",
  "/zh/download",
  "/en/about",
  "/zh/about"
];

const forbiddenPublicPatterns = [
  /\/de(\/|<|$)/i,
  /Deutsch/i,
  /German Enterprise Configuration/i,
  /\bD&T\b/i,
  /placeholder/i,
  /\bTBD\b/i,
  /\bTODO\b/i,
  /\/(en|zh)\/framework/i,
  /zhi-consulting-knowledge-base/i,
  /internal knowledge-base path/i,
  /s2a-magic/i,
  /内部知识库路径/,
  /02_o2v_framework/i,
  /04_playbooks/i,
  /05_templates/i,
  /source_of_truth_map/i,
  /raw_data/i
];

const restrictedMethodDetailPatterns = [
  /calculation formula/i,
  /scoring formula/i,
  /detailed decision matrix/i,
  /scorecard/i,
  /template/i,
  /playbook/i,
  /prompt chain/i,
  /private diagnostic/i,
  /评分规则/,
  /计算方法/,
  /模板/,
  /私有诊断/
];

const boundaryStatementAllowed = [
  /does not disclose/i,
  /not published/i,
  /not publish/i,
  /not disclose/i,
  /does not include/i,
  /does not automatically license/i,
  /不公开/,
  /不会自动授权/,
  /不自动授权/,
  /不发布/
];

const requiredPublicPatterns = [
  /O2V Framework/,
  /Official Public Release 20260614/,
  /Internal Version: v2\.0/,
  /O2V Enterprise Configuration/,
  /O2V Venture Configuration/,
  /O2V Personal Configuration/,
  /CLEAR \/ Signal-to-Action/,
  /AiNOVA/,
  /AI-native Operating Model for Enterprise Value Realization/,
  /Valence/,
  /Product Value Operations & Governance Model/,
  /Core Principles/,
  /Method practice rights/,
  /ainova-detailed-introduction\.pdf/,
  /valence-detailed-introduction\.pdf/
];

const oldReleasePatterns = [
  /Official Public Release 20260607/,
  /Official Public Release 20260520/,
  /Internal Version: v1\.6/,
  /Internal Version: v1\.5/,
  /官方公开发布版 20260520/,
  /内部版本：v1\.5/
];

const oldReleaseAllowed = [
  /prior Opportunity-to-Value transition release/i,
  /prior configurable Opportunity-to-Value release/i,
  /PDF downloads may reference earlier release files/i,
  /PDF 下载文件可能仍指向早期发布文件/
];

function readIfExists(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    return null;
  }
  return fs.readFileSync(absolutePath, "utf8");
}

function collectFiles(relativeDir, predicate) {
  const absoluteDir = path.join(root, relativeDir);
  if (!fs.existsSync(absoluteDir)) {
    return [];
  }

  const files = [];
  const stack = [absoluteDir];

  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (!predicate || predicate(fullPath)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function relativeFromRoot(absolutePath) {
  return path.relative(root, absolutePath).replace(/\\/g, "/");
}

if (process.argv.includes("--self-test")) {
  const allowedBoundaryLine =
    "Public website content does not disclose detailed playbooks, templates, scoring rules, prompt chains, or calculation methods.";
  const forbiddenContentLine =
    "This page includes a scoring formula and private diagnostic module for implementation.";

  if (!restrictedMethodDetailPatterns.some((pattern) => pattern.test(allowedBoundaryLine))) {
    throw new Error("Self-test setup error: boundary line should match restricted detail pattern.");
  }

  if (!boundaryStatementAllowed.some((allowed) => allowed.test(allowedBoundaryLine))) {
    throw new Error("Self-test failed: boundary statement was not allowed.");
  }

  if (!restrictedMethodDetailPatterns.some((pattern) => pattern.test(forbiddenContentLine))) {
    throw new Error("Self-test setup error: forbidden line should match restricted detail pattern.");
  }

  if (boundaryStatementAllowed.some((allowed) => allowed.test(forbiddenContentLine))) {
    throw new Error("Self-test failed: forbidden implementation detail was incorrectly allowed.");
  }

  console.log("Public site boundary verifier self-test passed.");
  process.exit(0);
}

const errors = [];
const scannedFiles = new Map();

for (const relativePath of sourceFiles) {
  const content = readIfExists(relativePath);
  if (content === null) {
    errors.push(`Missing expected file: ${relativePath}`);
  } else {
    scannedFiles.set(relativePath, content);
  }
}

for (const fullPath of collectFiles("app", (file) => file.endsWith(".tsx"))) {
  scannedFiles.set(relativeFromRoot(fullPath), fs.readFileSync(fullPath, "utf8"));
}

for (const fullPath of collectFiles("components", (file) => file.endsWith(".tsx"))) {
  scannedFiles.set(relativeFromRoot(fullPath), fs.readFileSync(fullPath, "utf8"));
}

for (const fullPath of collectFiles("public", (file) => {
  const name = path.basename(file);
  return name === "llms.txt" || name === "sitemap.xml" || name === "robots.txt";
})) {
  scannedFiles.set(relativeFromRoot(fullPath), fs.readFileSync(fullPath, "utf8"));
}

const combined = Array.from(scannedFiles.entries())
  .map(([file, content]) => `\n--- ${file} ---\n${content}`)
  .join("\n");

for (const route of requiredRoutes) {
  if (!combined.includes(`https://www.o2vframework.com${route}`) && !combined.includes(route)) {
    errors.push(`Missing route reference: ${route}`);
  }
}

for (const pattern of forbiddenPublicPatterns) {
  for (const [file, content] of scannedFiles) {
    if (pattern.test(content)) {
      errors.push(`Forbidden public pattern ${pattern} found in ${file}`);
    }
  }
}

for (const pattern of restrictedMethodDetailPatterns) {
  for (const [file, content] of scannedFiles) {
    const lines = content.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (!pattern.test(line)) {
        return;
      }
      if (file === "app/layout.tsx" && /template:\s/.test(line)) {
        return;
      }
      if (boundaryStatementAllowed.some((allowed) => allowed.test(line))) {
        return;
      }
      errors.push(`Restricted method detail ${pattern} found in ${file}:${index + 1}`);
    });
  }
}

for (const pattern of requiredPublicPatterns) {
  if (!pattern.test(combined)) {
    errors.push(`Missing required public pattern: ${pattern}`);
  }
}

for (const pattern of oldReleasePatterns) {
  for (const [file, content] of scannedFiles) {
    const lines = content.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (!pattern.test(line)) {
        return;
      }
      if (oldReleaseAllowed.some((allowed) => allowed.test(line))) {
        return;
      }
      errors.push(`Old release identity ${pattern} found in ${file}:${index + 1}`);
    });
  }
}

if (errors.length) {
  console.error("Public site boundary verification failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Public site boundary verification passed.");
