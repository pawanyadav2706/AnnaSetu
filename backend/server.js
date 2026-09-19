import express from "express";
import cors from "cors";

import foodRoutes from "./routes/foodRoutes.js";
import ngoRoutes from "./routes/ngoRoutes.js";
import redistributionRoutes from "./routes/redistributionRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "AnnaSetu API", time: new Date().toISOString() });
});

app.use("/api/food", foodRoutes);
app.use("/api/ngos", ngoRoutes);
app.use("/api/redistributions", redistributionRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`AnnaSetu backend running on http://localhost:${PORT}`);
});
