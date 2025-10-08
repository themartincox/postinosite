'use client';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import nav from '@/config/navigation.config';

export default function Header() {
  const [open, setOpen] = useState(false);
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
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onEsc); };
  }, []);

  const primary = nav.primary;

  return (
    <header className="site-header">
      <nav aria-label="Primary">
        <ul className="nav-row">
          <li ref={wrapRef} className="nav-item">
            <button
              id={btnId}
              className="nav-trigger"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen(v => !v)}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {primary[0].label}
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

