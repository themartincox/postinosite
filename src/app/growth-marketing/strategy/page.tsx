import CategoryPageTemplate from "@/components/CategoryPageTemplate"
import { BarChart3, Search, Target, TrendingUp, Users, Lightbulb, Award, Zap } from "lucide-react"

export default function StrategyCategoryPage() {
  return (
    <CategoryPageTemplate
      categoryName="Strategy & Consulting"
      categorySlug="strategy"
      categoryDescription="Strategic consulting and analytics that guide decision-making and optimise marketing performance for sustainable growth."
      parentService="growth-marketing"

      heroTitle="Strategic Intelligence That Drives Smarter Growth Decisions"
      heroSubtitle="Strategy & Consulting Services"
      heroDescription="Transform data into actionable insights that fuel growth. Our strategic consulting and analytics services provide the intelligence you need to make informed decisions, optimise performance, and achieve sustainable competitive advantage."
      heroColor="midnight-blue"

      services={[
        {
          name: "Research & Market Analysis",
          slug: "research-market-analysis",
          description: "Deep market insights and competitive intelligence to inform strategy",
          features: [
            "Market size and opportunity assessment",
            "Competitive landscape analysis",
            "Customer research and persona development",
            "Industry trend analysis and forecasting",
            "Go-to-market strategy development"
          ],
          icon: Search,
          resultMetric: "340% improvement in market opportunity identification"
        },
        {
          name: "Marketing Planning",
          slug: "marketing-planning",
          description: "Comprehensive marketing strategies with clear roadmaps and objectives",
          features: [
            "Marketing strategy development",
            "Channel planning and budget allocation",
            "Campaign planning and execution roadmaps",
            "KPI setting and measurement frameworks",
            "Resource planning and team development"
          ],
          icon: Target,
          resultMetric: "156% improvement in marketing ROI through strategic planning"
        },
        {
          name: "Analytics & Reporting",
          slug: "analytics-reporting",
          description: "Advanced analytics setup and performance monitoring systems",
          features: [
            "Analytics platform setup and configuration",
            "Custom dashboard and reporting development",
            "Performance tracking and KPI monitoring",
            "Attribution modelling and customer journey analysis",
            "Predictive analytics and forecasting"
          ],
          icon: BarChart3,
          resultMetric: "89% improvement in marketing decision accuracy"
        },
        {
          name: "Conversion Rate Optimization",
          slug: "conversion-rate-optimization",
          description: "Systematic testing and optimisation to improve conversion performance",
          features: [
            "Conversion audit and opportunity identification",
            "A/B testing strategy and implementation",
            "User experience analysis and optimisation",
            "Landing page and funnel optimisation",
            "Performance monitoring and reporting"
          ],
          icon: TrendingUp,
          resultMetric: "234% increase in conversion rates across touchpoints"
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Data Collection",
          description: "Gather comprehensive data from all marketing channels and customer touchpoints.",
          icon: BarChart3
        },
        {
          step: "02",
          title: "Analysis & Insights",
          description: "Analyse data to identify patterns, opportunities, and strategic recommendations.",
          icon: Lightbulb
        },
        {
          step: "03",
          title: "Strategy Development",
          description: "Develop actionable strategies based on data insights and business objectives.",
          icon: Target
        },
        {
          step: "04",
          title: "Implementation & Monitoring",
          description: "Execute strategies with continuous monitoring and performance optimisation.",
          icon: Zap
        }
      ]}

      categoryBenefits={[
        "Make data-driven decisions that reduce risk and increase success rates",
        "Identify new market opportunities and revenue streams",
        "Optimise marketing spend allocation across channels for maximum ROI",
        "Understand customer behaviour and preferences at a deeper level",
        "Develop competitive advantages through strategic market positioning",
        "Create scalable growth systems that compound over time"
      ]}

      categoryMetrics={[
        {
          metric: "Decision Accuracy",
          value: "89%",
          description: "Improvement in strategic decision success rates"
        },
        {
          metric: "Marketing ROI",
          value: "156%",
          description: "Better return on marketing investment"
        },
        {
          metric: "Opportunity Identification",
          value: "340%",
          description: "More growth opportunities discovered"
        }
      ]}

      ctaPrimary={{
        text: "Plan Your Strategy",
        href: "/growth-consultation"
      }}

      ctaSecondary={{
        text: "View Strategy Results",
        href: "/case-studies"
      }}
    />
  )
}
