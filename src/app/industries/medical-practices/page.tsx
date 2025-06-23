"use client";

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
  Heart,
  Shield,
  Star,
  Users,
  TrendingUp,
  Target,
  Zap,
  Activity,
  Stethoscope,
  FileText,
  UserCheck,
  ClipboardList,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const medicalFeatures = [
  {
    category: "Patient Acquisition",
    icon: <Target className="h-6 w-6" />,
    features: [
      "Local SEO optimisation for 'doctor near me' searches",
      "Google Business Profile optimisation",
      "Zero-click search optimisation",
      "Specialty-specific landing pages",
      "Patient testimonial integration",
      "Medical condition education pages"
    ]
  },
  {
    category: "Patient Management",
    icon: <Users className="h-6 w-6" />,
    features: [
      "Online appointment booking system",
      "Patient portal for secure record access",
      "Automated appointment reminders",
      "Prescription request systems",
      "Patient education resources",
      "Multi-doctor scheduling coordination"
    ]
  },
  {
    category: "Clinical Excellence",
    icon: <Activity className="h-6 w-6" />,
    features: [
      "Medical speciality showcases",
      "Consultant profiles and credentials",
      "Treatment information and preparation guides",
      "NHS and private insurance integration",
      "Telemedicine consultation booking",
      "Medical procedure explanations"
    ]
  },
  {
    category: "Compliance & Security",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "GDPR compliant patient data handling",
      "Medical-grade security protocols",
      "CQC compliance considerations",
      "Professional indemnity alignment",
      "NHS information integration",
      "Secure patient communication systems"
    ]
  }
];

const pricingTiers = [
  {
    name: "Solo Practitioner",
    price: "£3,500",
    setup: "setup fee",
    monthly: "£750/month",
    revenueShare: "3% Net New Revenue",
    description: "Perfect for individual doctors or small clinics establishing their digital presence",
    features: [
      "Single practitioner website optimisation",
      "Professional mobile-optimised design",
      "Google Business Profile setup",
      "Basic appointment booking system",
      "Patient contact and enquiry forms",
      "Medical credentials showcase",
      "SSL certificate & hosting included",
      "Monthly performance reports"
    ],
    popular: false,
    cta: "Start Growing"
  },
  {
    name: "Multi-Doctor Practice",
    price: "£6,000",
    setup: "setup fee",
    monthly: "£1,000/month",
    revenueShare: "5% Net New Revenue",
    description: "Comprehensive solution for established practices with multiple specialities",
    features: [
      "Multi-doctor practice layouts",
      "Advanced appointment scheduling",
      "Individual doctor profile pages",
      "Specialty service showcases",
      "Patient portal integration",
      "NHS and private insurance information",
      "2 blog posts per month",
      "Advanced analytics dashboard",
      "Online consultation booking"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Healthcare Group",
    price: "£10,000",
    setup: "setup fee",
    monthly: "£1,500/month",
    revenueShare: "7% Net New Revenue",
    description: "Complete digital transformation for multi-location healthcare organisations",
    features: [
      "Custom healthcare platform development",
      "Multi-location practice management",
      "Advanced patient portal systems",
      "Telemedicine integration",
      "Healthcare group branding",
      "Advanced reporting and analytics",
      "CQC compliance features",
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
    description: "Medical blog posts + patient education content"
  },
  {
    name: "Email Marketing Automation",
    price: "£300/month",
    description: "Patient communication sequences & newsletters"
  },
  {
    name: "Advanced Analytics Dashboard",
    price: "£250/month",
    description: "Real-time patient acquisition & ROI tracking"
  },
  {
    name: "Reputation Management",
    price: "£400/month",
    description: "Proactive review generation & management"
  }
];

export default function MedicalPracticesPage() {
  const [stickyContactVisible, setStickyContactVisible] = useState(false);
  const [contactOptionsOpen, setContactOptionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const businessStagesSection = document.getElementById('business-stages');
      const industriesSection = document.getElementById('industries-section');

      if (businessStagesSection && industriesSection) {
        const businessStagesBottom = businessStagesSection.offsetTop + businessStagesSection.offsetHeight;
        const industriesBottom = industriesSection.offsetTop + industriesSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (window.scrollY > businessStagesBottom && scrollPosition < industriesBottom + 200) {
          setStickyContactVisible(true);
        } else {
          setStickyContactVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  Medical Practices
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
                🩺 Digital Growth for Medical Practices
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Medical Practice Websites That
                <span className="text-cyan-300 block">Actually Generate Revenue</span>
              </h1>
              <p className="text-xl font-body mb-8 opacity-90">
                Stop losing patients to competitors with outdated websites. Our specialised medical practice
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
                <h3 className="text-2xl font-heading font-bold mb-6">Proven Results for Medical Practices</h3>
                <div className="space-y-4">
                  {[
                    "Average 200% increase in qualified patient leads within 6 months",
                    "£100,000+ additional revenue in first 12 months (typical)",
                    "Custom-coded websites (not slow WordPress + plugins)",
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
              Why Medical Practices Are Losing Patients Online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Over 80% of patients use search engines to find healthcare providers before booking. If your website isn't converting visitors
              into appointments, you're losing patients to competitors every day. Time for a check-up on your digital health!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-heading font-bold text-red-600 mb-6">The Problem:</h3>
              <ul className="space-y-4">
                {[
                  "Outdated WordPress sites with countless plugins that constantly break",
                  "Generic templates that don't showcase medical expertise",
                  "No clear conversion path from visitor to booked appointment",
                  "Missing local SEO - invisible for 'doctor near me' searches",
                  "Poor mobile experience frustrating potential patients"
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
                  "Medical-specific design showcasing expertise & credentials",
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
              Revenue-Focused Features for Medical Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed with one goal: converting website visitors into booked appointments
              and growing your practice revenue. Like a perfect diagnosis - precise, effective, and evidence-based.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {medicalFeatures.map((category, index) => (
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
              🚀 Future-Ready Healthcare Technology
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Built for Today's Healthcare Digital Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While competitors cling to outdated WordPress solutions, we're building high-performance healthcare websites
              optimised for modern patient behaviour and tomorrow's digital healthcare.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Healthcare SEO Excellence
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Optimised for healthcare-specific searches that drive qualified patient appointments,
                  ensuring your practice appears prominently for relevant medical queries.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Medical condition landing pages</li>
                  <li>• Local healthcare search optimisation</li>
                  <li>• NHS service integration</li>
                  <li>• Medical speciality positioning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Patient-Focused Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Our custom-coded medical websites deliver lightning-fast performance that patients expect,
                  with healthcare-specific functionality built for conversion.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Sub-2 second loading times</li>
                  <li>• Mobile-first patient experience</li>
                  <li>• Accessibility compliance (WCAG)</li>
                  <li>• Cross-device appointment booking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Medical-Grade Security
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  While WordPress sites struggle with security vulnerabilities, our custom-built solutions
                  meet medical data protection standards from the ground up.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• GDPR compliant by design</li>
                  <li>• Medical-grade encryption</li>
                  <li>• CQC compliance considerations</li>
                  <li>• Secure patient data handling</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-4">
                The WordPress Problem in Healthcare
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">What Competitors Are Stuck With:</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Constant plugin updates breaking functionality</li>
                    <li>• Slow loading times losing patient trust</li>
                    <li>• Security vulnerabilities with patient data</li>
                    <li>• Generic templates unsuitable for healthcare</li>
                    <li>• Poor mobile experience on medical content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-3">What You Get Instead:</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Purpose-built code for medical practices</li>
                    <li>• Lightning-fast performance every time</li>
                    <li>• Medical-grade security protocols</li>
                    <li>• Healthcare-specific design and functionality</li>
                    <li>• Perfect mobile experience for patients</li>
                  </ul>
                </div>
              </div>
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
              Every successful medical practice website follows the same principle: Attract → Inform → Convert.
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
                Get found by patients actively searching for medical services in your area
              </p>
              <ul className="text-left space-y-3 opacity-90">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Dominate 'doctor near me' searches</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Medical speciality landing pages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Google Business Profile mastery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Condition-specific content pages</span>
                </li>
              </ul>
            </div>

            {/* Inform */}
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                2. INFORM
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Build trust and showcase expertise with compelling, educational medical content
              </p>
              <ul className="text-left space-y-3 opacity-90">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Doctor credentials and specialities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Patient testimonials & success stories</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Treatment information & preparation guides</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Medical condition education resources</span>
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
                  <span>Online consultation requests</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span>Patient portal access</span>
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
                  <div className="text-3xl font-bold mb-2 text-cyan-300">200%+</div>
                  <div className="text-sm opacity-90">Increase in qualified patient leads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2 text-cyan-300">£100,000+</div>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Growth-Focused Packages for Medical Practices
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

                <CardHeader className="text-center pb-4 pt-8">
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
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-4">
              Optional Add-On Services
            </h3>
            <p className="text-gray-600 mb-8">
              Enhance your medical practice growth with these strategic add-ons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-lg font-heading text-midnight-blue mb-2">
                    {service.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Contact Options */}
      {stickyContactVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative">
            {contactOptionsOpen && (
              <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[280px]">
                <h3 className="font-heading font-bold text-midnight-blue mb-4">Get Your Medical Practice Quote</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@postino.co.uk?subject=Medical Practice Website Enquiry&body=Hi, I'm interested in learning more about your medical practice websites. Please get in touch."
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-blue-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-midnight-blue">Email Us</div>
                      <div className="text-sm text-gray-600">hello@postino.co.uk</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/447432039801?text=Hi! I'm interested in learning more about your medical practice websites. Can we chat?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-green-600 hover:bg-green-50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white group-hover:bg-green-700">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-midnight-blue">WhatsApp</div>
                      <div className="text-sm text-gray-600">Quick response</div>
                    </div>
                  </a>

                  <a
                    href="tel:+447432039801"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white group-hover:bg-purple-700">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-midnight-blue">Call Us</div>
                      <div className="text-sm text-gray-600">+44 74 3203 9801</div>
                    </div>
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Ready to grow your medical practice? We typically respond within 2 hours.
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setContactOptionsOpen(!contactOptionsOpen)}
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="font-heading font-semibold">Contact Us</span>
              <div className={`transform transition-transform duration-200 ${contactOptionsOpen ? 'rotate-180' : ''}`}>
                <ArrowRight className="h-4 w-4 rotate-90" />
              </div>
            </button>
          </div>
        </div>
      )}

      {contactOptionsOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setContactOptionsOpen(false)}
        />
      )}

      {/* CTA Section */}
      <section className="py-16 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Medical Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join medical practices achieving average 200% increase in patient leads within 6 months
            through our revenue-focused partnership approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Revenue-focused websites for medical practices. Partnership approach with growth optimization
                and medical compliance built-in.
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
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. | Revenue-focused websites for medical practices.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
