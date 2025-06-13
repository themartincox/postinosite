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
    name: "Starter Practice",
    price: "£2,500",
    setup: "£500 setup",
    monthly: "£99/month",
    description: "Perfect for single-practitioner dental practices",
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
    name: "Professional Practice",
    price: "£4,200",
    setup: "£800 setup",
    monthly: "£149/month",
    description: "Comprehensive solution for multi-practitioner dental practices",
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
    name: "Premium Practice",
    price: "£6,500",
    setup: "£1,200 setup",
    monthly: "£199/month",
    description: "Enterprise solution for large dental practices and clinics",
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

const dentalTestimonials = [
  {
    name: "Dr. Sarah",
    practice: "Smile Dental Care",
    location: "Manchester",
    quote: "Our new website has increased online bookings by 300%. The patient portal has transformed how we manage appointments and communicate with patients.",
    rating: 5,
    results: "+300% online bookings"
  },
  {
    name: "Dr. James",
    practice: "Family Dental Practice",
    location: "Birmingham",
    quote: "The treatment showcase galleries have been incredible for patient education. We're attracting more complex cases and higher-value treatments.",
    rating: 5,
    results: "+150% new patients"
  },
  {
    name: "Dr. Emma",
    practice: "Modern Dentistry",
    location: "London",
    quote: "The GDPR compliance features gave us complete peace of mind. Our patients love the secure portal for accessing their treatment records.",
    rating: 5,
    results: "+90% patient satisfaction"
  }
];

const caseStudies = [
  {
    title: "City Dental Practice",
    challenge: "Low online visibility and manual appointment scheduling",
    solution: "Comprehensive website with SEO optimization and booking system",
    results: [
      "400% increase in online appointments",
      "250% improvement in Google ranking",
      "60% reduction in phone call volume",
      "£150k additional revenue in first year"
    ]
  },
  {
    title: "Family Smile Clinic",
    challenge: "Difficulty showcasing cosmetic treatments and building trust",
    solution: "Treatment galleries, patient testimonials, and virtual consultations",
    results: [
      "300% increase in cosmetic consultations",
      "180% growth in treatment plan acceptance",
      "95% patient satisfaction rating",
      "£200k cosmetic revenue increase"
    ]
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
                🦷 Dental Practice Websites
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Dental Practice Websites That
                <span className="text-cyan-300 block">Attract New Patients</span>
              </h1>
              <p className="text-xl font-body mb-8 opacity-90">
                Specialized websites designed specifically for dental practices. Increase patient bookings,
                streamline operations, and build trust with GDPR-compliant, professional websites.
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
                    "300% average increase in online bookings",
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
              Choose the perfect package for your dental practice. All packages include professional design,
              mobile optimization, and ongoing support.
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

      {/* Testimonials */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Trusted by Dental Practices Across the UK
            </h2>
            <p className="text-xl opacity-90">
              See how our websites have transformed dental practices and increased patient bookings.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {dentalTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-cyan-300 font-semibold text-sm mb-2">
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
              Dental Practice Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from dental practices that transformed their online presence with our specialized websites.
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
                question: "How long does it take to build a dental practice website?",
                answer: "Typically 4-6 weeks from initial consultation to launch. This includes design, development, content creation, and integration with your practice management system."
              },
              {
                question: "Is the patient portal GDPR compliant?",
                answer: "Yes, all our websites are fully GDPR compliant with encrypted patient data storage, secure login systems, and comprehensive privacy controls."
              },
              {
                question: "Can you integrate with our existing practice management software?",
                answer: "We integrate with most major dental practice management systems including Dentally, Software of Excellence, and others. We'll assess your current system during consultation."
              },
              {
                question: "Do you provide training for our staff?",
                answer: "Yes, we provide comprehensive training for your team on how to manage the website, update content, and use the patient portal and booking system."
              },
              {
                question: "What ongoing support do you provide?",
                answer: "We offer monthly maintenance, security updates, technical support, and performance monitoring. Our team is available for any questions or issues."
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
      <section className="py-16 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Dental Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of dental practices across the UK that have increased their patient bookings
            and streamlined their operations with our specialized websites.
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
                Specialized websites for dental practices. GDPR compliant, patient-focused, and designed to grow your practice.
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
                    +44 20 1234 5678
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. | Specialized websites for dental practices.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
