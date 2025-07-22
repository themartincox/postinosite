import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Clock, Search, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "AI Marketing & Automation Blog | Expert Insights | Postino",
  description: "Expert insights on AI-enhanced marketing, automation, and search optimisation. In-depth guides for SMEs navigating the digital transformation landscape.",
  keywords: "AI marketing blog, automation insights, SEO strategy, AEO guide, digital marketing, SME growth, Nottingham business blog",
  openGraph: {
    title: "AI Marketing & Automation Blog | Expert Insights | Postino",
    description: "Expert insights on AI-enhanced marketing, automation, and search optimisation for growing businesses.",
    url: "https://postino.cc/blog",
    siteName: "Postino",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://postino.cc/images/blog/postino-blog-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Postino AI Marketing and Automation Blog"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@PostinoAgency",
    creator: "@PostinoAgency",
    title: "AI Marketing & Automation Blog | Postino",
    description: "Expert insights on AI-enhanced marketing and automation for growing businesses.",
    images: ["https://postino.cc/images/blog/postino-blog-cover.jpg"]
  },
  alternates: {
    canonical: "https://postino.cc/blog"
  }
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);
  const categories = [...new Set(posts.map(post => post.category))];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white mb-6">
              Marketing Insights & Strategy
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Expert Insights on Growth Marketing &
              <span className="text-coral-red"> Business Strategy</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              In-depth guides, strategies, and insights for SMEs navigating the digital landscape.
              From AI automation to content strategy, we share proven approaches that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-midnight-blue">
                <Filter className="h-4 w-4 mr-2" />
                Filter by Category
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you need with our organized content categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => {
              const categoryPosts = posts.filter(post => post.category === category);
              const colors = ['bg-forest-green', 'bg-coral-red', 'bg-midnight-blue', 'bg-yellow-600', 'bg-purple-600'];
              const color = colors[index % colors.length];

              return (
                <Card key={category} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Search className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-midnight-blue mb-2">
                      {category}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''}
                    </p>
                    <Button variant="ghost" size="sm" className="text-forest-green">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-8">Featured Article</h2>
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Link href={`/blog/${featuredPost.slug}`} className="block">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-coral-red text-white">
                    {featuredPost.category}
                  </Badge>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-midnight-blue mb-4 hover:text-coral-red transition-colors cursor-pointer">
                      {featuredPost.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 flex items-center space-x-4">
                      <span className="font-medium">{featuredPost.author.name}</span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="text-coral-red hover:text-coral-red/80 font-heading font-semibold flex items-center"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Other Posts Grid */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-midnight-blue">
                      {post.category}
                    </Badge>
                  </div>
                </Link>
                <CardContent className="p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-heading font-bold text-midnight-blue mb-3 group-hover:text-coral-red transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-coral-red hover:text-coral-red/80 font-heading font-semibold flex items-center"
                    >
                      Read
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Stay Ahead of the Marketing Curve
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get our latest insights, strategies, and case studies delivered directly to your inbox.
            No spam, just actionable intelligence for growing businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-coral-red hover:bg-coral-red/90 text-white">
              Subscribe
            </Button>
          </div>
          <p className="text-sm opacity-70 mt-4">
            Join 2,500+ marketing professionals already subscribed
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Expert insights on growth marketing and business strategy for ambitious SMEs.
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
    </div>
  );
}
