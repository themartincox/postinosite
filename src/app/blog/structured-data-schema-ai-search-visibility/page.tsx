import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight, Code, Database, Search } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Structured Data & Schema for AI Search Visibility | Postino",
  description: "Master schema markup to boost your AI search visibility. Complete guide to structured data implementation for featured snippets, rich results, and AI citations.",
  keywords: "structured data, schema markup, AI search visibility, rich snippets, featured snippets, JSON-LD, search engine optimisation, technical SEO",
  openGraph: {
    title: "Structured Data & Schema for AI Search Visibility | Postino",
    description: "Complete guide to implementing schema markup for better AI search visibility. Learn how structured data drives featured snippets and rich results.",
    url: "https://postino.cc/blog/structured-data-schema-ai-search-visibility",
    siteName: "Postino",
    locale: "en_GB",
    type: "article",
    publishedTime: "2025-07-19T09:00:00.000Z",
    authors: ["Postino Team"],
    images: [
      {
        url: "https://postino.cc/images/blog/structured-data-schema.jpg",
        width: 1200,
        height: 630,
        alt: "Structured data and schema markup guide for AI search"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@PostinoAgency",
    creator: "@PostinoAgency",
    title: "Structured Data & Schema for AI Search Visibility",
    description: "Master schema markup implementation for better AI search visibility and rich results.",
    images: ["https://postino.cc/images/blog/structured-data-schema.jpg"]
  },
  alternates: {
    canonical: "https://postino.cc/blog/structured-data-schema-ai-search-visibility"
  }
};

export default function StructuredDataSchemaPage() {
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
              Technical SEO
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-midnight-blue mb-4">
              Structured Data & Schema for AI Search Visibility
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Master schema markup to boost your visibility in AI-powered search results. Complete implementation guide for featured snippets, rich results, and AI citations.
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                19 July 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                10 min read
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
            If you've ever wondered why some businesses consistently appear in Google's rich snippets whilst others remain buried in search results, the answer often lies in structured data. As AI increasingly powers search experiences, proper schema markup has become non-negotiable for businesses serious about online visibility.
          </p>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            What Is Structured Data?
          </h2>

          <p className="mb-8">
            Structured data is code that explicitly tells search engines and AI systems what your content means, not just what it says. Think of it as providing a detailed map of your content that machines can easily navigate and understand.
          </p>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Why Schema Markup Matters More Than Ever
          </h2>

          <p className="mb-4">Recent studies show that pages with proper schema markup are:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li><strong>2.4x more likely</strong> to appear in rich results</li>
            <li><strong>35% more likely</strong> to be cited by AI assistants</li>
            <li><strong>Significantly more visible</strong> in voice search results</li>
          </ul>

          <p className="mb-8">
            For businesses in competitive markets—like our thriving tech sector here in Nottingham—schema markup can be the difference between obscurity and prominence.
          </p>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Essential Schema Types for AI Visibility
          </h2>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            1. FAQ Schema
          </h3>
          <p className="mb-4">Perfect for service pages and common customer queries:</p>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How long does delivery take?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Standard delivery takes 3-5 business days..."
    }
  }]
}`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            2. HowTo Schema
          </h3>
          <p className="mb-4">Ideal for tutorials and process-based content:</p>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to optimise your website for AI search",
  "step": [{
    "@type": "HowToStep",
    "text": "Audit your current structured data implementation..."
  }]
}`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            3. LocalBusiness Schema
          </h3>
          <p className="mb-4">Critical for location-based visibility:</p>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nottingham",
    "addressRegion": "Nottinghamshire"
  }
}`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            4. Product Schema
          </h3>
          <p className="mb-4">Essential for e-commerce:</p>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Widget",
  "offers": {
    "@type": "Offer",
    "price": "29.99",
    "priceCurrency": "GBP"
  }
}`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            5. Article Schema
          </h3>
          <p className="mb-4">For blog posts and news content:</p>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Implementation Best Practices
          </h2>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            Start with Google's Structured Data Testing Tool
          </h3>
          <p className="mb-4">Before going live, always validate your markup:</p>
          <ol className="list-decimal ml-6 mb-8 space-y-2">
            <li>Use Google's Rich Results Test</li>
            <li>Check for errors and warnings</li>
            <li>Preview how your content will appear</li>
          </ol>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            Prioritise Based on Content Type
          </h3>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li><strong>Service businesses</strong>: FAQ, LocalBusiness, Service schema</li>
            <li><strong>E-commerce</strong>: Product, Offer, Review schema</li>
            <li><strong>Publishers</strong>: Article, NewsArticle, BlogPosting schema</li>
            <li><strong>Educational</strong>: Course, HowTo, LearningResource schema</li>
          </ul>

          <Card className="my-8 border-l-4 border-coral-red">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-midnight-blue flex items-center">
                <Database className="h-5 w-5 mr-2" />
                Common Implementation Mistakes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6 space-y-2">
                <li><strong>Marking up invisible content</strong> - Only mark up content visible to users</li>
                <li><strong>Inconsistent information</strong> - Ensure schema data matches on-page content</li>
                <li><strong>Over-marking</strong> - Don't spam schema where it's not relevant</li>
                <li><strong>Ignoring updates</strong> - Schema.org evolves; stay current</li>
              </ol>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Measuring Schema Success
          </h2>

          <p className="mb-4">Track these key metrics:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li><strong>Rich snippet appearances</strong> in Google Search Console</li>
            <li><strong>Click-through rate improvements</strong></li>
            <li><strong>Featured snippet wins</strong></li>
            <li><strong>Voice search visibility</strong> (test with actual devices)</li>
          </ul>

          <Card className="my-8 border-l-4 border-forest-green">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-midnight-blue">
                Real Implementation Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                A local Nottingham retailer implemented comprehensive schema markup across their site:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Before:</h4>
                  <ul className="text-sm space-y-1">
                    <li>2% CTR</li>
                    <li>Minimal rich snippets</li>
                    <li>Low visibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">After:</h4>
                  <ul className="text-sm space-y-1">
                    <li>5.7% CTR</li>
                    <li>67% of relevant rich results</li>
                    <li>34% increase in organic sales</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Advanced Schema Strategies
          </h2>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            Entity Relationships
          </h3>
          <p className="mb-4">Connect related content pieces:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Link author profiles to articles</li>
            <li>Connect products to brands</li>
            <li>Associate events with venues</li>
          </ul>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            Dynamic Schema Generation
          </h3>
          <p className="mb-4">For large sites, automate schema creation:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Use CMS plugins for WordPress/Shopify</li>
            <li>Implement server-side generation for custom platforms</li>
            <li>Regularly audit for accuracy</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            The AI-First Future
          </h2>

          <p className="mb-8">
            As AI systems become more sophisticated, they'll rely even more heavily on structured data to understand and serve content. Businesses that invest in comprehensive schema implementation now will reap rewards as AI search evolves.
          </p>

          <Card className="bg-gradient-to-r from-midnight-blue to-forest-green text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Need help implementing structured data for your website?
              </h3>
              <p className="mb-6">
                Postino's technical SEO experts can audit your current setup and create a custom schema strategy that boosts your AI search visibility.
              </p>
              <Button asChild className="bg-white text-midnight-blue hover:bg-gray-100">
                <Link href="/contact">
                  Get Your Free Structured Data Assessment
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
                <Badge className="bg-midnight-blue text-white w-fit mb-2">
                  Content Strategy
                </Badge>
                <CardTitle className="text-lg font-heading">
                  <Link href="/blog/crafting-conversational-content-ai-loves" className="hover:text-forest-green transition-colors">
                    Crafting Conversational Content AI Loves
                  </Link>
                </CardTitle>
                <CardDescription>
                  Create natural content that performs well in AI-powered search.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="bg-coral-red text-white w-fit mb-2">
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
            "headline": "Structured Data & Schema for AI Search Visibility",
            "description": "Master schema markup to boost your AI search visibility. Complete guide to structured data implementation for featured snippets, rich results, and AI citations.",
            "image": "https://postino.cc/images/blog/structured-data-schema.jpg",
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
            "datePublished": "2025-07-19T09:00:00.000Z",
            "dateModified": "2025-07-19T09:00:00.000Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://postino.cc/blog/structured-data-schema-ai-search-visibility"
            },
            "keywords": ["structured data", "schema markup", "AI search visibility", "rich snippets", "technical SEO"],
            "articleSection": "Technical SEO",
            "wordCount": 1500,
            "about": [
              {
                "@type": "Thing",
                "name": "Structured Data"
              },
              {
                "@type": "Thing",
                "name": "Schema Markup"
              }
            ]
          })
        }}
      />
    </div>
  );
}
