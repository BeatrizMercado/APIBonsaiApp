import express from "express";
import { getAllBonsais } from "../controllers/BonsaiController.js";
import { deleteBonsai } from "../controllers/BonsaiController.js";
import { createBonsai } from "../controllers/BonsaiController.js";

const router = express.Router();

router.get("/", getAllBonsais);
router.delete("/:id", deleteBonsai);
router.post("/", createBonsai);
export default router