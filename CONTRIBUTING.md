# Contributing

## Development flow

1. Create a focused branch from `main`.
2. Keep frontend work inside `frontend/` and backend work inside `backend/`.
3. Copy the relevant `.env.example` file to `.env`; never commit credentials or customer data.
4. Run the validation commands documented in `README.md` before opening a pull request.
5. Describe schema changes, environment-variable changes, and migration consequences in the pull request.

## Architecture boundaries

- Components shared across multiple frontend features belong in `frontend/src/components/`.
- Feature-specific UI, queries, schemas, and forms stay together in `frontend/src/features/<feature>/`.
- Strapi content types and custom API behavior belong in `backend/src/api/`.
- External service adapters should be isolated behind backend services; Stripe, email, and storage secrets must never reach the browser.
- The root `index.html` is a frozen migration reference. Do not add product features to it.

## Data and document changes

Invoice calculations, numbering, payment state, and authorization must be enforced by the backend. Any migration of document rendering must follow `docs/LEGACY_MIGRATION_CHECKLIST.md` before the corresponding legacy implementation is removed.

Generated files, local databases, exports, uploads, and real client documents must not be committed.
