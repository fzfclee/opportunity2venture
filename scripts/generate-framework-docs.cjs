#!/usr/bin/env node

/**
 * PDF generation status helper.
 *
 * The website now links to O2V Framework 20260520 PDF filenames.
 * Keep those filenames stable for public download links.
 */

const status = {
  currentWebsiteRelease: "O2V Framework 20260520",
  primaryBrandMeaning: "Opportunity-to-Value Framework",
  coreSlogan: "From Signal to Impact. From Idea to Asset.",
  judgmentChain: "Signal → Scenario → Persona → Pain → Product → Validation → Business Case → Asset → Value Story",
  pdfStatus: "Current download links use O2V Framework 20260520 PDF files.",
  currentPdfFiles: [
    "public/downloads/o2v-framework-20260520-zh.pdf",
    "public/downloads/o2v-framework-20260520-en.pdf",
    "public/downloads/o2v-framework-20260520-de.pdf"
  ]
};

console.log(JSON.stringify(status, null, 2));
