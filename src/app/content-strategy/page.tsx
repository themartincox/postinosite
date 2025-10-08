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
  Calendar,
  CheckCircle,
  Lightbulb,
  MessageSquare,
  PenTool,
  Share2,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function ContentStrategyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      {/* Header is global; Navigation removed */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green to-coral-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white mb-6">
              Content Strategy
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Content That Connects,
              <span className="text-white"> Converts, and Scales</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Transform your content from random posts into a strategic growth
              engine. Our AI-enhanced content strategy combines deep audience
              insights with proven frameworks to create content that drives
              meaningful business results for ambitious SMEs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-midnight-blue hover:bg-midnight-blue/90 text-white"
              >
                <Link href="/growth-consultation">
                  Plan Your Content Strategy
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
                    View Content Results
                  </span>
                  <BarChart3 className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-4">
              Content That Drives Business Growth
            </h2>
            <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
              Our strategic content approach consistently delivers measurable
              results across all business metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-forest-green mb-2">
                340%
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Engagement Increase
              </div>
              <p className="font-body text-gray-600 text-sm">
                More meaningful interactions with content
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-coral-red mb-2">
                89%
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Lead Quality Improvement
              </div>
              <p className="font-body text-gray-600 text-sm">
                Higher-value prospects from content
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-midnight-blue mb-2">
                67%
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Faster Sales Cycles
              </div>
              <p className="font-body text-gray-600 text-sm">
                Content nurtures prospects more effectively
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-forest-green mb-2">
                £1.8M
              </div>
              <div className="text-lg font-heading font-semibold text-midnight-blue mb-2">
                Revenue Attribution
              </div>
              <p className="font-body text-gray-600 text-sm">
                Directly generated from content marketing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy Pillars */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Our Content Strategy Framework
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach that aligns content creation with
              business objectives, audience needs, and measurable growth
              outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Strategy & Planning */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-forest-green">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Strategy & Planning
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Foundation for content that delivers results
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Audience Research & Personas
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Deep analysis of your target audience, pain points, and
                        content preferences
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Content Audit & Gap Analysis
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Evaluate existing content and identify opportunities for
                        improvement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Competitive Content Analysis
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Understand what's working in your industry and find
                        differentiation opportunities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Editorial Calendar Development
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Strategic content planning aligned with business
                        objectives and seasonal trends
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="bg-forest-green/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-forest-green mb-2">
                    AI Enhancement:
                  </h5>
                  <p className="text-sm font-body text-gray-600">
                    AI analysis identifies content gaps, optimal posting times,
                    and trending topics your audience cares about most.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Creation & Production */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-coral-red">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-coral-red rounded-lg flex items-center justify-center">
                    <PenTool className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Creation & Production
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      High-quality content that engages and converts
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <PenTool className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Blog & Article Writing
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        SEO-optimised long-form content that demonstrates
                        expertise and drives traffic
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Share2 className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Social Media Content
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Platform-specific content that builds community and
                        drives engagement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Email Marketing Content
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Nurture sequences and newsletters that convert
                        subscribers into customers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-5 w-5 text-coral-red mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Lead Magnets & Resources
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Valuable content offers that capture leads and
                        demonstrate expertise
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="bg-coral-red/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-coral-red mb-2">
                    AI Enhancement:
                  </h5>
                  <p className="text-sm font-body text-gray-600">
                    AI assists with content ideation, headline optimisation, and
                    ensures consistent brand voice across all content.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Distribution & Amplification */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-midnight-blue">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-midnight-blue rounded-lg flex items-center justify-center">
                    <Share2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Distribution & Amplification
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Getting your content in front of the right audience
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Share2 className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Multi-Channel Distribution
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Strategic content sharing across all relevant platforms
                        and channels
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Influencer & Partnership Outreach
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Leverage industry relationships to expand content reach
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Paid Content Promotion
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Strategic paid amplification of high-performing content
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-midnight-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Community Engagement
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Active participation in relevant online communities and
                        discussions
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="bg-midnight-blue/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-midnight-blue mb-2">
                    AI Enhancement:
                  </h5>
                  <p className="text-sm font-body text-gray-600">
                    Predictive analytics identify optimal distribution channels
                    and timing for maximum content performance.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Performance & Optimisation */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-forest-green">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-midnight-blue">
                      Performance & Optimisation
                    </CardTitle>
                    <CardDescription className="text-lg font-body">
                      Continuous improvement based on data insights
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Content Performance Analytics
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Detailed tracking of engagement, conversions, and
                        business impact
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        A/B Testing & Optimisation
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Systematic testing of headlines, formats, and
                        distribution strategies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        ROI Measurement & Reporting
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Clear attribution of content performance to business
                        outcomes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Brain className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-midnight-blue mb-1">
                        Strategic Iteration
                      </h4>
                      <p className="font-body text-gray-600 text-sm">
                        Regular strategy refinement based on performance data
                        and market changes
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="bg-forest-green/5 p-4 rounded-lg">
                  <h5 className="font-heading font-semibold text-forest-green mb-2">
                    AI Enhancement:
                  </h5>
                  <p className="text-sm font-body text-gray-600">
                    Machine learning identifies patterns in high-performing
                    content and suggests optimisations for future content
                    creation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Content Formats That Drive Results
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We create diverse content formats tailored to your audience
              preferences and business objectives, ensuring maximum engagement
              across all touchpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Thought Leadership Articles",
                description:
                  "In-depth content that establishes expertise and builds trust with your target audience.",
                icon: PenTool,
                color: "coral-red",
              },
              {
                title: "Case Studies & Success Stories",
                description:
                  "Compelling narratives that demonstrate your value and build credibility with prospects.",
                icon: Target,
                color: "forest-green",
              },
              {
                title: "Educational Resources",
                description:
                  "Valuable guides, whitepapers, and resources that capture leads and nurture prospects.",
                icon: Lightbulb,
                color: "midnight-blue",
              },
              {
                title: "Social Media Content",
                description:
                  "Platform-specific content that builds community and drives engagement across channels.",
                icon: Share2,
                color: "coral-red",
              },
              {
                title: "Email Sequences",
                description:
                  "Strategic nurture campaigns that guide prospects through the buyer's journey.",
                icon: MessageSquare,
                color: "forest-green",
              },
              {
                title: "Video & Interactive Content",
                description:
                  "Engaging multimedia content that captures attention and improves conversion rates.",
                icon: Users,
                color: "midnight-blue",
              },
            ].map((item, index) => (
              <Card
                key={`content-type-${index}-${item.title.slice(0, 10)}`}
                className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-heading text-midnight-blue">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Content Strategy */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Choose Postino for Content Strategy?
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines strategic thinking with AI-enhanced
              execution to create content that truly drives business growth.
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
                      AI-Enhanced Content Intelligence
                    </h4>
                    <p className="font-body text-gray-600">
                      Our AI tools analyse audience behaviour, competitor
                      content, and market trends to inform every strategic
                      decision and content piece.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-forest-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-2">
                      Business-First Approach
                    </h4>
                    <p className="font-body text-gray-600">
                      Every piece of content is created with clear business
                      objectives in mind, ensuring your content investment
                      drives measurable results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-midnight-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-2">
                      Data-Driven Optimisation
                    </h4>
                    <p className="font-body text-gray-600">
                      Continuous performance monitoring and optimisation ensures
                      your content strategy evolves and improves over time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-coral-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-midnight-blue mb-2">
                      SME-Focused Execution
                    </h4>
                    <p className="font-body text-gray-600">
                      We understand the resource constraints of SMEs and create
                      efficient, scalable content strategies that deliver
                      maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-2xl border border-gray-100">
              <h4 className="text-2xl font-heading font-bold text-midnight-blue mb-6 text-center">
                Content Performance Metrics
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-forest-green/5 to-forest-green/10 rounded-lg">
                  <span className="font-heading font-semibold text-gray-800">
                    Engagement Rate
                  </span>
                  <span className="text-2xl font-heading font-bold text-forest-green">
                    340%
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-coral-red/5 to-coral-red/10 rounded-lg">
                  <span className="font-heading font-semibold text-gray-800">
                    Lead Quality Score
                  </span>
                  <span className="text-2xl font-heading font-bold text-coral-red">
                    89%
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-midnight-blue/5 to-midnight-blue/10 rounded-lg">
                  <span className="font-heading font-semibold text-gray-800">
                    Content ROI
                  </span>
                  <span className="text-2xl font-heading font-bold text-midnight-blue">
                    520%
                  </span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm font-body text-gray-600 mb-4">
                  Average improvements achieved within 6 months
                </p>
                <Button
                  asChild
                  className="bg-forest-green hover:bg-forest-green/90 text-white"
                >
                  <Link href="/growth-consultation">
                    Plan Your Content Strategy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Let's create a content strategy that drives real business results.
            Book a strategic consultation to discuss your content opportunities
            and develop a winning approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/growth-consultation">
                Plan Your Content Strategy
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
                  View Content Success Stories
                </span>
                <BarChart3 className="ml-2 h-5 w-5" />
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
