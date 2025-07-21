import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FAQSection from "@/components/ui/faq";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { generateMetadata as generateSEOMetadata, servicePageMetadata, generateServiceSchema } from "@/lib/seo-metadata";

export const metadata: Metadata = generateSEOMetadata({
  ...servicePageMetadata.aiAutomation,
  openGraphTitle: "AI Automation Services Nottingham | Postino Agency",
  openGraphDescription: "Leading AI automation agency in Nottingham. Intelligent chatbots, predictive analytics & custom AI solutions. 90% efficiency improvements for Nottinghamshire SMEs.",
  twitterTitle: "AI Automation Services Nottingham | Postino",
  twitterDescription: "Transform your business with AI automation. Intelligent chatbots, predictive analytics & workflow automation for Nottingham SMEs.",
});
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
import Script from "next/script";

export default function AIAutomationPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "AI Automation", current: true }
  ];

  const aiAutomationFAQs = [
    {
      question: "What is AI automation and how does it work for businesses?",
      answer: "AI automation uses artificial intelligence to streamline business processes, reduce manual tasks, and improve efficiency. It works by analyzing patterns in your business data, learning from repetitive tasks, and automatically executing workflows. For SMEs, this typically includes customer service chatbots, automated email responses, lead scoring, appointment scheduling, and data entry tasks. Our AI systems integrate with your existing tools and can save 40+ hours per week while reducing errors by 95%."
    },
    {
      question: "How much does AI automation cost for small businesses?",
      answer: "AI automation costs vary by complexity but start from £75/month for basic workflow automation and £112.50/month for intelligent chatbots. Custom AI solutions range from £750-£3,000 depending on requirements. Most Nottinghamshire SMEs see ROI within 3 months through time savings and improved efficiency. We offer 25% local discounts for Bingham and Rushcliffe businesses, plus payment plans to fit your cash flow."
    },
    {
      question: "Which business processes can be automated with AI?",
      answer: "Common AI automation applications include: <strong>Customer Service</strong> (24/7 chatbots, automated responses), <strong>Sales</strong> (lead scoring, follow-up sequences, appointment booking), <strong>Operations</strong> (invoice processing, inventory management, report generation), <strong>Marketing</strong> (email campaigns, social media posting, content creation), and <strong>HR</strong> (recruitment screening, employee onboarding). Essentially, any repetitive task with clear rules can be automated."
    },
    {
      question: "How long does it take to implement AI automation?",
      answer: "Implementation timelines depend on complexity: Basic chatbots and workflow automation can be live within 2-4 weeks. Custom AI solutions typically take 6-12 weeks including testing and training. We follow a phased approach starting with quick wins, then expanding to more complex processes. Most businesses see immediate benefits from the first automation while we build additional capabilities."
    },
    {
      question: "Will AI automation replace my employees?",
      answer: "No, AI automation enhances your team rather than replacing them. It handles repetitive, time-consuming tasks, freeing your employees for strategic, creative, and relationship-building work. Most businesses find they can grow without hiring additional staff and their existing team becomes more productive and satisfied. We focus on 'human + AI' collaboration where technology amplifies human capabilities."
    },
    {
      question: "What makes Postino different for AI automation?",
      answer: "We're locally based in Bingham, Nottinghamshire, providing hands-on support you can't get from larger agencies. We specialize in SME-focused solutions with transparent pricing, no long-term contracts, and comprehensive training so you own your systems. Our AI implementations are designed for growth - starting simple and scaling with your business. Plus, we offer 25% local discounts and understand the specific challenges facing East Midlands businesses."
    },
    {
      question: "Do I need technical knowledge to use AI automation?",
      answer: "No technical knowledge required. We design user-friendly systems and provide comprehensive training for your team. Most AI tools we implement have intuitive interfaces similar to using a smartphone app. We also provide ongoing support, documentation, and training sessions to ensure your team feels confident using the new systems. Our goal is to make AI accessible, not complicated."
    },
    {
      question: "How do you measure the success of AI automation?",
      answer: "We track concrete metrics including: <strong>Time Savings</strong> (hours per week), <strong>Cost Reduction</strong> (operational expenses), <strong>Accuracy Improvement</strong> (error reduction %), <strong>Customer Satisfaction</strong> (response times, resolution rates), <strong>Lead Generation</strong> (conversion rates, qualified leads), and <strong>ROI</strong> (return on investment). We provide monthly reports showing exactly how AI automation is benefiting your business with clear before/after comparisons."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

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

      {/* AI Automation Introduction */}
      <section className="ai-intro-text max-w-3xl mx-auto text-center text-lg md:text-xl py-6 px-4">
        <p className="font-body text-gray-800 leading-relaxed">
          Postino delivers intelligent automation for fast-moving businesses—blending cutting-edge AI, no-code workflows, and custom API integrations. Whether you're a local SME in Nottingham or a national brand, we help you automate repetitive tasks, streamline CRM operations, and unlock predictive insights with minimal setup time. From AI chatbots to document parsing and workflow orchestration, our automation stack is built to scale.
        </p>
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

      {/* FAQ Section - NEW */}
      <FAQSection
        title="AI Automation Questions Answered"
        subtitle="Everything you need to know about implementing AI automation for your business"
        items={aiAutomationFAQs}
        relatedQuestions={[
          {
            title: "How much does growth marketing cost?",
            href: "/growth-marketing#faq",
            description: "Learn about our comprehensive marketing pricing and ROI"
          },
          {
            title: "What makes Postino different?",
            href: "/#faq",
            description: "Discover our unique AI-enhanced marketing approach"
          },
          {
            title: "Do you work with businesses outside Nottingham?",
            href: "/nottingham-marketing-agency#faq",
            description: "Find out about our service coverage and local benefits"
          }
        ]}
        relatedServices={[
          {
            title: "Growth Marketing Services",
            href: "/growth-marketing",
            description: "Strategic marketing combined with AI automation"
          },
          {
            title: "AI Chatbot Development",
            href: "/ai-automation/custom-ai/intelligent-chatbots",
            description: "24/7 customer service automation"
          },
          {
            title: "Business Process Automation",
            href: "/ai-automation/process",
            description: "Streamline operations with intelligent workflows"
          }
        ]}
        className="bg-gray-50"
        schemaId="ai-automation-faq-schema"
      />

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

      {/* WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Structured Data for AI Automation */}
      <Script
        id="ai-automation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Postino",
            "url": "https://postino.cc/ai-automation",
            "description": "Postino is a UK-based AI automation agency offering workflow solutions, CRM automation, and predictive AI tools for SMEs.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nottingham",
              "addressCountry": "UK"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "52.9548",
                "longitude": "-1.1581"
              },
              "geoRadius": "50000"
            },
            "serviceType": [
              "AI automation for SMEs",
              "AI workflow automation",
              "CRM automation",
              "business process automation",
              "predictive AI tools"
            ]
          }),
        }}
      />
    </div>
  );
}
