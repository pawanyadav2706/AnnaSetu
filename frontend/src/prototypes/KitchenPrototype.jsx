import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { to: "/dashboard/kitchen", label: "Kitchen", icon: "restaurant" },
];

const processFlow = [
  { step: "1", label: "Food Info Input", icon: "inventory_2" },
  { step: "2", label: "AI Analysis", icon: "psychology" },
  { step: "3", label: "Matchmaking", icon: "hub" },
  { step: "4", label: "Redistribution", icon: "local_shipping" },
  { step: "5", label: "Receive & Verify", icon: "task_alt" },
  { step: "6", label: "Reports & Analytics", icon: "monitoring" },
];

const keyFeatures = [
  { icon: "psychology", label: "AI based food waste prediction" },
  { icon: "inventory", label: "Real-time inventory tracking" },
  { icon: "hub", label: "Smart redistribution matching" },
  { icon: "near_me", label: "Location based nearest NGO / partner" },
  { icon: "bar_chart", label: "Dashboard & analytics" },
  { icon: "lock", label: "Secure role-based access" },
];

const initialClaims = [
  { id: 1, name: "Ananya R.", detail: "Hostel Mess · B-Block", status: "Picked up" },
];

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function KitchenPrototype() {
  const [surplusOpen, setSurplusOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);
  const [claims, setClaims] = useState(initialClaims);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!surplusOpen || secondsLeft <= 0) return;
    const timer = setInterval(() => setSecondsLeft((s) => Math.max(s - 1, 0)), 1000);
    return () => clearInterval(timer);
  }, [surplusOpen, secondsLeft]);

  function openSurplusWindow() {
    setSurplusOpen(true);
    setSecondsLeft(15 * 60);
    setNotice("Students in the mess notified");
    window.setTimeout(() => setNotice(""), 2200);
  }

  function claimFood() {
    setClaims((prev) => [
      { id: Date.now(), name: "Walk-in student", detail: "Mess · claimed just now", status: "Claimed" },
      ...prev,
    ]);
  }

  const expired = surplusOpen && secondsLeft === 0;

  return (
    <div className="simple-app">
      <aside className="simple-sidebar">
        <NavLink to="/" className="brand" aria-label="AnnaSetu home">
          <img src="/annasetu_official_logo/screen.png" alt="AnnaSetu" />
          <span><strong>AnnaSetu</strong><small>Food rescue network</small></span>
        </NavLink>
        <nav className="simple-nav" aria-label="Dashboard navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to}>
              <span className="material-symbols-outlined">{item.icon}</span>{item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-note"><span className="status-dot" /> Network online<br /><small>Last sync 1.4s ago</small></div>
      </aside>

      <main className="simple-main">
        <header className="simple-header">
          <div><span className="eyebrow">Kitchen console</span><p className="date-line">Wednesday, 23 September 2026</p></div>
          <div className="header-user"><span className="avatar">AS</span><span>Kitchen console</span></div>
        </header>

        <div className="simple-content">
          <section className="intro-row">
            <div><h1>IIT Hyderabad Dining Hall</h1><p>Capture safe surplus in a few taps before it loses value.</p></div>
            <button className="primary-button" type="button" onClick={() => setNotice("Surplus logged")}>
              <span className="material-symbols-outlined">bolt</span>Log surplus
            </button>
          </section>

          <section className="metric-grid" aria-label="Summary metrics">
            <article className="metric"><span>Prepared today</span><strong>1,400</strong><small>Portions</small></article>
            <article className="metric"><span>Surplus ready</span><strong>280</strong><small>Portions</small></article>
            <article className="metric"><span>Safety window</span><strong>3h 15m</strong><small>Remaining</small></article>
          </section>

          <section className="workspace-panel">
            <div className="section-heading">
              <div><span className="eyebrow">AI waste alert</span><h2>Dal Tadka & Jeera Rice about to go to waste</h2></div>
              {surplusOpen && !expired && <span className="live-label"><span className="status-dot" /> Open for claim</span>}
            </div>
            <p className="panel-note">65 portions unclaimed after service. Open a 15 minute window so mess students can collect it directly before it's routed as surplus.</p>

            {!surplusOpen && (
              <button className="primary-button" type="button" onClick={openSurplusWindow}>
                <span className="material-symbols-outlined">campaign</span>Open 15-min student claim window
              </button>
            )}

            {surplusOpen && !expired && (
              <div className="activity-row">
                <div className="activity-icon"><span className="material-symbols-outlined">timer</span></div>
                <div className="activity-copy"><strong>Time left to claim</strong><span>Mess students notified · first come, first served</span></div>
                <span className="row-status">{formatTime(secondsLeft)}</span>
              </div>
            )}

            {expired && (
              <div className="activity-row">
                <div className="activity-icon"><span className="material-symbols-outlined">recycling</span></div>
                <div className="activity-copy"><strong>Claim window closed</strong><span>Unclaimed portions routed to NGO / Animal Shelter partner</span></div>
                <span className="row-status">Routed</span>
              </div>
            )}

            {surplusOpen && !expired && (
              <button className="secondary-button" type="button" onClick={claimFood}>
                <span className="material-symbols-outlined">restaurant</span>Simulate a student claim
              </button>
            )}
          </section>

          <section className="workspace-panel">
            <div className="section-heading"><div><span className="eyebrow">Mess</span><h2>Student claims</h2></div></div>
            <div className="activity-list">
              {claims.map((claim) => (
                <div className="activity-row" key={claim.id}>
                  <div className="activity-icon"><span className="material-symbols-outlined">person</span></div>
                  <div className="activity-copy"><strong>{claim.name}</strong><span>{claim.detail}</span></div>
                  <span className="row-status">{claim.status}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading"><div><span className="eyebrow">How it works</span><h2>Process flow</h2></div></div>
            <div className="process-flow">
              {processFlow.map((step) => (
                <div className="process-step" key={step.step}>
                  <span className="material-symbols-outlined">{step.icon}</span>
                  <strong>{step.step}</strong>
                  <span>{step.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading"><div><span className="eyebrow">System</span><h2>Key features</h2></div></div>
            <div className="feature-chip-grid">
              {keyFeatures.map((f) => (
                <div className="feature-chip" key={f.label}>
                  <span className="material-symbols-outlined">{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      {notice && <div className="toast" role="status"><span className="material-symbols-outlined">check_circle</span>{notice}</div>}
    </div>
  );
}
