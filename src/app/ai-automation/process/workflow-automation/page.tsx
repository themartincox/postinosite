import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  BarChart3,
  Clock,
  Cog,
  Settings,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export default function WorkflowAutomationPage() {
  return (
    <ServicePageTemplate
      serviceName="Workflow Automation"
      serviceSlug="workflow-automation"
      categoryName="Business Process Automation"
      categorySlug="process"
      parentService="ai-automation"
      heroTitle="Intelligent Workflow Automation That Transforms Operations"
      heroDescription="Automate complex multi-step processes with AI-powered decision making and intelligent routing. Our workflow automation solutions eliminate bottlenecks, reduce manual intervention, and create seamless operations that scale with your business."
      heroColor="coral-red"
      serviceOverview="Our Workflow Automation service designs and implements sophisticated automated workflows that handle complex business processes from start to finish. Using AI-powered decision engines and intelligent routing, we create systems that adapt to changing conditions, make smart decisions, and ensure consistent outcomes across all your operations."
      keyBenefits={[
        "Eliminate manual bottlenecks with intelligent process automation",
        "Reduce processing time by up to 85% through optimised workflows",
        "Ensure consistent quality and compliance across all processes",
        "Scale operations without proportional increase in manual effort",
        "Create adaptive workflows that improve over time through machine learning",
        "Provide complete visibility and control over automated processes",
      ]}
      serviceFeatures={[
        {
          title: "Intelligent Process Design",
          description:
            "AI-powered workflow design that optimises for efficiency and outcomes",
          icon: Target,
        },
        {
          title: "Multi-System Integration",
          description:
            "Seamless connection between all your business systems and platforms",
          icon: Settings,
        },
        {
          title: "Adaptive Decision Making",
          description:
            "Smart routing and decision points that adapt based on conditions",
          icon: Zap,
        },
        {
          title: "Real-Time Monitoring",
          description:
            "Complete visibility into workflow performance and bottlenecks",
          icon: BarChart3,
        },
        {
          title: "Exception Handling",
          description: "Intelligent error handling and escalation procedures",
          icon: Users,
        },
        {
          title: "Performance Optimisation",
          description:
            "Continuous improvement through AI analysis and optimisation",
          icon: Cog,
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Workflow Analysis",
          description:
            "Map current processes and identify optimisation opportunities",
        },
        {
          step: "02",
          title: "Automation Design",
          description:
            "Design intelligent workflows with AI-powered decision points",
        },
        {
          step: "03",
          title: "System Integration",
          description:
            "Connect all relevant systems and test workflow functionality",
        },
        {
          step: "04",
          title: "Deployment & Optimisation",
          description: "Launch workflows and continuously optimise performance",
        },
      ]}
      resultMetrics={[
        {
          metric: "Processing Time Reduction",
          value: "85%",
          description: "Average reduction in process completion time",
        },
        {
          metric: "Error Rate Reduction",
          value: "92%",
          description: "Decrease in process-related errors",
        },
        {
          metric: "Operational Efficiency",
          value: "340%",
          description: "Improvement in overall workflow efficiency",
        },
      ]}
      caseStudy={{
        company: "Manufacturing Solutions Ltd",
        industry: "Manufacturing",
        challenge:
          "Complex order processing workflow involving multiple departments and systems was causing delays and errors in customer deliveries.",
        result:
          "Automated end-to-end order workflow reduced processing time from 3 days to 4 hours, eliminated 89% of errors, and improved customer satisfaction scores by 67%.",
        metric: "85% Time Reduction",
      }}
      investmentInfo={{
        description:
          "Workflow automation investment varies based on process complexity and number of systems involved. Most implementations deliver ROI within 8-12 months.",
        startingFrom: "£12,000",
        consultationPrice: "Free workflow assessment",
      }}
      faqs={[
        {
          question: "Which workflows are best suited for automation?",
          answer:
            "Workflows with repetitive tasks, multiple handoffs, rule-based decisions, and high volumes are ideal candidates. We particularly excel with processes involving data transformation, approvals, and cross-system coordination.",
        },
        {
          question:
            "How do you handle exceptions and errors in automated workflows?",
          answer:
            "Our workflows include intelligent exception handling with automatic retry mechanisms, escalation procedures, and human intervention triggers when needed. All exceptions are logged and analysed for continuous improvement.",
        },
        {
          question:
            "Can automated workflows be modified as business needs change?",
          answer:
            "Absolutely. We build flexible workflow architectures that can be easily modified and extended. Our systems include user-friendly interfaces for making common adjustments without technical expertise.",
        },
        {
          question: "How do you ensure data security in automated workflows?",
          answer:
            "We implement enterprise-grade security including encryption, access controls, audit trails, and compliance with relevant regulations. All data handling follows strict security protocols.",
        },
      ]}
      relatedServices={[
        {
          name: "Task Management",
          slug: "task-management",
          description:
            "Intelligent task prioritisation and resource allocation",
        },
        {
          name: "System Integration",
          slug: "system-integration",
          description: "Connect and synchronise all your business systems",
        },
        {
          name: "Predictive Analytics",
          slug: "../intelligence/predictive-analytics",
          description: "Use data insights to optimise workflow performance",
        },
      ]}
    />
  );
}
