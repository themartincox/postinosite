"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Heart,
  Shield,
  Star,
  Users,
  TrendingUp,
  Target,
  Zap,
  Sparkles,
  Camera,
  CreditCard,
  UserCheck,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const cosmeticFeatures = [
  {
    category: "Client Acquisition",
    icon: <Target className="h-6 w-6" />,
    features: [
      "Local SEO optimisation for aesthetic searches",
      "Treatment-specific landing pages",
      "Before & after gallery optimisation",
      "Google Business Profile excellence",
      "Aesthetic procedure education pages",
      "Premium positioning strategies"
    ]
  },
  {
    category: "Conversion Systems",
    icon: <TrendingUp className="h-6 w-6" />,
    features: [
      "Consultation booking systems",
      "Treatment cost calculators",
      "Financing options integration",
      "Virtual consultation booking",
      "Treatment planning tools",
      "Premium client nurture sequences"
    ]
  },
  {
    category: "Trust & Credibility",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "Practitioner credentials showcase",
      "Patient transformation galleries",
      "Video testimonials integration",
      "Safety information & certifications",
      "Aftercare guidance systems",
      "Professional association memberships"
    ]
  },
  {
    category: "Premium Experience",
    icon: <Sparkles className="h-6 w-6" />,
    features: [
      "Luxury brand positioning",
      "High-end visual design",
      "VIP client portal access",
      "Concierge booking experience",
      "Premium content delivery",
      "Exclusive treatment showcases"
    ]
  }
];

const pricingTiers = [
  {
    name: "Single Clinic",
    price: "£4,000",
    setup: "setup fee",
    monthly: "£800/month",
    revenueShare: "3% Net New Revenue",
    description: "Perfect for independent aesthetic clinics establishing premium presence",
    features: [
      "Premium aesthetic website design",
      "Treatment showcase galleries",
      "Consultation booking system",
      "Basic before/after galleries",
      "Google Business Profile optimisation",
      "Treatment cost information",
      "SSL certificate & premium hosting",
      "Monthly performance reports"
    ],
    popular: false,
    cta: "Start Growing"
  },
  {
    name: "Established Clinic",
    price: "£7,000",
    setup: "setup fee",
    monthly: "£1,200/month",
    revenueShare: "5% Net New Revenue",
    description: "Comprehensive solution for multi-treatment clinics with growth ambitions",
    features: [
      "Advanced treatment showcases",
      "Multi-practitioner profiles",
      "Advanced before/after galleries",
      "Financing calculator integration",
      "Virtual consultation booking",
      "Client testimonial systems",
      "Advanced SEO package",
      "2 blog posts per month",
      "Premium analytics dashboard"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Clinic Group",
    price: "£12,000",
    setup: "setup fee",
    monthly: "£2,000/month",
    revenueShare: "7% Net New Revenue",
    description: "Complete digital transformation for multi-location aesthetic groups",
    features: [
      "Custom luxury platform development",
      "Multi-location management",
      "Advanced patient portal systems",
      "VIP client experience design",
      "Premium brand positioning",
      "Advanced conversion optimisation",
      "Luxury content creation",
      "Priority support & account manager",
      "Quarterly strategy reviews",
      "Performance optimisation"
    ],
    popular: false,
    cta: "Transform Clinic"
  }
];

export default function CosmeticClinicsPage() {
  const [stickyContactVisible, setStickyContactVisible] = useState(false);
  const [contactOptionsOpen, setContactOptionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setStickyContactVisible(true);
      } else {
        setStickyContactVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header is global; Navigation removed */}

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/industries", label: "Industries" },
              { label: "Cosmetic Clinics", current: true }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-6 text-sm px-4 py-2">
                ✨ Premium Digital Presence for Aesthetic Clinics
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Cosmetic Clinic Websites That
                <span className="text-pink-300 block">Convert Consultations into Clients</span>
              </h1>
              <p className="text-xl font-body mb-8 opacity-90">
                Stop losing high-value clients to competitors with outdated websites. Our luxury aesthetic clinic
                websites are designed to convert visitors into premium consultations and grow your clinic revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  <Link href="#pricing">
                    View Premium Packages
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  <Link href="/contact">
                    Get Revenue Forecast
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Proven Results for Aesthetic Clinics</h3>
                <div className="space-y-4">
                  {[
                    "Average 300% increase in consultation bookings within 6 months",
                    "£150,000+ additional revenue in first 12 months (typical)",
                    "Luxury custom-coded websites (not basic WordPress templates)",
                    "Revenue-sharing model - we succeed when you succeed",
                    "12-month partnership for guaranteed premium ROI"
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-pink-300 flex-shrink-0" />
                      <span className="text-white/90">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Premium Features for Aesthetic Clinics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed to attract premium clients and convert consultations into high-value treatments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {(cosmeticFeatures || []).map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center text-purple-600">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl font-heading text-midnight-blue">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(category?.features || []).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-forest-green flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-body text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Premium Packages for Aesthetic Clinics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Choose your growth package. All include 12-month partnership, luxury custom-coded technology,
              and revenue-sharing alignment.
            </p>
            <Badge className="bg-purple-600 text-white px-4 py-2 text-sm">
              ✨ 12-Month Premium Partnership • Revenue Share Model • Luxury Technology
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {(pricingTiers || []).map((tier, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-purple-600 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4 pt-8">
                  <CardTitle className="text-2xl font-heading text-midnight-blue mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-purple-600 mb-1">
                      {tier.price}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                      {tier.setup} • {tier.monthly}
                    </div>
                    <div className="text-sm font-semibold text-forest-green">
                      + {tier.revenueShare}
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {(tier?.features || []).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-forest-green flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-body text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      tier.popular
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-midnight-blue hover:bg-midnight-blue/90 text-white'
                    }`}
                  >
                    <Link href="/contact">
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Contact */}
      {stickyContactVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative">
            {contactOptionsOpen && (
              <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[280px]">
                <h3 className="font-heading font-bold text-midnight-blue mb-4">Get Your Cosmetic Clinic Quote</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@postino.co.uk?subject=Cosmetic Clinic Website Enquiry"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white group-hover:bg-purple-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-midnight-blue">Email Us</div>
                      <div className="text-sm text-gray-600">hello@postino.co.uk</div>
                    </div>
                  </a>
                </div>
              </div>
            )}

            <button
              onClick={() => setContactOptionsOpen(!contactOptionsOpen)}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="font-heading font-semibold">Contact Us</span>
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Premium revenue-focused websites for cosmetic clinics.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Healthcare</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/industries/cosmetic-clinics"
                    className="hover:text-white transition-colors"
                  >
                    Cosmetic Clinics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/medical-practices"
                    className="hover:text-white transition-colors"
                  >
                    Medical Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/dental-practices"
                    className="hover:text-white transition-colors"
                  >
                    Dental Practices
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
