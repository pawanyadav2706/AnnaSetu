import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getFood = () => api.get("/food").then((r) => r.data);
export const getSurplusFood = () => api.get("/food/surplus").then((r) => r.data);
export const createFood = (payload) => api.post("/food", payload).then((r) => r.data);

export const getNgos = () => api.get("/ngos").then((r) => r.data);
export const matchNgosForFood = (foodId) => api.get(`/ngos/match/${foodId}`).then((r) => r.data);

export const getRedistributions = () => api.get("/redistributions").then((r) => r.data);
export const createRedistribution = (payload) => api.post("/redistributions", payload).then((r) => r.data);
export const advanceRedistribution = (id) => api.patch(`/redistributions/${id}/advance`).then((r) => r.data);

export const getAnalytics = () => api.get("/analytics").then((r) => r.data);

export default api;
