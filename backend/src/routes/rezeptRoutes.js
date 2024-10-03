import express from "express";
import {
  getRezept,
  getRezeptById,
  deleteRezept,
  createRezept,
  updateRezept,
} from "../controllers/RezeptControlls.js";
const router = express.Router();
router.get("/", getRezept);
router.post("/", createRezept);
router.get("/:id", getRezeptById);
router.delete("/:id", deleteRezept);
router.patch("/:id", updateRezept);
export default router;
