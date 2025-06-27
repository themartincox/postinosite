"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  getStripe,
  formatPrice,
  getServiceConfig,
  type ServiceKey,
  type LocalArea
} from '@/lib/stripe';
import { ArrowRight, CreditCard, Loader2, Check } from 'lucide-react';

interface PaymentButtonProps {
  area: LocalArea;
  service: ServiceKey;
  variant?: 'default' | 'card';
  className?: string;
}

export default function PaymentButton({
  area,
  service,
  variant = 'default',
  className = ''
}: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceConfig = getServiceConfig(area, service);
  const areaName = area.charAt(0).toUpperCase() + area.slice(1);

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          area,
          service,
          successUrl: `${window.location.origin}/payment-success?area=${area}&service=${service}`,
          cancelUrl: `${window.location.origin}/${area}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError(err instanceof Error ? err.message : 'Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'card') {
    return (
      <Card className={`hover:shadow-lg transition-shadow duration-300 ${className}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-heading text-midnight-blue">
              {serviceConfig.name}
            </CardTitle>
            {serviceConfig.recurring && (
              <Badge variant="outline" className="text-coral-red border-coral-red">
                Monthly
              </Badge>
            )}
          </div>
          <CardDescription className="text-gray-600">
            {serviceConfig.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Price Display */}
            <div className="text-center py-4 bg-soft-gray rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-midnight-blue">
                  {formatPrice(serviceConfig.price)}
                </span>
                {serviceConfig.maxPrice && serviceConfig.maxPrice !== serviceConfig.price && (
                  <>
                    <span className="text-gray-500">-</span>
                    <span className="text-xl font-semibold text-gray-700">
                      {formatPrice(serviceConfig.maxPrice)}
                    </span>
                  </>
                )}
                {serviceConfig.recurring && (
                  <span className="text-sm text-gray-600">/month</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                25% discount applied for {areaName} businesses
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              {serviceConfig.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-forest-green flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Payment Button */}
            <Button
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full bg-coral-red hover:bg-coral-red/90 text-white font-semibold py-3"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Get Started - {formatPrice(serviceConfig.price)}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            {/* Security Badge */}
            <div className="text-center">
              <p className="text-xs text-gray-500">
                🔒 Secure payment powered by Stripe
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default button variant
  return (
    <div className={className}>
      <Button
        onClick={handlePayment}
        disabled={isLoading}
        className="bg-coral-red hover:bg-coral-red/90 text-white font-semibold px-6 py-3"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CreditCard className="h-4 w-4 mr-2" />
            Get Started - {formatPrice(serviceConfig.price)}
            <ArrowRight className="h-4 w-4 ml-2" />
          </>
        )}
      </Button>

      {error && (
        <p className="text-sm text-red-600 mt-2">{error}</p>
      )}
    </div>
  );
}
