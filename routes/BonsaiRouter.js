import express from "express";
import { getAllBonsais } from "../controllers/BonsaiController.js";
import { deleteBonsai } from "../controllers/BonsaiController.js";

const router = express.Router();

router.get("/", getAllBonsais);
router.delete("/:id", deleteBonsai);

export default router