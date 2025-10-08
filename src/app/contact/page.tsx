import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Postino',
  description: 'Get a Strategy Session or request an Automation Demo.'
};

export default function ContactPage() {
  return (
    <div className="container">
      <h1>Get Strategy Session</h1>
      <p>Tell us about your goals and current challenges.</p>
    </div>
  );
}

