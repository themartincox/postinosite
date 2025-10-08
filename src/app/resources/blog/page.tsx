import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Resources | Postino',
  description: 'Articles and updates from Postino.'
};

export default function BlogList() {
  return (
    <div className="container">
      <h1>Blog</h1>
      <p>Posts will appear here.</p>
    </div>
  );
}

