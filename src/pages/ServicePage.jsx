import { Link, useParams } from "react-router-dom";
import Check from "../components/Check";
import { serviceBySlug } from "../data/services";
import NotFound from "./NotFound";
import usePageTitle from "./usePageTitle";

export default function ServicePage() {
  const { slug } = useParams();
  const service = serviceBySlug(slug);
  usePageTitle(service ? service.title : "Page not found");

  if (!service) return <NotFound />;

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker"><Link to="/services">Services</Link></p>
        <h1>{service.title}</h1>
        <p className="intro">{service.body}</p>
        {service.items && (
          <ul className="checklist" style={{ marginTop: "1.5rem" }}>
            {service.items.map((item) => (
              <li key={item}><Check /><span>{item}</span></li>
            ))}
          </ul>
        )}
        <p style={{ marginTop: "1.75rem" }}>
          <Link className="button" to={`/contact?need=${encodeURIComponent(service.need)}`}>
            Ask about {service.title.toLowerCase()}
          </Link>
        </p>
      </div>
    </section>
  );
}
