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
  Activity,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Lock,
  MapPin,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import Link from "next/link";

const therapyFeatures = [
  {
    category: "Patient Care & Treatment",
    icon: <Heart className="h-6 w-6" />,
    features: [
      "Treatment modality showcases",
      "Injury assessment tools",
      "Exercise prescription libraries",
      "Rehabilitation progress tracking",
      "Pain management resources",
      "Recovery timeline displays"
    ]
  },
  {
    category: "Appointment & Scheduling",
    icon: <Calendar className="h-6 w-6" />,
    features: [
      "Online appointment booking",
      "Treatment session scheduling",
      "Therapist availability calendars",
      "Automated appointment reminders",
      "Cancellation and rescheduling",
      "Emergency contact systems"
    ]
  },
  {
    category: "Education & Resources",
    icon: <Target className="h-6 w-6" />,
    features: [
      "Exercise video libraries",
      "Home exercise programs",
      "Injury prevention guides",
      "Treatment explanation videos",
      "Patient education materials",
      "Recovery milestone tracking"
    ]
  },
  {
    category: "Professional Standards",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "CSP/HCPC registration display",
      "Professional indemnity information",
      "GDPR compliant patient records",
      "Insurance coverage information",
      "Continuing education credentials",
      "Clinical governance compliance"
    ]
  }
];

const pricingTiers = [
  {
    name: "Solo Practitioner",
    price: "£2,400",
    setup: "£480 setup",
    monthly: "£95/month",
    description: "Perfect for individual physiotherapists and small clinics",
    features: [
      "7-page professional website",
      "Online appointment booking",
      "Treatment showcase pages",
      "Exercise library integration",
      "Patient contact forms",
      "Insurance information display",
      "Therapist qualification showcase",
      "Mobile responsive design",
      "Basic SEO optimisation"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Multi-Therapist Clinic",
    price: "£4,100",
    setup: "£820 setup",
    monthly: "£155/month",
    description: "Comprehensive solution for multi-therapist practices and clinics",
    features: [
      "12-page custom website",
      "Advanced booking system",
      "Multiple therapist profiles",
      "Treatment speciality pages",
      "Exercise video library",
      "Patient progress portals",
      "Insurance integration",
      "Automated reminders",
      "Advanced SEO package",
      "Analytics dashboard"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Rehabilitation Centre",
    price: "£6,200",
    setup: "£1,240 setup",
    monthly: "£205/month",
    description: "Enterprise solution for large rehabilitation centres and sports clinics",
    features: [
      "Unlimited pages",
      "Multi-location support",
      "Advanced patient portals",
      "Treatment plan management",
      "Progress tracking systems",
      "Insurance claim integration",
      "Custom treatment programs",
      "Priority support",
      "Training included",
      "Quarterly reviews"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const therapyTestimonials = [
  {
    name: "Sarah",
    practice: "Active Recovery Physiotherapy",
    location: "Manchester",
    quote: "The exercise video library has transformed how we deliver home care programs. Our patient compliance has increased by 80% since launch.",
    rating: 5,
    results: "+80% patient compliance"
  },
  {
    name: "James",
    practice: "Sports Injury Clinic",
    location: "Birmingham",
    quote: "The online booking system has been a game-changer. We've reduced no-shows by 60% and our appointment efficiency has dramatically improved.",
    rating: 5,
    results: "+200% appointment efficiency"
  },
  {
    name: "Emma",
    practice: "Central Physiotherapy",
    location: "London",
    quote: "Our new website showcases our expertise beautifully. We're attracting more complex cases and our patient referrals have tripled.",
    rating: 5,
    results: "+300% referrals"
  }
];

const caseStudies = [
  {
    title: "Elite Sports Physiotherapy",
    challenge: "Difficulty demonstrating treatment expertise and managing complex schedules",
    solution: "Comprehensive treatment showcase with advanced booking and progress tracking",
    results: [
      "250% increase in sports injury consultations",
      "90% reduction in scheduling conflicts",
      "75% improvement in patient satisfaction",
      "£180k additional revenue from new services"
    ]
  },
  {
    title: "Community Rehabilitation Centre",
    challenge: "Poor patient engagement with home exercise programs",
    solution: "Interactive exercise library with progress tracking and reminder systems",
    results: [
      "80% increase in home exercise compliance",
      "60% faster recovery times",
      "95% patient satisfaction with new system",
      "40% reduction in re-injury rates"
    ]
  }
];

const specialties = [
  "Sports Injuries", "Back Pain", "Neck Pain", "Shoulder Injuries",
  "Knee Rehabilitation", "Post-Surgery Recovery", "Arthritis Management", "Posture Correction",
  "Balance Training", "Chronic Pain", "Workplace Injuries", "Pediatric Physiotherapy"
];

export default function PhysicalTherapyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-6 text-sm px-4 py-2">
                🏃‍♂️ Physical Therapy Websites
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Physiotherapy Websites That
                <span className="text-orange-300 block">Enhance Patient Care</span>
              </h1>
              <p className="text-xl font-body mb-8 opacity-90">
                Professional websites designed specifically for physiotherapists, chiropractors, and rehabilitation clinics.
                Improve patient engagement, streamline appointments, and showcase your expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
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
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  <Link href="/contact">
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Why Therapy Practices Choose Us</h3>
                <div className="space-y-4">
                  {[
                    "Interactive exercise video libraries",
                    "Patient progress tracking systems",
                    "Advanced appointment scheduling",
                    "GDPR compliant patient records",
                    "CSP/HCPC registration integration"
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-300 flex-shrink-0" />
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
              Supporting All Therapy Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our physiotherapy websites are designed to showcase every treatment specialty with
              professional presentation and patient-focused resources.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialties.map((specialty, index) => (
              <Card key={index} className="text-center p-4 border border-orange-200 hover:border-orange-400 transition-colors">
                <CardContent className="p-2">
                  <Activity className="h-6 w-6 text-orange-600 mx-auto mb-2" />
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
              Complete Physiotherapy Practice Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your physiotherapy practice needs to deliver exceptional patient care,
              improve treatment outcomes, and grow your practice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {therapyFeatures.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-600/10 rounded-lg flex items-center justify-center text-orange-600">
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
              Physiotherapy Practice Website Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional physiotherapy websites designed for therapy practices. All packages include
              exercise libraries, patient portals, and ongoing support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-orange-600 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-600 text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading text-midnight-blue mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-orange-600 mb-1">
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
                        ? 'bg-orange-600 hover:bg-orange-700 text-white'
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
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Trusted by Therapy Professionals
            </h2>
            <p className="text-xl opacity-90">
              See how our websites have improved patient outcomes and practice efficiency across the UK.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {therapyTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-orange-300 font-semibold text-sm mb-2">
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
              Physiotherapy Practice Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from physiotherapy practices that enhanced patient care with our specialized websites.
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
              Professional Standards & Patient Safety
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our physiotherapy websites meet all professional standards and patient safety requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "CSP/HCPC Registration",
                description: "Professional credential displays and regulatory compliance showcase for Chartered Society of Physiotherapy and HCPC registration."
              },
              {
                icon: <Lock className="h-8 w-8" />,
                title: "Patient Data Security",
                description: "GDPR compliant patient records, secure exercise portals, and comprehensive data protection for all patient information."
              },
              {
                icon: <Activity className="h-8 w-8" />,
                title: "Insurance Integration",
                description: "Insurance coverage displays, treatment authorization workflows, and seamless integration with major insurance providers."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-300">
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
                question: "How do you handle patient exercise programs and compliance tracking?",
                answer: "Our websites include interactive exercise video libraries with patient-specific programs, progress tracking, and automated reminders to improve compliance and treatment outcomes."
              },
              {
                question: "Can you integrate with our existing practice management software?",
                answer: "Yes, we can integrate with most physiotherapy practice management systems including Cliniko, Nookal, and PracticeEvolve. We'll assess your current systems during consultation."
              },
              {
                question: "Do you support multiple therapists and treatment specialties?",
                answer: "Absolutely. Our websites showcase multiple therapists, their individual specialties, qualifications, and treatment approaches with dedicated booking systems for each practitioner."
              },
              {
                question: "What about insurance information and patient education?",
                answer: "We include comprehensive insurance coverage displays, treatment explanation resources, injury prevention guides, and patient education materials to support informed care."
              },
              {
                question: "How do you handle appointment scheduling and patient reminders?",
                answer: "We provide advanced booking systems with automated reminders, cancellation management, and integration with your practice calendar to reduce no-shows and improve efficiency."
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
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Physiotherapy Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join physiotherapy practices across the UK that have improved patient outcomes and practice efficiency
            with our specialized therapy websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              <Link href="/contact">
                Get Your Physiotherapy Website Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Link href="/growth-consultation">
                Book Therapy Consultation
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
                Professional physiotherapy practice websites. Patient-focused, evidence-based, and designed to improve treatment outcomes.
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
                    Therapy Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/growth-marketing"
                    className="hover:text-white transition-colors"
                  >
                    Practice Marketing
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
              <h4 className="font-heading font-semibold mb-4">Therapy Specialties</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>Sports Injuries</li>
                <li>Musculoskeletal Pain</li>
                <li>Post-Surgery Recovery</li>
                <li>Chronic Pain Management</li>
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
              © 2025 Postino Ltd. All rights reserved. | Professional physiotherapy practice websites.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
