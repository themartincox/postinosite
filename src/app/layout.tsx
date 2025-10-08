import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { getOrganizationStructuredData, getWebsiteStructuredData } from '@/lib/structured-data';
import { generateBusinessHoursSchema, generateContactPointSchema, generateLocalBusinessSchema } from '@/lib/seo-metadata';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';

// Dynamically import chatbot and PWA wrapper
// const IntelligentChatbot = dynamic(() => import('@/components/IntelligentChatbot'), {
//   loading: () => null,
// }); // Temporarily disabled for deployment

const PWAWrapper = dynamic(() => import('@/components/PWAWrapper'), {
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
  title: {
    template: '%s | Postino - AI-Enhanced Marketing Agency',
    default: 'Postino - Where Growth Meets AI Innovation | Marketing & Automation Agency'
  },
  description: "AI-enhanced marketing agency helping SMEs achieve measurable growth through expert strategies and automation. Nottingham local experts. Call 0800 772 3291.",
  keywords: "AI-enhanced marketing agency, intelligent automation, SME growth, Nottingham digital marketing, AI marketing automation, B2B UX design, LinkedIn thought leadership, SEO strategy optimization, zero-click search, content marketing, business automation, platform-agnostic development, client training, web development, conversion optimization, search strategy, data-driven storytelling, Bingham, Rushcliffe, East Midlands",
  authors: [{ name: "Martin", url: "https://postino.cc/about" }, { name: "Postino" }],
  creator: "Postino",
  publisher: "Postino",
  metadataBase: new URL("https://postino.cc"),
  alternates: {
    canonical: "https://postino.cc",
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
  openGraph: {
    title: "Postino - Where Growth Meets AI Innovation",
    description: "AI-enhanced marketing agency helping SMEs achieve measurable growth through expert strategies and intelligent automation. Serving Nottinghamshire with comprehensive digital marketing, AI chatbots, business automation, and strategic consulting.",
    url: "https://postino.cc",
    siteName: "Postino",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Postino - AI-Enhanced Marketing & Automation Agency | Nottinghamshire SME Growth Specialists",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PostinoAgency",
    creator: "@PostinoAgency",
    title: "Postino - AI-Enhanced Marketing Agency",
    description: "Helping SMEs achieve measurable growth through expert marketing strategies and intelligent automation. Based in Nottinghamshire. 🚀 AI-powered solutions for modern businesses.",
    images: ["/og-image.jpg"],
  },
  other: {
    'geo.region': 'GB-NTT',
    'geo.placename': 'Bingham, Nottinghamshire',
    'geo.position': '52.9518;-0.9515',
    'ICBM': '52.9518, -0.9515',
    'DC.title': 'Postino - AI-Enhanced Marketing & Automation Agency',
    'DC.creator': 'Postino',
    'DC.subject': 'AI-Enhanced Marketing, Intelligent Automation, Local SEO, Business Growth',
    'DC.description': 'AI-enhanced marketing strategies with intelligent automation for measurable SME growth',
    'DC.publisher': 'Postino',
    'DC.language': 'en-GB',
    'article:author': 'Martin',
    'article:publisher': 'Postino',
    'business:contact_data:locality': 'Bingham',
    'business:contact_data:region': 'Nottinghamshire',
    'business:contact_data:country_name': 'United Kingdom',
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
            /* Prevent layout shift for navigation */
            nav { min-height: 72px; }
            /* Optimize text rendering */
            body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
            /* Additional critical styles for layout stability */
            .max-w-7xl { max-width: 80rem; margin: 0 auto; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
            .text-center { text-align: center; }
            .grid { display: grid; }
            .flex { display: flex; }
            .hidden { display: none; }
            @media (min-width: 768px) {
              .md\\:flex { display: flex; }
              .md\\:hidden { display: none; }
              .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
              .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            }
            /* Prevent button layout shifts */
            button, .btn { min-height: 2.5rem; }
            /* Optimize images */
            img { max-width: 100%; height: auto; }
            /* Prevent font loading shifts */
            .font-heading { font-display: swap; }
            /* Critical button styles */
            .btn-primary {
              background: #ef4444;
              color: white;
              padding: 0.75rem 2rem;
              border-radius: 0.5rem;
              font-weight: 600;
              transition: all 0.2s ease;
            }
          `
        }} />

        {/* Essential resource hints for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//api.openweathermap.org" />
        <link rel="dns-prefetch" href="//scripts.simpleanalyticscdn.com" />

        {/* Preconnect for critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://scripts.simpleanalyticscdn.com" />

        {/* Preload critical assets */}
        <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Optimized favicon and app icons */}
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

        {/* Performance and accessibility hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="antialiased min-h-screen bg-white text-gray-900">
        <a className="skip-link" href="#main">Skip to content</a>
        {/* Desktop header */}
        <div className="desktop-only">
          <Header />
        </div>
        {/* Mobile navigation */}
        <div className="mobile-only">
          <MobileNav />
        </div>
        <main id="main">{children}</main>

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

        {/* Business Hours Schema */}
        <Script
          id="business-hours-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBusinessHoursSchema()),
          }}
        />

        {/* Contact Point Schema */}
        <Script
          id="contact-point-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateContactPointSchema()),
          }}
        />

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
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
        {process.env.NEXT_PUBLIC_GTM_ID && process.env.NEXT_PUBLIC_GTM_ID !== 'GTM-XXXXXXXX' && (
          <>
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

            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}

        {/* Chatbot temporarily disabled */}
        {/* <IntelligentChatbot /> */}

        <PWAWrapper />
      </body>
    </html>
  );
}
