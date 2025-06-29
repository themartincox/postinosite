import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Award,
  BarChart3,
  Clock,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function TaskManagementPage() {
  return (
    <ServicePageTemplate
      serviceName="Task Management"
      serviceSlug="task-management"
      categoryName="Business Process Automation"
      categorySlug="process"
      parentService="ai-automation"
      heroTitle="AI-Powered Task Management That Maximises Team Productivity"
      heroDescription="Transform how your team works with intelligent task prioritisation, automated assignment, and predictive workload management. Our AI-driven task management systems ensure the right work gets done by the right people at the right time."
      heroColor="coral-red"
      serviceOverview="Our Task Management service implements intelligent systems that automatically prioritise tasks, distribute workloads, and optimise team productivity. Using machine learning algorithms, we analyse task complexity, team capacity, and business priorities to create dynamic task management that adapts to changing conditions and maximises overall efficiency."
      keyBenefits={[
        "Increase team productivity by 78% through intelligent task prioritisation",
        "Automatically balance workloads across team members based on capacity and skills",
        "Reduce task completion times through optimised assignment and scheduling",
        "Eliminate over-commitment and under-utilisation across your team",
        "Provide real-time visibility into team performance and bottlenecks",
        "Create predictive insights for better resource planning and forecasting",
      ]}
      serviceFeatures={[
        {
          title: "Intelligent Prioritisation",
          description:
            "AI algorithms that dynamically prioritise tasks based on business impact and urgency",
          icon: Target,
        },
        {
          title: "Smart Task Assignment",
          description:
            "Automated assignment based on skills, capacity, and performance history",
          icon: Users,
        },
        {
          title: "Workload Optimisation",
          description:
            "Balanced distribution of work to maximise team efficiency and prevent burnout",
          icon: BarChart3,
        },
        {
          title: "Performance Analytics",
          description:
            "Detailed insights into team performance, bottlenecks, and productivity trends",
          icon: TrendingUp,
        },
        {
          title: "Predictive Planning",
          description:
            "Forecast capacity needs and project timelines using historical data",
          icon: Clock,
        },
        {
          title: "Integration & Automation",
          description:
            "Seamless integration with existing project management and communication tools",
          icon: Settings,
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Team Analysis",
          description:
            "Analyse current task management practices and team dynamics",
        },
        {
          step: "02",
          title: "System Design",
          description:
            "Design intelligent task management system tailored to your workflow",
        },
        {
          step: "03",
          title: "Implementation & Training",
          description:
            "Deploy system and train team on new intelligent workflows",
        },
        {
          step: "04",
          title: "Optimisation & Scaling",
          description:
            "Continuously improve system performance and expand capabilities",
        },
      ]}
      resultMetrics={[
        {
          metric: "Team Productivity",
          value: "78%",
          description: "Improvement in overall team efficiency",
        },
        {
          metric: "Task Completion Speed",
          value: "45%",
          description: "Faster average task completion times",
        },
        {
          metric: "Workload Balance",
          value: "89%",
          description: "Improvement in workload distribution",
        },
      ]}
      caseStudy={{
        company: "Digital Agency Partners",
        industry: "Creative Services",
        challenge:
          "Project teams were constantly overwhelmed with unclear priorities, leading to missed deadlines and client dissatisfaction.",
        result:
          "AI task management system reduced project delays by 67%, improved client satisfaction scores by 84%, and increased team productivity by 56% within 3 months.",
        metric: "67% Fewer Delays",
      }}
      investmentInfo={{
        description:
          "Task management system investment depends on team size and complexity of workflows. Most implementations show immediate productivity improvements.",
        startingFrom: "£8,500",
        consultationPrice: "Free productivity assessment",
      }}
      faqs={[
        {
          question: "How does AI determine task priorities?",
          answer:
            "Our AI considers multiple factors including business impact, deadlines, dependencies, client importance, and resource availability. The system learns from outcomes to continuously improve prioritisation accuracy.",
        },
        {
          question:
            "Can the system integrate with our existing project management tools?",
          answer:
            "Yes, we integrate with all major project management platforms including Asana, Monday.com, Jira, Trello, and custom systems. The AI layer works alongside your existing tools.",
        },
        {
          question:
            "How does the system handle different skill levels and specialities?",
          answer:
            "The AI maps team member skills, experience levels, and specialities to ensure tasks are assigned to the most suitable person. It also considers development opportunities and cross-training needs.",
        },
        {
          question: "What happens if priorities change suddenly?",
          answer:
            "The system dynamically re-prioritises and reassigns tasks based on new information. It can instantly reorganise workloads while considering the impact on ongoing work and deadlines.",
        },
      ]}
      relatedServices={[
        {
          name: "Workflow Automation",
          slug: "workflow-automation",
          description:
            "Automate entire workflows that include intelligent task management",
        },
        {
          name: "Performance Analytics",
          slug: "../intelligence/predictive-analytics",
          description:
            "Deep insights into team performance and productivity patterns",
        },
        {
          name: "System Integration",
          slug: "system-integration",
          description: "Connect task management with all your business systems",
        },
      ]}
    />
  );
}
