import { type NextRequest, NextResponse } from 'next/server';
import { googleCalendarService } from '@/lib/google-calendar';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Get access token from cookies
    const accessToken = request.cookies.get('google_access_token')?.value;
    const refreshToken = request.cookies.get('google_refresh_token')?.value;

    if (!accessToken) {
      console.warn('No access token found, returning mock availability');
      // Return mock data when not authenticated
      const mockSlots = await googleCalendarService.getAvailableSlots();
      return NextResponse.json({
        slots: mockSlots,
        authenticated: false,
        message: 'Using mock calendar data. Connect Google Calendar for real-time availability.'
      });
    }

    // Set credentials and fetch real availability
    await googleCalendarService.setCredentials(accessToken, refreshToken);
    const slots = await googleCalendarService.getAvailableSlots();

    return NextResponse.json({
      slots,
      authenticated: true,
      message: 'Real-time availability from Google Calendar'
    });
  } catch (error) {
    console.error('Error fetching calendar availability:', error);

    // Fallback to mock data on error
    const mockSlots = await googleCalendarService.getAvailableSlots();
    return NextResponse.json({
      slots: mockSlots,
      authenticated: false,
      error: 'Failed to fetch real calendar data, using mock data',
      message: 'Temporary issue with calendar integration. Showing available times.'
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { days = 7 } = await request.json();

    const accessToken = request.cookies.get('google_access_token')?.value;
    const refreshToken = request.cookies.get('google_refresh_token')?.value;

    if (!accessToken) {
      const mockSlots = await googleCalendarService.getAvailableSlots('primary', days);
      return NextResponse.json({
        slots: mockSlots,
        authenticated: false
      });
    }

    await googleCalendarService.setCredentials(accessToken, refreshToken);
    const slots = await googleCalendarService.getAvailableSlots('primary', days);

    return NextResponse.json({
      slots,
      authenticated: true
    });
  } catch (error) {
    console.error('Error in availability POST:', error);
    return NextResponse.json(
      { error: 'Failed to fetch availability' },
      { status: 500 }
    );
  }
}
