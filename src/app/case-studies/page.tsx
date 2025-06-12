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
  Award,
  BarChart3,
  Building,
  Clock,
  DollarSign,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      company: "Precision Components Ltd",
      industry: "Manufacturing",
      challenge:
        "Struggling with manual processes and inconsistent lead generation",
      solution:
        "AI-powered workflow automation + comprehensive growth marketing strategy",
      results: {
        leadIncrease: "425%",
        revenueIncrease: "£2.3M",
        timeSaved: "45hrs/week",
        roi: "520%",
      },
      testimonial:
        "Postino didn't just automate our processes—they transformed how we think about growth. The combination of marketing expertise and AI implementation gave us capabilities we never thought possible.",
      clientName: "Sarah Mitchell",
      clientRole: "CEO",
      timeline: "12 months",
      services: ["AI Automation", "Growth Marketing", "SEO"],
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      company: "Strategic Consulting Group",
      industry: "Professional Services",
      challenge:
        "Low online visibility and inefficient client acquisition process",
      solution: "AI-enhanced SEO strategy + automated lead nurturing system",
      results: {
        leadIncrease: "280%",
        revenueIncrease: "£1.8M",
        timeSaved: "35hrs/week",
        roi: "420%",
      },
      testimonial:
        "The team understood our consulting practice perfectly. Within 6 months, we went from struggling to find clients to having a waiting list. The automated systems handle everything seamlessly.",
      clientName: "James Rodriguez",
      clientRole: "Managing Partner",
      timeline: "8 months",
      services: ["SEO Services", "Content Strategy", "AI Automation"],
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      company: "Artisan Home Goods",
      industry: "E-commerce",
      challenge: "Poor online presence and low conversion rates",
      solution:
        "Complete content strategy overhaul + AI chatbot implementation",
      results: {
        leadIncrease: "340%",
        revenueIncrease: "£950K",
        timeSaved: "28hrs/week",
        roi: "380%",
      },
      testimonial:
        "We've gone from struggling to sell online to having customers discover us organically. The AI chatbot feels more helpful than most human support teams I've encountered.",
      clientName: "Emma Thompson",
      clientRole: "Founder",
      timeline: "10 months",
      services: ["Content Strategy", "AI Automation", "Growth Marketing"],
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      company: "TechFlow Solutions",
      industry: "Software Development",
      challenge: "Inconsistent lead quality and lengthy sales cycles",
      solution: "AI-powered lead scoring + automated nurture sequences",
      results: {
        leadIncrease: "195%",
        revenueIncrease: "£1.2M",
        timeSaved: "40hrs/week",
        roi: "450%",
      },
      testimonial:
        "The AI lead scoring system completely changed our sales process. We now focus only on high-quality prospects, and our closing rate has tripled.",
      clientName: "David Matthews",
      clientRole: "Operations Director",
      timeline: "6 months",
      services: ["AI Automation", "Growth Marketing"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6">
              Success Stories
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Real Results from
              <span className="text-coral-red"> Real Businesses</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Discover how SMEs across industries have transformed their
              operations and achieved exceptional growth through our integrated
              marketing and AI automation approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-coral-red hover:bg-coral-red/90 text-white"
              >
                <Link href="/growth-consultation">
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
              >
                <Link
                  href="/ai-automation-demo"
                  className="text-coral-red hover:text-midnight-blue"
                >
                  <span className="font-heading font-semibold">
                    See AI in Action
                  </span>
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-4">
              Aggregate Results Across All Clients
            </h2>
            <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
              The numbers speak for themselves. Here's the cumulative impact
              we've delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-coral-red mb-2">
                £6.25M
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Additional Revenue
              </div>
              <p className="font-body text-gray-600 text-sm">
                Generated for clients in 12 months
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-forest-green mb-2">
                310%
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Average Lead Increase
              </div>
              <p className="font-body text-gray-600 text-sm">
                More qualified prospects across all clients
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-midnight-blue mb-2">
                148hrs
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Weekly Time Savings
              </div>
              <p className="font-body text-gray-600 text-sm">
                Automated across all client operations
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-coral-red mb-2">
                442%
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Average ROI
              </div>
              <p className="font-body text-gray-600 text-sm">
                Return on marketing and automation investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Every business is unique. Here's how we've helped SMEs across
              different industries achieve their growth objectives.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
                className={`overflow-hidden shadow-2xl border-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-forest-green text-white">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-3 mb-4">
                      <Building className="h-6 w-6 text-midnight-blue" />
                      <h3 className="text-2xl font-heading font-bold text-midnight-blue">
                        {study.company}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-heading font-semibold text-coral-red mb-2">
                          Challenge
                        </h4>
                        <p className="font-body text-gray-600">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-heading font-semibold text-forest-green mb-2">
                          Solution
                        </h4>
                        <p className="font-body text-gray-600 mb-3">
                          {study.solution}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service) => (
                            <Badge
                              key={service}
                              variant="secondary"
                              className="text-xs"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-3">
                          Results
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-coral-red/5 rounded-lg">
                            <div className="text-2xl font-heading font-bold text-coral-red">
                              {study.results.leadIncrease}
                            </div>
                            <div className="text-xs font-heading text-gray-600">
                              Lead Increase
                            </div>
                          </div>
                          <div className="text-center p-3 bg-forest-green/5 rounded-lg">
                            <div className="text-2xl font-heading font-bold text-forest-green">
                              {study.results.revenueIncrease}
                            </div>
                            <div className="text-xs font-heading text-gray-600">
                              Revenue Growth
                            </div>
                          </div>
                          <div className="text-center p-3 bg-midnight-blue/5 rounded-lg">
                            <div className="text-2xl font-heading font-bold text-midnight-blue">
                              {study.results.timeSaved}
                            </div>
                            <div className="text-xs font-heading text-gray-600">
                              Time Saved
                            </div>
                          </div>
                          <div className="text-center p-3 bg-coral-red/5 rounded-lg">
                            <div className="text-2xl font-heading font-bold text-coral-red">
                              {study.results.roi}
                            </div>
                            <div className="text-xs font-heading text-gray-600">
                              ROI
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <blockquote className="italic font-body text-gray-600 border-l-4 border-coral-red pl-4">
                        "{study.testimonial}"
                      </blockquote>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-heading font-semibold text-midnight-blue">
                            {study.clientName}
                          </p>
                          <p className="text-sm font-body text-gray-500">
                            {study.clientRole}, {study.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {study.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Industries We've Transformed
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our proven methodologies adapt to the unique challenges and
              opportunities of different industry sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "Manufacturing",
                description:
                  "Process automation, quality control systems, and supply chain optimisation",
                icon: Building,
                results: "45+ hrs/week saved on average",
              },
              {
                industry: "Professional Services",
                description:
                  "Client acquisition systems, proposal automation, and service delivery optimisation",
                icon: Users,
                results: "280% increase in qualified leads",
              },
              {
                industry: "E-commerce & Retail",
                description:
                  "Customer journey optimisation, inventory management, and personalised marketing",
                icon: DollarSign,
                results: "340% improvement in conversion rates",
              },
              {
                industry: "Technology",
                description:
                  "Lead scoring systems, product marketing automation, and customer success workflows",
                icon: Zap,
                results: "450% ROI on marketing investment",
              },
              {
                industry: "Healthcare Services",
                description:
                  "Patient communication systems, appointment optimisation, and compliance automation",
                icon: Target,
                results: "38+ hrs/week operational savings",
              },
              {
                industry: "Financial Services",
                description:
                  "Client onboarding automation, risk assessment systems, and regulatory compliance",
                icon: BarChart3,
                results: "420% return on automation investment",
              },
            ].map((item, index) => (
              <Card
                key={`industry-${index}-${item.industry.replace(/\s+/g, "-").toLowerCase()}`}
                className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    {item.industry}
                  </CardTitle>
                  <Badge className="bg-forest-green text-white mx-auto">
                    {item.results}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Join these successful SMEs who've transformed their businesses with
            our integrated marketing and AI approach. Let's discuss how we can
            achieve similar results for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/growth-consultation">
                Book Your Growth Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link
                href="/ai-automation-demo"
                className="text-coral-red hover:text-midnight-blue"
              >
                <span className="font-heading font-semibold">
                  Request AI Demo
                </span>
                <Zap className="ml-2 h-5 w-5" />
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
                Where growth meets AI innovation. Helping SMEs achieve
                measurable success through expert marketing and intelligent
                automation.
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
                    href="/seo-services"
                    className="hover:text-white transition-colors"
                  >
                    SEO Services
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
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
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
                    href="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Empowering SME growth through intelligent marketing.
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
