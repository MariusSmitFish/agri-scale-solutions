import { Link } from "react-router-dom";
import { services } from "../data/services";
import usePageTitle from "./usePageTitle";

export default function Services() {
  usePageTitle("Services");

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Services</p>
        <h1>What we do</h1>
        <p className="intro">Pick a service to see the detail, or go straight to Agri Track Farm if the job is the flock records.</p>
        <div className="who-grid">
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </Link>
          ))}
          <Link to="/agri-track">
            <h3>Agri Track Farm</h3>
            <p>A comprehensive management tool for your flock. Bloodlines, animal details, and inoculations.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
