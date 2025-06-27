"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, CreditCard, Phone, Mail, Building, Loader2 } from 'lucide-react';
import { getServiceConfig, formatPrice, getStripe, getPaymentLinkForService, validateStripeConfig, createPaymentFlow, type LocalArea, type ServiceKey } from '@/lib/stripe';

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  requirements: string;
}

interface LocalServicePaymentProps {
  service: ServiceKey;
  area: LocalArea;
}

export default function LocalServicePayment({ service, area }: LocalServicePaymentProps) {
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [loading, setLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    requirements: ''
  });

  const serviceConfig = getServiceConfig(area, service);

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerInfo.name && customerInfo.email && customerInfo.businessName) {
      setStep('payment');
    }
  };

  const handleStripeCheckout = async () => {
    const stripeConfig = validateStripeConfig();

    if (!stripeConfig.valid) {
      alert(`Payment system error: ${stripeConfig.message}`);
      return;
    }

    setLoading(true);

    try {
      // Store customer information for post-payment processing
      await createPaymentFlow(area, service, customerInfo);

      // Try to get a pre-configured payment link first
      const paymentLinkUrl = getPaymentLinkForService(area, service);

      if (paymentLinkUrl) {
        // Redirect to Stripe Payment Link with customer data
        const url = new URL(paymentLinkUrl);
        url.searchParams.set('prefilled_email', customerInfo.email);
        url.searchParams.set('client_reference_id', `${area}_${service}_${Date.now()}`);

        // Store customer info for retrieval after payment
        sessionStorage.setItem('booking_customer_info', JSON.stringify(customerInfo));

        window.location.href = url.toString();
        return;
      }

      // Fallback: Use contact-based booking flow
      const bookingEmail = `
Subject: ${serviceConfig.name} Booking Request

Customer Details:
- Name: ${customerInfo.name}
- Email: ${customerInfo.email}
- Phone: ${customerInfo.phone}
- Business: ${customerInfo.businessName}
- Area: ${area.charAt(0).toUpperCase() + area.slice(1)}

Service: ${serviceConfig.name}
Price: ${formatPrice(serviceConfig.price)}
${serviceConfig.recurring ? 'Billing: Monthly subscription' : 'Billing: One-time payment'}

Requirements:
${customerInfo.requirements || 'No specific requirements provided'}

Please process this booking and send payment instructions.
      `.trim();

      // Create mailto link for fallback
      const mailtoLink = `mailto:hello@postino.cc?${new URLSearchParams({
        subject: `${serviceConfig.name} Booking Request - ${customerInfo.businessName}`,
        body: bookingEmail
      })}`;

      // Show booking confirmation dialog
      const confirmed = confirm(
        `Thank you ${customerInfo.name}!\n\n` +
        `We'll process your ${serviceConfig.name} booking manually.\n\n` +
        `Click OK to send an email with your booking details, or Cancel to call us directly at 0800 772 3291.`
      );

      if (confirmed) {
        window.location.href = mailtoLink;
      }

      // Show success regardless of email choice
      setStep('success');

    } catch (error) {
      console.error('Booking error:', error);
      alert('There was an error processing your booking. Please contact us directly at hello@postino.cc or 0800 772 3291.');
    } finally {
      setLoading(false);
    }
  };



  // Check for success/cancel URL parameters
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setStep('success');
    } else if (urlParams.get('canceled') === 'true') {
      // Payment was canceled, stay on payment step
      setStep('payment');
    }
  }, []);

  if (step === 'success') {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-600">Booking Confirmed!</CardTitle>
          <CardDescription>
            Thank you for choosing Postino for your {area} business needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="bg-soft-gray p-4 rounded-lg">
            <h3 className="font-semibold text-midnight-blue mb-2">What happens next?</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• You'll receive a confirmation email within 5 minutes</p>
              <p>• Our team will contact you within 24 hours to discuss your requirements</p>
              <p>• We'll provide a detailed project timeline and next steps</p>
              <p>• Work begins immediately after final requirements confirmation</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              0800 772 3291
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              hello@postino.cc
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (step === 'info') {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building className="h-5 w-5 mr-2 text-coral-red" />
            {serviceConfig.name}
          </CardTitle>
          <CardDescription>
            {serviceConfig.description}
          </CardDescription>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-forest-green border-forest-green">
              Starting from {formatPrice(serviceConfig.price)}
            </Badge>
            {serviceConfig.recurring && (
              <Badge variant="outline" className="text-coral-red border-coral-red">
                Monthly
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleInfoSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo(prev => ({...prev, name: e.target.value}))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo(prev => ({...prev, email: e.target.value}))}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo(prev => ({...prev, phone: e.target.value}))}
                />
              </div>
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={customerInfo.businessName}
                  onChange={(e) => setCustomerInfo(prev => ({...prev, businessName: e.target.value}))}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="requirements">Project Requirements (Optional)</Label>
              <Textarea
                id="requirements"
                value={customerInfo.requirements}
                onChange={(e) => setCustomerInfo(prev => ({...prev, requirements: e.target.value}))}
                placeholder="Tell us about your specific needs, timeline, or any questions you have..."
                rows={3}
              />
            </div>

            <div className="bg-soft-gray p-4 rounded-lg">
              <h4 className="font-semibold text-midnight-blue mb-2">What's included:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {serviceConfig.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button type="submit" className="w-full bg-coral-red hover:bg-coral-red/90">
              Continue to Payment
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-coral-red" />
          Secure Payment
        </CardTitle>
        <CardDescription>
          Complete your booking for {serviceConfig.name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-soft-gray p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{serviceConfig.name}</span>
              <span className="font-bold text-lg">{formatPrice(serviceConfig.price)}</span>
            </div>
            <div className="text-sm text-gray-600">
              <p>Customer: {customerInfo.name}</p>
              <p>Business: {customerInfo.businessName}</p>
              <p>Email: {customerInfo.email}</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">🔒 Secure Payment with Stripe</h4>
            <p className="text-sm text-blue-700 mb-3">
              Your payment will be processed securely through Stripe. We never store your card details.
            </p>
            <ul className="text-xs text-blue-600 space-y-1">
              <li>• SSL encrypted transmission</li>
              <li>• PCI DSS compliant processing</li>
              <li>• Instant confirmation email</li>
            </ul>
          </div>

          <div className="flex space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep('info')}
              className="flex-1"
              disabled={loading}
            >
              Back
            </Button>
            <Button
              onClick={handleStripeCheckout}
              className="flex-1 bg-coral-red hover:bg-coral-red/90"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Complete Payment - {formatPrice(serviceConfig.price)}
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
