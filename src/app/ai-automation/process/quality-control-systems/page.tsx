import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  Eye,
  Settings,
  Shield,
  Target,
} from "lucide-react";

export default function QualityControlSystemsPage() {
  return (
    <ServicePageTemplate
      serviceName="Quality Control Systems"
      serviceSlug="quality-control-systems"
      categoryName="Process Automation"
      categorySlug="process"
      parentService="ai-automation"
      heroTitle="AI-Powered Quality Control That Ensures Excellence"
      heroDescription="Implement intelligent quality control systems that automatically monitor, validate, and maintain standards across your operations, reducing defects by up to 90% whilst ensuring consistent quality delivery."
      heroColor="coral-red"
      serviceOverview="Our Quality Control Systems service revolutionises how you maintain standards by deploying AI-powered monitoring and validation tools that work continuously to ensure quality excellence. From automated testing protocols to real-time compliance monitoring, we create systems that catch issues before they impact customers."
      keyBenefits={[
        "Reduce product defects and service issues by up to 90%",
        "Achieve consistent quality standards across all operations",
        "Automate compliance monitoring and regulatory reporting",
        "Identify quality issues before they reach customers",
        "Create comprehensive quality documentation and audit trails",
        "Scale quality assurance without proportional staffing increases",
      ]}
      serviceFeatures={[
        {
          title: "Automated Quality Monitoring",
          description:
            "Continuous monitoring systems that track quality metrics in real-time",
          icon: Eye,
        },
        {
          title: "Intelligent Testing Protocols",
          description:
            "AI-driven testing frameworks that adapt and improve over time",
          icon: Settings,
        },
        {
          title: "Compliance Automation",
          description:
            "Automated compliance checking and regulatory reporting systems",
          icon: Shield,
        },
        {
          title: "Defect Prevention Systems",
          description:
            "Predictive quality systems that prevent issues before they occur",
          icon: AlertTriangle,
        },
        {
          title: "Quality Analytics Dashboard",
          description:
            "Real-time quality metrics and trend analysis for informed decisions",
          icon: BarChart3,
        },
        {
          title: "Continuous Improvement Engine",
          description:
            "Systems that learn and optimise quality processes automatically",
          icon: Target,
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Quality Assessment",
          description:
            "Comprehensive analysis of current quality processes and standards",
        },
        {
          step: "02",
          title: "System Design",
          description:
            "Custom quality control system architecture tailored to your needs",
        },
        {
          step: "03",
          title: "Implementation",
          description: "Deploy automated monitoring and validation systems",
        },
        {
          step: "04",
          title: "Optimisation",
          description:
            "Continuous monitoring and improvement of quality control effectiveness",
        },
      ]}
      resultMetrics={[
        {
          metric: "Defect Reduction",
          value: "90%",
          description:
            "Average reduction in product defects and service issues",
        },
        {
          metric: "Quality Consistency",
          value: "98%",
          description:
            "Improvement in quality standard consistency across operations",
        },
        {
          metric: "Compliance Efficiency",
          value: "85%",
          description: "Reduction in compliance monitoring and reporting time",
        },
      ]}
      caseStudy={{
        company: "Manufacturing Excellence Ltd",
        industry: "Precision Manufacturing",
        challenge:
          "High defect rates and inconsistent quality standards across multiple production lines were causing customer complaints and regulatory issues.",
        result:
          "Implemented AI-powered quality control systems with real-time monitoring and automated testing protocols. Achieved 92% reduction in defects and 100% compliance with industry standards.",
        metric: "92% reduction in product defects within 4 months",
      }}
      investmentInfo={{
        description:
          "Quality Control Systems investment varies based on complexity and integration requirements. Most implementations achieve ROI within 4-8 months through error reduction and compliance efficiency.",
        startingFrom: "£12,000",
        consultationPrice: "Free quality assessment",
      }}
      faqs={[
        {
          question: "How quickly can quality control systems be implemented?",
          answer:
            "Implementation typically takes 6-12 weeks depending on complexity. We start with critical quality points for immediate impact whilst building comprehensive systems.",
        },
        {
          question:
            "Will these systems work with our existing quality processes?",
          answer:
            "Yes, our systems are designed to integrate with existing processes and standards, enhancing rather than replacing your current quality framework.",
        },
        {
          question:
            "How do you ensure the systems maintain accuracy over time?",
          answer:
            "Our systems include continuous learning capabilities and regular calibration processes to maintain and improve accuracy as they operate.",
        },
        {
          question:
            "Can the systems handle industry-specific compliance requirements?",
          answer:
            "Absolutely. We configure all quality control systems to meet your specific industry regulations and compliance standards from the outset.",
        },
      ]}
      relatedServices={[
        {
          name: "Business Process Automation",
          slug: "business-process-automation",
          description: "Comprehensive automation of core business workflows",
        },
        {
          name: "Workflow Automation",
          slug: "workflow-automation",
          description:
            "Streamlined workflows that improve operational efficiency",
        },
        {
          name: "Predictive Analytics",
          slug: "predictive-analytics",
          description: "Advanced analytics for forecasting and decision making",
        },
      ]}
    />
  );
}
