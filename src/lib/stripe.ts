import { loadStripe, type Stripe } from '@stripe/stripe-js';

// Make sure to call loadStripe outside of a component's render to avoid
// recreating the Stripe object on every render.
let stripePromise: Promise<Stripe | null> | null = null;

export const getStripe = () => {
  // Only initialize on client side
  if (typeof window === 'undefined') {
    return null;
  }

  if (!stripePromise) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) {
      console.warn('Stripe publishable key not found');
      return null;
    }
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
};

// For static builds, we'll use payment links or handle payment differently
export const createPaymentFlow = async (
  area: LocalArea,
  service: ServiceKey,
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    businessName: string;
    requirements: string;
  }
) => {
  // Since we can't create checkout sessions on the client,
  // we'll use pre-configured payment links or alternative flow
  const serviceConfig = getServiceConfig(area, service);

  // Store customer info in localStorage for post-payment processing
  const bookingData = {
    ...customerInfo,
    area,
    service,
    serviceConfig,
    timestamp: Date.now(),
  };

  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('pending_booking', JSON.stringify(bookingData));
  }

  return {
    success: true,
    bookingData,
  };
};

// Get payment link URL for a specific service (these would be created in Stripe Dashboard)
export const getPaymentLinkForService = (area: LocalArea, service: ServiceKey): string | null => {
  // In production, these would be actual Stripe Payment Links created in the dashboard
  // For now, return null to trigger the fallback flow
  const paymentLinks: Record<string, string> = {
    // Example format - these would be real Stripe payment links:
    // 'bingham_website_design': 'https://buy.stripe.com/test_...',
    // 'bingham_ai_chatbot': 'https://buy.stripe.com/test_...',
  };

  return paymentLinks[`${area}_${service}`] || null;
};

// Validate environment configuration
export const validateStripeConfig = (): { valid: boolean; message: string } => {
  // Only validate on client side
  if (typeof window === 'undefined') {
    return {
      valid: true,
      message: 'Server side - validation skipped.',
    };
  }

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  if (!publishableKey) {
    return {
      valid: false,
      message: 'Stripe publishable key is not configured. Please add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to your environment variables.',
    };
  }

  if (publishableKey.startsWith('pk_test_')) {
    return {
      valid: true,
      message: 'Stripe is configured in test mode.',
    };
  }

  if (publishableKey.startsWith('pk_live_')) {
    return {
      valid: true,
      message: 'Stripe is configured in live mode.',
    };
  }

  return {
    valid: false,
    message: 'Invalid Stripe publishable key format.',
  };
};

// Service configurations for local areas
export const BINGHAM_SERVICES = {
  website_design: {
    name: 'Professional Website Design - Bingham',
    priceId: 'price_bingham_website', // Will be set in Stripe dashboard
    price: 15000, // Deposit in pence (£150.00)
    maxPrice: 375000, // Full price range up to £3,750
    description: 'Secure your website design project with a refundable deposit',
    isDeposit: true,
    features: [
      'Custom responsive design',
      'Local SEO optimization',
      'Contact forms & booking systems',
      'Google Business integration',
      '1 year hosting included',
      'Basic analytics setup'
    ]
  },
  ai_chatbot: {
    name: 'AI Chatbot Development - Bingham',
    priceId: 'price_bingham_chatbot',
    price: 11250, // Deposit in pence (£112.50)
    maxPrice: 225000, // Full price range up to £2,250
    description: 'Reserve your AI chatbot development with a refundable deposit',
    isDeposit: true,
    features: [
      'Custom conversation flows',
      'WhatsApp & website integration',
      'Appointment booking capability',
      'Customer enquiry handling',
      'Lead capture & qualification',
      'Performance analytics'
    ]
  },
  local_marketing: {
    name: 'Local Marketing Support - Bingham',
    priceId: 'price_bingham_marketing',
    price: 6000, // Deposit in pence (£60.00)
    maxPrice: 150000, // Full monthly price up to £1,500
    description: 'Secure your monthly marketing support with a refundable deposit',
    recurring: true,
    isDeposit: true,
    features: [
      'Local SEO & Google My Business',
      'Social media management',
      'Community event promotion',
      'Local directory listings',
      'Review management',
      'Monthly performance reports'
    ]
  },
  automation: {
    name: 'Business Automation Solutions - Bingham',
    priceId: 'price_bingham_automation',
    price: 7500, // Deposit in pence (£75.00)
    maxPrice: 300000, // Full price range up to £3,000
    description: 'Reserve your automation project with a refundable deposit',
    isDeposit: true,
    features: [
      'Automated appointment reminders',
      'Customer follow-up sequences',
      'Invoice & payment automation',
      'Inventory management systems',
      'Staff scheduling automation',
      'Customer feedback collection'
    ]
  }
} as const;

export const RUSHCLIFFE_SERVICES = {
  website_design: {
    name: 'Professional Website Design - Rushcliffe',
    priceId: 'price_rushcliffe_website',
    price: 15000, // Deposit in pence (£150.00)
    maxPrice: 375000, // Full price range up to £3,750
    description: 'Secure your website design project with a refundable deposit',
    isDeposit: true,
    features: [
      'Custom responsive design',
      'Local SEO optimization',
      'Contact forms & booking systems',
      'Google Business integration',
      '1 year hosting included',
      'Basic analytics setup'
    ]
  },
  ai_chatbot: {
    name: 'AI Chatbot Development - Rushcliffe',
    priceId: 'price_rushcliffe_chatbot',
    price: 11250, // Deposit in pence (£112.50)
    maxPrice: 225000, // Full price range up to £2,250
    description: 'Reserve your AI chatbot development with a refundable deposit',
    isDeposit: true,
    features: [
      'Custom conversation flows',
      'WhatsApp & website integration',
      'Appointment booking capability',
      'Customer enquiry handling',
      'Lead capture & qualification',
      'Performance analytics'
    ]
  },
  local_marketing: {
    name: 'Local Marketing Support - Rushcliffe',
    priceId: 'price_rushcliffe_marketing',
    price: 6000, // Deposit in pence (£60.00)
    maxPrice: 150000, // Full monthly price up to £1,500
    description: 'Secure your monthly marketing support with a refundable deposit',
    recurring: true,
    isDeposit: true,
    features: [
      'Local SEO & Google My Business',
      'Social media management',
      'Community event promotion',
      'Local directory listings',
      'Review management',
      'Monthly performance reports'
    ]
  },
  automation: {
    name: 'Business Automation Solutions - Rushcliffe',
    priceId: 'price_rushcliffe_automation',
    price: 7500, // Deposit in pence (£75.00)
    maxPrice: 300000, // Full price range up to £3,000
    description: 'Reserve your automation project with a refundable deposit',
    isDeposit: true,
    features: [
      'Automated appointment reminders',
      'Customer follow-up sequences',
      'Invoice & payment automation',
      'Inventory management systems',
      'Staff scheduling automation',
      'Customer feedback collection'
    ]
  }
} as const;

export type ServiceKey = keyof typeof BINGHAM_SERVICES;
export type LocalArea = 'bingham' | 'rushcliffe';

export const getServiceConfig = (area: LocalArea, service: ServiceKey) => {
  return area === 'bingham' ? BINGHAM_SERVICES[service] : RUSHCLIFFE_SERVICES[service];
};

// Format price for display
export const formatPrice = (priceInPence: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(priceInPence / 100);
};
