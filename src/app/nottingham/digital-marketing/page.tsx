import type { Metadata } from "next";
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
  TrendingUp,
  Search,
  Mail,
  MapPin,
  Phone,
  Star,
  CheckCircle,
  MessageSquare,
  BarChart,
  Users,
  Globe,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Nottingham | ROI-Focused Marketing Agency | Postino",
  description: "Expert digital marketing services in Nottingham. SEO, PPC, social media, email marketing, content strategy. Measurable results for City Centre, Hyson Green, Radford, Lenton, Beeston businesses. From £497/month. Free audit: 0800 772 3291. Award-winning local agency.",
  keywords: "digital marketing Nottingham, marketing agency Nottingham, SEO Nottingham, PPC advertising Nottingham, social media marketing Nottingham, email marketing Nottingham, content marketing Nottingham, online marketing Nottingham city centre",
  alternates: {
    canonical: 'https://postino.cc/nottingham/digital-marketing'
  },
  openGraph: {
    title: "Digital Marketing Nottingham | ROI-Focused Agency | Postino",
    description: "Award-winning digital marketing services for Nottingham businesses. SEO, PPC, social media, email marketing with measurable ROI.",
    url: 'https://postino.cc/nottingham/digital-marketing',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/nottingham-digital-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services in Nottingham - Postino",
      },
    ],
  },
};

const marketingServices = [
  {
    title: "Search Engine Optimization",
    description: "Dominate Google search results and attract high-quality local traffic",
    icon: <Search className="h-8 w-8" />,
    features: [
      "Local SEO for Nottingham searches",
      "Keyword research & optimization",
      "Google My Business optimization",
      "Content marketing strategy",
      "Technical SEO improvements",
      "Monthly ranking reports"
    ],
    results: "Average 150% increase in organic traffic",
    investment: "From £497/month",
    timeline: "Results in 3-6 months"
  },
  {
    title: "Pay-Per-Click Advertising",
    description: "Instant visibility with targeted Google Ads that drive conversions",
    icon: <Target className="h-8 w-8" />,
    features: [
      "Google Ads management",
      "Bing Ads campaigns",
      "Local search advertising",
      "Conversion tracking setup",
      "Ad copy optimization",
      "Landing page recommendations"
    ],
    results: "Average 300% ROAS within 90 days",
    investment: "From £297/month + ad spend",
    timeline: "Results in 1-4 weeks"
  },
  {
    title: "Social Media Marketing",
    description: "Build brand awareness and engage customers across social platforms",
    icon: <MessageSquare className="h-8 w-8" />,
    features: [
      "Facebook & Instagram marketing",
      "LinkedIn business development",
      "Content creation & scheduling",
      "Community management",
      "Social advertising campaigns",
      "Performance analytics"
    ],
    results: "Average 250% increase in engagement",
    investment: "From £397/month",
    timeline: "Results in 2-8 weeks"
  },
  {
    title: "Email Marketing Automation",
    description: "Nurture leads and retain customers with strategic email campaigns",
    icon: <Mail className="h-8 w-8" />,
    features: [
      "Welcome sequence automation",
      "Customer journey mapping",
      "Segmentation & personalization",
      "Newsletter campaigns",
      "Abandoned cart recovery",
      "Performance optimization"
    ],
    results: "Average 400% ROI on email campaigns",
    investment: "From £197/month",
    timeline: "Results in 2-6 weeks"
  }
];

const marketingPackages = [
  {
    name: "Starter Marketing",
    price: "£497/month",
    description: "Essential digital marketing for small Nottingham businesses",
    services: ["Local SEO optimization", "Google My Business", "Basic social media", "Monthly reporting"],
    features: [
      "Keyword research & optimization",
      "Local directory submissions",
      "Google My Business optimization",
      "Basic Facebook & Instagram posts",
      "Monthly performance reports",
      "Email support"
    ],
    ideal: "Small businesses & startups",
    popular: false
  },
  {
    name: "Growth Marketing",
    price: "£997/month",
    description: "Comprehensive marketing strategy for growing businesses",
    services: ["Advanced SEO", "PPC management", "Social media marketing", "Email automation"],
    features: [
      "Advanced SEO & content strategy",
      "Google Ads management (up to £1k spend)",
      "Full social media management",
      "Email marketing automation",
      "Conversion tracking & analytics",
      "Bi-weekly strategy calls",
      "Priority support"
    ],
    ideal: "Established businesses",
    popular: true
  },
  {
    name: "Enterprise Marketing",
    price: "£1,997/month",
    description: "Complete digital marketing ecosystem for market leaders",
    services: ["Full-service marketing", "Advanced automation", "Dedicated account manager", "Custom strategy"],
    features: [
      "Multi-channel marketing strategy",
      "Advanced PPC management (unlimited spend)",
      "Premium content creation",
      "Marketing automation workflows",
      "Detailed analytics & insights",
      "Weekly strategy sessions",
      "Dedicated account manager",
      "24/7 support"
    ],
    ideal: "Large businesses & enterprises",
    popular: false
  }
];

const nottinghamResults = [
  {
    business: "Nottingham Legal Firm",
    industry: "Legal Services",
    area: "City Centre",
    challenge: "Low online visibility, few quality leads",
    strategy: "Local SEO + Google Ads + Content Marketing",
    results: [
      "400% increase in website traffic",
      "250% more qualified leads",
      "£180k additional revenue in 12 months"
    ],
    timeframe: "6 months"
  },
  {
    business: "Beeston Dental Practice",
    industry: "Healthcare",
    area: "Beeston",
    challenge: "Relying on word-of-mouth referrals only",
    strategy: "Local SEO + Social Media + Email Marketing",
    results: [
      "#1 ranking for 'dentist Beeston'",
      "300% increase in new patient bookings",
      "85% patient retention rate"
    ],
    timeframe: "4 months"
  },
  {
    business: "Radford Restaurant Group",
    industry: "Hospitality",
    area: "Radford",
    challenge: "Seasonal booking fluctuations",
    strategy: "Social Media + PPC + Email Automation",
    results: [
      "60% increase in online bookings",
      "40% growth in average order value",
      "Consistent bookings year-round"
    ],
    timeframe: "3 months"
  }
];

const marketingBenefits = [
  {
    title: "Measurable ROI",
    description: "Track every pound spent and measure real business impact",
    icon: <BarChart className="h-8 w-8" />,
    stat: "Average 350% ROI"
  },
  {
    title: "Local Expertise",
    description: "Deep understanding of Nottingham market and customer behavior",
    icon: <MapPin className="h-8 w-8" />,
    stat: "5+ years local experience"
  },
  {
    title: "Qualified Leads",
    description: "Attract customers who are ready to buy your products or services",
    icon: <Users className="h-8 w-8" />,
    stat: "75% lead quality improvement"
  },
  {
    title: "Multi-Channel Approach",
    description: "Coordinated marketing across all digital touchpoints",
    icon: <Globe className="h-8 w-8" />,
    stat: "5-8 marketing channels"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Digital Marketing Audit",
    description: "Comprehensive analysis of your current marketing efforts and opportunities",
    duration: "1 week",
    deliverables: ["Competitive analysis", "SEO audit", "Marketing recommendations"]
  },
  {
    step: "2",
    title: "Strategy Development",
    description: "Custom marketing strategy tailored to your business goals and budget",
    duration: "1 week",
    deliverables: ["Marketing strategy", "Campaign plans", "Success metrics"]
  },
  {
    step: "3",
    title: "Campaign Launch",
    description: "Implement marketing campaigns across chosen channels",
    duration: "2-4 weeks",
    deliverables: ["Live campaigns", "Tracking setup", "Initial optimizations"]
  },
  {
    step: "4",
    title: "Optimization & Growth",
    description: "Continuous monitoring, testing, and improvement for maximum ROI",
    duration: "Ongoing",
    deliverables: ["Monthly reports", "Strategy adjustments", "New opportunities"]
  }
];

export default function NottinghamDigitalMarketingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header is global; Navigation removed */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue via-forest-green to-coral-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              ROI-Focused Digital Marketing
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Digital Marketing
              <span className="block text-3xl lg:text-5xl text-coral-red">
                Nottingham
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Expert digital marketing that drives measurable results for Nottingham businesses.
              SEO, PPC, social media, and email marketing with guaranteed ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
                <Link href="#packages">
                  View Marketing Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-blue font-semibold px-8 py-3">
                <Link href="tel:08007723291">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Marketing Audit
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>Guaranteed ROI</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>Local Nottingham expertise</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>Transparent reporting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Nottingham Businesses Choose Our Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Results-driven digital marketing that delivers measurable growth for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="text-forest-green mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue mb-2">
                    {benefit.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-coral-red mb-2">
                    {benefit.stat}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Complete Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your Nottingham business needs to dominate online
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-midnight-blue">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Typical Results:</span>
                          <span className="text-sm font-semibold text-forest-green">{service.results}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Investment:</span>
                          <span className="text-lg font-semibold text-coral-red">{service.investment}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Timeline:</span>
                          <span className="text-sm text-gray-600">{service.timeline}</span>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="w-full mt-4 bg-midnight-blue hover:bg-midnight-blue/90 text-white"
                      >
                        <Link href={`/contact?service=digital-marketing&focus=${service.title.toLowerCase().replace(' ', '-')}`}>
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Nottingham Marketing Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our digital marketing campaigns
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
                      {result.timeframe}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {result.business}
                  </CardTitle>
                  <CardDescription className="text-midnight-blue font-semibold">
                    {result.industry}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-600">{result.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Strategy:</h4>
                      <p className="text-sm text-coral-red font-medium">{result.strategy}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {result.results.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-forest-green font-medium flex items-start">
                            <CheckCircle className="h-3 w-3 mt-1 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our Digital Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodology that delivers consistent results for Nottingham businesses
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-coral-red text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg text-midnight-blue">
                    {step.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{step.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 mb-1">Deliverables:</h4>
                    <ul className="space-y-1">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-xs text-gray-600">
                          • {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Digital Marketing Packages
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive marketing solutions designed for every business size
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketingPackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-coral-red scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-coral-red text-white px-4 py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading text-midnight-blue">
                    {pkg.name}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-midnight-blue">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {pkg.ideal}
                    </div>
                  </div>
                  <CardDescription className="mt-4">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Core Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pkg.services.map((service, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button asChild className={`w-full ${pkg.popular ? 'bg-coral-red hover:bg-coral-red/90' : 'bg-midnight-blue hover:bg-midnight-blue/90'}`}>
                      <Link href={`/contact?service=digital-marketing&package=${pkg.name.toLowerCase().replace(' ', '-')}`}>
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
            Ready to Dominate Nottingham's Digital Market?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get your free digital marketing audit and discover exactly how we can
            grow your business online. No obligation, just actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
              <Link href="/contact?service=digital-marketing-audit">
                Get Free Marketing Audit <ArrowRight className="ml-2 h-5 w-5" />
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
              <TrendingUp className="h-4 w-4 mr-2" />
              <span>Guaranteed ROI</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Local Nottingham experts</span>
            </div>
            <div className="flex items-center">
              <BarChart className="h-4 w-4 mr-2" />
              <span>Transparent reporting</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />

      {/* Service Structured Data */}
      <Script
        id="nottingham-digital-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Marketing Services Nottingham",
            "description": "Expert digital marketing services in Nottingham. SEO, PPC, social media, email marketing, content strategy with measurable ROI for Nottingham businesses.",
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
                "name": "Starter Marketing Package",
                "price": "497",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "497",
                  "priceCurrency": "GBP",
                  "unitText": "monthly"
                },
                "description": "Essential digital marketing for small Nottingham businesses"
              },
              {
                "@type": "Offer",
                "name": "Growth Marketing Package",
                "price": "997",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "997",
                  "priceCurrency": "GBP",
                  "unitText": "monthly"
                },
                "description": "Comprehensive marketing strategy for growing businesses"
              },
              {
                "@type": "Offer",
                "name": "Enterprise Marketing Package",
                "price": "1997",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "1997",
                  "priceCurrency": "GBP",
                  "unitText": "monthly"
                },
                "description": "Complete digital marketing ecosystem for market leaders"
              }
            ],
            "serviceType": "Digital Marketing Services",
            "serviceOutput": "Increased Online Visibility and Lead Generation",
            "hoursAvailable": "Mo-Fr 09:00-17:00"
          })
        }}
      />
    </div>
  );
}
