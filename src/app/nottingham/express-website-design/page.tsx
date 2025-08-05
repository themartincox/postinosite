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
  Globe,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Monitor,
  Smartphone,
  Search,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "48-Hour Express Website Design Nottingham | Same Week Launch | Postino",
  description: "Professional website design and launch within 48 hours for Nottingham businesses. Mobile-responsive, SEO-optimized, contact forms included. From £750, £150 refundable deposit. Serving City Centre, Hyson Green, Radford, Lenton, Beeston. Call 0800 772 3291 for immediate start.",
  keywords: "48 hour website design Nottingham, express web design Nottingham, quick website launch Nottingham, same week website Nottingham, emergency web design Nottingham, fast website development Nottingham, urgent website design Nottingham city centre",
  alternates: {
    canonical: 'https://postino.cc/nottingham/express-website-design'
  },
  openGraph: {
    title: "48-Hour Express Website Design Nottingham | Postino",
    description: "Professional website designed, built and launched within 48 hours for Nottingham businesses. SEO-optimized and mobile-responsive.",
    url: 'https://postino.cc/nottingham/express-website-design',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/nottingham-express-website-design.jpg",
        width: 1200,
        height: 630,
        alt: "48-Hour Express Website Design in Nottingham - Postino",
      },
    ],
  },
};

const websiteFeatures = [
  {
    title: "Mobile-Responsive Design",
    description: "Looks perfect on all devices - phone, tablet, desktop",
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    title: "SEO-Optimized Content",
    description: "Built to rank well in Google search results",
    icon: <Search className="h-6 w-6" />
  },
  {
    title: "Contact Forms & Booking",
    description: "Capture leads with professional contact forms",
    icon: <Mail className="h-6 w-6" />
  },
  {
    title: "Free SSL Certificate",
    description: "Secure website with HTTPS encryption",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Google My Business Integration",
    description: "Connected to your local business listing",
    icon: <MapPin className="h-6 w-6" />
  },
  {
    title: "1-Year Hosting Included",
    description: "Fast, reliable hosting for 12 months",
    icon: <Globe className="h-6 w-6" />
  }
];

const processSteps = [
  {
    step: "1",
    title: "Brief & Deposit",
    description: "30-minute consultation call, £150 refundable deposit",
    time: "Same day"
  },
  {
    step: "2",
    title: "Design & Build",
    description: "Professional design and development begins immediately",
    time: "24 hours"
  },
  {
    step: "3",
    title: "Review & Revisions",
    description: "You review the site and request any changes needed",
    time: "12 hours"
  },
  {
    step: "4",
    title: "Launch & Training",
    description: "Site goes live, you get admin training and documentation",
    time: "12 hours"
  }
];

const pricingTiers = [
  {
    name: "Express Starter",
    price: "£750",
    deposit: "£150",
    description: "Perfect for small Nottingham businesses needing an online presence fast",
    features: [
      "5-page professional website",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO optimization",
      "1-year hosting included",
      "48-hour delivery guarantee"
    ],
    popular: false
  },
  {
    name: "Express Professional",
    price: "£1,500",
    deposit: "£300",
    description: "Ideal for established Nottingham businesses requiring more features",
    features: [
      "10-page professional website",
      "Advanced mobile optimization",
      "Multiple contact forms",
      "Advanced SEO setup",
      "Google My Business integration",
      "Online booking system",
      "Analytics dashboard",
      "48-hour delivery guarantee"
    ],
    popular: true
  },
  {
    name: "Express E-commerce",
    price: "£2,500",
    deposit: "£500",
    description: "Complete online store for Nottingham retailers and service providers",
    features: [
      "Full e-commerce website",
      "Product catalog (up to 50 items)",
      "Payment processing setup",
      "Inventory management",
      "Customer accounts",
      "Mobile shopping optimization",
      "SEO for product pages",
      "48-hour delivery guarantee"
    ],
    popular: false
  }
];

const nottinghamCaseStudies = [
  {
    business: "Radford Coffee Co.",
    area: "Radford",
    industry: "Hospitality",
    challenge: "Needed website before weekend opening",
    solution: "Express website with online ordering in 36 hours",
    result: "£2,400 in online orders first week"
  },
  {
    business: "Beeston Dental Practice",
    area: "Beeston",
    industry: "Healthcare",
    challenge: "Old website crashed, losing patient bookings",
    solution: "Emergency website rebuild in 42 hours",
    result: "Online bookings restored, 40% increase in appointments"
  },
  {
    business: "City Centre Accountants",
    area: "City Centre",
    industry: "Professional Services",
    challenge: "Needed professional site for client presentations",
    solution: "Express professional website in 48 hours",
    result: "Won 3 new clients using website in first month"
  }
];

export default function ExpressWebsiteDesignPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue via-forest-green to-coral-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                <Clock className="h-4 w-4 mr-2" />
                48-Hour Delivery Guaranteed
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Express Website Design
                <span className="block text-3xl lg:text-4xl text-coral-red">
                  Nottingham Businesses
                </span>
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-white/90">
                Professional website designed, built and launched within 48 hours.
                Perfect for Nottingham businesses that need an online presence fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
                  <Link href="#pricing">
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

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>£150 refundable deposit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>48-hour guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Nottingham local team</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                48-Hour Process
              </h3>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Everything Included in 48 Hours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional features that normally take weeks, delivered in just 2 days
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteFeatures.map((feature, index) => (
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
              Express Website Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing, refundable deposits, 48-hour delivery guarantee
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
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
                      {tier.deposit} refundable deposit
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
                    <Link href={`/contact?service=express-website&tier=${tier.name.toLowerCase().replace(' ', '-')}`}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Nottingham Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from 48-hour website launches
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nottinghamCaseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-forest-green border-forest-green">
                      {study.area}
                    </Badge>
                    <Badge variant="outline" className="text-coral-red border-coral-red">
                      {study.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {study.business}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Challenge:</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Solution:</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Result:</h4>
                      <p className="text-sm font-semibold text-forest-green">{study.result}</p>
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
            Need Your Website This Week?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Professional website designed, built and launched within 48 hours.
            £150 refundable deposit gets you started today.
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
              <span>48-hour guarantee</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Serving all Nottingham areas</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              <span>Refundable deposit</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />

      {/* Service Structured Data */}
      <Script
        id="express-website-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "48-Hour Express Website Design Nottingham",
            "description": "Professional website design and launch within 48 hours for Nottingham businesses. Mobile-responsive, SEO-optimized, contact forms included.",
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
                "name": "Express Starter Website",
                "price": "750",
                "priceCurrency": "GBP",
                "description": "5-page professional website delivered in 48 hours"
              },
              {
                "@type": "Offer",
                "name": "Express Professional Website",
                "price": "1500",
                "priceCurrency": "GBP",
                "description": "10-page professional website with advanced features delivered in 48 hours"
              },
              {
                "@type": "Offer",
                "name": "Express E-commerce Website",
                "price": "2500",
                "priceCurrency": "GBP",
                "description": "Full e-commerce website with up to 50 products delivered in 48 hours"
              }
            ],
            "serviceType": "Website Design and Development",
            "serviceOutput": "Professional Business Website",
            "hoursAvailable": "Mo-Fr 09:00-17:00"
          })
        }}
      />
    </div>
  );
}
