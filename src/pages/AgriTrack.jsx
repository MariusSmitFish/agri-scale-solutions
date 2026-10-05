import { Link } from "react-router-dom";
import usePageTitle from "./usePageTitle";

const features = [
  ["Bloodlines", "Keep the line of each animal clear, so breeding decisions are based on records rather than memory."],
  ["Animal details", "Store the specifics that belong to one animal, not a note that could apply to the whole flock."],
  ["Inoculations", "Record what was given, and to which animal, so the next treatment is not a guess."],
];

export default function AgriTrack() {
  usePageTitle("Agri Track Farm");

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Product</p>
        <h1>Agri Track Farm</h1>
        <p className="intro">A comprehensive management tool for your flock. Track bloodlines, the details that belong to each animal, and inoculations in one place.</p>
        <ul className="feature-list">
          {features.map(([title, text]) => (
            <li key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <div className="hero-actions">
          <a className="button" href="https://agritrackfarm.netlify.app" target="_blank" rel="noopener noreferrer">Open Agri Track Farm</a>
          <Link className="button secondary" to="/contact?need=Agri%20Track%20Farm">Ask us to walk you through it</Link>
        </div>
      </div>
    </section>
  );
}
