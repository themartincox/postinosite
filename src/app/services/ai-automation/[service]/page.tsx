import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const SERVICES = new Set([
  'process-automation',
  'intelligence-crm',
  'intelligence-crm/predictive-analytics',
  'intelligence-crm/segmentation',
  'intelligence-crm/personalised-outreach',
  'custom-ai',
  'custom-ai/intelligent-chatbots',
  'custom-ai/automated-lead-routing',
  'custom-ai/document-processing'
]);

export const metadata: Metadata = {
  title: 'AI & Automation Service | Postino'
};

export default function ServicePage({ params }: { params: { service: string[] }}) {
  const path = params.service.join('/');
  if (!SERVICES.has(path)) return notFound();
  return (
    <div className="container">
      <h1>AI & Automation: {path}</h1>
      <p>Details coming soon.</p>
    </div>
  );
}

export function generateStaticParams() {
  return Array.from(SERVICES).map(s => ({ service: s.split('/') }));
}

