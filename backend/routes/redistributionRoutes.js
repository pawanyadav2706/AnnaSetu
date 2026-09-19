import { Router } from "express";
import {
  getAllRedistributions,
  createRedistribution,
  advanceStatus,
} from "../controllers/redistributionController.js";

const router = Router();

router.get("/", getAllRedistributions);
router.post("/", createRedistribution);
router.patch("/:id/advance", advanceStatus);

export default router;
