import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { getOrganizationStructuredData, getWebsiteStructuredData } from '@/lib/structured-data';
import dynamic from 'next/dynamic';

// Dynamically import chatbot and PWA wrapper
const IntelligentChatbot = dynamic(() => import('@/components/IntelligentChatbot'), {
  loading: () => null,
});

const PWAWrapper = dynamic(() => import('@/components/PWAWrapper'), {
  loading: () => null,
});

const CalendarTest = dynamic(() => import('@/components/CalendarTest'), {
  loading: () => null,
});

// More aggressive font optimization
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  // Only load weights we actually use
  weight: ["400", "500", "600", "700"],
});

const crimsonText = Crimson_Text({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: "Postino - Where Growth Meets AI Innovation | Marketing & Automation Agency",
  description: "Digital marketing agency based in Bingham, Nottinghamshire serving local businesses. Services: Website Design (£150-£3,750), AI Chatbots (£112.50-£2,250), Local SEO (£60/month), Business Automation (£75-£3,000). Expert in B2B UX, LinkedIn marketing, zero-click search, AI automation. Call 0800 772 3291 for free consultation.",
  keywords: "marketing agency, AI automation, SME growth, Nottingham, digital marketing, business automation, B2B UX design, LinkedIn thought leadership, SEO strategy, zero-click search, content marketing, Total Search optimization, AI marketing automation, platform-agnostic development, client training, web development, conversion optimization, search strategy, data-driven storytelling, Bingham, Rushcliffe",
  authors: [{ name: "Martin", url: "https://postino.cc/about" }, { name: "Postino" }],
  creator: "Postino",
  publisher: "Postino",
  metadataBase: new URL("https://postino.cc"),
  alternates: {
    canonical: "https://postino.cc",
  },
  openGraph: {
    title: "Postino - Where Growth Meets AI Innovation",
    description: "Expert marketing strategies with cutting-edge AI automation to help SMEs grow smarter, faster, and more efficiently. Comprehensive thought leadership blog covering B2B UX, LinkedIn marketing, SEO strategy, AI automation, and more.",
    url: "https://postino.cc",
    siteName: "Postino",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Postino - Marketing & AI Automation Agency with Expert Blog Content",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Postino - Where Growth Meets AI Innovation",
    description: "Expert marketing strategies with cutting-edge AI automation to help SMEs grow smarter, faster, and more efficiently. Comprehensive thought leadership blog covering B2B UX, LinkedIn marketing, SEO strategy, AI automation, and more.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    'geo.region': 'GB-NTT',
    'geo.placename': 'Bingham, Nottinghamshire',
    'geo.position': '52.9518;-0.9515',
    'ICBM': '52.9518, -0.9515',
    'DC.title': 'Postino - Digital Marketing & AI Automation Agency',
    'DC.creator': 'Postino',
    'DC.subject': 'Digital Marketing, AI Automation, Local SEO, Web Design',
    'DC.description': 'Expert marketing strategies with AI automation for SME growth',
    'DC.publisher': 'Postino',
    'DC.language': 'en-GB',
    'article:author': 'Martin',
    'article:publisher': 'Postino',
  },
  verification: {
    google: "google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${crimsonText.variable}`}>
      <head>
        {/* Critical CSS - inline to prevent render blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            body {
              font-family: var(--font-inter), system-ui, arial, sans-serif;
              background: #ffffff;
              color: #111827;
              margin: 0;
              line-height: 1.5;
            }
            .hero-gradient {
              background: linear-gradient(135deg, #1e3a8a 0%, #047857 100%);
            }
            /* Prevent layout shifts */
            .morphing-container {
              min-height: clamp(300px, 25vw, 500px);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 2rem 0;
            }
            /* Optimize animations */
            .will-change-transform {
              will-change: transform, opacity;
            }
            @media (prefers-reduced-motion: reduce) {
              * { animation-duration: 0.01ms !important; }
            }
          `
        }} />

        {/* DNS prefetch only for critical resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Preconnect for critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />

        {/* PWA Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Postino" />
        <meta name="application-name" content="Postino" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#1e3a8a" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e3a8a" media="(prefers-color-scheme: dark)" />

        {/* Performance hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="antialiased min-h-screen bg-white text-gray-900">
        {children}

        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationStructuredData()),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteStructuredData()),
          }}
        />

        {/* Service Area Schema for Local Coverage */}
        <Script
          id="service-area-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ServiceArea",
              "name": "Postino Service Coverage",
              "description": "Digital marketing and AI automation services covering Nottinghamshire and East Midlands",
              "serviceLocation": [
                {
                  "@type": "Place",
                  "name": "Bingham, Nottinghamshire",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "52.9518",
                    "longitude": "-0.9515"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Rushcliffe, Nottinghamshire",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "52.9333",
                    "longitude": "-1.1333"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Nottingham, Nottinghamshire",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "52.9548",
                    "longitude": "-1.1581"
                  }
                }
              ]
            }),
          }}
        />

        {/* Global FAQ Schema for Zero-click & LLM Optimization */}
        <Script
          id="global-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Postino offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Postino offers digital marketing services including Website Design (£150-£3,750), AI Chatbot Development (£112.50-£2,250), Local SEO & Marketing (£60-£1,500/month), and Business Automation (£75-£3,000). We serve Bingham, Rushcliffe, and Nottinghamshire with 25% local discounts. All services include Google My Business optimization and local SEO."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does digital marketing cost with Postino?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Postino pricing starts with refundable deposits: Website Design £150, AI Chatbots £112.50, Local Marketing £60/month, Business Automation £75. Full projects range £750-£3,750. We offer 25% discounts for Bingham and Rushcliffe businesses. Payment plans available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Postino located and what areas do you serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Postino is based in Bingham, Nottinghamshire (1 Fisher Lane, NG13 8BQ). We serve Bingham, Rushcliffe, Nottingham, and surrounding Nottinghamshire areas. Local businesses receive priority service and special pricing. Call 0800 772 3291 for consultation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Postino different from other marketing agencies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Postino combines expert marketing with cutting-edge AI automation. We're locally based with deep community knowledge, offer client training for asset ownership, provide 25% local discounts, and specialize in B2B UX, LinkedIn marketing, and zero-click search optimization. Our AI-first approach delivers faster, smarter growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer AI automation services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Postino specializes in AI automation including 24/7 chatbots, automated appointment booking, customer follow-up sequences, business process automation, and predictive analytics. Our AI solutions integrate with existing systems and are tailored for local businesses."
                  }
                }
              ]
            }),
          }}
        />

        {/* Enhanced Speakable Content Schema */}
        <Script
          id="speakable-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".intro", ".summary", ".hero-text", ".cta-text"],
              "xpath": [
                "//h1",
                "//h2",
                "//*[@class='intro']",
                "//*[@class='summary']",
                "//*[@class='hero-text']",
                "//*[@class='cta-text']"
              ]
            }),
          }}
        />

        {/* GTM - Load after page content with reduced priority */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />

        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Intelligent Chatbot - Available on all pages */}
        <IntelligentChatbot />

        {/* Calendar Test Component - For development/testing only */}
        {process.env.NODE_ENV === 'development' && <CalendarTest />}

        {/* PWA Components */}
        <PWAWrapper />
      </body>
    </html>
  );
}
