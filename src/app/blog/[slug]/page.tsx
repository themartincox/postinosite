import ContactForm from "@/components/ContactForm";
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
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Share2,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  // Sample blog post data - in a real app, this would fetch from your CMS
  return {
    id: 1,
    title:
      "The Future of SME Growth: How AI is Revolutionising Marketing in 2024",
    content: `
      <p>The landscape of small and medium enterprise (SME) marketing is undergoing a fundamental transformation. Artificial intelligence, once the exclusive domain of tech giants and enterprise corporations, is now accessible and affordable for businesses of all sizes.</p>

      <h2>The AI Marketing Revolution</h2>
      <p>In 2024, we're witnessing an unprecedented democratisation of AI tools. SMEs can now leverage sophisticated algorithms for customer segmentation, predictive analytics, and automated content creation at a fraction of the cost it would have required just two years ago.</p>

      <blockquote>
        <p>"The businesses that embrace AI marketing now will have an insurmountable competitive advantage within the next 18 months." - Martin, Growth Strategy Expert</p>
      </blockquote>

      <h2>Key Areas Where AI is Making an Impact</h2>

      <h3>1. Predictive Customer Analytics</h3>
      <p>AI algorithms can now analyse customer behaviour patterns to predict future purchasing decisions with 85%+ accuracy. This enables SMEs to:</p>
      <ul>
        <li>Optimise inventory management</li>
        <li>Personalise marketing messages</li>
        <li>Identify high-value prospects</li>
        <li>Reduce customer acquisition costs</li>
      </ul>

      <h3>2. Automated Content Creation</h3>
      <p>Modern AI tools can generate blog posts, social media content, and email campaigns that are indistinguishable from human-written content. However, the key is in the strategy and prompt engineering.</p>

      <h3>3. Dynamic Pricing Optimisation</h3>
      <p>AI-powered pricing algorithms can adjust prices in real-time based on demand, competition, and customer behaviour, maximising both conversion rates and profit margins.</p>

      <h2>Implementation Strategies for SMEs</h2>
      <p>The key to successful AI implementation isn't about adopting every new tool that hits the market. Instead, successful SMEs focus on:</p>

      <ol>
        <li><strong>Identifying the right use cases:</strong> Start with processes that are repetitive and data-driven</li>
        <li><strong>Ensuring data quality:</strong> AI is only as good as the data it's trained on</li>
        <li><strong>Maintaining human oversight:</strong> AI augments human creativity, it doesn't replace it</li>
        <li><strong>Measuring ROI consistently:</strong> Track the impact of every AI implementation</li>
      </ol>

      <h2>Common Pitfalls to Avoid</h2>
      <p>While AI offers tremendous opportunities, there are several pitfalls that SMEs should be aware of:</p>

      <ul>
        <li><strong>Over-automation:</strong> Not every process should be automated</li>
        <li><strong>Lack of strategy:</strong> Technology should serve business objectives, not drive them</li>
        <li><strong>Ignoring compliance:</strong> Ensure AI implementations comply with data protection regulations</li>
        <li><strong>Underestimating training needs:</strong> Teams need proper training to leverage AI effectively</li>
      </ul>

      <h2>The Road Ahead</h2>
      <p>As we progress through 2024, we expect to see even more sophisticated AI tools becoming available to SMEs. The businesses that start building their AI capabilities now will be best positioned to capitalise on these advancements.</p>

      <p>The future belongs to businesses that can seamlessly blend human creativity with artificial intelligence. Those that can achieve this balance will not just survive—they'll thrive in the new economy.</p>
    `,
    excerpt:
      "Discover how small and medium enterprises are leveraging artificial intelligence to compete with industry giants and achieve unprecedented growth rates.",
    author: {
      name: "Martin",
      bio: "Sarah is a growth strategy expert with over 10 years of experience helping SMEs scale through innovative marketing approaches.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1c4?w=150&h=150&fit=crop&crop=face",
    },
    date: "2024-06-01",
    readTime: "8 min read",
    category: "AI & Marketing",
    slug: "future-of-sme-growth-ai-marketing-2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    tags: ["AI", "Marketing", "SME", "Growth", "Strategy", "Automation"],
  };
};

const getRelatedPosts = () => {
  return [
    {
      id: 2,
      title: "5 Marketing Automation Workflows Every SME Should Implement",
      excerpt:
        "From lead nurturing to customer retention, these essential automation workflows will save you time and boost conversions.",
      slug: "5-marketing-automation-workflows-sme",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      category: "Automation",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Content Strategy That Converts: A Data-Driven Approach",
      excerpt:
        "Learn how to create content that not only engages your audience but drives measurable business results.",
      slug: "content-strategy-converts-data-driven-approach",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
      category: "Content Strategy",
      readTime: "7 min read",
    },
  ];
};

export default async function BlogPostPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const relatedPosts = getRelatedPosts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-soft-gray py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-midnight-blue transition-colors"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/blog"
              className="hover:text-midnight-blue transition-colors"
            >
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-midnight-blue">{post.category}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="bg-coral-red text-white mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl font-body text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <div className="flex justify-center space-x-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Social Share */}
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm" className="text-xs">
                <Share2 className="h-3 w-3 mr-1" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div
              className="font-body text-gray-700 leading-relaxed space-y-6"
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              {/* In a real app, you would parse and render markdown safely */}
              {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Demo content only */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-heading font-semibold text-gray-600">
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-heading font-bold text-midnight-blue mb-2">
                    {post.author.name}
                  </h3>
                  <p className="text-gray-600 font-body mb-4">
                    {post.author.bio}
                  </p>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-midnight-blue mb-8 text-center">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Card
                key={relatedPost.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-forest-green text-white">
                      {relatedPost.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-heading text-midnight-blue group-hover:text-coral-red transition-colors">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {relatedPost.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <Clock className="h-3 w-3 mr-1" />
                    {relatedPost.readTime}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full group"
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/blog">
                <BookOpen className="h-4 w-4 mr-2" />
                View All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Let's discuss how our AI-enhanced growth strategies can help you
            achieve the results discussed in this article.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/growth-consultation">
                Book Growth Strategy Session
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link
                href="/blog"
                className="text-coral-red hover:text-midnight-blue"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                <span className="font-heading font-semibold">Back to Blog</span>
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
