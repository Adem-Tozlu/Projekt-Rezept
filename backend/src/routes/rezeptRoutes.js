import express from 'express';
import { getRezept, getRezeptById,deleteRezept,createRezept,updateRezept, uploadMiddleware } from '../controllers/RezeptControlls.js';

const router = express.Router();

router.get('/', getRezept);
router.post('/',uploadMiddleware, createRezept);
router.get('/:id', getRezeptById);
router.delete('/:id', deleteRezept);
router.patch('/:id', uploadMiddleware,updateRezept);

export default router;