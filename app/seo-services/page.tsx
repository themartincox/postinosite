import Navigation from "@/components/Navigation";
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
  Award,
  BarChart3,
  Brain,
  CheckCircle,
  Eye,
  Globe,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function SEOServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white mb-6">SEO Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              AI-Enhanced SEO That
              <span className="text-coral-red"> Drives Real Results</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Combine proven SEO methodologies with cutting-edge AI insights to
              dominate search results. Our data-driven approach delivers
              measurable improvements in organic traffic, rankings, and
              qualified leads for ambitious SMEs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-coral-red hover:bg-coral-red/90 text-white"
              >
                <Link href="/growth-consultation">
                  Get Your SEO Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
              >
                <Link
                  href="/case-studies"
                  className="text-coral-red hover:text-midnight-blue"
                >
                  <span className="font-heading font-semibold">
                    View SEO Results
                  </span>
                  <BarChart3 className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-4">
              SEO Results That Speak for Themselves
            </h2>
            <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
              Our AI-enhanced SEO approach consistently delivers exceptional
              results for SMEs across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-coral-red mb-2">
                285%
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Organic Traffic Increase
              </div>
              <p className="font-body text-gray-600 text-sm">
                Average increase within 6 months
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-forest-green mb-2">
                1,247
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Keywords Ranking
              </div>
              <p className="font-body text-gray-600 text-sm">
                Average keywords in top 10 positions
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-midnight-blue mb-2">
                156%
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Qualified Leads Growth
              </div>
              <p className="font-body text-gray-600 text-sm">
                More high-intent prospects from search
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-coral-red mb-2">
                £2.3M
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Additional Revenue
              </div>
              <p className="font-body text-gray-600 text-sm">
                Generated for clients in 12 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Approach */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our AI-Enhanced SEO Methodology
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We combine proven SEO fundamentals with advanced AI analysis to
              identify opportunities your competitors miss and deliver results
              faster than traditional approaches.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical SEO */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-midnight-blue">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-midnight-blue rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Technical SEO Excellence
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Foundation that search engines love
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Site speed optimisation (Core Web Vitals)",
                    "Mobile-first indexing compliance",
                    "Schema markup implementation",
                    "URL structure and site architecture",
                    "Technical audit and error resolution",
                    "International SEO setup",
                  ].map((item, index) => (
                    <div
                      key={`technical-${index}-${item.slice(0, 10)}`}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                      <p className="font-body text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="bg-midnight-blue/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-midnight-blue mb-2">
                    AI Enhancement:
                  </h5>
                  <p className="text-sm font-body text-gray-600">
                    Automated technical audits identify issues faster and
                    suggest optimisations based on your industry's best
                    performers.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Content & Keywords */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-forest-green">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Strategic Content Optimisation
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Content that ranks and converts
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "AI-driven keyword research and analysis",
                    "Search intent mapping and content strategy",
                    "Content gap analysis vs. competitors",
                    "On-page optimisation for target keywords",
                    "Internal linking strategy development",
                    "Featured snippet optimisation",
                  ].map((item, index) => (
                    <div
                      key={`content-${index}-${item.slice(0, 10)}`}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                      <p className="font-body text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="bg-forest-green/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-forest-green mb-2">
                    AI Enhancement:
                  </h5>
                  <p className="text-sm font-body text-gray-600">
                    Machine learning identifies high-opportunity keywords and
                    content gaps that traditional tools miss.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Authority Building */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-coral-red">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-coral-red rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Authority & Link Building
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Building domain authority that lasts
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Strategic link building campaigns",
                    "Digital PR and thought leadership",
                    "Industry relationship development",
                    "Local SEO and citation building",
                    "Brand mention monitoring and conversion",
                    "Competitor backlink analysis",
                  ].map((item, index) => (
                    <div
                      key={`authority-${index}-${item.slice(0, 10)}`}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                      <p className="font-body text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="bg-coral-red/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-coral-red mb-2">
                    AI Enhancement:
                  </h5>
                  <p className="text-sm font-body text-gray-600">
                    Predictive analysis identifies the most valuable link
                    opportunities and optimal outreach strategies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our Proven SEO Process
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              A systematic approach that combines human expertise with AI
              insights to deliver sustainable organic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "AI-Powered Audit",
                description:
                  "Comprehensive analysis of your current SEO performance, technical issues, and opportunities using advanced AI tools.",
                icon: Search,
              },
              {
                step: "02",
                title: "Strategic Planning",
                description:
                  "Develop a data-driven SEO strategy based on your business goals, competitive landscape, and market opportunities.",
                icon: Target,
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Execute technical optimisations, content improvements, and link building campaigns with precision and expertise.",
                icon: Zap,
              },
              {
                step: "04",
                title: "Monitor & Optimise",
                description:
                  "Continuous monitoring, analysis, and refinement to ensure sustained growth and adaptation to algorithm changes.",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div
                key={`process-${index}-${item.step}`}
                className="text-center"
              >
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-midnight-blue mb-2">
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

      {/* Why Choose Our SEO */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Choose Postino for SEO?
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We're not just another SEO agency. Our unique approach combines
              traditional expertise with cutting-edge AI to deliver results that
              others simply can't match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-coral-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-2">
                      AI-Enhanced Analysis
                    </h4>
                    <p className="font-body text-gray-600">
                      Our AI tools identify opportunities and patterns that
                      traditional SEO audits miss, giving you a significant
                      competitive advantage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-2">
                      SME-Focused Approach
                    </h4>
                    <p className="font-body text-gray-600">
                      We understand the unique challenges SMEs face and tailor
                      our strategies to maximise ROI within realistic budgets
                      and timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-midnight-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-2">
                      Measurable Results
                    </h4>
                    <p className="font-body text-gray-600">
                      Every strategy is designed with clear KPIs and regular
                      reporting, so you always know exactly how your investment
                      is performing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-coral-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-2">
                      Future-Proof Strategies
                    </h4>
                    <p className="font-body text-gray-600">
                      Our approach adapts to algorithm changes and emerging
                      search trends, ensuring your rankings remain stable
                      long-term.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-2xl border border-gray-100">
              <h4 className="text-2xl font-heading font-bold text-midnight-blue mb-6 text-center">
                SEO Success Metrics
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-coral-red/5 to-coral-red/10 rounded-lg">
                  <span className="font-heading font-semibold text-gray-800">
                    Organic Traffic Growth
                  </span>
                  <span className="text-2xl font-heading font-bold text-coral-red">
                    285%
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-forest-green/5 to-forest-green/10 rounded-lg">
                  <span className="font-heading font-semibold text-gray-800">
                    Keyword Rankings (Top 10)
                  </span>
                  <span className="text-2xl font-heading font-bold text-forest-green">
                    1,247
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-midnight-blue/5 to-midnight-blue/10 rounded-lg">
                  <span className="font-heading font-semibold text-gray-800">
                    ROI Improvement
                  </span>
                  <span className="text-2xl font-heading font-bold text-midnight-blue">
                    420%
                  </span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm font-body text-gray-600 mb-4">
                  Average results achieved within 6-12 months
                </p>
                <Button
                  asChild
                  className="bg-coral-red hover:bg-coral-red/90 text-white"
                >
                  <Link href="/growth-consultation">
                    Get Your SEO Strategy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Let's discuss how our AI-enhanced SEO approach can drive measurable
            organic growth for your business. Book a strategic consultation to
            explore your opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/growth-consultation">
                Book Your SEO Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link
                href="/case-studies"
                className="text-coral-red hover:text-midnight-blue"
              >
                <span className="font-heading font-semibold">
                  View SEO Case Studies
                </span>
                <Eye className="ml-2 h-5 w-5" />
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
