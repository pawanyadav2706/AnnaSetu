import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { to: "/prototype", label: "Overview", icon: "home" },
  { to: "/prototype/kitchen", label: "Kitchen", icon: "restaurant" },
  { to: "/prototype/fleet", label: "Fleet", icon: "local_shipping" },
  { to: "/prototype/ngo", label: "NGO Portal", icon: "volunteer_activism" },
  { to: "/prototype/demo", label: "Live Demo", icon: "play_circle" },
];

const pageContent = {
  overview: { eyebrow: "Food rescue network", title: "Turn surplus into meals, simply.", description: "AnnaSetu connects kitchens, delivery partners, and NGOs in one calm workspace.", action: "Start a demo", metrics: [["Meals rescued", "1,480", "+34% today"], ["Active kitchens", "42", "Across Hyderabad"], ["CO2 prevented", "620 kg", "This month"]], sectionTitle: "How the network is moving", rows: [["Central Kitchen", "68 kg surplus logged", "Ready"], ["EV Van 04", "En route to Aasra Kitchen", "14 min"], ["Robin Hood Army", "Accepting 350 meals", "Open"]] },
  kitchen: { eyebrow: "Kitchen console", title: "IIT Hyderabad Dining Hall", description: "Capture safe surplus in a few taps before it loses value.", action: "Log surplus", metrics: [["Prepared today", "1,400", "Portions"], ["Surplus ready", "280", "Portions"], ["Safety window", "3h 15m", "Remaining"]], sectionTitle: "Current kitchen status", rows: [["Dal Tadka & Jeera Rice", "280 portions · 68 kg", "Safe"], ["Smart scale node 04", "Connected · synced 1.4s ago", "Online"], ["Next pickup", "EV Van 04 · 14:18", "Scheduled"]] },
  fleet: { eyebrow: "Dispatch board", title: "Keep every delivery on track.", description: "A focused view of active routes and the people waiting at the other end.", action: "Refresh routes", metrics: [["Active vehicles", "6", "All electric"], ["On route", "4", "3,850 meals"], ["Avg delivery", "18.4 min", "Within SLA"]], sectionTitle: "Live routes", rows: [["EV Van 04", "IIT Hyderabad → Aasra Kitchen", "14 min"], ["EV Van 08", "TCS Cafeteria → St. Jude", "22 min"], ["EV Van 02", "Infosys Campus → Hope Hub", "Delivered"]] },
  ngo: { eyebrow: "Partner portal", title: "Robin Hood Army · South Hyderabad", description: "Accept safe, useful meals for your community without the paperwork pile-up.", action: "Confirm capacity", metrics: [["Today's capacity", "350", "Meals"], ["Already served", "280", "80% complete"], ["Next arrival", "6 min", "EV Van 04"]], sectionTitle: "Incoming support", rows: [["Dal Tadka & Jeera Rice", "200 servings · 64.8 C", "Arriving"], ["Driver verification", "Ramesh V. · DRV-409", "Verified"], ["Dining setup", "Warmers and plates ready", "Ready"]] },
  demo: { eyebrow: "Live simulation", title: "See the whole loop in one place.", description: "A small, clear demo of logging, matching, dispatching, and receiving food.", action: "Run AI match", metrics: [["Meals rescued", "1,480", "Live"], ["Matches today", "28", "99.4% fit"], ["Cost saved", "INR 84,500", "This month"]], sectionTitle: "Demo workflow", rows: [["1 · Source", "68 kg surplus logged at kitchen", "Done"], ["2 · Match", "Aasra Kitchen selected by AI", "Done"], ["3 · Deliver", "EV Van 04 is on the way", "Live"]] },
};

export default function SimplePrototype({ page = "overview" }) {
  const content = pageContent[page] || pageContent.overview;
  const [notice, setNotice] = useState("");

  function handleAction() {
    setNotice(`${content.action} complete`);
    window.setTimeout(() => setNotice(""), 2200);
  }

  return (
    <div className="simple-app">
      <aside className="simple-sidebar">
        <NavLink to="/prototype" className="brand" aria-label="AnnaSetu home"><img src="/annasetu_official_logo/screen.png" alt="AnnaSetu" /><span><strong>AnnaSetu</strong><small>Food rescue network</small></span></NavLink>
        <nav className="simple-nav" aria-label="Prototype navigation">
          {navigation.map((item) => <NavLink key={item.to} to={item.to} end={item.to === "/prototype"}><span className="material-symbols-outlined">{item.icon}</span>{item.label}</NavLink>)}
        </nav>
        <div className="sidebar-note"><span className="status-dot" /> Network online<br /><small>Last sync 1.4s ago</small></div>
      </aside>
      <main className="simple-main">
        <header className="simple-header"><div><span className="eyebrow">{content.eyebrow}</span><p className="date-line">Wednesday, 23 September 2026</p></div><div className="header-user"><span className="avatar">AS</span><span>Admin view</span></div></header>
        <div className="simple-content">
          <section className="intro-row"><div><h1>{content.title}</h1><p>{content.description}</p></div><button className="primary-button" type="button" onClick={handleAction}><span className="material-symbols-outlined">bolt</span>{content.action}</button></section>
          <section className="metric-grid" aria-label="Summary metrics">{content.metrics.map(([label, value, detail]) => <article className="metric" key={label}><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>)}</section>
          <section className="workspace-panel"><div className="section-heading"><div><span className="eyebrow">Today</span><h2>{content.sectionTitle}</h2></div><span className="live-label"><span className="status-dot" /> Live</span></div><div className="activity-list">{content.rows.map(([title, detail, status]) => <div className="activity-row" key={title}><div className="activity-icon"><span className="material-symbols-outlined">{page === "fleet" ? "route" : page === "ngo" ? "volunteer_activism" : page === "kitchen" ? "restaurant" : "check_circle"}</span></div><div className="activity-copy"><strong>{title}</strong><span>{detail}</span></div><span className="row-status">{status}</span></div>)}</div></section>
          <section className="simple-tip"><span className="material-symbols-outlined">lightbulb</span><div><strong>One clear next step</strong><p>Use the action button above to move this prototype through its next stage.</p></div></section>
        </div>
      </main>
      {notice && <div className="toast" role="status"><span className="material-symbols-outlined">check_circle</span>{notice}</div>}
    </div>
  );
}