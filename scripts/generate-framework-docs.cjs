#!/usr/bin/env node

/**
 * Release download status helper.
 *
 * The website links to available O2V Framework Enterprise Configuration 20260607 PDF filenames.
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
  pdfStatus: "PDF files may reference earlier release files. The current web release is O2V Framework / Official Public Release 20260614 / Internal Version v2.0.",
  currentPdfFiles: [
    "public/downloads/o2v-framework-enterprise-configuration-20260607-en.pdf",
    "public/downloads/o2v-framework-enterprise-configuration-20260607-zh.pdf"
  ]
};

console.log(JSON.stringify(status, null, 2));
