import { EmptyState } from "../../components/EmptyState";
import { PageHeader } from "../../components/PageHeader";

export function ClientsPage() {
  return (
    <>
      <PageHeader
        title="Clients"
        description="Client records will move here when the first Strapi collection type is available."
        actions={
          <button className="button" disabled>
            New client
          </button>
        }
      />
      <EmptyState
        title="No API connected yet"
        description="The route and feature boundary are ready for the client CRUD workflow."
      />
    </>
  );
}
