import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Mail, Target, BarChart3, TrendingUp, Users, Zap, Settings, Brain } from "lucide-react"

export default function EmailMarketingAutomationPage() {
  return (
    <ServicePageTemplate
      serviceName="Email Marketing Automation"
      serviceSlug="email-marketing-automation"
      categoryName="Inbound Marketing"
      categorySlug="inbound"
      parentService="growth-marketing"

      heroTitle="Email Automation That Nurtures Prospects Into Customers"
      heroDescription="Transform your email marketing from sporadic newsletters into a sophisticated nurturing machine. Our email automation systems guide prospects through personalised journeys, building trust and driving conversions whilst you focus on growing your business."
      heroColor="forest-green"

      serviceOverview="Our Email Marketing Automation service creates intelligent email ecosystems that work around the clock to nurture your prospects and customers. We design sophisticated sequences that deliver the right message at the right time, personalised to each recipient's behaviour, interests, and stage in the buyer's journey. The result is higher engagement, faster sales cycles, and increased customer lifetime value."

      keyBenefits={[
        "Reduce sales cycle length by 67% through automated prospect nurturing",
        "Increase email engagement rates by 156% with personalised messaging",
        "Generate 24/7 lead nurturing without manual intervention",
        "Improve customer retention through automated onboarding and education",
        "Scale personal communication to hundreds or thousands of prospects",
        "Track detailed analytics to optimise every aspect of your email strategy"
      ]}

      serviceFeatures={[
        {
          title: "Email Strategy & Planning",
          description: "Comprehensive email marketing strategy aligned with business objectives",
          icon: Target
        },
        {
          title: "Automated Drip Campaigns",
          description: "Sophisticated email sequences that nurture prospects through the buyer's journey",
          icon: Zap
        },
        {
          title: "Behavioural Triggers",
          description: "Smart automation based on website behaviour, email engagement, and purchase history",
          icon: Brain
        },
        {
          title: "List Segmentation",
          description: "Advanced segmentation for personalised messaging and improved relevance",
          icon: Users
        },
        {
          title: "Performance Analytics",
          description: "Detailed tracking and optimisation based on engagement and conversion data",
          icon: BarChart3
        },
        {
          title: "CRM Integration",
          description: "Seamless integration with your CRM and sales processes",
          icon: Settings
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Email Audit & Strategy",
          description: "Analyse current email performance and develop comprehensive automation strategy"
        },
        {
          step: "02",
          title: "Sequence Design & Setup",
          description: "Create automated email sequences and set up behavioural triggers"
        },
        {
          step: "03",
          title: "Testing & Launch",
          description: "A/B test email elements and launch automated campaigns"
        },
        {
          step: "04",
          title: "Optimisation & Scaling",
          description: "Monitor performance and continuously optimise for better results"
        }
      ]}

      resultMetrics={[
        {
          metric: "Sales Cycle Reduction",
          value: "67%",
          description: "Faster prospect-to-customer conversion"
        },
        {
          metric: "Email Engagement",
          value: "156%",
          description: "Improvement in open and click rates"
        },
        {
          metric: "Lead-to-Customer Rate",
          value: "89%",
          description: "Increase in conversion rates"
        }
      ]}

      caseStudy={{
        company: "TechFlow Solutions",
        industry: "Software Development",
        challenge: "High-quality leads were going cold between initial contact and sales conversations, resulting in lost opportunities and frustrated sales team.",
        result: "Implemented sophisticated email nurturing sequences that resulted in 78% more qualified prospects reaching sales conversations and 45% higher close rates.",
        metric: "78% More Qualified Prospects"
      }}

      investmentInfo={{
        description: "Email marketing automation investment depends on list size and complexity of sequences. Most businesses see ROI within 2-3 months through improved conversion rates.",
        startingFrom: "£1,200/month",
        consultationPrice: "£50 strategy session"
      }}

      faqs={[
        {
          question: "How do you avoid emails going to spam folders?",
          answer: "We follow email deliverability best practices including proper authentication, list hygiene, engagement monitoring, and gradual sending volume increases. We also help you maintain good sender reputation through quality content and list management."
        },
        {
          question: "Can you integrate with our existing CRM system?",
          answer: "Yes, we integrate with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and many others. This ensures seamless data flow between your email marketing and sales processes."
        },
        {
          question: "How do you personalise emails at scale?",
          answer: "We use advanced segmentation, dynamic content, and behavioural triggers to personalise emails based on demographics, interests, behaviour, and purchase history. This creates relevant experiences for each recipient."
        },
        {
          question: "What metrics do you track to measure success?",
          answer: "We track open rates, click-through rates, conversion rates, unsubscribe rates, and most importantly, revenue attribution. We also monitor email deliverability and list growth metrics."
        }
      ]}

      relatedServices={[
        {
          name: "Content Strategy & Creation",
          slug: "content-strategy-creation",
          description: "Create valuable content to feed your email marketing campaigns"
        },
        {
          name: "CRM Automation",
          slug: "../../ai-automation/intelligence/crm-automation",
          description: "Integrate email automation with comprehensive CRM systems"
        },
        {
          name: "Analytics & Reporting",
          slug: "../../strategy/analytics-reporting",
          description: "Track and analyse email performance alongside other marketing channels"
        }
      ]}
    />
  )
}
