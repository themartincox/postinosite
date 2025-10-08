import type { Metadata } from "next";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FAQSection from "@/components/ui/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail, Brain, Zap, Target } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { generateMetadata as generateSEOMetadata, servicePageMetadata, generateOrganizationSchema, generateServiceSchema } from "@/lib/seo-metadata";

export const metadata: Metadata = generateSEOMetadata({
  ...servicePageMetadata.midlandsAutomation,
  openGraphTitle: "AI Automation East Midlands | Postino - Business Intelligence Solutions",
  openGraphDescription: "Leading AI automation services across Leicester, Derby, Nottingham & East Midlands. Intelligent chatbots, workflow automation, predictive analytics for growing businesses.",
  twitterTitle: "AI Automation East Midlands | Postino",
  twitterDescription: "Premier AI automation across the East Midlands. Intelligent systems, workflow automation & predictive analytics. Expert implementation with measurable ROI.",
});

const midlandsLocations = [
  {
    city: "Leicester",
    description: "AI automation solutions for Leicester's thriving business community",
    industries: "Manufacturing, Finance, Retail",
    population: "329,000"
  },
  {
    city: "Derby",
    description: "Intelligent automation for Derby's engineering and aerospace sectors",
    industries: "Aerospace, Engineering, Manufacturing",
    population: "248,000"
  },
  {
    city: "Nottingham",
    description: "Advanced AI solutions for Nottingham's diverse business landscape",
    industries: "Healthcare, Education, Digital",
    population: "321,000"
  },
  {
    city: "Lincoln",
    description: "Smart automation for Lincoln's agricultural and technology businesses",
    industries: "Agriculture, Technology, Tourism",
    population: "94,000"
  }
];

const automationServices = [
  {
    title: "Intelligent Chatbots",
    description: "24/7 AI-powered customer service and lead qualification",
    benefits: ["Reduce response time by 90%", "Increase lead conversion by 40%", "24/7 availability"],
    icon: Brain,
    price: "From £112.50/month"
  },
  {
    title: "Workflow Automation",
    description: "Streamline business processes and eliminate manual tasks",
    benefits: ["Save 40+ hours per week", "Reduce errors by 95%", "Improve efficiency"],
    icon: Zap,
    price: "From £75/month"
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered insights for better business decisions",
    benefits: ["Forecast demand accurately", "Identify growth opportunities", "Optimize resources"],
    icon: Target,
    price: "Custom pricing"
  }
];

export default function MidlandsAIAutomationPage() {
  const midlandsFAQs = [
    {
      question: "What areas of the East Midlands do you serve for AI automation?",
      answer: "We provide AI automation services across the entire East Midlands region including Leicester, Derby, Nottingham, Lincoln, Northampton, and surrounding areas. Being based in Bingham, Nottinghamshire, we have deep understanding of the regional business landscape and can provide on-site support throughout the East Midlands. We serve businesses from small family firms to larger regional companies."
    },
    {
      question: "How much does AI automation cost for East Midlands businesses?",
      answer: "AI automation pricing is designed for regional SME budgets: Basic workflow automation starts from £75/month, intelligent chatbots from £112.50/month, and custom AI solutions from £750-£3,000 depending on complexity. We offer competitive regional pricing and 25% local discounts for Nottinghamshire businesses. Most East Midlands clients see ROI within 3-6 months through operational savings and efficiency gains."
    },
    {
      question: "Which industries in the East Midlands benefit most from AI automation?",
      answer: "AI automation delivers excellent results across diverse East Midlands industries: <strong>Manufacturing</strong> (Leicester/Derby) - production optimization, quality control, inventory management; <strong>Agriculture</strong> (Lincolnshire) - crop monitoring, automated reporting, supply chain optimization; <strong>Healthcare</strong> (Nottingham) - patient communication, appointment scheduling, records management; <strong>Professional Services</strong> - client onboarding, document processing, CRM automation; <strong>Retail/E-commerce</strong> - customer service, order processing, personalized marketing."
    },
    {
      question: "Can you provide on-site support across the East Midlands?",
      answer: "Yes, we provide on-site consultation and support throughout the East Midlands. Based in Bingham, we can easily reach Leicester (1 hour), Derby (45 minutes), Lincoln (1 hour), and other regional locations. On-site services include initial assessments, system implementation, staff training, and ongoing support. Remote support is also available with screen sharing and video consultations for routine matters."
    },
    {
      question: "How does AI automation help East Midlands businesses compete nationally?",
      answer: "AI automation levels the playing field by giving regional businesses capabilities typically available only to large corporations: 24/7 customer service through intelligent chatbots, automated marketing campaigns, predictive analytics for better decisions, streamlined operations that reduce costs, and professional customer experiences that build trust. Many of our East Midlands clients now compete effectively with London-based companies."
    },
    {
      question: "What's the typical implementation timeline for East Midlands businesses?",
      answer: "Implementation timelines are designed around regional business needs: <strong>Quick Wins</strong> (2-4 weeks) - chatbots, basic automation; <strong>Standard Projects</strong> (6-12 weeks) - comprehensive workflow automation, CRM integration; <strong>Complex Solutions</strong> (3-6 months) - custom AI development, multi-system integration. We work around your operational requirements and can implement in phases to minimize disruption."
    },
    {
      question: "Do you understand the specific challenges facing East Midlands businesses?",
      answer: "Absolutely. Being locally based, we understand regional challenges: competing with larger companies, skilled workforce retention, supply chain complexities, seasonal business variations, and budget constraints. Our AI solutions are specifically designed to address these challenges - automating routine tasks so your team can focus on growth, reducing operational costs, and improving competitiveness against larger rivals."
    },
    {
      question: "What ongoing support do you provide for East Midlands clients?",
      answer: "Comprehensive ongoing support includes: monthly performance reviews, system optimization and updates, staff training sessions, technical support (phone/email/on-site), quarterly business reviews, and strategic consultation for expanding automation. We also provide documentation, video tutorials, and access to our knowledge base. Regional clients receive priority support with guaranteed response times."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header is global; Navigation removed */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white mb-6">
              East Midlands AI Automation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              AI Automation Across the
              <span className="text-yellow-300"> East Midlands</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Transform your East Midlands business with cutting-edge AI automation. From Leicester to Derby, Nottingham to Lincoln - we deliver intelligent solutions that drive measurable growth across the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/ai-automation-demo">
                  <span className="font-heading font-semibold">
                    Get Your Free AI Assessment
                  </span>
                  <Brain className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-blue-600 bg-white/10"
              >
                <Link href="/contact" className="text-white hover:text-blue-600">
                  <span className="font-heading font-semibold">
                    Speak to an Expert
                  </span>
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Serving the East Midlands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI automation expertise spans across major East Midlands cities, delivering tailored solutions for diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {midlandsLocations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <CardTitle className="text-lg">{location.city}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">{location.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold">Key Industries:</span>
                      <p className="text-gray-600">{location.industries}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Population:</span>
                      <p className="text-gray-600">{location.population}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              AI Automation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed for East Midlands businesses across all sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-lg font-semibold text-blue-600 mb-3">
                        {service.price}
                      </p>
                      <Button
                        asChild
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link href="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              East Midlands Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from AI automation implementations across the region.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">45hrs</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Weekly Time Savings</div>
                <p className="text-gray-600">Leicester manufacturing company automated their entire order processing workflow</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">280%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Lead Conversion Increase</div>
                <p className="text-gray-600">Derby engineering firm implemented intelligent lead routing and automated follow-ups</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">97%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Customer Satisfaction</div>
                <p className="text-gray-600">Nottingham retail business deployed AI chatbots for instant customer support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <FAQSection
        title="East Midlands AI Automation FAQs"
        subtitle="Everything you need to know about AI automation across the East Midlands region"
        items={midlandsFAQs}
        className="bg-gray-50"
        schemaId="midlands-automation-faq-schema"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Automate Your East Midlands Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of East Midlands businesses already benefiting from AI automation.
            Get your free consultation and discover the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/ai-automation-demo">
                Get Your Free AI Assessment
                <Brain className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-gray-900 bg-white/10"
            >
              <Link href="/contact" className="text-white hover:text-gray-900">
                Call 0800 772 3291
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <Script
        id="midlands-automation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Postino AI Automation East Midlands",
            "description": "Premier AI automation services across Leicester, Derby, Nottingham & East Midlands. Intelligent chatbots, workflow automation, predictive analytics for growing businesses.",
            "url": "https://postino.cc/midlands-ai-automation",
            "serviceType": [
              "AI Automation",
              "Intelligent Chatbots",
              "Workflow Automation",
              "Predictive Analytics",
              "Business Intelligence"
            ],
            "areaServed": [
              {
                "@type": "City",
                "name": "Leicester"
              },
              {
                "@type": "City",
                "name": "Derby"
              },
              {
                "@type": "City",
                "name": "Nottingham"
              },
              {
                "@type": "City",
                "name": "Lincoln"
              },
              {
                "@type": "AdministrativeArea",
                "name": "East Midlands"
              }
            ],
            "provider": generateOrganizationSchema(),
            "offers": [
              {
                "@type": "Offer",
                "name": "AI Chatbot Development",
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
                "name": "Workflow Automation",
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
          }),
        }}
      />

      <WhatsAppWidget />
    </div>
  );
}
