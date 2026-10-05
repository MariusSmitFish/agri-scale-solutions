import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import usePageTitle from "./usePageTitle";

const people = [
  {
    name: "Marius Smit",
    phone: "072 604 5165",
    tel: "+27726045165",
    email: "mariussmitb@gmail.com",
  },
  {
    name: "Rihandri Smit",
    phone: "071 687 7657",
    tel: "+27716877657",
    email: "rihandrismit@gmail.com",
  },
];

const needs = [
  "A website",
  "Social media marketing",
  "Business cards",
  "Show branding and merchandise",
  "Agri Scale Farm",
  "I’m not sure yet",
];

export default function Contact() {
  const [params] = useSearchParams();
  const aliases = { "Agri Track Farm": "Agri Scale Farm" };
  const requested = aliases[params.get("need")] ?? params.get("need");
  const initialNeed = needs.includes(requested) ? requested : "";
  const [need, setNeed] = useState(initialNeed);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();
  usePageTitle("Contact us");

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
      <div className="wrap">
        <p className="kicker">Contact</p>
        <h1>Contact us</h1>
        <p className="intro">Call or email either of us. A short note is sufficient. We will reply with a clear next step and, once the scope is understood, a written quotation.</p>
        <div className="people">
          {people.map((person) => (
            <article className="person" key={person.email}>
              <h2>{person.name}</h2>
              <a href={`tel:${person.tel}`}>{person.phone}</a>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </article>
          ))}
        </div>
        <div className="contact-grid">
        <div>
          <h2>Send an enquiry</h2>
          <ol className="next-list">
            <li><span>1</span> We review your enquiry.</li>
            <li><span>2</span> We follow up only if essential information is missing.</li>
            <li><span>3</span> You receive a quotation and a timeline in writing.</li>
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
              <label htmlFor="message">Project details</label>
              <textarea id="message" name="message" required placeholder="The work you need, your location, and whether this is for the business, a show, or livestock records." />
            </div>
          </div>
          <button className="button" type="submit" disabled={sending}>{sending ? "Sending…" : "Send enquiry"}</button>
          {error && <p className="note">{error}</p>}
          {!error && <p className="note">We use this only to reply to you.</p>}
        </form>
        </div>
      </div>
    </section>
  );
}
