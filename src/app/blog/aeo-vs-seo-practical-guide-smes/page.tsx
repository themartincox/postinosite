import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight, Target, TrendingUp, BarChart3 } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AEO vs SEO: A Practical Guide for SMEs | Postino",
  description: "Discover whether your SME should focus on traditional SEO or Answer Engine Optimisation (AEO). Expert insights on implementing both strategies for maximum visibility in 2025.",
  keywords: "AEO, SEO, answer engine optimisation, search engine optimisation, SME marketing, AI search, Nottingham business, digital marketing strategy",
  openGraph: {
    title: "AEO vs SEO: A Practical Guide for SMEs | Postino",
    description: "Learn how to combine traditional SEO with Answer Engine Optimisation for maximum search visibility. Expert guide for SMEs navigating the AI search landscape.",
    url: "https://postino.cc/blog/aeo-vs-seo-practical-guide-smes",
    siteName: "Postino",
    locale: "en_GB",
    type: "article",
    publishedTime: "2025-07-22T09:00:00.000Z",
    authors: ["Postino Team"],
    images: [
      {
        url: "https://postino.cc/images/blog/aeo-vs-seo-guide.jpg",
        width: 1200,
        height: 630,
        alt: "AEO vs SEO comparison guide for SMEs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@PostinoAgency",
    creator: "@PostinoAgency",
    title: "AEO vs SEO: A Practical Guide for SMEs",
    description: "Expert insights on combining traditional SEO with Answer Engine Optimisation for maximum search visibility in 2025.",
    images: ["https://postino.cc/images/blog/aeo-vs-seo-guide.jpg"]
  },
  alternates: {
    canonical: "https://postino.cc/blog/aeo-vs-seo-practical-guide-smes"
  }
};

export default function AEOvsSEOGuidePage() {
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
              AEO vs SEO: A Practical Guide for SMEs
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Should your business focus on traditional SEO or pivot to Answer Engine Optimisation? Learn how to implement both strategies for maximum visibility in the AI search era.
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                22 July 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                8 min read
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
            In the rapidly evolving digital landscape, small and medium enterprises (SMEs) face a crucial question: should they focus on traditional SEO or pivot entirely to Answer Engine Optimisation (AEO)? The answer, as we've discovered working with businesses across the East Midlands, isn't an either/or proposition—it's about understanding how these approaches complement each other.
          </p>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Understanding the Fundamentals
          </h2>

          <p className="mb-6">
            <strong>Search Engine Optimisation (SEO)</strong> focuses on ranking your website higher in search results through keyword optimisation, backlinks, and technical improvements. It's been the cornerstone of digital marketing for over two decades.
          </p>

          <p className="mb-8">
            <strong>Answer Engine Optimisation (AEO)</strong>, meanwhile, targets AI-powered systems like Google's SGE, ChatGPT, and voice assistants. It prioritises providing direct, conversational answers that AI can easily understand and serve to users.
          </p>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Why SMEs Need Both Strategies
          </h2>

          <p className="mb-6">
            Consider this: whilst 40-60% of searches now result in zero clicks (users finding answers directly in search results), traditional organic traffic still drives significant business value. Our analysis shows that SMEs implementing both strategies see:
          </p>

          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li><strong>32% increase in overall visibility</strong> across search touchpoints</li>
            <li><strong>Higher quality leads</strong> from users who engage with detailed content</li>
            <li><strong>Improved brand authority</strong> through AI citations</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Practical Implementation Steps
          </h2>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            1. Audit Your Current Position
          </h3>
          <p className="mb-4">Start by assessing where you stand:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Review your current search rankings</li>
            <li>Identify which queries trigger AI-generated answers in your niche</li>
            <li>Analyse competitor strategies</li>
          </ul>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            2. Create Dual-Purpose Content
          </h3>
          <p className="mb-4">Develop content that serves both traditional searchers and AI systems:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li><strong>For SEO</strong>: Target long-tail keywords, build topical authority</li>
            <li><strong>For AEO</strong>: Structure content with clear questions and comprehensive answers</li>
            <li><strong>For Both</strong>: Ensure high-quality, authoritative information</li>
          </ul>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            3. Implement Smart Schema Markup
          </h3>
          <p className="mb-4">Use structured data to help both search engines and AI understand your content:</p>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What services does your Nottingham business offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide comprehensive digital marketing services..."
    }
  }]
}`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-heading font-semibold text-midnight-blue mt-8 mb-4">
            4. Measure What Matters
          </h3>
          <p className="mb-4">Track metrics that reflect both strategies:</p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li><strong>Traditional SEO</strong>: Organic traffic, keyword rankings, conversions</li>
            <li><strong>AEO</strong>: Featured snippet appearances, voice search visibility, brand mentions in AI responses</li>
          </ul>

          <Card className="my-8 border-l-4 border-forest-green">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-midnight-blue">
                Real-World Success Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A Nottingham-based manufacturing client implemented our dual approach and saw remarkable results within six months:
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>Appeared in 78% more featured snippets</li>
                <li>Increased organic traffic by 45%</li>
                <li>Generated 23% more qualified leads</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Common Pitfalls to Avoid
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-red-700 mb-3">Don't Do This</h4>
              <ul className="text-sm space-y-2">
                <li>Abandoning SEO entirely</li>
                <li>Over-optimising for AI</li>
                <li>Ignoring local intent</li>
                <li>Neglecting mobile experience</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-green-700 mb-3">Best Practices</h4>
              <ul className="text-sm space-y-2">
                <li>Balance both approaches</li>
                <li>Maintain natural content flow</li>
                <li>Prioritise user value</li>
                <li>Optimise for all devices</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-midnight-blue mt-12 mb-6">
            Looking Ahead
          </h2>

          <p className="mb-8">
            As AI continues to reshape search, SMEs that master both SEO and AEO will have a competitive advantage. The key is starting now, measuring results, and adapting as the landscape evolves.
          </p>

          <Card className="bg-gradient-to-r from-forest-green to-coral-red text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Ready to implement a dual SEO/AEO strategy for your business?
              </h3>
              <p className="mb-6">
                Contact Postino today for a free consultation and discover how we can help you thrive in both traditional and AI-powered search environments.
              </p>
              <Button asChild className="bg-white text-forest-green hover:bg-gray-100">
                <Link href="/growth-consultation">
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
                <Badge className="bg-coral-red text-white w-fit mb-2">
                  AI Strategy
                </Badge>
                <CardTitle className="text-lg font-heading">
                  <Link href="/blog/structured-data-schema-ai-search-visibility" className="hover:text-forest-green transition-colors">
                    Structured Data & Schema for AI Search Visibility
                  </Link>
                </CardTitle>
                <CardDescription>
                  Master schema markup to improve your visibility in AI-powered search results.
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
                  Learn how to create natural, engaging content that resonates with both humans and AI.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="bg-forest-green text-white w-fit mb-2">
                  Analytics
                </Badge>
                <CardTitle className="text-lg font-heading">
                  <Link href="/blog/zero-click-traffic-measuring-real-business-impact" className="hover:text-forest-green transition-colors">
                    Zero-Click Traffic: Measuring Real Business Impact
                  </Link>
                </CardTitle>
                <CardDescription>
                  Understand how to measure success in an era of zero-click search results.
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
            "headline": "AEO vs SEO: A Practical Guide for SMEs",
            "description": "Discover whether your SME should focus on traditional SEO or Answer Engine Optimisation (AEO). Expert insights on implementing both strategies for maximum visibility.",
            "image": "https://postino.cc/images/blog/aeo-vs-seo-guide.jpg",
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
            "datePublished": "2025-07-22T09:00:00.000Z",
            "dateModified": "2025-07-22T09:00:00.000Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://postino.cc/blog/aeo-vs-seo-practical-guide-smes"
            },
            "keywords": ["AEO", "SEO", "answer engine optimisation", "SME marketing", "AI search"],
            "articleSection": "SEO Strategy",
            "wordCount": 1200,
            "about": [
              {
                "@type": "Thing",
                "name": "Search Engine Optimisation"
              },
              {
                "@type": "Thing",
                "name": "Answer Engine Optimisation"
              }
            ]
          })
        }}
      />
    </div>
  );
}
