import { NavLink } from "react-router-dom";
const matchSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300"><rect width="480" height="300" fill="#eef5f0"/><line x1="90" y1="220" x2="390" y2="90" stroke="#2f6b4f" stroke-width="3" stroke-dasharray="10 8"/><circle cx="90" cy="220" r="14" fill="#2f6b4f"/><circle cx="390" cy="90" r="14" fill="#e07a3f"/><g transform="translate(210,130)"><circle r="34" fill="#ffffff" stroke="#2f6b4f" stroke-width="3"/><path d="M -12 0 L -3 10 L 14 -10" stroke="#2f6b4f" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><text x="90" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#2f6b4f">Kitchen</text><text x="390" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#e07a3f">NGO</text></svg>';
const matchIllustration = "data:image/svg+xml," + encodeURIComponent(matchSvg);

const loopFeatures = [
  {
    image: "/high_end_modern_commercial_kitchen_in_a_university_or_corporate_tech_park/screen.png",
    eyebrow: "01 · Capture",
    title: "Know what is available.",
    text: "Kitchens log safe surplus quickly, with weight and temperature captured at source.",
  },
  {
    image: matchIllustration,
    eyebrow: "02 · Match",
    title: "Move it to the right place.",
    text: "AI matches each surplus listing with the nearest verified NGO, shelter, or partner in real time.",
  },
  {
    image: "/volunteers_and_staff_at_a_bright_clean_dignified_community_dining_center/screen.png",
    eyebrow: "03 · Nourish",
    title: "Deliver with confidence.",
    text: "NGOs and shelters receive verified meals with a clear chain of custody from kitchen to community.",
  },
];

const problemStats = [
  { value: "25–30%", label: "of prepared food wasted daily by institutional kitchens" },
  { value: "₹1.55L Cr", label: "worth of food wasted annually across India" },
  { value: "78–80M", label: "tonnes of food wasted nationally every year" },
  { value: "194M", label: "people in India still remain undernourished" },
];

const solutionSteps = [
  { icon: "trending_up", title: "Predict", text: "AI forecasts demand from past consumption and suggests the right quantity to prepare." },
  { icon: "warning", title: "Detect", text: "Flags excess food and possible wastage in real time when production runs ahead of demand." },
  { icon: "verified", title: "Assess", text: "IoT sensors and computer vision check quality, freshness and storage conditions." },
  { icon: "diversity_3", title: "Redistribute", text: "Matches safe surplus with nearby NGOs, food banks, shelters and community kitchens." },
  { icon: "insights", title: "Measure & Optimize", text: "Tracks food saved, money saved, CO2 impact and feeds it back into better planning." },
];

const comparison = [
  { factor: "Timing", traditional: "Reacts after waste happens", annasetu: "Predicts and prevents waste before it happens" },
  { factor: "Speed of redistribution", traditional: "Takes 2–3 days, food decays", annasetu: "Takes under 2 hours — food stays fresh" },
  { factor: "Quality check", traditional: "No guarantee", annasetu: "Verified with computer vision + IoT sensors" },
  { factor: "Carbon impact & analysis", traditional: "Not measured, waste goes to landfill", annasetu: "Tracks CO2 saved, resource savings, biogas recovery" },
];

const impactBenefits = [
  { icon: "delete_sweep", title: "Reduced food waste", text: "Prevents avoidable food from becoming waste by 30–40%." },
  { icon: "savings", title: "Lower operational costs", text: "Reduces excess production — saves ₹5–10 lakhs per kitchen annually." },
  { icon: "food_bank", title: "Improved food security", text: "Redirects surplus food to underserved communities." },
  { icon: "query_stats", title: "Accurate demand forecasting", text: "Helps kitchens prepare exactly the amount of food needed." },
  { icon: "eco", title: "Reduces environmental pollution", text: "Estimated 2.5 tons of CO2 emissions prevented annually per institution." },
  { icon: "cyclone", title: "Circular economy", text: "Waste converts into energy via biogas, supporting a sustainable food system." },
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
          <a href="#problem">The problem</a>
          <a href="#solution">Our solution</a>
          <a href="#impact">Impact</a>
        </nav>
        <NavLink className="landing-nav-button" to="/login">Login / Sign up <span className="material-symbols-outlined">arrow_forward</span></NavLink>
      </header>

      <main>
        {/* HERO */}
        <section className="landing-hero">
          <div className="landing-hero-copy">
            <span className="landing-kicker"><span className="status-dot" /> AI-powered smart food waste reduction</span>
            <h1>GOOD FOOD SHOULD HAVE A <em>NEXT DESTINATION.</em></h1>
            <p>AnnaSetu predicts, detects and redistributes surplus food from institutional kitchens before it becomes waste — turning it into safe, timely meals.</p>
            <div className="landing-actions">
              <NavLink className="landing-primary" to="/login">Get started <span className="material-symbols-outlined">arrow_forward</span></NavLink>
              <a className="landing-text-link" href="#problem">See how it works <span className="material-symbols-outlined">south</span></a>
            </div>
            <div className="landing-proof"><span className="material-symbols-outlined">verified</span><span>Designed for safe, fast, dignified redistribution</span></div>
          </div>
          <div className="landing-hero-visual">
            <img src="/high_end_modern_commercial_kitchen_in_a_university_or_corporate_tech_park/screen.png" alt="A modern commercial kitchen preparing food" />
            <div className="hero-status-card"><span className="status-dot" /><div><strong>Live network</strong><small>42 kitchens connected today</small></div><span className="material-symbols-outlined">trending_up</span></div>
            <div className="hero-number"><strong>1,480</strong><span>meals rescued today</span></div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="landing-section" id="problem">
          <div className="landing-section-heading">
            <div><span className="landing-kicker">The problem</span><h2>A critical gap between production and access.</h2></div>
            <p>Institutional kitchens generate enormous surplus every day — while millions still go without a meal.</p>
          </div>
          <div className="problem-stats-grid">
            {problemStats.map((stat) => (
              <div className="problem-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SOLUTION */}
        <section className="landing-section" id="solution">
          <div className="landing-section-heading">
            <div><span className="landing-kicker">Our solution</span><h2>Predict. Detect. Redistribute.</h2></div>
            <p>Existing solutions only manage waste after it happens. AnnaSetu prevents it before it happens.</p>
          </div>
          <div className="solution-steps">
            {solutionSteps.map((step, i) => (
              <div className="solution-step" key={step.title}>
                <span className="solution-step-number">{i + 1}</span>
                <span className="material-symbols-outlined">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS (loop) */}
        <section className="landing-section">
          <div className="landing-section-heading"><div><span className="landing-kicker">The simple loop</span><h2>From surplus to service.</h2></div><p>One shared view replaces scattered calls, uncertain handovers, and food that arrives too late.</p></div>
          <div className="feature-grid">{loopFeatures.map((feature) => <article className="feature-card" key={feature.eyebrow}><img src={feature.image} alt="" /><div className="feature-card-copy"><span className="landing-kicker">{feature.eyebrow}</span><h3>{feature.title}</h3><p>{feature.text}</p></div></article>)}</div>
        </section>

        {/* WHY DIFFERENT */}
        <section className="landing-section">
          <div className="landing-section-heading"><div><span className="landing-kicker">Why different</span><h2>Traditional vs AnnaSetu.</h2></div></div>
          <div className="comparison-table">
            <div className="comparison-row comparison-head">
              <span>Factor</span><span>Traditional</span><span>AnnaSetu</span>
            </div>
            {comparison.map((row) => (
              <div className="comparison-row" key={row.factor}>
                <span className="comparison-factor">{row.factor}</span>
                <span className="comparison-traditional">{row.traditional}</span>
                <span className="comparison-annasetu">{row.annasetu}</span>
              </div>
            ))}
          </div>
        </section>

        {/* IMPACT STRIP */}
        <section className="impact-strip" id="impact" aria-label="AnnaSetu impact">
          <div><strong>14,883+</strong><span>meals rescued</span></div>
          <div><strong>99.4%</strong><span>food safety verified</span></div>
          <div><strong>38.2T</strong><span>CO2e avoided</span></div>
          <div><strong>18 min</strong><span>average delivery</span></div>
        </section>

        {/* IMPACT & BENEFITS */}
        <section className="landing-section">
          <div className="landing-section-heading"><div><span className="landing-kicker">Impact & benefits</span><h2>What this changes on the ground.</h2></div></div>
          <div className="impact-benefits-grid">
            {impactBenefits.map((b) => (
              <div className="impact-benefit-card" key={b.title}>
                <span className="material-symbols-outlined">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
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
          <div className="footer-column"><h3>Explore</h3><a href="#problem">The problem</a><a href="#solution">Our solution</a><a href="#impact">Impact</a></div>
          <div className="footer-column"><h3>For partners</h3><NavLink to="/login">Kitchen dashboard</NavLink><NavLink to="/login">Admin / NGO portal</NavLink><NavLink to="/login">Animal shelter portal</NavLink></div>
          <div className="footer-contact"><h3>Let's work together</h3><p>Have a kitchen, community, or idea to connect?</p><a href="mailto:hello@annasetu.org" className="footer-email">hello@annasetu.org <span className="material-symbols-outlined">arrow_outward</span></a><span className="footer-location"><span className="material-symbols-outlined">location_on</span> Hyderabad, India</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 AnnaSetu. All rights reserved.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><span>Made for a less wasteful world.</span></div></div>
      </footer>
    </div>
  );
}