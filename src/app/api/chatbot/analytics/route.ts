import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// In a production app, you'd store this in a database
// For now, we'll use in-memory storage as an example
const analyticsEvents: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const eventData = await request.json();

    // Add server timestamp
    const enrichedEvent = {
      ...eventData,
      serverTimestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.ip || 'unknown'
    };

    // Store event (in production, save to database)
    analyticsEvents.push(enrichedEvent);

    // Optional: Log to console for monitoring
    console.log('Chatbot Event Logged:', {
      type: eventData.eventType,
      session: eventData.sessionId,
      timestamp: eventData.timestamp
    });

    // In production, you might want to:
    // 1. Save to database (MongoDB, PostgreSQL, etc.)
    // 2. Send to analytics service (Google Analytics, Mixpanel, etc.)
    // 3. Trigger webhooks for real-time monitoring
    // 4. Queue for batch processing

    return NextResponse.json({
      success: true,
      message: 'Event logged successfully'
    });

  } catch (error) {
    console.error('Error logging chatbot event:', error);
    return NextResponse.json(
      { error: 'Failed to log event' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const timeRange = searchParams.get('range') || '24h';
    const sessionId = searchParams.get('sessionId');

    let filteredEvents = analyticsEvents;

    // Filter by session if specified
    if (sessionId) {
      filteredEvents = analyticsEvents.filter(event => event.sessionId === sessionId);
    }

    // Filter by time range
    const now = new Date();
    const timeRangeMs = parseTimeRange(timeRange);
    const cutoffTime = new Date(now.getTime() - timeRangeMs);

    filteredEvents = filteredEvents.filter(event =>
      new Date(event.timestamp) > cutoffTime
    );

    return NextResponse.json({
      events: filteredEvents,
      totalCount: filteredEvents.length,
      timeRange,
      sessionId
    });

  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}

function parseTimeRange(range: string): number {
  const timeMap: Record<string, number> = {
    '1h': 60 * 60 * 1000,
    '24h': 24 * 60 * 60 * 1000,
    '7d': 7 * 24 * 60 * 60 * 1000,
    '30d': 30 * 24 * 60 * 60 * 1000
  };

  return timeMap[range] || timeMap['24h'];
}
