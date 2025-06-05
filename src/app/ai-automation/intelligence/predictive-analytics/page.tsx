import ServicePageTemplate from "@/components/ServicePageTemplate"
import { BarChart3, TrendingUp, Target, Zap, Brain, Settings } from "lucide-react"

export default function PredictiveAnalyticsPage() {
  return (
    <ServicePageTemplate
      serviceName="Predictive Analytics Solutions"
      serviceSlug="predictive-analytics"
      categoryName="Intelligence"
      categorySlug="intelligence"
      parentService="ai-automation"
      heroTitle="AI-Powered Predictive Analytics That Transform Business Intelligence"
      heroDescription="Harness the power of advanced machine learning to predict future trends, optimise business decisions, and stay ahead of market changes with intelligent forecasting solutions."
      heroColor="midnight-blue"
      serviceOverview="Our predictive analytics solutions leverage cutting-edge AI and machine learning algorithms to transform your historical data into actionable future insights. We build custom prediction models that forecast customer behaviour, market trends, and business outcomes, enabling proactive decision-making that drives competitive advantage and operational excellence."
      keyBenefits={[
        "Improve forecast accuracy by up to 340% over traditional methods",
        "Reduce operational costs through predictive maintenance and optimisation",
        "Increase revenue with precision targeting and demand forecasting",
        "Mitigate risks through early warning systems and trend analysis",
        "Optimise inventory and resource allocation with demand predictions",
        "Enhance customer experience with behavioural predictions"
      ]}
      serviceFeatures={[
        {
          title: "Custom Prediction Models",
          description: "Bespoke machine learning models trained on your specific business data and objectives",
          icon: Brain
        },
        {
          title: "Real-Time Analytics Dashboard",
          description: "Interactive dashboards providing live insights and predictions for immediate decision-making",
          icon: BarChart3
        },
        {
          title: "Demand Forecasting",
          description: "Accurate prediction of customer demand, seasonal trends, and market fluctuations",
          icon: TrendingUp
        },
        {
          title: "Customer Behaviour Prediction",
          description: "Advanced analytics to predict customer actions, preferences, and lifetime value",
          icon: Target
        },
        {
          title: "Automated Alert Systems",
          description: "Intelligent notifications for anomalies, opportunities, and critical business events",
          icon: Zap
        },
        {
          title: "Model Optimisation",
          description: "Continuous model refinement and improvement for enhanced accuracy and performance",
          icon: Settings
        }
      ]}
      processSteps={[
        {
          step: "01",
          title: "Data Assessment & Strategy",
          description: "We evaluate your data quality, identify prediction opportunities, and develop a strategic roadmap for implementing predictive analytics across your business."
        },
        {
          step: "02",
          title: "Model Development & Training",
          description: "Our data scientists build and train custom machine learning models using advanced algorithms tailored to your specific business requirements and data patterns."
        },
        {
          step: "03",
          title: "Integration & Deployment",
          description: "Seamless integration of prediction models into your existing systems with user-friendly dashboards and automated reporting capabilities."
        },
        {
          step: "04",
          title: "Monitoring & Refinement",
          description: "Continuous monitoring of model performance with regular updates and refinements to maintain optimal accuracy and adapt to changing business conditions."
        }
      ]}
      resultMetrics={[
        {
          metric: "Forecast Accuracy",
          value: "+340%",
          description: "Improvement in prediction accuracy over traditional methods"
        },
        {
          metric: "Operational Efficiency",
          value: "+220%",
          description: "Increase in operational efficiency through predictions"
        },
        {
          metric: "Revenue Impact",
          value: "+185%",
          description: "Revenue improvement through predictive insights"
        }
      ]}
      caseStudy={{
        company: "RetailMax Distribution",
        industry: "Retail & E-commerce",
        challenge: "Struggling with inventory management, experiencing frequent stockouts and overstock situations, leading to lost sales and increased holding costs across their 200+ product lines.",
        result: "AI-powered demand forecasting system reduced stockouts by 78%, decreased inventory holding costs by £1.2M annually, and improved customer satisfaction scores by 45% through better product availability.",
        metric: "£1.2M annual cost savings"
      }}
      investmentInfo={{
        description: "Enterprise-grade predictive analytics solutions that transform your data into competitive advantage. Investment varies based on data complexity, model sophistication, and integration requirements.",
        startingFrom: "£12,500",
        consultationPrice: "£650"
      }}
      faqs={[
        {
          question: "What types of business problems can predictive analytics solve?",
          answer: "Predictive analytics can address various challenges including demand forecasting, customer churn prediction, fraud detection, price optimisation, maintenance scheduling, risk assessment, and market trend analysis. We customise solutions based on your specific business objectives."
        },
        {
          question: "What data do you need to build effective prediction models?",
          answer: "We work with various data types including historical sales data, customer interactions, market data, operational metrics, and external factors. The minimum requirement is typically 2-3 years of relevant historical data, though we can work with smaller datasets using advanced techniques."
        },
        {
          question: "How accurate are the predictions, and how do you measure success?",
          answer: "Accuracy varies by use case and data quality, but our models typically achieve 85-95% accuracy. We use statistical measures like Mean Absolute Error (MAE), Root Mean Square Error (RMSE), and business-specific KPIs to validate and continuously improve model performance."
        },
        {
          question: "Can predictive analytics integrate with our existing business systems?",
          answer: "Yes, our solutions integrate seamlessly with popular business systems including ERP, CRM, BI tools, and custom applications. We provide APIs, automated data pipelines, and real-time dashboards that work within your existing technology ecosystem."
        }
      ]}
      relatedServices={[
        {
          name: "Business Process Automation",
          slug: "/ai-automation/process/business-process-automation",
          description: "Automate processes based on predictive insights"
        },
        {
          name: "Intelligent Chatbots",
          slug: "/ai-automation/custom-ai/intelligent-chatbots",
          description: "AI chatbots powered by predictive analytics"
        },
        {
          name: "Research & Market Analysis",
          slug: "/growth-marketing/strategy/research-market-analysis",
          description: "Traditional research enhanced with AI predictions"
        }
      ]}
    />
  )
}