import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { siteUrl } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "O2V Framework",
    template: "%s"
  },
  description:
    "O2V Framework 20260607 is the Opportunity-to-Value Framework with Enterprise and Venture configurations for turning signals into evidence-backed impact, assets, and value stories.",
  alternates: {
    canonical: `${siteUrl}/`,
    languages: {
      en: `${siteUrl}/en`,
      "zh-CN": `${siteUrl}/zh`,
      de: `${siteUrl}/de`,
      "x-default": `${siteUrl}/en`
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
