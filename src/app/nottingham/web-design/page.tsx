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
  Globe,
  Smartphone,
  Search,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Monitor,
  Tablet,
  Shield,
  Zap,
  BarChart,
  Users,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Web Design Nottingham | Professional Website Development | Postino",
  description: "Professional web design services in Nottingham. Custom websites, e-commerce, mobile-responsive design, SEO optimization. Serving City Centre, Hyson Green, Radford, Lenton, Beeston. From £997-£4,997. Free consultation: 0800 772 3291. Award-winning local web designers.",
  keywords: "web design Nottingham, website design Nottingham, professional web design Nottingham, responsive web design Nottingham, e-commerce website Nottingham, custom website design Nottingham, mobile website design Nottingham, web development Nottingham city centre",
  alternates: {
    canonical: 'https://postino.cc/nottingham/web-design'
  },
  openGraph: {
    title: "Professional Web Design Nottingham | Postino",
    description: "Award-winning web design services for Nottingham businesses. Custom websites, e-commerce solutions, mobile-responsive design with SEO optimization.",
    url: 'https://postino.cc/nottingham/web-design',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/nottingham-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Web Design Services in Nottingham - Postino",
      },
    ],
  },
};

const webDesignServices = [
  {
    title: "Business Websites",
    description: "Professional websites that establish credibility and drive conversions",
    icon: <Globe className="h-8 w-8" />,
    features: [
      "Custom responsive design",
      "Professional copywriting",
      "Contact forms & enquiry handling",
      "Google My Business integration",
      "Social media integration",
      "Analytics & tracking setup"
    ],
    priceRange: "£997 - £2,997",
    timeline: "2-4 weeks",
    ideal: "Small to medium businesses"
  },
  {
    title: "E-commerce Websites",
    description: "Online stores designed to maximize sales and customer experience",
    icon: <Monitor className="h-8 w-8" />,
    features: [
      "Product catalog management",
      "Secure payment processing",
      "Inventory management",
      "Customer accounts & wishlists",
      "Order tracking & notifications",
      "Mobile shopping optimization"
    ],
    priceRange: "£1,997 - £4,997",
    timeline: "4-8 weeks",
    ideal: "Retailers & online sellers"
  },
  {
    title: "Professional Services Sites",
    description: "Sophisticated websites for solicitors, accountants, and consultants",
    icon: <Users className="h-8 w-8" />,
    features: [
      "Professional branding & design",
      "Service portfolio showcase",
      "Client testimonials & case studies",
      "Appointment booking system",
      "Resource downloads",
      "GDPR compliance features"
    ],
    priceRange: "£1,497 - £3,997",
    timeline: "3-6 weeks",
    ideal: "Professional service firms"
  },
  {
    title: "Restaurant & Hospitality",
    description: "Appetizing websites that drive bookings and showcase your venue",
    icon: <Smartphone className="h-8 w-8" />,
    features: [
      "Menu display & updates",
      "Online reservation system",
      "Photo galleries",
      "Location & opening hours",
      "Event booking functionality",
      "Social media integration"
    ],
    priceRange: "£1,297 - £2,997",
    timeline: "2-5 weeks",
    ideal: "Restaurants & venues"
  }
];

const designProcess = [
  {
    step: "1",
    title: "Discovery & Strategy",
    description: "Understanding your business, goals, and target customers",
    deliverables: ["Business analysis", "Competitor research", "Strategy document"],
    duration: "1 week"
  },
  {
    step: "2",
    title: "Design & Wireframes",
    description: "Creating visual designs and user experience layouts",
    deliverables: ["Wireframes", "Visual designs", "Style guide"],
    duration: "1-2 weeks"
  },
  {
    step: "3",
    title: "Development & Build",
    description: "Building your website with modern technologies",
    deliverables: ["Responsive website", "CMS setup", "Testing"],
    duration: "2-4 weeks"
  },
  {
    step: "4",
    title: "Launch & Optimization",
    description: "Going live and optimizing for performance",
    deliverables: ["Live website", "SEO optimization", "Training"],
    duration: "1 week"
  }
];

const nottinghamPortfolio = [
  {
    business: "Nottingham Legal Associates",
    area: "City Centre",
    industry: "Legal Services",
    challenge: "Outdated website not generating leads",
    solution: "Professional redesign with client portal and booking system",
    result: "300% increase in online enquiries, 150% more consultations booked",
    features: ["Client portal", "Appointment booking", "Case study showcase"]
  },
  {
    business: "Beeston Dental Care",
    area: "Beeston",
    industry: "Healthcare",
    challenge: "Mobile-unfriendly site losing patients",
    solution: "Mobile-first redesign with online appointment booking",
    result: "85% mobile traffic improvement, 200% more online bookings",
    features: ["Mobile optimization", "Online booking", "Patient portal"]
  },
  {
    business: "Radford Restaurant",
    area: "Radford",
    industry: "Hospitality",
    challenge: "No online presence for reservations",
    solution: "Beautiful restaurant website with booking integration",
    result: "40% of reservations now online, 60% increase in weekend bookings",
    features: ["Online reservations", "Menu showcase", "Event booking"]
  }
];

const webDesignFeatures = [
  {
    title: "Mobile-First Design",
    description: "Every website optimized for smartphones and tablets",
    icon: <Smartphone className="h-6 w-6" />,
    benefit: "85% of users browse on mobile"
  },
  {
    title: "SEO Optimization",
    description: "Built-in search engine optimization for better rankings",
    icon: <Search className="h-6 w-6" />,
    benefit: "Higher Google visibility"
  },
  {
    title: "Fast Loading Speed",
    description: "Optimized for lightning-fast page load times",
    icon: <Zap className="h-6 w-6" />,
    benefit: "Better user experience & SEO"
  },
  {
    title: "Security Features",
    description: "SSL certificates and security best practices included",
    icon: <Shield className="h-6 w-6" />,
    benefit: "Protects your business & customers"
  },
  {
    title: "Analytics Integration",
    description: "Track visitor behavior and website performance",
    icon: <BarChart className="h-6 w-6" />,
    benefit: "Data-driven improvements"
  },
  {
    title: "Content Management",
    description: "Easy-to-use system for updating your website",
    icon: <Globe className="h-6 w-6" />,
    benefit: "Update content yourself"
  }
];

const pricingPackages = [
  {
    name: "Starter Website",
    price: "£997",
    description: "Perfect for small Nottingham businesses getting online",
    features: [
      "5-page responsive website",
      "Contact form integration",
      "Basic SEO setup",
      "Social media links",
      "1 year hosting included",
      "Mobile optimization",
      "SSL certificate",
      "Basic analytics"
    ],
    popular: false,
    cta: "Perfect for startups"
  },
  {
    name: "Professional Website",
    price: "£1,997",
    description: "Comprehensive solution for established businesses",
    features: [
      "10-page custom website",
      "Advanced contact forms",
      "Blog/news section",
      "Photo galleries",
      "Google My Business integration",
      "Advanced SEO optimization",
      "Social media integration",
      "2 years hosting included",
      "Priority support"
    ],
    popular: true,
    cta: "Most popular choice"
  },
  {
    name: "E-commerce Website",
    price: "£2,997",
    description: "Complete online store for Nottingham retailers",
    features: [
      "Custom e-commerce design",
      "Product catalog (up to 100 items)",
      "Secure payment processing",
      "Inventory management",
      "Customer accounts",
      "Order tracking",
      "Mobile shopping optimization",
      "SEO for products",
      "Advanced analytics"
    ],
    popular: false,
    cta: "Start selling online"
  }
];

export default function NottinghamWebDesignPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header is global; Navigation removed */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue via-forest-green to-coral-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              Award-Winning Nottingham Web Designers
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Web Design
              <span className="block text-3xl lg:text-5xl text-coral-red">
                Nottingham
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Professional website design that drives results for Nottingham businesses.
              Custom, mobile-responsive websites that convert visitors into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
                <Link href="#pricing">
                  View Web Design Packages <ArrowRight className="ml-2 h-5 w-5" />
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
                <span>Award-winning designs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>Mobile-first approach</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>SEO optimized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Web Design Services for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to established enterprises, we create websites that work for your Nottingham business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {webDesignServices.map((service, index) => (
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
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <span className="text-lg font-semibold text-coral-red">
                            {service.priceRange}
                          </span>
                          <p className="text-sm text-gray-500">{service.timeline}</p>
                        </div>
                        <Badge variant="outline" className="text-forest-green border-forest-green">
                          {service.ideal}
                        </Badge>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white"
                      >
                        <Link href="/contact?service=web-design&type={service.title.toLowerCase().replace(' ', '-')}">
                          Get Quote <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Every Website Includes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional features that ensure your website performs and delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDesignFeatures.map((feature, index) => (
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
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <p className="text-sm font-semibold text-coral-red">{feature.benefit}</p>
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
              Our Web Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional websites on time and on budget
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {designProcess.map((step, index) => (
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
                {index < designProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Nottingham Web Design Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real websites, real results for local businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nottinghamPortfolio.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-forest-green border-forest-green">
                      {project.area}
                    </Badge>
                    <Badge variant="outline" className="text-coral-red border-coral-red">
                      {project.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {project.business}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Challenge:</h4>
                      <p className="text-sm text-gray-600">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Solution:</h4>
                      <p className="text-sm text-gray-600">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Results:</h4>
                      <p className="text-sm font-semibold text-forest-green">{project.result}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Key Features:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Web Design Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for professional Nottingham web design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
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
                      {pkg.cta}
                    </div>
                  </div>
                  <CardDescription className="mt-4">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-forest-green mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className={`w-full ${pkg.popular ? 'bg-coral-red hover:bg-coral-red/90' : 'bg-midnight-blue hover:bg-midnight-blue/90'}`}>
                    <Link href={`/contact?service=web-design&package=${pkg.name.toLowerCase().replace(' ', '-')}`}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
            Ready for a Website That Works?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of Nottingham businesses who trust us with their online presence.
            Professional web design that drives real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
              <Link href="#pricing">
                View Packages <ArrowRight className="ml-2 h-5 w-5" />
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
              <Globe className="h-4 w-4 mr-2" />
              <span>Professional design</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Local Nottingham team</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Guaranteed results</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />

      {/* Service Structured Data */}
      <Script
        id="nottingham-web-design-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Web Design Nottingham",
            "description": "Professional web design services in Nottingham. Custom websites, e-commerce, mobile-responsive design, SEO optimization for Nottingham businesses.",
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
                "name": "Starter Website",
                "price": "997",
                "priceCurrency": "GBP",
                "description": "5-page responsive website with basic SEO"
              },
              {
                "@type": "Offer",
                "name": "Professional Website",
                "price": "1997",
                "priceCurrency": "GBP",
                "description": "10-page custom website with advanced features"
              },
              {
                "@type": "Offer",
                "name": "E-commerce Website",
                "price": "2997",
                "priceCurrency": "GBP",
                "description": "Complete online store with payment processing"
              }
            ],
            "serviceType": "Web Design and Development",
            "serviceOutput": "Professional Business Website",
            "hoursAvailable": "Mo-Fr 09:00-17:00"
          })
        }}
      />
    </div>
  );
}
