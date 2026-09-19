import { Router } from "express";
import { getAllFood, getSurplusFood, createFood, rerunPrediction } from "../controllers/foodController.js";

const router = Router();

router.get("/", getAllFood);
router.get("/surplus", getSurplusFood);
router.post("/", createFood);
router.patch("/:id/predict", rerunPrediction);

export default router;
