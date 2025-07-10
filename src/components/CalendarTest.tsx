"use client";

import React, { useState } from 'react';

export default function CalendarTest() {
  const [status, setStatus] = useState<string>('Ready to test');
  const [isLoading, setIsLoading] = useState(false);

  const testGoogleAuth = async () => {
    setIsLoading(true);
    setStatus('Testing Google Calendar connection...');

    try {
      // Test if credentials are configured
      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      if (!clientId || clientId.includes('your_')) {
        setStatus('❌ Google credentials not configured in .env.local');
        setIsLoading(false);
        return;
      }

      setStatus('✅ Credentials found, testing API...');

      // Test availability endpoint
      const response = await fetch('/api/calendar/availability');
      const data = await response.json();

      if (data.authenticated) {
        setStatus('🎉 Google Calendar fully connected and working!');
      } else {
        setStatus('🔵 Credentials configured but not authenticated. Click "Connect Calendar" in chatbot.');
      }
    } catch (error) {
      setStatus(`❌ Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const openAuthFlow = () => {
    window.open('/api/auth/google', '_blank');
  };

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50">
      <h3 className="font-bold text-sm mb-2">🗓️ Calendar Integration Test</h3>

      <div className="text-xs mb-3 p-2 bg-gray-50 rounded">
        {status}
      </div>

      <div className="space-y-2">
        <button
          onClick={testGoogleAuth}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white px-3 py-2 rounded text-xs hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Testing...' : '🔍 Test Calendar Setup'}
        </button>

        <button
          onClick={openAuthFlow}
          className="w-full bg-emerald-600 text-white px-3 py-2 rounded text-xs hover:bg-emerald-700"
        >
          🔗 Connect Google Calendar
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        <strong>Setup Steps:</strong>
        <ol className="list-decimal list-inside text-xs mt-1 space-y-1">
          <li>Get Google OAuth credentials</li>
          <li>Update .env.local file</li>
          <li>Restart dev server</li>
          <li>Click "Connect Google Calendar"</li>
        </ol>
      </div>
    </div>
  );
}
