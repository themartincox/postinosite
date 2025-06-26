import Navigation from "@/components/Navigation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ContactForm from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Search,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Globe,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export default function WebsiteAuditPage() {
  const auditCategories = [
    {
      category: "SEO Performance",
      icon: Search,
      checks: [
        "Keyword optimization analysis",
        "Meta tags and descriptions",
        "Header structure (H1-H6)",
        "Internal linking strategy",
        "Search ranking opportunities"
      ]
    },
    {
      category: "Technical Performance",
      icon: Zap,
      checks: [
        "Page loading speed analysis",
        "Mobile responsiveness check",
        "Core Web Vitals assessment",
        "Browser compatibility review",
        "JavaScript/CSS optimization"
      ]
    },
    {
      category: "User Experience",
      icon: Users,
      checks: [
        "Navigation structure analysis",
        "Call-to-action effectiveness",
        "Form usability review",
        "Content readability score",
        "Conversion path optimization"
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      checks: [
        "SSL certificate validation",
        "GDPR compliance check",
        "Privacy policy review",
        "Cookie consent implementation",
        "Data protection assessment"
      ]
    }
  ];

  const commonIssues = [
    {
      issue: "Slow Loading Speed",
      impact: "78% of users abandon sites that take >3 seconds to load",
      severity: "high"
    },
    {
      issue: "Poor Mobile Experience",
      impact: "60% of searches now happen on mobile devices",
      severity: "high"
    },
    {
      issue: "Missing Meta Descriptions",
      impact: "Reduces click-through rates from search results by 40%",
      severity: "medium"
    },
    {
      issue: "Weak Call-to-Actions",
      impact: "Can improve conversion rates by up to 300% when optimized",
      severity: "high"
    },
    {
      issue: "No Analytics Tracking",
      impact: "Impossible to measure ROI or optimize performance",
      severity: "medium"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6">
              Free Website Audit
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Discover What's Holding Your{" "}
              <span className="text-coral-red">Website Back</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Get a comprehensive 47-point audit revealing exactly why your website
              isn't converting visitors into customers, plus a prioritized action plan
              to fix every issue.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg font-heading">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-coral-red" />
                  <span>47-Point Analysis</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <Search className="h-5 w-5 mr-2 text-coral-red" />
                  <span>SEO & Performance Review</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Actionable Improvement Plan</span>
                </div>
              </div>
            </div>

            <p className="text-lg font-body opacity-90 mb-8">
              <strong>Completely free</strong> - no strings attached, no sales pressure
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Your Comprehensive Website Audit Includes
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We'll analyze every aspect of your website and provide detailed findings
              with specific recommendations for improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {auditCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-coral-red rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading text-midnight-blue">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.checks.map((check, checkIndex) => (
                      <li key={checkIndex} className="flex items-center font-body text-gray-600">
                        <CheckCircle className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                        {check}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Common Issues We Uncover
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              These are the most frequent problems we find that are costing businesses
              customers and revenue every day.
            </p>
          </div>

          <div className="space-y-6">
            {commonIssues.map((item, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <AlertTriangle
                          className={`h-5 w-5 mr-3 ${
                            item.severity === 'high' ? 'text-red-500' : 'text-yellow-500'
                          }`}
                        />
                        <h3 className="text-lg font-heading font-semibold text-midnight-blue">
                          {item.issue}
                        </h3>
                        <Badge
                          className={`ml-3 ${
                            item.severity === 'high'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {item.severity === 'high' ? 'High Impact' : 'Medium Impact'}
                        </Badge>
                      </div>
                      <p className="font-body text-gray-600">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Sample Audit Report
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Here's an example of what your detailed audit report will look like
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-midnight-blue to-forest-green text-white text-center">
                <CardTitle className="text-2xl font-heading">
                  Website Performance Score
                </CardTitle>
                <CardDescription className="text-white/90">
                  Overall website health assessment
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
                  <div>
                    <div className="text-3xl font-heading font-bold text-red-500 mb-2">
                      42/100
                    </div>
                    <p className="text-sm font-body text-gray-600">Overall Score</p>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-yellow-500 mb-2">
                      6.8s
                    </div>
                    <p className="text-sm font-body text-gray-600">Load Time</p>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-red-500 mb-2">
                      38%
                    </div>
                    <p className="text-sm font-body text-gray-600">Mobile Score</p>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-yellow-500 mb-2">
                      2.1%
                    </div>
                    <p className="text-sm font-body text-gray-600">Conversion Rate</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3" />
                      <span className="font-heading font-semibold text-midnight-blue">
                        Critical: Page Speed Issues
                      </span>
                    </div>
                    <Badge className="bg-red-100 text-red-700">Fix First</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3" />
                      <span className="font-heading font-semibold text-midnight-blue">
                        Missing Meta Descriptions
                      </span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700">Medium Priority</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="font-heading font-semibold text-midnight-blue">
                        SSL Certificate Active
                      </span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Good</Badge>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-coral-red/5 rounded-lg border border-coral-red/10">
                  <h4 className="font-heading font-semibold text-midnight-blue mb-3">
                    Quick Wins (Can improve conversion rate by 40%+):
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-forest-green mr-2" />
                      Optimize images to reduce load time by 60%
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-forest-green mr-2" />
                      Add clear call-to-action buttons above the fold
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-forest-green mr-2" />
                      Implement mobile-responsive design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-forest-green mr-2" />
                      Set up proper analytics tracking
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Get Your Free Website Audit
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Enter your website details below and we'll send you a comprehensive
              audit report within 48 hours.
            </p>
          </div>

          <ContactForm
            type="general"
            title="Request Your Free Website Audit"
            description="We'll analyze your website and send you a detailed report with actionable recommendations within 48 hours."
          />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Why Our Audits Are Different
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Most website audits are generic reports with basic recommendations.
            Ours are detailed, actionable roadmaps based on real conversion data.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-coral-red mb-2">47</div>
              <p className="font-body">Detailed Check Points</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-coral-red mb-2">48hrs</div>
              <p className="font-body">Delivery Time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-coral-red mb-2">100%</div>
              <p className="font-body">Free - No Catch</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg font-body">
              <strong>Bonus:</strong> Every audit includes a 15-minute consultation call to explain
              the findings and answer your questions.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-coral-red hover:bg-coral-red/90 text-white"
          >
            <Link href="/growth-consultation">
              Book Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Comprehensive website audits that reveal exactly what's holding your site back
                and how to fix it.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/growth-marketing"
                    className="hover:text-white transition-colors"
                  >
                    Growth Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation"
                    className="hover:text-white transition-colors"
                  >
                    AI & Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="hover:text-white transition-colors"
                  >
                    Industry Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Free Tools</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/website-audit"
                    className="hover:text-white transition-colors"
                  >
                    Website Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/revenue-forecast"
                    className="hover:text-white transition-colors"
                  >
                    Revenue Forecast
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/growth-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Growth Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation-demo"
                    className="hover:text-white transition-colors"
                  >
                    AI Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Professional website audits for ambitious businesses.
            </p>
            <p className="font-body text-gray-500 text-sm mt-2">
              Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}
