"use client";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual form handling
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
            }
  };
      } else 
        throw new Error("Form submission failed");
    } catch (error) {
      console.error("Form submission error:", error);
      // Still show success message for UX, but log error
          }
  };
    } finally {

    
        }
  };
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-blue to-forest-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Let's work <br />
              <span className="text-coral-red">together</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Left Side - Info */}
          <div className="bg-white p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                If you're serious about digital growth, we'd love to hear from
                you.
              </p>

              <div className="mb-12">
                <h3 className="text-lg font-heading font-semibold text-midnight-blue mb-4">
                  We can help you with:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">
                      Growth marketing strategy
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">
                      AI and automation solutions
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">
                      SEO and content marketing
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">
                      Brand identity and website design
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">
                      Business process automation
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-coral-red flex-shrink-0" />
                    <span className="font-body text-gray-700">
                      Predictive analytics and insights
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-midnight-blue mb-4">
                  Prefer to talk?
                </h3>
                <p className="text-gray-700 mb-2">
                  Call us on{" "}
                  <Link
                    href="tel:+4407432039801"
                    className="text-coral-red hover:underline font-semibold"
                  >
                    +44 20 1234 5678
                  </Link>
                  , and our friendly team will discuss how we can best help you.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-coral-red p-8 lg:p-16 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-coral-red" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  Thank You!
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  We've received your message and one of our team will be in touch within 24 hours.
                </p>
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="text-white/80 text-sm">
                    For urgent enquiries, you can also reach us on WhatsApp or call us directly.
                  </p>
                </div>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="bg-white text-coral-red border-white hover:bg-white/90"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-heading font-semibold text-white mb-2">
                    First name{" "}
                    <span className="text-yellow-300">(Required)</span>
                  </label>
                  <Input
                    name="firstName"
                    className="bg-white border-0 text-gray-900 focus:ring-2 focus:ring-yellow-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-white mb-2">
                    Last name{" "}
                    <span className="text-yellow-300">(Required)</span>
                  </label>
                  <Input
                    name="lastName"
                    className="bg-white border-0 text-gray-900 focus:ring-2 focus:ring-yellow-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-white mb-2">
                  Your email address{" "}
                  <span className="text-yellow-300">(Required)</span>
                </label>
                <Input
                  name="email"
                  type="email"
                  className="bg-white border-0 text-gray-900 focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-white mb-2">
                  Contact number
                </label>
                <Input
                  name="phone"
                  type="tel"
                  className="bg-white border-0 text-gray-900 focus:ring-2 focus:ring-yellow-300"
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-white mb-2">
                  Company name{" "}
                  <span className="text-yellow-300">(Required)</span>
                </label>
                <Input
                  name="company"
                  className="bg-white border-0 text-gray-900 focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-white mb-2">
                  How can we help?{" "}
                  <span className="text-yellow-300">(Required)</span>
                </label>
                <Textarea
                  name="message"
                  rows={4}
                  className="bg-white border-0 text-gray-900 focus:ring-2 focus:ring-yellow-300 resize-none"
                  placeholder="Tell us about your business, goals, and how we can help..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-white mb-2">
                  How did you hear about us?{" "}
                  <span className="text-yellow-300">(Required)</span>
                </label>
                <Select name="hearAboutUs" required>
                  <SelectTrigger className="bg-white border-0 text-gray-900 focus:ring-2 focus:ring-yellow-300">
                    <SelectValue placeholder="Please select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google search</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="social">Social media</SelectItem>
                    <SelectItem value="advertising">
                      Online advertising
                    </SelectItem>
                    <SelectItem value="event">Event or conference</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-white mb-2">
                  Upload your brief (optional)
                </label>
                <Input
                  name="brief"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  className="bg-white border-0 text-gray-900 focus:ring-2 focus:ring-yellow-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-coral-red file:text-white hover:file:bg-coral-red/90"
                />
                <p className="text-sm text-white/80 mt-1">
                  Accepted file types: pdf, doc, docx, txt. Max. file size: 10
                  MB.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-heading font-semibold text-white">
                  Subscribe
                </h4>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    name="newsletter"
                    className="border-white text-coral-red focus:ring-yellow-300 mt-1"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm text-white leading-relaxed"
                  >
                    Check this box to receive our useful weekly digital
                    marketing newsletter
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white font-heading font-semibold py-3 text-lg disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Get started"}
              </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg border-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-forest-green to-midnight-blue" />
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-midnight-blue mb-2">
                  Nottingham HQ
                </h3>
                <p className="text-gray-600 mb-4">
                  1 Fisher Lane, Bingham,
                  <br />
                  Nottingham, NG13 8BQ
                </p>
                <p className="text-coral-red font-semibold mb-1">
                  +44 20 1234 5678
                </p>
                <p className="text-gray-600">hello@postino.cc</p>
                <Link
                  href="https://wa.me/4407432039801"
                  target="_blank"
                  className="inline-flex items-center mt-3 text-forest-green hover:text-forest-green/80 font-semibold"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-midnight-blue to-coral-red" />
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-midnight-blue mb-2">
                  Remote Global
                </h3>
                <p className="text-gray-600 mb-4">
                  Digital First Approach,
                  <br />
                  Serving Clients Worldwide
                </p>
                <p className="text-coral-red font-semibold mb-1">
                  +44 20 1234 5678
                </p>
                <p className="text-gray-600 mb-3">hello@postino.cc</p>
                <Link
                  href="https://wa.me/4407432039801"
                  target="_blank"
                  className="inline-flex items-center text-forest-green hover:text-forest-green/80 font-semibold"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </Link>
              </CardContent>
            </Card>
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
                Where growth meets AI innovation. Helping SMEs achieve
                measurable success through expert marketing and intelligent
                automation.
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
                    href="/seo-services"
                    className="hover:text-white transition-colors"
                  >
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/content-strategy"
                    className="hover:text-white transition-colors"
                  >
                    Content Strategy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 font-body text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
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
                    Growth Strategy Session
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-automation-demo"
                    className="hover:text-white transition-colors"
                  >
                    Automation Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-white transition-colors"
                  >
                    Resources
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
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-body text-gray-400">
              © 2025 Postino Ltd. Company No. 15378485. All rights reserved. |
              Empowering SME growth through intelligent marketing.
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
