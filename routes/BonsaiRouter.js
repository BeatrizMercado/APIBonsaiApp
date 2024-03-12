import express from "express";
import { getAllBonsais } from "../controllers/BonsaiController.js";
import { deleteBonsai } from "../controllers/BonsaiController.js";
import { createBonsai } from "../controllers/BonsaiController.js";
import { updateBonsai } from "../controllers/BonsaiController.js";
import { getByIdBonsai } from "../controllers/BonsaiController.js";
import { validateCreate } from "../validator/validatorBonsai.js";



const router = express.Router();

router.get("/", getAllBonsais);
router.delete("/:id", deleteBonsai);
router.post("/",validateCreate, createBonsai);
router.put("/:id", validateCreate,updateBonsai);
router.get("/:id", getByIdBonsai);
export default router