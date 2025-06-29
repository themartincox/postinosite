import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Check,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  BarChart3,
  Globe,
  Zap,
  Shield,
  Users,
  Package,
  CreditCard,
  Smartphone,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function EcommercePage() {
  const packages = [
    {
      name: "Starting Online",
      description: "Traditional business moving to ecommerce",
      setup: "£3,000",
      monthly: "£600/month + 3% revenue share",
      ideal: "Physical stores, service businesses, first-time online sellers",
      features: [
        "Professional ecommerce website",
        "Product catalogue setup",
        "Basic payment integration",
        "Mobile-optimised design",
        "SSL security & hosting",
        "Basic SEO setup",
        "Google Analytics integration",
        "Social media integration"
      ]
    },
    {
      name: "Established Store",
      description: "Growing online presence with multiple channels",
      setup: "£5,500",
      monthly: "£900/month + 5% revenue share",
      ideal: "Growing online businesses, multi-channel sellers, expanding brands",
      features: [
        "Advanced ecommerce platform",
        "Multi-channel integration",
        "Advanced inventory management",
        "Email marketing automation",
        "Customer reviews system",
        "Advanced analytics & reporting",
        "Abandoned cart recovery",
        "Loyalty program setup",
        "SEO optimisation",
        "PPC campaign management"
      ]
    },
    {
      name: "Multi-Channel Growth",
      description: "Advanced ecommerce with marketplace integration",
      setup: "£9,000",
      monthly: "£1,400/month + 7% revenue share",
      ideal: "Enterprise ecommerce, marketplace sellers, international expansion",
      features: [
        "Custom ecommerce solution",
        "Marketplace integrations (Amazon, eBay)",
        "Advanced automation workflows",
        "Subscription management",
        "Multi-currency support",
        "Advanced personalization",
        "Predictive analytics",
        "Custom integrations & APIs",
        "International SEO",
        "Performance optimization",
        "Dedicated account management"
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: ShoppingCart,
      title: "Custom Ecommerce Solutions",
      description: "Tailored platforms built for your specific products and business model"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time stock tracking, automated reordering, and multi-warehouse support"
    },
    {
      icon: Globe,
      title: "Multi-Channel Selling",
      description: "Sync inventory across your website, Amazon, eBay, and social platforms"
    },
    {
      icon: BarChart3,
      title: "Conversion Optimisation",
      description: "A/B testing, checkout optimization, and revenue-focused design"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Multiple payment gateways, buy-now-pay-later, and subscription billing"
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description: "Mobile-first design with app-like shopping experiences"
    }
  ];

  const results = [
    {
      metric: "180%",
      description: "Average increase in online revenue within 12 months",
      icon: TrendingUp
    },
    {
      metric: "65%",
      description: "Improvement in conversion rates through optimization",
      icon: Target
    },
    {
      metric: "40%",
      description: "Reduction in cart abandonment with our checkout flow",
      icon: ShoppingCart
    },
    {
      metric: "25hrs",
      description: "Weekly time savings through automation",
      icon: Zap
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
            <Badge className="bg-coral-red text-white mb-6">
              Growth Focus
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ecommerce Websites That
              <span className="text-coral-red"> Drive Revenue Growth</span>
            </h1>
            <p className="text-xl font-body mb-8 leading-relaxed opacity-90">
              Physical-to-digital transitions and revenue-optimised online stores.
              We build ecommerce solutions that convert visitors into customers and grow your business.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg font-heading">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Revenue-Focused Design</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Conversion Optimisation</span>
                </div>
                <div className="hidden md:block text-white/50">•</div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-coral-red" />
                  <span>Multi-Channel Integration</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-coral-red hover:bg-coral-red/90 text-white"
              >
                <Link href="/contact?service=ecommerce">
                  Get Your Ecommerce Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
              >
                <Link href="#packages" className="text-white hover:text-midnight-blue">
                  <span className="font-heading font-semibold">
                    View Packages
                  </span>
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-midnight-blue mb-4">
              Proven Ecommerce Results
            </h2>
            <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
              Our ecommerce solutions deliver measurable revenue growth through conversion-focused design and strategic optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <result.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-coral-red mb-2">
                  {result.metric}
                </div>
                <p className="font-body text-gray-600 text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Complete Ecommerce Solutions
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Everything you need to sell online, from simple product catalogues to complex multi-channel operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-midnight-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-midnight-blue">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Choose Your Ecommerce Package
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Revenue-sharing partnerships that grow with your business. We succeed when you succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden ${index === 1 ? 'ring-2 ring-coral-red' : ''}`}>
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-coral-red text-white text-center py-2 text-sm font-heading font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className={index === 1 ? 'pt-12' : ''}>
                  <CardTitle className="text-2xl font-heading text-midnight-blue">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="font-body text-gray-600">
                    {pkg.description}
                  </CardDescription>
                  <div className="py-4">
                    <div className="text-3xl font-heading font-bold text-coral-red">
                      {pkg.setup}
                    </div>
                    <div className="text-lg text-gray-600">
                      {pkg.monthly}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    Ideal for: {pkg.ideal}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-forest-green flex-shrink-0 mt-0.5" />
                        <span className="font-body text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${index === 1 ? 'bg-coral-red hover:bg-coral-red/90' : 'bg-midnight-blue hover:bg-midnight-blue/90'} text-white`}
                  >
                    <Link href="/contact?service=ecommerce">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-soft-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-midnight-blue mb-4">
              Why Choose Postino for Ecommerce?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-red-600 mb-6">
                Typical Ecommerce Agencies:
              </h3>
              <ul className="space-y-4">
                {[
                  "Template-based solutions that look like everyone else",
                  "No understanding of your specific product challenges",
                  "Basic payment systems with poor conversion rates",
                  "No ongoing optimization or growth support",
                  "Hidden costs and surprise monthly fees"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="font-body text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-forest-green mb-6">
                Our Ecommerce Approach:
              </h3>
              <ul className="space-y-4">
                {[
                  "Custom-built solutions designed for your products and customers",
                  "Deep understanding of ecommerce conversion psychology",
                  "Advanced payment systems and checkout optimization",
                  "Continuous testing and revenue optimization",
                  "Transparent revenue-sharing model with no hidden costs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-forest-green mt-1 flex-shrink-0" />
                    <span className="font-body text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Grow Your Online Revenue?
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Join successful ecommerce businesses achieving 180% average revenue growth
            with our conversion-focused approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-white"
            >
              <Link href="/contact?service=ecommerce">
                Start Your Ecommerce Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-midnight-blue bg-white/5"
            >
              <Link href="/case-studies" className="text-white hover:text-midnight-blue">
                <span className="font-heading font-semibold">
                  View Case Studies
                </span>
                <BarChart3 className="ml-2 h-5 w-5" />
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
                Revenue-focused ecommerce solutions for ambitious businesses.
                We build online stores that convert and grow.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Ecommerce Services</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link href="/ecommerce" className="hover:text-white transition-colors">
                    Custom Ecommerce Development
                  </Link>
                </li>
                <li>
                  <Link href="/conversion-optimisation" className="hover:text-white transition-colors">
                    Conversion Optimisation
                  </Link>
                </li>
                <li>
                  <Link href="/multi-channel-selling" className="hover:text-white transition-colors">
                    Multi-Channel Integration
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce-seo" className="hover:text-white transition-colors">
                    Ecommerce SEO
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link href="/industries" className="hover:text-white transition-colors">
                    All Industries
                  </Link>
                </li>
                <li>
                  <Link href="/wellness-beauty" className="hover:text-white transition-colors">
                    Wellness & Beauty
                  </Link>
                </li>
                <li>
                  <Link href="/industries/medical-practices" className="hover:text-white transition-colors">
                    Medical Practices
                  </Link>
                </li>
                <li>
                  <Link href="/industries/dental-practices" className="hover:text-white transition-colors">
                    Dental Practices
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link href="/contact?service=ecommerce" className="hover:text-white transition-colors">
                    Ecommerce Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/revenue-forecast" className="hover:text-white transition-colors">
                    Revenue Forecast
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Revenue-focused ecommerce solutions for ambitious businesses.
            </p>
            <p className="font-body text-gray-500 text-sm mt-2">
              Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
