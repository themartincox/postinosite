import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI & Automation | Postino',
  description: 'Process automation, intelligence & CRM, custom AI, chatbots and more.'
};

export default function AIAutomation() {
  const items = [
    { label: 'Process Automation', slug: 'process-automation' },
    { label: 'Intelligence & CRM', slug: 'intelligence-crm' },
    { label: 'Predictive Analytics', slug: 'intelligence-crm/predictive-analytics' },
    { label: 'Segmentation', slug: 'intelligence-crm/segmentation' },
    { label: 'Personalised Outreach', slug: 'intelligence-crm/personalised-outreach' },
    { label: 'Custom AI Solutions', slug: 'custom-ai' },
    { label: 'Intelligent Chatbots', slug: 'custom-ai/intelligent-chatbots' },
    { label: 'Automated Lead Routing', slug: 'custom-ai/automated-lead-routing' },
    { label: 'Document Processing', slug: 'custom-ai/document-processing' }
  ];
  return (
    <div className="container">
      <h1>AI & Automation</h1>
      <ul>
        {items.map(i => (
          <li key={i.slug}><Link href={`/services/ai-automation/${i.slug}`}>{i.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

