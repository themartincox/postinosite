'use client';

import { useEffect, useState } from 'react';
import {
  registerServiceWorker,
  isPWASupported,
  addOfflineEventListeners,
  trackPWAUsage,
  cacheImportantPages
} from '@/lib/pwa-utils';

export default function PWAInit() {
  useEffect(() => {
    // Only run PWA initialization in production or when explicitly enabled
    const initPWA = process.env.NODE_ENV === 'production' ||
                   process.env.NEXT_PUBLIC_ENABLE_PWA === 'true';

    if (!initPWA || !isPWASupported()) {
      console.log('PWA not supported or disabled');
      return;
    }

    let cleanupOfflineListeners: (() => void) | undefined;

    const initializePWA = async () => {
      try {
        // Register service worker
        const registration = await registerServiceWorker();

        if (registration) {
          console.log('PWA initialized successfully');
          trackPWAUsage('pwa_initialized');

          // Cache important pages
          setTimeout(cacheImportantPages, 2000);

          // Set up offline event listeners
          cleanupOfflineListeners = addOfflineEventListeners(
            () => {
              console.log('App back online');
              trackPWAUsage('back_online');
              // Could show a "back online" notification
            },
            () => {
              console.log('App went offline');
              trackPWAUsage('went_offline');
              // Could show an "offline mode" notification
            }
          );
        }
      } catch (error) {
        console.error('PWA initialization failed:', error);
        trackPWAUsage('pwa_init_failed', { error: error instanceof Error ? error.message : 'Unknown error' });
      }
    };

    // Initialize PWA after a short delay to not block initial render
    const timeoutId = setTimeout(initializePWA, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (cleanupOfflineListeners) {
        cleanupOfflineListeners();
      }
    };
  }, []);

  // This component doesn't render anything
  return null;
}

// Optional: Export a hook for PWA status
export function usePWAStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    // Check if running as PWA
    setIsPWA(
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true
    );

    // Monitor online status
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return { isOnline, isPWA };
}
