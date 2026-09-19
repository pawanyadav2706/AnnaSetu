import { nanoid } from "nanoid";
import { readDB, writeDB } from "../utils/db.js";

const STATUS_FLOW = ["requested", "picked-up", "delivered", "verified"];

export function getAllRedistributions(req, res) {
  const db = readDB();
  const enriched = db.redistributions.map((r) => ({
    ...r,
    food: db.foodEntries.find((f) => f.id === r.foodId) || null,
    ngo: db.ngos.find((n) => n.id === r.ngoId) || null,
  }));
  res.json(enriched);
}

export function createRedistribution(req, res) {
  const db = readDB();
  const { foodId, ngoId } = req.body;

  const food = db.foodEntries.find((f) => f.id === foodId);
  const ngo = db.ngos.find((n) => n.id === ngoId);
  if (!food || !ngo) return res.status(404).json({ error: "Food entry or NGO not found." });

  const record = {
    id: `rd${nanoid(6)}`,
    foodId,
    ngoId,
    status: "requested",
    requestedAt: new Date().toISOString(),
    history: [{ status: "requested", at: new Date().toISOString() }],
  };

  db.redistributions.unshift(record);
  writeDB(db);
  res.status(201).json(record);
}

export function advanceStatus(req, res) {
  const db = readDB();
  const record = db.redistributions.find((r) => r.id === req.params.id);
  if (!record) return res.status(404).json({ error: "Redistribution record not found." });

  const currentIndex = STATUS_FLOW.indexOf(record.status);
  if (currentIndex === STATUS_FLOW.length - 1) {
    return res.status(400).json({ error: "Already at final status." });
  }

  const nextStatus = STATUS_FLOW[currentIndex + 1];
  record.status = nextStatus;
  record.history.push({ status: nextStatus, at: new Date().toISOString() });

  // On verification, roll the impact into the running totals and free up the food item.
  if (nextStatus === "verified") {
    const food = db.foodEntries.find((f) => f.id === record.foodId);
    if (food) {
      db.historyStats.totalFoodSavedKg += food.quantityKg;
      db.historyStats.totalMealsRedistributed += Math.round(food.quantityKg * 2.5);
      db.historyStats.co2SavedKg += Math.round(food.quantityKg * 0.6);
      db.historyStats.moneySaved += Math.round(food.quantityKg * 80);
      food.status = "redistributed";
    }
  }

  writeDB(db);
  res.json(record);
}
