import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { to: "/dashboard/kitchen", label: "Kitchen", icon: "restaurant" },
  { to: "/dashboard/ngo", label: "Admin / NGO", icon: "admin_panel_settings" },
  { to: "/dashboard/animal", label: "Animal Shelter", icon: "pets" },
];

const shelterCapabilities = [
  { icon: "vaccines", label: "Vet-verified intake before feeding" },
  { icon: "calendar_month", label: "Daily feeding schedule & logs" },
  { icon: "photo_camera", label: "Photo-verified pickup & delivery" },
  { icon: "notifications_active", label: "Instant alerts for new scraps nearby" },
  { icon: "route", label: "Route to nearest available shelter" },
  { icon: "query_stats", label: "Monthly feed & impact reports" },
];

const speciesAccepted = [
  { icon: "pets", label: "Street dogs — 30+" },
  { icon: "cruelty_free", label: "Goats & cattle — 12" },
  { icon: "flutter_dash", label: "Birds & poultry — 20+" },
  { icon: "compost", label: "Overflow to compost pit" },
];

// Waste items that are unfit for human consumption but perfectly safe
// as animal feed — this is the core "nothing goes to waste" list.
const initialScraps = [
  {
    id: 1,
    item: "Aloo (potato) peels & vegetable trimmings",
    detail: "12 kg · IIT Hyderabad Dining Hall",
    reason: "Not human-edible, high fibre — safe cattle/goat feed",
    status: "Available",
    image: "/food-images/aloo-chilka.jpg",
    icon: "eco",
  },
  {
    id: 2,
    item: "Rice & dal leftovers (unfit for human reuse)",
    detail: "8 kg · TCS Cafeteria",
    reason: "Cooked-food leftovers past safe reuse window",
    status: "Available",
    image: "/food-images/rice-dal-leftover.jpg",
    icon: "rice_bowl",
  },
  {
    id: 3,
    item: "Dhaniya (coriander) stems & roots",
    detail: "2 kg · Green Leaf Restaurant",
    reason: "Trimmed stems, not sold but nutrient-rich for goats",
    status: "Available",
    image: "/food-images/dhaniya-dandi.jpg",
    icon: "grass",
  },
  {
    id: 4,
    item: "Sabzi chhilke — lauki, karela, bhindi ends",
    detail: "6 kg · Annapurna Mess",
    reason: "Peels & cut-ends discarded during prep",
    status: "Available",
    image: "/food-images/sabzi-chhilke.jpg",
    icon: "compost",
  },
  {
    id: 5,
    item: "Stale roti & bread crusts",
    detail: "5 kg · Sunrise Bakery",
    reason: "Past shelf life for people, fine for cows",
    status: "Accepted · pickup scheduled",
    image: "/food-images/roti-bread.jpg",
    icon: "bakery_dining",
  },
];

const impactStats = [
  { icon: "recycling", label: "Waste diverted this month", value: "1.2", unit: "Tonnes" },
  { icon: "pets", label: "Animals fed daily (avg.)", value: "45", unit: "Animals" },
  { icon: "cloud_off", label: "CO₂e avoided", value: "310", unit: "kg" },
  { icon: "delete_forever", label: "Landfill loads saved", value: "18", unit: "Trips" },
];

export default function AnimalPrototype() {
  const [scraps, setScraps] = useState(initialScraps);
  const [notice, setNotice] = useState("");
  const [history, setHistory] = useState([
    { id: "h1", text: "Accepted 5 kg stale roti from Sunrise Bakery", time: "Today · 9:10 AM" },
    { id: "h2", text: "Verified 10 kg peels from IIT Dining Hall", time: "Yesterday · 6:40 PM" },
  ]);

  function flash(msg) {
    setNotice(msg);
    window.setTimeout(() => setNotice(""), 2200);
  }

  function acceptPickup(id) {
    const target = scraps.find((s) => s.id === id);
    setScraps((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "Accepted · pickup scheduled" } : s))
    );
    if (target) {
      setHistory((prev) => [
        { id: `h-${Date.now()}`, text: `Accepted ${target.detail.split("·")[0].trim()} — ${target.item}`, time: "Just now" },
        ...prev,
      ]);
    }
    flash("Pickup accepted");
  }

  function declinePickup(id) {
    setScraps((prev) => prev.map((s) => (s.id === id ? { ...s, status: "Declined" } : s)));
    flash("Marked as declined");
  }

  function markReceived(id) {
    setScraps((prev) => prev.map((s) => (s.id === id ? { ...s, status: "Received & verified" } : s)));
    flash("Marked received & verified");
  }

  const availableCount = scraps.filter((s) => s.status === "Available").length;
  const acceptedCount = scraps.filter((s) => s.status.startsWith("Accepted")).length;

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
          <section className="dashboard-hero dashboard-hero--animal">
            <span className="dashboard-hero-kicker">
              <span className="material-symbols-outlined">pets</span>Animal shelter portal
            </span>
            <h1>Street Paws Shelter, Hyderabad</h1>
            <p>Receive kitchen scraps and peels that are safe for animal feeding — tracked, accepted and verified, so nothing ends up in the bin.</p>
            <button className="primary-button" type="button" onClick={() => flash("Capacity confirmed")}>
              <span className="material-symbols-outlined">bolt</span>Confirm capacity
            </button>
          </section>

          <section className="metric-grid" aria-label="Summary metrics">
            <article className="metric"><span>Today's capacity</span><strong>120</strong><small>Kg</small></article>
            <article className="metric"><span>Already received</span><strong>70</strong><small>58% complete</small></article>
            <article className="metric"><span>Available pickups</span><strong>{availableCount}</strong><small>Waiting for you</small></article>
            <article className="metric"><span>Accepted / scheduled</span><strong>{acceptedCount}</strong><small>On the way</small></article>
          </section>

          <section className="workspace-panel">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Why this matters</span>
                <h2>Nothing that can feed an animal should go to waste</h2>
              </div>
            </div>
            <p className="panel-note">
              Aloo ke chilke, dhaniya ki dandi, sabzi ke chhilke jaisi cheezein insano ke khane layak nahi hoti, lekin
              wo bekaar bhi nahi hain — yeh sab poshan se bhare hote hain aur animals ke liye ekdum safe feed ban sakte
              hain. AnnaSetu inhe seedha kitchen se shelter tak track karta hai, taaki koi bhi cheez landfill me na jaaye.
            </p>
          </section>

          <section className="workspace-panel">
            <div className="section-heading">
              <div><span className="eyebrow">From kitchens</span><h2>Peels & scraps available for pickup</h2></div>
              <span className="live-label"><span className="status-dot" /> Live</span>
            </div>
            <p className="panel-note">Vegetable peels and leftovers that aren't fit for human consumption are routed here instead of the bin — the shelter can accept, track and verify pickup directly.</p>
            <div className="activity-list">
              {scraps.map((s) => (
                <div className="activity-row" key={s.id}>
                  <div className="activity-thumb">
                    <img
                      src={s.image}
                      alt={s.item}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="activity-icon-fallback" style={{ display: "none" }}>
                      <span className="material-symbols-outlined">{s.icon}</span>
                    </div>
                  </div>
                  <div className="activity-copy">
                    <strong>{s.item}</strong>
                    <span>{s.detail}</span>
                    <small className="reason-tag">{s.reason}</small>
                  </div>
                  <div className="activity-actions">
                    {s.status === "Available" && (
                      <>
                        <button className="secondary-button" type="button" onClick={() => acceptPickup(s.id)}>Accept pickup</button>
                        <button className="ghost-button" type="button" onClick={() => declinePickup(s.id)}>Decline</button>
                      </>
                    )}
                    {s.status === "Accepted · pickup scheduled" && (
                      <>
                        <span className="row-status">{s.status}</span>
                        <button className="secondary-button" type="button" onClick={() => markReceived(s.id)}>Mark received</button>
                      </>
                    )}
                    {s.status === "Received & verified" && (
                      <span className="row-status row-status--verified">{s.status}</span>
                    )}
                    {s.status === "Declined" && (
                      <span className="row-status row-status--declined">{s.status}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading"><div><span className="eyebrow">Impact</span><h2>What the shelter has saved from waste</h2></div></div>
            <div className="metric-grid" aria-label="Impact metrics">
              {impactStats.map((stat) => (
                <article className="metric" key={stat.label}>
                  <span><span className="material-symbols-outlined" style={{ fontSize: "18px", verticalAlign: "middle", marginRight: "4px" }}>{stat.icon}</span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <small>{stat.unit}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading"><div><span className="eyebrow">Activity</span><h2>Recent pickup history</h2></div></div>
            <div className="activity-list">
              {history.map((h) => (
                <div className="activity-row" key={h.id}>
                  <div className="activity-icon"><span className="material-symbols-outlined">history</span></div>
                  <div className="activity-copy"><strong>{h.text}</strong><span>{h.time}</span></div>
                </div>
              ))}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading"><div><span className="eyebrow">Shelter capabilities</span><h2>What Street Paws can handle</h2></div></div>
            <div className="feature-chip-grid">
              {shelterCapabilities.map((f) => (
                <div className="feature-chip" key={f.label}>
                  <span className="material-symbols-outlined">{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="workspace-panel">
            <div className="section-heading"><div><span className="eyebrow">Feeding profile</span><h2>Species we feed at this shelter</h2></div></div>
            <p className="panel-note">Different scraps suit different animals — the shelter sets its own list, so kitchens only get matched with pickups it can actually use.</p>
            <div className="feature-chip-grid">
              {speciesAccepted.map((sp) => (
                <div className="feature-chip" key={sp.label}>
                  <span className="material-symbols-outlined">{sp.icon}</span>
                  <span>{sp.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="simple-tip">
            <span className="material-symbols-outlined">emergency</span>
            <div>
              <strong>Vet on call for flagged intake</strong>
              <p>Any batch marked unusual during verification is quarantined and Dr. Meera Rao (attached vet) is notified automatically — no scrap reaches the animals unverified.</p>
            </div>
          </section>
        </div>
      </main>
      {notice && <div className="toast" role="status"><span className="material-symbols-outlined">check_circle</span>{notice}</div>}
    </div>
  );
}
