import { Link } from "react-router-dom";
import { products } from "../data/products";
import usePageTitle from "./usePageTitle";

export default function Products() {
  usePageTitle("Products");

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Products</p>
        <h1>What we provide.</h1>
        <p className="intro">Agri Scale Solutions provides livestock software and the identity around a farm or agricultural business: the website, the social presence, the card, and the show stand. Each product has its own page.</p>
        <div className="product-index">
          {products.map((product) => (
            <Link key={product.slug} to={`/products/${product.slug}`}>
              <img src={product.hero.src} alt="" />
              <div>
                <h2>{product.title}</h2>
                <p>{product.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
