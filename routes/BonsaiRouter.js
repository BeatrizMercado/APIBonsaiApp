import express from "express";
import { getAllBonsais } from "../controllers/BonsaiController.js";
import { deleteBonsai } from "../controllers/BonsaiController.js";
import { createBonsai } from "../controllers/BonsaiController.js";
import { updateBonsai } from "../controllers/BonsaiController.js";
import { getByIdBonsai } from "../controllers/BonsaiController.js";
import { validateCreate } from "../validator/validatorBonsai.js";

import { getAllBonsais, deleteBonsai, createBonsai, updateBonsai, getBonsaiById } from "../controllers/BonsaiController.js";

import { validateBonsai } from "../validators/BonsaiValidation.js";
import { handleValidationResults } from "../helpers/validationHelper.js";


const router = express.Router();

router.get("/", getAllBonsais);
router.delete("/:id", deleteBonsai);
router.post("/",validateCreate, createBonsai);
router.put("/:id", validateCreate,updateBonsai);
router.get("/:id", getByIdBonsai);

export default router