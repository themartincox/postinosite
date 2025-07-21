'use client';

import dynamic from 'next/dynamic';

// Dynamically import PWA components with SSR disabled
const PWAInstallPrompt = dynamic(() => import('@/components/PWAInstallPrompt'), {
  loading: () => null,
  ssr: false,
});

const PWAInit = dynamic(() => import('@/components/PWAInit'), {
  loading: () => null,
  ssr: false,
});

export default function PWAWrapper() {
  return (
    <>
      <PWAInstallPrompt />
      <PWAInit />
    </>
  );
}
