import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { to: "/dashboard/kitchen", label: "Kitchen", icon: "restaurant" },
  { to: "/dashboard/ngo", label: "Admin / NGO", icon: "admin_panel_settings" },
  { to: "/dashboard/animal", label: "Animal Shelter", icon: "pets" },
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
  { icon: "near_me", label: "Location based nearest kitchen" },
  { icon: "eco", label: "Circular economy · biogas / compost" },
  { icon: "task_alt", label: "Receive & verify pickup" },
  { icon: "bar_chart", label: "Dashboard & analytics" },
];

const initialScraps = [
  { id: 1, item: "Potato peels & vegetable scraps", detail: "12 kg · IIT Hyderabad Dining Hall", status: "Available" },
  { id: 2, item: "Rice & dal leftovers (not for human use)", detail: "8 kg · TCS Cafeteria", status: "Available" },
];

export default function AnimalPrototype() {
  const [scraps, setScraps] = useState(initialScraps);
  const [notice, setNotice] = useState("");

  function acceptPickup(id) {
    setScraps((prev) => prev.map((s) => (s.id === id ? { ...s, status: "Accepted · pickup scheduled" } : s)));
    setNotice("Pickup accepted");
    window.setTimeout(() => setNotice(""), 2000);
  }

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
          <div><span className="eyebrow">Animal shelter portal</span><p className="date-line">Wednesday, 23 September 2026</p></div>
          <div className="header-user"><span className="avatar">AS</span><span>Animal shelter portal</span></div>
        </header>

        <div className="simple-content">
          <section className="intro-row">
            <div><h1>Street Paws Shelter, Hyderabad</h1><p>Receive kitchen scraps and peels that are safe for animal feeding, tracked and verified.</p></div>
            <button className="primary-button" type="button" onClick={() => setNotice("Capacity confirmed")}>
              <span className="material-symbols-outlined">bolt</span>Confirm capacity
            </button>
          </section>

          <section className="metric-grid" aria-label="Summary metrics">
            <article className="metric"><span>Today's capacity</span><strong>120</strong><small>Kg</small></article>
            <article className="metric"><span>Already received</span><strong>70</strong><small>58% complete</small></article>
            <article className="metric"><span>Next arrival</span><strong>20 min</strong><small>From kitchen</small></article>
          </section>

          <section className="workspace-panel">
            <div className="section-heading">
              <div><span className="eyebrow">From kitchens</span><h2>Peels & scraps available for pickup</h2></div>
              <span className="live-label"><span className="status-dot" /> Live</span>
            </div>
            <p className="panel-note">Vegetable peels and leftovers that aren't fit for human consumption are routed here instead of the bin — the shelter can accept and pick them up directly.</p>
            <div className="activity-list">
              {scraps.map((s) => (
                <div className="activity-row" key={s.id}>
                  <div className="activity-icon"><span className="material-symbols-outlined">compost</span></div>
                  <div className="activity-copy"><strong>{s.item}</strong><span>{s.detail}</span></div>
                  {s.status === "Available" ? (
                    <button className="secondary-button" type="button" onClick={() => acceptPickup(s.id)}>Accept pickup</button>
                  ) : (
                    <span className="row-status">{s.status}</span>
                  )}
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
