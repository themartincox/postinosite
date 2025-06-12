"use client";

import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Eye,
  FileText,
  Image,
  Save,
  Send,
  Tag,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NewBlogPost() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    author: "Martin",
    status: "draft",
    featured: false,
    publishDate: "",
    metaTitle: "",
    metaDescription: "",
    featuredImage: "",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Auto-generate slug from title
    if (field === "title" && typeof value === "string") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setFormData(prev => ({
        ...prev,
        slug: slug
      }));
    }
  };

  const categories = [
    "AI & Marketing",
    "Automation",
    "Content Strategy",
    "SEO",
    "Growth Strategy",
    "Customer Experience",
    "Data Analytics",
    "Case Studies",
  ];

  const authors = [
    "Martin",
  ];
      <Navigation />
      <div className="bg-midnight-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold">Create New Blog Post</h1>
              <p className="text-gray-300 mt-2">
                Write and publish a new article for your blog
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-midnight-blue"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button className="bg-coral-red hover:bg-coral-red/90 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Post Content */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Post Content
                </CardTitle>
                <CardDescription>
                  Write your blog post title and content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Post Title *
                  </label>
                  <Input
                    placeholder="Enter your blog post title..."
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="text-lg font-semibold"
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL Slug
                  </label>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">
                      /blog/
                    </span>
                    <Input
                      placeholder="post-url-slug"
                      value={formData.slug}
                      onChange={(e) => handleInputChange("slug", e.target.value)}
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt *
                  </label>
                  <Textarea
                    placeholder="Write a brief excerpt that summarises your post..."
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange("excerpt", e.target.value)}
                    rows={3}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This will be shown in post previews and search results.
                  </p>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Post Content *
                  </label>
                  <Textarea
                    placeholder="Write your blog post content here..."
                    value={formData.content}
                    onChange={(e) => handleInputChange("content", e.target.value)}
                    rows={20}
                    className="font-mono text-sm"
                  />
                  <div className="flex items-center gap-4 mt-2">
                    <Button size="sm" variant="outline">
                      <Image className="w-4 h-4 mr-2" />
                      Add Image
                    </Button>
                    <Button size="sm" variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Format Text
                    </Button>
                    <p className="text-xs text-gray-500 ml-auto">
                      Supports Markdown formatting
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  SEO Settings
                </CardTitle>
                <CardDescription>
                  Optimise your post for search engines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Title
                  </label>
                  <Input
                    placeholder="SEO-optimised title for search results..."
                    value={formData.metaTitle}
                    onChange={(e) => handleInputChange("metaTitle", e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.metaTitle.length}/60 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description
                  </label>
                  <Textarea
                    placeholder="Brief description for search engine results..."
                    value={formData.metaDescription}
                    onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                    rows={3}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.metaDescription.length}/160 characters
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Publish Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleInputChange("status", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <select
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    {authors.map((author) => (
                      <option key={author} value={author}>
                        {author}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.status === "scheduled" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Publish Date
                    </label>
                    <Input
                      type="datetime-local"
                      value={formData.publishDate}
                      onChange={(e) => handleInputChange("publishDate", e.target.value)}
                    />
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => handleInputChange("featured", checked as boolean)}
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                    Featured Post
                  </label>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <Button className="w-full bg-forest-green hover:bg-forest-green/90 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Publish Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories and Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Categories & Tags
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <Input
                    placeholder="Enter tags separated by commas..."
                    value={formData.tags}
                    onChange={(e) => handleInputChange("tags", e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separate tags with commas (e.g., AI, Marketing, Growth)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Featured Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600 mb-2">
                    Drop an image here or click to browse
                  </p>
                  <Button size="sm" variant="outline">
                    Choose File
                  </Button>
                </div>

                {formData.featuredImage && (
                  <div className="mt-4">
                    <img
                      src={formData.featuredImage}
                      alt="Featured"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <footer className="bg-charcoal text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-gray-400">
            © 2025 Postino Ltd. Admin Dashboard - All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
