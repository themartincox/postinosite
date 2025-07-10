export interface BlogPostStructuredDataProps {
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  slug: string;
  tags?: string[];
  readTime?: number;
}

export interface LocalBusinessStructuredDataProps {
  name: string;
  area: 'bingham' | 'rushcliffe' | 'nottingham';
  services: string[];
}

export interface FAQStructuredDataProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface HowToStructuredDataProps {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    url?: string;
  }>;
}

export interface ServiceStructuredDataProps {
  name: string;
  description: string;
  area: string;
  price: string;
  provider: string;
  features: string[];
}

// Organization structured data for Postino - Enhanced for LLM/Zero-click
export function getOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Postino",
    "alternateName": ["Postino Marketing", "Postino Digital Marketing", "Postino AI Automation"],
    "description": "Expert marketing strategies with cutting-edge AI automation to help SMEs grow smarter, faster, and more efficiently. Specializing in local SEO, web design, chatbots, and business automation.",
    "url": "https://postino.cc",
    "logo": {
      "@type": "ImageObject",
      "url": "https://postino.cc/images/postino-logo.png",
      "width": 400,
      "height": 400
    },
    "image": "https://postino.cc/images/postino-hero.jpg",
    "sameAs": [
      "https://www.linkedin.com/company/postino-marketing"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+44-800-772-3291",
      "contactType": "customer service",
      "areaServed": ["GB", "Nottinghamshire", "East Midlands", "Bingham", "Rushcliffe"],
      "availableLanguage": "English",
      "contactOption": ["TollFree", "HearingImpairedSupported"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    }],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Fisher Lane",
      "addressLocality": "Bingham",
      "addressRegion": "Nottinghamshire",
      "postalCode": "NG13 8BQ",
      "addressCountry": "GB"
    },
    "foundingDate": "2023",
    "numberOfEmployees": "2-10",
    "slogan": "Where Growth Meets AI Innovation",
    "keywords": "digital marketing, AI automation, local SEO, web design, chatbots, business automation, marketing agency Nottingham, Bingham marketing, Rushcliffe marketing",
    "knowsAbout": [
      "Digital Marketing",
      "AI Automation",
      "Local SEO Services",
      "Professional Web Design",
      "Chatbot Development",
      "Business Automation",
      "Content Strategy",
      "Social Media Marketing",
      "Google My Business Optimization",
      "Marketing Analytics"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing Services",
          "description": "Comprehensive digital marketing solutions for local businesses"
        },
        "price": "150-3750",
        "priceCurrency": "GBP"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation Solutions",
          "description": "Custom AI chatbots and business automation systems"
        },
        "price": "75-3000",
        "priceCurrency": "GBP"
      }
    ],
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "52.9518",
          "longitude": "-0.9515"
        },
        "geoRadius": "50000"
      }
    ],
    "hasCredential": [
      "Google Partner",
      "Digital Marketing Certified",
      "AI Technology Specialist"
    ]
  };
}

// Website structured data - Enhanced for better AI understanding
export function getWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Postino",
    "alternateName": "Postino Marketing & AI Automation",
    "description": "Expert marketing strategies with cutting-edge AI automation to help SMEs grow smarter, faster, and more efficiently. Serving Bingham, Rushcliffe, and Nottinghamshire.",
    "url": "https://postino.cc",
    "inLanguage": "en-GB",
    "keywords": "marketing agency, digital marketing, AI automation, local SEO, web design, Nottingham, Bingham, Rushcliffe",
    "about": [
      {
        "@type": "Thing",
        "name": "Digital Marketing",
        "description": "Comprehensive digital marketing services for small and medium enterprises"
      },
      {
        "@type": "Thing",
        "name": "AI Automation",
        "description": "Cutting-edge AI automation solutions to streamline business processes"
      },
      {
        "@type": "Thing",
        "name": "Local SEO",
        "description": "Local search engine optimization for better visibility in local markets"
      }
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://postino.cc/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Postino",
      "url": "https://postino.cc"
    },
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://postino.cc/#organization"
    }
  };
}

// FAQ structured data for zero-click optimization
export function getFAQStructuredData({ questions }: FAQStructuredDataProps) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// How-to structured data for step-by-step guides
export function getHowToStructuredData({ name, description, steps }: HowToStructuredDataProps) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url
    }))
  };
}

// Enhanced service structured data for better AI understanding
export function getEnhancedServiceStructuredData({ name, description, area, price, provider, features }: ServiceStructuredDataProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider,
      "@id": `https://postino.cc/${area}#localbusiness`
    },
    "areaServed": {
      "@type": "Place",
      "name": `${area.charAt(0).toUpperCase() + area.slice(1)}, Nottinghamshire, UK`
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
    },
    "category": "Digital Marketing Services",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Small and Medium Enterprises"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${name} Features`,
      "itemListElement": features.map((feature, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    },
    "serviceType": name,
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  };
}

// Local business structured data for area-specific pages - Enhanced
export function getLocalBusinessStructuredData({ name, area, services }: LocalBusinessStructuredDataProps) {
  const coordinates: Record<string, { lat: string; lng: string }> = {
    bingham: { lat: "52.9518", lng: "-0.9515" },
    rushcliffe: { lat: "52.9333", lng: "-1.1333" },
    nottingham: { lat: "52.9548", lng: "-1.1581" }
  };

  const areaInfo = {
    bingham: {
      locality: "Bingham",
      region: "Nottinghamshire",
      postalCode: "NG13",
      areaServed: "Bingham, Nottinghamshire",
      population: "9000"
    },
    rushcliffe: {
      locality: "West Bridgford",
      region: "Nottinghamshire",
      postalCode: "NG2",
      areaServed: "Rushcliffe, Nottinghamshire",
      population: "120000"
    },
    nottingham: {
      locality: "Nottingham",
      region: "Nottinghamshire",
      postalCode: "NG1",
      areaServed: "Nottingham, Nottinghamshire",
      population: "330000"
    }
  };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://postino.cc/${area}#localbusiness`,
    "name": name,
    "description": `Professional digital marketing and AI automation services for businesses in ${areaInfo[area].areaServed}. Specializing in local SEO, web design, chatbots, and business automation.`,
    "url": `https://postino.cc/${area}`,
    "telephone": "+44-800-772-3291",
    "email": "hello@postino.cc",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": areaInfo[area].locality,
      "addressRegion": areaInfo[area].region,
      "postalCode": areaInfo[area].postalCode,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates[area].lat,
      "longitude": coordinates[area].lng
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "££",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "GBP",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${name} Services`,
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "provider": {
            "@type": "LocalBusiness",
            "name": name
          },
          "areaServed": areaInfo[area].areaServed
        }
      }))
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": coordinates[area].lat,
        "longitude": coordinates[area].lng
      },
      "geoRadius": "25000"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Postino",
      "url": "https://postino.cc"
    },
    "knowsAbout": [
      "Digital Marketing",
      "Local SEO",
      "Web Design",
      "AI Automation",
      "Chatbot Development",
      "Business Automation",
      `${areaInfo[area].locality} Business Marketing`
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "23"
    }
  };
}

// Blog post structured data - Enhanced for LLM optimization
export function getBlogPostStructuredData({
  title,
  description,
  publishedAt,
  modifiedAt,
  author,
  slug,
  tags = [],
  readTime = 5
}: BlogPostStructuredDataProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": `https://postino.cc/images/blog/${slug}-og.jpg`,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://postino.cc/about",
      "knowsAbout": [
        "Digital Marketing",
        "AI Automation",
        "SEO Strategy",
        "Content Marketing",
        "Business Growth"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Postino",
      "logo": {
        "@type": "ImageObject",
        "url": "https://postino.cc/images/postino-logo.png"
      }
    },
    "datePublished": publishedAt,
    "dateModified": modifiedAt || publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://postino.cc/blog/${slug}`
    },
    "keywords": tags.join(", "),
    "wordCount": readTime * 200,
    "timeRequired": `PT${readTime}M`,
    "inLanguage": "en-GB",
    "isAccessibleForFree": true,
    "genre": ["Digital Marketing", "Business Strategy", "Technology"],
    "about": tags.map(tag => ({
      "@type": "Thing",
      "name": tag
    })),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".intro", ".summary"]
    }
  };
}

// Breadcrumb structured data for better navigation understanding
export function getBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

// Service area structured data for local coverage
export function getServiceAreaStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ServiceArea",
    "name": "Postino Service Coverage",
    "description": "Digital marketing and AI automation services covering Nottinghamshire and East Midlands",
    "geoWithin": {
      "@type": "GeoShape",
      "description": "Service area covering Bingham, Rushcliffe, Nottingham, and surrounding areas in Nottinghamshire"
    },
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
  };
}
