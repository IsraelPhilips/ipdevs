import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Israel Philips</title>
      </Helmet>
      <section className="detail-shell narrow-shell">
        <span className="section-eyebrow">404</span>
        <h1>The page you are looking for is not here.</h1>
        <p>Let’s take you back to the main portfolio experience.</p>
        <Link className="button" to="/">
          Return home
        </Link>
      </section>
    </>
  );
}

