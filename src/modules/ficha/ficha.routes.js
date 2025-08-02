import express from 'express';
import {
    getAllFichas,
    getFichaById,
    createFicha,
    updateFicha,
    deleteFicha,
} from './ficha.controller.js';

const router = express.Router();

// Rutas para Fichas
router.get('/listartodos', getAllFichas);
router.get('/listarporid/:numeroFicha', getFichaById);
router.post('/crear', createFicha);
router.put('/actualizar/:numeroFicha', updateFicha);
router.delete('/borrar/:numeroFicha', deleteFicha);

export default router;