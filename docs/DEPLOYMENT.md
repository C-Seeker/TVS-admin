# Deployment and environment contract

## Initial topology

The applications deploy independently:

```text
Staff browser ───────> admin.example.com   (Vite static build)
Client invoice link -> invoice.example.com (same Vite build, public route)
                               |
                               v
                         api.example.com   (Strapi)
                          |      |      |
                     PostgreSQL files  providers
                                      (Stripe/email)
```

The public invoice route is part of the frontend bundle but is explicitly marked `noindex`. It must retrieve invoice data using a scoped, revocable public token rather than a staff credential.

## Frontend

- Build command: `npm ci && npm run build` from `frontend/`.
- Publish directory: `frontend/dist/`.
- The host must send unknown application paths to `index.html` so React Router can resolve them.
- `VITE_API_URL` is public build-time configuration. Do not put secrets in any `VITE_` variable.

## Backend

- Install and build with Node.js 22 using `npm ci && npm run build` from `backend/`.
- Start with `npm run start`.
- Run at least two health-checked instances when availability requirements justify it.
- Terminate TLS at the hosting platform or reverse proxy.
- Configure CORS for the exact admin and invoice origins.

## Persistence

- SQLite is for local development only.
- Production uses managed PostgreSQL with automated backups and point-in-time recovery where available.
- Uploaded files use durable object storage, not an instance filesystem.
- Database and upload restoration must be tested before launch.

## Environment ownership

| Variable group                 | Owner               | Exposure |
| ------------------------------ | ------------------- | -------- |
| `VITE_API_URL`                 | Frontend deployment | Public   |
| Strapi application/JWT keys    | Backend deployment  | Secret   |
| Database credentials           | Backend deployment  | Secret   |
| Stripe secret and webhook keys | Backend deployment  | Secret   |
| Email provider credentials     | Backend deployment  | Secret   |
| Object-storage credentials     | Backend deployment  | Secret   |

Production secrets belong in the hosting provider's secret manager. They must not be stored in GitHub variables, build logs, browser bundles, or checked-in environment files.

## Environments

Maintain separate development, staging, and production databases, storage buckets, Stripe modes, email credentials, and Strapi secrets. Staging should use synthetic client data and exercise the same deployment path as production.
