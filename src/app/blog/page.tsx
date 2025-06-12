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
import {
  ArrowRight,
  Brain,
  Calendar,
  Clock,
  Search,
  Target,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";
import { getPublishedBlogPosts, type BlogPost } from "@/lib/sanity";

// Fallback data for when Sanity isn't configured yet
const fallbackFeaturedPost = {
  id: 1,
  title: "The Future of SME Growth: How AI is Revolutionising Marketing in 2024",
  excerpt: "Discover how small and medium enterprises are leveraging artificial intelligence to compete with industry giants and achieve unprecedented growth rates.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  author: "Sarah Mitchell",
  date: "2024-06-01",
  readTime: "8 min read",
  category: "AI & Marketing",
  slug: "future-of-sme-growth-ai-marketing-2024",
  featured: true,
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  tags: ["AI", "Marketing", "SME", "Growth"],
};

const fallbackBlogPosts = [
  {
    id: 2,
    title: "5 Marketing Automation Workflows Every SME Should Implement",
    excerpt: "From lead nurturing to customer retention, these essential automation workflows will save you time and boost conversions.",
    author: "James Rodriguez",
    date: "2024-05-28",
    readTime: "6 min read",
    category: "Automation",
    slug: "5-marketing-automation-workflows-sme",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    tags: ["Automation", "Workflows", "Marketing"],
  },
  {
    id: 3,
    title: "Content Strategy That Converts: A Data-Driven Approach",
    excerpt: "Learn how to create content that not only engages your audience but drives measurable business results using AI-powered insights.",
    author: "Emma Thompson",
    date: "2024-05-25",
    readTime: "7 min read",
    category: "Content Strategy",
    slug: "content-strategy-converts-data-driven-approach",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    tags: ["Content", "Strategy", "Data", "Conversion"],
  },
  {
    id: 4,
    title: "SEO in the Age of AI: What SMEs Need to Know",
    excerpt: "How artificial intelligence is changing search engine optimisation and what small businesses must do to stay competitive.",
    author: "David Chen",
    date: "2024-05-22",
    readTime: "5 min read",
    category: "SEO",
    slug: "seo-age-ai-smes-need-know",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=300&fit=crop",
    tags: ["SEO", "AI", "Search", "Optimization"],
  },
];

const categories = [
  { name: "All Posts", count: 6, slug: "all" },
  { name: "AI & Marketing", count: 2, slug: "ai-marketing" },
  { name: "Automation", count: 1, slug: "automation" },
  { name: "Content Strategy", count: 1, slug: "content-strategy" },
  { name: "SEO", count: 1, slug: "seo" },
  { name: "Growth Strategy", count: 1, slug: "growth-strategy" },
];

async function getBlogData() {
  try {
    // Try to fetch from Sanity
    const posts = await getPublishedBlogPosts();
    if (posts && posts.length > 0) {
      return {
        featuredPost: posts.find(p => p.featured) || posts[0],
        blogPosts: posts.filter(p => !p.featured).slice(0, 6),
        isFromSanity: true,
      };
    }
  } catch (error) {
    console.log('Sanity not configured yet, using fallback data');
  }

  // Fallback to static data
  return {
    featuredPost: fallbackFeaturedPost,
    blogPosts: fallbackBlogPosts,
    isFromSanity: false,
  };
}

export default async function BlogPage() {
  const { featuredPost, blogPosts, isFromSanity } = await getBlogData();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Admin Notice */}
      {!isFromSanity && (
        <div className="bg-amber-50 border-b border-amber-200 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-sm text-amber-800">
                <strong>Demo Mode:</strong> Blog is showing sample content. Connect Sanity.io to manage real blog posts.
              </p>
              <Link
                href="/admin"
                className="text-sm text-amber-800 underline hover:text-amber-900"
              >
                Setup Admin →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Growth Insights &
              <span className="text-coral-red"> AI Innovation</span>
            </h1>
            <p className="text-xl font-body mb-8 max-w-3xl mx-auto opacity-90">
              Expert insights, proven strategies, and cutting-edge AI applications to help SMEs achieve sustainable, measurable growth.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-midnight-blue placeholder-gray-500 focus:ring-2 focus:ring-coral-red focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-coral-red text-white mb-4">
              Featured Article
            </Badge>
            <h2 className="text-3xl font-heading font-bold text-midnight-blue">
              Latest Insights
            </h2>
          </div>

          <Card className="overflow-hidden shadow-2xl border-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={isFromSanity ? featuredPost.featuredImage : featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-forest-green text-white">
                    {isFromSanity ? featuredPost.category : featuredPost.category}
                  </Badge>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-midnight-blue mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 font-body mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {isFromSanity ? featuredPost.author?.name : featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {isFromSanity
                      ? new Date(featuredPost.publishedAt).toLocaleDateString("en-GB")
                      : new Date(featuredPost.date).toLocaleDateString("en-GB")
                    }
                  </div>
                  {!isFromSanity && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {(isFromSanity ? featuredPost.tags : featuredPost.tags)?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-coral-red hover:bg-coral-red/90 text-white"
                >
                  <Link href={`/blog/${isFromSanity ? featuredPost.slug.current : featuredPost.slug}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-heading font-bold text-midnight-blue mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={
                        category.slug === "all"
                          ? "/blog"
                          : `/blog/category/${category.slug}`
                      }
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="font-body text-gray-700 group-hover:text-midnight-blue">
                        {category.name}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Link>
                  ))}
                </div>

                {/* Popular Tags */}
                <div className="mt-8">
                  <h3 className="text-lg font-heading font-bold text-midnight-blue mb-4">
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI",
                      "Marketing",
                      "Automation",
                      "Growth",
                      "SEO",
                      "Strategy",
                      "Content",
                    ].map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs hover:bg-coral-red hover:text-white hover:border-coral-red transition-colors cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-heading font-bold text-midnight-blue">
                  Latest Articles
                </h2>
                <div className="text-sm text-gray-500">
                  Showing {blogPosts.length} articles
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card
                    key={isFromSanity ? post._id : post.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={isFromSanity ? post.featuredImage : post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`text-white ${
                            (isFromSanity ? post.category : post.category) === "AI & Marketing"
                              ? "bg-coral-red"
                              : (isFromSanity ? post.category : post.category) === "Automation"
                                ? "bg-forest-green"
                                : (isFromSanity ? post.category : post.category) === "Content Strategy"
                                  ? "bg-midnight-blue"
                                  : (isFromSanity ? post.category : post.category) === "SEO"
                                    ? "bg-coral-red"
                                    : "bg-forest-green"
                          }`}
                        >
                          {isFromSanity ? post.category : post.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg font-heading text-midnight-blue group-hover:text-coral-red transition-colors">
                        <Link href={`/blog/${isFromSanity ? post.slug.current : post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center text-xs text-gray-500 mb-4 space-x-3">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {isFromSanity ? post.author?.name : post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {isFromSanity
                            ? new Date(post.publishedAt).toLocaleDateString("en-GB")
                            : new Date(post.date).toLocaleDateString("en-GB")
                          }
                        </div>
                        {!isFromSanity && (
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {(isFromSanity ? post.tags : post.tags)?.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full group"
                      >
                        <Link href={`/blog/${isFromSanity ? post.slug.current : post.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  className="border-midnight-blue text-midnight-blue hover:bg-midnight-blue hover:text-white"
                >
                  Load More Articles
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Get weekly insights on AI, marketing automation, and growth strategies delivered straight to your inbox.
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-midnight-blue placeholder-gray-500 focus:ring-2 focus:ring-coral-red focus:outline-none"
            />
            <Button className="bg-coral-red hover:bg-coral-red/90 text-white px-6">
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-gray-300 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
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
                Where growth meets AI innovation. Helping SMEs achieve measurable success through expert marketing and intelligent automation.
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
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. | Empowering SME growth through intelligent marketing.
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
