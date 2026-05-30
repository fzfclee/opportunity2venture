#!/usr/bin/env node

/**
 * Release download status helper.
 *
 * The website links to stable O2V Framework 20260520 PDF filenames.
 * Regenerate those files from the DOCX sources when release wording changes.
 */

const status = {
  currentWebsiteRelease: "O2V Framework 20260520",
  primaryBrandMeaning: "Opportunity-to-Value Framework",
  coreSlogan: "From Signal to Impact. From Idea to Asset.",
  judgmentChain:
    "Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story",
  pdfStatus: "Current PDF files are the final 20260520 release files in this website repo.",
  currentPdfFiles: [
    "public/downloads/o2v-framework-20260520-en.pdf",
    "public/downloads/o2v-framework-20260520-zh.pdf",
    "public/downloads/o2v-framework-20260520-de.pdf"
  ]
};

console.log(JSON.stringify(status, null, 2));
