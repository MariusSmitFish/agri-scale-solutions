import { Link } from "react-router-dom";
import usePageTitle from "./usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>This page isn’t here.</h1>
        <p className="intro">The link may be old, or the address may be mistyped.</p>
        <p style={{ marginTop: "1.6rem" }}>
          <Link className="button" to="/">Back to Agri Scale Solutions</Link>
        </p>
      </div>
    </section>
  );
}
