import { Link, useParams } from "react-router-dom";
import { productBySlug } from "../data/products";
import NotFound from "./NotFound";
import usePageTitle from "./usePageTitle";

export default function ProductPage() {
  const { slug } = useParams();
  const product = productBySlug(slug);
  usePageTitle(product ? product.title : "Page not found");

  if (!product) return <NotFound />;

  const enquire = `/contact?need=${encodeURIComponent(product.need)}`;

  return (
    <>
      <section className="product-hero">
        <div className="wrap product-hero-grid">
          <div>
            <p className="kicker"><Link to="/products">Products</Link></p>
            <h1>{product.title}</h1>
            <p className="lede">{product.lede}</p>
            <div className="hero-actions">
              {product.external && (
                <a className="button" href={product.external.href} target="_blank" rel="noopener noreferrer">{product.external.label}</a>
              )}
              <Link className={product.external ? "button secondary" : "button"} to={enquire}>Request a consultation</Link>
            </div>
            <ul className="proof">
              {product.proof.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <figure className="product-photo">
            <img src={product.hero.src} alt={product.hero.alt} />
            <figcaption>{product.hero.caption}</figcaption>
          </figure>
        </div>
      </section>

      {product.sections.map((section) => {
        if (section.image && !section.title) {
          return (
            <section className="section band" key={section.image.src}>
              <div className="wrap">
                <figure className="product-photo">
                  <img src={section.image.src} alt={section.image.alt} />
                  {section.image.caption && <figcaption>{section.image.caption}</figcaption>}
                </figure>
              </div>
            </section>
          );
        }

        if (section.steps) {
          return (
            <section className="section" key={section.title}>
              <div className="wrap">
                <p className="kicker">{section.kicker}</p>
                <h2>{section.title}</h2>
                <ol className="process cols-3">
                  {section.steps.map(([num, title, text]) => (
                    <li className="step" key={num}>
                      <span>{num}</span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          );
        }

        if (section.items) {
          return (
            <section className="section" key={section.title}>
              <div className="wrap">
                <p className="kicker">{section.kicker}</p>
                <h2>{section.title}</h2>
                <ul className="capability-grid">
                  {section.items.map(([title, text]) => (
                    <li key={title}>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        }

        return (
          <section className="section" key={section.title}>
            <div className="wrap narrow">
              <p className="kicker">{section.kicker}</p>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p className="intro" key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        );
      })}

      <section className="section band">
        <div className="wrap product-close">
          <div>
            <p className="kicker">Next step</p>
            <h2>Tell us if this is the piece you need.</h2>
            <p className="intro">A short note is enough. We reply with the scope and, once that is clear, a written quotation.</p>
          </div>
          <Link className="button" to={enquire}>Enquire about {product.title.toLowerCase()}</Link>
        </div>
      </section>
    </>
  );
}
