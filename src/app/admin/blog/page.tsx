// ... existing code ... <imports and initial setup>

export default function BlogManager() {
  // Sample blog posts data (would come from CMS/database)
  const blogPosts = [
    {
      id: 1,
      title: "The Future of SME Growth: How AI is Revolutionising Marketing in 2024",
      slug: "future-of-sme-growth-ai-marketing-2024",
      excerpt: "Discover how small and medium enterprises are leveraging artificial intelligence to compete with industry giants...",
      author: "Martin",
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
      author: "Martin",
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
      author: "Martin",
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
      author: "Martin",
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
      author: "Martin",
      date: "2024-05-19",
      status: "scheduled",
      category: "Growth Strategy",
      views: 0,
      featured: false,
    },
  ];

// ... existing code ... <rest of the component>