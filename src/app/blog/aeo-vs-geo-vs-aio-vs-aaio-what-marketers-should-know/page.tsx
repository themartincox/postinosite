import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight, Lightbulb, Users, Target } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AEO vs GEO vs AIO vs AAIO: What Marketers Should Know | Postino",
  description: "Navigate the alphabet soup of search optimisation. Understand AEO, GEO, AIO, and AAIO strategies and decide where to invest your marketing resources for maximum impact.",
  keywords: "AEO, GEO, AIO, AAIO, search optimisation strategies, AI marketing, answer engine optimisation, generative engine optimisation, artificial intelligence optimisation",
  openGraph: {
    title: "AEO vs GEO vs AIO vs AAIO: What Marketers Should Know | Postino",
    description: "Decode search optimisation acronyms and learn which strategies deserve your marketing budget in 2025.",
    url: "https://postino.cc/blog/aeo-vs-geo-vs-aio-vs-aaio-what-marketers-should-know",
    siteName: "Postino",
    locale: "en_GB",
    type: "article",
    publishedTime: "2025-07-10T09:00:00.000Z",
    authors: ["Postino Team"],
    images: [
      {
        url: "https://postino.cc/images/blog/search-optimisation-strategies.jpg",
        width: 1200,
        height: 630,
        alt: "AEO vs GEO vs AIO vs AAIO search optimisation comparison"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@PostinoAgency",
    creator: "@PostinoAgency",
    title: "AEO vs GEO vs AIO vs AAIO: What Marketers Should Know",
    description: "Navigate the complex world of modern search optimisation strategies with this comprehensive guide.",
    images: ["https://postino.cc/images/blog/search-optimisation-strategies.jpg"]
  },
  alternates: {
    canonical: "https://postino.cc/blog/aeo-vs-geo-vs-aio-vs-aaio-what-marketers-should-know"
  }
};

export default function SearchOptimisationStrategiesPage() {
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
            <Badge className="bg-coral-red text-white mb-4">
              Strategy Guide
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-midnight-blue mb-4">
              AEO vs GEO vs AIO vs AAIO: What Marketers Should Know
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Navigate the alphabet soup of search optimisation acronyms and discover where to invest your marketing resources for maximum impact in 2025.
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                10 July 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                7 min read
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
            If you're feeling overwhelmed by the alphabet soup of search optimisation acronyms, you're not alone. Just when marketers mastered SEO, along came AEO, GEO, AIO, and now AAIO. Let's decode these terms and, more importantly, help you decide where to invest your resources for maximum impact.
          </p>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            The Evolution of Search Optimisation
          </h2>

          <p className="mb-8">
            Remember when SEO was simply about keywords and backlinks? Those days feel as distant as Nottingham Forest's European Cup victories. Today's search landscape requires understanding multiple optimisation approaches, each targeting different aspects of how people—and machines—find information.
          </p>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Breaking Down the Acronyms
          </h2>

          <div className="grid gap-6 mb-8">
            <Card className="border-l-4 border-forest-green">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  SEO: Search Engine Optimisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3"><strong>What it is:</strong> The foundation—optimising for traditional search engines</p>
                <p className="mb-3"><strong>Focus:</strong> Rankings, organic traffic, keyword targeting</p>
                <p><strong>Still relevant?</strong> Absolutely. 70% of clicks still go to organic results</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-coral-red">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  AEO: Answer Engine Optimisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3"><strong>What it is:</strong> Optimising for direct answers in search results and AI systems</p>
                <p className="mb-3"><strong>Focus:</strong> Featured snippets, voice responses, AI citations</p>
                <p><strong>Key tactics:</strong> Structured data, conversational content, clear answers</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-midnight-blue">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  GEO: Generative Engine Optimisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3"><strong>What it is:</strong> Optimising for inclusion in AI-generated summaries</p>
                <p className="mb-3"><strong>Focus:</strong> Being referenced in ChatGPT, Bard, and similar outputs</p>
                <p><strong>Key tactics:</strong> Authoritative content, unique insights, citable statistics</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  AIO: Artificial Intelligence Optimisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3"><strong>What it is:</strong> Broad optimisation for all AI-powered systems</p>
                <p className="mb-3"><strong>Focus:</strong> Comprehensive AI visibility across platforms</p>
                <p><strong>Key tactics:</strong> Entity building, semantic relationships, knowledge graphs</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  AAIO: Agent-Aware Intelligence Optimisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3"><strong>What it is:</strong> Preparing for autonomous AI agents</p>
                <p className="mb-3"><strong>Focus:</strong> Machine-readable content for AI assistants and agents</p>
                <p><strong>Key tactics:</strong> API accessibility, structured outputs, task-oriented content</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Where Should You Invest? A Decision Framework
          </h2>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            1. Assess Your Business Model
          </h3>

          <div className="grid gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Local Services (restaurants, shops, services)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Primary focus:</strong> AEO (70% effort)</p>
                  <p><strong>Secondary:</strong> SEO (30% effort)</p>
                  <p><strong>Why:</strong> Voice searches and local queries need direct answers</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  E-commerce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Primary focus:</strong> SEO (50% effort)</p>
                  <p><strong>Secondary:</strong> AEO (40% effort)</p>
                  <p><strong>Emerging:</strong> GEO (10% effort)</p>
                  <p><strong>Why:</strong> Product searches still drive clicks, but comparison queries need answers</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  B2B Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Primary focus:</strong> SEO (40% effort)</p>
                  <p><strong>Secondary:</strong> GEO (35% effort)</p>
                  <p><strong>Growing:</strong> AIO (25% effort)</p>
                  <p><strong>Why:</strong> Decision-makers research extensively and use AI tools</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  SaaS/Tech Companies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Primary focus:</strong> GEO (35% effort)</p>
                  <p><strong>Secondary:</strong> SEO (30% effort)</p>
                  <p><strong>Emerging:</strong> AAIO (35% effort)</p>
                  <p><strong>Why:</strong> Tech-savvy audiences use AI tools; prepare for agent interactions</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            2. Evaluate Your Resources
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-red-50">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-red-700">
                  Limited Budget?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal ml-4 space-y-2 text-sm">
                  <li><strong>SEO + Basic AEO:</strong> Cover fundamentals first</li>
                  <li>Focus on schema markup and conversational content</li>
                  <li>Measure and expand based on results</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-yellow-700">
                  Moderate Resources?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal ml-4 space-y-2 text-sm">
                  <li><strong>GEO tactics:</strong> Create citable, authoritative content</li>
                  <li>Build entity relationships</li>
                  <li>Develop thought leadership pieces</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-green-700">
                  Substantial Investment?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal ml-4 space-y-2 text-sm">
                  <li><strong>Full AIO strategy:</strong> Comprehensive AI presence</li>
                  <li><strong>AAIO preparation:</strong> API development, agent-ready content</li>
                  <li>Advanced measurement and attribution</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Practical Implementation Strategies
          </h2>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            The Unified Approach
          </h3>
          <p className="mb-4">Smart marketers don't treat these as separate strategies. Here's how to integrate:</p>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h4 className="font-semibold mb-3">Content Creation</h4>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Write naturally (helps all approaches)</li>
              <li>Include statistics and unique insights (GEO)</li>
              <li>Structure with clear questions/answers (AEO)</li>
              <li>Use semantic markup (AIO/AAIO)</li>
            </ul>
          </div>

          <Card className="my-8 border-l-4 border-forest-green">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-midnight-blue">
                Real-World Success Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                A Nottingham-based B2B software company implemented our integrated approach:
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-forest-green">Month 1-3:</strong> SEO foundation + AEO basics
                  <p className="ml-4">Result: 35% traffic increase</p>
                </div>
                <div>
                  <strong className="text-coral-red">Month 4-6:</strong> Added GEO tactics
                  <p className="ml-4">Result: Featured in 12 AI-generated responses</p>
                </div>
                <div>
                  <strong className="text-midnight-blue">Month 7-9:</strong> Implemented AIO strategies
                  <p className="ml-4">Result: 67% increase in qualified leads</p>
                </div>
                <div>
                  <strong className="text-purple-600">Month 10-12:</strong> AAIO preparation
                  <p className="ml-4">Result: First-mover advantage in their sector</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Future-Proofing Your Strategy
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Near-Term (6-12 months)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Master AEO fundamentals</li>
                  <li>Build GEO authority</li>
                  <li>Test AIO tactics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Medium-Term (1-2 years)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Expand GEO presence</li>
                  <li>Develop AIO expertise</li>
                  <li>Begin AAIO planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Long-Term (2+ years)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Lead in AAIO implementation</li>
                  <li>Integrate all approaches</li>
                  <li>Adapt to new paradigms</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Making the Right Choice
          </h2>

          <p className="mb-4">The best strategy isn't choosing one approach—it's understanding how they work together. Start with your business goals, not the technology:</p>

          <ol className="list-decimal ml-6 mb-8 space-y-2">
            <li><strong>What do your customers need?</strong></li>
            <li><strong>How do they search?</strong></li>
            <li><strong>What resources can you commit?</strong></li>
            <li><strong>What's your competitive landscape?</strong></li>
          </ol>

          <Card className="bg-gradient-to-r from-midnight-blue to-coral-red text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Confused by the acronym jungle?
              </h3>
              <p className="mb-6">
                Postino cuts through the complexity to create integrated search strategies that deliver real results. Whether you need SEO basics or advanced AAIO preparation, we'll build a roadmap tailored to your business goals.
              </p>
              <Button asChild className="bg-white text-midnight-blue hover:bg-gray-100">
                <Link href="/contact">
                  Get Your Free Strategy Session
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

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="bg-midnight-blue text-white w-fit mb-2">
                  Analytics
                </Badge>
                <CardTitle className="text-lg font-heading">
                  <Link href="/blog/zero-click-traffic-measuring-real-business-impact" className="hover:text-forest-green transition-colors">
                    Zero-Click Traffic: Measuring Real Business Impact
                  </Link>
                </CardTitle>
                <CardDescription>
                  Understand the value of zero-click search visibility.
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
            "headline": "AEO vs GEO vs AIO vs AAIO: What Marketers Should Know",
            "description": "Navigate the alphabet soup of search optimisation. Understand AEO, GEO, AIO, and AAIO strategies and decide where to invest your marketing resources for maximum impact.",
            "image": "https://postino.cc/images/blog/search-optimisation-strategies.jpg",
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
            "datePublished": "2025-07-10T09:00:00.000Z",
            "dateModified": "2025-07-10T09:00:00.000Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://postino.cc/blog/aeo-vs-geo-vs-aio-vs-aaio-what-marketers-should-know"
            },
            "keywords": ["AEO", "GEO", "AIO", "AAIO", "search optimisation strategies", "AI marketing"],
            "articleSection": "Strategy Guide",
            "wordCount": 1100,
            "about": [
              {
                "@type": "Thing",
                "name": "Search Optimisation"
              },
              {
                "@type": "Thing",
                "name": "Marketing Strategy"
              }
            ]
          })
        }}
      />
    </div>
  );
}
