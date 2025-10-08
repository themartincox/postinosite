import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle, DollarSign, Target, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const businessStages = [
    {
      name: "Solo/Small Business",
      price: "£2,400 - £4,000",
      description: "Individual practitioners or small teams establishing their digital presence",
      setup: "£3,500",
      monthly: "£750/month + 3% revenue share",
      features: [
        "Professional website",
        "Basic booking system",
        "Local SEO optimization",
        "Review management system",
        "Basic analytics & reporting"
      ],
      color: "bg-forest-green"
    },
    {
      name: "Established Local Business",
      price: "£3,800 - £7,000",
      description: "Growing businesses with multiple services or team members",
      setup: "£6,000",
      monthly: "£1,000/month + 5% revenue share",
      features: [
        "Advanced website features",
        "Multi-service showcases",
        "Team member profiles",
        "CRM integration",
        "Email marketing automation",
        "Performance tracking"
      ],
      color: "bg-midnight-blue",
      popular: true
    },
    {
      name: "Ambitious Growth Business",
      price: "£6,500 - £12,000",
      description: "Multi-location businesses targeting regional expansion",
      setup: "£10,000",
      monthly: "£1,500/month + 7% revenue share",
      features: [
        "Multi-location support",
        "Advanced automation systems",
        "Competitive market positioning",
        "Growth analytics & insights",
        "Priority support",
        "Strategic consultation"
      ],
      color: "bg-coral-red"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      {/* Header is global; Navigation removed */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-coral-red text-white mb-6">
              Revenue Partnership Model
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Investment That Grows With{" "}
              <span className="text-coral-red">Your Success</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              We don't just build websites—we partner with you for growth. Our revenue-sharing model
              means we only succeed when your business succeeds. Choose the partnership level that
              matches your ambition.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg font-heading">
                <div className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-coral-red" />
                  <span>12-Month Partnership</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Revenue Share Model</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Custom-Built Solutions</span>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/revenue-forecast">
                Get Your Revenue Forecast
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Stages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Choose Your Partnership Level
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              We work with businesses at every stage of growth. From solo practitioners
              establishing their presence to multi-location businesses dominating their markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessStages.map((stage, index) => (
              <Card
                key={index}
                className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  stage.popular ? 'border-2 border-coral-red' : ''
                }`}
              >
                <CardHeader className="text-center relative">
                  {stage.popular && (
                    <Badge className="bg-coral-red text-white absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <div className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-4 mt-2`}>
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-midnight-blue mb-2">
                    {stage.name}
                  </CardTitle>
                  <div className="text-2xl font-heading font-bold text-coral-red mb-2">
                    {stage.price}
                  </div>
                  <CardDescription className="font-body text-gray-600 mb-4">
                    {stage.description}
                  </CardDescription>
                  <div className="bg-soft-gray rounded-lg p-3 mb-4">
                    <div className="text-sm font-heading text-midnight-blue">
                      <div>Setup: <span className="font-bold">{stage.setup}</span></div>
                      <div>Ongoing: <span className="font-bold">{stage.monthly}</span></div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {stage.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center font-body text-gray-600">
                        <CheckCircle className="h-4 w-4 text-forest-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${stage.popular ? 'bg-coral-red hover:bg-coral-red/90' : 'bg-midnight-blue hover:bg-midnight-blue/90'} text-white`}
                  >
                    <Link href="/revenue-forecast">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              How Our Partnership Model Works
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Unlike traditional agencies that disappear after project completion,
              we're invested in your long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-white">1</span>
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Initial Investment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  One-time setup fee covers website development, initial optimization,
                  and system implementation. No hidden costs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-white">2</span>
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Monthly Partnership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Fixed monthly fee plus revenue share. We're motivated to grow your
                  business because our success depends on yours.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-white">3</span>
                </div>
                <CardTitle className="text-xl font-heading text-midnight-blue">
                  Continuous Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Ongoing optimization, support, and strategic guidance to maximize
                  your ROI throughout our 12-month partnership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Partnership Questions & Answers
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Why do you use a revenue-sharing model?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  We're committed to your success, not just project completion. By sharing in your
                  revenue growth, we're incentivized to deliver results that actually impact your
                  bottom line, not just pretty websites.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  What's included in the monthly partnership fee?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Ongoing website maintenance, SEO optimization, performance monitoring,
                  conversion improvements, technical support, and strategic consultation.
                  We actively work to grow your revenue every month.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  Can I customize my partnership terms?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Absolutely. While these are our standard tiers, we create custom partnerships
                  for unique business models, special requirements, or multi-location enterprises.
                  Contact us to discuss your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-midnight-blue">
                  What happens after the 12-month partnership?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  You own everything we've built. You can continue with a reduced maintenance
                  agreement, renew the full partnership, or take complete control.
                  We'll provide training and documentation for whatever you choose.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Partner for Growth?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Get a personalized revenue forecast and partnership proposal
            tailored to your business goals and growth potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/revenue-forecast">
                Get Revenue Forecast
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link
                href="/contact"
                className="text-white hover:text-midnight-blue"
              >
                <span className="font-heading font-semibold">
                  Discuss Custom Partnership
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Revenue-focused partnerships for ambitious businesses.
                We succeed when you succeed.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Partnership Levels</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>Solo/Small Business</li>
                <li>Established Local Business</li>
                <li>Ambitious Growth Business</li>
                <li>Custom Enterprise Solutions</li>
              </ul>
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
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
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
                    href="/website-audit"
                    className="hover:text-white transition-colors"
                  >
                    Free Website Audit
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
              Revenue partnerships for ambitious businesses.
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
