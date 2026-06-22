import { PageHeader } from "../../components/PageHeader";

const metrics = [
  { label: "Active clients", value: "—" },
  { label: "Open invoices", value: "—" },
  { label: "Outstanding", value: "—" },
  { label: "Due this week", value: "—" },
];

export function DashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workspace"
        title="Operations overview"
        description="The frontend shell is ready. Dashboard data will be connected after the Strapi content types are defined."
      />
      <section className="metric-grid" aria-label="Operations metrics">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>
      <section className="panel">
        <div>
          <p className="eyebrow">Migration guardrail</p>
          <h2>Document output stays authoritative</h2>
          <p>
            The existing invoice preview and print layout remain in the root
            prototype until their React replacement is visually verified.
          </p>
        </div>
      </section>
    </>
  );
}
