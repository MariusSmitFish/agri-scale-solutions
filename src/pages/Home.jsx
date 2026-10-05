import { Link } from "react-router-dom";
import { services } from "../data/services";
import Check from "../components/Check";
import usePageTitle from "./usePageTitle";

const audiences = [
  ["Family farms", "An honest account of the holding, the people, and how to buy from you."],
  ["Market gardens and CSAs", "Shares, seasons, pickup, and what a box looks like this week."],
  ["Dairies and livestock", "What you raise, how it is sold, and where the gate actually is."],
  ["Orchards and vineyards", "Opening days, varieties, and visits that do not rely on a Facebook post."],
  ["Nurseries", "What you grow, when it is ready, and how to order or visit."],
  ["Farm stands", "Hours, what is on the table, and a map that works on a Saturday morning."],
  ["Agritourism", "Stays, tastings, school trips, and barns — with enough detail to book."],
  ["Dealers and rural services", "The work you do, the ground you cover, and a straight path to a quote."],
];

const steps = [
  ["01", "A short conversation", "Tell us about the farm or the business, and which piece you need first. Half an hour is usually enough."],
  ["02", "Design or setup", "We show you the website, the artwork, or Agri Track before anything is treated as finished."],
  ["03", "You correct the facts", "Names, colours, wording, animal details. You mark what is wrong. We change it."],
  ["04", "Handover", "You get the site, the files you can reprint next season, or a walkthrough of Agri Track."],
];

const included = [
  "Websites written in plain language",
  "Social media that sounds like you",
  "Business cards with a clear way to reach you",
  "Show branding: banners, tablecloths, shirts, hats, and mugs",
  "Agri Track Farm for bloodlines, animal details, and inoculations",
  "A written quote before we start",
];

const questions = [
  ["Do I have to write everything?", "No. We draft the pages from a conversation. You correct anything that does not sound like you, or that gets a fact wrong. If you already have words you like, we will use them."],
  ["What if my photos are just phone pictures?", "Phone photos of the real place are better than polished pictures of someone else’s farm. We will help you choose a handful. If a photographer is worth it, we will say so."],
  ["I already have a website.", "We can replace it, or keep the parts that work — including an address customers already know. Tell us what feels broken and we will start there."],
  ["How long does the work take?", "A straightforward website is often two to four weeks once we have the facts and photos. Cards and show pieces can be quicker. The quote includes the timeline for the job you actually want."],
  ["Will I be stuck paying you forever?", "No. A website we build is yours. Hosting can sit on an account in your name. Print files are yours to reprint. Upkeep after a project is optional, and we will price it separately."],
];

const marquee = ["Websites", "Social media", "Business cards", "Banners", "Tablecloths", "Shirts", "Hats", "Mugs", "Agri Track Farm", "Show branding", "Flock records", "Livestock"];

export default function Home() {
  usePageTitle("");

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">Growth · Technology · Strategy</p>
            <h1>Make the farm easy to recognise.</h1>
            <p className="lede">Agri Scale Solutions helps farmers and agricultural businesses with websites, social media, business cards, and branding for shows. We also built Agri Track Farm, a tool for a flock’s bloodlines, animal details, and inoculations.</p>
            <div className="hero-actions">
              <Link className="button" to="/contact">Tell us about the farm</Link>
              <Link className="button secondary" to="/services">See the services</Link>
            </div>
            <ul className="proof">
              <li>Websites and social media</li>
              <li>Cards, banners, and merchandise</li>
              <li>Agri Track Farm</li>
            </ul>
          </div>
          <div>
            <aside className="preview" aria-hidden="true">
              <div className="preview-top">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <em>maplerow.farm</em>
              </div>
              <svg className="landscape" viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">
                <rect width="640" height="220" fill="#e7d3b0" />
                <circle cx="520" cy="58" r="28" fill="#e6c27a" />
                <path d="M0 130C90 96 150 150 230 124C320 94 360 150 450 120C520 98 580 128 640 112V220H0Z" fill="#7ea15f" />
                <path d="M0 160C110 136 170 186 270 160C380 132 430 180 530 158C580 148 610 160 640 150V220H0Z" fill="#4e7344" />
                <path d="M0 188C140 170 220 204 340 186C460 168 530 198 640 184V220H0Z" fill="#2c432c" />
              </svg>
              <div className="preview-body">
                <p className="preview-kicker">Maple Row Farm · Sample layout</p>
                <h2>This Saturday at the gate.</h2>
                <p>Eggs, lamb boxes, and the last of the dahlias. Open 8am–1pm.</p>
                <div className="chips">
                  <span>In season</span>
                  <span>Find us</span>
                  <span>CSA shares</span>
                </div>
              </div>
            </aside>
            <p className="caption">A sample of the kind of site we design — not a client, a standard.</p>
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
          <p className="kicker">Services</p>
          <h2>What we do</h2>
          <p className="intro">Each service has its own page, so a link can point at the exact job. Agri Track Farm lives on its own route as well.</p>
          <div className="who-grid">
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </Link>
            ))}
            <Link to="/agri-track">
              <h3>Agri Track Farm</h3>
              <p>A flock tool for bloodlines, animal details, and inoculations.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section band" id="who">
        <div className="wrap">
          <p className="kicker">Who we help</p>
          <h2>If customers need to find you, you are in the right place.</h2>
          <div className="who-grid">
            {audiences.map(([title, text]) => (
              <article key={title}>
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
          <h2>Four steps. No mystery.</h2>
          <p className="intro">You do not need a finished brief. You need half an hour and a clear idea of the job: a website, social media, print, a show stand, or Agri Track.</p>
          <ol className="process">
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
            <h2>A plain way of working.</h2>
            <p className="intro">The website, the card, and the banner should look like the same farm. We do not publish one price, because a set of business cards and a full show stand are different jobs. After we talk, you get a written quote with what is included and how long it will take.</p>
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
          <h2>Before you write to us</h2>
          <div className="faq">
            {questions.map(([summary, answer]) => (
              <details key={summary}>
                <summary>{summary}</summary>
                <p>{answer}</p>
              </details>
            ))}
            <details>
              <summary>What is Agri Track Farm?</summary>
              <p>It is a flock management tool. You can record bloodlines, the details that belong to each animal, and inoculations. Open the <Link to="/agri-track">Agri Track page</Link>, or the app at <a href="https://agritrackfarm.netlify.app">agritrackfarm.netlify.app</a>.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
