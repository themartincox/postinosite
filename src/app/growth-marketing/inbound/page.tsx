import CategoryPageTemplate from "@/components/CategoryPageTemplate"
import { Search, PenTool, Mail, Share2, BarChart3, Target, TrendingUp, Users } from "lucide-react"

export default function InboundCategoryPage() {
  return (
    <CategoryPageTemplate
      categoryName="Inbound Marketing"
      categorySlug="inbound"
      categoryDescription="Attract, engage, and convert your ideal customers through strategic inbound marketing that builds trust and drives sustainable growth."
      parentService="growth-marketing"

      heroTitle="Inbound Marketing That Attracts & Converts Your Ideal Customers"
      heroSubtitle="Inbound Marketing Services"
      heroDescription="Stop chasing prospects and start attracting them. Our comprehensive inbound marketing strategies create valuable touchpoints that draw customers to your business naturally, building trust and driving high-quality leads that convert."
      heroColor="forest-green"

      services={[
        {
          name: "SEO Strategy & Implementation",
          slug: "seo",
          description: "AI-enhanced search engine optimisation that dominates organic rankings",
          features: [
            "Technical SEO audits and optimisation",
            "AI-driven keyword research and content strategy",
            "Local SEO and Google Business Profile optimisation",
            "Competitor analysis and gap identification",
            "Performance tracking and continuous improvement"
          ],
          icon: Search,
          resultMetric: "Average 285% increase in organic traffic within 6 months"
        },
        {
          name: "Content Strategy & Creation",
          slug: "content-strategy-creation",
          description: "Strategic content that educates, engages, and converts prospects",
          features: [
            "Content audit and strategy development",
            "Blog writing and thought leadership content",
            "Lead magnets and downloadable resources",
            "Content calendar planning and execution",
            "Performance analysis and optimisation"
          ],
          icon: PenTool,
          resultMetric: "340% improvement in content engagement and lead generation"
        },
        {
          name: "Email Marketing Automation",
          slug: "email-marketing-automation",
          description: "Nurture sequences that guide prospects through the buyer's journey",
          features: [
            "Email strategy and list segmentation",
            "Automated drip campaigns and sequences",
            "Newsletter design and management",
            "A/B testing and performance optimisation",
            "CRM integration and lead scoring"
          ],
          icon: Mail,
          resultMetric: "67% faster sales cycles through automated nurturing"
        },
        {
          name: "Social Media Management",
          slug: "social-media-management",
          description: "Build community and drive engagement across social platforms",
          features: [
            "Social media strategy and planning",
            "Content creation and community management",
            "Paid social advertising campaigns",
            "Influencer outreach and partnerships",
            "Social listening and reputation management"
          ],
          icon: Share2,
          resultMetric: "195% increase in qualified social media leads"
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Audience Research",
          description: "Deep analysis of your target audience, their pain points, and content preferences.",
          icon: Users
        },
        {
          step: "02",
          title: "Strategy Development",
          description: "Create comprehensive inbound strategy aligned with business objectives.",
          icon: Target
        },
        {
          step: "03",
          title: "Content Creation",
          description: "Develop valuable content that attracts and engages your ideal prospects.",
          icon: PenTool
        },
        {
          step: "04",
          title: "Optimise & Scale",
          description: "Continuously improve performance and scale successful initiatives.",
          icon: TrendingUp
        }
      ]}

      categoryBenefits={[
        "Attract high-quality prospects who are actively seeking solutions like yours",
        "Build trust and authority through valuable, educational content",
        "Reduce customer acquisition costs compared to traditional outbound methods",
        "Create compound growth effects where content continues working long-term",
        "Develop deeper customer relationships through value-first approach",
        "Generate more qualified leads with higher conversion potential"
      ]}

      categoryMetrics={[
        {
          metric: "Lead Quality Increase",
          value: "89%",
          description: "Higher-intent prospects from inbound channels"
        },
        {
          metric: "Cost Per Lead Reduction",
          value: "62%",
          description: "Lower acquisition costs vs paid advertising"
        },
        {
          metric: "Customer Lifetime Value",
          value: "156%",
          description: "Inbound customers stay longer and spend more"
        }
      ]}

      ctaPrimary={{
        text: "Plan Your Inbound Strategy",
        href: "/growth-consultation"
      }}

      ctaSecondary={{
        text: "View Inbound Results",
        href: "/case-studies"
      }}
    />
  )
}
