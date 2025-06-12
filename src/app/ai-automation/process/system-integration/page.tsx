import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  BarChart3,
  Cloud,
  Database,
  Settings,
  Shield,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

export default function SystemIntegrationPage() {
  return (
    <ServicePageTemplate
      serviceName="System Integration"
      serviceSlug="system-integration"
      categoryName="Business Process Automation"
      categorySlug="process"
      parentService="ai-automation"
      heroTitle="Seamless System Integration That Unifies Your Business Operations"
      heroDescription="Connect all your business systems into a cohesive, intelligent network. Our AI-powered integration solutions eliminate data silos, automate cross-platform workflows, and create a unified view of your entire operation."
      heroColor="coral-red"
      serviceOverview="Our System Integration service creates seamless connections between all your business applications, databases, and platforms. Using advanced API development and AI-powered data transformation, we eliminate manual data entry, reduce errors, and ensure all your systems work together as one intelligent ecosystem that supports your business growth."
      keyBenefits={[
        "Eliminate 95% of manual data transfer tasks between systems",
        "Create real-time data synchronisation across all platforms",
        "Reduce data errors and inconsistencies by up to 98%",
        "Enable automated workflows that span multiple systems",
        "Gain unified visibility into all business operations and data",
        "Scale integrations easily as you add new systems and tools",
      ]}
      serviceFeatures={[
        {
          title: "Custom API Development",
          description:
            "Bespoke APIs that connect any system, regardless of age or architecture",
          icon: Settings,
        },
        {
          title: "Real-Time Data Sync",
          description:
            "Instant data synchronisation across all connected systems",
          icon: Zap,
        },
        {
          title: "Legacy System Modernisation",
          description:
            "Connect older systems to modern platforms without replacement",
          icon: Database,
        },
        {
          title: "Cloud Integration",
          description:
            "Seamless integration between on-premise and cloud-based systems",
          icon: Cloud,
        },
        {
          title: "Security & Compliance",
          description:
            "Enterprise-grade security with full audit trails and compliance support",
          icon: Shield,
        },
        {
          title: "Performance Monitoring",
          description:
            "Real-time monitoring and analytics for all integration points",
          icon: BarChart3,
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "System Audit",
          description:
            "Comprehensive analysis of existing systems and integration requirements",
        },
        {
          step: "02",
          title: "Architecture Design",
          description:
            "Design scalable integration architecture tailored to your needs",
        },
        {
          step: "03",
          title: "Development & Testing",
          description:
            "Build custom integrations with comprehensive testing and validation",
        },
        {
          step: "04",
          title: "Deployment & Support",
          description:
            "Deploy integrations and provide ongoing monitoring and support",
        },
      ]}
      resultMetrics={[
        {
          metric: "Manual Tasks Eliminated",
          value: "95%",
          description: "Reduction in manual data transfer work",
        },
        {
          metric: "Data Accuracy",
          value: "98%",
          description: "Improvement in data consistency",
        },
        {
          metric: "Process Efficiency",
          value: "420%",
          description: "Increase in cross-system workflow speed",
        },
      ]}
      caseStudy={{
        company: "TechFlow Solutions",
        industry: "Software Development",
        challenge:
          "Multiple disconnected systems requiring manual data entry, causing delays and errors in client reporting and project management.",
        result:
          "Integrated 7 business systems creating automated data flow, eliminated 35 hours of weekly manual work, and improved client reporting accuracy by 94%.",
        metric: "35hrs Weekly Savings",
      }}
      investmentInfo={{
        description:
          "System integration investment varies based on the number and complexity of systems involved. Most projects deliver ROI within 6-10 months through efficiency gains.",
        startingFrom: "£18,000",
        consultationPrice: "Free integration assessment",
      }}
      faqs={[
        {
          question:
            "Can you integrate with legacy systems that don't have modern APIs?",
          answer:
            "Yes, we specialise in connecting legacy systems through custom API development, database bridges, and modern integration platforms. We've successfully integrated systems from the 1990s with cutting-edge cloud platforms.",
        },
        {
          question: "How do you ensure data security during integration?",
          answer:
            "We implement multiple security layers including encryption in transit and at rest, secure authentication, access controls, and comprehensive audit logging. All integrations follow industry best practices and compliance requirements.",
        },
        {
          question: "What happens if one of our systems changes or updates?",
          answer:
            "We build resilient integrations that can adapt to system changes. We also provide ongoing monitoring and maintenance to quickly address any integration issues that arise from system updates.",
        },
        {
          question: "How long does a typical integration project take?",
          answer:
            "Timeline varies based on complexity, but most integrations are completed within 8-16 weeks. Simple integrations can be done in 4-6 weeks, while complex enterprise integrations may take 3-6 months.",
        },
      ]}
      relatedServices={[
        {
          name: "Workflow Automation",
          slug: "workflow-automation",
          description:
            "Create automated workflows that span multiple integrated systems",
        },
        {
          name: "Data Analysis",
          slug: "../intelligence/predictive-analytics",
          description:
            "Analyse data from all integrated systems for business insights",
        },
        {
          name: "Task Management",
          slug: "task-management",
          description:
            "Manage tasks across all integrated platforms efficiently",
        },
      ]}
    />
  );
}
