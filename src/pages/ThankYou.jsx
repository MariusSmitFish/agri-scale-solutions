import { Link } from "react-router-dom";
import usePageTitle from "./usePageTitle";

export default function ThankYou() {
  usePageTitle("Message received");

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Message received</p>
        <h1>Thank you. We’ll read it properly.</h1>
        <p className="intro">If we need one more fact before we can quote, we’ll ask. Otherwise you’ll get a clear next step by email.</p>
        <p style={{ marginTop: "1.6rem" }}>
          <Link className="button" to="/">Back to Agri Scale Solutions</Link>
        </p>
      </div>
    </section>
  );
}
