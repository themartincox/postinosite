import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
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
  Check,
  MessageSquare,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Bot,
  Calendar,
  BarChart,
  Headphones,
  Zap,
  Users,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "24-Hour AI Chatbot Setup Nottingham | Instant Customer Support | Postino",
  description: "AI chatbot configured and deployed within 24 hours for Nottingham businesses. Handles enquiries 24/7, appointment booking, lead qualification. From £450, £112.50 refundable deposit. Serving City Centre, Hyson Green, Radford, Lenton, Beeston. Call 0800 772 3291 for immediate deployment.",
  keywords: "24 hour AI chatbot Nottingham, instant chatbot setup Nottingham, AI customer service Nottingham, automated chat Nottingham, chatbot development Nottingham, AI assistant Nottingham, automated customer support Nottingham city centre",
  alternates: {
    canonical: 'https://postino.cc/nottingham/ai-chatbot-setup'
  },
  openGraph: {
    title: "24-Hour AI Chatbot Setup Nottingham | Postino",
    description: "Intelligent AI chatbot configured and deployed within 24 hours for Nottingham businesses. 24/7 customer support automation.",
    url: 'https://postino.cc/nottingham/ai-chatbot-setup',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/nottingham-ai-chatbot-setup.jpg",
        width: 1200,
        height: 630,
        alt: "24-Hour AI Chatbot Setup in Nottingham - Postino",
      },
    ],
  },
};

const chatbotFeatures = [
  {
    title: "Industry-Specific Responses",
    description: "Pre-trained on your industry's common questions and terminology",
    icon: <Bot className="h-6 w-6" />
  },
  {
    title: "Appointment Booking Integration",
    description: "Customers can book appointments directly through the chat",
    icon: <Calendar className="h-6 w-6" />
  },
  {
    title: "24/7 Customer Support",
    description: "Never miss an enquiry - responds instantly any time of day",
    icon: <Headphones className="h-6 w-6" />
  },
  {
    title: "Lead Qualification",
    description: "Automatically qualifies prospects and captures contact details",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Analytics Dashboard",
    description: "Track conversations, leads generated, and customer satisfaction",
    icon: <BarChart className="h-6 w-6" />
  },
  {
    title: "30-Day Optimization",
    description: "We monitor and improve responses based on real conversations",
    icon: <Zap className="h-6 w-6" />
  }
];

const deploymentSteps = [
  {
    step: "1",
    title: "Business Analysis",
    description: "30-minute call to understand your business and customer enquiries",
    time: "Same day"
  },
  {
    step: "2",
    title: "AI Training & Setup",
    description: "Configure chatbot with industry-specific responses and integrations",
    time: "12 hours"
  },
  {
    step: "3",
    title: "Testing & Refinement",
    description: "Test all scenarios and refine responses for your business",
    time: "6 hours"
  },
  {
    step: "4",
    title: "Go Live & Training",
    description: "Deploy to your website and train your team on management",
    time: "6 hours"
  }
];

const pricingOptions = [
  {
    name: "Essential Bot",
    price: "£450",
    deposit: "£112.50",
    description: "Perfect for small Nottingham businesses handling basic enquiries",
    features: [
      "Up to 50 pre-programmed responses",
      "Basic lead capture forms",
      "Email notifications for new leads",
      "Simple appointment booking",
      "Analytics dashboard",
      "24-hour deployment"
    ],
    popular: false
  },
  {
    name: "Professional Bot",
    price: "£900",
    deposit: "£225",
    description: "Ideal for established Nottingham businesses with complex needs",
    features: [
      "Up to 200 pre-programmed responses",
      "Advanced lead qualification",
      "CRM integration (HubSpot, Salesforce)",
      "Multi-step appointment booking",
      "Customer satisfaction surveys",
      "Advanced analytics & reporting",
      "30-day response optimization",
      "24-hour deployment"
    ],
    popular: true
  },
  {
    name: "Enterprise Bot",
    price: "£1,800",
    deposit: "£450",
    description: "Complete AI solution for larger Nottingham organizations",
    features: [
      "Unlimited custom responses",
      "Multi-language support",
      "Advanced CRM integrations",
      "Custom workflow automation",
      "A/B testing for responses",
      "Priority support & optimization",
      "Team training sessions",
      "API integrations",
      "24-hour deployment"
    ],
    popular: false
  }
];

const industryExamples = [
  {
    industry: "Healthcare",
    example: "Dental Practice in City Centre",
    chatbotUse: "Appointment booking, service information, emergency contact details",
    result: "80% reduction in phone calls, 24/7 booking availability"
  },
  {
    industry: "Professional Services",
    example: "Accountancy Firm in Beeston",
    chatbotUse: "Service enquiries, consultation booking, document upload guidance",
    result: "60% more qualified leads, faster response times"
  },
  {
    industry: "Retail",
    example: "Fashion Boutique in Hyson Green",
    chatbotUse: "Product information, size guides, store hours, appointment booking",
    result: "40% increase in in-store visits, improved customer satisfaction"
  },
  {
    industry: "Home Services",
    example: "Plumbing Company in Radford",
    chatbotUse: "Emergency call routing, quote requests, service area coverage",
    result: "50% faster response times, better lead qualification"
  }
];

const chatbotBenefits = [
  {
    benefit: "Never Miss a Lead",
    description: "Capture enquiries 24/7, even when you're closed or busy",
    stat: "73% of customers expect immediate responses"
  },
  {
    benefit: "Reduce Call Volume",
    description: "Handle common questions automatically, freeing up staff time",
    stat: "Average 60-80% reduction in routine calls"
  },
  {
    benefit: "Qualify Leads Instantly",
    description: "Identify serious prospects and gather contact details automatically",
    stat: "3x higher lead qualification rate"
  },
  {
    benefit: "Improve Customer Satisfaction",
    description: "Instant responses improve customer experience and loyalty",
    stat: "89% prefer instant chat responses"
  }
];

export default function AIChatbotSetupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue via-forest-green to-coral-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                <Clock className="h-4 w-4 mr-2" />
                24-Hour Deployment Guaranteed
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                AI Chatbot Setup
                <span className="block text-3xl lg:text-4xl text-coral-red">
                  Nottingham Businesses
                </span>
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-white/90">
                Intelligent chatbot configured and deployed within 24 hours.
                Handle customer enquiries 24/7 while you focus on running your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
                  <Link href="#pricing">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-blue font-semibold px-8 py-3">
                  <Link href="tel:08007723291">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 0800 772 3291
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>£112.50 refundable deposit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>24-hour deployment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>30-day optimization included</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                24-Hour Deployment
              </h3>
              <div className="space-y-4">
                {deploymentSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-coral-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <p className="text-white/80 text-sm">{step.description}</p>
                      <Badge variant="outline" className="text-coral-red border-coral-red mt-1">
                        {step.time}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Nottingham Businesses Choose AI Chatbots
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your customer service with intelligent automation that works 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chatbotBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-heading text-midnight-blue mb-2">
                    {benefit.benefit}
                  </CardTitle>
                  <div className="text-3xl font-bold text-coral-red mb-2">
                    {benefit.stat}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Everything Included in 24 Hours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI features that normally take weeks to develop, deployed in just one day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatbotFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="text-forest-green mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              AI Chatbots for Every Nottingham Industry
            </h2>
            <p className="text-xl text-gray-600">
              Customized solutions for your specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-forest-green border-forest-green">
                      {example.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {example.example}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Chatbot Handles:</h4>
                      <p className="text-sm text-gray-600">{example.chatbotUse}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Results:</h4>
                      <p className="text-sm font-semibold text-coral-red">{example.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              AI Chatbot Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing, refundable deposits, 24-hour deployment guarantee
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${option.popular ? 'ring-2 ring-coral-red scale-105' : ''}`}>
                {option.popular && (
                  <div className="absolute top-0 right-0 bg-coral-red text-white px-4 py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading text-midnight-blue">
                    {option.name}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-midnight-blue">
                      {option.price}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {option.deposit} refundable deposit
                    </div>
                  </div>
                  <CardDescription className="mt-4">
                    {option.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-forest-green mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className={`w-full ${option.popular ? 'bg-coral-red hover:bg-coral-red/90' : 'bg-midnight-blue hover:bg-midnight-blue/90'}`}>
                    <Link href={`/contact?service=ai-chatbot&tier=${option.name.toLowerCase().replace(' ', '-')}`}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
            Ready for 24/7 Customer Support?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            AI chatbot configured and deployed within 24 hours.
            £112.50 refundable deposit gets you started today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
              <Link href="#pricing">
                Choose Your Chatbot <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-blue font-semibold px-8 py-3">
              <Link href="tel:08007723291">
                <Phone className="mr-2 h-5 w-5" />
                Call: 0800 772 3291
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>24-hour deployment</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Serving all Nottingham areas</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              <span>30-day optimization included</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />

      {/* Service Structured Data */}
      <Script
        id="ai-chatbot-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "24-Hour AI Chatbot Setup Nottingham",
            "description": "Intelligent AI chatbot configured and deployed within 24 hours for Nottingham businesses. Handles customer enquiries 24/7, appointment booking, lead qualification.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Postino",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1 Fisher Lane",
                "addressLocality": "Bingham",
                "addressRegion": "Nottinghamshire",
                "postalCode": "NG13 8BQ",
                "addressCountry": "GB"
              },
              "telephone": "+44-800-772-3291"
            },
            "areaServed": {
              "@type": "City",
              "name": "Nottingham",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Nottinghamshire"
              }
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Essential AI Chatbot",
                "price": "450",
                "priceCurrency": "GBP",
                "description": "Basic AI chatbot with 50 responses deployed in 24 hours"
              },
              {
                "@type": "Offer",
                "name": "Professional AI Chatbot",
                "price": "900",
                "priceCurrency": "GBP",
                "description": "Advanced AI chatbot with 200 responses and CRM integration deployed in 24 hours"
              },
              {
                "@type": "Offer",
                "name": "Enterprise AI Chatbot",
                "price": "1800",
                "priceCurrency": "GBP",
                "description": "Full AI chatbot solution with unlimited responses and custom integrations deployed in 24 hours"
              }
            ],
            "serviceType": "AI Chatbot Development and Deployment",
            "serviceOutput": "Intelligent Customer Service Chatbot",
            "hoursAvailable": "Mo-Fr 09:00-17:00"
          })
        }}
      />
    </div>
  );
}
