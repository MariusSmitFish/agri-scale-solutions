import { Link } from "react-router-dom";
import { products } from "../data/products";
import Check from "../components/Check";
import usePageTitle from "./usePageTitle";

const audiences = [
  ["Family farms", "A clear account of the operation, the people, and how customers buy from you."],
  ["Market gardens and CSAs", "Shares, seasons, collection points, and what is available this week."],
  ["Dairies and livestock", "What you produce, how it is sold, and how to reach the property."],
  ["Orchards and vineyards", "Opening days, varieties, and visits that do not depend on a social post."],
  ["Nurseries", "What you grow, when it is ready, and how to order or arrange a visit."],
  ["Farm stands", "Trading hours, current availability, and reliable directions."],
  ["Agritourism", "Stays, tastings, school visits, and venues, with enough detail to book."],
  ["Dealers and rural services", "The work you do, the area you cover, and a direct path to a quotation."],
];

const steps = [
  ["01", "Consultation", "We discuss the business and which work should come first. Most initial conversations take about half an hour."],
  ["02", "Design or setup", "You review the website, the artwork, or Agri Scale Farm before anything is treated as complete."],
  ["03", "Review", "You confirm names, colours, wording, and livestock details. We revise anything that is incorrect."],
  ["04", "Handover", "You receive the site, print-ready files for the next season, or a walkthrough of Agri Scale Farm."],
];

const included = [
  "Websites written in clear, direct language",
  "Social media consistent with the business",
  "Business cards with a direct way to reach you",
  "Show branding: banners, tablecloths, shirts, hats, and mugs",
  "Agri Scale Farm for livestock records, on web and mobile",
  "A written quotation before work begins",
];

const questions = [
  ["Do I need to write the content?", "No. We draft the pages from a consultation. You correct anything that does not represent the business, or that is factually wrong. Existing copy you want to keep will be used."],
  ["What if the only photographs are from a phone?", "Photographs of the actual business are preferable to generic stock images. We will help you select a small set. If professional photography is warranted, we will say so."],
  ["I already have a website.", "We can replace it, or retain the parts that work, including an address customers already use. Tell us what is not serving the business and we will start there."],
  ["How long does the work take?", "A straightforward website is often two to four weeks once the facts and photographs are in hand. Cards and show pieces can be faster. The quotation includes the timeline for the agreed scope."],
  ["Who owns the finished work?", "A website we build belongs to you. Hosting can sit on an account in your name. Print files are yours to reprint. Ongoing support after a project is optional and quoted separately."],
];

const marquee = ["Websites", "Social media", "Business cards", "Banners", "Tablecloths", "Shirts", "Hats", "Mugs", "Agri Scale Farm", "Show branding", "Herd records", "Livestock"];

export default function Home() {
  usePageTitle("");

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">Growth · Technology · Strategy</p>
            <h1>A professional presence for <span>agricultural businesses.</span></h1>
            <p className="lede">Agri Scale Solutions provides websites, social media, business stationery, and show branding for farms and agricultural businesses. We also developed Agri Scale Farm, a livestock management system for web and mobile.</p>
            <div className="hero-actions">
              <Link className="button" to="/contact">Request a consultation</Link>
              <Link className="button secondary" to="/products">View products</Link>
            </div>
            <ul className="proof">
              <li>Websites and social media</li>
              <li>Cards, banners, and merchandise</li>
              <li>Agri Scale Farm</li>
            </ul>
          </div>
          <div className="fan-wrap">
            <div className="fan" aria-hidden="true">
              <img className="fan-back" src="/images/product-show.jpg" alt="" />
              <img className="fan-mid" src="/images/product-websites.jpg" alt="" />
              <img className="fan-front" src="/images/agri-scale-hero.jpg" alt="" />
            </div>
            <p className="caption">Sample presentation. Maple Row is an example, not a client.</p>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy}>
              {marquee.map((item) => <li key={`${copy}-${item}`}>{item}</li>)}
            </ul>
          ))}
        </div>
      </div>

      <section className="section" id="services">
        <div className="wrap">
          <p className="kicker">Products</p>
          <h2>What we do</h2>
          <p className="intro">Each product has its own page, listed under Products in the menu.</p>
          <div className="offer">
            {products.map((product) => (
              <Link className={product.slug === "agri-scale-farm" ? "offer-lead" : undefined} key={product.slug} to={`/products/${product.slug}`}>
                <img src={product.hero.src} alt="" />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section band" id="who">
        <div className="wrap">
          <p className="kicker">Who we help</p>
          <h2>For businesses that need to be found.</h2>
          <div className="who-grid">
            {audiences.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <p className="kicker">Process</p>
          <h2>A straightforward process.</h2>
          <p className="intro">A finished brief is not required. A short discussion is enough to scope a website, social media, print, a show stand, or Agri Scale Farm.</p>
          <ol className="process home-steps">
            {steps.map(([num, title, text]) => (
              <li className="step" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section band" id="working">
        <div className="wrap split">
          <div>
            <p className="kicker">Working together</p>
            <h2>One standard of work.</h2>
            <p className="intro">The website, the card, and the banner should read as one business. Pricing is quoted per project, because business cards and a full show stand are different scopes. After the consultation you receive a written quotation covering what is included and how long it will take.</p>
          </div>
          <ul className="checklist">
            {included.map((item) => (
              <li key={item}><Check /><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="questions">
        <div className="wrap">
          <p className="kicker">Questions</p>
          <h2>Before you enquire</h2>
          <div className="faq">
            {questions.map(([summary, answer]) => (
              <details key={summary}>
                <summary>{summary}</summary>
                <p>{answer}</p>
              </details>
            ))}
            <details>
              <summary>What is Agri Scale Farm?</summary>
              <p>It is the livestock management system: bloodlines, camps, breeding, weights, photographs, and inoculations, on the web and as a mobile app. See the <Link to="/products/agri-scale-farm">Agri Scale Farm page</Link>, or open <a href="https://agriscalefarm.netlify.app">agriscalefarm.netlify.app</a>.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="close-band">
        <div className="wrap close-inner">
          <div>
            <p className="kicker">Consultation</p>
            <h2>Tell us about the business.</h2>
            <p>A short note is enough. We reply with what should come first, and a written quotation once the scope is clear.</p>
          </div>
          <Link className="button" to="/contact">Request a consultation</Link>
        </div>
      </section>
    </>
  );
}
