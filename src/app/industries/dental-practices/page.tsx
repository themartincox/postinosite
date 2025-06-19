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
      "Local SEO optimisation for 'dentist near me' searches",
      "Google Business Profile optimisation",
      "Zero-click search optimisation",
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
      "Social proof optimisation"
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
      "Single location SEO optimisation",
      "Professional mobile-optimised website",
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
      "Completely custom-coded development",
      "Advanced CRO funnel systems",
      "Competitor positioning pages",
      "Patient portal integration",
      "Real-time treatment calculators",
      "WhatsApp integration & automation",
      "Membership system setup",
      "Priority support & account manager",
      "Quarterly strategy reviews",
      "Performance optimisation"
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
                Stop losing patients to competitors because of outdated websites. Our specialised dental practice 
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
                  className="border-white text-blue hover:bg-blue hover:text-white-600"
                >
                  <Link href="/contact">
                    Let's Talk!
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Proven Results for Dental Practices</h3>
                <div className="space-y-4">
                  {[
                    "Average 250% increase in qualified leads within 3 months",
                    "£75,000+ additional revenue in first 6 months (typical)",
                    "Custom-coded websites (not slow WordPress + plugins)",
                    "Revenue-sharing model - we succeed when you thrive",
                    "12-month partnership to maximise your ROI!"
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
              Over 80% of patients use search engines to find healthcare providers before booking. If your website isn't converting visitors 
              into appointments, you're losing patients to competitors every day!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-heading font-bold text-red-600 mb-6">The Problem:</h3>
              <ul className="space-y-4">
                {[
                  "Outdated WordPress sites with countless plugins that constantly break",
                  "Generic templates that don't showcase your expertise", 
                  "No clear conversion path from visitor to booked appointment",
                  "Missing local SEO - invisible for 'dentist near me' searches",
                  "Constantly updating plugins and security patches"
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
                  "Custom-coded websites that load in under 2 seconds",
                  "Dental-specific design showcasing treatments & results",
                  "Conversion-optimised patient journey with clear CTAs", 
                  "Local SEO domination for your geographic area",
                  "Purpose-built code - exactly what your practice needs, nothing more"
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
              and growing your practice revenue. Like a perfect root canal - precise, effective, and built to last.
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

      {/* AI & Future-Proofing Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-600 text-white mb-6 text-sm px-4 py-2">
              🚀 Future-Ready Technology
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Built for Today's AI-Driven Search Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While competitors cling to yesterday's solutions, we're building high-performance websites 
              optimised for AI search, zero-click results, and tomorrow's digital landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Zero-Click Optimisation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Optimised for Google's AI search features that answer patient questions directly in search results, 
                  ensuring your practice appears prominently even when patients never click through.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Featured snippet optimisation</li>
                  <li>• Schema markup for treatments</li>
                  <li>• Local pack domination</li>
                  <li>• Voice search optimisation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  AI-Powered Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Our custom-coded websites are built with AI integration in mind, delivering lightning-fast 
                  performance that search engines and patients love.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Sub-2 second loading times</li>
                  <li>• AI-optimised content structure</li>
                  <li>• Automated patient insights</li>
                  <li>• Predictive booking patterns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Future-Proof Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  While WordPress sites struggle with updates and security patches, our custom-built solutions 
                  evolve seamlessly with changing technology and search algorithms.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• No plugin dependencies</li>
                  <li>• Automatic performance scaling</li>
                  <li>• Search algorithm adaptability</li>
                  <li>• Continuous optimisation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-4">
                The WordPress Problem
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">What Competitors Are Stuck With:</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Constant plugin updates breaking functionality</li>
                    <li>• Slow loading times hurting search rankings</li>
                    <li>• Security vulnerabilities requiring patches</li>
                    <li>• Generic templates that all look the same</li>
                    <li>• Limited customisation for dental-specific needs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-3">What You Get Instead:</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Purpose-built code for dental practices</li>
                    <li>• Lightning-fast performance every time</li>
                    <li>• Zero maintenance headaches</li>
                    <li>• Completely unique, branded design</li>
                    <li>• Built specifically for your practice needs</li>
                  </ul>
                </div>
              </div>
            </div>
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
              Choose your growth package. All include 12-month partnership, custom-coded technology, 
              and revenue-sharing alignment.
            </p>
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm">
              🎯 12-Month Minimum • Revenue Share Model • Custom-Coded Technology
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

      {/* Attract - Inform - Convert Section */}
      <section className="py-16 bg-midnight-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Our Proven 3-Step Growth Formula
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Every successful dental practice website follows the same principle: Attract → Inform → Convert. 
              We've perfected this formula to turn website visitors into loyal patients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Attract */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                1. ATTRACT
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Get found by patients actively searching for dental services in your area
              </p>
              <ul className="text-left space-y-3 opacity-90">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Dominate 'dentist near me' searches</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Zero-click search optimisation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Google Business Profile mastery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Treatment-specific landing pages</span>
                </li>
              </ul>
            </div>

            {/* Inform */}
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                2. INFORM
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Build trust and showcase expertise with compelling, educational content
              </p>
              <ul className="text-left space-y-3 opacity-90">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Before & after treatment galleries</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Patient testimonials & reviews</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Treatment cost calculators</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Educational blog content</span>
                </li>
              </ul>
            </div>

            {/* Convert */}
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                3. CONVERT
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Turn interested visitors into booked appointments with seamless booking systems
              </p>
              <ul className="text-left space-y-3 opacity-90">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>One-click appointment booking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>WhatsApp instant messaging</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Emergency contact systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Automated follow-up sequences</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-bold mb-4">
                The Result: More Patients, More Revenue
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2 text-cyan-300">250%+</div>
                  <div className="text-sm opacity-90">Increase in qualified leads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-cyan-300">£75,000+</div>
                  <div className="text-sm opacity-90">Additional annual revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-cyan-300">6 months</div>
                  <div className="text-sm opacity-90">To see full ROI</div>
                </div>
              </div>
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
            and added £275,000+ in annual revenue with our proven growth system.
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
                Revenue-focused websites for dental practices. Custom-coded technology, proven results, 
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
