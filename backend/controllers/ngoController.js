import { readDB } from "../utils/db.js";
import { distanceKm } from "../utils/aiPredictor.js";

export function getAllNgos(req, res) {
  const db = readDB();
  res.json(db.ngos);
}

// Returns NGOs ranked by distance + spare capacity for a given food entry.
export function matchNgosForFood(req, res) {
  const db = readDB();
  const food = db.foodEntries.find((f) => f.id === req.params.foodId);
  if (!food) return res.status(404).json({ error: "Food entry not found." });

  const ranked = db.ngos
    .map((ngo) => ({
      ...ngo,
      distanceKm: distanceKm(food.location, ngo.location),
      canAccept: ngo.capacityKgPerDay >= food.quantityKg,
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm);

  res.json(ranked);
}
