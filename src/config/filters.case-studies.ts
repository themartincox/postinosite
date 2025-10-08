export type FacetId = 'industry'|'service'|'outcome'|'size'|'stack'|'year'|'region';
export type Facet =
  | { id: Exclude<FacetId,'year'>; type: 'single'|'multi'; options?: string[]; optionsSource?: 'industries'|'services'|'stacks' }
  | { id: 'year'; type: 'range'; min: number; max: number|'current' };

export interface FilterConfig {
  facets: Facet[];
  queryParamsOrder: FacetId[];
}
const caseStudyFilters: FilterConfig = {
  facets: [
    { id:'industry', type:'multi', optionsSource:'industries' },
    { id:'service',  type:'multi', optionsSource:'services' },
    { id:'outcome',  type:'multi', options:['Leads','Revenue Uplift','Hours Saved','CSAT'] },
    { id:'size',     type:'single', options:['Micro','SMB','Mid‑market'] },
    { id:'stack',    type:'multi', optionsSource:'stacks' },
    { id:'year',     type:'range', min:2018, max:'current' },
    { id:'region',   type:'multi', options:['UK','EU','US','Global'] }
  ],
  queryParamsOrder: ['industry','service','outcome','size','stack','year','region']
};
export default caseStudyFilters;

