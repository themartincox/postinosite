import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Users, Target, BarChart3, TrendingUp, Zap, Brain, MessageSquare, Award } from "lucide-react"

export default function AutomatedLeadRoutingPage() {
  return (
    <ServicePageTemplate
      serviceName="Automated Lead Routing"
      serviceSlug="automated-lead-routing"
      categoryName="Custom AI Solutions"
      categorySlug="custom-ai"
      parentService="ai-automation"

      heroTitle="Intelligent Lead Routing That Maximises Conversion Rates"
      heroDescription="Ensure every lead reaches the right person at the right time with AI-powered routing that considers skill sets, availability, performance history, and lead characteristics to optimise conversion rates and customer experience."
      heroColor="midnight-blue"

      serviceOverview="Our Automated Lead Routing service uses sophisticated AI algorithms to analyse leads, evaluate team capacity and expertise, and route each prospect to the most suitable sales representative or department. This intelligent routing system considers multiple factors including lead quality, source, requirements, team performance, and availability to ensure optimal outcomes for both leads and sales teams."

      keyBenefits={[
        "Increase lead conversion rates by 280% through intelligent routing",
        "Reduce response times with instant automated lead distribution",
        "Match leads with the most suitable team members based on expertise",
        "Optimise workload distribution to prevent over-commitment or idle time",
        "Improve customer experience through faster, more relevant responses",
        "Provide complete visibility into lead flow and team performance"
      ]}

      serviceFeatures={[
        {
          title: "AI Lead Scoring",
          description: "Machine learning models that assess lead quality and conversion probability",
          icon: Brain
        },
        {
          title: "Skill-Based Routing",
          description: "Match leads to team members based on expertise, experience, and performance",
          icon: Target
        },
        {
          title: "Capacity Management",
          description: "Real-time workload balancing to optimise team productivity and response times",
          icon: Users
        },
        {
          title: "Performance Analytics",
          description: "Detailed insights into routing effectiveness and team performance",
          icon: BarChart3
        },
        {
          title: "Dynamic Prioritisation",
          description: "Automatic priority adjustment based on lead value and time sensitivity",
          icon: Zap
        },
        {
          title: "Multi-Channel Integration",
          description: "Route leads from all sources including web forms, phone calls, and chat",
          icon: MessageSquare
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Lead Flow Analysis",
          description: "Analyse current lead sources, quality, and routing processes"
        },
        {
          step: "02",
          title: "AI Model Training",
          description: "Train machine learning models on historical lead and performance data"
        },
        {
          step: "03",
          title: "System Integration",
          description: "Integrate routing system with CRM, lead sources, and communication tools"
        },
        {
          step: "04",
          title: "Optimisation & Scaling",
          description: "Continuously improve routing algorithms and expand capabilities"
        }
      ]}

      resultMetrics={[
        {
          metric: "Conversion Rate Increase",
          value: "280%",
          description: "Improvement in lead-to-customer conversion"
        },
        {
          metric: "Response Time Reduction",
          value: "85%",
          description: "Faster lead response and follow-up"
        },
        {
          metric: "Team Efficiency",
          value: "67%",
          description: "Improvement in sales team productivity"
        }
      ]}

      caseStudy={{
        company: "Strategic Consulting Group",
        industry: "Professional Services",
        challenge: "High-value leads were being routed randomly, causing mismatched expertise and poor conversion rates despite having a skilled sales team.",
        result: "AI routing system matched leads to specialist consultants based on industry expertise and availability, resulting in 156% increase in qualified meetings and 89% improvement in proposal success rates.",
        metric: "156% More Qualified Meetings"
      }}

      investmentInfo={{
        description: "Automated lead routing investment varies based on team size and lead sources. Most implementations show immediate improvements in response times and conversion rates.",
        startingFrom: "£11,500",
        consultationPrice: "Free routing analysis"
      }}

      faqs={[
        {
          question: "How does the AI determine the best person to route leads to?",
          answer: "Our AI considers multiple factors including team member expertise, current workload, past performance with similar leads, availability, and lead characteristics to make optimal routing decisions."
        },
        {
          question: "Can the system handle leads from multiple sources?",
          answer: "Yes, we integrate with all lead sources including website forms, phone systems, chat platforms, social media, and third-party lead generation tools to provide unified routing."
        },
        {
          question: "What happens if the assigned person is unavailable?",
          answer: "The system includes sophisticated backup routing with escalation procedures, time-based reassignment, and out-of-office handling to ensure no lead goes unattended."
        },
        {
          question: "How quickly can you implement lead routing automation?",
          answer: "Basic routing can be implemented within 3-4 weeks. Complex AI-driven routing with multiple integrations typically takes 6-10 weeks to fully deploy and optimise."
        }
      ]}

      relatedServices={[
        {
          name: "Intelligent Chatbots",
          slug: "intelligent-chatbots",
          description: "Qualify leads automatically before routing to appropriate team members"
        },
        {
          name: "Customer Segmentation",
          slug: "../intelligence/customer-segmentation",
          description: "Segment leads for more precise routing and personalised follow-up"
        },
        {
          name: "Predictive Analytics",
          slug: "../intelligence/predictive-analytics",
          description: "Predict lead conversion probability to optimise routing decisions"
        }
      ]}
    />
  )
}
