import { NavLink } from "react-router-dom";

const features = [
  {
    image: "/high_end_modern_commercial_kitchen_in_a_university_or_corporate_tech_park/screen.png",
    eyebrow: "01 · Capture",
    title: "Know what is available.",
    text: "Kitchens log safe surplus quickly, with weight and temperature captured at source.",
  },
  {
    image: "/volunteers_and_staff_at_a_bright_clean_dignified_community_dining_center/screen.png",
    eyebrow: "02 · Nourish",
    title: "Deliver with confidence.",
    text: "NGOs and shelters receive verified meals with a clear chain of custody from kitchen to community.",
  },
];

export default function LandingPrototype() {
  return (
    <div className="landing-page">
      <header className="landing-nav">
        <a className="landing-brand" href="/" aria-label="AnnaSetu home">
          <img src="/annasetu_official_logo/screen.png" alt="AnnaSetu logo" />
          <span><strong>AnnaSetu</strong><small>Food rescue network</small></span>
        </a>
        <nav className="landing-links" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#impact">Our impact</a>
        </nav>
        <NavLink className="landing-nav-button" to="/login">Login / Sign up <span className="material-symbols-outlined">arrow_forward</span></NavLink>
      </header>

      <main>
        <section className="landing-hero">
          <div className="landing-hero-copy">
            <span className="landing-kicker"><span className="status-dot" /> A smarter way to share surplus</span>
            <h1>Good food should have a <em>next destination.</em></h1>
            <p>AnnaSetu helps kitchens and community organisations turn surplus food into safe, timely meals.</p>
            <div className="landing-actions">
              <NavLink className="landing-primary" to="/login">Get started <span className="material-symbols-outlined">arrow_forward</span></NavLink>
              <a className="landing-text-link" href="#how-it-works">See how it works <span className="material-symbols-outlined">south</span></a>
            </div>
            <div className="landing-proof"><span className="material-symbols-outlined">verified</span><span>Designed for safe, fast, dignified redistribution</span></div>
          </div>
          <div className="landing-hero-visual">
            <img src="/high_end_modern_commercial_kitchen_in_a_university_or_corporate_tech_park/screen.png" alt="A modern commercial kitchen preparing food" />
            <div className="hero-status-card"><span className="status-dot" /><div><strong>Live network</strong><small>42 kitchens connected today</small></div><span className="material-symbols-outlined">trending_up</span></div>
            <div className="hero-number"><strong>1,480</strong><span>meals rescued today</span></div>
          </div>
        </section>

        <section className="impact-strip" id="impact" aria-label="AnnaSetu impact">
          <div><strong>14,883+</strong><span>meals rescued</span></div>
          <div><strong>99.4%</strong><span>food safety verified</span></div>
          <div><strong>38.2T</strong><span>CO2e avoided</span></div>
          <div><strong>18 min</strong><span>average delivery</span></div>
        </section>

        <section className="landing-section" id="how-it-works">
          <div className="landing-section-heading"><div><span className="landing-kicker">The simple loop</span><h2>From surplus to service.</h2></div><p>One shared view replaces scattered calls, uncertain handovers, and food that arrives too late.</p></div>
          <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.eyebrow}><img src={feature.image} alt="" /><div className="feature-card-copy"><span className="landing-kicker">{feature.eyebrow}</span><h3>{feature.title}</h3><p>{feature.text}</p></div></article>)}</div>
        </section>

        <section className="landing-cta"><div><span className="landing-kicker">Join the network</span><h2>A clear path from kitchen to community.</h2></div><NavLink className="landing-primary" to="/login">Login / Sign up <span className="material-symbols-outlined">arrow_forward</span></NavLink></section>
      </main>
      <footer className="landing-footer">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="landing-brand" href="/" aria-label="AnnaSetu home">
              <img src="/annasetu_official_logo/screen.png" alt="AnnaSetu logo" />
              <span><strong>AnnaSetu</strong><small>Food rescue network</small></span>
            </a>
            <p>Building a more thoughtful food system where every safe meal can reach someone who needs it.</p>
            <div className="footer-socials" aria-label="Social links">
              <a href="https://www.linkedin.com" aria-label="LinkedIn"><span className="material-symbols-outlined">business_center</span></a>
              <a href="mailto:hello@annasetu.org" aria-label="Email AnnaSetu"><span className="material-symbols-outlined">mail</span></a>
              <a href="tel:+914012345678" aria-label="Call AnnaSetu"><span className="material-symbols-outlined">call</span></a>
            </div>
          </div>
          <div className="footer-column"><h3>Explore</h3><a href="#how-it-works">How it works</a><a href="#impact">Our impact</a></div>
          <div className="footer-column"><h3>For partners</h3><NavLink to="/login">Kitchen dashboard</NavLink><NavLink to="/login">Admin / NGO portal</NavLink><NavLink to="/login">Animal shelter portal</NavLink></div>
          <div className="footer-contact"><h3>Let's work together</h3><p>Have a kitchen, community, or idea to connect?</p><a href="mailto:hello@annasetu.org" className="footer-email">hello@annasetu.org <span className="material-symbols-outlined">arrow_outward</span></a><span className="footer-location"><span className="material-symbols-outlined">location_on</span> Hyderabad, India</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 AnnaSetu. All rights reserved.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><span>Made for a less wasteful world.</span></div></div>
      </footer>
    </div>
  );
}
