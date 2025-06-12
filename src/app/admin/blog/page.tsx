import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Edit,
  Eye,
  Plus,
  Search,
  Trash2,
  User,
} from "lucide-react";
import Link from "next/link";

export default function BlogManager() {
  // Sample blog posts data (would come from CMS/database)
  const blogPosts = [
    {
      id: 1,
      title: "The Future of SME Growth: How AI is Revolutionising Marketing in 2024",
      slug: "future-of-sme-growth-ai-marketing-2024",
      excerpt: "Discover how small and medium enterprises are leveraging artificial intelligence to compete with industry giants...",
      author: "Sarah Mitchell",
      date: "2024-06-01",
      status: "published",
      category: "AI & Marketing",
      views: 1247,
      featured: true,
    },
    {
      id: 2,
      title: "5 Marketing Automation Workflows Every SME Should Implement",
      slug: "5-marketing-automation-workflows-sme",
      excerpt: "From lead nurturing to customer retention, these essential automation workflows will save you time...",
      author: "James Rodriguez",
      date: "2024-05-28",
      status: "published",
      category: "Automation",
      views: 892,
      featured: false,
    },
    {
      id: 3,
      title: "Content Strategy That Converts: A Data-Driven Approach",
      slug: "content-strategy-converts-data-driven-approach",
      excerpt: "Learn how to create content that not only engages your audience but drives measurable business results...",
      author: "Emma Thompson",
      date: "2024-05-25",
      status: "draft",
      category: "Content Strategy",
      views: 0,
      featured: false,
    },
    {
      id: 4,
      title: "SEO in the Age of AI: What SMEs Need to Know",
      slug: "seo-age-ai-smes-need-know",
      excerpt: "How artificial intelligence is changing search engine optimisation and what small businesses must do...",
      author: "David Chen",
      date: "2024-05-22",
      status: "published",
      category: "SEO",
      views: 634,
      featured: false,
    },
    {
      id: 5,
      title: "Building a Growth Mindset: Lessons from High-Growth SMEs",
      slug: "building-growth-mindset-lessons-high-growth-smes",
      excerpt: "Discover the common traits and strategies that separate fast-growing businesses from their competitors...",
      author: "Sarah Mitchell",
      date: "2024-05-19",
      status: "scheduled",
      category: "Growth Strategy",
      views: 0,
      featured: false,
    },
  ];

  const stats = [
    { label: "Total Posts", value: blogPosts.length, color: "text-midnight-blue" },
    { label: "Published", value: blogPosts.filter(p => p.status === "published").length, color: "text-forest-green" },
    { label: "Drafts", value: blogPosts.filter(p => p.status === "draft").length, color: "text-coral-red" },
    { label: "Scheduled", value: blogPosts.filter(p => p.status === "scheduled").length, color: "text-amber-600" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="bg-midnight-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold">Blog Management</h1>
              <p className="text-gray-300 mt-2">
                Create, edit, and manage your blog posts
              </p>
            </div>
            <Button
              asChild
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/admin/blog/new">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-8 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={`stat-${index}`} className="bg-white">
                <CardContent className="p-6">
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search posts..."
                  className="pl-10 w-64"
                />
              </div>

              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="">All Categories</option>
                <option value="ai-marketing">AI & Marketing</option>
                <option value="automation">Automation</option>
                <option value="content-strategy">Content Strategy</option>
                <option value="seo">SEO</option>
                <option value="growth-strategy">Growth Strategy</option>
              </select>

              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>

            <div className="text-sm text-gray-500">
              Showing {blogPosts.length} posts
            </div>
          </div>
        </div>
      </section>

      {/* Posts List */}
      <section className="py-8 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-heading font-semibold text-midnight-blue">
                          {post.title}
                        </h3>
                        {post.featured && (
                          <Badge className="bg-coral-red text-white text-xs">
                            Featured
                          </Badge>
                        )}
                        <Badge
                          className={
                            post.status === "published"
                              ? "bg-forest-green text-white"
                              : post.status === "draft"
                              ? "bg-gray-500 text-white"
                              : "bg-amber-500 text-white"
                          }
                        >
                          {post.status}
                        </Badge>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-6 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString("en-GB")}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.views} views
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="hover:bg-forest-green hover:text-white"
                      >
                        <Link href={`/blog/${post.slug}`} target="_blank">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="hover:bg-midnight-blue hover:text-white"
                      >
                        <Link href={`/admin/blog/edit/${post.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-coral-red hover:text-white"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-gray-400">
            © 2025 Postino Ltd. Admin Dashboard - All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
