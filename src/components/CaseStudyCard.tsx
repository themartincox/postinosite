type Props = { title: string; summary: string; industry?: string; services?: string[] };
export default function CaseStudyCard({ title, summary, industry, services = []}: Props) {
  return (
    <article className="case-study-card">
      <h3>{title}</h3>
      <p>{summary}</p>
      <ul className="badges">
        {industry ? <li>{industry}</li> : null}
        {services.map(s => <li key={s}>{s}</li>)}
      </ul>
    </article>
  );
}

