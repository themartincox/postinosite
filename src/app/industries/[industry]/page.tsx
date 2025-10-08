import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const INDUSTRIES = new Set(['dental','medical','beauty-wellness']);

export const metadata: Metadata = {
  title: 'Industry | Postino'
};

export default function IndustryPage({ params }: { params: { industry: string }}) {
  const { industry } = params;
  if (!INDUSTRIES.has(industry)) return notFound();
  return (
    <div className="container">
      <h1>Industry: {industry}</h1>
      <p>Overview coming soon.</p>
    </div>
  );
}

export function generateStaticParams() {
  return Array.from(INDUSTRIES).map(i => ({ industry: i }));
}

