import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getServiceConfig, type LocalArea, type ServiceKey } from '@/lib/stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const { service, area, customPrice, customerInfo } = await request.json();

    if (!service || !area) {
      return NextResponse.json(
        { error: 'Service and area are required' },
        { status: 400 }
      );
    }

    const serviceConfig = getServiceConfig(area as LocalArea, service as ServiceKey);

    if (!serviceConfig) {
      return NextResponse.json(
        { error: 'Invalid service configuration' },
        { status: 400 }
      );
    }

    // Use custom price if provided, otherwise use base price
    const amount = customPrice || serviceConfig.price;

    // Ensure amount is within valid range
    if (amount < serviceConfig.price || amount > serviceConfig.maxPrice) {
      return NextResponse.json(
        { error: 'Invalid price range' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to pence
      currency: 'gbp',
      metadata: {
        service: service,
        area: area,
        serviceName: serviceConfig.name,
        customerEmail: customerInfo?.email || '',
        customerName: customerInfo?.name || '',
        customerPhone: customerInfo?.phone || '',
        businessName: customerInfo?.businessName || '',
      },
      description: `${serviceConfig.name} - ${area.charAt(0).toUpperCase() + area.slice(1)}`,
      receipt_email: customerInfo?.email,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: amount,
      serviceName: serviceConfig.name,
    });
  } catch (error) {
    console.error('Payment intent creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}

// Handle Stripe webhooks for payment confirmation
export async function PUT(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe signature' },
        { status: 400 }
      );
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment succeeded:', paymentIntent.id);

        // Here you could:
        // - Send confirmation email
        // - Create customer record in database
        // - Trigger onboarding workflow
        // - Notify team via Slack/email

        break;
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent;
        console.log('Payment failed:', failedPayment.id);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler failed:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
