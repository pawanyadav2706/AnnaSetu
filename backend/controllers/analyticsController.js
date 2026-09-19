import { readDB } from "../utils/db.js";

export function getAnalytics(req, res) {
  const db = readDB();
  const { foodEntries, redistributions, historyStats } = db;

  const statusCounts = foodEntries.reduce((acc, f) => {
    acc[f.status] = (acc[f.status] || 0) + 1;
    return acc;
  }, {});

  const pipelineCounts = redistributions.reduce((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {});

  // Simple weekly trend mock, seeded from current saved total so the chart looks alive.
  const weeklyTrend = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => ({
    day,
    foodSavedKg: Math.round(historyStats.totalFoodSavedKg / 7 + (i % 3 === 0 ? 12 : -8) + i * 3),
  }));

  res.json({
    totals: historyStats,
    statusCounts,
    pipelineCounts,
    weeklyTrend,
    activeSurplusItems: foodEntries.filter((f) => f.status === "surplus" || f.status === "near-expiry").length,
  });
}
