"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AnalyticsData {
  sessions: any[];
  analytics: {
    totalSessions: number;
    conversionRate: string;
    avgDurationSeconds: number;
    avgMessagesPerSession: number;
    topConversationPaths: { path: string; count: number }[];
  };
  totalSessions: number;
  timeRange: string;
}

export default function ChatbotAnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  const fetchAnalytics = async (range: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/chatbot/session-summary?range=${range}`);
      const analyticsData = await response.json();
      setData(analyticsData);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAnalytics(timeRange);
  }, [timeRange]);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Chatbot Analytics</h1>
        <div className="text-center">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Chatbot Analytics Dashboard</h1>

        <div className="space-x-2">
          {['1h', '24h', '7d', '30d'].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTimeRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      {data && data.analytics ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.analytics.totalSessions}</div>
              <p className="text-xs text-muted-foreground">
                Last {timeRange}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.analytics.conversionRate}%</div>
              <p className="text-xs text-muted-foreground">
                Booking completions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.analytics.avgDurationSeconds}s</div>
              <p className="text-xs text-muted-foreground">
                Per conversation
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Avg Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.analytics.avgMessagesPerSession}</div>
              <p className="text-xs text-muted-foreground">
                Per session
              </p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="text-center text-muted-foreground">
              No analytics data available for the selected time range.
            </div>
          </CardContent>
        </Card>
      )}

      {data && data.analytics && data.analytics.topConversationPaths.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Top Conversation Paths</CardTitle>
            <CardDescription>Most common user journey patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.analytics.topConversationPaths.map((path, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="text-sm font-mono">{path.path}</div>
                  <div className="text-sm text-muted-foreground">{path.count} sessions</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {data && data.sessions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Sessions</CardTitle>
            <CardDescription>Latest chatbot conversations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {data.sessions.slice(0, 20).map((session, index) => (
                <div key={index} className="border-b pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium">
                        Session {session.sessionId.slice(-8)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {Math.round(session.totalDuration / 1000)}s • {session.messageCount} messages
                      </div>
                    </div>
                    <div className="text-xs">
                      {session.conversionFunnel?.bookingCompleted ? (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                          Converted
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          No booking
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <Button variant="outline" onClick={() => fetchAnalytics(timeRange)}>
          Refresh Data
        </Button>
      </div>
    </div>
  );
}
