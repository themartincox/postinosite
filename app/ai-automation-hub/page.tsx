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
  BarChart3,
  CheckCircle,
  Cog,
  Mail,
  MessageSquare,
  Rocket,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AIAutomationHubPage() {
  const stats = [
    {
      number: "15+",
      label: "AI Automations",
      description: "Intelligent solutions ready to deploy",
    },
    {
      number: "500%",
      label: "Avg. Efficiency Gain",
      description: "Typical performance improvement",
    },
    {
      number: "24/7",
      label: "Automated Operations",
      description: "Round-the-clock intelligent systems",
    },
  ];

  const automationSolutions = [
    {
      icon: Target,
      title: "Lead Generation & Qualification",
      description:
        "Intelligent systems that identify, engage, and qualify prospects automatically",
      features: [
        "Smart prospect identification across channels",
        "Automated engagement with personalisation",
        "AI-powered lead scoring",
        "Seamless CRM integration",
      ],
      color: "coral-red",
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      description:
        "Sophisticated workflows that adapt to customer behaviour for maximum engagement",
      features: [
        "Behavioural trigger campaigns",
        "Dynamic content personalisation",
        "Advanced segmentation",
        "Performance optimisation algorithms",
      ],
      color: "forest-green",
    },
    {
      icon: MessageSquare,
      title: "Customer Support & Chatbots",
      description:
        "AI-powered support providing instant, intelligent responses with smart escalation",
      features: [
        "Natural language processing",
        "Multi-channel integration",
        "Intelligent escalation workflows",
        "Continuous learning capabilities",
      ],
      color: "midnight-blue",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Reporting",
      description:
        "Automated intelligence transforming raw data into actionable insights",
      features: [
        "Automated report generation",
        "Predictive analytics",
        "Custom dashboards",
        "Key metric alerts",
      ],
      color: "coral-red",
    },
    {
      icon: Cog,
      title: "Workflow & Process Automation",
      description:
        "Streamline complex processes whilst ensuring consistency and compliance",
      features: [
        "Custom workflow design",
        "Multi-system integration",
        "Approval automation",
        "Compliance tracking",
      ],
      color: "forest-green",
    },
    {
      icon: Rocket,
      title: "Social Media Management",
      description:
        "Intelligent automation maintaining authentic engagement whilst scaling presence",
      features: [
        "Content scheduling optimisation",
        "Audience engagement automation",
        "Performance insights",
        "Cross-platform management",
      ],
      color: "midnight-blue",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      "coral-red": {
        bg: "bg-coral-red",
        text: "text-coral-red",
        border: "border-coral-red",
        gradient: "from-coral-red/10 to-coral-red/5",
      },
      "forest-green": {
        bg: "bg-forest-green",
        text: "text-forest-green",
        border: "border-forest-green",
        gradient: "from-forest-green/10 to-forest-green/5",
      },
      "midnight-blue": {
        bg: "bg-midnight-blue",
        text: "text-midnight-blue",
        border: "border-midnight-blue",
        gradient: "from-midnight-blue/10 to-midnight-blue/5",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-midnight-blue via-midnight-blue to-forest-green text-white py-20 overflow-hidden">
        {/* Floating AI Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-20">
            <Zap className="h-8 w-8 text-coral-red animate-pulse" />
          </div>
          <div className="absolute top-40 right-20 opacity-20">
            <Rocket className="h-6 w-6 text-white animate-bounce" />
          </div>
          <div className="absolute bottom-32 left-20 opacity-20">
            <Target className="h-10 w-10 text-forest-green animate-pulse" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <BarChart3 className="h-7 w-7 text-coral-red animate-bounce" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 animate-fade-in">
              AI Automation Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
              AI Automation Hub
            </h1>
            <p className="text-xl lg:text-2xl font-body mb-12 leading-relaxed opacity-90 animate-fade-in-up delay-200">
              Discover our suite of intelligent automation solutions designed to
              transform your business operations and accelerate growth through
              strategic AI implementation
            </p>

            {/* Stats Bar */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={`stat-${index}-${stat.label.replace(/\s+/g, "-")}`}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-coral-red mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-heading font-semibold mb-1">
                    {stat.label}
                  </div>
                  <p className="text-sm opacity-80">{stat.description}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white shadow-2xl hover:shadow-coral-red/25 transition-all duration-300"
            >
              <Link href="/ai-automation-demo">
                Explore AI Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Automation Solutions Grid */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Intelligent Automation Solutions
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with our comprehensive suite of
              AI-powered automation tools designed for sustainable growth and
              exceptional efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationSolutions.map((solution, index) => {
              const colorClasses = getColorClasses(solution.color);
              return (
                <Card
                  key={`solution-${index}-${solution.title.replace(/\s+/g, "-")}`}
                  className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden group"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${colorClasses.gradient}`}
                  />
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading text-midnight-blue mb-2">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div
                          key={`feature-${index}-${featureIndex}-${feature.slice(0, 10)}`}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle
                            className={`h-4 w-4 ${colorClasses.text} mt-1 flex-shrink-0`}
                          />
                          <p className="font-body text-gray-600 text-sm">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className={`w-full mt-6 ${colorClasses.border} ${colorClasses.text} hover:${colorClasses.bg} hover:text-white transition-all duration-300`}
                    >
                      <Link href="/ai-automation">
                        Explore Solutions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-6">
                Strategic Thinking Meets AI Innovation
              </h2>
              <p className="text-lg font-body text-gray-600 mb-8 leading-relaxed">
                Unlike traditional automation providers, we combine deep
                marketing expertise with cutting-edge AI technology. Our
                approach ensures every automation serves your broader business
                strategy, not just efficiency gains.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Human-centred AI design that enhances rather than replaces strategic thinking",
                  "Seamless integration with existing business processes and systems",
                  "Continuous optimisation based on performance data and business outcomes",
                  "Dedicated support team with both technical and marketing expertise",
                ].map((benefit, index) => (
                  <div
                    key={`benefit-${index}-${benefit.slice(0, 20)}`}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <p className="font-body text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-forest-green hover:bg-forest-green/90 text-white"
              >
                <Link href="/growth-consultation">
                  Schedule Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-midnight-blue/5 to-forest-green/5 rounded-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-3xl font-heading font-bold text-coral-red mb-2">
                      95%
                    </div>
                    <p className="font-body text-gray-600 text-sm">
                      Task Automation Rate
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-3xl font-heading font-bold text-forest-green mb-2">
                      67%
                    </div>
                    <p className="font-body text-gray-600 text-sm">
                      Faster Decision Making
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-3xl font-heading font-bold text-midnight-blue mb-2">
                      340%
                    </div>
                    <p className="font-body text-gray-600 text-sm">
                      ROI Improvement
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-3xl font-heading font-bold text-coral-red mb-2">
                      24/7
                    </div>
                    <p className="font-body text-gray-600 text-sm">
                      Intelligent Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90 leading-relaxed">
            Join the growing number of SMEs achieving exceptional results with
            our integrated marketing and AI approach. Let's discuss how
            intelligent automation can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-coral-red to-coral-red/80 hover:from-coral-red/90 hover:to-coral-red/70 text-white shadow-2xl hover:shadow-coral-red/25 transition-all duration-300"
            >
              <Link href="/growth-consultation">
                Schedule Your Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5 text-white"
            >
              <Link href="/ai-automation-demo">
                Request AI Demo
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
