import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function PublicInvoicePage() {
  const { token } = useParams();

  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow, noarchive";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  return (
    <main className="public-page">
      <p className="eyebrow">Secure invoice</p>
      <h1>Invoice link received</h1>
      <p>
        Token <code>{token}</code> will be exchanged for the public invoice
        payload once that backend endpoint exists.
      </p>
    </main>
  );
}
