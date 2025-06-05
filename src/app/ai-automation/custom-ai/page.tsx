import CategoryPageTemplate from "@/components/CategoryPageTemplate"
import { Brain, Bot, MessageSquare, Zap, Users, Target, TrendingUp, Cog } from "lucide-react"

export default function CustomAICategoryPage() {
  return (
    <CategoryPageTemplate
      categoryName="Custom AI Solutions"
      categorySlug="custom-ai"
      categoryDescription="Bespoke AI systems and intelligent automation solutions tailored to your specific business needs and industry requirements."
      parentService="ai-automation"

      heroTitle="Custom AI Solutions That Transform Your Business Operations"
      heroSubtitle="Custom AI Solutions"
      heroDescription="Go beyond off-the-shelf tools with custom AI systems designed specifically for your business. From intelligent chatbots to predictive analytics, we create AI solutions that address your unique challenges and unlock new opportunities for growth."
      heroColor="coral-red"

      services={[
        {
          name: "Intelligent Chatbot Development",
          slug: "intelligent-chatbots",
          description: "Intelligent conversational AI that handles customer service and lead qualification",
          features: [
            "Natural language processing and understanding",
            "Multi-channel deployment (web, WhatsApp, email)",
            "Integration with existing business systems",
            "Continuous learning and improvement",
            "24/7 customer support automation"
          ],
          icon: MessageSquare,
          resultMetric: "89% reduction in customer service response time"
        },
        {
          name: "Predictive AI Models",
          slug: "predictive-ai-models",
          description: "Custom machine learning models that forecast trends and optimise decisions",
          features: [
            "Custom ML model development and training",
            "Business-specific prediction algorithms",
            "Real-time forecasting and alerts",
            "Integration with existing data systems",
            "Continuous model refinement and improvement"
          ],
          icon: Brain,
          resultMetric: "340% improvement in forecasting accuracy"
        },
        {
          name: "Automated Lead Routing",
          slug: "automated-lead-routing",
          description: "AI-powered lead qualification and intelligent routing to sales teams",
          features: [
            "Intelligent lead scoring and qualification",
            "Automated routing based on AI analysis",
            "Real-time lead assessment and prioritisation",
            "Integration with CRM and sales tools",
            "Performance tracking and optimisation"
          ],
          icon: Users,
          resultMetric: "280% increase in lead conversion rates"
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Requirements Analysis",
          description: "Deep dive into your business needs and AI opportunity assessment.",
          icon: Target
        },
        {
          step: "02",
          title: "AI Solution Design",
          description: "Design custom AI architecture tailored to your specific requirements.",
          icon: Brain
        },
        {
          step: "03",
          title: "Development & Training",
          description: "Build and train AI models using your business data and use cases.",
          icon: Cog
        },
        {
          step: "04",
          title: "Deployment & Optimisation",
          description: "Deploy AI solutions and continuously optimise for better performance.",
          icon: TrendingUp
        }
      ]}

      categoryBenefits={[
        "Solve unique business challenges with AI solutions built specifically for you",
        "Achieve competitive advantages through proprietary AI capabilities",
        "Scale intelligent automation across all business functions",
        "Integrate seamlessly with existing business systems and workflows",
        "Continuously improve AI performance through machine learning",
        "Reduce operational costs whilst improving service quality and speed"
      ]}

      categoryMetrics={[
        {
          metric: "Operational Efficiency",
          value: "340%",
          description: "Improvement through custom AI automation"
        },
        {
          metric: "Response Time Reduction",
          value: "89%",
          description: "Faster customer service and support"
        },
        {
          metric: "Decision Accuracy",
          value: "156%",
          description: "Better business decisions through AI insights"
        }
      ]}

      ctaPrimary={{
        text: "Request Custom AI Demo",
        href: "/ai-automation-demo"
      }}

      ctaSecondary={{
        text: "View AI Success Stories",
        href: "/case-studies"
      }}
    />
  )
}
