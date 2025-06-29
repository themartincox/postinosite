import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Globe, Target, BarChart3, TrendingUp, Zap, Users, Search, Smartphone } from "lucide-react"

export default function WebsiteDesignDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="Website Design & Development"
      serviceSlug="website-design-development"
      categoryName="Branding & Creative"
      categorySlug="branding"
      parentService="growth-marketing"

      heroTitle="Professional Website Development Across All Platforms"
      heroDescription="From custom Next.js applications to Shopify stores and WordPress sites, we build high-converting websites tailored to your business needs and budget. Our platform expertise ensures you get the right solution for your specific requirements."
      heroColor="coral-red"

      serviceOverview="Our comprehensive Website Development service covers the full spectrum of web solutions - from budget-friendly WordPress sites to enterprise-level custom applications. We specialise in Next.js custom development, Shopify e-commerce solutions, WordPress business sites, and cutting-edge headless commerce architectures. Every project is strategically designed for conversion optimisation and search engine performance."

      keyBenefits={[
        "Choose the perfect platform for your business needs and budget",
        "Achieve 127% improvement in conversion rates through strategic design",
        "Get expert guidance on platform selection and technical architecture",
        "Benefit from our expertise across all major web development platforms",
        "Ensure scalable solutions that grow with your business requirements",
        "Receive ongoing support and optimisation across all platforms"
      ]}

      serviceFeatures={[
        {
          title: "Custom Next.js Development",
          description: "Bespoke web applications with unlimited functionality and performance",
          icon: Zap
        },
        {
          title: "Shopify E-commerce Solutions",
          description: "Custom Shopify themes and functionality for online stores",
          icon: Target
        },
        {
          title: "WordPress Business Sites",
          description: "Custom themes and functionality for content-rich business websites",
          icon: Globe
        },
        {
          title: "Headless Commerce Architecture",
          description: "Enterprise-level separated frontend and backend solutions",
          icon: BarChart3
        },
        {
          title: "Platform Migration Services",
          description: "Seamless migration between platforms with improved performance",
          icon: TrendingUp
        },
        {
          title: "Performance Optimisation",
          description: "Speed and conversion optimisation across all platforms",
          icon: Smartphone
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Platform Strategy & Selection",
          description: "Analyse requirements and recommend the optimal platform and approach"
        },
        {
          step: "02",
          title: "Design & Architecture Planning",
          description: "Create designs and technical architecture tailored to chosen platform"
        },
        {
          step: "03",
          title: "Development & Integration",
          description: "Build website with platform-specific best practices and integrations"
        },
        {
          step: "04",
          title: "Launch & Optimisation",
          description: "Deploy with comprehensive testing and ongoing performance monitoring"
        }
      ]}

      resultMetrics={[
        {
          metric: "Conversion Rate Improvement",
          value: "127%",
          description: "Average increase across all platforms"
        },
        {
          metric: "Platform Expertise",
          value: "4+",
          description: "Major platforms we specialise in"
        },
        {
          metric: "Project Success Rate",
          value: "98%",
          description: "On-time, on-budget delivery rate"
        }
      ]}

      caseStudy={{
        company: "Multi-Platform Portfolio",
        industry: "Various Industries",
        challenge: "Clients needed different web solutions ranging from simple business sites to complex e-commerce platforms, requiring platform expertise.",
        result: "Delivered 47 successful projects across all platforms with 127% average conversion improvement and 98% client satisfaction rate.",
        metric: "47 Successful Projects"
      }}

      investmentInfo={{
        description: "Website development investment varies significantly by platform and complexity. We offer solutions from budget-friendly WordPress sites to enterprise custom applications.",
        startingFrom: "£2,500 - £50,000+",
        consultationPrice: "Free platform consultation"
      }}

      faqs={[
        {
          question: "How do I choose the right platform for my business?",
          answer: "Platform selection depends on your business type, budget, functionality requirements, and growth plans. We provide free consultations to recommend the optimal solution based on your specific needs."
        },
        {
          question: "Can you migrate my existing website to a different platform?",
          answer: "Yes, we specialise in platform migrations whilst preserving SEO rankings and improving performance. We handle everything from content migration to design improvements."
        },
        {
          question: "Do you provide ongoing support for all platforms?",
          answer: "Absolutely. We offer comprehensive maintenance and support packages for all platforms we work with, including security updates, performance monitoring, and feature enhancements."
        },
        {
          question: "What's the difference between custom development and platform-based solutions?",
          answer: "Custom development offers unlimited functionality and unique features but requires higher investment. Platform-based solutions provide faster deployment and lower costs whilst leveraging proven frameworks."
        }
      ]}

      relatedServices={[
        {
          name: "Next.js Custom Development",
          slug: "nextjs-development",
          description: "Premium custom web applications with unlimited possibilities"
        },
        {
          name: "Shopify Development",
          slug: "shopify-development",
          description: "Custom e-commerce solutions for online retail businesses"
        },
        {
          name: "WordPress Development",
          slug: "wordpress-development",
          description: "Content-rich business websites with powerful CMS capabilities"
        },
        {
          name: "Headless Commerce Solutions",
          slug: "headless-commerce",
          description: "Enterprise-level separated frontend and backend architecture"
        }
      ]}
    />
  )
}
