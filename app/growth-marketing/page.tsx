import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Growth Marketing Services Nottingham | Expert Marketing Agency",
  description: "Professional growth marketing services in Nottingham. AI-enhanced SEO, content strategy, conversion optimization & brand development. Proven results for SMEs across Nottinghamshire. Get your free consultation today.",
  keywords: "growth marketing Nottingham, marketing agency Nottingham, SEO services Nottingham, digital marketing Nottinghamshire, conversion rate optimization, content marketing East Midlands, brand development UK, marketing automation Nottingham",
  authors: [{ name: "Postino Marketing Agency" }],
  publisher: "Postino Ltd",
  alternates: {
    canonical: '/growth-marketing'
  },
  openGraph: {
    title: "Growth Marketing Services Nottingham | Postino Agency",
    description: "Transform your Nottingham business with expert growth marketing. AI-enhanced SEO, content strategy, and conversion optimization. Serving SMEs across Nottinghamshire with proven results.",
    type: "website",
    locale: "en_GB",
    url: 'https://postino.cc/growth-marketing',
    siteName: 'Postino',
    images: [
      {
        url: 'https://postino.cc/og-growth-marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Growth Marketing Services Nottingham - Postino Agency'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Marketing Services Nottingham | Postino",
    description: "Expert growth marketing for Nottingham SMEs. AI-enhanced SEO, content strategy & conversion optimization. Proven results across Nottinghamshire.",
    images: ['https://postino.cc/og-growth-marketing.jpg']
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
  Eye,
  Globe,
  Mail,
  MessageSquare,
  PenTool,
  Search,
  Share2,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function GrowthMarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white mb-6">
              Growth Marketing Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Expert Marketing Strategies That Drive
              <span className="text-coral-red"> Measurable Growth</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              From comprehensive SEO strategies to compelling content creation,
              our growth marketing services are designed to build sustainable,
              scalable growth for ambitious SMEs. Every campaign is data-driven,
              results-focused, and optimized for maximum ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-coral-red hover:bg-coral-red/90 text-white"
              >
                <Link href="/growth-consultation">
                  Get Your Growth Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-forest-green bg-white/5"
              >
                <Link
                  href="/case-studies"
                  className="text-coral-red hover:text-forest-green"
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

      {/* Service Pillars */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Four Pillars of Growth Excellence
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our growth marketing approach is built on four interconnected
              pillars, each enhanced by AI insights and proven methodologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inbound Marketing */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-forest-green">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Inbound Marketing
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Attract, engage, and convert your ideal customers
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Search className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/inbound/seo"
                        className="hover:text-forest-green transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-forest-green transition-colors">
                          SEO Strategy & Implementation
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        AI-enhanced keyword research, technical SEO, and content
                        optimization for maximum organic visibility
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <PenTool className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/inbound/content-strategy-creation"
                        className="hover:text-forest-green transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-forest-green transition-colors">
                          Content Strategy & Creation
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Strategic content planning, blog management, and thought
                        leadership content that drives engagement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/inbound/email-marketing-automation"
                        className="hover:text-forest-green transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-forest-green transition-colors">
                          Email Marketing Automation
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Automated nurture sequences, personalized campaigns, and
                        performance optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Share2 className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/inbound/social-media-management"
                        className="hover:text-forest-green transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-forest-green transition-colors">
                          Social Media Management
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Strategic social presence, community building, and
                        engagement optimization
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="bg-forest-green/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-forest-green mb-2">
                    AI-Enhanced Features:
                  </h5>
                  <ul className="text-sm font-body text-gray-600 space-y-1">
                    <li>
                      • Intelligent keyword targeting and content gaps analysis
                    </li>
                    <li>• Automated content performance optimization</li>
                    <li>• Predictive email send time optimization</li>
                  </ul>
                </div>
                <Button
                  asChild
                  className="w-full bg-forest-green hover:bg-forest-green/90 text-white"
                >
                  <Link href="/growth-marketing/inbound">
                    Explore Inbound Marketing Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Search Optimization */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-coral-red">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-coral-red rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      AI Search Optimization
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Next-generation SEO powered by artificial intelligence
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/ai-search/ai-keyword-research"
                        className="hover:text-coral-red transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-coral-red transition-colors">
                          AI-Driven Keyword Research
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Machine learning algorithms identify high-opportunity
                        keywords and search trends
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/ai-search/content-relevance-optimization"
                        className="hover:text-coral-red transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-coral-red transition-colors">
                          Content Relevance Optimization
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        AI analysis ensures content perfectly matches search
                        intent and user behavior
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/ai-search/predictive-seo-analytics"
                        className="hover:text-coral-red transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-coral-red transition-colors">
                          Predictive SEO Analytics
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Forecast ranking opportunities and identify content gaps
                        before competitors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/ai-search/organic-visibility-enhancement"
                        className="hover:text-coral-red transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-coral-red transition-colors">
                          Organic Visibility Enhancement
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Systematic approach to improving search rankings and
                        organic traffic quality
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="bg-coral-red/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-coral-red mb-2">
                    Results You Can Expect:
                  </h5>
                  <ul className="text-sm font-body text-gray-600 space-y-1">
                    <li>• 150%+ increase in organic traffic within 6 months</li>
                    <li>• 40% improvement in keyword ranking positions</li>
                    <li>• Enhanced content performance and user engagement</li>
                  </ul>
                </div>
                <Button
                  asChild
                  className="w-full bg-coral-red hover:bg-coral-red/90 text-white"
                >
                  <Link href="/growth-marketing/ai-search">
                    Explore AI Search Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Branding & Creative */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-midnight-blue">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-midnight-blue rounded-lg flex items-center justify-center">
                    <PenTool className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Branding & Creative
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Compelling brand identity and conversion-focused design
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/branding/brand-identity-development"
                        className="hover:text-midnight-blue transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-coral-red transition-colors">
                          Brand Identity Development
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Strategic brand positioning, visual identity, and
                        messaging that resonates with your audience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/branding/collateral-design"
                        className="hover:text-midnight-blue transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-coral-red transition-colors">
                          Collateral & Design
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Professional marketing materials, presentations, and
                        brand assets that build credibility
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/branding/website-design-development"
                        className="hover:text-midnight-blue transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-coral-red transition-colors">
                          Website Design & Development
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Conversion-optimized websites that combine beautiful
                        design with exceptional user experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/branding/conversion-funnels"
                        className="hover:text-midnight-blue transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-coral-red transition-colors">
                          Conversion Funnels
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Strategic customer journey design and funnel
                        optimization for maximum conversions
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="bg-midnight-blue/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-midnight-blue mb-2">
                    Creative Excellence:
                  </h5>
                  <ul className="text-sm font-body text-gray-600 space-y-1">
                    <li>• Brand consistency across all touchpoints</li>
                    <li>• Data-driven design decisions</li>
                    <li>• Mobile-first, conversion-optimized approach</li>
                  </ul>
                </div>
                <Button
                  asChild
                  className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white"
                >
                  <Link href="/growth-marketing/branding">
                    Explore Branding Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Strategy & Consulting */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-forest-green">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Strategy & Consulting
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Data-driven insights and strategic guidance
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Search className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/strategy/research-market-analysis"
                        className="hover:text-forest-green transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-forest-green transition-colors">
                          Research & Market Analysis
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Deep market insights, competitor analysis, and customer
                        research to inform strategy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/strategy/marketing-planning"
                        className="hover:text-forest-green transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-forest-green transition-colors">
                          Marketing Planning
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Comprehensive marketing strategies with clear roadmaps
                        and measurable objectives
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/strategy/analytics-reporting"
                        className="hover:text-forest-green transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-forest-green transition-colors">
                          Analytics & Reporting
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Advanced analytics setup, performance tracking, and
                        actionable insights reporting
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <Link
                        href="/growth-marketing/strategy/conversion-rate-optimization"
                        className="hover:text-forest-green transition-colors"
                      >
                        <h4 className="font-heading font-semibold text-midnight-blue mb-1 hover:text-forest-green transition-colors">
                          Conversion Rate Optimization
                        </h4>
                      </Link>
                      <p className="font-body text-gray-600 text-sm">
                        Systematic testing and optimization to improve
                        conversion rates across all touchpoints
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="bg-forest-green/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-forest-green mb-2">
                    Strategic Value:
                  </h5>
                  <ul className="text-sm font-body text-gray-600 space-y-1">
                    <li>• Clear ROI measurement and optimization</li>
                    <li>• Continuous strategy refinement</li>
                    <li>• Executive-level strategic consulting</li>
                  </ul>
                </div>
                <Button
                  asChild
                  className="w-full bg-forest-green hover:bg-forest-green/90 text-white"
                >
                  <Link href="/growth-marketing/strategy">
                    Explore Strategy Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our Proven Growth Process
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Every successful growth strategy follows a systematic approach.
              Here's how we ensure your marketing investment delivers
              measurable, sustainable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description:
                  "Deep dive into your business, market, and current performance to identify opportunities.",
                icon: Search,
              },
              {
                step: "02",
                title: "Strategy Development",
                description:
                  "Create a comprehensive, data-driven growth strategy tailored to your unique goals.",
                icon: Target,
              },
              {
                step: "03",
                title: "Implementation & Execution",
                description:
                  "Deploy campaigns and initiatives with precision, monitoring performance at every step.",
                icon: TrendingUp,
              },
              {
                step: "04",
                title: "Optimization & Scaling",
                description:
                  "Continuously refine and scale successful initiatives for maximum growth impact.",
                icon: BarChart3,
              },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-coral-red mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Let's discuss how our growth marketing expertise can transform your
            business. Book a free consultation to explore your opportunities.
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
              className="border-white hover:bg-white hover:text-forest-green bg-white/5"
            >
              <Link
                href="/ai-automation"
                className="text-coral-red hover:text-forest-green"
              >
                <span className="font-heading font-semibold">
                  Explore AI Automation Services
                </span>
                <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - reusing from homepage */}
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
    </div>
  );
}
