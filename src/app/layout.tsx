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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Postino Ltd",
  "alternateName": "Postino",
  "description": "AI-driven marketing and growth agency helping SMEs achieve measurable success through expert marketing strategies and intelligent automation.",
  "url": "https://same-hk5rhfvx2xr-latest.netlify.app",
  "logo": "https://same-hk5rhfvx2xr-latest.netlify.app/logo.png",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Fisher Lane",
    "addressLocality": "Bingham",
    "addressRegion": "Nottingham",
    "postalCode": "NG13 8BQ",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-20-1234-5678",
    "contactType": "customer service",
    "email": "hello@postino.cc"
  },
  "sameAs": [
    "https://same-hk5rhfvx2xr-latest.netlify.app",
    "https://postinosite.netlify.app"
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "United Kingdom"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Marketing and AI Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Growth Marketing Services",
          "description": "Expert marketing strategies including SEO, content marketing, email marketing, and conversion optimization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI & Automation Solutions",
          "description": "Intelligent business process automation, data analysis, and custom AI integrations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "AI-enhanced search engine optimization with proven methodologies and measurable results."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Strategy",
          "description": "Strategic content planning and creation that drives engagement and conversions."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
