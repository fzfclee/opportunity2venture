#!/usr/bin/env node

/**
 * Release download status helper.
 *
 * The website links to O2V Framework Enterprise Configuration 20260607 PDF filenames.
 * Regenerate those files from the DOCX sources when release wording changes.
 */

const status = {
  currentWebsiteRelease: "O2V Framework",
  officialPublicReleaseDate: "20260614",
  internalVersion: "v2.0",
  primaryBrandMeaning: "Opportunity-to-Value Framework",
  coreSlogan: "From Signal to Impact. From Idea to Asset.",
  judgmentChain:
    "Signal -> Scenario -> Persona -> Pain -> Product -> Validation -> Business Case -> Asset -> Value Story",
  pdfStatus: "Current PDF filenames use the Enterprise Configuration 20260607 release identity.",
  currentPdfFiles: [
    "public/downloads/o2v-framework-enterprise-configuration-20260607-en.pdf",
    "public/downloads/o2v-framework-enterprise-configuration-20260607-zh.pdf",
    "public/downloads/o2v-framework-enterprise-configuration-20260607-de.pdf"
  ]
};

console.log(JSON.stringify(status, null, 2));
