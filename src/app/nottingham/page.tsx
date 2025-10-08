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
  MessageSquare,
  TrendingUp,
  Zap,
  MapPin,
  Phone,
  Mail,
  Star,
  Users,
  Clock,
  Heart,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Services Nottingham | Quick Turnaround | Postino",
  description: "Fast, professional digital marketing services in Nottingham. Quick turnaround: Website Design (48hrs), AI Chatbots (24hrs), Local SEO (same day), Business Automation (72hrs). Serving Nottingham city centre, Hyson Green, Radford, Lenton, Beeston. Free consultation: 0800 772 3291. Results guaranteed.",
  keywords: "digital marketing Nottingham, quick turnaround Nottingham, fast web design Nottingham, AI chatbot development Nottingham, local SEO Nottingham, business automation Nottingham, marketing agency Nottingham city centre, same day SEO Nottingham, 24 hour chatbot Nottingham, emergency web design Nottingham",
  alternates: {
    canonical: 'https://postino.cc/nottingham'
  },
  openGraph: {
    title: "Fast Digital Marketing Services Nottingham | Postino",
    description: "Quick turnaround digital marketing services for Nottingham businesses. Website design in 48hrs, chatbots in 24hrs, same-day SEO setup.",
    url: 'https://postino.cc/nottingham',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/nottingham-digital-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Fast Digital Marketing Services in Nottingham - Postino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Digital Marketing Nottingham | Postino",
    description: "Quick turnaround digital services for Nottingham businesses. 48hr websites, 24hr chatbots, same-day SEO.",
    images: ["/images/nottingham-digital-marketing.jpg"],
  },
  other: {
    'geo.region': 'GB-NTT',
    'geo.placename': 'Nottingham, Nottinghamshire',
    'geo.position': '52.9548;-1.1581',
    'ICBM': '52.9548, -1.1581',
  },
};

const quickServices = [
  {
    title: "Express Website Design",
    subtitle: "48-Hour Turnaround",
    price: "From £750",
    deposit: "£150 refundable deposit",
    description: "Professional website designed, built and launched within 48 hours for Nottingham businesses.",
    features: [
      "Mobile-responsive design",
      "SEO-optimized content",
      "Contact forms & booking",
      "Google My Business integration",
      "Free SSL certificate",
      "1-year hosting included"
    ],
    turnaround: "48 hours",
    icon: <Globe className="h-8 w-8" />,
    link: "/nottingham/express-website-design",
    popular: true
  },
  {
    title: "AI Chatbot Setup",
    subtitle: "24-Hour Deployment",
    price: "From £450",
    deposit: "£112.50 refundable deposit",
    description: "Intelligent chatbot configured and deployed within 24 hours to handle customer enquiries automatically.",
    features: [
      "Industry-specific responses",
      "Appointment booking integration",
      "24/7 customer support",
      "Lead qualification",
      "Analytics dashboard",
      "30-day optimization"
    ],
    turnaround: "24 hours",
    icon: <MessageSquare className="h-8 w-8" />,
    link: "/nottingham/ai-chatbot-setup"
  },
  {
    title: "Same-Day Local SEO",
    subtitle: "Launched Today",
    price: "£240/month",
    deposit: "£60 refundable deposit",
    description: "Complete local SEO setup launched the same day to get your Nottingham business found online immediately.",
    features: [
      "Google My Business optimization",
      "Local keyword targeting",
      "Citation building",
      "Review management setup",
      "Local content creation",
      "Monthly reporting"
    ],
    turnaround: "Same day",
    icon: <TrendingUp className="h-8 w-8" />,
    link: "/nottingham/same-day-local-seo"
  },
  {
    title: "Business Automation",
    subtitle: "72-Hour Implementation",
    price: "From £1,200",
    deposit: "£300 refundable deposit",
    description: "Custom automation workflows implemented within 72 hours to streamline your Nottingham business operations.",
    features: [
      "Email automation sequences",
      "Customer journey mapping",
      "CRM integration",
      "Automated follow-ups",
      "Performance analytics",
      "Staff training included"
    ],
    turnaround: "72 hours",
    icon: <Zap className="h-8 w-8" />,
    link: "/nottingham/business-automation"
  }
];

const nottinghamAreas = [
  { name: "City Centre", businesses: "Retail, Professional Services, Hospitality" },
  { name: "Hyson Green", businesses: "Local Shops, Community Services, Healthcare" },
  { name: "Radford", businesses: "Small Businesses, Cafes, Local Services" },
  { name: "Lenton", businesses: "Student Services, Accommodation, Catering" },
  { name: "Beeston", businesses: "Manufacturing, Professional Services, Retail" },
  { name: "West Bridgford", businesses: "Professional Services, Healthcare, Retail" }
];

const nottinghamTestimonials = [
  {
    business: "Nottingham Dental Care",
    area: "City Centre",
    quote: "Postino delivered our new website in 48 hours exactly as promised. We're now getting 5x more online bookings.",
    service: "Express Website Design",
    result: "500% increase in online bookings"
  },
  {
    business: "Beeston Auto Services",
    area: "Beeston",
    quote: "The AI chatbot has revolutionized our customer service. It handles 80% of enquiries automatically, even at nights and weekends.",
    service: "AI Chatbot Setup",
    result: "80% reduction in call volume"
  },
  {
    business: "Hyson Green Pharmacy",
    area: "Hyson Green",
    quote: "Same-day SEO setup got us ranking #1 for 'pharmacy Nottingham' within 2 weeks. Incredible results.",
    service: "Same-Day Local SEO",
    result: "#1 Google ranking in 2 weeks"
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
              <MapPin className="h-4 w-4 mr-2" />
              Serving Nottingham & Surrounding Areas
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Fast Digital Marketing
              <span className="block text-3xl lg:text-5xl text-coral-red">
                For Nottingham Businesses
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Quick turnaround digital services that get your Nottingham business online and profitable fast.
              From 24-hour chatbots to 48-hour websites - we deliver results when you need them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
                <Link href="#quick-services">
                  See Quick Services <ArrowRight className="ml-2 h-5 w-5" />
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
                <Clock className="h-5 w-5 mr-2 text-coral-red" />
                <span>Same-day setup available</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>Refundable deposits</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-coral-red" />
                <span>Local Nottingham team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section id="quick-services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              4 Quick Turnaround Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional digital marketing solutions designed for fast deployment.
              Get your Nottingham business online and generating leads quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {quickServices.map((service, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-coral-red' : ''}`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-coral-red text-white px-3 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="text-forest-green mb-4">
                      {service.icon}
                    </div>
                    <Badge variant="outline" className="text-coral-red border-coral-red">
                      {service.turnaround}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-forest-green">
                    {service.subtitle}
                  </CardDescription>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-midnight-blue mb-1">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-600">
                      {service.deposit}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full bg-midnight-blue hover:bg-midnight-blue/90">
                    <Link href={service.link}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nottingham Areas We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Nottingham Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Fast, local service across all Nottingham neighborhoods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nottinghamAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-heading text-midnight-blue flex items-center">
                    <MapPin className="h-5 w-5 text-forest-green mr-2" />
                    {area.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{area.businesses}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Nottingham Business Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real Nottingham businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nottinghamTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-forest-green border-forest-green">
                      {testimonial.area}
                    </Badge>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {testimonial.business}
                  </CardTitle>
                  <CardDescription className="text-coral-red font-semibold">
                    {testimonial.service}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm font-semibold text-forest-green">
                    Result: {testimonial.result}
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
            Ready to Get Your Nottingham Business Online Fast?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Choose your quick turnaround service and get started today.
            Refundable deposits, guaranteed delivery times, local Nottingham support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
              <Link href="#quick-services">
                Choose Your Service <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-blue font-semibold px-8 py-3">
              <Link href="tel:08007723291">
                <Phone className="mr-2 h-5 w-5" />
                Call: 0800 772 3291
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center text-sm text-white/80">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Based in Bingham, serving all of Nottingham • Free consultation available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Fast digital marketing solutions for Nottingham businesses. Quick turnaround, guaranteed results.
              </p>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>1 Fisher Lane, Bingham, NG13 8BQ</span>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li><Link href="/nottingham/express-website-design" className="hover:text-white transition-colors">48hr Website Design</Link></li>
                <li><Link href="/nottingham/ai-chatbot-setup" className="hover:text-white transition-colors">24hr AI Chatbots</Link></li>
                <li><Link href="/nottingham/same-day-local-seo" className="hover:text-white transition-colors">Same-Day SEO</Link></li>
                <li><Link href="/nottingham/business-automation" className="hover:text-white transition-colors">72hr Automation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Nottingham Areas</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>City Centre</li>
                <li>Hyson Green</li>
                <li>Radford & Lenton</li>
                <li>Beeston & West Bridgford</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link href="tel:08007723291" className="hover:text-white transition-colors flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    0800 772 3291
                  </Link>
                </li>
                <li>
                  <Link href="mailto:hello@postino.cc" className="hover:text-white transition-colors flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    hello@postino.cc
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />

      {/* Local Business Structured Data */}
      <Script
        id="nottingham-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Postino Digital Marketing Nottingham",
            "image": "https://postino.cc/images/nottingham-digital-marketing.jpg",
            "description": "Fast digital marketing services for Nottingham businesses. 48hr websites, 24hr chatbots, same-day SEO, 72hr automation.",
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
            "telephone": "+44-800-772-3291",
            "url": "https://postino.cc/nottingham",
            "areaServed": [
              {
                "@type": "City",
                "name": "Nottingham",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Nottinghamshire"
                }
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Nottingham Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Express Website Design",
                    "description": "Professional website designed and launched within 48 hours"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Chatbot Setup",
                    "description": "Intelligent chatbot deployed within 24 hours"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Same-Day Local SEO",
                    "description": "Complete local SEO setup launched the same day"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Automation",
                    "description": "Custom automation workflows implemented within 72 hours"
                  }
                }
              ]
            },
            "openingHours": "Mo-Fr 09:00-17:00",
            "sameAs": [
              "https://www.linkedin.com/company/postino-marketing"
            ]
          })
        }}
      />
    </div>
  );
}
