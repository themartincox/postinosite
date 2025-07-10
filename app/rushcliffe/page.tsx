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
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { getLocalBusinessStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Digital Marketing Services Rushcliffe | Web Design & AI Automation | Postino",
  description: "Digital marketing agency serving Rushcliffe, Nottinghamshire. Services: Website Design (£150-£3,750), AI Chatbots (£112.50-£2,250), Local SEO (£60/month), Business Automation (£75-£3,000). 25% local discount. Refundable deposits. Free consultation: 0800 772 3291. Serving West Bridgford and surrounding areas.",
  keywords: "digital marketing Rushcliffe, web design Rushcliffe, AI automation Rushcliffe, local SEO Rushcliffe, marketing agency Rushcliffe, website design West Bridgford, chatbot development Rushcliffe, business automation Rushcliffe, local marketing Nottinghamshire, small business marketing East Midlands",
  alternates: {
    canonical: 'https://postino.cc/rushcliffe'
  },
  openGraph: {
    title: "Digital Marketing Services Rushcliffe | Postino",
    description: "Professional digital marketing, web design, and AI automation services for Rushcliffe businesses. Expert local SEO and business growth solutions.",
    url: 'https://postino.cc/rushcliffe',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/rushcliffe-digital-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services in Rushcliffe - Postino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services Rushcliffe | Postino",
    description: "Professional digital marketing, web design, and AI automation services for Rushcliffe businesses.",
    images: ["/images/rushcliffe-digital-marketing.jpg"],
  },
  other: {
    'geo.region': 'GB-NTT',
    'geo.placename': 'Rushcliffe, Nottinghamshire',
    'geo.position': '52.9333;-1.1333',
    'ICBM': '52.9333, -1.1333',
  }
};

const rushcliffeServices = [
  "Professional Website Design",
  "AI Chatbot Development",
  "Local Marketing Support",
  "Business Automation Solutions"
];

const structuredData = getLocalBusinessStructuredData({
  name: "Postino Digital Marketing Rushcliffe",
  area: "rushcliffe",
  services: rushcliffeServices
});

export default function RushcliffePage() {
  const services = [
    {
      name: "Professional Website Design",
      originalPrice: "£2,000 - £5,000",
      discountPrice: "£1,500 - £3,750",
      description: "Modern, mobile-friendly websites that represent your Rushcliffe business professionally",
      features: [
        "Custom responsive design",
        "Local SEO optimization",
        "Contact forms & booking systems",
        "Google Business integration",
        "1 year hosting included",
        "Basic analytics setup"
      ],
      icon: Globe,
      color: "bg-forest-green"
    },
    {
      name: "AI Chatbot Development",
      originalPrice: "£1,500 - £3,000",
      discountPrice: "£1,125 - £2,250",
      description: "24/7 customer service chatbots that handle enquiries and bookings automatically",
      features: [
        "Custom conversation flows",
        "WhatsApp & website integration",
        "Appointment booking capability",
        "Customer enquiry handling",
        "Lead capture & qualification",
        "Performance analytics"
      ],
      icon: MessageSquare,
      color: "bg-coral-red"
    },
    {
      name: "Local Marketing Support",
      originalPrice: "£800 - £2,000/month",
      discountPrice: "£600 - £1,500/month",
      description: "Marketing strategies specifically designed to attract Rushcliffe and Nottinghamshire customers",
      features: [
        "Local SEO & Google My Business",
        "Social media management",
        "Community event promotion",
        "Local directory listings",
        "Review management",
        "Monthly performance reports"
      ],
      icon: TrendingUp,
      color: "bg-midnight-blue"
    },
    {
      name: "Business Automation Solutions",
      originalPrice: "£1,000 - £4,000",
      discountPrice: "£750 - £3,000",
      description: "Streamline your operations with automated workflows and processes",
      features: [
        "Automated appointment reminders",
        "Customer follow-up sequences",
        "Invoice & payment automation",
        "Inventory management systems",
        "Staff scheduling automation",
        "Customer feedback collection"
      ],
      icon: Zap,
      color: "bg-forest-green"
    }
  ];

  const localBenefits = [
    {
      title: "Supporting Local Business",
      description: "We're based in Rushcliffe - we understand local business challenges across the district",
      icon: Heart
    },
    {
      title: "Personal Service",
      description: "Face-to-face meetings, local support, and genuine community partnerships",
      icon: Users
    },
    {
      title: "Quick Response Times",
      description: "Being local means faster support and immediate assistance when you need it",
      icon: Clock
    }
  ];

  const rushcliffeAreas = [
    "West Bridgford",
    "Radcliffe-on-Trent",
    "Bingham",
    "Cotgrave",
    "East Leake",
    "Keyworth",
    "Ruddington",
    "Tollerton"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green to-midnight-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-6 w-6 mr-2 text-coral-red" />
              <Badge className="bg-coral-red text-white">
                Rushcliffe Local Business Special
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Digital Solutions for{" "}
              <span className="text-coral-red">Rushcliffe Businesses</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Supporting our local business community across Rushcliffe with professional digital services
              at special community rates. Website design, chatbots, marketing, and automation
              solutions - all with a <strong>25% local discount</strong>.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg font-heading">
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-coral-red" />
                  <span>25% Local Discount</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Based in Rushcliffe</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Personal Service</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-coral-red hover:bg-coral-red/90 text-white"
              >
                <Link href="/contact?source=rushcliffe">
                  Get Your Local Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-forest-green bg-white/5"
              >
                <Link href="tel:08007723291" className="text-white hover:text-forest-green">
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="font-heading font-semibold">
                    Call Us: 0800 772 3291
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rushcliffe Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-4">
              Serving Rushcliffe District
            </h2>
            <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto mb-8">
              We're proud to support businesses across the entire Rushcliffe district with our
              local expertise and community-focused approach.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-4xl mx-auto">
              {rushcliffeAreas.map((area, index) => (
                <div key={index} className="bg-soft-gray rounded-lg p-3 text-center">
                  <span className="text-sm font-heading font-semibold text-midnight-blue">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-4">
              Why Choose Local?
            </h2>
            <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
              Working with a local Rushcliffe business means personal service, community understanding, and genuine partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Digital Services for Rushcliffe Businesses
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Everything your local business needs to thrive online - with special community pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-heading text-midnight-blue">
                        {service.name}
                      </CardTitle>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className="text-lg text-gray-400 line-through">
                          {service.originalPrice}
                        </span>
                        <span className="text-xl font-bold text-coral-red">
                          {service.discountPrice}
                        </span>
                        <Badge className="bg-coral-red text-white text-xs">
                          25% OFF
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="font-body text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center font-body text-gray-600">
                        <Check className="h-4 w-4 text-forest-green mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href={`/rushcliffe/book/${
                        service.name.toLowerCase()
                          .replace(/professional\s+/, '')
                          .replace(/\s+design/, '-design')
                          .replace(/ai\s+chatbot\s+development/, 'ai-chatbot')
                          .replace(/local\s+marketing\s+support/, 'local-marketing')
                          .replace(/business\s+automation\s+solutions/, 'automation')
                      }`}
                      className="block"
                    >
                      <Button className="w-full bg-coral-red hover:bg-coral-red/90 text-white font-semibold py-3">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Secure Project Slot - Refundable Deposit
                      </Button>
                    </Link>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      💳 Secure payment • 24hr response • No hidden fees
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Offer Notice */}
      <section className="py-16 bg-gradient-to-r from-coral-red/5 to-forest-green/5 border-t border-b border-coral-red/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-coral-red text-white px-4 py-2 rounded-full mb-6">
              <Star className="h-5 w-5" />
              <span className="font-heading font-semibold">Limited Availability</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-6">
              Exclusive Local SEO Partnership
            </h2>

            <p className="text-xl font-body text-gray-700 mb-8 leading-relaxed">
              <strong>Fair play guarantee:</strong> We only work with <strong>one business per industry, per area</strong> across Rushcliffe.
              This means when we help you dominate local search results, you won't be competing against
              other clients we're helping in the same field within your local area.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-midnight-blue mb-3">
                  What This Means for You
                </h3>
                <ul className="text-left space-y-2 font-body text-gray-600">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                    <span>No direct local competitors getting our help</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                    <span>Maximum local SEO impact in your area</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                    <span>True competitive advantage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-midnight-blue mb-3">
                  Limited Spots Across Rushcliffe
                </h3>
                <div className="text-left space-y-2 font-body text-gray-600">
                  <p>Available in West Bridgford, Bingham, Radcliffe-on-Trent, and other Rushcliffe areas:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Dental practices</li>
                    <li>• Accountants</li>
                    <li>• Estate agents</li>
                    <li>• Solicitors</li>
                    <li>• Beauty & wellness services</li>
                    <li>• And many other local services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-coral-red to-midnight-blue text-white p-6 rounded-xl">
              <p className="text-lg font-heading mb-4">
                <strong>First come, first served:</strong> Once we partner with a business in your industry in your local area,
                that opportunity is no longer available within that specific Rushcliffe location.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-coral-red hover:bg-white/90"
              >
                <Link href="/contact?source=rushcliffe&priority=exclusive">
                  Secure Your Exclusive Partnership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Credentials */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Your Local Digital Partners
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Based right here in Rushcliffe, we understand local business needs and the community we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-6">
                Why Local Matters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                  <p className="font-body text-gray-600">
                    <strong>Face-to-face meetings:</strong> We can meet in person at your business or ours anywhere in Rushcliffe
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                  <p className="font-body text-gray-600">
                    <strong>Local market knowledge:</strong> We understand Rushcliffe customers and local competition across all areas
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                  <p className="font-body text-gray-600">
                    <strong>Community investment:</strong> Supporting local businesses helps our whole Rushcliffe community thrive
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                  <p className="font-body text-gray-600">
                    <strong>Quick support:</strong> Same-day response for urgent issues - we're right here in the district
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-forest-green/5 to-coral-red/5 p-8 rounded-xl border border-gray-100">
              <h4 className="text-xl font-heading font-bold text-midnight-blue mb-6">
                Contact Your Local Team
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-coral-red" />
                  <div>
                    <p className="font-heading font-semibold text-midnight-blue">
                      1 Fisher Lane, Bingham
                    </p>
                    <p className="text-sm text-gray-600">Rushcliffe, Nottinghamshire</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-coral-red" />
                  <div>
                    <Link href="tel:08007723291" className="font-heading font-semibold text-midnight-blue hover:text-coral-red">
                      0800 772 3291
                    </Link>
                    <p className="text-sm text-gray-600">Free local call</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-coral-red" />
                  <div>
                    <Link href="mailto:hello@postino.cc" className="font-heading font-semibold text-midnight-blue hover:text-coral-red">
                      hello@postino.cc
                    </Link>
                    <p className="text-sm text-gray-600">Quick email response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Package Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Simple Packages for Rushcliffe Businesses
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Choose individual services or combine them for maximum impact - all with our 25% local discount
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Starter Package
                </CardTitle>
                <div className="py-4">
                  <div className="text-3xl font-heading font-bold text-coral-red">
                    £1,500
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    Was £2,000
                  </div>
                </div>
                <CardDescription>
                  Perfect for new businesses getting online
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">Professional website design</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">Basic local SEO setup</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">Contact forms</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">1 year hosting included</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white">
                  <Link href="/contact?source=rushcliffe&package=starter">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-2 border-coral-red relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-coral-red text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Growth Package
                </CardTitle>
                <div className="py-4">
                  <div className="text-3xl font-heading font-bold text-coral-red">
                    £3,750
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    Was £5,000
                  </div>
                </div>
                <CardDescription>
                  Complete digital solution for established businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">Advanced website + booking system</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">AI chatbot for customer service</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">Local marketing setup</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">Basic automation workflows</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-coral-red hover:bg-coral-red/90 text-white">
                  <Link href="/contact?source=rushcliffe&package=growth">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Premium Package
                </CardTitle>
                <div className="py-4">
                  <div className="text-3xl font-heading font-bold text-coral-red">
                    £7,500
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    Was £10,000
                  </div>
                </div>
                <CardDescription>
                  Everything you need to dominate locally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">Premium website + e-commerce</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">Advanced AI chatbot + WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">Complete marketing automation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-forest-green mr-2" />
                    <span className="text-sm">Full business automation suite</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white">
                  <Link href="/contact?source=rushcliffe&package=premium">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Grow Your Rushcliffe Business?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Let's discuss how we can help your business thrive with our local expertise
            and community-focused approach. Book a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/contact?source=rushcliffe">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link href="tel:08007723291" className="text-white hover:text-midnight-blue">
                <Phone className="mr-2 h-5 w-5" />
                <span className="font-heading font-semibold">
                  Call: 0800 772 3291
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section for Zero-click Optimization */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-6">
              Frequently Asked Questions - Rushcliffe Digital Marketing
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our digital marketing services for Rushcliffe businesses.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "What digital marketing services do you offer in Rushcliffe?",
                answer: "We offer comprehensive digital marketing services specifically for Rushcliffe businesses including professional website design (£150-£3,750), AI chatbot development (£112.50-£2,250), local marketing support (£60-£1,500/month), and business automation solutions (£75-£3,000). All services include local SEO optimization and Google My Business integration for West Bridgford and surrounding areas."
              },
              {
                question: "How much does digital marketing cost for Rushcliffe businesses?",
                answer: "Our Rushcliffe digital marketing services start with refundable deposits: Website Design £150, AI Chatbots £112.50, Local Marketing £60/month, and Business Automation £75. Full project costs range from £750-£3,750 depending on requirements. We offer 25% discounts for local Rushcliffe businesses."
              },
              {
                question: "Do you provide local SEO services in Rushcliffe and West Bridgford?",
                answer: "Yes, all our services include comprehensive local SEO optimization for Rushcliffe businesses. This includes Google My Business setup, local directory listings, Rushcliffe-specific keyword optimization, West Bridgford local citations, and ongoing local search visibility improvements to help you rank for 'near me' searches across the borough."
              },
              {
                question: "How quickly can you start working on my Rushcliffe business marketing?",
                answer: "We can start immediately after your consultation. Our process: Pay refundable deposit online → Consultation call within 24 hours → Project kickoff within 48 hours → First results within 7-14 days. We serve all areas of Rushcliffe including West Bridgford, Bingham, and surrounding villages."
              },
              {
                question: "What makes your Rushcliffe marketing services different?",
                answer: "We understand the unique market dynamics of Rushcliffe, from West Bridgford's business district to village communities. We offer specialized local pricing (25% off), dedicated local support, community-focused marketing strategies, and deep knowledge of the Rushcliffe business landscape. Plus, we provide training so you own your marketing assets."
              },
              {
                question: "Do you offer AI automation for Rushcliffe businesses?",
                answer: "Yes, we specialize in AI automation including 24/7 chatbots for customer service, automated appointment booking, customer follow-up sequences, and business process automation. Our AI solutions are tailored for Rushcliffe businesses and integrate with local systems across West Bridgford and the wider borough."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg font-heading text-midnight-blue flex items-center justify-between">
                    {faq.question}
                    <ArrowRight className="h-5 w-5 text-coral-red" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-body text-gray-600 mb-6">
              Still have questions about our Rushcliffe digital marketing services?
            </p>
            <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90">
              <Link href="/contact?source=rushcliffe-faq">
                <Phone className="mr-2 h-5 w-5" />
                Call 0800 772 3291 for Free Consultation
              </Link>
            </Button>
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
                Your local Rushcliffe digital partners. Supporting our community
                with professional digital services at special local rates.
              </p>
              <div className="flex items-center text-gray-300 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">1 Fisher Lane, Bingham, Rushcliffe</span>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Local Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>Website Design & Development</li>
                <li>AI Chatbot Development</li>
                <li>Local Marketing Support</li>
                <li>Business Automation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Packages</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>Starter Package (£1,500)</li>
                <li>Growth Package (£3,750)</li>
                <li>Premium Package (£7,500)</li>
                <li>Custom Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Areas We Serve</h4>
              <ul className="space-y-1 font-body text-gray-300 text-sm">
                <li>West Bridgford</li>
                <li>Radcliffe-on-Trent</li>
                <li>Bingham</li>
                <li>Cotgrave</li>
                <li>East Leake</li>
                <li>Keyworth</li>
                <li>+ All Rushcliffe</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Proudly serving Rushcliffe and surrounding communities.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Local Business Structured Data */}
      <Script
        id="rushcliffe-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* FAQ Structured Data for Zero-click Results */}
      <Script
        id="rushcliffe-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What digital marketing services do you offer in Rushcliffe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer comprehensive digital marketing services specifically for Rushcliffe businesses including professional website design (£150-£3,750), AI chatbot development (£112.50-£2,250), local marketing support (£60-£1,500/month), and business automation solutions (£75-£3,000). All services include local SEO optimization and Google My Business integration for West Bridgford and surrounding areas."
                }
              },
              {
                "@type": "Question",
                "name": "How much does digital marketing cost for Rushcliffe businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our Rushcliffe digital marketing services start with refundable deposits: Website Design £150, AI Chatbots £112.50, Local Marketing £60/month, and Business Automation £75. Full project costs range from £750-£3,750 depending on requirements. We offer 25% discounts for local Rushcliffe businesses."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide local SEO services in Rushcliffe and West Bridgford?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our services include comprehensive local SEO optimization for Rushcliffe businesses. This includes Google My Business setup, local directory listings, Rushcliffe-specific keyword optimization, West Bridgford local citations, and ongoing local search visibility improvements to help you rank for 'near me' searches across the borough."
                }
              }
            ]
          }),
        }}
      />
    </div>
  );
}
