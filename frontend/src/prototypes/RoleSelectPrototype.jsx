import { NavLink } from "react-router-dom";

const roles = [
  {
    to: "/dashboard/kitchen",
    icon: "restaurant",
    title: "Kitchen / Institution",
    text: "Log surplus food, track prep quantity and safety windows.",
  },
  {
    to: "/dashboard/ngo",
    icon: "admin_panel_settings",
    title: "Admin / NGO Portal",
    text: "Verify partners, monitor the network and accept surplus meals.",
  },
  {
    to: "/dashboard/animal",
    icon: "pets",
    title: "Animal Shelter",
    text: "Receive food safe for animal feeding, tracked and verified.",
  },
];

export default function RoleSelectPrototype() {
  return (
    <div className="role-select-page">
      <header className="landing-nav">
        <NavLink className="landing-brand" to="/" aria-label="AnnaSetu home">
          <img src="/annasetu_official_logo/screen.png" alt="AnnaSetu logo" />
          <span><strong>AnnaSetu</strong><small>Food rescue network</small></span>
        </NavLink>
      </header>

      <main className="role-select-main">
        <div className="role-select-heading">
          <span className="landing-kicker">Login / Sign up</span>
          <h1>Continue as</h1>
          <p>Pick the dashboard that matches who you are, then sign in.</p>
        </div>

        <div className="role-card-grid">
          {roles.map((role) => (
            <NavLink className="role-card" to={role.to} key={role.to}>
              <span className="role-card-icon material-symbols-outlined">{role.icon}</span>
              <h2>{role.title}</h2>
              <p>{role.text}</p>
              <span className="role-card-action">Login <span className="material-symbols-outlined">arrow_forward</span></span>
            </NavLink>
          ))}
        </div>
      </main>
    </div>
  );
}
