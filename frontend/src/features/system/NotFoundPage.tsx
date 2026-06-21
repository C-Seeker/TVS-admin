import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="public-page">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <Link className="button" to="/">
        Return to dashboard
      </Link>
    </main>
  );
}
