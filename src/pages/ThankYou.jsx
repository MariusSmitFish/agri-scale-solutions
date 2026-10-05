import { Link } from "react-router-dom";
import usePageTitle from "./usePageTitle";

export default function ThankYou() {
  usePageTitle("Message received");

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Message received</p>
        <h1>Thank you. We have received your enquiry.</h1>
        <p className="intro">If one further detail is required before we can quote, we will ask. Otherwise you will receive a clear next step by email.</p>
        <p style={{ marginTop: "1.6rem" }}>
          <Link className="button" to="/">Back to Agri Scale Solutions</Link>
        </p>
      </div>
    </section>
  );
}
