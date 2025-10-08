export type ResourceFacetId = 'topic'|'type'|'audience'|'difficulty'|'date';
export interface ResourceFilterConfig {
  facets: (
    | { id:'topic'|'type'|'audience'|'difficulty'; type:'multi'|'single'; options:string[] }
    | { id:'date'; type:'date' }
  )[];
  queryParamsOrder: ResourceFacetId[];
}
const resourcesFilters: ResourceFilterConfig = {
  facets: [
    { id:'topic', type:'multi', options:['SEO','Content','Email','Social','Branding','Automation','CRM/Intelligence'] },
    { id:'type', type:'multi', options:['Article','Guide','Template','Video','Demo'] },
    { id:'audience', type:'multi', options:['Owner','Marketing','Ops/RevOps','CTO'] },
    { id:'difficulty', type:'single', options:['Foundations','Intermediate','Advanced'] },
    { id:'date', type:'date' }
  ],
  queryParamsOrder: ['topic','type','audience','difficulty','date']
};
export default resourcesFilters;

