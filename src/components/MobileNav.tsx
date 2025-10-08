'use client';
import Link from 'next/link';
import { useState } from 'react';
import nav from '@/config/navigation.config';

export default function MobileNav() {
  const [openCompany, setOpenCompany] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <div className="mobile-nav">
      <ul className="mobile-list">
        {/* First screen: ≤4 items */}
        <li><button onClick={() => setOpenServices(v=>!v)} aria-expanded={openServices}>Services</button></li>
        <li><Link href="/industries">Industries</Link></li>
        <li><Link href="/case-studies">Case Studies</Link></li>
        <li><Link href="/resources">Resources</Link></li>
      </ul>

      {openServices && (
        <div className="mobile-mega">
          {nav.primary[0].type === 'mega' && nav.primary[0].columns.map(col => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.items.map(it => (<li key={it.path}><Link href={it.path}>{it.label}</Link></li>))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div className="mobile-secondary">
        <button onClick={() => setOpenCompany(v=>!v)} aria-expanded={openCompany}>Company</button>
        {openCompany && (
          <ul>
            <li><Link href="/about">About</Link></li>
          </ul>
        )}
      </div>

      <div className="mobile-cta">
        <Link className="btn btn-primary" href="/contact">Get Strategy Session</Link>
      </div>
    </div>
  );
}

