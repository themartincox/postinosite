import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Postino',
  description: 'Growth Marketing and AI & Automation services.'
};

export default function ServicesIndex() {
  return (
    <div className="container">
      <h1>Services</h1>
      <ul>
        <li><Link href="/services/growth-marketing">Growth Marketing</Link></li>
        <li><Link href="/services/ai-automation">AI & Automation</Link></li>
      </ul>
    </div>
  );
}

