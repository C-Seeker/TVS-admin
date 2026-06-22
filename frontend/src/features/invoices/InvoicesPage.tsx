import { EmptyState } from "../../components/EmptyState";
import { PageHeader } from "../../components/PageHeader";

export function InvoicesPage() {
  return (
    <>
      <PageHeader
        title="Invoices"
        description="Draft, issued, paid, overdue, and void invoices will be managed here."
        actions={
          <button className="button" disabled>
            New invoice
          </button>
        }
      />
      <EmptyState
        title="Invoice model comes next"
        description="The list route is ready for TanStack Query and Strapi-backed filters."
      />
    </>
  );
}
