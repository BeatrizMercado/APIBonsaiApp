import express from "express";
import { getAllBonsais } from "../controllers/BonsaiController.js";

const router = express.Router();

router.get("/", getAllBonsais);

export default router