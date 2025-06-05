import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Workflow, Zap, Settings, Clock, Users, BarChart3, Target, Cog } from "lucide-react"

export default function BusinessProcessAutomationPage() {
  return (
    <ServicePageTemplate
      serviceName="Business Process Automation"
      serviceSlug="business-process-automation"
      categoryName="Process Automation"
      categorySlug="process"
      parentService="ai-automation"

      heroTitle="Intelligent Process Automation That Transforms Operations"
      heroDescription="Eliminate manual bottlenecks and human error with sophisticated automation systems that handle complex business processes end-to-end, freeing your team to focus on strategic growth activities."
      heroColor="coral-red"

      serviceOverview="Our Business Process Automation service transforms how your business operates by identifying, redesigning, and automating repetitive tasks and complex workflows. Using advanced automation tools and AI, we create systems that work 24/7, reduce errors by up to 95%, and save your team 40+ hours per week on manual work."

      keyBenefits={[
        "Save 40+ hours per week on manual, repetitive tasks",
        "Reduce human error rates by up to 95% through automation",
        "Improve process consistency and quality across operations",
        "Scale operations without proportional headcount increases",
        "Create complete audit trails for compliance and reporting",
        "Free team members to focus on strategic and creative work"
      ]}

      serviceFeatures={[
        {
          title: "Process Mapping & Analysis",
          description: "Comprehensive mapping of current workflows to identify automation opportunities",
          icon: Workflow
        },
        {
          title: "Custom Automation Development",
          description: "Tailored automation solutions built for your specific business processes",
          icon: Cog
        },
        {
          title: "System Integration",
          description: "Seamless integration with existing business systems and databases",
          icon: Settings
        },
        {
          title: "Quality Assurance & Testing",
          description: "Rigorous testing to ensure automation reliability and accuracy",
          icon: Target
        },
        {
          title: "Performance Monitoring",
          description: "Real-time monitoring and analytics to track automation performance",
          icon: BarChart3
        },
        {
          title: "Ongoing Optimisation",
          description: "Continuous improvement and refinement of automated processes",
          icon: Zap
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Process Discovery",
          description: "Analyse current workflows and identify high-impact automation opportunities"
        },
        {
          step: "02",
          title: "Solution Design",
          description: "Design custom automation architecture tailored to your business needs"
        },
        {
          step: "03",
          title: "Development & Testing",
          description: "Build, test, and refine automation systems with comprehensive quality assurance"
        },
        {
          step: "04",
          title: "Deployment & Training",
          description: "Deploy automation systems and train your team on new workflows"
        }
      ]}

      resultMetrics={[
        {
          metric: "Weekly Time Savings",
          value: "45hrs",
          description: "Average hours saved per week"
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

      caseStudy={{
        company: "TechFlow Solutions",
        industry: "Software Development",
        challenge: "Manual client onboarding process taking 8+ hours per client, prone to errors, and creating bottlenecks for the sales team.",
        result: "Automated entire onboarding workflow reducing time to 45 minutes, eliminating errors, and freeing up 25 hours per week for strategic client work.",
        metric: "89% Time Reduction"
      }}

      investmentInfo={{
        description: "Business Process Automation investment depends on complexity and scope of processes being automated. Most projects pay for themselves within 6-12 months.",
        startingFrom: "£15,000",
        consultationPrice: "Free assessment"
      }}

      faqs={[
        {
          question: "Which processes are best suited for automation?",
          answer: "Processes that are repetitive, rule-based, high-volume, and prone to human error are ideal candidates. Examples include data entry, invoice processing, report generation, and approval workflows."
        },
        {
          question: "How long does it take to implement process automation?",
          answer: "Implementation timelines vary based on complexity, but most projects are completed within 6-12 weeks. Simple processes can be automated in 2-4 weeks, while complex workflows may take 3-4 months."
        },
        {
          question: "Will automation replace my employees?",
          answer: "Automation complements your team by handling repetitive tasks, allowing employees to focus on strategic, creative, and customer-facing work that drives business growth."
        },
        {
          question: "What if my business processes change?",
          answer: "We build flexible automation systems that can be easily modified as your business evolves. We also provide ongoing support and optimisation services."
        },
        {
          question: "How do you ensure data security in automated processes?",
          answer: "We implement enterprise-grade security measures including encryption, access controls, audit trails, and compliance with relevant data protection regulations."
        }
      ]}

      relatedServices={[
        {
          name: "Workflow Automation",
          slug: "workflow-automation",
          description: "Streamline existing workflows before automation implementation"
        },
        {
          name: "Data Analysis",
          slug: "../intelligence/data-analysis",
          description: "Analyse process performance and identify optimisation opportunities"
        },
        {
          name: "CRM Automation",
          slug: "../intelligence/crm-automation",
          description: "Automate customer relationship management processes"
        }
      ]}
    />
  )
}
