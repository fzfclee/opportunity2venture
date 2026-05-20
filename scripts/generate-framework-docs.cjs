#!/usr/bin/env node

/**
 * PDF generation status helper.
 *
 * The website now links to O2V Framework 20260520 PDF filenames.
 * Temporary dummy PDFs may occupy those filenames until the final
 * designed release PDFs are ready.
 */

const status = {
  currentWebsiteRelease: "O2V Framework 20260520",
  primaryBrandMeaning: "Opportunity-to-Value Framework",
  coreSlogan: "From Signal to Value. From Idea to Asset.",
  judgmentChain: "Signal → Scenario → Persona → Pain → Product → Validation → Business Case → Asset → Value Story",
  pdfStatus: "Current download links use 20260520 placeholder PDFs until final designed PDFs are ready.",
  currentPdfFiles: [
    "public/downloads/o2v-framework-20260520-zh.pdf",
    "public/downloads/o2v-framework-20260520-en.pdf",
    "public/downloads/o2v-framework-20260520-de.pdf"
  ]
};

console.log(JSON.stringify(status, null, 2));
