import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Postino - AI Marketing Agency Nottingham | Growth Marketing & Automation",
    template: "%s | Postino - Nottingham AI Marketing Agency"
  },
  description:
    "Leading AI-driven marketing agency in Nottingham, UK. Expert growth marketing, automation & web design for SMEs across Nottinghamshire. Located in Bingham, serving the East Midlands with proven results. Call 08007723291.",
  keywords:
    "marketing agency Nottingham, AI marketing Nottinghamshire, growth agency Nottingham, web design Nottingham, SEO services Nottingham, digital marketing East Midlands, marketing automation UK, AI agency Nottingham, business automation Nottinghamshire, SME marketing Bingham",
  authors: [{ name: "Postino Ltd" }],
  creator: "Postino Ltd",
  publisher: "Postino Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://postino.cc'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Postino - Where Growth Meets AI Innovation",
    description:
      "Transform your SME with our integrated marketing and AI automation approach. Expert strategies, intelligent systems, measurable results.",
    type: "website",
    locale: "en_US",
    url: 'https://postino.cc',
    siteName: 'Postino',
  },
  twitter: {
    card: "summary_large_image",
    title: "Postino - AI-Driven Marketing & Growth Agency",
    description:
      "Expert marketing strategies powered by intelligent automation. Helping SMEs achieve exceptional growth.",
    creator: "@PostinoAgency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-pending',
    yandex: 'yandex-verification-code', // Add your Yandex verification code
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "MarketingAgency"],
  name: "Postino Ltd",
  alternateName: ["Postino", "Postino Marketing Agency"],
  description:
    "Leading AI-driven marketing and growth agency in Nottingham, UK. Specializing in growth marketing, AI automation, and web design for SMEs across Nottinghamshire and the East Midlands.",
  url: "https://postino.cc",
  logo: "https://postino.cc/logo.png",
  image: "https://postino.cc/postino-office-nottingham.jpg",
  foundingDate: "2024",
  slogan: "Where Growth Meets AI Innovation",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Fisher Lane",
    addressLocality: "Bingham",
    addressRegion: "Nottingham",
    postalCode: "NG13 8BQ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "52.9548",
    longitude: "-1.1581"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "08007723291",
      contactType: "customer service",
      email: "hello@postino.cc",
      availableLanguage: "English",
      areaServed: ["Nottingham", "Nottinghamshire", "East Midlands", "United Kingdom"]
    },
    {
      "@type": "ContactPoint",
      telephone: "+44 7432039801",
      contactType: "customer service",
      contactOption: "WhatsApp",
      availableLanguage: "English"
    }
  ],
  sameAs: [
    "https://postino.cc",
  ],
  serviceArea: [
    {
      "@type": "Place",
      name: "Nottingham",
    },
    {
      "@type": "Place",
      name: "Nottinghamshire",
    },
    {
      "@type": "Place",
      name: "East Midlands",
    },
    {
      "@type": "Place",
      name: "United Kingdom",
    }
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Free Marketing Consultation",
      description: "Complimentary 30-minute consultation for SMEs",
      url: "https://postino.cc/growth-consultation"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing and AI Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Growth Marketing Services",
          description:
            "Expert marketing strategies including SEO, content marketing, email marketing, and conversion optimization.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Automation Solutions",
          description:
            "Intelligent business process automation, data analysis, and custom AI integrations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Services",
          description:
            "AI-enhanced search engine optimization with proven methodologies and measurable results.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content Strategy",
          description:
            "Strategic content planning and creation that drives engagement and conversions.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={`${inter.variable} ${crimsonText.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Tag Manager */}
        {gtmId && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
      </head>
      <body suppressHydrationWarning className="antialiased">
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
