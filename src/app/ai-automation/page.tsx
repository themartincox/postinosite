import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "AI Automation Services Nottingham | Business Process Automation",
  description: "Transform your Nottingham business with AI automation. Intelligent chatbots, predictive analytics, workflow automation & custom AI solutions. Serving SMEs across Nottinghamshire with 90% efficiency improvements.",
  keywords: "AI automation Nottingham, business automation Nottinghamshire, intelligent chatbots, predictive analytics East Midlands, workflow automation UK, AI agency Nottingham, machine learning solutions, process automation",
  authors: [{ name: "Postino AI Automation Specialists" }],
  publisher: "Postino Ltd",
  alternates: {
    canonical: '/ai-automation'
  },
  openGraph: {
    title: "AI Automation Services Nottingham | Postino Agency",
    description: "Leading AI automation agency in Nottingham. Intelligent chatbots, predictive analytics & custom AI solutions. 90% efficiency improvements for Nottinghamshire SMEs.",
    type: "website",
    locale: "en_GB",
    url: 'https://postino.cc/ai-automation',
    siteName: 'Postino',
    images: [
      {
        url: 'https://postino.cc/og-ai-automation.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Automation Services Nottingham - Postino Agency'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services Nottingham | Postino",
    description: "Transform your business with AI automation. Intelligent chatbots, predictive analytics & workflow automation for Nottingham SMEs.",
    images: ['https://postino.cc/og-ai-automation.jpg']
  },
  other: {
    'geo.region': 'GB-NTT',
    'geo.placename': 'Nottingham',
    'geo.position': '52.9548;-1.1581',
    'ICBM': '52.9548, -1.1581',
    'business:contact_data:locality': 'Nottingham',
    'business:contact_data:region': 'Nottinghamshire',
    'business:contact_data:country_name': 'United Kingdom'
  }
};
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
  BarChart3,
  Brain,
  Clock,
  Cpu,
  Database,
  MessageSquare,
  Settings,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AIAutomationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-coral-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white mb-6">
              AI & Automation Solutions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Intelligent Systems That
              <span className="text-midnight-blue"> Scale Your Operations</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Transform your business with cutting-edge AI automation that
              streamlines operations, enhances customer insights, and drives
              efficiency. Our custom solutions reduce manual work by 40+ hours
              per week while increasing accuracy and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-midnight-blue hover:bg-midnight-blue/90 text-white"
              >
                <Link href="/ai-automation-demo">
                  <span className="font-heading font-semibold">
                    Request Automation Demo
                  </span>
                  <Brain className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-coral-red bg-white/5"
              >
                <Link
                  href="/case-studies"
                  className="text-coral-red hover:text-coral-red"
                >
                  <span className="font-heading font-semibold">
                    See Efficiency Gains
                  </span>
                  <BarChart3 className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">
                40+ Hours Saved Weekly
              </h3>
              <p className="font-body text-gray-600">
                Automate repetitive tasks and focus your team on strategic,
                high-value activities that drive growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">
                95% Accuracy Improvement
              </h3>
              <p className="font-body text-gray-600">
                Eliminate human error with intelligent systems that ensure
                consistency and precision in every process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">
                300% ROI Within 6 Months
              </h3>
              <p className="font-body text-gray-600">
                Measurable efficiency gains and cost savings that quickly
                justify your automation investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Pillars */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Three Pillars of AI-Powered Efficiency
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our AI automation solutions are designed to transform the way you
              work, delivering intelligent systems that grow with your business.
            </p>
          </div>

          <div className="space-y-8">
            {/* Business Process Automation */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-coral-red">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-coral-red rounded-lg flex items-center justify-center">
                    <Workflow className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Business Process Automation
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Streamline operations and eliminate manual bottlenecks
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Workflow className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                          Workflow Automation
                        </h4>
                        <p className="font-body text-gray-600 text-sm">
                          Automate complex business processes from lead capture
                          to customer onboarding
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                          Task Management
                        </h4>
                        <p className="font-body text-gray-600 text-sm">
                          Intelligent task routing, prioritization, and
                          completion tracking
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Settings className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                          System Integration
                        </h4>
                        <p className="font-body text-gray-600 text-sm">
                          Seamlessly connect all your business tools and
                          platforms
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-coral-red/5 p-6 rounded-lg">
                    <h5 className="font-heading font-semibold text-coral-red mb-4">
                      Common Use Cases:
                    </h5>
                    <ul className="space-y-2 text-sm font-body text-gray-600">
                      <li>
                        • Automated invoice processing and approval workflows
                      </li>
                      <li>• Customer onboarding and document collection</li>
                      <li>• Employee task assignment and progress tracking</li>
                      <li>• Inventory management and reorder automation</li>
                      <li>• Report generation and distribution</li>
                      <li>• Quality assurance and compliance checking</li>
                    </ul>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-coral-red hover:bg-coral-red/90 text-white"
                >
                  <Link href="/ai-automation/process">
                    Explore Process Automation Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Intelligent Data Analysis & CRM */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-forest-green">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Intelligent Data Analysis & CRM Automation
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Transform customer data into actionable insights and
                      automated experiences
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <BarChart3 className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                          Predictive Analytics
                        </h4>
                        <p className="font-body text-gray-600 text-sm">
                          AI-powered insights to predict customer behavior and
                          identify opportunities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                          Customer Segmentation
                        </h4>
                        <p className="font-body text-gray-600 text-sm">
                          Intelligent customer grouping for personalized
                          marketing and sales approaches
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                          Personalized Outreach
                        </h4>
                        <p className="font-body text-gray-600 text-sm">
                          Automated, contextual communication based on customer
                          preferences and behavior
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-forest-green/5 p-6 rounded-lg">
                    <h5 className="font-heading font-semibold text-forest-green mb-4">
                      CRM Capabilities:
                    </h5>
                    <ul className="space-y-2 text-sm font-body text-gray-600">
                      <li>• Lead scoring and qualification automation</li>
                      <li>• Intelligent customer journey mapping</li>
                      <li>• Automated follow-up sequences</li>
                      <li>• Customer health score monitoring</li>
                      <li>• Predictive churn analysis</li>
                      <li>• Dynamic content personalization</li>
                    </ul>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-forest-green hover:bg-forest-green/90 text-white mt-6"
                >
                  <Link href="/ai-automation/intelligence">
                    Explore Intelligence & Data Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Custom AI Integrations */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-midnight-blue">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-midnight-blue rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Custom AI Integrations
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Tailored AI solutions designed specifically for your
                      business needs
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                          Intelligent Chatbots
                        </h4>
                        <p className="font-body text-gray-600 text-sm">
                          AI chatbots that provide 24/7 customer support and
                          lead qualification
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Workflow className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                          Automated Lead Routing
                        </h4>
                        <p className="font-body text-gray-600 text-sm">
                          Smart lead distribution based on prospect profile and
                          sales team capacity
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Cpu className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                          Intelligent Task Management
                        </h4>
                        <p className="font-body text-gray-600 text-sm">
                          AI-powered task prioritization and resource allocation
                          for maximum productivity
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-midnight-blue/5 p-6 rounded-lg">
                    <h5 className="font-heading font-semibold text-midnight-blue mb-4">
                      Custom Solutions:
                    </h5>
                    <ul className="space-y-2 text-sm font-body text-gray-600">
                      <li>• Voice-to-text transcription and analysis</li>
                      <li>• Document processing and extraction</li>
                      <li>• Image recognition and categorization</li>
                      <li>• Sentiment analysis for customer feedback</li>
                      <li>• Automated content generation</li>
                      <li>• Intelligent recommendation engines</li>
                    </ul>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white mt-6"
                >
                  <Link href="/ai-automation/custom-ai">
                    Explore Custom AI Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your AI automation
              delivers maximum value with minimal disruption to your existing
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Process Audit",
                description:
                  "Analyze current workflows to identify automation opportunities and efficiency gains.",
                icon: BarChart3,
              },
              {
                step: "02",
                title: "Solution Design",
                description:
                  "Create custom AI automation strategy tailored to your specific business needs.",
                icon: Brain,
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Build and configure intelligent systems with rigorous testing and quality assurance.",
                icon: Settings,
              },
              {
                step: "04",
                title: "Integration",
                description:
                  "Seamlessly deploy automation with minimal disruption to existing operations.",
                icon: Workflow,
              },
              {
                step: "05",
                title: "Optimization",
                description:
                  "Monitor performance and continuously refine systems for maximum efficiency.",
                icon: Target,
              },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-heading font-bold text-midnight-blue mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-semibold text-midnight-blue mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Real Results from AI Automation
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              See how our AI solutions have transformed operations for
              businesses like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg text-center">
              <CardHeader>
                <div className="text-4xl font-heading font-bold text-coral-red mb-2">
                  45hrs
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Weekly Time Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Manufacturing SME automated their entire order processing
                  workflow, freeing up team members for strategic growth
                  initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center">
              <CardHeader>
                <div className="text-4xl font-heading font-bold text-forest-green mb-2">
                  280%
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Lead Conversion Increase
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Professional services firm implemented intelligent lead
                  routing and automated follow-up sequences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center">
              <CardHeader>
                <div className="text-4xl font-heading font-bold text-midnight-blue mb-2">
                  97%
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Customer Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  E-commerce business deployed AI chatbots for instant customer
                  support and personalized product recommendations.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Transform Your Operations with AI
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Ready to see how AI automation can revolutionize your business? Book
            a demo to explore the possibilities for your specific use cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/ai-automation-demo">
                Request Your Automation Demo
                <Brain className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link
                href="/growth-marketing"
                className="text-coral-red hover:text-midnight-blue"
              >
                <span className="font-heading font-semibold">
                  Explore Growth Marketing Services
                </span>
                <Target className="ml-2 h-5 w-5" />
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
