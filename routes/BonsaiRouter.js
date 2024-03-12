import express from "express";
import { getAllBonsais, deleteBonsai, createBonsai, updateBonsai, getBonsaiById } from "../controllers/BonsaiController.js";

import { validateBonsai, handleValidationResults } from "../validators/BonsaiValidation.js";


const router = express.Router();

router.get("/", getAllBonsais);
router.delete("/:id", deleteBonsai);
router.post("/", validateBonsai, handleValidationResults, createBonsai);
router.put("/:id", validateBonsai, handleValidationResults, updateBonsai);
router.get("/:id", getBonsaiById);
export default router