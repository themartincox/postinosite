import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Globe, FileText, Users, BarChart3, TrendingUp, Search, Settings, Shield } from "lucide-react"

export default function WordPressDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="WordPress Development"
      serviceSlug="wordpress-development"
      categoryName="Website Design & Development"
      categorySlug="website-design-development"
      parentService="growth-marketing"

      heroTitle="Professional WordPress Development for Business Growth"
      heroDescription="Create powerful, content-rich WordPress websites that are easy to manage and optimised for search engines. Our WordPress expertise delivers professional business websites that grow with your company and engage your audience effectively."
      heroColor="coral-red"

      serviceOverview="Our WordPress Development service creates professional business websites that balance functionality, ease of use, and performance. We specialise in custom theme development, plugin creation, and WordPress optimisation that makes content management simple whilst delivering exceptional user experiences and search engine performance."

      keyBenefits={[
        "Achieve 89% improvement in content management efficiency with intuitive interfaces",
        "Increase organic search visibility with WordPress SEO optimisation",
        "Reduce ongoing maintenance costs with reliable, secure implementations",
        "Scale content operations with powerful publishing and workflow tools",
        "Integrate seamlessly with marketing tools and business systems",
        "Benefit from WordPress's flexibility and extensive ecosystem"
      ]}

      serviceFeatures={[
        {
          title: "Custom Theme Development",
          description: "Bespoke WordPress themes designed for your brand and business objectives",
          icon: Globe
        },
        {
          title: "Content Management Optimisation",
          description: "Intuitive admin interfaces that make content creation and management effortless",
          icon: FileText
        },
        {
          title: "Plugin Development & Integration",
          description: "Custom functionality through strategic plugin development and integration",
          icon: Settings
        },
        {
          title: "SEO & Performance Optimisation",
          description: "Technical optimisation for search engines and fast loading speeds",
          icon: Search
        },
        {
          title: "Security & Maintenance",
          description: "Robust security implementation and ongoing maintenance protocols",
          icon: Shield
        },
        {
          title: "Multi-User Management",
          description: "Advanced user roles and permissions for team collaboration",
          icon: Users
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Content Strategy & Planning",
          description: "Analyse content needs and plan site architecture for optimal user experience"
        },
        {
          step: "02",
          title: "Custom Theme & Functionality",
          description: "Develop custom themes and implement required business functionality"
        },
        {
          step: "03",
          title: "Optimisation & Integration",
          description: "Optimise for performance, SEO, and integrate with business tools"
        },
        {
          step: "04",
          title: "Training & Launch",
          description: "Provide team training and launch with ongoing support systems"
        }
      ]}

      resultMetrics={[
        {
          metric: "Content Efficiency",
          value: "89%",
          description: "Improvement in content management speed"
        },
        {
          metric: "SEO Performance",
          value: "167%",
          description: "Increase in organic search visibility"
        },
        {
          metric: "Site Performance",
          value: "78%",
          description: "Improvement in loading speeds"
        }
      ]}

      caseStudy={{
        company: "Professional Consulting Partners",
        industry: "Business Consulting",
        challenge: "Needed a content-rich website that team members could easily update whilst maintaining professional appearance and SEO performance for thought leadership content.",
        result: "Custom WordPress development with optimised content workflows resulted in 234% increase in blog engagement, 78% more content published, and 156% improvement in lead generation.",
        metric: "234% Content Engagement"
      }}

      investmentInfo={{
        description: "WordPress development provides excellent value for content-rich business websites. Investment varies based on design complexity and custom functionality requirements.",
        startingFrom: "£3,500",
        consultationPrice: "Free WordPress consultation"
      }}

      faqs={[
        {
          question: "Why choose custom WordPress development over standard themes?",
          answer: "Custom development ensures your website perfectly matches your brand, includes functionality specific to your business needs, and provides better performance and security than generic themes."
        },
        {
          question: "How do you ensure WordPress sites are secure?",
          answer: "We implement comprehensive security measures including regular updates, security plugins, secure hosting, user access controls, and ongoing monitoring to prevent vulnerabilities."
        },
        {
          question: "Can team members easily update content without technical knowledge?",
          answer: "Absolutely. We create intuitive admin interfaces and provide training so your team can easily add and edit content, images, and other website elements without technical expertise."
        },
        {
          question: "Do you provide ongoing WordPress maintenance?",
          answer: "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, backups, content support, and technical assistance to keep your site running optimally."
        },
        {
          question: "Can you integrate WordPress with our business systems?",
          answer: "Yes, WordPress has excellent integration capabilities. We can connect your website with CRM systems, email marketing platforms, analytics tools, and other business applications."
        }
      ]}

      relatedServices={[
        {
          name: "Content Strategy & Creation",
          slug: "../../../inbound/content-strategy-creation",
          description: "Strategic content planning and creation for your WordPress site"
        },
        {
          name: "SEO Strategy & Implementation",
          slug: "../../../inbound/seo",
          description: "Comprehensive SEO optimisation for WordPress websites"
        },
        {
          name: "Website Maintenance & Support",
          slug: "../website-maintenance",
          description: "Ongoing maintenance and support for WordPress websites"
        }
      ]}
    />
  )
}
