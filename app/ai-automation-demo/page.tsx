import ContactForm from "@/components/ContactForm";
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
  CheckCircle,
  Clock,
  Database,
  MessageSquare,
  Play,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AIAutomationDemoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      {/* Header is global; Navigation removed */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral-red to-midnight-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6">
              AI Automation Demo
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              See AI Automation in Action
              <span className="text-forest-green"> for Your Business</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Experience a personalised demonstration of how AI automation can
              transform your specific business processes. We'll show you real
              workflows, potential time savings, and ROI projections tailored to
              your industry and challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-forest-green hover:bg-forest-green/90 text-white"
              >
                <Link href="#demo-form">
                  Request Your Demo
                  <Play className="ml-2 h-5 w-5" />
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
                    View Success Stories
                  </span>
                  <BarChart3 className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              What You'll Experience in Your Demo
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our personalised 45-minute demo is tailored specifically to your
              business needs and processes. Here's what we'll cover together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Workflow className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Process Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  We'll analyse your current manual processes and identify the
                  best automation opportunities specific to your business model.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Live Demonstrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  See AI automation tools in action with scenarios based on your
                  actual business challenges and workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  ROI Projections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Get specific time savings calculations and revenue impact
                  projections based on your current processes and team size.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  AI Chatbot Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Experience an intelligent chatbot configured for your
                  industry, including lead qualification and customer support
                  scenarios.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Data Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  See how AI can analyse your existing data to provide insights
                  and automate decision-making processes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Implementation Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Receive a customised roadmap for implementing AI automation in
                  your business, including timelines and priorities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              How Our Demo Process Works
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We've designed our demo process to be highly relevant and
              immediately actionable for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Pre-Demo Questionnaire",
                description:
                  "We learn about your business, current processes, and specific challenges before the demo.",
                icon: Users,
              },
              {
                step: "02",
                title: "Customised Demo Prep",
                description:
                  "Our team prepares scenarios and examples relevant to your industry and use cases.",
                icon: Workflow,
              },
              {
                step: "03",
                title: "Live Demo Session",
                description:
                  "45-minute interactive demonstration with Q&A, tailored to your specific needs.",
                icon: Play,
              },
              {
                step: "04",
                title: "Follow-Up Resources",
                description:
                  "Receive implementation roadmap, ROI calculations, and next steps documentation.",
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

      {/* Industries We Serve */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Demos Tailored to Your Industry
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our AI automation solutions are customised for the unique needs of
              different industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "Professional Services",
                processes: [
                  "Client onboarding automation",
                  "Invoice processing",
                  "Project management workflows",
                  "Document generation",
                ],
                savings: "35+ hours/week",
              },
              {
                industry: "E-commerce & Retail",
                processes: [
                  "Inventory management",
                  "Customer service chatbots",
                  "Order processing",
                  "Marketing automation",
                ],
                savings: "42+ hours/week",
              },
              {
                industry: "Manufacturing",
                processes: [
                  "Quality control monitoring",
                  "Supply chain optimisation",
                  "Maintenance scheduling",
                  "Production reporting",
                ],
                savings: "50+ hours/week",
              },
              {
                industry: "Healthcare Services",
                processes: [
                  "Appointment scheduling",
                  "Patient communication",
                  "Insurance processing",
                  "Compliance monitoring",
                ],
                savings: "38+ hours/week",
              },
              {
                industry: "Financial Services",
                processes: [
                  "Document processing",
                  "Risk assessment",
                  "Client reporting",
                  "Compliance automation",
                ],
                savings: "45+ hours/week",
              },
              {
                industry: "Real Estate",
                processes: [
                  "Lead qualification",
                  "Property management",
                  "Document automation",
                  "Client communication",
                ],
                savings: "30+ hours/week",
              },
            ].map((item, index) => (
              <Card
                key={`industry-${index}-${item.industry.replace(/\s+/g, "-").toLowerCase()}`}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    {item.industry}
                  </CardTitle>
                  <Badge className="bg-forest-green text-white w-fit">
                    {item.savings} saved
                  </Badge>
                </CardHeader>
                <CardContent>
                  <h4 className="font-heading font-semibold text-midnight-blue mb-3">
                    Common Automations:
                  </h4>
                  <ul className="space-y-2">
                    {item.processes.map((process) => (
                      <li
                        key={`${item.industry}-${process.replace(/\s+/g, "-").toLowerCase()}`}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-forest-green mt-1 flex-shrink-0" />
                        <span className="font-body text-gray-600 text-sm">
                          {process}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section id="demo-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-6">
              Request Your Personalised AI Demo
            </h2>
            <p className="text-xl font-body text-gray-600 mb-8">
              See exactly how AI automation can transform your specific business
              processes. Our team will prepare a customised demonstration based
              on your industry and challenges.
            </p>
          </div>

          <ContactForm
            type="ai-demo"
            title="Book Your AI Automation Demo"
            description="Free personalised demonstration tailored to your business needs"
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-4">
              What Demo Attendees Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-heading font-bold text-white">
                    DM
                  </span>
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  David Matthews
                </CardTitle>
                <CardDescription>
                  Operations Director, TechFlow Solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="font-body text-gray-600 italic">
                  "The demo was incredibly relevant to our business. They showed
                  us exactly how we could automate our client onboarding process
                  and save 20+ hours per week."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-heading font-bold text-white">
                    LK
                  </span>
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Lisa Kumar
                </CardTitle>
                <CardDescription>
                  CEO, Precision Manufacturing Ltd
                </CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="font-body text-gray-600 italic">
                  "I was sceptical about AI, but the demo showed practical
                  applications I could implement immediately. We're now saving
                  £15k annually on manual processes."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-heading font-bold text-white">
                    MR
                  </span>
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Mark Roberts
                </CardTitle>
                <CardDescription>
                  Managing Partner, Roberts & Associates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="font-body text-gray-600 italic">
                  "The team understood our legal practice perfectly. The
                  document automation demo alone convinced us—we implemented it
                  the following week."
                </blockquote>
              </CardContent>
            </Card>
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
