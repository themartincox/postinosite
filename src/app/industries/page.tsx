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
  FileText,
  Heart,
  Lock,
  Shield,
  Stethoscope,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    title: "Dental Practice Websites",
    slug: "dental-practices",
    icon: "🦷",
    description: "Specialized websites designed to attract new patients and streamline dental practice operations.",
    features: [
      "Online appointment booking",
      "Patient portal access",
      "Treatment showcase galleries",
      "Insurance information systems",
      "GDPR-compliant data handling",
      "Patient testimonials & reviews"
    ],
    price: "From £2,500",
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Medical Practice Websites",
    slug: "medical-practices",
    icon: "🩺",
    description: "Professional medical websites that build trust and make healthcare accessible to patients.",
    features: [
      "Multi-doctor practice layouts",
      "Service speciality pages",
      "Patient education resources",
      "Online consultation booking",
      "Medical credentials showcase",
      "Insurance & payment information"
    ],
    price: "From £3,000",
    popular: true,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Accounting Practice Websites",
    slug: "accounting-practices",
    icon: "📊",
    description: "Professional accounting websites that demonstrate expertise and attract quality clients.",
    features: [
      "Service portfolio displays",
      "Client resource centres",
      "Tax deadline calendars",
      "Secure client portals",
      "Professional credentials",
      "Industry-specific case studies"
    ],
    price: "From £2,200",
    popular: false,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Physical Therapy Websites",
    slug: "physical-therapy",
    icon: "🏃‍♂️",
    description: "Specialized websites for chiropractors, physiotherapists, and rehabilitation clinics.",
    features: [
      "Treatment modality showcases",
      "Exercise & rehabilitation guides",
      "Injury assessment tools",
      "Insurance coverage information",
      "Therapist qualification displays",
      "Patient progress tracking"
    ],
    price: "From £2,400",
    popular: false,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Cosmetic Clinic Websites",
    slug: "cosmetic-clinics",
    icon: "✨",
    description: "Elegant websites for aesthetic clinics that showcase transformations and build confidence.",
    features: [
      "Before/after photo galleries",
      "Treatment procedure explanations",
      "Consultation booking systems",
      "Pricing transparency tools",
      "Practitioner certification displays",
      "Patient safety information"
    ],
    price: "From £3,500",
    popular: false,
    color: "from-pink-500 to-rose-500"
  }
];

const coreFeatures = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "GDPR Compliant",
    description: "Full compliance with healthcare data protection regulations and patient privacy requirements."
  },
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Industry Expertise",
    description: "Deep understanding of healthcare and professional service industry requirements and best practices."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Booking Integration",
    description: "Seamless appointment booking systems integrated with your existing practice management software."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure Patient Portals",
    description: "Encrypted patient portals for secure document sharing and communication."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Multi-Practitioner Support",
    description: "Websites designed to showcase multiple practitioners and their individual specialities."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance Optimized",
    description: "Fast-loading websites that provide excellent user experience on all devices."
  }
];

const testimonials = [
  {
    name: "Dr. Sarah",
    industry: "Dental Practice",
    quote: "Our new website has increased online bookings by 300%. The patient portal has transformed how we manage appointments.",
    rating: 5
  },
  {
    name: "James",
    industry: "Physiotherapy Clinic",
    quote: "The exercise library feature has been incredible for patient engagement. Our retention rates have improved significantly.",
    rating: 5
  },
  {
    name: "Emma",
    industry: "Accounting Practice",
    quote: "The secure client portal has streamlined our document sharing process. Our clients love the convenience.",
    rating: 5
  }
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-coral-red text-white mb-6 text-sm px-4 py-2">
              Industry-Specialized Websites
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Professional Websites for
              <span className="text-coral-red block">Healthcare & Services</span>
            </h1>
            <p className="text-xl font-body mb-8 max-w-3xl mx-auto opacity-90">
              Specialized website packages designed specifically for healthcare practices and professional services.
              Built with industry compliance, patient booking systems, and conversion optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-coral-red hover:bg-coral-red/90 text-white"
              >
                <Link href="#packages">
                  View Industry Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-midnight-blue"
              >
                <Link href="/contact">
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Industry-Specific */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Industry-Specific Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generic websites don't understand your unique challenges. Our industry-specific packages include
              specialized features, compliance requirements, and conversion strategies tailored to your profession.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-coral-red/10 rounded-lg flex items-center justify-center text-coral-red mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-body">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Packages */}
      <section id="packages" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Choose Your Industry Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each package includes industry-specific features, compliance requirements, and proven conversion strategies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  industry.popular ? 'ring-2 ring-coral-red' : ''
                }`}
              >
                {industry.popular && (
                  <div className="absolute top-0 right-0 bg-coral-red text-white px-3 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${industry.color}`} />

                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <CardTitle className="text-xl font-heading text-midnight-blue mb-2">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {industry.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-coral-red">
                    {industry.price}
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-body text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white"
                    >
                      <Link href={`/industries/${industry.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-coral-red text-coral-red hover:bg-coral-red hover:text-white"
                    >
                      <Link href="/contact">
                        Get Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-midnight-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl opacity-90">
              See how our industry-specific websites have transformed practices across the UK.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <CardDescription className="text-white/90 italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">{testimonial.industry}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our Specialized Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that healthcare and professional service websites require special attention to compliance,
              patient experience, and industry-specific functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Industry Analysis",
                description: "We analyze your specific industry requirements, compliance needs, and target patient demographics."
              },
              {
                step: "02",
                title: "Compliance Review",
                description: "Ensure full GDPR compliance and industry-specific regulations are met throughout the design process."
              },
              {
                step: "03",
                title: "Custom Development",
                description: "Build your website with industry-specific features like booking systems and patient portals."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Launch your website with comprehensive training and ongoing support for your practice management."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-coral-red text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coral-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom quote for your industry-specific website package.
            We'll analyze your needs and recommend the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-coral-red hover:bg-gray-100"
            >
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-coral-red"
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
                Where growth meets AI innovation. Helping SMEs achieve measurable success through expert marketing and intelligent automation.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
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
                    href="/content-strategy"
                    className="hover:text-white transition-colors"
                  >
                    Content Strategy
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
                <li>
                  <Link
                    href="/industries/physical-therapy"
                    className="hover:text-white transition-colors"
                  >
                    Physical Therapy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/growth-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Growth Strategy Session
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation-demo"
                    className="hover:text-white transition-colors"
                  >
                    Automation Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-white transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. | Empowering SME growth through intelligent marketing.
            </p>
            <p className="font-body text-gray-500 text-sm mt-2">
              Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
