import { Route, Routes } from "react-router-dom";
import { AppShell } from "../layouts/AppShell";
import { ClientsPage } from "../features/clients/ClientsPage";
import { DashboardPage } from "../features/dashboard/DashboardPage";
import { InvoiceDetailPage } from "../features/invoices/InvoiceDetailPage";
import { InvoicesPage } from "../features/invoices/InvoicesPage";
import { PublicInvoicePage } from "../features/public-invoice/PublicInvoicePage";
import { NotFoundPage } from "../features/system/NotFoundPage";

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<DashboardPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="invoices" element={<InvoicesPage />} />
        <Route path="invoices/:documentId" element={<InvoiceDetailPage />} />
      </Route>
      <Route path="pay/:token" element={<PublicInvoicePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
