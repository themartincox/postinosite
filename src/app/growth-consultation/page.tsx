import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Target, TrendingUp, Users, BarChart3, Lightbulb, Award, Calendar } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import ContactForm from "@/components/ContactForm"

export default function GrowthConsultationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green to-midnight-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6">Growth Strategy Session</Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Transform Your Business with a
              <span className="text-coral-red"> Strategic Growth Session</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Get a comprehensive business audit, custom growth strategy, and clear roadmap
              for the next 6-12 months. Our expert strategists will identify your biggest
              opportunities and create an actionable plan for sustainable growth.
            </p>

            {/* Pricing highlight */}
            <div className="inline-flex items-center bg-coral-red/20 border border-coral-red/30 px-6 py-3 rounded-full mb-8">
              <span className="text-lg font-heading font-semibold">Investment: £50</span>
              <span className="mx-2 text-coral-red">•</span>
              <span className="text-sm opacity-90">Fully refunded on first project invoice</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              What You'll Get in Your Session
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              A comprehensive 60-minute strategic session designed to identify your biggest
              growth opportunities and create a clear action plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">Business Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Comprehensive analysis of your current marketing performance, systems, and growth blockers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">Custom Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Tailored growth recommendations based on your industry, budget, and business goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">Competitor Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Deep dive into what your competitors are doing and how to gain a competitive advantage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-heading text-midnight-blue">Action Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600 text-sm">
                  Clear, prioritised roadmap with specific actions for the next 6-12 months.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              How It Works
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures you get maximum value from your strategic session.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">Pre-Session Preparation</h3>
              <p className="font-body text-gray-600">
                Complete our strategic questionnaire and share key business information so we can
                prepare tailored insights for your session.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">Strategic Session</h3>
              <p className="font-body text-gray-600">
                60-minute intensive session covering business audit, strategy development,
                and actionable recommendations tailored to your specific situation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-midnight-blue mb-3">Follow-Up Resources</h3>
              <p className="font-body text-gray-600">
                Receive a detailed strategy document, recommended tools list, and priority
                action items to implement immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-2xl border-0">
            <CardHeader className="text-center bg-gradient-to-r from-forest-green to-midnight-blue text-white rounded-t-lg">
              <CardTitle className="text-3xl font-heading">Session Investment & Details</CardTitle>
              <CardDescription className="text-gray-100 text-lg">
                Professional strategic consultation for serious business growth
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-4">Investment</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-coral-red/5 rounded-lg border border-coral-red/20">
                      <span className="font-heading font-semibold text-gray-800">Session Fee</span>
                      <span className="text-2xl font-heading font-bold text-coral-red">£50</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                      <p className="font-body text-gray-600 text-sm">
                        <strong>100% refundable</strong> against your first project invoice when you decide to work with us
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                      <p className="font-body text-gray-600 text-sm">
                        Deters time-wasters and ensures we're both serious about potential collaboration
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                      <p className="font-body text-gray-600 text-sm">
                        Guarantees you receive our full attention and premium preparation
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-bold text-midnight-blue mb-4">Session Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-coral-red" />
                      <span className="font-body text-gray-600"><strong>Duration:</strong> 60 minutes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-coral-red" />
                      <span className="font-body text-gray-600"><strong>Format:</strong> Video call (Zoom/Teams)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-coral-red" />
                      <span className="font-body text-gray-600"><strong>Follow-up:</strong> Strategy document included</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Lightbulb className="h-5 w-5 text-coral-red" />
                      <span className="font-body text-gray-600"><strong>Focus:</strong> Actionable growth strategies</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" className="bg-coral-red hover:bg-coral-red/90 text-white px-8 py-4 text-lg">
                  Book Your Growth Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="mt-4 text-sm font-body text-gray-500">
                  Secure payment via Stripe • Schedule immediately after payment
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Is This Right for You?
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Our growth strategy sessions are designed for serious business leaders ready to invest in growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-forest-green mb-6">Perfect If You:</h3>
              <div className="space-y-4">
                {[
                  "Generate £100k+ annual revenue and ready to scale",
                  "Feel stuck in your current growth trajectory",
                  "Want to understand what's working (and what isn't)",
                  "Need a clear, actionable plan for the next 6-12 months",
                  "Are considering hiring a growth agency or consultant",
                  "Want to explore AI automation opportunities",
                  "Value strategic expertise and professional guidance"
                ].map((item, index) => (
                  <div key={`perfect-${index}-${item.slice(0, 20)}`} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <p className="font-body text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-coral-red mb-6">Not Right If You:</h3>
              <div className="space-y-4">
                {[
                  "Just starting out (under £50k annual revenue)",
                  "Looking for free advice or 'picking our brains'",
                  "Not ready to invest in growth initiatives",
                  "Want us to do the work during the session",
                  "Expect detailed implementation guides",
                  "Are shopping around for the cheapest option",
                  "Aren't decision-makers in your organisation"
                ].map((item, index) => (
                  <div key={`not-right-${index}-${item.slice(0, 20)}`} className="flex items-start space-x-3">
                    <div className="w-5 h-5 border-2 border-coral-red rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-coral-red rounded-full" />
                    </div>
                    <p className="font-body text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                question: "Why do you charge for the consultation?",
                answer: "The £50 fee ensures we're both serious about the session and allows us to dedicate proper preparation time. It's fully refunded when you become a client, so there's no real cost if we work together."
              },
              {
                question: "What if I don't proceed with Postino after the session?",
                answer: "That's perfectly fine! You'll still receive tremendous value from the session itself. The £50 investment covers our strategic expertise and the detailed follow-up documentation you'll receive."
              },
              {
                question: "How quickly can we schedule the session?",
                answer: "Most sessions can be scheduled within 3-5 business days. After payment, you'll receive a calendar link to book a time that works for both of us."
              },
              {
                question: "What preparation is required?",
                answer: "We'll send you a strategic questionnaire to complete before the session. This helps us understand your business and prepare relevant insights and recommendations."
              },
              {
                question: "Will you share specific tactics during the session?",
                answer: "The session focuses on strategic direction and identifying opportunities. While we'll share some tactical insights, detailed implementation guides are part of our ongoing client work."
              }
            ].map((faq, index) => (
              <Card key={`faq-${index}-${faq.question.slice(0, 20)}`} className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-midnight-blue">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Session Form */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-6">
              Ready to Unlock Your Growth Potential?
            </h2>
            <p className="text-xl font-body text-gray-600 mb-8">
              Join the growing number of SME leaders who've transformed their businesses with strategic guidance.
              Book your session today and discover your biggest growth opportunities.
            </p>
          </div>

          <ContactForm
            type="growth-consultation"
            title="Book Your Growth Strategy Session"
            description="£50 strategic consultation - fully refunded on first project invoice"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Postino.</h3>
              <p className="font-body text-gray-300 mb-4">
                Where growth meets AI innovation. Helping SMEs achieve measurable success
                through expert marketing and intelligent automation.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li><Link href="/growth-marketing" className="hover:text-white transition-colors">Growth Marketing</Link></li>
                <li><Link href="/ai-automation" className="hover:text-white transition-colors">AI & Automation</Link></li>
                <li><Link href="/seo-services" className="hover:text-white transition-colors">SEO Services</Link></li>
                <li><Link href="/content-strategy" className="hover:text-white transition-colors">Content Strategy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li><Link href="/growth-consultation" className="hover:text-white transition-colors">Growth Strategy Session</Link></li>
                <li><Link href="/ai-automation-demo" className="hover:text-white transition-colors">Automation Demo</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. | Empowering SME growth through intelligent marketing.
            </p>
            <p className="font-body text-gray-500 text-sm mt-2">
              Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
