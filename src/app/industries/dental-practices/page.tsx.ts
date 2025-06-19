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
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

const dentalFeatures = [
  {
    category: "Patient Acquisition",
    icon: <Target className="h-6 w-6" />,
    features: [
      "Local SEO optimization for 'dentist near me' searches",
      "Google Business Profile optimization",
      "Zero-click search optimization",
      "Treatment-specific landing pages",
      "Before & after photo galleries",
      "Patient testimonial integration"
    ]
  },
  {
    category: "Conversion Systems",
    icon: <TrendingUp className="h-6 w-6" />,
    features: [
      "Online appointment booking system",
      "Treatment cost calculators",
      "Emergency contact systems",
      "Multi-step consultation forms",
      "WhatsApp integration",
      "Automated follow-up sequences"
    ]
  },
  {
    category: "Practice Growth",
    icon: <Zap className="h-6 w-6" />,
    features: [
      "Multi-location practice support",
      "Competitor analysis positioning",
      "Revenue tracking & analytics",
      "Patient portal integration",
      "Review management system",
      "Social proof optimization"
    ]
  },
  {
    category: "Compliance & Trust",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "GDPR compliant patient data handling",
      "Medical-grade security protocols",
      "NHS information integration",
      "Professional indemnity alignment",
      "CQC compliance considerations",
      "Secure payment processing"
    ]
  }
];

const pricingTiers = [
  {
    name: "Starter Practice",
    price: "£3,500",
    setup: "setup fee",
    monthly: "£750/month",
    revenueShare: "3% Net New Revenue",
    description: "Perfect for single-location practices establishing their digital presence",
    features: [
      "Single location SEO optimization",
      "Professional mobile-optimized website",
      "Google Business Profile setup",
      "Basic appointment booking system",
      "Review management (1 platform)",
      "Monthly blog content creation",
      "SSL certificate & hosting included",
      "Monthly performance reports"
    ],
    popular: false,
    cta: "Start Growing"
  },
  {
    name: "Professional Practice",
    price: "£6,000",
    setup: "setup fee",
    monthly: "£1,000/month",
    revenueShare: "5% Net New Revenue",
    description: "Comprehensive solution for growing practices expanding regionally",
    features: [
      "Multi-location SEO (up to 5 areas)",
      "Advanced conversion funnels",
      "2 custom treatment landing pages",
      "Enhanced JSON schema markup",
      "Multi-platform review integration (3 platforms)",
      "15 custom service pages",
      "2 blog posts per month",
      "CRM integration setup",
      "Advanced analytics dashboard"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Premium Practice",
    price: "£10,000",
    setup: "setup fee",
    monthly: "£1,500/month",
    revenueShare: "7% Net New Revenue",
    description: "Complete digital transformation for ambitious, high-growth practices",
    features: [
      "Custom Next.js development",
      "Advanced CRO funnel systems",
      "Competitor positioning pages",
      "Patient portal integration",
      "Real-time treatment calculators",
      "WhatsApp integration & automation",
      "Membership system setup",
      "Priority support & account manager",
      "Quarterly strategy reviews",
      "Performance optimization"
    ],
    popular: false,
    cta: "Transform Practice"
  }
];

const addOnServices = [
  {
    name: "Content Marketing Plus",
    price: "£500/month",
    description: "Additional blog posts + social media content"
  },
  {
    name: "Email Marketing Automation",
    price: "£300/month", 
    description: "Advanced email sequences & newsletters"
  },
  {
    name: "Advanced Analytics Dashboard",
    price: "£250/month",
    description: "Real-time ROI tracking & custom KPIs"
  },
  {
    name: "Local Reputation Management",
    price: "£400/month",
    description: "Proactive review generation & management"
  }
];

export default function DentalPracticesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-6 text-sm px-4 py-2">
                🦷 Digital Growth for Dental Practices
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Dental Practice Websites That
                <span className="text-cyan-300 block">Actually Generate Revenue</span>
              </h1>
              <p className="text-xl font-body mb-8 opacity-90">
                Stop losing patients to competitors with outdated websites. Our specialized dental practice 
                websites are designed to convert visitors into booked appointments and grow your practice revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="#pricing">
                    View Growth Packages
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
                    Get Revenue Forecast
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Proven Results for Dental Practices</h3>
                <div className="space-y-4">
                  {[
                    "Average 250% increase in qualified leads within 6 months",
                    "£75,000+ additional revenue in first 12 months (typical)",
                    "Modern Next.js technology (not outdated WordPress)",
                    "Revenue-sharing model - we succeed when you succeed",
                    "12-month partnership for guaranteed ROI"
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

      {/* Problem/Solution Section */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Dental Practices Are Losing Patients Online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              87% of patients research dentists online before booking. If your website isn't converting visitors 
              into appointments, you're losing patients to competitors every day.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-heading font-bold text-red-600 mb-6">The Problem:</h3>
              <ul className="space-y-4">
                {[
                  "Outdated WordPress sites that load slowly on mobile",
                  "Generic templates that don't showcase your expertise", 
                  "No clear conversion path from visitor to booked appointment",
                  "Missing local SEO - invisible for 'dentist near me' searches",
                  "No system to capture and nurture potential patients"
                ].map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-forest-green mb-6">Our Solution:</h3>
              <ul className="space-y-4">
                {[
                  "Modern Next.js websites that load in under 2 seconds",
                  "Dental-specific design showcasing treatments & results",
                  "Conversion-optimized patient journey with clear CTAs", 
                  "Local SEO domination for your geographic area",
                  "Automated systems that nurture leads into appointments"
                ].map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Revenue-Focused Features for Dental Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed with one goal: converting website visitors into booked appointments 
              and growing your practice revenue.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {dentalFeatures.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
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
      <section id="pricing" className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Growth-Focused Packages for Dental Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Choose your growth package. All include 12-month partnership, modern technology, 
              and revenue-sharing alignment.
            </p>
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm">
              🎯 12-Month Minimum • Revenue Share Model • Modern Next.js Technology
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
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

          {/* Add-on Services */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-6 text-center">
              Optional Add-On Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((addon, index) => (
                <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-midnight-blue mb-2">{addon.name}</h4>
                  <div className="text-xl font-bold text-blue-600 mb-2">{addon.price}</div>
                  <p className="text-sm text-gray-600">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-8">
            Real ROI for Dental Practices
          </h2>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-heading font-bold mb-6">Typical Premium Package Client (18 Months)</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">£37,000</div>
                <div className="text-sm opacity-90">Setup + Monthly Fees</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">£21,000</div>
                <div className="text-sm opacity-90">Revenue Share (typical)</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">£300,000</div>
                <div className="text-sm opacity-90">Additional Practice Revenue</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-lg">
                <strong>Total Investment:</strong> £58,000 • <strong>Client Revenue Increase:</strong> £300,000
              </div>
              <div className="text-xl font-bold mt-2">ROI: 517%</div>
            </div>
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
            Join dental practices across the UK that have increased their patient bookings by 250%+ 
            and added £75,000+ in annual revenue with our proven growth system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/contact">
                Get Your Revenue Forecast
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
          <p className="text-sm opacity-75">
            Free consultation • No obligations • See exactly how we'll grow your practice
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Revenue-focused websites for dental practices. Modern technology, proven results, 
                and partnership-based growth.
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
              <h4 className="font-heading font-semibold mb-4">Industries</h4>
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
                    href="/industries/accounting-practices"
                    className="hover:text-white transition-colors"
                  >
                    Accounting Practices
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
                    href="tel:+4407432039801"
                    className="hover:text-white transition-colors"
                  >
                    +44 74 3203 9801
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