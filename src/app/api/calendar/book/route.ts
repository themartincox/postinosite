import { type NextRequest, NextResponse } from 'next/server';
import { googleCalendarService, createPostinoEvent, formatTimeSlot } from '@/lib/google-calendar';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const {
      attendeeEmail,
      attendeeName,
      timeSlot,
      platform,
      attendeePhone
    } = await request.json();

    // Validate required fields
    if (!attendeeEmail || !attendeeName || !timeSlot || !platform) {
      return NextResponse.json(
        { error: 'Missing required booking information' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(attendeeEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const accessToken = request.cookies.get('google_access_token')?.value;
    const refreshToken = request.cookies.get('google_refresh_token')?.value;

    // Create event details
    const eventDetails = createPostinoEvent(attendeeEmail, attendeeName, timeSlot, platform);

    // Add phone number to description if provided
    if (attendeePhone) {
      eventDetails.description += `\nPhone: ${attendeePhone}`;
    }

    let eventResult;
    let isRealBooking = false;

    if (accessToken) {
      try {
        // Real Google Calendar booking
        await googleCalendarService.setCredentials(accessToken, refreshToken);
        eventResult = await googleCalendarService.createEvent(eventDetails);
        isRealBooking = true;
      } catch (error) {
        console.error('Failed to create real calendar event:', error);
        // Fall back to simulation
        eventResult = await googleCalendarService.simulateEventCreation(eventDetails);
        isRealBooking = false;
      }
    } else {
      // Simulate booking when not authenticated
      eventResult = await googleCalendarService.simulateEventCreation(eventDetails);
      isRealBooking = false;
    }

    // Format confirmation details
    const formattedTimeSlot = formatTimeSlot(timeSlot);
    const confirmationMessage = `✅ ${isRealBooking ? 'Appointment Confirmed!' : 'Booking Request Received!'}

Meeting Details:
• Name: ${attendeeName}
• Email: ${attendeeEmail}
${attendeePhone ? `• Phone: ${attendeePhone}\n` : ''}• Time: ${formattedTimeSlot}
• Platform: ${platform}
• Duration: 15 minutes

${isRealBooking ?
  'Calendar invitation sent! You\'ll receive an email confirmation with meeting details.' :
  'We\'ll send you a calendar invitation shortly with all the meeting details.'
}

What to expect:
🎯 Friendly 15-minute chat about your business goals
💡 Quick wins you can implement immediately
🚀 Tailored growth strategies for your industry
📞 No pressure, just genuine helpful advice

Looking forward to our chat!

Questions? Contact us:
📞 0800 772 3291
📧 hello@postino.cc`;

    return NextResponse.json({
      success: true,
      event: eventResult,
      isRealBooking,
      message: confirmationMessage,
      timeSlot: formattedTimeSlot,
      meetingLink: eventResult.htmlLink,
    });

  } catch (error) {
    console.error('Error booking appointment:', error);

    return NextResponse.json(
      {
        error: 'Failed to book appointment',
        message: 'Well, that doesn\'t usually happen—shall we try again? You can also call us directly on 0800 772 3291.'
      },
      { status: 500 }
    );
  }
}
