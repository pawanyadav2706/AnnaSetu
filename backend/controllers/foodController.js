import { nanoid } from "nanoid";
import { readDB, writeDB } from "../utils/db.js";
import { predictWastage } from "../utils/aiPredictor.js";

export function getAllFood(req, res) {
  const db = readDB();
  res.json(db.foodEntries);
}

export function getSurplusFood(req, res) {
  const db = readDB();
  const alreadyMatched = new Set(db.redistributions.map((r) => r.foodId));
  const surplus = db.foodEntries.filter(
    (f) => (f.status === "surplus" || f.status === "near-expiry") && !alreadyMatched.has(f.id)
  );
  res.json(surplus);
}

export function createFood(req, res) {
  const db = readDB();
  const { sourceName, sourceType, foodType, category, quantityKg, preparedAt, expiryAt, location } = req.body;

  if (!sourceName || !foodType || !category || !quantityKg || !expiryAt) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const prepared = preparedAt || new Date().toISOString();
  const prediction = predictWastage({ category, quantityKg, preparedAt: prepared, expiryAt });

  const entry = {
    id: `fd${nanoid(6)}`,
    sourceName,
    sourceType: sourceType || "Institutional Kitchen",
    foodType,
    category,
    quantityKg: Number(quantityKg),
    preparedAt: prepared,
    expiryAt,
    location: location || { lat: 28.4595, lng: 77.0266, area: "Unknown" },
    status: prediction.status,
    predictedWasteKg: prediction.predictedWasteKg,
    confidence: prediction.confidence,
    aiReason: prediction.reason,
  };

  db.foodEntries.unshift(entry);
  writeDB(db);
  res.status(201).json(entry);
}

export function rerunPrediction(req, res) {
  const db = readDB();
  const entry = db.foodEntries.find((f) => f.id === req.params.id);
  if (!entry) return res.status(404).json({ error: "Food entry not found." });

  const prediction = predictWastage(entry);
  Object.assign(entry, {
    status: prediction.status,
    predictedWasteKg: prediction.predictedWasteKg,
    confidence: prediction.confidence,
    aiReason: prediction.reason,
  });
  writeDB(db);
  res.json(entry);
}
