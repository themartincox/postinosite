import type { Metadata } from "next";

export interface SEOPageData {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  structuredData?: any;
}

const baseUrl = "https://postino.cc";

export function generateMetadata(pageData: SEOPageData): Metadata {
  const {
    title,
    description,
    keywords,
    canonicalPath,
    openGraphTitle,
    openGraphDescription,
    twitterTitle,
    twitterDescription,
  } = pageData;

  const fullUrl = `${baseUrl}${canonicalPath}`;

  return {
    title,
    description,
    keywords: keywords || "AI marketing, business automation, SME growth, Nottinghamshire, digital marketing",
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: openGraphTitle || title,
      description: openGraphDescription || description,
      url: fullUrl,
      siteName: "Postino",
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${title} - Postino AI-Enhanced Marketing Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@PostinoAgency",
      creator: "@PostinoAgency",
      title: twitterTitle || title,
      description: twitterDescription || description,
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
  };
}

// Pre-defined service page metadata
export const servicePageMetadata = {
  aiAutomation: {
    title: "AI Automation Services Nottingham",
    description: "Transform your Nottingham business with AI automation. Intelligent chatbots, predictive analytics, workflow automation & custom AI solutions. Serving SMEs across Nottinghamshire with 90% efficiency improvements.",
    keywords: "AI automation Nottingham, business automation Nottinghamshire, intelligent chatbots, predictive analytics East Midlands, workflow automation UK, AI agency Nottingham, machine learning solutions, process automation",
    canonicalPath: "/ai-automation",
  },
  growthMarketing: {
    title: "Growth Marketing Services Nottingham",
    description: "Strategic growth marketing for Nottinghamshire SMEs. SEO, content strategy, LinkedIn marketing, conversion optimization & data-driven campaigns. Expert B2B marketing agency delivering measurable results.",
    keywords: "growth marketing Nottingham, B2B marketing agency, SEO services Nottinghamshire, content strategy, LinkedIn marketing, conversion optimization, digital marketing East Midlands",
    canonicalPath: "/growth-marketing",
  },
  nottinghamAgency: {
    title: "Marketing Agency Nottingham",
    description: "Leading marketing agency in Nottingham specializing in AI-enhanced strategies for SME growth. Local expertise, cutting-edge automation, measurable results. Serving Bingham, Rushcliffe & surrounding areas.",
    keywords: "marketing agency Nottingham, digital marketing Nottinghamshire, local marketing agency, SME marketing specialists, Bingham marketing, Rushcliffe marketing agency",
    canonicalPath: "/nottingham-marketing-agency",
  },
  midlandsAutomation: {
    title: "AI Automation Midlands",
    description: "Premier AI automation services across the East Midlands. Intelligent chatbots, workflow automation, predictive analytics for growing businesses. Expert implementation with measurable ROI.",
    keywords: "AI automation Midlands, business automation East Midlands, workflow automation Leicester, intelligent systems Derby, AI solutions Nottingham",
    canonicalPath: "/midlands-ai-automation",
  },
};

// Location-specific metadata generator
export function generateLocationMetadata(
  location: string,
  service: string,
  description: string,
  keywords?: string
): SEOPageData {
  return {
    title: `${service} ${location}`,
    description,
    keywords: keywords || `${service.toLowerCase()}, ${location.toLowerCase()}, digital marketing, business automation`,
    canonicalPath: `/${location.toLowerCase().replace(/\s+/g, '-')}-${service.toLowerCase().replace(/\s+/g, '-')}`,
    openGraphTitle: `${service} ${location} | Postino`,
    openGraphDescription: description,
    twitterTitle: `${service} ${location} | Postino`,
    twitterDescription: description,
  };
}

// Schema.org structured data generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Postino",
    "alternateName": "Postino Marketing Agency",
    "description": "AI-enhanced marketing agency helping SMEs achieve measurable growth through expert strategies and intelligent automation.",
    "url": "https://postino.cc",
    "logo": "https://postino.cc/logo.png",
    "image": "https://postino.cc/og-image.jpg",
    "telephone": "0800 772 3291",
    "email": "hello@postino.cc",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Fisher Lane",
      "addressLocality": "Bingham",
      "addressRegion": "Nottinghamshire",
      "postalCode": "NG13 8BQ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.9518",
      "longitude": "-0.9515"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Nottingham"
      },
      {
        "@type": "City",
        "name": "Bingham"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Nottinghamshire"
      },
      {
        "@type": "AdministrativeArea",
        "name": "East Midlands"
      }
    ],
    "serviceType": [
      "AI Marketing Automation",
      "Business Process Automation",
      "Growth Marketing Strategy",
      "SEO Services",
      "Digital Marketing Consulting"
    ],
    "founder": {
      "@type": "Person",
      "name": "Martin",
      "jobTitle": "Founder & AI Marketing Strategist"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "£60-£3750"
  };
}

export function generateServiceSchema(serviceName: string, description: string, price?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Postino",
      "url": "https://postino.cc"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Nottinghamshire, UK"
    },
    "offers": price ? {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock"
    } : undefined
  };
}

// Business Hours and Contact Schema generators
export function generateBusinessHoursSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Postino",
    "alternateName": "Postino Marketing Agency",
    "url": "https://postino.cc",
    "telephone": "0800 772 3291",
    "email": "hello@postino.cc",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Fisher Lane",
      "addressLocality": "Bingham",
      "addressRegion": "Nottinghamshire",
      "postalCode": "NG13 8BQ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.9518",
      "longitude": "-0.9515"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "£60-£5000",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "Bank Transfer",
      "PayPal",
      "Stripe"
    ],
    "serviceType": [
      "Digital Marketing",
      "AI Automation",
      "SEO Services",
      "Website Design",
      "Business Automation"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Bingham"
      },
      {
        "@type": "City",
        "name": "Nottingham"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Nottinghamshire"
      },
      {
        "@type": "AdministrativeArea",
        "name": "East Midlands"
      }
    ]
  };
}

export function generateContactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "0800 772 3291",
    "email": "hello@postino.cc",
    "contactType": "Customer Service",
    "availableLanguage": ["English"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ]
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Postino",
    "image": "https://postino.cc/logo.png",
    "description": "AI-enhanced marketing agency helping SMEs achieve measurable growth through expert strategies and intelligent automation. Based in Bingham, Nottinghamshire.",
    "url": "https://postino.cc",
    "telephone": "0800 772 3291",
    "email": "hello@postino.cc",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Fisher Lane",
      "addressLocality": "Bingham",
      "addressRegion": "Nottinghamshire",
      "postalCode": "NG13 8BQ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.9518",
      "longitude": "-0.9515"
    },
    "hasMap": "https://www.google.com/maps/place/1+Fisher+Ln,+Bingham,+Nottingham+NG13+8BQ",
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "£60-£5000",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Martin",
      "jobTitle": "Founder & AI Marketing Strategist"
    },
    "sameAs": [
      "https://www.linkedin.com/company/postino-agency",
      "https://twitter.com/PostinoAgency"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation Services",
          "description": "Intelligent chatbots, workflow automation, and business process optimization"
        },
        "price": "112.50",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "unitText": "monthly"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Growth Marketing Services",
          "description": "SEO, content marketing, social media management, and conversion optimization"
        },
        "price": "997",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "unitText": "monthly"
        }
      }
    ]
  };
}
