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

      heroTitle="High-Converting Websites That Drive Business Growth"
      heroDescription="Create stunning, performance-optimised websites that convert visitors into customers. Our strategic approach combines beautiful design with technical excellence to build websites that not only look exceptional but deliver measurable business results."
      heroColor="coral-red"

      serviceOverview="Our Website Design & Development service creates conversion-focused websites that serve as powerful business growth engines. We combine award-winning design with advanced technical implementation, ensuring your website not only impresses visitors but guides them towards becoming customers. Every element is strategically crafted to support your business objectives whilst providing exceptional user experiences."

      keyBenefits={[
        "Achieve 127% improvement in website conversion rates through strategic design",
        "Increase organic search visibility with SEO-optimised site architecture",
        "Provide exceptional user experiences that reduce bounce rates by 45%",
        "Build scalable platforms that grow with your business requirements",
        "Ensure mobile-first design that captures smartphone and tablet traffic",
        "Create professional credibility that supports premium market positioning"
      ]}

      serviceFeatures={[
        {
          title: "Custom Website Design",
          description: "Bespoke designs tailored to your brand and conversion objectives",
          icon: Globe
        },
        {
          title: "Mobile-First Development",
          description: "Responsive designs optimised for all devices and screen sizes",
          icon: Smartphone
        },
        {
          title: "SEO-Optimised Architecture",
          description: "Technical foundation built for search engine visibility and performance",
          icon: Search
        },
        {
          title: "Conversion Rate Optimisation",
          description: "Strategic design elements that guide visitors towards desired actions",
          icon: Target
        },
        {
          title: "Performance Optimisation",
          description: "Fast-loading websites that provide exceptional user experiences",
          icon: Zap
        },
        {
          title: "Content Management Systems",
          description: "Easy-to-use CMS platforms for ongoing content management",
          icon: Users
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Discovery & Strategy",
          description: "Understand business objectives, user needs, and technical requirements"
        },
        {
          step: "02",
          title: "Design & Prototyping",
          description: "Create wireframes, designs, and interactive prototypes for approval"
        },
        {
          step: "03",
          title: "Development & Testing",
          description: "Build responsive website with comprehensive testing and optimisation"
        },
        {
          step: "04",
          title: "Launch & Optimisation",
          description: "Deploy website and provide ongoing support and performance monitoring"
        }
      ]}

      resultMetrics={[
        {
          metric: "Conversion Rate Improvement",
          value: "127%",
          description: "Average increase in website conversions"
        },
        {
          metric: "Page Load Speed",
          value: "3x",
          description: "Faster loading times vs previous sites"
        },
        {
          metric: "Mobile Performance",
          value: "95%",
          description: "Google PageSpeed score achievement"
        }
      ]}

      caseStudy={{
        company: "Precision Engineering Solutions",
        industry: "Manufacturing",
        challenge: "Outdated website was failing to generate leads and poorly representing their advanced engineering capabilities to potential clients.",
        result: "New conversion-optimised website resulted in 167% increase in qualified enquiries, 89% improvement in time on site, and 245% more contact form submissions within 3 months.",
        metric: "167% Lead Increase"
      }}

      investmentInfo={{
        description: "Website design and development investment varies based on complexity, functionality, and custom requirements. Most clients see improved lead generation within 30 days of launch.",
        startingFrom: "£8,500",
        consultationPrice: "£50 website strategy session"
      }}

      faqs={[
        {
          question: "How long does website development take?",
          answer: "Typical timeline is 8-12 weeks for custom websites, depending on complexity and scope. This includes discovery, design, development, testing, and launch phases with regular client reviews."
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: "Absolutely. All our websites use mobile-first design principles, ensuring optimal performance and user experience across all devices. We test thoroughly on various screen sizes and devices."
        },
        {
          question: "Do you provide ongoing website maintenance?",
          answer: "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support to keep your website running optimally."
        },
        {
          question: "Can you help with website content and copywriting?",
          answer: "Certainly. Our content strategy team can create compelling, SEO-optimised website copy that communicates your value proposition effectively and drives conversions."
        }
      ]}

      relatedServices={[
        {
          name: "Brand Identity Development",
          slug: "brand-identity-development",
          description: "Ensure your website perfectly reflects your brand identity and positioning"
        },
        {
          name: "SEO Strategy & Implementation",
          slug: "../../inbound/seo",
          description: "Optimise your new website for maximum search engine visibility"
        },
        {
          name: "Conversion Funnels",
          slug: "conversion-funnels",
          description: "Design strategic conversion funnels that maximise website performance"
        }
      ]}
    />
  )
}
