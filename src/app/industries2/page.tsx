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
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Building,
  Check,
  DollarSign,
  Heart,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Industries2Page() {
  const businessStages = [
    {
      name: "Solo/Small Business",
      price: "£2,400 - £4,000",
      description: "Individual practitioners or small teams establishing their digital presence",
      features: [
        "Professional website",
        "Basic booking system",
        "Local SEO",
        "Review management"
      ],
      icon: Users,
      color: "bg-forest-green"
    },
    {
      name: "Established Local Business",
      price: "£3,800 - £7,000",
      description: "Growing businesses with multiple services or team members",
      features: [
        "Advanced features",
        "Multi-service showcases",
        "Team profiles",
        "CRM integration"
      ],
      icon: Building,
      color: "bg-midnight-blue"
    },
    {
      name: "Ambitious Growth Business",
      price: "£6,500 - £12,000",
      description: "Multi-location businesses targeting regional expansion",
      features: [
        "Multi-location support",
        "Advanced automation",
        "Competitive positioning",
        "Growth analytics"
      ],
      icon: TrendingUp,
      color: "bg-coral-red"
    }
  ];

  const industries = [
    {
      name: "Dental Practices",
      subtitle: "Convert website visitors into booked appointments and grow your practice revenue",
      badge: "Most Popular",
      badgeColor: "bg-coral-red",
      icon: Shield,
      packages: [
        {
          name: "Solo Practice",
          description: "Single-location practice establishing digital presence",
          setup: "£3,500",
          monthly: "£750/month + 3% revenue share"
        },
        {
          name: "Established Practice",
          description: "Growing practice with multiple services/locations",
          setup: "£6,000",
          monthly: "£1,000/month + 5% revenue share"
        },
        {
          name: "Ambitious Growth",
          description: "Multi-location expansion and market domination",
          setup: "£10,000",
          monthly: "£1,500/month + 7% revenue share"
        }
      ],
      features: [
        "Treatment calculators",
        "Before/after galleries",
        "Online booking",
        "Patient portals"
      ],
      results: "Average 250% increase in leads within 6 months",
      link: "/industries/dental-practices"
    },
    {
      name: "Medical Practices",
      subtitle: "GDPR-compliant websites that build trust and attract patients",
      badge: "High ROI",
      badgeColor: "bg-forest-green",
      icon: Heart,
      packages: [
        {
          name: "Solo Practitioner",
          description: "Individual doctor or small clinic",
          setup: "£3,500",
          monthly: "£750/month + 3% revenue share"
        },
        {
          name: "Multi-Doctor Practice",
          description: "Established practice with multiple specialities",
          setup: "£6,000",
          monthly: "£1,000/month + 5% revenue share"
        },
        {
          name: "Healthcare Group",
          description: "Multi-location healthcare organisation",
          setup: "£10,000",
          monthly: "£1,500/month + 7% revenue share"
        }
      ],
      features: [
        "Multi-doctor layouts",
        "Online consultations",
        "Patient education",
        "Secure portals"
      ],
      results: "£100k+ additional revenue typical in year 1",
      link: "/industries/medical-practices"
    },
    {
      name: "Wellness & Beauty",
      subtitle: "Sophisticated websites for aesthetic clinics, spas, and beauty services",
      badge: "Premium",
      badgeColor: "bg-midnight-blue",
      icon: Star,
      packages: [
        {
          name: "Independent Clinic",
          description: "Single-location wellness or beauty clinic",
          setup: "£4,000",
          monthly: "£800/month + 3% revenue share"
        },
        {
          name: "Established Clinic",
          description: "Multi-treatment facility with growth ambitions",
          setup: "£7,000",
          monthly: "£1,200/month + 5% revenue share"
        },
        {
          name: "Wellness Group",
          description: "Multi-location wellness organisation",
          setup: "£12,000",
          monthly: "£2,000/month + 7% revenue share"
        }
      ],
      features: [
        "Treatment galleries",
        "Consultation booking",
        "Financing calculators",
        "Client testimonials",
        "Appointment management"
      ],
      results: "ROI typically exceeds 500% within 18 months",
      link: "/industries/wellness-beauty"
    },
    {
      name: "Ecommerce",
      subtitle: "Physical-to-digital transitions and revenue-optimised online stores",
      badge: "Growth Focus",
      badgeColor: "bg-coral-red",
      icon: DollarSign,
      packages: [
        {
          name: "Starting Online",
          description: "Traditional business moving to ecommerce",
          setup: "£3,000",
          monthly: "£600/month + 3% revenue share"
        },
        {
          name: "Established Store",
          description: "Growing online presence with multiple channels",
          setup: "£5,500",
          monthly: "£900/month + 5% revenue share"
        },
        {
          name: "Multi-Channel Growth",
          description: "Advanced ecommerce with marketplace integration",
          setup: "£9,000",
          monthly: "£1,400/month + 7% revenue share"
        }
      ],
      features: [
        "Custom ecommerce solutions",
        "Inventory management",
        "Multi-channel selling",
        "Conversion optimisation",
        "Payment integration"
      ],
      results: "Average 180% increase in online revenue within 12 months",
      link: "/industries/ecommerce"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Revenue-Focused Websites for
              <span className="text-coral-red"> Ambitious Businesses</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Stop losing clients to competitors with outdated websites. Our industry-specialised
              solutions are designed to convert visitors into appointments and grow your business revenue.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg font-heading">
                <div className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-coral-red" />
                  <span>12-Month Partnership</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Revenue Share Model</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Custom-Coded Technology</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-coral-red hover:bg-coral-red/90 text-white"
              >
                <Link href="/revenue-forecast">
                  Get Your Revenue Forecast
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Is This Right for Your Business? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Is This Right for Your Business?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-midnight-blue mb-2">
                      Are you looking to significantly grow your business revenue?
                    </h3>
                    <p className="text-gray-600 font-body">
                      Our revenue-sharing model means we only succeed when you do
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-midnight-blue mb-2">
                      Do you want to dominate local search in your area?
                    </h3>
                    <p className="text-gray-600 font-body">
                      We specialise in local SEO and zero-click optimisation
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-midnight-blue mb-2">
                      Are you frustrated with WordPress maintenance and updates?
                    </h3>
                    <p className="text-gray-600 font-body">
                      Our custom-coded solutions eliminate plugin headaches
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-midnight-blue mb-2">
                      Can you commit to a 12-month growth partnership?
                    </h3>
                    <p className="text-gray-600 font-body">
                      Real results take time - we're not looking for quick wins
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg font-heading text-midnight-blue mb-6">
                If you answered "yes" to most of these, we're perfect partners.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-coral-red hover:bg-coral-red/90 text-white"
              >
                <Link href="/revenue-forecast">
                  Get Your Revenue Forecast
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Stages */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Which Business Stage Are You?
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We work with businesses at every stage of growth. From solo practitioners
              establishing their presence to multi-location businesses dominating their markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessStages.map((stage, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <stage.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    {stage.name}
                  </CardTitle>
                  <div className="text-2xl font-heading font-bold text-coral-red">
                    {stage.price}
                  </div>
                  <CardDescription className="font-body text-gray-600">
                    {stage.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stage.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center font-body text-gray-600">
                        <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Choose Your Industry
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Industry-specific websites with tailored features, compliance requirements,
              and proven conversion strategies for your profession.
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <Card key={index} className="overflow-hidden shadow-2xl border-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-3 mb-4">
                      <industry.icon className="h-6 w-6 text-midnight-blue" />
                      <h3 className="text-2xl font-heading font-bold text-midnight-blue">
                        {industry.name}
                      </h3>
                      <Badge className={`${industry.badgeColor} text-white ml-auto`}>
                        {industry.badge}
                      </Badge>
                    </div>

                    <p className="font-body text-gray-600 mb-6 italic">
                      {industry.subtitle}
                    </p>

                    <div className="space-y-4 mb-6">
                      {industry.packages.map((pkg, pkgIndex) => (
                        <div key={pkgIndex} className="bg-soft-gray p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-heading font-semibold text-midnight-blue">
                              {pkg.name}
                            </h4>
                            <div className="text-right">
                              <div className="text-lg font-heading font-bold text-coral-red">
                                {pkg.setup}
                              </div>
                              <div className="text-sm text-gray-600">
                                {pkg.monthly}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm font-body text-gray-600">
                            {pkg.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-heading font-semibold text-midnight-blue mb-3">
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {industry.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center font-body text-gray-600 text-sm">
                            <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-forest-green/10 p-4 rounded-lg mb-6">
                      <p className="font-heading font-semibold text-forest-green">
                        Typical Results: {industry.results}
                      </p>
                    </div>

                    <Button asChild className="bg-coral-red hover:bg-coral-red/90 text-white">
                      <Link href={industry.link}>
                        View {industry.name} Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-midnight-blue/5 to-forest-green/5 p-8 lg:p-12 flex items-center">
                    <div className="w-full">
                      <div className="w-32 h-32 bg-gradient-to-br from-coral-red to-coral-red/70 rounded-full flex items-center justify-center mx-auto mb-6">
                        <industry.icon className="h-16 w-16 text-white" />
                      </div>
                      <div className="text-center">
                        <h4 className="text-xl font-heading font-bold text-midnight-blue mb-2">
                          Ready to Transform Your {industry.name}?
                        </h4>
                        <p className="font-body text-gray-600">
                          Get a free consultation and revenue forecast
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-6">
              Don't See Your Industry Here?
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto mb-8">
              We've helped ambitious businesses across multiple sectors achieve exceptional results.
              Our proven revenue-focused approach works for <strong>Manufacturing</strong>, <strong>Technology Services</strong>,
              and <strong>Trade Services</strong> (HVAC, plumbing, electrical) companies too.
            </p>
            <p className="text-lg font-body text-gray-600 mb-8">
              Every business deserves a website that drives real growth. If you're ready to invest
              in a 12-month partnership that puts results first, we'd love to explore how our
              expertise can transform your digital presence.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8">
            <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-4">
              Industries we've supported:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Building className="h-5 w-5 text-coral-red" />
                <span className="font-body text-gray-700">
                  Manufacturing companies seeking qualified B2B leads
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-coral-red" />
                <span className="font-body text-gray-700">
                  Technology service providers scaling their client base
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-coral-red" />
                <span className="font-body text-gray-700">
                  Trade services dominating local markets
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/contact">
                Contact Us About Your Industry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Industry Specialisation Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Industry Specialisation Matters
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Generic web agencies create generic results. We understand the unique challenges,
              regulations, and customer behaviour patterns in your industry.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-red-600 mb-6">
                Generic Agencies:
              </h3>
              <ul className="space-y-4">
                {[
                  "One-size-fits-all website templates",
                  "No understanding of industry regulations",
                  "Generic booking systems that don't integrate",
                  "Copy that could apply to any business",
                  "No knowledge of customer decision-making patterns"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="font-body text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-forest-green mb-6">
                Our Approach:
              </h3>
              <ul className="space-y-4">
                {[
                  "Industry-specific design and functionality",
                  "Full compliance and regulatory requirements built-in",
                  "Integrated systems that work with your existing software",
                  "Copy written specifically for your customer demographic",
                  "Deep understanding of what drives bookings in your field"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <span className="font-body text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Work with Industry Specialists?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Get a free audit of your current website and discover exactly how we'd
            improve it for your specific industry and business stage.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-coral-red hover:bg-coral-red/90 text-white"
          >
            <Link href="/website-audit">
              Get Free Website Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Revenue-focused websites for ambitious businesses. Industry specialists
                who understand what drives results in your sector.
              </p>
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
                    href="/industries/wellness-beauty"
                    className="hover:text-white transition-colors"
                  >
                    Wellness & Beauty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/ecommerce"
                    className="hover:text-white transition-colors"
                  >
                    Ecommerce
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/revenue-websites"
                    className="hover:text-white transition-colors"
                  >
                    Revenue-Focused Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/local-seo"
                    className="hover:text-white transition-colors"
                  >
                    Local SEO Domination
                  </Link>
                </li>
                <li>
                  <Link
                    href="/conversion-optimisation"
                    className="hover:text-white transition-colors"
                  >
                    Conversion Optimisation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/revenue-partnerships"
                    className="hover:text-white transition-colors"
                  >
                    Revenue Partnerships
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/revenue-forecast"
                    className="hover:text-white transition-colors"
                  >
                    Revenue Forecast
                  </Link>
                </li>
                <li>
                  <Link
                    href="/website-audit"
                    className="hover:text-white transition-colors"
                  >
                    Free Website Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industry-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Industry Consultation
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
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Revenue-focused websites for ambitious businesses.
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
