import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const SERVICES = new Set([
  'seo','content','email-marketing-automation','social-media','branding-creative','cro','strategy-consulting'
]);

export const metadata: Metadata = {
  title: 'Growth Marketing Service | Postino'
};

export default function ServicePage({ params }: { params: { service: string }}) {
  const { service } = params;
  if (!SERVICES.has(service)) return notFound();
  return (
    <div className="container">
      <h1>Growth Marketing: {service}</h1>
      <p>Details coming soon.</p>
    </div>
  );
}

export function generateStaticParams() {
  return Array.from(SERVICES).map(s => ({ service: s }));
}

