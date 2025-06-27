"use client";

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, CreditCard, Loader2, MapPin, Phone, Mail, Building } from 'lucide-react';
import { getServiceConfig, formatPrice, type LocalArea, type ServiceKey } from '@/lib/stripe';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

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
  onSuccess?: (paymentIntent: any) => void;
}

function PaymentForm({ service, area, onSuccess }: LocalServicePaymentProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
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

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe has not loaded yet');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service,
          area,
          customPrice: serviceConfig.price, // Use base price for now
          customerInfo,
        }),
      });

      const { clientSecret, error: backendError } = await response.json();

      if (backendError) {
        setError(backendError);
        setIsLoading(false);
        return;
      }

      // Confirm payment with Stripe
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        setError('Card element not found');
        setIsLoading(false);
        return;
      }

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: customerInfo.name,
              email: customerInfo.email,
              phone: customerInfo.phone,
            },
          },
        }
      );

      if (stripeError) {
        setError(stripeError.message || 'Payment failed');
      } else if (paymentIntent?.status === 'succeeded') {
        setStep('success');
        onSuccess?.(paymentIntent);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (step === 'success') {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-600">Payment Successful!</CardTitle>
          <CardDescription>
            Thank you for choosing Postino for your {area} business needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="bg-soft-gray p-4 rounded-lg">
            <h3 className="font-semibold text-midnight-blue mb-2">What happens next?</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• You'll receive a confirmation email within 5 minutes</p>
              <p>• Our team will contact you within 24 hours to schedule your project kickoff</p>
              <p>• We'll begin work on your {serviceConfig.name.toLowerCase()} immediately</p>
              <p>• You'll have a dedicated project manager throughout the process</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              01949 836 850
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
            <MapPin className="h-5 w-5 mr-2 text-coral-red" />
            {serviceConfig.name}
          </CardTitle>
          <CardDescription>
            {serviceConfig.description}
          </CardDescription>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-forest-green border-forest-green">
              Starting from {formatPrice(serviceConfig.price * 100)}
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
        <form onSubmit={handlePayment} className="space-y-6">
          <div className="bg-soft-gray p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{serviceConfig.name}</span>
              <span className="font-bold text-lg">{formatPrice(serviceConfig.price * 100)}</span>
            </div>
            <div className="text-sm text-gray-600">
              <p>Customer: {customerInfo.name}</p>
              <p>Business: {customerInfo.businessName}</p>
              <p>Email: {customerInfo.email}</p>
            </div>
          </div>

          <div>
            <Label>Card Details</Label>
            <div className="mt-2 p-3 border border-gray-300 rounded-md">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <div className="flex space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep('info')}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              type="submit"
              disabled={!stripe || isLoading}
              className="flex-1 bg-coral-red hover:bg-coral-red/90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                `Pay ${formatPrice(serviceConfig.price * 100)}`
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default function LocalServicePayment(props: LocalServicePaymentProps) {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm {...props} />
    </Elements>
  );
}
