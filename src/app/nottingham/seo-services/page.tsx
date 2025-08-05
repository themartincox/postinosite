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
  Search,
  TrendingUp,
  BarChart,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Target,
  Globe,
  Users,
  Zap,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SEO Services Nottingham | Local SEO Experts | Top Google Rankings | Postino",
  description: "Professional SEO services in Nottingham. Local SEO, national SEO, technical SEO, content optimization. Guaranteed Google rankings for City Centre, Hyson Green, Radford, Lenton, Beeston businesses. From £297/month. Free SEO audit: 0800 772 3291. Dominate local search.",
  keywords: "SEO services Nottingham, local SEO Nottingham, search engine optimization Nottingham, Google rankings Nottingham, SEO expert Nottingham, SEO company Nottingham, Nottingham SEO agency, local search optimization Nottingham city centre",
  alternates: {
    canonical: 'https://postino.cc/nottingham/seo-services'
  },
  openGraph: {
    title: "SEO Services Nottingham | Local SEO Experts | Postino",
    description: "Professional SEO services for Nottingham businesses. Local SEO experts delivering guaranteed Google rankings and increased website traffic.",
    url: 'https://postino.cc/nottingham/seo-services',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/nottingham-seo-services.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Services in Nottingham - Postino",
      },
    ],
  },
};

const seoServices = [
  {
    title: "Local SEO Nottingham",
    description: "Dominate 'near me' searches and attract customers in your area",
    icon: <MapPin className="h-8 w-8" />,
    features: [
      "Google My Business optimization",
      "Local keyword targeting",
      "Local citation building",
      "Local content creation",
      "Review management",
      "Local schema markup"
    ],
    results: "Average #1-3 local ranking in 4-6 months",
    investment: "From £297/month",
    bestFor: "Local businesses, service areas"
  },
  {
    title: "National SEO",
    description: "Compete on a national level for high-volume commercial keywords",
    icon: <Globe className="h-8 w-8" />,
    features: [
      "National keyword research",
      "Content marketing strategy",
      "Link building campaigns",
      "Technical SEO optimization",
      "Competitor analysis",
      "Authority building"
    ],
    results: "Average 200% traffic increase in 6-12 months",
    investment: "From £797/month",
    bestFor: "E-commerce, national brands"
  },
  {
    title: "Technical SEO",
    description: "Fix technical issues that prevent your website from ranking",
    icon: <Zap className="h-8 w-8" />,
    features: [
      "Site speed optimization",
      "Mobile-first indexing",
      "Schema markup implementation",
      "URL structure optimization",
      "Internal linking strategy",
      "Core Web Vitals improvement"
    ],
    results: "Average 150% improvement in site performance",
    investment: "From £497/month",
    bestFor: "Large websites, technical issues"
  },
  {
    title: "Content SEO",
    description: "Create content that ranks and converts your target audience",
    icon: <FileText className="h-8 w-8" />,
    features: [
      "SEO content strategy",
      "Blog post optimization",
      "Landing page content",
      "Topic cluster development",
      "Content gap analysis",
      "E-A-T optimization"
    ],
    results: "Average 300% increase in organic keywords",
    investment: "From £397/month",
    bestFor: "Content marketing, thought leadership"
  }
];

const seoPackages = [
  {
    name: "Local SEO Starter",
    price: "£297/month",
    description: "Essential local SEO for small Nottingham businesses",
    features: [
      "Google My Business optimization",
      "Local keyword targeting (10 keywords)",
      "Monthly local citations (5)",
      "Basic review management",
      "Local content creation (2 posts/month)",
      "Monthly ranking reports",
      "Email support"
    ],
    guarantees: ["Google My Business verification", "Local citation consistency", "Monthly progress reports"],
    ideal: "Small local businesses",
    popular: false
  },
  {
    name: "Professional SEO",
    price: "£597/month",
    description: "Comprehensive SEO for growing Nottingham businesses",
    features: [
      "Advanced local & national SEO",
      "Keyword targeting (25 keywords)",
      "Technical SEO optimization",
      "Content marketing (4 posts/month)",
      "Link building (5 quality links/month)",
      "Competitor monitoring",
      "Google Analytics & Search Console setup",
      "Bi-weekly progress calls",
      "Priority support"
    ],
    guarantees: ["Top 3 local rankings", "Increased organic traffic", "Technical issues resolved"],
    ideal: "Established businesses",
    popular: true
  },
  {
    name: "Enterprise SEO",
    price: "£1,197/month",
    description: "Complete SEO dominance for market-leading businesses",
    features: [
      "Multi-location SEO strategy",
      "Unlimited keyword targeting",
      "Advanced technical SEO",
      "Content marketing (8 posts/month)",
      "Aggressive link building (15 links/month)",
      "Conversion rate optimization",
      "Advanced analytics & reporting",
      "Weekly strategy sessions",
      "Dedicated SEO manager",
      "24/7 support"
    ],
    guarantees: ["Market dominance", "Consistent traffic growth", "ROI tracking"],
    ideal: "Large businesses & enterprises",
    popular: false
  }
];

const nottinghamSeoResults = [
  {
    business: "Nottingham Solicitors",
    industry: "Legal Services",
    area: "City Centre",
    beforeRanking: "Not in top 100",
    afterRanking: "#1 for 'solicitor Nottingham'",
    trafficIncrease: "+450%",
    leadIncrease: "+300%",
    timeframe: "6 months",
    keyResults: ["#1 for 15 local keywords", "300% more consultation requests", "£120k additional revenue"]
  },
  {
    business: "Beeston Car Garage",
    industry: "Automotive",
    area: "Beeston",
    beforeRanking: "Page 3-4 rankings",
    afterRanking: "#1 for 'MOT Beeston'",
    trafficIncrease: "+280%",
    leadIncrease: "+200%",
    timeframe: "4 months",
    keyResults: ["Dominating local automotive searches", "200% more MOT bookings", "40% increase in revenue"]
  },
  {
    business: "Radford Dental Practice",
    industry: "Healthcare",
    area: "Radford",
    beforeRanking: "#15 local results",
    afterRanking: "#1 for 'dentist Radford'",
    trafficIncrease: "+380%",
    leadIncrease: "+250%",
    timeframe: "5 months",
    keyResults: ["Top 3 for all dental keywords", "250% more patient enquiries", "Fully booked 3 months ahead"]
  }
];

const seoProcess = [
  {
    step: "1",
    title: "SEO Audit & Analysis",
    description: "Comprehensive analysis of your current SEO performance and opportunities",
    duration: "Week 1",
    deliverables: ["Technical SEO audit", "Keyword gap analysis", "Competitor research", "SEO strategy document"]
  },
  {
    step: "2",
    title: "Foundation & Optimization",
    description: "Fix technical issues and optimize on-page elements for search engines",
    duration: "Weeks 2-4",
    deliverables: ["Technical fixes", "On-page optimization", "Local listings setup", "Analytics configuration"]
  },
  {
    step: "3",
    title: "Content & Authority Building",
    description: "Create valuable content and build domain authority through strategic link building",
    duration: "Months 2-6",
    deliverables: ["SEO content creation", "Link building campaigns", "Local citations", "Social signals"]
  },
  {
    step: "4",
    title: "Monitoring & Growth",
    description: "Continuous optimization and scaling based on performance data",
    duration: "Ongoing",
    deliverables: ["Monthly reports", "Ranking improvements", "Traffic growth", "Strategy refinements"]
  }
];

const rankingFactors = [
  {
    factor: "Google My Business",
    importance: "Critical for local rankings",
    icon: <MapPin className="h-6 w-6" />,
    description: "Optimized GMB profile is the #1 local ranking factor"
  },
  {
    factor: "Local Citations",
    importance: "Essential for local authority",
    icon: <Globe className="h-6 w-6" />,
    description: "Consistent NAP across 50+ local directories"
  },
  {
    factor: "Website Content",
    importance: "Drives organic rankings",
    icon: <FileText className="h-6 w-6" />,
    description: "High-quality, locally relevant content"
  },
  {
    factor: "Customer Reviews",
    importance: "Social proof & rankings",
    icon: <Star className="h-6 w-6" />,
    description: "Positive reviews improve local visibility"
  },
  {
    factor: "Technical SEO",
    importance: "Foundation for all SEO",
    icon: <Zap className="h-6 w-6" />,
    description: "Fast, mobile-friendly, secure website"
  },
  {
    factor: "Link Authority",
    importance: "Domain credibility",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "Quality backlinks from relevant sources"
  }
];

export default function NottinghamSeoServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue via-forest-green to-coral-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              <Search className="h-4 w-4 mr-2" />
              #1 SEO Agency in Nottingham
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              SEO Services
              <span className="block text-3xl lg:text-5xl text-coral-red">
                Nottingham
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Professional SEO services that get your Nottingham business to #1 on Google.
              Local SEO experts delivering guaranteed rankings and measurable traffic growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
                <Link href="#seo-packages">
                  View SEO Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-blue font-semibold px-8 py-3">
                <Link href="tel:08007723291">
                  <Phone className="mr-2 h-5 w-5" />
                  Free SEO Audit
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>Guaranteed rankings</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>White-hat SEO only</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-coral-red" />
                <span>Local Nottingham experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking Factors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              What Makes Websites Rank in Nottingham
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We optimize all the key factors that Google uses to rank local businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rankingFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="text-forest-green mb-4 flex justify-center">
                    {factor.icon}
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {factor.factor}
                  </CardTitle>
                  <p className="text-sm font-semibold text-coral-red">{factor.importance}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Complete SEO Services for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From local SEO to enterprise-level optimization, we have the expertise to grow your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-midnight-blue">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Typical Results:</span>
                          <span className="text-sm font-semibold text-forest-green">{service.results}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Investment:</span>
                          <span className="text-lg font-semibold text-coral-red">{service.investment}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Best For:</span>
                          <span className="text-sm text-gray-600">{service.bestFor}</span>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="w-full mt-4 bg-midnight-blue hover:bg-midnight-blue/90 text-white"
                      >
                        <Link href={`/contact?service=seo&type=${service.title.toLowerCase().replace(' ', '-')}`}>
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Nottingham SEO Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real businesses, real rankings, real revenue growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nottinghamSeoResults.map((result, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-forest-green border-forest-green">
                      {result.area}
                    </Badge>
                    <Badge variant="outline" className="text-coral-red border-coral-red">
                      {result.timeframe}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {result.business}
                  </CardTitle>
                  <CardDescription className="text-midnight-blue font-semibold">
                    {result.industry}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-xs text-gray-700">Before:</h4>
                        <p className="text-sm text-gray-600">{result.beforeRanking}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs text-gray-700">After:</h4>
                        <p className="text-sm font-semibold text-forest-green">{result.afterRanking}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-xs text-gray-700">Traffic:</h4>
                        <p className="text-sm font-semibold text-coral-red">{result.trafficIncrease}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs text-gray-700">Leads:</h4>
                        <p className="text-sm font-semibold text-coral-red">{result.leadIncrease}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-xs text-gray-700 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {result.keyResults.map((achievement, idx) => (
                          <li key={idx} className="text-xs text-forest-green font-medium flex items-start">
                            <CheckCircle className="h-3 w-3 mt-0.5 mr-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our Proven SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that delivers consistent ranking improvements
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {seoProcess.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-coral-red text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg text-midnight-blue">
                    {step.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{step.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 mb-1">Deliverables:</h4>
                    <ul className="space-y-1">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-xs text-gray-600">
                          • {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                {index < seoProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages Section */}
      <section id="seo-packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              SEO Packages for Every Business
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing with guaranteed results for Nottingham businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seoPackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-coral-red scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-coral-red text-white px-4 py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading text-midnight-blue">
                    {pkg.name}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-midnight-blue">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {pkg.ideal}
                    </div>
                  </div>
                  <CardDescription className="mt-4">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Our Guarantees:</h4>
                      <ul className="space-y-1">
                        {pkg.guarantees.map((guarantee, idx) => (
                          <li key={idx} className="text-xs text-coral-red font-medium flex items-start">
                            <Star className="h-3 w-3 mt-0.5 mr-1 flex-shrink-0" />
                            {guarantee}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className={`w-full ${pkg.popular ? 'bg-coral-red hover:bg-coral-red/90' : 'bg-midnight-blue hover:bg-midnight-blue/90'}`}>
                      <Link href={`/contact?service=seo&package=${pkg.name.toLowerCase().replace(' ', '-')}`}>
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
            Ready to Dominate Google in Nottingham?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get your free SEO audit and discover exactly why your competitors
            are ranking higher. No fluff, just actionable insights you can use.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-8 py-3">
              <Link href="/contact?service=seo-audit">
                Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
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
              <Search className="h-4 w-4 mr-2" />
              <span>Guaranteed rankings</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Local SEO experts</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span>Proven results</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />

      {/* Service Structured Data */}
      <Script
        id="nottingham-seo-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Services Nottingham",
            "description": "Professional SEO services in Nottingham. Local SEO, national SEO, technical SEO, content optimization with guaranteed Google rankings for Nottingham businesses.",
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
                "name": "Local SEO Starter",
                "price": "297",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "297",
                  "priceCurrency": "GBP",
                  "unitText": "monthly"
                },
                "description": "Essential local SEO for small Nottingham businesses"
              },
              {
                "@type": "Offer",
                "name": "Professional SEO",
                "price": "597",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "597",
                  "priceCurrency": "GBP",
                  "unitText": "monthly"
                },
                "description": "Comprehensive SEO for growing Nottingham businesses"
              },
              {
                "@type": "Offer",
                "name": "Enterprise SEO",
                "price": "1197",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "1197",
                  "priceCurrency": "GBP",
                  "unitText": "monthly"
                },
                "description": "Complete SEO dominance for market-leading businesses"
              }
            ],
            "serviceType": "Search Engine Optimization",
            "serviceOutput": "Improved Google Rankings and Organic Traffic",
            "hoursAvailable": "Mo-Fr 09:00-17:00"
          })
        }}
      />
    </div>
  );
}
