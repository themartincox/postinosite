import type { Metadata } from "next";
import FAQSection from "@/components/ui/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { generateMetadata as generateSEOMetadata, servicePageMetadata, generateOrganizationSchema, generateServiceSchema } from "@/lib/seo-metadata";

export const metadata: Metadata = generateSEOMetadata({
  ...servicePageMetadata.nottinghamAgency,
  openGraphTitle: "Marketing Agency Nottingham | Postino - Local Digital Marketing Experts",
  openGraphDescription: "Top-rated marketing agency in Nottingham. Expert AI-enhanced marketing, SEO, web design & automation for local businesses. Based in Bingham, serving all of Nottinghamshire.",
  twitterTitle: "Marketing Agency Nottingham | Postino",
  twitterDescription: "Nottingham's leading AI-enhanced marketing agency. Expert digital marketing, SEO & automation for local businesses. Free consultation available.",
});

const localServices = [
  {
    title: "SEO Services Nottingham",
    description: "Dominate local search results with our proven SEO strategies tailored for Nottingham businesses.",
    link: "/growth-marketing/inbound/seo"
  },
  {
    title: "Web Design Nottingham",
    description: "Professional website design and development using the latest technologies.",
    link: "/growth-marketing/branding/website-design-development"
  },
  {
    title: "Local Business Marketing",
    description: "Comprehensive marketing strategies designed specifically for Nottinghamshire SMEs.",
    link: "/growth-marketing"
  },
  {
    title: "AI Automation Solutions",
    description: "Cutting-edge automation to streamline your business processes and boost efficiency.",
    link: "/ai-automation"
  }
];

const localTestimonials = [
  {
    business: "Nottingham Dental Practice",
    quote: "Postino transformed our online presence. We're now ranking #1 for 'dentist Nottingham' and seeing 3x more enquiries.",
    industry: "Healthcare"
  },
  {
    business: "East Midlands Manufacturing",
    quote: "Their AI automation saved us 20 hours per week on admin tasks. The ROI was incredible.",
    industry: "Manufacturing"
  },
  {
    business: "Bingham Professional Services",
    quote: "Local expertise with cutting-edge technology. Perfect combination for our growing business.",
    industry: "Professional Services"
  }
];

export default function NottinghamMarketingAgency() {
  const nottinghamFAQs = [
    {
      question: "What marketing services do you offer in Nottingham?",
      answer: "We offer comprehensive digital marketing services specifically for Nottingham businesses including: <strong>Local SEO</strong> (dominate 'near me' searches), <strong>Website Design & Development</strong> (mobile-responsive, conversion-optimized), <strong>AI Chatbots</strong> (24/7 customer service), <strong>Content Marketing</strong> (establish local thought leadership), <strong>Social Media Management</strong>, <strong>Email Marketing Automation</strong>, and <strong>Business Process Automation</strong>. All services are tailored for the Nottinghamshire market with deep local expertise."
    },
    {
      question: "Do you work with small businesses in Nottingham?",
      answer: "Yes, we specialize exclusively in helping SMEs (Small and Medium Enterprises) across Nottinghamshire and the East Midlands. Our services are designed specifically for growing businesses with budgets and needs that reflect the local market. We understand the challenges facing Nottingham businesses and offer flexible pricing, transparent costs, and solutions that scale with your growth."
    },
    {
      question: "Where is your Nottingham office located?",
      answer: "We're located at 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ - right in the heart of Nottinghamshire. Being genuinely local means we understand the Nottingham market, can meet face-to-face when needed, and provide hands-on support you won't get from London agencies. We serve businesses throughout Nottinghamshire including Nottingham city centre, West Bridgford, Beeston, Arnold, Carlton, and surrounding areas."
    },
    {
      question: "How much do marketing services cost in Nottingham?",
      answer: "Our Nottingham marketing packages are competitively priced for local SMEs: Website Design from £150 (refundable deposit), AI Chatbots from £112.50/month, Local SEO from £60/month, and comprehensive marketing strategies from £997/month. We offer 25% local discounts for Bingham and Rushcliffe businesses, transparent pricing with no hidden fees, and flexible payment plans to suit your cash flow."
    },
    {
      question: "Why choose a local Nottingham marketing agency?",
      answer: "Local agencies offer advantages you can't get elsewhere: <strong>Market Knowledge</strong> (we understand Nottingham customers and competition), <strong>Personal Service</strong> (face-to-face meetings, direct access to decision-makers), <strong>Community Investment</strong> (supporting local business growth), <strong>Responsive Support</strong> (same timezone, immediate assistance), and <strong>Local Networks</strong> (connections with other Nottingham businesses for partnerships). Plus, 25% local discounts make us more cost-effective than larger agencies."
    },
    {
      question: "Can you help Nottingham businesses compete with larger companies?",
      answer: "Absolutely! Our AI-enhanced marketing levels the playing field by automating processes that larger companies handle with big teams. We help Nottingham SMEs punch above their weight through: smart local SEO strategies, conversion-optimized websites, 24/7 AI customer service, automated marketing campaigns, and data-driven optimization. Many of our clients now outrank and outperform much larger competitors in local search results."
    },
    {
      question: "What results can Nottingham businesses expect?",
      answer: "Results vary by business and industry, but typical outcomes include: <strong>Local Search</strong> (ranking #1-3 for key local terms within 3-6 months), <strong>Website Traffic</strong> (150-300% increase in qualified visitors), <strong>Lead Generation</strong> (40-60% more inquiries), <strong>Conversion Rates</strong> (25-50% improvement), and <strong>Time Savings</strong> (30-40 hours per week through automation). We provide transparent monthly reporting showing exactly how your investment is performing."
    },
    {
      question: "Do you offer free consultations for Nottingham businesses?",
      answer: "Yes, we provide free 30-45 minute consultations for all Nottinghamshire businesses. During this session, we'll analyze your current marketing, identify opportunities, discuss your goals, and provide actionable recommendations - even if you don't work with us. There's no pressure or sales pitch, just genuine advice from local marketing experts who understand your market. Call 0800 772 3291 or email hello@postino.cc to book."
    }
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header is global; Navigation removed */}

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-midnight-blue via-charcoal to-forest-green text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-coral-red text-white border-none px-4 py-2">
              📍 Nottingham's Leading Marketing Agency
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Marketing Agency
              <span className="text-coral-red block">Nottingham</span>
            </h1>
            <p className="text-xl lg:text-2xl font-body mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert digital marketing, SEO, and web design for Nottingham businesses.
              Local expertise meets AI innovation to drive real results for SMEs across Nottinghamshire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 08007723291
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-blue">
                <Link href="/growth-consultation">
                  Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center text-sm opacity-90">
              <MapPin className="h-4 w-4 mr-2" />
              Located in Bingham, Serving All of Nottinghamshire
            </div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Marketing Services for Nottingham Businesses
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed specifically for SMEs in Nottinghamshire and the East Midlands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-midnight-blue group-hover:text-coral-red transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Trusted by Nottinghamshire Businesses
            </h2>
            <p className="text-xl font-body text-gray-600">
              See how local businesses are growing with our expert marketing services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading font-semibold text-midnight-blue">
                        {testimonial.business}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.industry}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-forest-green" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <FAQSection
        title="Nottingham Marketing Agency FAQs"
        subtitle="Everything you need to know about working with a local Nottingham marketing agency"
        items={nottinghamFAQs}
        className="bg-white"
        schemaId="nottingham-agency-faq-schema"
      />

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-coral-red to-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Grow Your Nottingham Business?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Get your free marketing consultation and discover how we can help your business dominate the local market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-coral-red hover:bg-gray-100">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                hello@postino.cc
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-coral-red">
              <Link href="tel:08007723291">
                <Phone className="mr-2 h-5 w-5" />
                08007723291
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What marketing services do you offer in Nottingham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer comprehensive digital marketing services including SEO, web design, content marketing, social media management, AI automation, email marketing, and conversion rate optimization for businesses across Nottinghamshire."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with small businesses in Nottingham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in helping SMEs (Small and Medium Enterprises) across Nottinghamshire and the East Midlands. Our services are specifically designed for growing businesses."
                }
              },
              {
                "@type": "Question",
                "name": "Where is your Nottingham office located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We're located at 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ. We serve businesses throughout Nottinghamshire and the East Midlands region."
                }
              },
              {
                "@type": "Question",
                "name": "How much do marketing services cost in Nottingham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our marketing packages start from £997/month and are designed specifically for SME budgets. We offer transparent, value-based pricing with custom solutions available. Contact us for a free consultation and tailored quote."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
