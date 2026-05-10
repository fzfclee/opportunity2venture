import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "O2V Framework",
    template: "%s"
  },
  description:
    "O2V Framework, also known as Opportunity-to-Venture Framework, is a front-end opportunity judgment framework for the AI era.",
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
      <body>{children}</body>
    </html>
  );
}
