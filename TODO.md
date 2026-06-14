# TVS Admin Invoice Platform TODO

## Current repo snapshot

- The app is currently a static single-page CRM in `index.html`.
- It already includes useful invoice-adjacent features: dashboard, client records, intake forms, document generation, quotations, invoices, receipts, payment status, ledger export, CSV import/export, print/PDF-style document layouts, and company branding.
- Data is stored locally in the browser through JavaScript state/localStorage-style persistence. There is no shared backend, database, auth boundary, or multi-user workflow yet.
- There is no Stripe payment flow yet. Invoices show bank-transfer style payment instructions, but clients cannot pay directly through the invoice.
- There is no Strapi integration yet.

## Product direction

Turn the current internal CRM into a hosted invoice and client operations platform where staff can:

- Log in securely.
- Manage clients, services, quotations, invoices, receipts, agents, deadlines, and payment status.
- Upload logos, client documents, service assets, and invoice attachments.
- Send clients public invoice links.
- Let clients pay directly from an invoice.
- See invoice payment state update automatically after payment.

Clients should be able to:

- Open a secure invoice link without a staff login.
- Review invoice details, line items, taxes, withholding, terms, attachments, and business details.
- Pay by card or other enabled payment method.
- Download invoice and receipt PDFs.

## Phase 0: Repo setup and app structure

- Decide whether to keep the current single-file prototype temporarily or migrate to a framework such as React/Vite, Next.js, or a small server-rendered app.
- Add a README with local setup, deployment notes, data model overview, and contributor instructions.
- Add `.env.example` for Strapi, database, Stripe, email, storage, and app URL values.
- Move inline CSS and JavaScript out of `index.html` if the current app will continue to grow.
- Add basic lint/build checks once a package setup exists.
- Preserve the current document preview and print layout during any migration; it is one of the most valuable existing pieces.

## Phase 1: Backend and Strapi foundation

- Add a Strapi backend, preferably in a `backend/` folder or workspace package.
- Choose the production database for Strapi, such as PostgreSQL.
- Define Strapi collection types for:
  - Users and staff roles
  - Clients
  - Agents
  - Services
  - Intake forms
  - Documents
  - Invoices
  - Invoice line items
  - Quotations
  - Receipts
  - Payments
  - Uploaded files
  - Email templates
  - Audit events
- Configure roles and permissions so staff can only access permitted operational data.
- Add lifecycle hooks or custom controllers for invoice numbering, totals, taxes, withholding, status changes, and payment updates.
- Add seed data based on the current prototype data so local development starts with realistic clients, invoices, and services.

## Phase 2: Authentication and access control

- Add staff login and session handling.
- Define roles such as owner/admin, manager, agent, accountant, and read-only staff.
- Protect CRM routes and Strapi APIs behind authenticated access.
- Add public invoice tokens for client-facing invoice pages.
- Ensure public invoice links expose only the intended invoice, receipt, business, and payment information.
- Add password reset, invite flow, and account deactivation.

## Phase 3: Invoice payment flow

- Decide the Stripe account model:
  - Use a single Stripe account if TVS receives all payments directly.
  - Use Stripe Connect only if separate businesses need to receive funds into their own Stripe accounts.
- Add a backend endpoint to create a Stripe Checkout Session or PaymentIntent from an invoice ID.
- Store Stripe IDs on payment records: checkout session, payment intent, charge, customer, refund, and dispute IDs.
- Add webhook handling for payment success, payment failure, checkout expiration, refunds, disputes, and chargebacks.
- Make webhook processing idempotent so duplicate Stripe events do not double-count payments.
- Update invoice and client payment status from trusted backend events, not from browser redirects.
- Support full payment first. Add partial payments only after the business rules are confirmed.
- Generate a receipt automatically after payment succeeds.
- Send payment confirmation emails to the client and internal notification emails to staff.

## Phase 4: Data migration from local prototype

- Map current client fields to Strapi client records.
- Map current document modes to proper document types: quotation, invoice, receipt, and scope of work.
- Migrate service line items, VAT, withholding tax, totals, remarks, terms, and payment terms.
- Preserve document numbers and dates where possible.
- Add an import path from exported CSV/local JSON so existing browser data can be moved into Strapi.
- Add validation reports for missing email, duplicate clients, invalid totals, and incomplete invoice records.

## Phase 5: Frontend product work

- Replace localStorage persistence with Strapi API reads/writes.
- Keep the current top-level workflows: dashboard, clients, forms, documents, services, ledger, payments, deadlines, and agents.
- Add invoice list filters for draft, sent, viewed, unpaid, partial, paid, overdue, void, and refunded.
- Add invoice actions: save draft, issue, send, duplicate, void, mark manually paid, refund, and download PDF.
- Add a public invoice page with branding, invoice details, attachments, payment button, and paid/void/expired states.
- Add staff settings for company profile, logo, legal address, tax ID, bank details, payment terms, document numbering, and default terms.
- Add client file upload and review screens.
- Add email preview before sending invoices and reminders.

## Phase 6: Asset and upload suggestions

- Company logo and alternate print logo.
- Company stamp or signature image.
- Invoice template assets: header, footer, watermark, brand colors, and terms blocks.
- Client documents: passport, company registration, visa files, IDs, proof of address, photos, forms, and signed agreements.
- Service-specific attachments: scope of work, engagement letters, checklists, and supporting documents.
- Payment proof uploads for manual bank transfers.
- Generated PDFs for quotations, invoices, receipts, and ledgers.
- Email templates for invoice sent, reminder, overdue, payment received, refund issued, and document request.

## Phase 7: Security and reliability

- Keep Stripe secret keys, Strapi tokens, database credentials, and email API keys server-side only.
- Add file type, file size, ownership, and virus/malware scanning rules for uploads.
- Add audit logs for client edits, invoice edits, sends, payments, refunds, uploads, deletions, and permission changes.
- Add rate limiting on login, public invoice pages, payment creation, and email sending.
- Add structured logging for Stripe webhook processing and email delivery.
- Back up Strapi database and uploaded files.
- Define retention and deletion policies for client personal documents.
- Confirm Thai tax, receipt, invoice numbering, VAT, withholding, and recordkeeping requirements before launch.

## Phase 8: Testing and launch checklist

- Unit test invoice totals, VAT, withholding, payment status, and numbering.
- Integration test Strapi CRUD, permissions, file upload, and payment webhook flows.
- End-to-end test create client, create invoice, send public link, pay with Stripe test card, generate receipt, and update dashboard.
- Test failed payment, expired invoice link, duplicate webhook event, refund, disputed payment, and unauthorized public access.
- Test PDF/print output on desktop and mobile.
- Test import/export for clients, invoices, and ledger records.
- Add deployment notes for frontend hosting, Strapi hosting, database, storage, Stripe webhooks, and email provider.

## Suggested MVP sequence

1. Add README, environment documentation, and basic project structure.
2. Add Strapi with clients, services, documents, invoices, line items, payments, files, and users.
3. Migrate the existing CRM screens from local browser state to Strapi-backed data.
4. Add staff authentication and protected routes.
5. Add public invoice links.
6. Add Stripe Checkout or PaymentIntent payment flow.
7. Add Stripe webhooks, receipt generation, and email notifications.
8. Add uploads for logos, client documents, payment proofs, and invoice attachments.
