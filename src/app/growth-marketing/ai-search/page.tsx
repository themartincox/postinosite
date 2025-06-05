import CategoryPageTemplate from "@/components/CategoryPageTemplate"
import { Search, Brain, TrendingUp, Eye, Target, BarChart3, Zap, Award } from "lucide-react"

export default function AISearchOptimizationPage() {
  return (
    <CategoryPageTemplate
      categoryName="AI Search Optimization"
      categorySlug="ai-search"
      categoryDescription="Next-generation SEO strategies designed for AI-powered search engines, voice search, and the evolving landscape of search behaviour."
      parentService="growth-marketing"

      heroTitle="AI Search Optimization for the Future of Discovery"
      heroSubtitle="AI Search Optimization Services"
      heroDescription="Stay ahead of the search evolution. Our AI Search Optimization services prepare your business for AI-powered search engines, voice queries, and no-click search results. We optimize for how people will find information tomorrow, not just today."
      heroColor="midnight-blue"

      services={[
        {
          name: "AI-Driven Keyword Research",
          slug: "ai-keyword-research",
          description: "Machine learning algorithms that identify emerging search patterns and opportunities",
          features: [
            "AI-powered search trend prediction",
            "Semantic keyword clustering and analysis",
            "Voice search query optimization",
            "Intent-based keyword mapping",
            "Competitive AI analysis and gaps"
          ],
          icon: Brain,
          resultMetric: "340% more high-opportunity keywords identified vs traditional research"
        },
        {
          name: "Content Relevance Optimization",
          slug: "content-relevance-optimization",
          description: "Optimize content for AI understanding and featured snippet capture",
          features: [
            "AI content analysis and optimization",
            "Featured snippet targeting and formatting",
            "Entity-based content structuring",
            "Semantic relevance enhancement",
            "Multi-intent content optimization"
          ],
          icon: Target,
          resultMetric: "89% increase in featured snippet captures"
        },
        {
          name: "Predictive SEO Analytics",
          slug: "predictive-seo-analytics",
          description: "Forecast ranking opportunities and algorithm changes before they happen",
          features: [
            "Algorithm change prediction modeling",
            "Ranking opportunity forecasting",
            "Competitor movement analysis",
            "Search behavior trend analysis",
            "Performance prediction and planning"
          ],
          icon: TrendingUp,
          resultMetric: "67% faster adaptation to algorithm changes"
        },
        {
          name: "Organic Visibility Enhancement",
          slug: "organic-visibility-enhancement",
          description: "Maximize visibility across all search formats and AI-powered results",
          features: [
            "Zero-click optimization strategies",
            "Voice search optimization",
            "Visual search optimization",
            "Local AI search optimization",
            "Cross-platform visibility enhancement"
          ],
          icon: Eye,
          resultMetric: "156% improvement in total organic visibility"
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "AI Search Audit",
          description: "Analyze current performance across AI-powered search platforms and identify opportunities.",
          icon: Search
        },
        {
          step: "02",
          title: "Strategy Development",
          description: "Create comprehensive AI search strategy aligned with emerging search behaviors.",
          icon: Brain
        },
        {
          step: "03",
          title: "Content Optimization",
          description: "Optimize content for AI understanding, featured snippets, and voice search.",
          icon: Target
        },
        {
          step: "04",
          title: "Performance Monitoring",
          description: "Track performance across all search formats and continuously adapt strategy.",
          icon: BarChart3
        }
      ]}

      categoryBenefits={[
        "Future-proof your search presence for AI-powered search engines",
        "Capture more featured snippets and zero-click search results",
        "Optimize for voice search and conversational queries",
        "Stay ahead of algorithm changes with predictive analytics",
        "Maximize visibility across all search formats and platforms",
        "Build competitive advantages through early AI search adoption"
      ]}

      categoryMetrics={[
        {
          metric: "Featured Snippet Captures",
          value: "89%",
          description: "Increase in featured snippet rankings"
        },
        {
          metric: "Voice Search Visibility",
          value: "156%",
          description: "Improvement in voice search rankings"
        },
        {
          metric: "AI Search Readiness",
          value: "95%",
          description: "Content optimized for AI understanding"
        }
      ]}

      ctaPrimary={{
        text: "Get AI Search Analysis",
        href: "/growth-consultation"
      }}

      ctaSecondary={{
        text: "View AI Search Results",
        href: "/case-studies"
      }}
    />
  )
}
