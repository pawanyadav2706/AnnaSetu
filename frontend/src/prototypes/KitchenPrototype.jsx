import { useState, useEffect, useMemo } from "react";
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
  { icon: "psychology", label: "AI based food waste prediction" },
  { icon: "inventory", label: "Real-time inventory tracking" },
  { icon: "hub", label: "Smart redistribution matching" },
  { icon: "near_me", label: "Location based nearest NGO / partner" },
  { icon: "bar_chart", label: "Dashboard & analytics" },
  { icon: "lock", label: "Secure role-based access" },
];

const sourceTypes = [
  { key: "institute", label: "Institute Canteen", icon: "school" },
  { key: "mess", label: "Hostel Mess", icon: "restaurant" },
  { key: "function", label: "Wedding / Function", icon: "celebration" },
];

const kanbanColumns = [
  { key: "active", label: "Prepared", icon: "inventory_2" },
  { key: "open", label: "Flagged for pickup", icon: "campaign" },
  { key: "claimed", label: "Claimed", icon: "task_alt" },
  { key: "expired", label: "Routed to partner", icon: "local_shipping" },
];

const initialSurplus = [
  { id: 1, name: "Dal Tadka & Jeera Rice", qty: "65 portions", source: "institute", preparedAgo: "35 min ago", status: "active", secondsLeft: 15 * 60 },
  { id: 2, name: "Mixed Veg Sabzi", qty: "40 portions", source: "mess", preparedAgo: "50 min ago", status: "active", secondsLeft: 15 * 60 },
  { id: 3, name: "Paneer Curry & Kachori", qty: "80 portions", source: "function", preparedAgo: "1h ago", status: "active", secondsLeft: 15 * 60 },
];

const initialClaims = [
  { id: 1, name: "Ananya R.", detail: "Hostel Mess · B-Block · Dal Tadka & Jeera Rice", status: "Picked up" },
];

const rawStock = [
  { id: 1, name: "Toned Cow Milk", category: "Dairy", storage: "Cold storage · 4°C", stock: "15 litres", dailyNeed: "10 litres/day", expiryDays: 1, prep: "Curd / Paneer today — use before evening service" },
  { id: 2, name: "Tomatoes", category: "Vegetables", storage: "Chiller", stock: "22 kg", dailyNeed: "8 kg/day", expiryDays: 2, prep: "Cook into gravy base within 48h" },
  { id: 3, name: "Coriander & Mint", category: "Vegetables", storage: "Chiller", stock: "3 kg", dailyNeed: "1 kg/day", expiryDays: 1, prep: "Use for chutney / garnish today" },
  { id: 4, name: "Paneer", category: "Dairy", storage: "Cold storage · 4°C", stock: "9 kg", dailyNeed: "3 kg/day", expiryDays: 3, prep: "Prioritise Paneer Curry over other mains" },
  { id: 5, name: "Onions", category: "Vegetables", storage: "Dry store", stock: "60 kg", dailyNeed: "12 kg/day", expiryDays: 5, prep: "Standard rotation, no action needed yet" },
  { id: 6, name: "Bananas", category: "Fruits", storage: "Room temp", stock: "18 kg", dailyNeed: "6 kg/day", expiryDays: 4, prep: "Serve in next 2 mess meals" },
  { id: 7, name: "Rice (raw)", category: "Grains", storage: "Dry store", stock: "180 kg", dailyNeed: "25 kg/day", expiryDays: 45, prep: "Safe pantry stock, standard rotation" },
  { id: 8, name: "Wheat Flour", category: "Grains", storage: "Dry store", stock: "95 kg", dailyNeed: "20 kg/day", expiryDays: 30, prep: "Safe pantry stock, standard rotation" },
  { id: 9, name: "Toor Dal", category: "Grains", storage: "Dry store", stock: "40 kg", dailyNeed: "6 kg/day", expiryDays: 60, prep: "Safe pantry stock, standard rotation" },
];

function priorityOf(expiryDays) {
  if (expiryDays <= 2) return { key: "high", label: "High Priority · Cook Urgently", icon: "priority_high" };
  if (expiryDays <= 7) return { key: "medium", label: "Medium Priority · Stage Next", icon: "schedule" };
  return { key: "low", label: "Low Priority · Preserve Buffer", icon: "inventory" };
}

function sourceMeta(key) {
  return sourceTypes.find((s) => s.key === key) || sourceTypes[0];
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function KitchenPrototype() {
  const [surplus, setSurplus] = useState(initialSurplus);
  const [claims, setClaims] = useState(initialClaims);
  const [notice, setNotice] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [formSource, setFormSource] = useState("institute");
  const [formName, setFormName] = useState("");
  const [formQty, setFormQty] = useState("");
  const [stockFilter, setStockFilter] = useState("all");
  const [stockSearch, setStockSearch] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSurplus((prev) =>
        prev.map((item) => {
          if (item.status !== "open") return item;
          if (item.secondsLeft <= 1) return { ...item, status: "expired", secondsLeft: 0 };
          return { ...item, secondsLeft: item.secondsLeft - 1 };
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function openPickup(id) {
    setSurplus((prev) => prev.map((item) => (item.id === id ? { ...item, status: "open", secondsLeft: 15 * 60 } : item)));
    setNotice("15 minute pickup window opened");
    window.setTimeout(() => setNotice(""), 2000);
  }

  function claimItem(id) {
    const item = surplus.find((s) => s.id === id);
    if (!item) return;
    setSurplus((prev) => prev.map((s) => (s.id === id ? { ...s, status: "claimed" } : s)));
    setClaims((prev) => [
      { id: Date.now(), name: "Walk-in student", detail: `${sourceMeta(item.source).label} · ${item.name}`, status: "Claimed" },
      ...prev,
    ]);
  }

  function addSurplus(e) {
    e.preventDefault();
    if (!formName.trim() || !formQty.trim()) return;
    setSurplus((prev) => [
      { id: Date.now(), name: formName.trim(), qty: formQty.trim(), source: formSource, preparedAgo: "just now", status: "active", secondsLeft: 15 * 60 },
      ...prev,
    ]);
    setFormName("");
    setFormQty("");
    setFormOpen(false);
    setNotice("Surplus logged");
    window.setTimeout(() => setNotice(""), 2000);
  }

  const tierCounts = useMemo(() => {
    const counts = { high: [], medium: [], low: [] };
    rawStock.forEach((item) => counts[priorityOf(item.expiryDays).key].push(item));
    return counts;
  }, []);

  const visibleStock = useMemo(() => {
    return rawStock.filter((item) => {
      const matchesFilter = stockFilter === "all" || priorityOf(item.expiryDays).key === stockFilter;
      const matchesSearch = item.name.toLowerCase().includes(stockSearch.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [stockFilter, stockSearch]);

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
          <section
            className="dashboard-hero"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(11,35,24,0.15), rgba(11,35,24,0.8)), url(/high_end_modern_commercial_kitchen_in_a_university_or_corporate_tech_park/screen.png)" }}
          >
            <span className="dashboard-hero-kicker"><span className="status-dot" /> Kitchen console · Live</span>
            <h1>IIT Hyderabad Dining Hall</h1>
            <p>Institute canteen, hostel mess and campus function catering — all surplus tracked from one console.</p>
            <button className="primary-button" type="button" onClick={() => setFormOpen((v) => !v)}>
              <span className="material-symbols-outlined">bolt</span>Log surplus
            </button>
          </section>

          {formOpen && (
            <section className="workspace-panel quick-add-panel">
              <div className="section-heading"><div><span className="eyebrow">New entry</span><h2>Log surplus food</h2></div></div>
              <form onSubmit={addSurplus} className="quick-add-form">
                <div className="source-picker">
                  {sourceTypes.map((s) => (
                    <button
                      type="button"
                      key={s.key}
                      className={`source-pill source-pill--${s.key} ${formSource === s.key ? "is-selected" : ""}`}
                      onClick={() => setFormSource(s.key)}
                    >
                      <span className="material-symbols-outlined">{s.icon}</span>{s.label}
                    </button>
                  ))}
                </div>
                <div className="quick-add-fields">
                  <input type="text" placeholder="Item name, e.g. Veg Biryani" value={formName} onChange={(e) => setFormName(e.target.value)} />
                  <input type="text" placeholder="Quantity, e.g. 30 portions" value={formQty} onChange={(e) => setFormQty(e.target.value)} />
                  <button className="primary-button" type="submit"><span className="material-symbols-outlined">add</span>Add to inventory</button>
                </div>
              </form>
            </section>
          )}

          <section className="metric-grid" aria-label="Summary metrics">
            <article className="metric"><span>Prepared today</span><strong>1,400</strong><small>Portions</small></article>
            <article className="metric"><span>Surplus listed</span><strong>{surplus.length}</strong><small>Items</small></article>
            <article className="metric"><span>Safety window</span><strong>3h 15m</strong><small>Remaining</small></article>
          </section>

          {/* RAW STOCK & EXPIRY MONITOR */}
          <section className="workspace-panel">
            <div className="section-heading">
              <div><span className="eyebrow">Raw materials</span><h2>Raw stock inventory & expiry monitor</h2></div>
              <span className="live-label"><span className="status-dot" /> AI FEFO active</span>
            </div>
            <p className="panel-note">Tracks raw ingredients by expiry date and shelf life, and prioritises what needs to be cooked first — before any of it becomes waste.</p>

            <div className="priority-tier-grid">
              <div className="priority-tier priority-tier--high">
                <span className="priority-tier-label">1 · High Priority <em>(≤48h)</em></span>
                <strong>{tierCounts.high.length}</strong>
                <span className="priority-tier-sub">{tierCounts.high.length} items · cook urgently</span>
              </div>
              <div className="priority-tier priority-tier--medium">
                <span className="priority-tier-label">2 · Medium Priority <em>(3–7d)</em></span>
                <strong>{tierCounts.medium.length}</strong>
                <span className="priority-tier-sub">items staged for mid-week meals</span>
              </div>
              <div className="priority-tier priority-tier--low">
                <span className="priority-tier-label">3 · Low Priority <em>(&gt;7d)</em></span>
                <strong>{tierCounts.low.length}</strong>
                <span className="priority-tier-sub">items safe in dry pantry</span>
              </div>
            </div>

            <div className="stock-toolbar">
              <div className="stock-filter-group">
                {[
                  { key: "all", label: `All (${rawStock.length})` },
                  { key: "high", label: `High (${tierCounts.high.length})` },
                  { key: "medium", label: `Med (${tierCounts.medium.length})` },
                  { key: "low", label: `Low (${tierCounts.low.length})` },
                ].map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    className={`stock-filter-chip stock-filter-chip--${f.key} ${stockFilter === f.key ? "is-active" : ""}`}
                    onClick={() => setStockFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="stock-search">
                <span className="material-symbols-outlined">search</span>
                <input type="text" placeholder="Search ingredient…" value={stockSearch} onChange={(e) => setStockSearch(e.target.value)} />
              </div>
            </div>

            <div className="stock-table">
              <div className="stock-table-row stock-table-head">
                <span>Raw ingredient & storage</span>
                <span>Available stock</span>
                <span>Expiry & shelf life</span>
                <span>Use-first priority</span>
                <span>Recommended prep</span>
              </div>
              {visibleStock.map((item) => {
                const p = priorityOf(item.expiryDays);
                return (
                  <div className="stock-table-row" key={item.id}>
                    <div className="stock-item-name">
                      <strong>{item.name}</strong>
                      <span>{item.category} · {item.storage}</span>
                    </div>
                    <div className="stock-item-qty">
                      <strong>{item.stock}</strong>
                      <span>daily need: {item.dailyNeed}</span>
                    </div>
                    <div className="stock-item-expiry">
                      <span className={`priority-dot priority-dot--${p.key}`} />
                      {item.expiryDays} day{item.expiryDays === 1 ? "" : "s"} shelf life remaining
                    </div>
                    <div className="stock-item-priority">
                      <span className={`priority-pill priority-pill--${p.key}`}>
                        <span className="material-symbols-outlined">{p.icon}</span>{p.label}
                      </span>
                    </div>
                    <div className="stock-item-prep">{item.prep}</div>
                  </div>
                );
              })}
              {visibleStock.length === 0 && <div className="stock-empty">No ingredients match this filter.</div>}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading">
              <div><span className="eyebrow">Operations</span><h2>Kitchen workflow</h2></div>
              <span className="live-label"><span className="status-dot" /> Live</span>
            </div>
            <p className="panel-note">Every surplus item — whether from the canteen, the mess, or a campus function — moves through the same pipeline, so nothing sits unnoticed.</p>
            <div className="kanban-board">
              {kanbanColumns.map((col) => {
                const items = surplus.filter((s) => s.status === col.key);
                return (
                  <div className={`kanban-column kanban-column--${col.key}`} key={col.key}>
                    <div className="kanban-column-head">
                      <span className="material-symbols-outlined">{col.icon}</span>
                      <span>{col.label}</span>
                      <span className="kanban-count">{items.length}</span>
                    </div>
                    <div className="kanban-cards">
                      {items.length === 0 && <div className="kanban-empty">Nothing here</div>}
                      {items.map((item) => {
                        const meta = sourceMeta(item.source);
                        return (
                          <div className="kanban-card" key={item.id}>
                            <span className={`source-badge source-badge--${item.source}`}>
                              <span className="material-symbols-outlined">{meta.icon}</span>{meta.label}
                            </span>
                            <strong>{item.name}</strong>
                            <span>{item.qty}</span>
                            {item.status === "open" && <span className="kanban-timer">{formatTime(item.secondsLeft)} left of 15:00</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading">
              <div><span className="eyebrow">Real-time inventory</span><h2>Surplus food listings</h2></div>
              <span className="live-label"><span className="status-dot" /> Live</span>
            </div>
            <p className="panel-note">AI flags food likely to go to waste. Each item gets a single fixed 15 minute pickup window — first come, first served — before it's routed to a partner.</p>

            <div className="activity-list">
              {surplus.map((item) => {
                const meta = sourceMeta(item.source);
                return (
                  <div className="activity-row" key={item.id}>
                    <div className="activity-icon">
                      <span className="material-symbols-outlined">
                        {item.status === "expired" ? "recycling" : item.status === "claimed" ? "task_alt" : "restaurant"}
                      </span>
                    </div>
                    <div className="activity-copy">
                      <strong>{item.name}</strong>
                      <span>
                        <span className={`source-badge source-badge--${item.source} source-badge--inline`}>
                          <span className="material-symbols-outlined">{meta.icon}</span>{meta.label}
                        </span>
                        {item.qty} · prepared {item.preparedAgo}
                      </span>
                    </div>

                    {item.status === "active" && (
                      <button className="secondary-button" type="button" onClick={() => openPickup(item.id)}>
                        Open 15-min pickup
                      </button>
                    )}
                    {item.status === "open" && <span className="row-status">{formatTime(item.secondsLeft)} left</span>}
                    {item.status === "claimed" && <span className="row-status">Claimed</span>}
                    {item.status === "expired" && <span className="row-status">Routed to partner</span>}
                    {item.status === "open" && (
                      <button className="secondary-button" type="button" onClick={() => claimItem(item.id)}>
                        Simulate claim
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading"><div><span className="eyebrow">Mess</span><h2>Pickup history</h2></div></div>
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
