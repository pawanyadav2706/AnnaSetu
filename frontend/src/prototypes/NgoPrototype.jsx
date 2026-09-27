import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { to: "/dashboard/kitchen", label: "Kitchen", icon: "restaurant" },
  { to: "/dashboard/ngo", label: "Admin / NGO", icon: "admin_panel_settings" },
  { to: "/dashboard/animal", label: "Animal Shelter", icon: "pets" },
];

const partnerKitchens = [
  { id: 1, name: "IIT Hyderabad Dining Hall", type: "institute", distance: "1.2 km", status: "Active", lastDelivery: "10 min ago" },
  { id: 2, name: "B-Block Hostel Mess", type: "mess", distance: "0.6 km", status: "Active", lastDelivery: "35 min ago" },
  { id: 3, name: "TCS Cafeteria", type: "institute", distance: "3.4 km", status: "Active", lastDelivery: "2h ago" },
  { id: 4, name: "Campus Convocation Function", type: "function", distance: "1.8 km", status: "Pending verification", lastDelivery: "—" },
];

const impactStats = [
  { icon: "restaurant", value: "1,240", label: "Meals distributed this month" },
  { icon: "groups", value: "310", label: "Families reached" },
  { icon: "eco", value: "890 kg", label: "Food waste diverted" },
  { icon: "cloud_off", value: "1.4T", label: "CO2e avoided" },
];

const sourceMeta = {
  institute: { label: "Institute Canteen", icon: "school" },
  mess: { label: "Hostel Mess", icon: "restaurant" },
  function: { label: "Wedding / Function", icon: "celebration" },
};

const initialIncoming = [
  { id: 1, item: "Dal Tadka & Jeera Rice", qty: "65 portions", source: "institute", kitchen: "IIT Hyderabad Dining Hall", status: "pending" },
  { id: 2, item: "Mixed Veg Sabzi", qty: "40 portions", source: "mess", kitchen: "B-Block Hostel Mess", status: "pending" },
  { id: 3, item: "Paneer Curry & Kachori", qty: "80 portions", source: "function", kitchen: "Campus Convocation Function", status: "accepted" },
];

const initialRequests = [
  { id: 1, name: "Ananya R.", detail: "Hostel Mess · B-Block · Dal Tadka & Rice", status: "Completed" },
  { id: 2, name: "Rahul K.", detail: "Hostel Mess · C-Block · Dal Tadka & Rice", status: "Pending review" },
];

const initialLedger = [
  { id: 1, item: "Curd Rice", from: "IIT Hyderabad Dining Hall · Institute Canteen", to: "Robin Hood Army, South Hyderabad", status: "Distributed", time: "10:42 AM" },
  { id: 2, item: "Paneer Curry & Kachori", from: "Campus Convocation Function · Wedding / Function", to: "Accepted · awaiting distribution", status: "Accepted", time: "11:05 AM" },
];

export default function NgoPrototype() {
  const [incoming, setIncoming] = useState(initialIncoming);
  const [requests, setRequests] = useState(initialRequests);
  const [ledger, setLedger] = useState(initialLedger);
  const [notice, setNotice] = useState("");

  function acceptItem(id) {
    const item = incoming.find((i) => i.id === id);
    if (!item) return;
    setIncoming((prev) => prev.map((i) => (i.id === id ? { ...i, status: "accepted" } : i)));
    setLedger((prev) => [
      { id: Date.now(), item: item.item, from: `${item.kitchen} · ${sourceMeta[item.source].label}`, to: "Accepted · awaiting distribution", status: "Accepted", time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
      ...prev,
    ]);
    setNotice("Accepted from kitchen");
    window.setTimeout(() => setNotice(""), 2000);
  }

  function distributeItem(id) {
    const item = incoming.find((i) => i.id === id);
    if (!item) return;
    setIncoming((prev) => prev.map((i) => (i.id === id ? { ...i, status: "distributed" } : i)));
    setLedger((prev) => [
      { id: Date.now(), item: item.item, from: `${item.kitchen} · ${sourceMeta[item.source].label}`, to: "Robin Hood Army, South Hyderabad", status: "Distributed", time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
      ...prev,
    ]);
    setNotice("Marked as distributed");
    window.setTimeout(() => setNotice(""), 2000);
  }

  function markVerified(id) {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "Verified · handled by NGO" } : r)));
    setNotice("Request verified");
    window.setTimeout(() => setNotice(""), 2000);
  }

  const pendingCount = incoming.filter((i) => i.status === "pending").length;
  const acceptedCount = incoming.filter((i) => i.status === "accepted").length;
  const distributedCount = incoming.filter((i) => i.status === "distributed").length;

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
          <div><span className="eyebrow">Admin / NGO portal</span><p className="date-line">Wednesday, 23 September 2026</p></div>
          <div className="header-user"><span className="avatar">AS</span><span>Admin / NGO portal</span></div>
        </header>

        <div className="simple-content">
          <section
            className="dashboard-hero"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(11,35,24,0.15), rgba(11,35,24,0.8)), url(/volunteers_and_staff_at_a_bright_clean_dignified_community_dining_center/screen.png)" }}
          >
            <span className="dashboard-hero-kicker"><span className="status-dot" /> Admin / NGO portal · Live</span>
            <h1>Robin Hood Army · South Hyderabad</h1>
            <p>Verify partner kitchens and accept safe, useful meals for your community.</p>
            <button className="primary-button" type="button" onClick={() => setNotice("Capacity confirmed")}>
              <span className="material-symbols-outlined">bolt</span>Confirm capacity
            </button>
          </section>

          <section className="metric-grid" aria-label="Summary metrics">
            <article className="metric"><span>Today's capacity</span><strong>350</strong><small>Meals</small></article>
            <article className="metric"><span>Kitchens verified</span><strong>42</strong><small>Active</small></article>
            <article className="metric"><span>Pending accept</span><strong>{pendingCount}</strong><small>Items</small></article>
            <article className="metric"><span>Distributed today</span><strong>{distributedCount}</strong><small>Items</small></article>
          </section>

          <section className="workspace-panel">
            <div className="section-heading">
              <div><span className="eyebrow">From kitchens</span><h2>Incoming surplus</h2></div>
              <span className="live-label"><span className="status-dot" /> Live</span>
            </div>
            <p className="panel-note">Every surplus item flagged from a kitchen — canteen, mess, or a campus function — lands here first. Accept it, then mark it distributed once it reaches your community.</p>
            <div className="activity-list">
              {incoming.map((i) => {
                const meta = sourceMeta[i.source];
                return (
                  <div className="activity-row" key={i.id}>
                    <div className="activity-icon"><span className="material-symbols-outlined">inventory_2</span></div>
                    <div className="activity-copy">
                      <strong>{i.item}</strong>
                      <span>
                        <span className={`source-badge source-badge--${i.source} source-badge--inline`}>
                          <span className="material-symbols-outlined">{meta.icon}</span>{meta.label}
                        </span>
                        {i.qty} · {i.kitchen}
                      </span>
                    </div>
                    {i.status === "pending" && (
                      <button className="secondary-button" type="button" onClick={() => acceptItem(i.id)}>Accept</button>
                    )}
                    {i.status === "accepted" && (
                      <button className="secondary-button" type="button" onClick={() => distributeItem(i.id)}>Mark distributed</button>
                    )}
                    {i.status === "distributed" && <span className="row-status">Distributed</span>}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading">
              <div><span className="eyebrow">Tracking</span><h2>Student / mess requests</h2></div>
              <span className="live-label"><span className="status-dot" /> Live</span>
            </div>
            <p className="panel-note">Every student claim made from a kitchen's 15-minute window shows up here so NGO admin can track and verify it end to end.</p>
            <div className="activity-list">
              {requests.map((r) => (
                <div className="activity-row" key={r.id}>
                  <div className="activity-icon"><span className="material-symbols-outlined">person</span></div>
                  <div className="activity-copy"><strong>{r.name}</strong><span>{r.detail}</span></div>
                  {r.status === "Pending review" ? (
                    <button className="secondary-button" type="button" onClick={() => markVerified(r.id)}>Mark verified</button>
                  ) : (
                    <span className="row-status">{r.status}</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading">
              <div><span className="eyebrow">Full traceability</span><h2>Distribution ledger</h2></div>
              <span className="live-label"><span className="status-dot" /> {ledger.length} entries</span>
            </div>
            <p className="panel-note">Every accept and every distribution is logged here, so admins can trace where any given meal came from and where it went.</p>
            <div className="stock-table">
              <div className="stock-table-row stock-table-head">
                <span>Item</span>
                <span>From</span>
                <span>To</span>
                <span>Status</span>
                <span>Time</span>
              </div>
              {ledger.map((entry) => (
                <div className="stock-table-row ledger-row" key={entry.id}>
                  <div className="stock-item-name"><strong>{entry.item}</strong></div>
                  <div className="stock-item-prep">{entry.from}</div>
                  <div className="stock-item-prep">{entry.to}</div>
                  <div>
                    <span className={`priority-pill ${entry.status === "Distributed" ? "priority-pill--low" : "priority-pill--medium"}`}>
                      <span className="material-symbols-outlined">{entry.status === "Distributed" ? "task_alt" : "hourglass_top"}</span>
                      {entry.status}
                    </span>
                  </div>
                  <div className="stock-item-prep">{entry.time}</div>
                </div>
              ))}
              {ledger.length === 0 && <div className="stock-empty">No activity logged yet.</div>}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading">
              <div><span className="eyebrow">Network</span><h2>Partner kitchens</h2></div>
              <span className="live-label"><span className="status-dot" /> {partnerKitchens.filter((k) => k.status === "Active").length} active</span>
            </div>
            <p className="panel-note">Every kitchen, mess and function partner connected to this NGO, with distance and last activity.</p>
            <div className="activity-list">
              {partnerKitchens.map((k) => {
                const meta = sourceMeta[k.type];
                return (
                  <div className="activity-row" key={k.id}>
                    <div className="activity-icon"><span className="material-symbols-outlined">{meta.icon}</span></div>
                    <div className="activity-copy">
                      <strong>{k.name}</strong>
                      <span>
                        <span className={`source-badge source-badge--${k.type} source-badge--inline`}>
                          <span className="material-symbols-outlined">{meta.icon}</span>{meta.label}
                        </span>
                        {k.distance} away · last delivery {k.lastDelivery}
                      </span>
                    </div>
                    <span className={`row-status ${k.status === "Pending verification" ? "row-status--pending" : ""}`}>{k.status}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading"><div><span className="eyebrow">This month</span><h2>Impact so far</h2></div></div>
            <div className="metric-grid" aria-label="Impact metrics">
              {impactStats.map((s) => (
                <article className="metric" key={s.label}>
                  <span><span className="material-symbols-outlined" style={{ fontSize: 18, verticalAlign: "middle", marginRight: 4 }}>{s.icon}</span>{s.label}</span>
                  <strong>{s.value}</strong>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      {notice && <div className="toast" role="status"><span className="material-symbols-outlined">check_circle</span>{notice}</div>}
    </div>
  );
}