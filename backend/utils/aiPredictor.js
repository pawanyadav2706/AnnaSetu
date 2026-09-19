// Mock AI/ML engine.
// In the real system (per the SIH synopsis) this would be a trained model using
// historical consumption data, weather, footfall, and past wastage patterns.
// For the prototype we simulate that intelligence with a transparent heuristic
// so the demo is deterministic and explainable to judges.

const CATEGORY_BASELINE_DEMAND = {
  "Cooked Meal": 12,
  "Packaged": 6,
  "Raw Produce": 20,
  "Bakery": 5,
};

export function predictWastage({ category, quantityKg, preparedAt, expiryAt }) {
  const baseline = CATEGORY_BASELINE_DEMAND[category] ?? 10;
  const surplusRatio = quantityKg / baseline;

  const hoursToExpiry =
    (new Date(expiryAt).getTime() - new Date(preparedAt).getTime()) / 36e5;

  // Core heuristic: how far above typical demand, adjusted by shelf-life window.
  let predictedWasteKg = Math.max(0, quantityKg - baseline);
  if (hoursToExpiry < 4) predictedWasteKg *= 1.3; // short shelf life raises risk
  predictedWasteKg = Math.round(predictedWasteKg * 10) / 10;

  let status = "fresh";
  if (surplusRatio >= 1.4 || predictedWasteKg >= quantityKg * 0.3) {
    status = "surplus";
  } else if (hoursToExpiry <= 2) {
    status = "near-expiry";
  }

  const confidence = Math.min(
    0.95,
    Math.max(0.6, 0.65 + Math.abs(surplusRatio - 1) * 0.2)
  );

  return {
    predictedWasteKg,
    status,
    confidence: Math.round(confidence * 100) / 100,
    reason:
      status === "surplus"
        ? `Prepared quantity is ${Math.round((surplusRatio - 1) * 100)}% above typical demand for this category.`
        : status === "near-expiry"
        ? "Shelf life window is closing soon — recommend immediate redistribution."
        : "Quantity is within normal demand range.",
  };
}

// Haversine distance in km, used for "nearest NGO" matching.
export function distanceKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)) * 10) / 10;
}
