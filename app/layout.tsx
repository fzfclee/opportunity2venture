import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.opportunity2venture.com"),
  title: {
    default: "O2V Framework",
    template: "%s"
  },
  description:
    "O2V Framework, also known as Opportunity-to-Venture Framework, is a front-end opportunity judgment framework for the AI era.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      zh: "/zh",
      de: "/de"
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
