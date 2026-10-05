import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import usePageTitle from "./usePageTitle";

const needs = [
  "A website",
  "Social media marketing",
  "Business cards",
  "Show branding and merchandise",
  "Agri Track Farm",
  "I’m not sure yet",
];

export default function Contact() {
  const [params] = useSearchParams();
  const requested = params.get("need");
  const initialNeed = needs.includes(requested) ? requested : "";
  const [need, setNeed] = useState(initialNeed);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();
  usePageTitle("Start a project");

  async function onSubmit(event) {
    event.preventDefault();
    setError("");
    setSending(true);
    const form = event.currentTarget;
    const body = new URLSearchParams(new FormData(form));
    body.set("form-name", "farm-enquiry");

    try {
      if (!import.meta.env.DEV) {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
        });
        if (!response.ok) throw new Error("Could not send");
      }
      navigate("/thank-you");
    } catch {
      setError("We could not send that. Please try again in a moment.");
      setSending(false);
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="kicker">Start a project</p>
          <h1>Tell us about the place.</h1>
          <p className="intro">A few sentences is enough. We will reply with a clear next step and, when we know the size of the job, a plain quote.</p>
          <ol className="next-list">
            <li><span>1</span> We read what you sent.</li>
            <li><span>2</span> We ask only if something important is missing.</li>
            <li><span>3</span> You get a quote and a timeline in writing.</li>
          </ol>
        </div>
        <form className="form" name="farm-enquiry" method="POST" onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="farm-enquiry" />
          <p className="hp">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="business">Farm or business</label>
              <input id="business" name="business" type="text" autoComplete="organization" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone <span className="sr-only">(optional)</span></label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" />
            </div>
            <div className="field full">
              <label htmlFor="need">What do you need?</label>
              <select id="need" name="need" required value={need} onChange={(event) => setNeed(event.target.value)}>
                <option value="">Choose one</option>
                {needs.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">A few sentences</label>
              <textarea id="message" name="message" required placeholder="What you need, where you are, and whether this is for the farm, a show, or the flock records." />
            </div>
          </div>
          <button className="button" type="submit" disabled={sending}>{sending ? "Sending…" : "Send the note"}</button>
          {error && <p className="note">{error}</p>}
          {!error && <p className="note">We use this only to reply to you.</p>}
        </form>
      </div>
    </section>
  );
}
