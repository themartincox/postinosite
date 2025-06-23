import Navigation from "@/components/Navigation";
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  Heart,
  Lock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

const dentalFeatures = [
  {
    category: "Patient Management",
    icon: <Users className="h-6 w-6" />,
    features: [
      "Online appointment booking system",
      "Patient portal for records access",
      "Automated appointment reminders",
      "Treatment history tracking",
      "Digital patient forms",
      "Insurance verification tools"
    ]
  },
  {
    category: "Treatment Showcase",
    icon: <Heart className="h-6 w-6" />,
    features: [
      "Before & after photo galleries",
      "Treatment procedure videos",
      "Service descriptions with pricing",
      "Dental team profiles",
      "Patient testimonials & reviews",
      "Treatment result case studies"
    ]
  },
  {
    category: "Practice Management",
    icon: <Calendar className="h-6 w-6" />,
    features: [
      "Multi-location practice support",
      "Staff scheduling integration",
      "Treatment room availability",
      "Emergency contact systems",
      "Patient communication tools",
      "Practice analytics dashboard"
    ]
  },
  {
    category: "Compliance & Security",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "GDPR compliant patient data",
      "NHS information integration",
      "Medical record encryption",
      "Secure payment processing",
      "Data backup systems",
      "Privacy policy management"
    ]
  }
];

const pricingTiers = [
  {
    name: "Solo Practice",
    price: "£3,500",
    setup: "",
    monthly: "£750/month + 3%",
    description: "Single-location practice establishing digital presence",
    features: [
      "5-page professional website",
      "Online appointment booking",
      "Patient contact forms",
      "Treatment showcase pages",
      "Google Maps integration",
      "Mobile responsive design",
      "Basic SEO optimisation",
      "SSL certificate included"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Established Practice",
    price: "£6,000",
    setup: "",
    monthly: "£1,000/month + 5%",
    description: "Growing practice with multiple services/locations",
    features: [
      "10-page custom website",
      "Advanced booking system",
      "Patient portal access",
      "Multiple dentist profiles",
      "Treatment galleries",
      "Patient testimonials",
      "Advanced SEO package",
      "Social media integration",
      "Email marketing tools",
      "Analytics dashboard"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Ambitious Growth",
    price: "£10,000",
    setup: "",
    monthly: "£1,500/month + 7%",
    description: "Multi-location expansion and market domination",
    features: [
      "Unlimited pages",
      "Multi-location support",
      "Advanced patient portal",
      "Insurance integration",
      "Treatment planning tools",
      "Payment processing",
      "Custom integrations",
      "Priority support",
      "Training included",
      "Quarterly reviews"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export default function DentalPracticesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-500 hover:text-midnight-blue">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/industries" className="text-gray-500 hover:text-midnight-blue">
                  Industries
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-midnight-blue font-semibold">
                  Dental Practices
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-6 text-sm px-4 py-2">
                🎯 Revenue-Focused Dental Websites
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Dental Practice Websites That
                <span className="text-cyan-300 block">Attract New Patients</span>
              </h1>
              <p className="text-xl font-body mb-8 opacity-90">
                Revenue-focused websites with our partnership approach. We only succeed when you do -
                that's why our pricing includes revenue sharing to ensure maximum growth for your practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="#pricing">
                    View Packages
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Link href="/contact">
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Why Dental Practices Choose Us</h3>
                <div className="space-y-4">
                  {[
                    "Average 250% increase in leads within 6 months",
                    "GDPR compliant patient data handling",
                    "Integrated appointment booking systems",
                    "Treatment showcase galleries",
                    "Patient portal access"
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0" />
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
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Everything Your Dental Practice Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dental practice websites include specialized features designed specifically for healthcare providers
              and patient management.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {dentalFeatures.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-600">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl font-heading text-midnight-blue">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
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
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Dental Practice Website Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revenue-sharing partnerships that align our success with yours. All packages include professional design,
              mobile optimization, ongoing support, and growth-focused optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-blue-600 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading text-midnight-blue mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-blue-600 mb-1">
                      {tier.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {tier.setup ? `${tier.setup} • ${tier.monthly}` : tier.monthly}
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
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
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
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

      {/* CTA Section */}
      <section className="py-16 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Dental Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join dental practices achieving an average 250% increase in leads within 6 months
            through our revenue-focused partnership approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/contact">
                Get Your Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-midnight-blue"
            >
              <Link href="/growth-consultation">
                Book Strategy Call
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
                Revenue-focused websites for dental practices. Partnership approach with growth optimization and GDPR compliance built-in.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/industries"
                    className="hover:text-white transition-colors"
                  >
                    Industry Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/growth-marketing"
                    className="hover:text-white transition-colors"
                  >
                    Growth Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation"
                    className="hover:text-white transition-colors"
                  >
                    AI & Automation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Healthcare</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/industries/dental-practices"
                    className="hover:text-white transition-colors"
                  >
                    Dental Practices
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
                    href="/industries/cosmetic-clinics"
                    className="hover:text-white transition-colors"
                  >
                    Cosmetic Clinics
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
                <li>
                  <Link
                    href="/growth-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Book Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:08007723291"
                    className="hover:text-white transition-colors"
                  >
                    08007723291
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. | Revenue-focused websites for dental practices.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
