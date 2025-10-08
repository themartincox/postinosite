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
  Clock,
  MapPin,
  Phone,
  Star,
  CheckCircle,
  Globe,
  Bot,
  Zap,
  Search,
  Target,
  Users,
  TrendingUp,
  BarChart,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nottingham Business Services | Quick Turnaround Specialists | Postino",
  description: "Complete business services for Nottingham companies. 24-72 hour turnaround on websites, SEO, chatbots, and automation. Express website design, same-day local SEO, AI chatbot setup, business automation. Based in Bingham, serving City Centre, Hyson Green, Radford, Lenton, Beeston. Call 0800 772 3291.",
  keywords: "Nottingham business services, quick turnaround services Nottingham, express website design Nottingham, same day SEO Nottingham, AI chatbot Nottingham, business automation Nottingham, 24 hour delivery Nottingham, fast website Nottingham city centre",
  alternates: {
    canonical: 'https://postino.cc/nottingham/services'
  },
  openGraph: {
    title: "Nottingham Business Services | Quick Turnaround Specialists | Postino",
    description: "Complete business services for Nottingham companies with 24-72 hour turnaround. Express websites, same-day SEO, AI chatbots, and business automation.",
    url: 'https://postino.cc/nottingham/services',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/nottingham-business-services.jpg",
        width: 1200,
        height: 630,
        alt: "Nottingham Business Services - Quick Turnaround Specialists",
      },
    ],
  },
};

const coreServices = [
  {
    id: "express-website-design",
    title: "Express Website Design",
    subtitle: "48-Hour Website Delivery",
    description: "Professional websites designed and launched within 48 hours",
    icon: <Globe className="h-8 w-8" />,
    timeframe: "48 hours",
    priceFrom: "£997",
    deposit: "£250",
    features: [
      "Professional responsive design",
      "Mobile-first development",
      "SEO optimization included",
      "Content management system",
      "SSL certificate & hosting",
      "Social media integration"
    ],
    benefits: [
      "Get online immediately",
      "Professional credibility",
      "Mobile-friendly design",
      "Search engine ready"
    ],
    perfectFor: "New businesses, urgent launches, website redesigns",
    link: "/nottingham/express-website-design",
    color: "bg-blue-500"
  },
  {
    id: "ai-chatbot-setup",
    title: "AI Chatbot Setup",
    subtitle: "24-Hour Chatbot Deployment",
    description: "Intelligent chatbots that handle customers 24/7 automatically",
    icon: <Bot className="h-8 w-8" />,
    timeframe: "24 hours",
    priceFrom: "£450",
    deposit: "£112.50",
    features: [
      "Natural language processing",
      "Lead qualification system",
      "Appointment booking integration",
      "Multi-platform deployment",
      "Conversation analytics",
      "Custom personality design"
    ],
    benefits: [
      "24/7 customer service",
      "Automatic lead capture",
      "Reduced support workload",
      "Instant customer responses"
    ],
    perfectFor: "Service businesses, e-commerce, customer support teams",
    link: "/nottingham/ai-chatbot-setup",
    color: "bg-purple-500"
  },
  {
    id: "same-day-local-seo",
    title: "Same-Day Local SEO",
    subtitle: "Same-Day SEO Activation",
    description: "Complete local SEO setup activated the same day you sign up",
    icon: <Search className="h-8 w-8" />,
    timeframe: "Same day",
    priceFrom: "£240",
    deposit: "£60",
    features: [
      "Google My Business optimization",
      "Local keyword targeting",
      "Citation building (20+ directories)",
      "Review management setup",
      "Local content creation",
      "Monthly ranking reports"
    ],
    benefits: [
      "Immediate Google visibility",
      "More local customers",
      "Higher search rankings",
      "Increased website traffic"
    ],
    perfectFor: "Local businesses, service areas, retail stores",
    link: "/nottingham/same-day-local-seo",
    color: "bg-green-500"
  },
  {
    id: "business-automation",
    title: "Business Automation",
    subtitle: "72-Hour Workflow Setup",
    description: "Custom automation workflows implemented within 72 hours",
    icon: <Zap className="h-8 w-8" />,
    timeframe: "72 hours",
    priceFrom: "£1,200",
    deposit: "£300",
    features: [
      "Email automation sequences",
      "CRM integration & setup",
      "Customer journey mapping",
      "Automated follow-ups",
      "Performance analytics dashboard",
      "Staff training included"
    ],
    benefits: [
      "Save 20+ hours per week",
      "Never miss follow-ups",
      "Improve conversion rates",
      "Streamline operations"
    ],
    perfectFor: "Growing businesses, sales teams, service providers",
    link: "/nottingham/business-automation",
    color: "bg-orange-500"
  }
];

const serviceComparison = [
  {
    feature: "Delivery Time",
    values: ["48 hours", "24 hours", "Same day", "72 hours"]
  },
  {
    feature: "Starting Price",
    values: ["£997", "£450", "£240/month", "£1,200"]
  },
  {
    feature: "Refundable Deposit",
    values: ["£250", "£112.50", "£60", "£300"]
  },
  {
    feature: "Best For",
    values: ["New websites", "Customer service", "Local visibility", "Process automation"]
  },
  {
    feature: "Main Benefit",
    values: ["Professional presence", "24/7 support", "Google rankings", "Time savings"]
  },
  {
    feature: "Ongoing Cost",
    values: ["Hosting only", "Monthly fee", "Monthly fee", "One-time setup"]
  }
];

const whyChooseUs = [
  {
    title: "Ultra-Fast Delivery",
    description: "24-72 hour turnaround times that get you results immediately",
    icon: <Clock className="h-6 w-6" />,
    stat: "24-72 hours"
  },
  {
    title: "Local Nottingham Experts",
    description: "Based in Bingham, we understand the local market and customers",
    icon: <MapPin className="h-6 w-6" />,
    stat: "5+ years local"
  },
  {
    title: "Proven Results",
    description: "Hundreds of successful projects for Nottingham businesses",
    icon: <TrendingUp className="h-6 w-6" />,
    stat: "300+ projects"
  },
  {
    title: "Risk-Free Trial",
    description: "Refundable deposits mean you can try our services risk-free",
    icon: <CheckCircle className="h-6 w-6" />,
    stat: "100% refundable"
  }
];

const businessSizes = [
  {
    size: "Startups & New Businesses",
    description: "Getting online and establishing credibility quickly",
    recommendedServices: ["Express Website Design", "Same-Day Local SEO"],
    investment: "From £1,237",
    timeframe: "48 hours total"
  },
  {
    size: "Small Local Businesses",
    description: "Improving customer service and local visibility",
    recommendedServices: ["AI Chatbot Setup", "Same-Day Local SEO"],
    investment: "From £690",
    timeframe: "24-48 hours"
  },
  {
    size: "Growing Businesses",
    description: "Scaling operations and automating processes",
    recommendedServices: ["Business Automation", "AI Chatbot Setup"],
    investment: "From £1,650",
    timeframe: "72 hours total"
  },
  {
    size: "Established Companies",
    description: "Complete digital transformation package",
    recommendedServices: ["All 4 Services"],
    investment: "From £2,887",
    timeframe: "72 hours total"
  }
];

export default function NottinghamServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header is global; Navigation removed */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue via-forest-green to-coral-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              <Clock className="h-4 w-4 mr-2" />
              Quick Turnaround Specialists
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Nottingham Business Services
              <span className="block text-3xl lg:text-4xl text-coral-red">
                24-72 Hour Delivery
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Complete business solutions delivered at lightning speed. From websites to automation,
              we help Nottingham businesses grow faster with our express service offerings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
                <Link href="#services">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-blue font-semibold px-8 py-3">
                <Link href="tel:08007723291">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 0800 772 3291
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>Refundable deposits</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>Local Nottingham team</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>Guaranteed delivery times</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our Core Nottingham Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four essential services designed to transform your business in record time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={service.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 ${service.color}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-white`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-midnight-blue">
                          {service.title}
                        </CardTitle>
                        <p className="text-sm font-semibold text-coral-red">{service.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-forest-green border-forest-green mb-1">
                        {service.timeframe}
                      </Badge>
                      <p className="text-lg font-bold text-midnight-blue">{service.priceFrom}</p>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">What's Included:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Check className="h-3 w-3 text-forest-green mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      {service.features.length > 4 && (
                        <p className="text-xs text-gray-500 mt-1">+ {service.features.length - 4} more features</p>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <p className="text-sm text-gray-500">Perfect For:</p>
                          <p className="text-sm font-medium text-gray-700">{service.perfectFor}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Deposit:</p>
                          <p className="text-sm font-medium text-coral-red">{service.deposit} (refundable)</p>
                        </div>
                      </div>
                      <Button asChild className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white">
                        <Link href={service.link}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Service Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Service Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Compare our core services at a glance
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-700">Feature</th>
                    {coreServices.map(service => (
                      <th key={service.id} className="text-center p-4 font-semibold text-midnight-blue min-w-[150px]">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 ${service.color} rounded-lg flex items-center justify-center text-white mb-2`}>
                            {service.icon}
                          </div>
                          <div className="text-sm">{service.title}</div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {serviceComparison.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4 font-medium text-gray-700">{row.feature}</td>
                      {row.values.map((value, idx) => (
                        <td key={idx} className="p-4 text-center text-gray-600">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Business Size Recommendations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Recommended Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right combination of services for your business size and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessSizes.map((package_, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-midnight-blue">
                    {package_.size}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {package_.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Recommended Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {package_.recommendedServices.map((service, idx) => (
                          <Badge key={idx} variant="outline" className="text-coral-red border-coral-red">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Total Investment:</p>
                        <p className="text-lg font-bold text-forest-green">{package_.investment}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Delivery Time:</p>
                        <p className="text-lg font-bold text-midnight-blue">{package_.timeframe}</p>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-coral-red hover:bg-coral-red/90 text-white">
                      <Link href="/contact?package={package_.size.toLowerCase().replace(' ', '-')}">
                        Get This Package <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Nottingham Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              The advantages that set us apart from other agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="text-forest-green mb-4 flex justify-center">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue mb-2">
                    {reason.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-coral-red mb-2">
                    {reason.stat}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
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
            Ready to Transform Your Nottingham Business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Choose from our express services or get a custom package designed for your specific needs.
            All with guaranteed delivery times and refundable deposits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
              <Link href="/contact?source=services-overview">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
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
              <span>24-72 hour delivery</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Local Nottingham experts</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Risk-free deposits</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />

      {/* Services Overview Structured Data */}
      <Script
        id="nottingham-services-overview-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Nottingham Business Services",
            "description": "Complete business services for Nottingham companies with 24-72 hour turnaround. Express websites, same-day SEO, AI chatbots, and business automation.",
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Nottingham Business Services",
              "itemListElement": coreServices.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title
                },
                "price": service.priceFrom.replace('£', ''),
                "priceCurrency": "GBP",
                "availability": "https://schema.org/InStock"
              }))
            },
            "serviceType": [
              "Web Design",
              "AI Chatbot Development",
              "Local SEO",
              "Business Process Automation"
            ],
            "hoursAvailable": "Mo-Fr 09:00-17:00"
          })
        }}
      />
    </div>
  );
}
