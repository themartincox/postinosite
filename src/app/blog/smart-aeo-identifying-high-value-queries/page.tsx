import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight, Target, Search, BarChart3 } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Smart AEO: Identifying High-Value Queries | Postino",
  description: "Learn how to identify high-value queries for Answer Engine Optimisation that drive business results. Strategic framework for smart AEO implementation and query research.",
  keywords: "AEO, query research, content strategy, business intelligence, answer engine optimisation, high-value queries, search optimization",
  openGraph: {
    title: "Smart AEO: Identifying High-Value Queries | Postino",
    description: "Strategic framework for identifying queries worth optimising for in the AEO era. Learn how to focus your content efforts on questions that drive business results.",
    url: "https://postino.cc/blog/smart-aeo-identifying-high-value-queries",
    siteName: "Postino",
    locale: "en_GB",
    type: "article",
    publishedTime: "2025-07-07T09:00:00.000Z",
    authors: ["Postino Team"],
    images: [
      {
        url: "https://postino.cc/images/blog/smart-aeo-queries.jpg",
        width: 1200,
        height: 630,
        alt: "Smart AEO query identification framework for business results"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@PostinoAgency",
    creator: "@PostinoAgency",
    title: "Smart AEO: Identifying High-Value Queries",
    description: "Strategic framework for identifying high-value queries that drive business results in Answer Engine Optimisation.",
    images: ["https://postino.cc/images/blog/smart-aeo-queries.jpg"]
  },
  alternates: {
    canonical: "https://postino.cc/blog/smart-aeo-identifying-high-value-queries"
  }
};

export default function SmartAEOQueriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Blog Header */}
      <header className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/blog" className="hover:text-forest-green transition-colors flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>
          </div>

          <div className="mb-6">
            <Badge className="bg-forest-green text-white mb-4">
              SEO Strategy
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-midnight-blue mb-4">
              Smart AEO: Identifying High-Value Queries
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Not all queries are worth optimising for in the AEO era. Learn how to identify high-value questions that drive business results and create content that AI systems love to reference.
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                7 July 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                9 min read
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            In the rush to optimise for Answer Engine Optimisation (AEO), many businesses make a critical mistake: they try to answer every possible question in their industry instead of focusing on the queries that actually drive business results. This spray-and-pray approach wastes resources and dilutes your content's impact.
          </p>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            The High-Value Query Framework
          </h2>

          <p className="mb-6">
            Smart AEO is about strategic query selection—identifying the questions that matter most to your business and your customers' journey. Not all questions deserve your content investment.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-l-4 border-forest-green">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Commercial Intent Signals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Buying signals and comparison terms</li>
                  <li>• Implementation guidance queries</li>
                  <li>• Solution-seeking language</li>
                  <li>• Decision-phase questions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-coral-red">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Business Alignment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Direct service connections</li>
                  <li>• Expertise area coverage</li>
                  <li>• Customer need alignment</li>
                  <li>• Authority building opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Query Research Methodology
          </h2>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            Start with Customer Conversations
          </h3>
          <p className="mb-4">The best queries come from real customer interactions:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Questions asked during sales calls</li>
            <li>Support ticket themes</li>
            <li>Consultation inquiry patterns</li>
            <li>Customer onboarding questions</li>
          </ul>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            Analyse Competitor Content Gaps
          </h3>
          <p className="mb-4">Find opportunities your competitors haven't addressed:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Use AnswerThePublic for question discovery</li>
            <li>Analyse "People Also Ask" sections</li>
            <li>Review competitor content for gaps</li>
            <li>Identify underserved query variations</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Commercial Intent Indicators
          </h2>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h4 className="font-semibold mb-3">High-Value Query Types</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2">Problem-Solving</h5>
                <p className="text-sm">• "How to fix [specific issue]"</p>
                <p className="text-sm">• "Best way to [achieve outcome]"</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-700 mb-2">Comparison</h5>
                <p className="text-sm">• "X vs Y comparison"</p>
                <p className="text-sm">• "Best [solution] for [situation]"</p>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 mb-2">Implementation</h5>
                <p className="text-sm">• "Steps to [achieve goal]"</p>
                <p className="text-sm">• "How to implement [solution]"</p>
              </div>
              <div>
                <h5 className="font-medium text-orange-700 mb-2">Pricing</h5>
                <p className="text-sm">• "Cost of [service/solution]"</p>
                <p className="text-sm">• "Pricing for [specific need]"</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Content Prioritisation Matrix
          </h2>

          <p className="mb-4">Rate potential queries across four key dimensions:</p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Dimension</th>
                  <th className="border border-gray-300 p-3 text-center">Weight</th>
                  <th className="border border-gray-300 p-3 text-left">Evaluation Criteria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Business Impact</td>
                  <td className="border border-gray-300 p-3 text-center">1-5</td>
                  <td className="border border-gray-300 p-3">How directly does this query relate to your services?</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Competition Level</td>
                  <td className="border border-gray-300 p-3 text-center">1-5</td>
                  <td className="border border-gray-300 p-3">How difficult will it be to rank or get featured?</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Search Volume</td>
                  <td className="border border-gray-300 p-3 text-center">1-5</td>
                  <td className="border border-gray-300 p-3">Is there sufficient search interest?</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Content Fit</td>
                  <td className="border border-gray-300 p-3 text-center">1-5</td>
                  <td className="border border-gray-300 p-3">Can you create authoritative content for this query?</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card className="my-8 border-l-4 border-forest-green">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-midnight-blue">
                Prioritisation Rule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Focus on queries scoring <strong>12+ points total</strong>, with no dimension scoring below 2.
              </p>
              <p className="text-sm text-gray-600">
                This ensures balanced attention to impact, feasibility, volume, and content quality.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Advanced Query Intelligence
          </h2>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            Seasonal Patterns
          </h3>
          <p className="mb-4">Consider timing when evaluating query value:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Tax questions peak before deadlines</li>
            <li>Business planning queries surge in Q4</li>
            <li>Budget-related searches increase year-end</li>
            <li>Implementation queries rise in Q1</li>
          </ul>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            Geographic Variations
          </h3>
          <p className="mb-4">Local relevance affects query priority:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Questions popular in your service area</li>
            <li>Local regulatory or compliance queries</li>
            <li>Regional industry terminology</li>
            <li>Local competitor landscape considerations</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Measurement and Refinement
          </h2>

          <p className="mb-4">Track performance beyond traditional metrics:</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-green-700 mb-3">Business Metrics</h4>
              <ul className="text-sm space-y-2">
                <li>• Inquiries generated from content</li>
                <li>• Sales conversation quality</li>
                <li>• Customer acquisition cost by topic</li>
                <li>• Time to conversion</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-blue-700 mb-3">Authority Metrics</h4>
              <ul className="text-sm space-y-2">
                <li>• AI citation frequency</li>
                <li>• Industry recognition</li>
                <li>• Peer references</li>
                <li>• Speaking opportunities</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Implementation Roadmap
          </h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="bg-forest-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-midnight-blue">Week 1-2: Content Audit</h4>
                <p className="text-gray-600">Review existing content for query focus and business alignment</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-coral-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-midnight-blue">Week 3-4: Research Phase</h4>
                <p className="text-gray-600">Conduct customer interviews and competitor analysis</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-midnight-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-midnight-blue">Month 2: Strategy Development</h4>
                <p className="text-gray-600">Create prioritised content calendar based on query value matrix</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-semibold text-midnight-blue">Month 3+: Content Creation</h4>
                <p className="text-gray-600">Develop comprehensive content around highest-priority queries</p>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-forest-green to-midnight-blue text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Ready to identify your high-value queries?
              </h3>
              <p className="mb-6">
                Let's develop your strategic AEO approach that focuses on questions that matter and drives genuine business results.
              </p>
              <Button asChild className="bg-white text-forest-green hover:bg-gray-100">
                <Link href="/contact">
                  Get Your Query Strategy Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Related Articles */}
        <section>
          <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-6">
            Related Articles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="bg-forest-green text-white w-fit mb-2">
                  SEO Strategy
                </Badge>
                <CardTitle className="text-lg font-heading">
                  <Link href="/blog/aeo-vs-seo-practical-guide-smes" className="hover:text-forest-green transition-colors">
                    AEO vs SEO: A Practical Guide for SMEs
                  </Link>
                </CardTitle>
                <CardDescription>
                  Learn how to balance traditional SEO with Answer Engine Optimisation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="bg-coral-red text-white w-fit mb-2">
                  Authority Building
                </Badge>
                <CardTitle className="text-lg font-heading">
                  <Link href="/blog/becoming-cited-source-ai-answers" className="hover:text-forest-green transition-colors">
                    Becoming a Cited Source in AI Answers
                  </Link>
                </CardTitle>
                <CardDescription>
                  Discover how to get your content referenced by AI systems.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="bg-midnight-blue text-white w-fit mb-2">
                  Technical SEO
                </Badge>
                <CardTitle className="text-lg font-heading">
                  <Link href="/blog/structured-data-schema-ai-search-visibility" className="hover:text-forest-green transition-colors">
                    Structured Data & Schema for AI Search Visibility
                  </Link>
                </CardTitle>
                <CardDescription>
                  Master schema markup for better AI search performance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Expert insights on AI-enhanced marketing and automation for growing businesses.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link href="/growth-marketing" className="hover:text-white transition-colors">
                    Growth Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/ai-automation" className="hover:text-white transition-colors">
                    AI & Automation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />

      {/* Structured Data */}
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Smart AEO: Identifying High-Value Queries",
            "description": "Learn how to identify high-value queries for Answer Engine Optimisation that drive business results. Strategic framework for smart AEO implementation and query research.",
            "image": "https://postino.cc/images/blog/smart-aeo-queries.jpg",
            "author": {
              "@type": "Organization",
              "name": "Postino",
              "url": "https://postino.cc"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Postino",
              "logo": {
                "@type": "ImageObject",
                "url": "https://postino.cc/images/logo.png"
              }
            },
            "datePublished": "2025-07-07T09:00:00.000Z",
            "dateModified": "2025-07-07T09:00:00.000Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://postino.cc/blog/smart-aeo-identifying-high-value-queries"
            },
            "keywords": ["AEO", "query research", "content strategy", "business intelligence"],
            "articleSection": "SEO Strategy",
            "wordCount": 1100,
            "about": [
              {
                "@type": "Thing",
                "name": "Answer Engine Optimisation"
              },
              {
                "@type": "Thing",
                "name": "Query Research"
              }
            ]
          })
        }}
      />
    </div>
  );
}
