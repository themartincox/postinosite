import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Postino',
  description: 'About Postino — Where Growth Meets AI Innovation.'
};

export default function AboutPage() {
  return (
    <div className="container">
      <h1>About Postino</h1>
      <p>We blend expert marketing with AI & automation to drive growth.</p>
    </div>
  );
}

