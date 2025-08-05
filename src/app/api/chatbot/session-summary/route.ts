import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// In-memory storage for session summaries (use database in production)
const sessionSummaries: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const sessionData = await request.json();

    // Enrich session data with server info
    const enrichedSession = {
      ...sessionData,
      serverTimestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.ip || 'unknown'
    };

    // Store session summary
    sessionSummaries.push(enrichedSession);

    // Log session completion
    console.log('Chatbot Session Completed:', {
      sessionId: sessionData.sessionId,
      duration: `${Math.round(sessionData.totalDuration / 1000)}s`,
      messages: sessionData.messageCount,
      converted: sessionData.conversionFunnel?.bookingCompleted || false
    });

    // In production, you might:
    // 1. Save to database with proper indexing
    // 2. Trigger business intelligence workflows
    // 3. Send to CRM for lead scoring
    // 4. Queue for email follow-up if no booking completed
    // 5. Generate real-time dashboard updates

    return NextResponse.json({
      success: true,
      message: 'Session summary stored successfully'
    });

  } catch (error) {
    console.error('Error storing session summary:', error);
    return NextResponse.json(
      { error: 'Failed to store session summary' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const timeRange = searchParams.get('range') || '7d';

    // Filter sessions by time range
    const now = new Date();
    const timeRangeMs = parseTimeRange(timeRange);
    const cutoffTime = new Date(now.getTime() - timeRangeMs);

    const filteredSessions = sessionSummaries.filter(session =>
      new Date(session.serverTimestamp) > cutoffTime
    );

    // Generate analytics summary
    const analytics = generateAnalyticsSummary(filteredSessions);

    return NextResponse.json({
      sessions: filteredSessions,
      analytics,
      totalSessions: filteredSessions.length,
      timeRange
    });

  } catch (error) {
    console.error('Error fetching session summaries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch session summaries' },
      { status: 500 }
    );
  }
}

function generateAnalyticsSummary(sessions: any[]) {
  const total = sessions.length;
  if (total === 0) return null;

  const conversions = sessions.filter(s => s.conversionFunnel?.bookingCompleted).length;
  const avgDuration = sessions.reduce((sum, s) => sum + s.totalDuration, 0) / total;
  const avgMessages = sessions.reduce((sum, s) => sum + s.messageCount, 0) / total;

  // Most common conversation paths
  const conversationPaths = sessions.map(s => s.userJourney?.map((step: any) => step.step).join(' -> '));
  const pathCounts = conversationPaths.reduce((acc: any, path) => {
    acc[path] = (acc[path] || 0) + 1;
    return acc;
  }, {});

  return {
    totalSessions: total,
    conversionRate: (conversions / total * 100).toFixed(1),
    avgDurationSeconds: Math.round(avgDuration / 1000),
    avgMessagesPerSession: Math.round(avgMessages),
    topConversationPaths: Object.entries(pathCounts)
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, 5)
      .map(([path, count]) => ({ path, count }))
  };
}

function parseTimeRange(range: string): number {
  const timeMap: Record<string, number> = {
    '1h': 60 * 60 * 1000,
    '24h': 24 * 60 * 60 * 1000,
    '7d': 7 * 24 * 60 * 60 * 1000,
    '30d': 30 * 24 * 60 * 60 * 1000
  };

  return timeMap[range] || timeMap['7d'];
}
