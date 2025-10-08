import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Growth Marketing | Postino',
  description: 'SEO, Content, CRO, Email, Social and Strategy.'
};

export default function GrowthMarketing() {
  const items = [
    { label: 'SEO Strategy & Implementation', slug: 'seo' },
    { label: 'Content Strategy & Creation', slug: 'content' },
    { label: 'Email Marketing Automation', slug: 'email-marketing-automation' },
    { label: 'Social Media Management', slug: 'social-media' },
    { label: 'Branding & Creative', slug: 'branding-creative' },
    { label: 'Conversion Rate Optimisation (CRO)', slug: 'cro' },
    { label: 'Strategy & Consulting', slug: 'strategy-consulting' }
  ];
  return (
    <div className="container">
      <h1>Growth Marketing</h1>
      <ul>
        {items.map(i => (
          <li key={i.slug}><Link href={`/services/growth-marketing/${i.slug}`}>{i.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

