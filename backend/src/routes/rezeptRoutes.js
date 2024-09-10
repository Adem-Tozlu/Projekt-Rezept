import express from 'express';
import { getRezept, getRezeptById,deleteRezept,createRezept } from '../controllers/RezeptControlls.js';

const router = express.Router();

router.get('/', getRezept);
router.post('/', createRezept);
router.get('/:id', getRezeptById);
router.delete('/:id', deleteRezept);

export default router;