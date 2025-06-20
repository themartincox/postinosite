import { getAllBlogPosts } from "@/lib/blog-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-midnight-blue mb-4">
              Postino Insights
            </h1>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Expert insights on marketing strategy, AI automation, and growth tactics for modern businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-midnight-blue mb-8">Featured Article</h2>
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-coral-red/10 text-coral-red">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-midnight-blue mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{featuredPost.author}</span> • {featuredPost.date} • {featuredPost.readTime}
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="text-coral-red hover:text-coral-red/80 font-heading font-semibold"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Other Posts Grid */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-midnight-blue mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group">
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-midnight-blue mb-3 group-hover:text-coral-red transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date} • {post.readTime}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-coral-red hover:text-coral-red/80 font-heading font-semibold"
                    >
                      Read →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
