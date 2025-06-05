import CategoryPageTemplate from "@/components/CategoryPageTemplate"
import { Cog, Workflow, Clock, Zap, Target, BarChart3, TrendingUp, Settings } from "lucide-react"

export default function ProcessCategoryPage() {
  return (
    <CategoryPageTemplate
      categoryName="Process Automation"
      categorySlug="process"
      categoryDescription="Intelligent process automation that eliminates manual bottlenecks, reduces errors, and scales your operations efficiently."
      parentService="ai-automation"
      heroTitle="Process Automation That Transforms Operations"
      heroSubtitle="Process Automation Services"
      heroDescription="Eliminate manual bottlenecks and human error with sophisticated automation systems. Our process automation solutions work 24/7 to handle complex workflows, freeing your team to focus on strategic growth activities."
      heroColor="coral-red"
      services={[
        {
          name: "Business Process Automation",
          slug: "business-process-automation",
          description: "Intelligent automation that transforms operations and eliminates manual bottlenecks",
          features: [
            "End-to-end process automation and optimisation",
            "Manual task elimination with AI-powered workflows",
            "Error reduction through intelligent automation",
            "24/7 automated operations with monitoring",
            "ROI-focused automation implementation"
          ],
          icon: Cog,
          resultMetric: "Save 40+ hours per week on manual, repetitive tasks"
        },
        {
          name: "Workflow Automation",
          slug: "workflow-automation",
          description: "Streamlined workflows that improve efficiency and reduce operational complexity",
          features: [
            "Custom workflow design and implementation",
            "Multi-system integration and orchestration",
            "Automated decision-making and routing",
            "Exception handling and escalation",
            "Performance monitoring and optimisation"
          ],
          icon: Workflow,
          resultMetric: "70% reduction in workflow completion time"
        },
        {
          name: "Quality Control Systems",
          slug: "quality-control-systems",
          description: "Automated quality assurance and compliance monitoring systems",
          features: [
            "Automated quality checks and validation",
            "Real-time compliance monitoring",
            "Exception handling and alerts",
            "Audit trail generation",
            "Performance metrics and reporting"
          ],
          icon: Settings,
          resultMetric: "95% reduction in quality control errors"
        },
        {
          name: "Task Management",
          slug: "task-management",
          description: "Intelligent task prioritisation and automated assignment systems",
          features: [
            "AI-powered task prioritisation based on business impact",
            "Smart assignment based on skills and capacity",
            "Automated workflow orchestration",
            "Real-time workload balancing",
            "Performance analytics and insights"
          ],
          icon: Target,
          resultMetric: "78% improvement in team productivity and efficiency"
        },
        {
          name: "System Integration",
          slug: "system-integration", 
          description: "Seamless integration that connects all your business systems",
          features: [
            "Custom API development and system connections",
            "Real-time data synchronisation across platforms",
            "Automated workflow orchestration between systems",
            "Legacy system modernisation and integration",
            "Unified dashboard and reporting capabilities"
          ],
          icon: Zap,
          resultMetric: "95% elimination of manual data transfer tasks"
        }
      ]}
      processSteps={[
        {
          step: "01",
          title: "Process Mapping",
          description: "Analyse current workflows and identify automation opportunities.",
          icon: BarChart3
        },
        {
          step: "02",
          title: "Solution Design",
          description: "Design custom automation solutions tailored to your specific needs.",
          icon: Target
        },
        {
          step: "03",
          title: "Implementation",
          description: "Deploy and integrate automation systems with minimal disruption.",
          icon: Cog
        },
        {
          step: "04",
          title: "Optimisation",
          description: "Monitor performance and continuously improve automation effectiveness.",
          icon: TrendingUp
        }
      ]}
      categoryBenefits={[
        "Eliminate 80-95% of manual, repetitive tasks across your operations",
        "Reduce human error rates by up to 98% through intelligent automation",
        "Scale operations without proportional increases in headcount",
        "Free valuable team time to focus on strategic and creative work",
        "Create consistent, auditable processes that improve compliance",
        "Achieve 24/7 operational capability with automated monitoring"
      ]}
      categoryMetrics={[
        {
          metric: "Average Time Savings",
          value: "40+",
          description: "Hours saved per week through process automation"
        },
        {
          metric: "Error Reduction",
          value: "95%",
          description: "Reduction in manual processing errors"
        },
        {
          metric: "ROI Achievement",
          value: "6 months",
          description: "Average time to achieve positive ROI"
        }
      ]}
      ctaPrimary={{
        text: "Automate Your Processes",
        href: "/contact"
      }}
      ctaSecondary={{
        text: "Explore AI Automation",
        href: "/ai-automation"
      }}
    />
  )
}