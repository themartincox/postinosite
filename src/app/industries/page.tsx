import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries | Postino',
  description: 'Sectors we serve.'
};

const INDUSTRIES = [
  { title: 'Dental', slug: 'dental' },
  { title: 'Medical', slug: 'medical' },
  { title: 'Beauty & Wellness', slug: 'beauty-wellness' },
];

export default function IndustriesIndex() {
  return (
    <div className="container">
      <h1>Industries</h1>
      <ul>
        {INDUSTRIES.map(i => (
          <li key={i.slug}><Link href={`/industries/${i.slug}`}>{i.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}

