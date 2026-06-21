# TVS Admin

TVS Admin is being migrated from the original single-file CRM prototype into two applications:

- `frontend/` — React, TypeScript, and Vite staff interface plus secure public invoice routes.
- `backend/` — Strapi 5 API, admin panel, authentication, uploads, and operational data.
- `index.html` — the existing prototype, retained as the reference implementation for document preview and print output.

## Prerequisites

- Node.js 22 (see `.nvmrc`)
- npm 10 or newer

## Local setup

Install dependencies if they are not already present:

```bash
cd frontend && npm install
cd ../backend && npm install
```

Create local environment files:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

The checked-in backend example contains placeholder secrets. Replace every `change-me` value before running outside local development.

Start the applications in separate terminals:

```bash
cd backend && npm run develop
cd frontend && npm run dev
```

- Frontend: `http://localhost:5173`
- Strapi API and admin: `http://localhost:1337`

## Validation

```bash
cd frontend
npm run lint
npm run test
npm run build

cd ../backend
npm run build
```

The same checks run automatically in GitHub Actions for pull requests and pushes to `main`.

## Frontend structure

```text
src/
  api/          Strapi HTTP client and API helpers
  app/          routing and application providers
  components/   shared presentational components
  features/     clients, invoices, payments, and other workflows
  layouts/      authenticated and public page shells
  styles/       global design foundation
  types/        shared API and domain types
```

TanStack Query owns server state. React Hook Form and Zod are installed for forms and validation. Public invoice routes explicitly opt out of search indexing.

## Backend direction

Development uses SQLite for a zero-configuration start. Production should use PostgreSQL. Strapi collection types will be added incrementally for clients, agents, services, documents, invoices, line items, payments, files, and audit events.

Secrets, generated uploads, local databases, and build artifacts are ignored by Git.

The initial hosting layout and environment ownership rules are documented in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Migration rule

Do not remove the root prototype until the React document preview and printed/PDF output have been compared against it and accepted. Migration should proceed one feature at a time.

Use [`docs/LEGACY_MIGRATION_CHECKLIST.md`](docs/LEGACY_MIGRATION_CHECKLIST.md) for that acceptance process. Contribution boundaries and pull-request expectations are in [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Phase 0 status

The application structure, environment templates, quality checks, deployment contract, contributor workflow, and legacy migration guardrail are established. Phase 1 can begin with Strapi content types and backend-enforced invoice rules.
