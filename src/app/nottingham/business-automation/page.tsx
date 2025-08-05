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
  Zap,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Settings,
  BarChart,
  Users,
  MessageSquare,
  Calendar,
  Target,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "72-Hour Business Automation Nottingham | Quick Workflow Setup | Postino",
  description: "Custom business automation workflows implemented within 72 hours for Nottingham businesses. Email automation, CRM integration, customer journeys, automated follow-ups. From £1,200, £300 refundable deposit. Serving City Centre, Hyson Green, Radford, Lenton, Beeston. Call 0800 772 3291 for rapid implementation.",
  keywords: "72 hour business automation Nottingham, quick workflow automation Nottingham, rapid CRM setup Nottingham, fast email automation Nottingham, business process automation Nottingham, automated customer journeys Nottingham, urgent automation setup Nottingham city centre",
  alternates: {
    canonical: 'https://postino.cc/nottingham/business-automation'
  },
  openGraph: {
    title: "72-Hour Business Automation Nottingham | Postino",
    description: "Custom business automation workflows implemented within 72 hours for Nottingham businesses. Email automation, CRM integration, and automated follow-ups.",
    url: 'https://postino.cc/nottingham/business-automation',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/nottingham-business-automation.jpg",
        width: 1200,
        height: 630,
        alt: "72-Hour Business Automation in Nottingham - Postino",
      },
    ],
  },
};

const automationFeatures = [
  {
    title: "Email Automation Sequences",
    description: "Automated follow-ups that nurture leads and customers",
    icon: <Mail className="h-6 w-6" />
  },
  {
    title: "Customer Journey Mapping",
    description: "Personalized experiences from first contact to loyal customer",
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "CRM Integration",
    description: "Connect all your systems for seamless data flow",
    icon: <Settings className="h-6 w-6" />
  },
  {
    title: "Automated Follow-ups",
    description: "Never miss a follow-up opportunity with smart automation",
    icon: <MessageSquare className="h-6 w-6" />
  },
  {
    title: "Performance Analytics",
    description: "Track every interaction and optimize for better results",
    icon: <BarChart className="h-6 w-6" />
  },
  {
    title: "Staff Training Included",
    description: "Your team gets full training on managing the automation",
    icon: <Users className="h-6 w-6" />
  }
];

const automationProcess = [
  {
    step: "1",
    title: "Business Analysis",
    description: "Deep dive into your current processes and pain points",
    time: "Day 1 Morning"
  },
  {
    step: "2",
    title: "Workflow Design",
    description: "Map out custom automation workflows for your business",
    time: "Day 1 Afternoon"
  },
  {
    step: "3",
    title: "System Integration",
    description: "Connect all your tools and platforms seamlessly",
    time: "Day 2"
  },
  {
    step: "4",
    title: "Testing & Refinement",
    description: "Test all workflows and fine-tune for optimal performance",
    time: "Day 3 Morning"
  },
  {
    step: "5",
    title: "Training & Go-Live",
    description: "Train your team and activate all automation systems",
    time: "Day 3 Afternoon"
  }
];

const automationTiers = [
  {
    name: "Essential Automation",
    price: "£1,200",
    deposit: "£300",
    description: "Core automation for small Nottingham businesses",
    features: [
      "Basic email automation (5 sequences)",
      "Contact form automation",
      "Simple follow-up workflows",
      "CRM setup & integration",
      "Performance dashboard",
      "2 hours staff training",
      "72-hour implementation"
    ],
    popular: false
  },
  {
    name: "Professional Automation",
    price: "£2,400",
    deposit: "£600",
    description: "Comprehensive automation for growing businesses",
    features: [
      "Advanced email automation (15 sequences)",
      "Multi-channel customer journeys",
      "Lead scoring & qualification",
      "Advanced CRM workflows",
      "Sales pipeline automation",
      "Customer onboarding sequences",
      "Analytics & reporting dashboard",
      "4 hours staff training",
      "72-hour implementation"
    ],
    popular: true
  },
  {
    name: "Enterprise Automation",
    price: "£4,800",
    deposit: "£1,200",
    description: "Complete automation ecosystem for established businesses",
    features: [
      "Unlimited email sequences",
      "AI-powered customer segmentation",
      "Advanced lead nurturing",
      "Multi-platform integrations",
      "Custom workflow development",
      "Automated reporting & insights",
      "Customer lifecycle automation",
      "Priority support & optimization",
      "8 hours staff training",
      "72-hour implementation"
    ],
    popular: false
  }
];

const automationBenefits = [
  {
    title: "Save 20+ Hours Per Week",
    description: "Automate repetitive tasks and focus on growing your business",
    stat: "Average time saved",
    icon: <Clock className="h-12 w-12" />
  },
  {
    title: "Increase Lead Conversion by 40%",
    description: "Nurture leads automatically with personalized sequences",
    stat: "Typical improvement",
    icon: <Target className="h-12 w-12" />
  },
  {
    title: "Never Miss a Follow-Up",
    description: "Automated follow-ups ensure no opportunity is lost",
    stat: "100% consistency",
    icon: <CheckCircle className="h-12 w-12" />
  },
  {
    title: "Improve Customer Experience",
    description: "Deliver consistent, timely communication at scale",
    stat: "Better satisfaction",
    icon: <Star className="h-12 w-12" />
  }
];

const nottinghamAutomationCases = [
  {
    business: "City Centre Law Firm",
    area: "City Centre",
    industry: "Legal Services",
    challenge: "Manual client follow-ups taking 15 hours per week",
    solution: "Automated client onboarding and case update sequences",
    result: "95% time reduction, 60% more clients handled efficiently",
    timeframe: "72 hours"
  },
  {
    business: "Beeston Dental Practice",
    area: "Beeston",
    industry: "Healthcare",
    challenge: "Missed appointment reminders causing no-shows",
    solution: "Automated appointment confirmations and reminder sequences",
    result: "80% reduction in no-shows, 40% increase in bookings",
    timeframe: "72 hours"
  },
  {
    business: "Radford Estate Agents",
    area: "Radford",
    industry: "Property",
    challenge: "Leads going cold due to slow follow-up",
    solution: "Instant lead qualification and nurturing automation",
    result: "300% improvement in lead conversion rate",
    timeframe: "72 hours"
  }
];

export default function BusinessAutomationPage() {
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
                72-Hour Implementation Guaranteed
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Business Automation
                <span className="block text-3xl lg:text-4xl text-coral-red">
                  72-Hour Setup
                </span>
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-white/90">
                Custom automation workflows implemented within 72 hours. Save 20+ hours per week
                and increase efficiency with our rapid automation deployment for Nottingham businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
                  <Link href="#pricing">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
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
                  <span>£300 refundable deposit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>72-hour implementation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Full staff training included</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                72-Hour Process
              </h3>
              <div className="space-y-4">
                {automationProcess.map((step, index) => (
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
              Transform Your Business in 72 Hours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop wasting time on repetitive tasks. Our automation systems work 24/7
              so you can focus on what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="text-forest-green mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue mb-2">
                    {benefit.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-coral-red mb-2">
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
              Everything Included in 72 Hours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation setup that transforms how you work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Business Automation Pricing
            </h2>
            <p className="text-xl text-gray-600">
              One-time setup with 72-hour implementation guarantee
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationTiers.map((tier, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${tier.popular ? 'ring-2 ring-coral-red scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-coral-red text-white px-4 py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading text-midnight-blue">
                    {tier.name}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-midnight-blue">
                      {tier.price}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {tier.deposit} refundable deposit
                    </div>
                  </div>
                  <CardDescription className="mt-4">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-forest-green mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className={`w-full ${tier.popular ? 'bg-coral-red hover:bg-coral-red/90' : 'bg-midnight-blue hover:bg-midnight-blue/90'}`}>
                    <Link href={`/contact?service=business-automation&tier=${tier.name.toLowerCase().replace(' ', '-')}`}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Nottingham Automation Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from 72-hour automation implementations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nottinghamAutomationCases.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-forest-green border-forest-green">
                      {study.area}
                    </Badge>
                    <Badge variant="outline" className="text-coral-red border-coral-red">
                      {study.timeframe}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {study.business}
                  </CardTitle>
                  <CardDescription className="text-midnight-blue font-semibold">
                    {study.industry}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Challenge:</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Solution:</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Result:</h4>
                      <p className="text-sm font-semibold text-forest-green">{study.result}</p>
                    </div>
                  </div>
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
            Ready to Save 20+ Hours Per Week?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Custom business automation implemented within 72 hours. Stop doing repetitive tasks
            and start focusing on growing your Nottingham business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
              <Link href="#pricing">
                Choose Your Package <ArrowRight className="ml-2 h-5 w-5" />
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
              <span>72-hour implementation</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Nottingham local team</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              <span>Full training included</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />

      {/* Service Structured Data */}
      <Script
        id="business-automation-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "72-Hour Business Automation Nottingham",
            "description": "Custom business automation workflows implemented within 72 hours for Nottingham businesses. Email automation, CRM integration, customer journeys, automated follow-ups.",
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
                "name": "Essential Business Automation",
                "price": "1200",
                "priceCurrency": "GBP",
                "description": "Core automation workflows implemented in 72 hours"
              },
              {
                "@type": "Offer",
                "name": "Professional Business Automation",
                "price": "2400",
                "priceCurrency": "GBP",
                "description": "Comprehensive automation system implemented in 72 hours"
              },
              {
                "@type": "Offer",
                "name": "Enterprise Business Automation",
                "price": "4800",
                "priceCurrency": "GBP",
                "description": "Complete automation ecosystem implemented in 72 hours"
              }
            ],
            "serviceType": "Business Process Automation",
            "serviceOutput": "Automated Business Workflows",
            "hoursAvailable": "Mo-Fr 09:00-17:00"
          })
        }}
      />
    </div>
  );
}
