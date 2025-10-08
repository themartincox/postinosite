'use client';
import Facet from './Facet';
import caseStudyFilters from '@/config/filters.case-studies';
import resourcesFilters from '@/config/filters.resources';

export function CaseStudyFilterBar({ industries, services, stacks }:{
  industries:string[]; services:string[]; stacks:string[];
}) {
  const expand = (id:string) => {
    if (id==='industry') return industries;
    if (id==='service') return services;
    if (id==='stack') return stacks;
    return (caseStudyFilters.facets.find(f=>f.id===id && 'options' in f) as any)?.options ?? [];
  };

  return (
    <div className="filters" aria-live="polite">
      {caseStudyFilters.facets.map(f => (
        f.id === 'year' ? null : (
          <Facet
            key={f.id}
            id={f.id}
            label={f.id[0].toUpperCase()+f.id.slice(1)}
            options={expand(f.id)}
            multi={f.type !== 'single'}
          />
        )
      ))}
    </div>
  );
}

export function ResourceFilterBar() {
  return (
    <div className="filters" aria-live="polite">
      {resourcesFilters.facets.filter(f=>f.id!=='date').map(f => (
        <Facet key={f.id} id={f.id} label={f.id} options={(f as any).options} multi={f.type!=='single'} />
      ))}
    </div>
  );
}

