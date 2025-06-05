import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Postino - AI-Driven Marketing & Growth Agency for SMEs",
  description: "Postino seamlessly blends expert marketing strategies with cutting-edge AI automation to help SMEs grow smarter, faster, and more efficiently. Expert growth marketing, AI automation, and measurable results.",
  keywords: "AI marketing agency, growth marketing, business automation, SME marketing, AI for SMEs, growth through content, outsourced growth team, SEO automation, marketing automation, CRM automation",
  openGraph: {
    title: "Postino - Where Growth Meets AI Innovation",
    description: "Transform your SME with our integrated marketing and AI automation approach. Expert strategies, intelligent systems, measurable results.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Postino - AI-Driven Marketing & Growth Agency",
    description: "Expert marketing strategies powered by intelligent automation. Helping SMEs achieve exceptional growth."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
