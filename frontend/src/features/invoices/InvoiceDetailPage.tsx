import { useParams } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader";

export function InvoiceDetailPage() {
  const { documentId } = useParams();

  return (
    <PageHeader
      eyebrow="Invoice"
      title={documentId ?? "Unknown invoice"}
      description="The editor and print-preserving document preview will be implemented in this feature boundary."
    />
  );
}
