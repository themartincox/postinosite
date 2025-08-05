import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Search,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  TrendingUp,
  Target,
  BarChart,
  Users,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Same-Day Local SEO Setup Nottingham | Instant Google Visibility | Postino",
  description: "Complete local SEO setup launched the same day for Nottingham businesses. Google My Business optimization, local keywords, citations, review management. £240/month, £60 refundable deposit. Serving City Centre, Hyson Green, Radford, Lenton, Beeston. Call 0800 772 3291 for immediate setup.",
  keywords: "same day local SEO Nottingham, instant SEO setup Nottingham, quick Google My Business Nottingham, emergency SEO Nottingham, fast local search optimization Nottingham, immediate Google visibility Nottingham, urgent SEO services Nottingham city centre",
  alternates: {
    canonical: 'https://postino.cc/nottingham/same-day-local-seo'
  },
  openGraph: {
    title: "Same-Day Local SEO Setup Nottingham | Postino",
    description: "Complete local SEO setup launched the same day for Nottingham businesses. Instant Google visibility and local search optimization.",
    url: 'https://postino.cc/nottingham/same-day-local-seo',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/nottingham-same-day-seo.jpg",
        width: 1200,
        height: 630,
        alt: "Same-Day Local SEO Setup in Nottingham - Postino",
      },
    ],
  },
};

const seoFeatures = [
  {
    title: "Google My Business Optimization",
    description: "Complete GMB profile setup with photos, descriptions, and keywords",
    icon: <MapPin className="h-6 w-6" />
  },
  {
    title: "Local Keyword Targeting",
    description: "Research and implement Nottingham-specific search terms",
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "Citation Building",
    description: "Submit to 20+ local directories and business listings",
    icon: <BarChart className="h-6 w-6" />
  },
  {
    title: "Review Management Setup",
    description: "Systems to encourage and manage customer reviews",
    icon: <Star className="h-6 w-6" />
  },
  {
    title: "Local Content Creation",
    description: "Nottingham-focused content to boost local relevance",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Monthly Reporting",
    description: "Track rankings, traffic, and local visibility improvements",
    icon: <TrendingUp className="h-6 w-6" />
  }
];

const sameDayProcess = [
  {
    step: "1",
    title: "Consultation & Setup",
    description: "30-minute call to understand your business and goals",
    time: "Morning"
  },
  {
    step: "2",
    title: "Keyword Research",
    description: "Identify best local search terms for your Nottingham business",
    time: "2 hours"
  },
  {
    step: "3",
    title: "GMB Optimization",
    description: "Complete Google My Business profile optimization",
    time: "3 hours"
  },
  {
    step: "4",
    title: "Citation Submission",
    description: "Submit to 20+ local directories and business listings",
    time: "4 hours"
  },
  {
    step: "5",
    title: "Go Live & Monitor",
    description: "Activate all systems and begin monitoring rankings",
    time: "End of day"
  }
];

const localSeoTiers = [
  {
    name: "Same-Day Starter",
    price: "£240/month",
    setup: "£60 deposit",
    description: "Essential local SEO for small Nottingham businesses",
    features: [
      "Google My Business optimization",
      "5 local keyword targets",
      "10 citation submissions",
      "Basic review management",
      "Monthly ranking reports",
      "Same-day activation"
    ],
    popular: false
  },
  {
    name: "Same-Day Professional",
    price: "£480/month",
    setup: "£120 deposit",
    description: "Comprehensive local SEO for established businesses",
    features: [
      "Advanced GMB optimization",
      "15 local keyword targets",
      "25 citation submissions",
      "Advanced review management",
      "Local content creation",
      "Competitor analysis",
      "Weekly progress reports",
      "Same-day activation"
    ],
    popular: true
  },
  {
    name: "Same-Day Domination",
    price: "£960/month",
    setup: "£240 deposit",
    description: "Complete local market domination strategy",
    features: [
      "Premium GMB optimization",
      "30+ local keyword targets",
      "50+ citation submissions",
      "Reputation management",
      "Local PR & outreach",
      "Video SEO optimization",
      "24/7 monitoring",
      "Weekly optimization calls",
      "Same-day activation"
    ],
    popular: false
  }
];

const nottinghamResults = [
  {
    business: "City Centre Solicitors",
    area: "City Centre",
    industry: "Legal Services",
    beforeRanking: "Not visible",
    afterRanking: "#2 for 'solicitor Nottingham'",
    timeframe: "3 weeks",
    leadIncrease: "+85%"
  },
  {
    business: "Hyson Green Medical Centre",
    area: "Hyson Green",
    industry: "Healthcare",
    beforeRanking: "Page 3 Google",
    afterRanking: "#1 for 'GP Hyson Green'",
    timeframe: "10 days",
    leadIncrease: "+150%"
  },
  {
    business: "Beeston Home Services",
    area: "Beeston",
    industry: "Home Services",
    beforeRanking: "No Google presence",
    afterRanking: "#1 for 'plumber Beeston'",
    timeframe: "2 weeks",
    leadIncrease: "+200%"
  }
];

const commonSearches = [
  "dentist Nottingham",
  "solicitor Nottingham",
  "accountant Nottingham",
  "plumber Nottingham",
  "electrician Nottingham",
  "garage Nottingham",
  "restaurant Nottingham",
  "beauty salon Nottingham",
  "gym Nottingham",
  "estate agent Nottingham"
];

export default function SameDayLocalSeoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green via-midnight-blue to-coral-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                <Clock className="h-4 w-4 mr-2" />
                Same-Day Activation Guaranteed
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Same-Day Local SEO
                <span className="block text-3xl lg:text-4xl text-coral-red">
                  Nottingham Businesses
                </span>
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-white/90">
                Complete local SEO setup launched the same day. Get found on Google immediately
                with our proven same-day optimization process for Nottingham businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
                  <Link href="#pricing">
                    Start Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-green font-semibold px-8 py-3">
                  <Link href="tel:08007723291">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 0800 772 3291
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>£60 refundable deposit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Same-day activation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Nottingham local expertise</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                Same-Day Process
              </h3>
              <div className="space-y-4">
                {sameDayProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-coral-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <p className="text-white/80 text-sm">{step.description}</p>
                      <Badge variant="outline" className="text-coral-red border-coral-red mt-1">
                        {step.time}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Same-Day SEO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Wait? Get Found Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every day your business isn't optimized for local search is potential revenue lost.
              Our same-day setup gets you visible immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-coral-red mb-2">73%</div>
                <div className="text-lg font-semibold text-midnight-blue mb-2">Of Local Searches</div>
                <p className="text-gray-600">Result in customers visiting or calling businesses within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-forest-green mb-2">46%</div>
                <div className="text-lg font-semibold text-midnight-blue mb-2">Of All Searches</div>
                <p className="text-gray-600">Are local searches - and this number is growing every year</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-midnight-blue mb-2">88%</div>
                <div className="text-lg font-semibold text-midnight-blue mb-2">Mobile Searches</div>
                <p className="text-gray-600">For local businesses result in calls or visits within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-6 text-center">
              Common Nottingham Searches We Target
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {commonSearches.map((search, index) => (
                <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <span className="text-sm font-medium text-gray-700">"{search}"</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Everything Included Same-Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive local SEO setup that normally takes weeks, completed in hours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="text-forest-green mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Same-Day Local SEO Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Monthly ongoing optimization with same-day activation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localSeoTiers.map((tier, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${tier.popular ? 'ring-2 ring-coral-red scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-coral-red text-white px-4 py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading text-midnight-blue">
                    {tier.name}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-midnight-blue">
                      {tier.price}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {tier.setup} setup fee
                    </div>
                  </div>
                  <CardDescription className="mt-4">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-forest-green mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className={`w-full ${tier.popular ? 'bg-coral-red hover:bg-coral-red/90' : 'bg-midnight-blue hover:bg-midnight-blue/90'}`}>
                    <Link href={`/contact?service=same-day-seo&tier=${tier.name.toLowerCase().replace(' ', '-')}`}>
                      Start Today <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Nottingham Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from same-day SEO implementations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nottinghamResults.map((result, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-forest-green border-forest-green">
                      {result.area}
                    </Badge>
                    <Badge variant="outline" className="text-coral-red border-coral-red">
                      {result.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {result.business}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Before:</h4>
                      <p className="text-sm text-gray-600">{result.beforeRanking}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">After:</h4>
                      <p className="text-sm font-semibold text-forest-green">{result.afterRanking}</p>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700">Timeframe:</h4>
                        <p className="text-sm text-gray-600">{result.timeframe}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700">Lead Increase:</h4>
                        <p className="text-sm font-semibold text-coral-red">{result.leadIncrease}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Get Found on Google Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Complete local SEO setup activated the same day. Start attracting local customers immediately
            with our proven optimization process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
              <Link href="#pricing">
                Choose Your Package <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-blue font-semibold px-8 py-3">
              <Link href="tel:08007723291">
                <Phone className="mr-2 h-5 w-5" />
                Call: 0800 772 3291
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Same-day activation</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Nottingham local experts</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span>Proven results</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />

      {/* Service Structured Data */}
      <Script
        id="same-day-seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Same-Day Local SEO Setup Nottingham",
            "description": "Complete local SEO setup launched the same day for Nottingham businesses. Google My Business optimization, local keywords, citations, review management.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Postino",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1 Fisher Lane",
                "addressLocality": "Bingham",
                "addressRegion": "Nottinghamshire",
                "postalCode": "NG13 8BQ",
                "addressCountry": "GB"
              },
              "telephone": "+44-800-772-3291"
            },
            "areaServed": {
              "@type": "City",
              "name": "Nottingham",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Nottinghamshire"
              }
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Same-Day Starter SEO",
                "price": "240",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "240",
                  "priceCurrency": "GBP",
                  "unitText": "monthly"
                },
                "description": "Essential local SEO with same-day activation"
              },
              {
                "@type": "Offer",
                "name": "Same-Day Professional SEO",
                "price": "480",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "480",
                  "priceCurrency": "GBP",
                  "unitText": "monthly"
                },
                "description": "Comprehensive local SEO with same-day activation"
              },
              {
                "@type": "Offer",
                "name": "Same-Day Domination SEO",
                "price": "960",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "960",
                  "priceCurrency": "GBP",
                  "unitText": "monthly"
                },
                "description": "Complete local market domination with same-day activation"
              }
            ],
            "serviceType": "Local SEO Optimization",
            "serviceOutput": "Enhanced Local Search Visibility",
            "hoursAvailable": "Mo-Fr 09:00-17:00"
          })
        }}
      />
    </div>
  );
}
