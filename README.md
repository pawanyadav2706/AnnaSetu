# AnnaSetu — AI-Powered Smart Food Waste Reduction & Redistribution

**Smart India Hackathon 2026 · Problem Statement ID: SIH26234 · Team ByteBack# (Team ID 129645)**

A working full-stack prototype of the system described in the team's PPT: institutional
kitchens log prepared food, an AI layer predicts surplus/wastage, surplus items are matched
with the nearest NGOs/shelters, pickups are tracked through a status pipeline, and an admin
dashboard shows the overall impact (food saved, CO₂ saved, meals redistributed).

> **Note on tech stack:** the PPT lists React.js + Spring Boot + MongoDB. This prototype uses
> **React.js + Node.js/Express + a JSON file as the data store** instead of Spring Boot/MongoDB,
> so it runs instantly on any laptop with zero installs (no Java, no MongoDB server needed) —
> ideal for a hackathon demo. The API structure (REST routes, controllers, AI module) mirrors
> exactly what a Spring Boot backend would look like, so swapping in real MongoDB later is just
> replacing `backend/utils/db.js` with a Mongoose connection — no route/controller changes needed.

---

## 1. Folder structure

```
annasetu-prototype/
│
├── backend/                        # Node.js + Express REST API
│   ├── controllers/
│   │   ├── foodController.js       # create/list food entries, trigger AI prediction
│   │   ├── ngoController.js        # list NGOs, nearest-match logic
│   │   ├── redistributionController.js   # create pickup, advance status pipeline
│   │   └── analyticsController.js  # aggregate stats for admin dashboard
│   ├── routes/
│   │   ├── foodRoutes.js
│   │   ├── ngoRoutes.js
│   │   ├── redistributionRoutes.js
│   │   └── analyticsRoutes.js
│   ├── utils/
│   │   ├── aiPredictor.js          # mock AI/ML wastage prediction + distance matching
│   │   └── db.js                   # JSON file read/write (swap for MongoDB later)
│   ├── data/
│   │   └── db.json                 # the "database" — seeded with demo data
│   ├── server.js                   # Express app entry point
│   └── package.json
│
├── frontend/                       # React (Vite) app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Topbar.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── StatCard.jsx
│   │   │   └── StatusBadge.jsx
│   │   ├── pages/
│   │   │   ├── RoleSelect.jsx      # landing page — pick a role
│   │   │   ├── KitchenDashboard.jsx
│   │   │   ├── NgoDashboard.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── services/
│   │   │   └── api.js              # all backend API calls (axios)
│   │   ├── styles/
│   │   │   └── index.css           # design tokens + all styling
│   │   ├── App.jsx                 # routes
│   │   └── main.jsx                # React entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 2. How to run (2 terminals)

**Terminal 1 — backend:**
```bash
cd backend
npm install
npm run dev
```
Runs on `http://localhost:5000`. Check `http://localhost:5000/api/health` in a browser to confirm it's up.

**Terminal 2 — frontend:**
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173`. Open that URL — you'll land on the role-select screen.

Requires Node.js 18+ (any recent LTS version works). No database installation needed.

## 3. Demo flow for judges

1. **Kitchen Dashboard** → log a food item with a large quantity (e.g. 20 kg "Cooked Meal")
   and an expiry a couple of hours away → AI instantly flags it as **surplus** with a reason.
2. **NGO / Partner View** → the item appears under "Available surplus food" → click
   **Find nearest partners** → shows NGOs ranked by distance and capacity → click **Accept pickup**.
3. Still on the NGO view → the redistribution pipeline card shows the item moving through
   Requested → Picked up → Delivered → Verified as you click **Mark as…**.
4. **Admin & Analytics** → once verified, watch total food saved, meals redistributed, and
   CO₂ saved go up, plus the weekly trend and pipeline charts.

## 4. Where the "AI" lives

`backend/utils/aiPredictor.js` — a transparent, explainable heuristic (quantity vs. category
baseline demand + time-to-expiry) that plays the role of the trained ML model described in the
PPT. It's isolated in one file so it can be swapped for a real model (e.g. a scikit-learn/
TensorFlow service called over HTTP) without touching any other part of the app.

## 5. Next steps if you want to go further before the demo

- Swap `backend/utils/db.js` for a Mongoose + MongoDB Atlas connection (free tier).
- Add JWT-based login per role instead of the role-select screen.
- Replace the heuristic in `aiPredictor.js` with a real trained model.
- Add the X-ray/report auto-summarization module mentioned for the other project — not part of
  this PPT's scope, kept out of this prototype.
