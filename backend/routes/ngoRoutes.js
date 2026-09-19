import { Router } from "express";
import { getAllNgos, matchNgosForFood } from "../controllers/ngoController.js";

const router = Router();

router.get("/", getAllNgos);
router.get("/match/:foodId", matchNgosForFood);

export default router;
