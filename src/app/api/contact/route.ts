import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      phone,
      revenue,
      message,
      preferredTime,
      budget,
      timeline,
      type
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create email content
    const emailSubject = type === 'growth-consultation'
      ? `Growth Consultation Request - ${name}`
      : type === 'ai-demo'
      ? `AI Demo Request - ${name}`
      : `Website Enquiry - ${name}`;

    const emailContent = `
New ${type} enquiry from ${name}

Contact Details:
- Name: ${name}
- Email: ${email}
- Company: ${company || 'Not provided'}
- Phone: ${phone || 'Not provided'}
- Revenue: ${revenue || 'Not provided'}

Message:
${message}

Additional Information:
- Preferred Time: ${preferredTime || 'Not provided'}
- Budget: ${budget || 'Not provided'}
- Timeline: ${timeline || 'Not provided'}

Submitted from: ${request.headers.get('referer') || 'Unknown'}
Timestamp: ${new Date().toISOString()}
    `;

    // In a real implementation, you would send this to your email service
    // For now, we'll log it and return success
    console.log('Form submission received:', {
      subject: emailSubject,
      content: emailContent,
    });

    // You can integrate with services like:
    // - SendGrid
    // - Mailgun
    // - Nodemailer with SMTP
    // - Resend
    // - Postmark

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        message: 'Form submitted successfully',
        type: type || 'general'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
