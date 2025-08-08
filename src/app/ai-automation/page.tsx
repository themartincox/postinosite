import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FAQSection from "@/components/ui/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Brain, Zap, Target, Bot, BarChart, Users, Clock, Phone, Mail, MessageSquare, Calendar, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { generateMetadata as generateSEOMetadata, servicePageMetadata, generateOrganizationSchema } from "@/lib/seo-metadata";

export const metadata: Metadata = generateSEOMetadata({
  ...servicePageMetadata.aiAutomation,
  openGraphTitle: "AI Automation Services | Intelligent Business Solutions | Postino",
  openGraphDescription: "Transform your business with cutting-edge AI automation. Intelligent chatbots, workflow automation, predictive analytics. Expert implementation with measurable ROI.",
  twitterTitle: "AI Automation Services | Postino",
  twitterDescription: "Cutting-edge AI automation for modern businesses. Intelligent systems, workflow automation & predictive analytics. Expert implementation with measurable ROI.",
});

const automationServices = [
  {
    title: "Intelligent Chatbots",
    description: "24/7 AI-powered customer service that never sleeps",
    icon: <Bot className="h-8 w-8" />,
    features: [
      "Natural language processing",
      "Multi-platform integration",
      "Conversation analytics",
      "Lead qualification",
      "Appointment booking",
      "Custom personality design"
    ],
    priceRange: "From £112.50/month",
    deploymentTime: "24-48 hours",
    link: "/nottingham/ai-chatbot-setup"
  },
  {
    title: "Workflow Automation",
    description: "Streamline operations with intelligent process automation",
    icon: <Zap className="h-8 w-8" />,
    features: [
      "Email automation sequences",
      "CRM integration",
      "Data synchronization",
      "Approval workflows",
      "Document processing",
      "Task automation"
    ],
    priceRange: "From £75/month",
    deploymentTime: "48-72 hours",
    link: "/nottingham/business-automation"
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered insights for smarter business decisions",
    icon: <BarChart className="h-8 w-8" />,
    features: [
      "Sales forecasting",
      "Customer behavior analysis",
      "Demand prediction",
      "Risk assessment",
      "Performance optimization",
      "Real-time dashboards"
    ],
    priceRange: "Custom pricing",
    deploymentTime: "1-2 weeks",
    link: "/contact?service=predictive-analytics"
  },
  {
    title: "Customer Journey Automation",
    description: "Personalized experiences from first contact to loyalty",
    icon: <Users className="h-8 w-8" />,
    features: [
      "Behavioral triggers",
      "Personalization engine",
      "Multi-channel campaigns",
      "Lifecycle management",
      "Segmentation automation",
      "Performance tracking"
    ],
    priceRange: "From £150/month",
    deploymentTime: "3-5 days",
    link: "/contact?service=customer-journey"
  }
];

const industryApplications = [
  {
    industry: "Healthcare",
    applications: [
      "Patient appointment scheduling",
      "Medical record automation",
      "Treatment reminders",
      "Insurance claim processing"
    ],
    roiExample: "40% reduction in admin time"
  },
  {
    industry: "Professional Services",
    applications: [
      "Client onboarding automation",
      "Document generation",
      "Billing automation",
      "Consultation scheduling"
    ],
    roiExample: "60% faster client processing"
  },
  {
    industry: "E-commerce",
    applications: [
      "Inventory management",
      "Order processing",
      "Customer support",
      "Personalized recommendations"
    ],
    roiExample: "25% increase in sales"
  },
  {
    industry: "Manufacturing",
    applications: [
      "Quality control automation",
      "Supply chain optimization",
      "Predictive maintenance",
      "Production planning"
    ],
    roiExample: "30% efficiency improvement"
  }
];

const automationROI = [
  {
    metric: "Time Savings",
    value: "40+ hours/week",
    description: "Average time saved through automation implementation"
  },
  {
    metric: "Cost Reduction",
    value: "35%",
    description: "Typical operational cost reduction within 6 months"
  },
  {
    metric: "Lead Conversion",
    value: "+65%",
    description: "Improvement in lead-to-customer conversion rates"
  },
  {
    metric: "Customer Satisfaction",
    value: "92%",
    description: "Average customer satisfaction with automated services"
  }
];

const implementationProcess = [
  {
    phase: "Discovery",
    duration: "1-2 days",
    description: "Analyze current processes and identify automation opportunities",
    deliverables: ["Process audit", "Automation roadmap", "ROI projections"]
  },
  {
    phase: "Design",
    duration: "2-3 days",
    description: "Create custom automation workflows and system architecture",
    deliverables: ["Workflow diagrams", "Technical specifications", "Integration plan"]
  },
  {
    phase: "Development",
    duration: "3-10 days",
    description: "Build and configure automation systems and integrations",
    deliverables: ["Automated workflows", "System integrations", "Testing protocols"]
  },
  {
    phase: "Deployment",
    duration: "1-2 days",
    description: "Launch automation systems and train your team",
    deliverables: ["Live automation", "Staff training", "Documentation"]
  },
  {
    phase: "Optimization",
    duration: "Ongoing",
    description: "Monitor performance and continuously improve automation",
    deliverables: ["Performance reports", "Optimization recommendations", "Updates"]
  }
];

export default function AIAutomationPage() {
  const aiAutomationFAQs = [
    {
      question: "What types of business processes can be automated with AI?",
      answer: "AI can automate a wide range of business processes including: <strong>Customer Service</strong> (chatbots, support tickets, FAQ responses), <strong>Sales & Marketing</strong> (lead qualification, email sequences, social media posting), <strong>Operations</strong> (data entry, report generation, inventory management), <strong>HR & Admin</strong> (recruitment screening, employee onboarding, document processing), and <strong>Finance</strong> (invoice processing, expense reporting, fraud detection). Almost any repetitive task can be automated with the right AI solution."
    },
    {
      question: "How quickly can AI automation be implemented for my business?",
      answer: "Implementation timelines vary by complexity: <strong>Simple Chatbots</strong> - 24-48 hours, <strong>Email Automation</strong> - 48-72 hours, <strong>Workflow Automation</strong> - 3-7 days, <strong>Complex Integrations</strong> - 1-3 weeks, <strong>Custom AI Solutions</strong> - 2-6 weeks. We prioritize quick wins first, implementing basic automation within days while building more complex systems. Most clients see immediate benefits within the first week."
    },
    {
      question: "What's the typical ROI from AI automation investments?",
      answer: "ROI varies by business size and automation scope, but typical results include: <strong>Time Savings</strong> - 40+ hours per week for small teams, <strong>Cost Reduction</strong> - 25-50% in operational expenses, <strong>Revenue Increase</strong> - 20-60% through better lead conversion and customer retention, <strong>Payback Period</strong> - Usually 3-9 months. We provide detailed ROI projections before implementation and track actual performance to ensure targets are met."
    },
    {
      question: "Do I need technical knowledge to use AI automation systems?",
      answer: "No technical knowledge required! We design user-friendly systems and provide comprehensive training. Our approach includes: <strong>Intuitive Interfaces</strong> - Simple dashboards and controls, <strong>Staff Training</strong> - Hands-on training for your team, <strong>Documentation</strong> - Clear guides and video tutorials, <strong>Ongoing Support</strong> - Help when you need it, <strong>System Management</strong> - We handle technical maintenance and updates. You focus on your business while we manage the technology."
    },
    {
      question: "How do you ensure AI automation integrates with our existing systems?",
      answer: "Integration is a key focus of our implementation process: <strong>System Audit</strong> - We analyze your current tools and databases, <strong>API Connections</strong> - Connect systems through secure APIs, <strong>Data Migration</strong> - Safely transfer existing data, <strong>Testing</strong> - Thorough testing before going live, <strong>Gradual Rollout</strong> - Phase implementation to minimize disruption. We work with popular platforms like Salesforce, HubSpot, Microsoft Office, Google Workspace, and many others."
    },
    {
      question: "What ongoing support do you provide after AI implementation?",
      answer: "Comprehensive ongoing support includes: <strong>Performance Monitoring</strong> - Continuous system monitoring and optimization, <strong>Regular Updates</strong> - Keep automation systems current with latest features, <strong>Technical Support</strong> - Email, phone, and remote assistance, <strong>Training</strong> - Additional training as your team grows, <strong>Strategy Reviews</strong> - Quarterly business reviews to identify new opportunities, <strong>Scaling Support</strong> - Help expand automation as your business grows."
    },
    {
      question: "Is AI automation secure and compliant with data protection regulations?",
      answer: "Security and compliance are top priorities: <strong>Data Encryption</strong> - All data encrypted in transit and at rest, <strong>GDPR Compliance</strong> - Full compliance with UK and EU data protection laws, <strong>Access Controls</strong> - Role-based permissions and authentication, <strong>Regular Audits</strong> - Security assessments and compliance checks, <strong>Data Backup</strong> - Automated backups and disaster recovery, <strong>Privacy by Design</strong> - Data protection built into every system. We maintain enterprise-grade security standards."
    },
    {
      question: "Can AI automation help with customer service and support?",
      answer: "AI dramatically improves customer service: <strong>24/7 Availability</strong> - Instant responses any time of day, <strong>Multilingual Support</strong> - Serve customers in multiple languages, <strong>Intelligent Routing</strong> - Direct complex queries to appropriate staff, <strong>Knowledge Base Integration</strong> - Instant access to company information, <strong>Conversation Analytics</strong> - Insights into customer needs and satisfaction, <strong>Escalation Management</strong> - Seamless handoff to human agents when needed. Most businesses see 60-80% reduction in support workload."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white mb-6">
              🤖 Intelligent Business Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              AI Automation That
              <span className="text-yellow-300"> Works</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
              Transform your business with cutting-edge AI automation. From intelligent chatbots
              to predictive analytics - we deliver automation that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                <Link href="/ai-automation-demo">
                  <Brain className="mr-2 h-5 w-5" />
                  Get Free AI Assessment
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-blue-600 bg-white/10 font-semibold"
              >
                <Link href="/contact" className="text-white hover:text-blue-600">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak to an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Measurable AI Automation Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real performance improvements from AI automation implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationROI.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.metric}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              AI Automation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationServices.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-semibold text-blue-600">
                          {service.priceRange}
                        </span>
                        <span className="text-sm text-gray-500">
                          <Clock className="h-4 w-4 inline mr-1" />
                          {service.deploymentTime}
                        </span>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link href={service.link}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              AI Automation by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored automation solutions for your specific industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryApplications.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {industry.industry}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {industry.applications.map((app, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <Target className="h-3 w-3 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-3">
                    <p className="text-sm font-semibold text-emerald-600">
                      Typical Result: {industry.roiExample}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodology for successful AI automation deployment
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {implementationProcess.map((phase, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {phase.phase}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{phase.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{phase.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 mb-1">Deliverables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-xs text-gray-600">
                          • {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                {index < implementationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="AI Automation FAQs"
        subtitle="Everything you need to know about implementing AI automation in your business"
        items={aiAutomationFAQs}
        className="bg-white"
        schemaId="ai-automation-faq-schema"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free AI automation assessment and discover how artificial intelligence
            can transform your operations, reduce costs, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              <Link href="/ai-automation-demo">
                Get Free AI Assessment
                <Brain className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-gray-900 bg-white/10 font-semibold"
            >
              <Link href="/contact" className="text-white hover:text-gray-900">
                Schedule Consultation
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Structured Data */}
      <Script
        id="ai-automation-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Automation Services",
            "description": "Comprehensive AI automation solutions including intelligent chatbots, workflow automation, predictive analytics, and customer journey automation for businesses.",
            "provider": generateOrganizationSchema(),
            "serviceType": [
              "AI Automation",
              "Intelligent Chatbots",
              "Workflow Automation",
              "Predictive Analytics",
              "Business Process Automation"
            ],
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Automation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Intelligent Chatbots"
                  },
                  "price": "112.50",
                  "priceCurrency": "GBP",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "112.50",
                    "priceCurrency": "GBP",
                    "unitText": "monthly"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Workflow Automation"
                  },
                  "price": "75.00",
                  "priceCurrency": "GBP",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "75.00",
                    "priceCurrency": "GBP",
                    "unitText": "monthly"
                  }
                }
              ]
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "75",
              "highPrice": "5000",
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}
