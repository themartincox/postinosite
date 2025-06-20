import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-soft-gray py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-coral-red hover:text-coral-red/80 font-heading font-semibold mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <Badge className="mb-4 bg-coral-red/10 text-coral-red">
            {post.category}
          </Badge>

          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-midnight-blue mb-6">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span className="font-medium">{post.author.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="prose prose-lg max-w-none">
            <div
              className="content-styles"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-soft-gray rounded-lg">
          <div className="flex items-start space-x-6">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h3 className="text-xl font-heading font-bold text-midnight-blue mb-2">
                About {post.author.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {post.author.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8">
          <h3 className="text-lg font-heading font-semibold text-midnight-blue mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-white border-coral-red/20 text-coral-red hover:bg-coral-red/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-coral-red text-white font-heading font-semibold rounded-lg hover:bg-coral-red/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
