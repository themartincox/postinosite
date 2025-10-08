'use client';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import nav from '@/config/navigation.config';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const btnId = useId();
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false); }
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onEsc);
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onEsc);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const primary = nav.primary;

  return (
    <header className="site-header" data-scrolled={scrolled ? 'true' : 'false'}>
      <nav aria-label="Primary">
        <ul className="nav-row">
          <li className="brand">
            <Link href="/">Postino.</Link>
          </li>
          <li
            ref={wrapRef}
            className="nav-item"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              id={btnId}
              className="nav-trigger"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen(v => !v)}
            >
              {primary[0].label}
              <svg className="caret" width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            {open && primary[0].type === 'mega' && (
              <div id={menuId} role="menu" aria-labelledby={btnId} className="mega">
                {primary[0].columns.map(col => (
                  <div key={col.title} className="mega-col">
                    <div className="mega-title">{col.title}</div>
                    <ul>
                      {col.items.map(it => (
                        <li key={it.path}><Link role="menuitem" href={it.path}>{it.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>

          {primary.slice(1).map(item => (
            <li key={item.label} className="nav-item">
              <Link className="nav-link" href={item.path}>{item.label}</Link>
            </li>
          ))}

          <li className="nav-cta">
            <Link className="btn btn-primary" href={nav.cta.primary.path}>{nav.cta.primary.label}</Link>
            {nav.cta.secondary && (
              <Link className="btn btn-secondary" href={nav.cta.secondary.path}>{nav.cta.secondary.label}</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
