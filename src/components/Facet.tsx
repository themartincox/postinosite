'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getAll, setAll } from '@/lib/querystring';

type Props = { id: string; label: string; options: string[]; multi?: boolean };

export default function Facet({ id, label, options, multi = true }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selected = new Set(getAll(new URLSearchParams(searchParams.toString()), id));

  function toggle(opt: string) {
    const sp = new URLSearchParams(searchParams.toString());
    const next = new Set(selected);
    if (next.has(opt)) next.delete(opt); else { if (!multi) next.clear(); next.add(opt); }
    setAll(sp, id, [...next]);
    router.replace(`${pathname}?${sp.toString()}`);
  }

  return (
    <fieldset className="facet">
      <legend>{label}</legend>
      <ul>
        {options.map(o => (
          <li key={o}>
            <label>
              <input
                type={multi ? 'checkbox' : 'radio'}
                name={id}
                value={o}
                checked={selected.has(o)}
                onChange={() => toggle(o)}
              />
              <span>{o}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

