import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { getOrganizationStructuredData, getWebsiteStructuredData } from '@/lib/structured-data';

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
  description: "Expert marketing strategies with cutting-edge AI automation to help SMEs grow smarter, faster, and more efficiently. Thought leadership in B2B UX, LinkedIn marketing, SEO strategy, zero-click search, content strategy, Total Search optimization, AI automation, platform-agnostic web development, and client empowerment. Based in Nottingham, serving UK businesses.",
  keywords: "marketing agency, AI automation, SME growth, Nottingham, digital marketing, business automation, B2B UX design, LinkedIn thought leadership, SEO strategy, zero-click search, content marketing, Total Search optimization, AI marketing automation, platform-agnostic development, client training, web development, conversion optimization, search strategy, data-driven storytelling",
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

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

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
      </body>
    </html>
  );
}
