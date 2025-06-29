import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import {
  BarChart3,
  Brain,
  Database,
  Eye,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function IntelligenceCategoryPage() {
  return (
    <CategoryPageTemplate
      categoryName="Intelligence & Data"
      categorySlug="intelligence"
      categoryDescription="Transform raw data into actionable insights with AI-powered analytics, CRM automation, and customer intelligence systems."
      parentService="ai-automation"
      heroTitle="AI-Powered Intelligence That Drives Smarter Decisions"
      heroSubtitle="Intelligence & Data Services"
      heroDescription="Turn your data into your competitive advantage. Our AI-powered intelligence solutions analyse customer behaviour, predict trends, and automate insights delivery to help you make faster, smarter business decisions."
      heroColor="forest-green"
      services={[
        {
          name: "Predictive Analytics",
          slug: "predictive-analytics",
          description:
            "AI-powered predictive models that forecast trends and opportunities",
          features: [
            "Advanced predictive modeling and forecasting",
            "Customer behavior prediction and analysis",
            "Revenue forecasting and planning",
            "Risk assessment and mitigation",
            "Market trend prediction and analysis",
          ],
          icon: TrendingUp,
          resultMetric: "340% improvement in forecasting accuracy",
        },
        {
          name: "Customer Segmentation",
          slug: "customer-segmentation",
          description:
            "Intelligent customer grouping for personalized marketing and sales",
          features: [
            "AI-driven customer clustering and analysis",
            "Behavioral segmentation and profiling",
            "Dynamic segment creation and updates",
            "Segment-specific strategy development",
            "Performance tracking by segment",
          ],
          icon: Users,
          resultMetric: "156% increase in campaign effectiveness",
        },
        {
          name: "Personalized Outreach",
          slug: "personalised-outreach",
          description:
            "AI-powered personalization engines for marketing and sales communications",
          features: [
            "Dynamic content personalization",
            "Intelligent send-time optimization",
            "Behavioral trigger automation",
            "Cross-channel personalization",
            "Real-time personalization engines",
          ],
          icon: Eye,
          resultMetric: "89% improvement in engagement rates",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Data Integration",
          description:
            "Connect and consolidate data from all business systems and touchpoints.",
          icon: Database,
        },
        {
          step: "02",
          title: "AI Model Development",
          description:
            "Build custom AI models tailored to your specific business needs and goals.",
          icon: Brain,
        },
        {
          step: "03",
          title: "Insight Generation",
          description:
            "Deploy AI systems that continuously analyse data and generate insights.",
          icon: TrendingUp,
        },
        {
          step: "04",
          title: "Automation & Optimisation",
          description:
            "Automate insight delivery and continuously improve model performance.",
          icon: Zap,
        },
      ]}
      categoryBenefits={[
        "Make faster, more accurate decisions based on comprehensive data analysis",
        "Identify new revenue opportunities and optimisation possibilities",
        "Understand customer behaviour patterns at unprecedented depth",
        "Predict and prevent customer churn before it happens",
        "Automate routine analysis and reporting tasks",
        "Scale data-driven insights across all business functions",
      ]}
      categoryMetrics={[
        {
          metric: "Decision Accuracy",
          value: "340%",
          description: "Improvement in data-driven decision success",
        },
        {
          metric: "Sales Productivity",
          value: "156%",
          description: "Increase through CRM automation",
        },
        {
          metric: "Customer Retention",
          value: "89%",
          description: "Improvement through predictive insights",
        },
      ]}
      ctaPrimary={{
        text: "Request Intelligence Demo",
        href: "/ai-automation-demo",
      }}
      ctaSecondary={{
        text: "View Intelligence Results",
        href: "/case-studies",
      }}
    />
  );
}
