import ServicePageTemplate from "@/components/ServicePageTemplate"
import { Share2, Target, BarChart3, TrendingUp, Users, Eye, MessageSquare, Heart } from "lucide-react"

export default function SocialMediaManagementPage() {
  return (
    <ServicePageTemplate
      serviceName="Social Media Management"
      serviceSlug="social-media-management"
      categoryName="Inbound Marketing"
      categorySlug="inbound"
      parentService="growth-marketing"

      heroTitle="Social Media That Builds Communities & Drives Business Growth"
      heroDescription="Transform your social media presence from random posts into a strategic community-building and lead generation engine. Our social media management creates engaging content, builds meaningful relationships, and drives qualified traffic to your business."
      heroColor="forest-green"

      serviceOverview="Our Social Media Management service goes beyond posting content. We build authentic communities around your brand, engage in meaningful conversations with prospects, and create social proof that supports your broader marketing objectives. Every post, comment, and interaction is strategically designed to build relationships that translate into business opportunities."

      keyBenefits={[
        "Generate 195% more qualified social media leads through strategic engagement",
        "Build authentic brand communities that advocate for your business",
        "Increase brand awareness and recognition across target demographics",
        "Create social proof that supports sales and marketing efforts",
        "Drive consistent traffic to your website and conversion points",
        "Monitor brand reputation and engage with customer feedback in real-time"
      ]}

      serviceFeatures={[
        {
          title: "Social Media Strategy",
          description: "Comprehensive strategy aligned with business goals and audience preferences",
          icon: Target
        },
        {
          title: "Content Creation & Curation",
          description: "Engaging visual and written content tailored to each platform",
          icon: Eye
        },
        {
          title: "Community Management",
          description: "Active engagement, relationship building, and customer service",
          icon: Users
        },
        {
          title: "Social Listening",
          description: "Monitor brand mentions, industry conversations, and competitor activity",
          icon: MessageSquare
        },
        {
          title: "Paid Social Advertising",
          description: "Strategic paid campaigns to amplify reach and drive specific outcomes",
          icon: TrendingUp
        },
        {
          title: "Performance Analytics",
          description: "Detailed reporting on engagement, reach, and business impact",
          icon: BarChart3
        }
      ]}

      processSteps={[
        {
          step: "01",
          title: "Social Audit & Strategy",
          description: "Analyse current social presence and develop platform-specific strategies"
        },
        {
          step: "02",
          title: "Content Planning & Creation",
          description: "Develop content calendar and create engaging, brand-aligned content"
        },
        {
          step: "03",
          title: "Community Building",
          description: "Actively engage with audience and build authentic relationships"
        },
        {
          step: "04",
          title: "Performance Optimisation",
          description: "Analyse results and optimise strategy for improved engagement and conversions"
        }
      ]}

      resultMetrics={[
        {
          metric: "Qualified Lead Increase",
          value: "195%",
          description: "More leads from social media channels"
        },
        {
          metric: "Engagement Growth",
          value: "267%",
          description: "Improvement in meaningful interactions"
        },
        {
          metric: "Brand Awareness",
          value: "134%",
          description: "Increase in brand recognition and reach"
        }
      ]}

      caseStudy={{
        company: "Artisan Home Goods",
        industry: "E-commerce",
        challenge: "Low social media engagement and difficulty converting followers into customers despite having a visually appealing product range.",
        result: "Developed community-focused social strategy resulting in 234% increase in engagement, 156% more website traffic from social, and 89% increase in social-driven sales.",
        metric: "234% Engagement Increase"
      }}

      investmentInfo={{
        description: "Social media management investment varies based on platform coverage and content requirements. Most businesses see improved engagement and lead generation within 2-3 months.",
        startingFrom: "£1,500/month",
        consultationPrice: "£50 strategy session"
      }}

      faqs={[
        {
          question: "Which social media platforms should we focus on?",
          answer: "Platform selection depends on your target audience demographics and business objectives. We conduct audience research to identify where your prospects are most active and engaged."
        },
        {
          question: "How often should we post on social media?",
          answer: "Posting frequency varies by platform and audience preferences. Generally, we recommend daily posting on platforms like Instagram and LinkedIn, with multiple daily posts on Twitter, and 3-5 times per week on Facebook."
        },
        {
          question: "Do you handle customer service inquiries on social media?",
          answer: "Yes, we manage community engagement including customer service inquiries, ensuring timely and brand-appropriate responses. We can escalate complex issues to your internal team when necessary."
        },
        {
          question: "How do you measure social media ROI?",
          answer: "We track engagement metrics, website traffic from social platforms, lead generation, and when possible, revenue attribution. We also monitor brand sentiment and awareness metrics to show broader business impact."
        }
      ]}

      relatedServices={[
        {
          name: "Content Strategy & Creation",
          slug: "content-strategy-creation",
          description: "Create valuable content to share across social media platforms"
        },
        {
          name: "Paid Social Advertising",
          slug: "../../strategy/marketing-planning",
          description: "Amplify organic social efforts with strategic paid campaigns"
        },
        {
          name: "Brand Identity Development",
          slug: "../../branding/brand-identity-development",
          description: "Ensure consistent brand presentation across all social platforms"
        }
      ]}
    />
  )
}
