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
  FileText,
  Heart,
  Lock,
  Shield,
  Star,
  Stethoscope,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";

const medicalFeatures = [
  {
    category: "Patient Care",
    icon: <Stethoscope className="h-6 w-6" />,
    features: [
      "Online consultation booking",
      "Patient medical history access",
      "Prescription request system",
      "Test results portal",
      "Health monitoring dashboards",
      "Appointment reminder system"
    ]
  },
  {
    category: "Multi-Doctor Practice",
    icon: <Users className="h-6 w-6" />,
    features: [
      "Individual doctor profiles",
      "Speciality service pages",
      "Doctor availability calendars",
      "Multi-location practice support",
      "Team credentials showcase",
      "Department organization"
    ]
  },
  {
    category: "Patient Education",
    icon: <FileText className="h-6 w-6" />,
    features: [
      "Health condition libraries",
      "Treatment information guides",
      "Prevention & wellness content",
      "Interactive health tools",
      "Video consultation setup",
      "Patient education materials"
    ]
  },
  {
    category: "Medical Compliance",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "NHS integration compatibility",
      "Medical data encryption",
      "GDPR healthcare compliance",
      "Professional indemnity display",
      "GMC registration showcase",
      "Clinical governance systems"
    ]
  }
];

const pricingTiers = [
  {
    name: "GP Practice",
    price: "£3,000",
    setup: "£600 setup",
    monthly: "£119/month",
    description: "Ideal for general practice and family medicine clinics",
    features: [
      "8-page professional website",
      "Online appointment booking",
      "Patient portal access",
      "Service information pages",
      "Doctor team profiles",
      "Health education resources",
      "NHS information integration",
      "Mobile responsive design",
      "Basic SEO optimisation"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Specialist Practice",
    price: "£4,800",
    setup: "£900 setup",
    monthly: "£179/month",
    description: "Comprehensive solution for specialist medical practices",
    features: [
      "12-page custom website",
      "Advanced booking system",
      "Multi-doctor profiles",
      "Speciality service showcases",
      "Patient education library",
      "Treatment information guides",
      "Video consultation setup",
      "Insurance information",
      "Advanced SEO package",
      "Analytics dashboard"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Medical Centre",
    price: "£7,200",
    setup: "£1,400 setup",
    monthly: "£229/month",
    description: "Enterprise solution for large medical centres and hospitals",
    features: [
      "Unlimited pages",
      "Multi-location support",
      "Department organization",
      "Advanced patient portal",
      "Medical records integration",
      "Prescription management",
      "Multi-language support",
      "Custom integrations",
      "Priority support",
      "Training & onboarding"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const medicalTestimonials = [
  {
    name: "Dr. Michael",
    practice: "City Medical Centre",
    location: "Leeds",
    quote: "The patient portal has revolutionized how we deliver care. Our patients can access test results securely and book appointments 24/7.",
    rating: 5,
    results: "+250% patient satisfaction"
  },
  {
    name: "Dr. Sarah",
    practice: "Specialist Cardiology",
    location: "Edinburgh",
    quote: "The specialist service pages have helped us educate patients about complex procedures. Our consultation conversion rate has increased dramatically.",
    rating: 5,
    results: "+180% new consultations"
  },
  {
    name: "Dr. James",
    practice: "Family Health Practice",
    location: "Bristol",
    quote: "The NHS integration and GDPR compliance gave us complete confidence. The booking system has reduced our administrative burden significantly.",
    rating: 5,
    results: "+60% efficiency gains"
  }
];

const caseStudies = [
  {
    title: "Harley Street Cardiology",
    challenge: "Complex specialist services difficult to explain online",
    solution: "Comprehensive patient education library and consultation booking",
    results: [
      "300% increase in specialist consultations",
      "85% reduction in initial consultation questions",
      "£400k additional private practice revenue",
      "95% patient understanding improvement"
    ]
  },
  {
    title: "NHS Partnership Practice",
    challenge: "Multiple locations with different services and doctors",
    solution: "Multi-location website with doctor profiles and service mapping",
    results: [
      "200% improvement in correct appointment bookings",
      "150% increase in patient portal usage",
      "40% reduction in misdirected appointments",
      "£180k cost savings in administration"
    ]
  }
];

const specialties = [
  "General Practice", "Cardiology", "Dermatology", "Gastroenterology",
  "Neurology", "Oncology", "Orthopaedics", "Paediatrics",
  "Psychiatry", "Radiology", "Urology", "Endocrinology"
];

export default function MedicalPracticesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-6 text-sm px-4 py-2">
                🩺 Medical Practice Websites
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Medical Practice Websites That
                <span className="text-teal-300 block">Build Patient Trust</span>
              </h1>
              <p className="text-xl font-body mb-8 opacity-90">
                Professional websites designed specifically for medical practices and healthcare providers.
                Enhance patient care, streamline consultations, and maintain full medical compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100"
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
                  className="border-white text-white hover:bg-white hover:text-emerald-600"
                >
                  <Link href="/contact">
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Medical Practice Benefits</h3>
                <div className="space-y-4">
                  {[
                    "NHS-compatible patient portals",
                    "GDPR compliant medical data handling",
                    "Multi-doctor practice management",
                    "Patient education libraries",
                    "Video consultation integration"
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                      <span className="text-white/90">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Supporting All Medical Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our medical practice websites are designed to support every medical specialty with
              tailored features and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialties.map((specialty, index) => (
              <Card key={index} className="text-center p-4 border border-emerald-200 hover:border-emerald-400 transition-colors">
                <CardContent className="p-2">
                  <Stethoscope className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-midnight-blue text-sm">{specialty}</p>
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
              Complete Medical Practice Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your medical practice needs to provide excellent patient care and
              maintain professional healthcare standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {medicalFeatures.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-600/10 rounded-lg flex items-center justify-center text-emerald-600">
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
              Medical Practice Website Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional medical websites designed for healthcare providers. All packages include
              medical compliance, patient portals, and ongoing support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-emerald-600 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading text-midnight-blue mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-emerald-600 mb-1">
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
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
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
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Trusted by Medical Professionals
            </h2>
            <p className="text-xl opacity-90">
              See how our websites have improved patient care and practice efficiency across the UK.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {medicalTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-teal-300 font-semibold text-sm mb-2">
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
              Medical Practice Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from medical practices that enhanced their patient care with our specialized websites.
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

      {/* Compliance Section */}
      <section className="py-16 bg-midnight-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Full Medical Compliance Guaranteed
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our medical websites meet all UK healthcare regulations and professional standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "GDPR Healthcare Compliance",
                description: "Full compliance with healthcare data protection regulations and patient privacy requirements."
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "GMC & Professional Standards",
                description: "Websites designed to meet General Medical Council requirements and professional presentation standards."
              },
              {
                icon: <Lock className="h-8 w-8" />,
                title: "Secure Patient Data",
                description: "Military-grade encryption for all patient information, secure portals, and data backup systems."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-300">
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
                question: "How do you ensure GDPR compliance for medical data?",
                answer: "Our websites are built with healthcare-specific GDPR compliance, including encrypted patient data storage, secure transmission protocols, and comprehensive privacy controls that meet medical industry standards."
              },
              {
                question: "Can you integrate with NHS systems and existing practice management software?",
                answer: "Yes, we can integrate with most NHS-compatible systems and major practice management software including EMIS, SystmOne, and Vision. We assess your current systems during consultation."
              },
              {
                question: "Do you support multi-doctor practices and medical centres?",
                answer: "Absolutely. Our websites are designed to showcase multiple doctors, different specialties, department organization, and complex medical practice structures."
              },
              {
                question: "What about patient education and health information?",
                answer: "We include comprehensive patient education libraries, treatment information guides, health condition resources, and interactive tools to help patients understand their care."
              },
              {
                question: "How do you handle video consultations and telemedicine?",
                answer: "We can integrate secure video consultation platforms, appointment booking for virtual visits, and patient portal access for remote healthcare delivery."
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
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Enhance Your Medical Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join medical practices across the UK that have improved patient care and practice efficiency
            with our specialized healthcare websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100"
            >
              <Link href="/contact">
                Get Your Medical Website Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              <Link href="/growth-consultation">
                Book Healthcare Consultation
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
                Professional medical practice websites. GDPR compliant, NHS compatible, and designed to enhance patient care.
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
                    Healthcare Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/growth-marketing"
                    className="hover:text-white transition-colors"
                  >
                    Medical Marketing
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
              <h4 className="font-heading font-semibold mb-4">Medical Specialties</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>General Practice</li>
                <li>Specialist Clinics</li>
                <li>Medical Centres</li>
                <li>Private Healthcare</li>
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
              © 2025 Postino Ltd. All rights reserved. | Professional medical practice websites.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
