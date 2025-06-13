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
  Camera,
  CheckCircle,
  Clock,
  Eye,
  Heart,
  Lock,
  Shield,
  Sparkles,
  Star,
  Users,
  Video,
  Zap,
} from "lucide-react";
import Link from "next/link";

const cosmeticFeatures = [
  {
    category: "Treatment Showcase & Gallery",
    icon: <Camera className="h-6 w-6" />,
    features: [
      "Before & after photo galleries",
      "Treatment procedure videos",
      "Virtual consultation tools",
      "3D imaging integration",
      "Patient transformation stories",
      "Interactive treatment guides"
    ]
  },
  {
    category: "Consultation & Booking",
    icon: <Calendar className="h-6 w-6" />,
    features: [
      "Online consultation booking",
      "Virtual consultation options",
      "Treatment planning tools",
      "Practitioner scheduling",
      "Follow-up appointment management",
      "Emergency contact systems"
    ]
  },
  {
    category: "Patient Education & Safety",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "Treatment explanation resources",
      "Aftercare instruction portals",
      "Risk and safety information",
      "Recovery timeline guides",
      "Patient testimonial videos",
      "Frequently asked questions"
    ]
  },
  {
    category: "Professional Standards",
    icon: <Sparkles className="h-6 w-6" />,
    features: [
      "GMC/NMC registration display",
      "Professional indemnity information",
      "GDPR compliant patient data",
      "Treatment pricing transparency",
      "Certification showcases",
      "Regulatory compliance features"
    ]
  }
];

const pricingTiers = [
  {
    name: "Aesthetic Practitioner",
    price: "£3,500",
    setup: "£700 setup",
    monthly: "£165/month",
    description: "Perfect for individual aesthetic practitioners and small clinics",
    features: [
      "8-page professional website",
      "Before & after gallery",
      "Online consultation booking",
      "Treatment showcase pages",
      "Practitioner credentials",
      "Patient testimonials",
      "Pricing transparency tools",
      "Mobile responsive design",
      "Basic SEO optimisation"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Multi-Treatment Clinic",
    price: "£5,800",
    setup: "£1,160 setup",
    monthly: "£225/month",
    description: "Comprehensive solution for established aesthetic and cosmetic clinics",
    features: [
      "15-page custom website",
      "Advanced gallery system",
      "Virtual consultation tools",
      "Multiple practitioner profiles",
      "Treatment comparison tools",
      "Patient education library",
      "Review management system",
      "Advanced SEO package",
      "Social media integration",
      "Analytics dashboard"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Premium Clinic",
    price: "£8,500",
    setup: "£1,700 setup",
    monthly: "£295/month",
    description: "Enterprise solution for luxury cosmetic clinics and medical spas",
    features: [
      "Unlimited pages",
      "3D imaging integration",
      "Advanced patient portals",
      "Multi-location support",
      "Custom treatment programs",
      "CRM integration",
      "Advanced analytics",
      "Priority support",
      "Training included",
      "Quarterly strategy reviews"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const cosmeticTestimonials = [
  {
    name: "Dr. Sarah",
    practice: "Elite Aesthetics London",
    location: "London",
    quote: "The before & after galleries have transformed how we showcase our work. Our consultation bookings have increased by 400% since launching the new website.",
    rating: 5,
    results: "+400% consultations"
  },
  {
    name: "Emma",
    practice: "Beauty & Wellness Clinic",
    location: "Manchester",
    quote: "The virtual consultation feature has been invaluable. We can now reach patients nationwide and our conversion rate from consultation to treatment is exceptional.",
    rating: 5,
    results: "+250% reach"
  },
  {
    name: "Dr. James",
    practice: "Premier Cosmetic Surgery",
    location: "Birmingham",
    quote: "Our new website positions us as the premium choice in our area. The treatment education resources have significantly improved patient confidence and satisfaction.",
    rating: 5,
    results: "+180% patient confidence"
  }
];

const caseStudies = [
  {
    title: "Harley Street Aesthetics",
    challenge: "Difficulty showcasing premium treatments and building patient trust online",
    solution: "Luxury website with comprehensive galleries, virtual consultations, and education resources",
    results: [
      "300% increase in high-value treatment inquiries",
      "85% improvement in consultation conversion rate",
      "£650k additional revenue in first year",
      "95% patient satisfaction with booking experience"
    ]
  },
  {
    title: "Regional Beauty Clinic",
    challenge: "Competition from larger clinics and poor online presence",
    solution: "Professional website highlighting expertise, patient results, and personalized care",
    results: [
      "200% increase in local market share",
      "150% growth in repeat treatments",
      "90% improvement in patient referrals",
      "£280k revenue increase from new patients"
    ]
  }
];

const treatments = [
  "Botox & Fillers", "Laser Hair Removal", "Skin Rejuvenation", "Chemical Peels",
  "Microneedling", "Fat Reduction", "Breast Augmentation", "Rhinoplasty",
  "Facelift Surgery", "Liposuction", "Tummy Tuck", "Thread Lifts"
];

export default function CosmeticClinicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-rose-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-6 text-sm px-4 py-2">
                ✨ Cosmetic Clinic Websites
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Aesthetic Clinic Websites That
                <span className="text-pink-300 block">Inspire Confidence</span>
              </h1>
              <p className="text-xl font-body mb-8 opacity-90">
                Professional websites designed specifically for cosmetic clinics and aesthetic practitioners.
                Showcase transformations, build trust, and attract quality patients with stunning visual presentations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-gray-100"
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
                  className="border-white text-white hover:bg-white hover:text-pink-600"
                >
                  <Link href="/contact">
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Why Aesthetic Clinics Choose Us</h3>
                <div className="space-y-4">
                  {[
                    "Stunning before & after galleries",
                    "Virtual consultation capabilities",
                    "Treatment transparency & education",
                    "GDPR compliant patient data",
                    "GMC/NMC registration showcase"
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

      {/* Treatments Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Supporting All Aesthetic Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cosmetic clinic websites are designed to showcase every treatment you offer with
              professional presentation and patient education resources.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {treatments.map((treatment, index) => (
              <Card key={index} className="text-center p-4 border border-pink-200 hover:border-pink-400 transition-colors">
                <CardContent className="p-2">
                  <Sparkles className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                  <p className="font-semibold text-midnight-blue text-sm">{treatment}</p>
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
              Complete Aesthetic Clinic Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your cosmetic clinic needs to attract quality patients, showcase transformations,
              and build lasting trust through transparent, professional presentation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cosmeticFeatures.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-600/10 rounded-lg flex items-center justify-center text-pink-600">
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
              Cosmetic Clinic Website Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional aesthetic clinic websites designed for cosmetic practitioners. All packages include
              before & after galleries, consultation booking, and ongoing support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-pink-600 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-pink-600 text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading text-midnight-blue mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-pink-600 mb-1">
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
                        ? 'bg-pink-600 hover:bg-pink-700 text-white'
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
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Trusted by Aesthetic Professionals
            </h2>
            <p className="text-xl opacity-90">
              See how our websites have attracted quality patients and grown cosmetic practices across the UK.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cosmeticTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-pink-300 font-semibold text-sm mb-2">
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
              Cosmetic Clinic Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from cosmetic clinics that transformed their patient acquisition with our specialized websites.
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
              Our cosmetic clinic websites meet all professional standards and prioritize patient safety and informed consent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "GMC/NMC Registration",
                description: "Professional credential displays and regulatory compliance showcase for all medical and nursing qualifications."
              },
              {
                icon: <Lock className="h-8 w-8" />,
                title: "Patient Data Security",
                description: "GDPR compliant patient records, secure consultation portals, and comprehensive data protection for all patient information."
              },
              {
                icon: <Eye className="h-8 w-8" />,
                title: "Treatment Transparency",
                description: "Clear pricing displays, risk information, realistic expectations, and comprehensive aftercare instructions for all treatments."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-300">
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
                question: "How do you handle before & after galleries while maintaining patient privacy?",
                answer: "We implement secure, GDPR-compliant gallery systems with proper patient consent management, anonymization options, and controlled access to ensure patient privacy while showcasing your excellent results."
              },
              {
                question: "Can you integrate virtual consultation and 3D imaging tools?",
                answer: "Yes, we can integrate leading virtual consultation platforms and 3D imaging systems to enhance patient experience and improve treatment planning and visualization."
              },
              {
                question: "Do you support pricing transparency and treatment comparisons?",
                answer: "Absolutely. We create clear pricing displays, treatment comparison tools, and comprehensive information to help patients make informed decisions about their aesthetic treatments."
              },
              {
                question: "What about regulatory compliance and professional credentials?",
                answer: "We ensure full compliance with medical advertising regulations, prominently display GMC/NMC credentials, professional indemnity information, and maintain all required disclaimers and safety information."
              },
              {
                question: "How do you handle patient education and realistic expectations?",
                answer: "We create comprehensive patient education resources, realistic treatment expectations, detailed procedure explanations, and thorough aftercare instructions to ensure informed consent and satisfaction."
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
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Cosmetic Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join cosmetic clinics across the UK that have attracted quality patients and grown their practices
            with our specialized aesthetic websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100"
            >
              <Link href="/contact">
                Get Your Cosmetic Clinic Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-pink-600"
            >
              <Link href="/growth-consultation">
                Book Aesthetic Consultation
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
                Professional cosmetic clinic websites. Elegant, trustworthy, and designed to attract quality aesthetic patients.
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
                    Aesthetic Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/growth-marketing"
                    className="hover:text-white transition-colors"
                  >
                    Clinic Marketing
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
              <h4 className="font-heading font-semibold mb-4">Aesthetic Treatments</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>Non-Surgical Procedures</li>
                <li>Surgical Procedures</li>
                <li>Skin Treatments</li>
                <li>Body Contouring</li>
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
              © 2025 Postino Ltd. All rights reserved. | Professional cosmetic clinic websites.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
