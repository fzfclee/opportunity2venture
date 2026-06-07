const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const sourceFiles = [
  "README.md",
  "public/llms.txt",
  "public/sitemap.xml",
  "lib/content.ts",
  "lib/configurationCopyright.ts",
  "components/Header.tsx",
  "components/ConfigurationSwitcher.tsx",
  "app/[locale]/page.tsx",
  "app/[locale]/enterprise/page.tsx",
  "app/[locale]/venture/page.tsx",
  "app/[locale]/ainova/page.tsx",
  "app/[locale]/valence/page.tsx",
  "app/[locale]/copyright/page.tsx",
  "app/[locale]/enterprise/copyright/page.tsx",
  "app/[locale]/venture/copyright/page.tsx",
  "app/[locale]/download/page.tsx"
];

const requiredRoutes = [
  "/en/enterprise",
  "/zh/enterprise",
  "/de/enterprise",
  "/en/venture",
  "/zh/venture",
  "/de/venture",
  "/en/ainova",
  "/zh/ainova",
  "/de/ainova",
  "/en/valence",
  "/zh/valence",
  "/de/valence",
  "/en/enterprise/copyright",
  "/zh/enterprise/copyright",
  "/de/enterprise/copyright",
  "/en/venture/copyright",
  "/zh/venture/copyright",
  "/de/venture/copyright"
];

const forbiddenPublicPatterns = [
  /Personal Configuration/i,
  /Venture\s*\/\s*Personal Configuration/i,
  /\bD&T\b/i,
  /placeholder/i,
  /\bTBD\b/i,
  /\bTODO\b/i,
  /\/(en|zh|de)\/framework/i,
  /zhi-consulting-knowledge-base/i,
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
  /评分表/,
  /模板/,
  /公式/
];

const boundaryStatementAllowed = [
  /does not disclose/i,
  /do not publish/i,
  /must not expose/i,
  /not publish/i,
  /not disclose/i,
  /do not expose/i,
  /不公开/,
  /不得公开/,
  /不披露/,
  /不应公开/,
  /不发布/,
  /不在本站发布/
];

const requiredPublicPatterns = [
  /O2V Framework 20260607/,
  /Internal Version: v1\.6|内部版本：v1\.6|Interne Version: v1\.6/,
  /O2V Enterprise Configuration/,
  /O2V Venture Configuration|O2V 创业配置/,
  /AiNOVA/,
  /AI-native Operating Model for Enterprise Value Realization/,
  /Valence/,
  /Product Value Operations & Governance Model/,
  /Core Principles/,
  /Method practice rights|方法实践版权/,
  /O2V Enterprise Configuration, AiNOVA, Valence/,
  /O2V Venture Configuration/,
  /ainova-detailed-introduction\.pdf/,
  /valence-detailed-introduction\.pdf/
];

const oldReleasePatterns = [
  /O2V Framework 20260520/,
  /Official Public Release 20260520/,
  /官方公开发布版 20260520/,
  /Internal Version: v1\.5/,
  /内部版本：v1\.5/,
  /Interne Version: v1\.5/
];

const oldReleaseAllowed = [
  /No old public release identity should remain in public content/i
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

const errors = [];
const scannedFiles = new Map();

if (process.argv.includes("--self-test")) {
  const allowedBoundaryLine =
    "Public website content does not disclose detailed playbooks, templates, scorecards, or calculation formulas.";
  const forbiddenContentLine =
    "This page includes a calculation formula and scorecard for implementation.";

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
    if (file.startsWith("docs/")) {
      continue;
    }
    if (pattern.test(content)) {
      errors.push(`Forbidden public pattern ${pattern} found in ${file}`);
    }
  }
}

for (const pattern of restrictedMethodDetailPatterns) {
  for (const [file, content] of scannedFiles) {
    if (file.startsWith("docs/")) {
      continue;
    }
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
