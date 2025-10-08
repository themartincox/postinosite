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
  BarChart3,
  Calculator,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Lock,
  PoundSterling,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const accountingFeatures = [
  {
    category: "Client Portal & Document Management",
    icon: <FileText className="h-6 w-6" />,
    features: [
      "Secure client document upload",
      "Tax document organization",
      "Real-time document status tracking",
      "Digital signature capabilities",
      "Automated document reminders",
      "Client communication portal"
    ]
  },
  {
    category: "Service Portfolio Display",
    icon: <Calculator className="h-6 w-6" />,
    features: [
      "Tax preparation showcase",
      "Business advisory services",
      "Bookkeeping service descriptions",
      "Payroll management features",
      "VAT return specialization",
      "Self-assessment expertise"
    ]
  },
  {
    category: "Practice Management Tools",
    icon: <BarChart3 className="h-6 w-6" />,
    features: [
      "Appointment booking system",
      "Tax deadline calendars",
      "Client progress dashboards",
      "Revenue tracking tools",
      "Staff workload management",
      "Performance analytics"
    ]
  },
  {
    category: "Professional Compliance",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "ACCA/ICAEW credential display",
      "Professional indemnity information",
      "GDPR compliant data handling",
      "Anti-money laundering compliance",
      "Professional standards showcase",
      "Regulatory update integration"
    ]
  }
];

const pricingTiers = [
  {
    name: "Solo Practitioner",
    price: "£2,200",
    setup: "£450 setup",
    monthly: "£89/month",
    description: "Perfect for individual accounting practitioners and small firms",
    features: [
      "6-page professional website",
      "Client portal access",
      "Service showcase pages",
      "Online consultation booking",
      "Tax deadline calendar",
      "Contact forms and enquiry system",
      "Professional credentials display",
      "Mobile responsive design",
      "Basic SEO optimisation"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Professional Practice",
    price: "£3,800",
    setup: "£750 setup",
    monthly: "£139/month",
    description: "Comprehensive solution for established accounting practices",
    features: [
      "10-page custom website",
      "Advanced client portal",
      "Document upload system",
      "Multi-service showcases",
      "Team member profiles",
      "Client testimonials section",
      "Resource center & guides",
      "Email integration",
      "Advanced SEO package",
      "Analytics dashboard"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Enterprise Firm",
    price: "£5,500",
    setup: "£1,100 setup",
    monthly: "£189/month",
    description: "Enterprise solution for large accounting firms and multi-location practices",
    features: [
      "Unlimited pages",
      "Multi-location support",
      "Advanced document management",
      "Client relationship portal",
      "Custom integrations",
      "Automated workflows",
      "Priority support",
      "Training & onboarding",
      "Quarterly strategy reviews",
      "White-label solutions"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const accountingTestimonials = [
  {
    name: "Sarah",
    practice: "Premier Tax Solutions",
    location: "Manchester",
    quote: "The client portal has revolutionized our document collection process. We've reduced turnaround times by 60% and clients love the convenience.",
    rating: 5,
    results: "+200% client satisfaction"
  },
  {
    name: "James",
    practice: "Business Advisory Partners",
    location: "Birmingham",
    quote: "Our new website showcases our expertise beautifully. We're attracting higher-value clients and our consultation bookings have tripled.",
    rating: 5,
    results: "+300% new enquiries"
  },
  {
    name: "Emma",
    practice: "City Accounting Services",
    location: "London",
    quote: "The automated appointment booking and tax deadline reminders have streamlined our operations. Our team can focus on what matters most - our clients.",
    rating: 5,
    results: "+150% efficiency"
  }
];

const caseStudies = [
  {
    title: "Manchester Tax Specialists",
    challenge: "Manual document collection causing delays and client frustration",
    solution: "Secure client portal with automated document tracking and reminders",
    results: [
      "60% reduction in document collection time",
      "95% client satisfaction with new portal",
      "40% increase in repeat business",
      "£85k additional revenue from efficiency gains"
    ]
  },
  {
    title: "Regional Business Advisors",
    challenge: "Difficulty showcasing diverse services and attracting premium clients",
    solution: "Professional service portfolio with case studies and expertise showcase",
    results: [
      "250% increase in high-value client enquiries",
      "180% growth in business advisory revenue",
      "90% improvement in consultation conversion",
      "£320k additional revenue in first year"
    ]
  }
];

const services = [
  "Tax Preparation", "Business Advisory", "Bookkeeping", "Payroll Services",
  "VAT Returns", "Self Assessment", "Corporation Tax", "Management Accounts",
  "Financial Planning", "Audit Services", "Company Formation", "Tax Planning"
];

export default function AccountingPracticesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      {/* Header is global; Navigation removed */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-6 text-sm px-4 py-2">
                📊 Accounting Practice Websites
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Accounting Websites That
                <span className="text-purple-300 block">Build Client Trust</span>
              </h1>
              <p className="text-xl font-body mb-8 opacity-90">
                Professional websites designed specifically for accounting practices and financial advisors.
                Streamline client communications, showcase expertise, and maintain full professional compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100"
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
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  <Link href="/contact">
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Why Accounting Practices Choose Us</h3>
                <div className="space-y-4">
                  {[
                    "Secure client document portals",
                    "Professional credential showcases",
                    "Automated tax deadline calendars",
                    "GDPR compliant data handling",
                    "ACCA/ICAEW integration ready"
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 flex-shrink-0" />
                      <span className="text-white/90">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Supporting All Accounting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our accounting practice websites are designed to showcase every service you offer with
              professional presentation and client-focused functionality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-4 border border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-2">
                  <Calculator className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-midnight-blue text-sm">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Complete Accounting Practice Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your accounting practice needs to attract quality clients, streamline operations,
              and maintain professional standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {accountingFeatures.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
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
              Accounting Practice Website Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional accounting websites designed for financial service providers. All packages include
              client portals, professional compliance, and ongoing support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
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

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading text-midnight-blue mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-purple-600 mb-1">
                      {tier.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {tier.setup} • {tier.monthly}
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

      {/* Testimonials */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Trusted by Accounting Professionals
            </h2>
            <p className="text-xl opacity-90">
              See how our websites have streamlined operations and attracted quality clients across the UK.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {accountingTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-purple-300 font-semibold text-sm mb-2">
                    {testimonial.results}
                  </div>
                  <CardDescription className="text-white/90 italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">{testimonial.practice}</p>
                    <p className="text-white/60 text-xs">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Accounting Practice Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from accounting practices that transformed their client experience with our specialized websites.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-midnight-blue mb-2">
                    {study.title}
                  </CardTitle>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Challenge</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Solution</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-800 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-forest-green flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-body text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standards Section */}
      <section className="py-16 bg-midnight-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Professional Standards & Compliance
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our accounting websites meet all professional standards and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "ACCA/ICAEW Integration",
                description: "Professional credential displays and regulatory compliance showcase for all major accounting bodies."
              },
              {
                icon: <Lock className="h-8 w-8" />,
                title: "Secure Client Data",
                description: "Bank-level encryption for client documents, secure portals, and comprehensive data protection."
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Anti-Money Laundering",
                description: "AML compliance features, professional indemnity displays, and regulatory update integration."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-300">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-heading text-white mb-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 font-body">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How secure is the client portal for sensitive financial documents?",
                answer: "Our client portals use bank-level encryption, secure authentication, and are fully GDPR compliant. All document transfers are encrypted and we maintain comprehensive audit trails."
              },
              {
                question: "Can you integrate with our existing accounting software?",
                answer: "Yes, we can integrate with most major accounting software including Xero, QuickBooks, Sage, and FreeAgent. We'll assess your current systems during consultation."
              },
              {
                question: "Do you support professional body requirements and credential displays?",
                answer: "Absolutely. We showcase ACCA, ICAEW, CIMA, and other professional credentials prominently, along with professional indemnity and regulatory compliance information."
              },
              {
                question: "What about tax deadline management and client reminders?",
                answer: "We include automated tax deadline calendars, client reminder systems, and document request workflows to streamline your practice operations."
              },
              {
                question: "Can multiple staff members manage the website?",
                answer: "Yes, we provide role-based access controls so different team members can manage their areas - from senior partners updating services to admin staff managing client communications."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-body">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Accounting Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join accounting practices across the UK that have streamlined their operations and attracted quality clients
            with our specialized professional websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <Link href="/contact">
                Get Your Accounting Website Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              <Link href="/growth-consultation">
                Book Professional Consultation
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
                Professional accounting practice websites. GDPR compliant, professionally focused, and designed to attract quality clients.
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
                    Professional Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/growth-marketing"
                    className="hover:text-white transition-colors"
                  >
                    Professional Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation"
                    className="hover:text-white transition-colors"
                  >
                    Practice Automation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Accounting Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>Tax Preparation</li>
                <li>Business Advisory</li>
                <li>Bookkeeping Services</li>
                <li>Payroll Management</li>
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
                    href="tel:+4407432039801"
                    className="hover:text-white transition-colors"
                  >
                    +44 20 1234 5678
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. All rights reserved. | Professional accounting practice websites.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
