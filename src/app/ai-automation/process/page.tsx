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
          description: "Streamlined workflows that connect systems and automate handoffs",
          features: [
            "Cross-system workflow integration",
            "Automated approvals and notifications",
            "Document processing and routing",
            "Task assignment and tracking",
            "Workflow performance monitoring"
          ],
          icon: Workflow,
          resultMetric: "67% reduction in process completion time"
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
          description: "Design automated workflows tailored to your business requirements.",
          icon: Target
        },
        {
          step: "03",
          title: "Implementation",
          description: "Build and deploy automation systems with comprehensive testing.",
          icon: Cog
        },
        {
          step: "04",
          title: "Optimisation",
          description: "Monitor performance and continuously improve automation efficiency.",
          icon: TrendingUp
        }
      ]}

      categoryBenefits={[
        "Eliminate manual bottlenecks that slow down operations",
        "Reduce human errors by up to 95% through intelligent automation",
        "Scale operations without proportional increases in headcount",
        "Improve process consistency and quality across all operations",
        "Free team members to focus on strategic and creative work",
        "Create complete audit trails for compliance and reporting"
      ]}

      categoryMetrics={[
        {
          metric: "Weekly Time Savings",
          value: "45hrs",
          description: "Average hours saved through automation"
        },
        {
          metric: "Error Reduction",
          value: "95%",
          description: "Decrease in manual processing errors"
        },
        {
          metric: "ROI Achievement",
          value: "520%",
          description: "Return on automation investment"
        }
      ]}

      ctaPrimary={{
        text: "Request Automation Assessment",
        href: "/ai-automation-demo"
      }}

      ctaSecondary={{
        text: "View Automation Results",
        href: "/case-studies"
      }}
    />
  )
}
