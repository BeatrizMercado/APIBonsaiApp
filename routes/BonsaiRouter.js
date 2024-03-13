import express from "express";
import { getAllBonsais, deleteBonsai, createBonsai, updateBonsai, getOneBonsai } from "../controllers/BonsaiController.js";

import { validateBonsai } from "../validators/BonsaiValidation.js";
import { handleValidationResults } from "../helpers/validationHelper.js";


const router = express.Router();

router.get("/", getAllBonsais);
router.delete("/:id", deleteBonsai);
router.post("/", validateBonsai, handleValidationResults, createBonsai);
router.put("/:id", validateBonsai, handleValidationResults, updateBonsai);
router.get("/:id", getOneBonsai);
export default router