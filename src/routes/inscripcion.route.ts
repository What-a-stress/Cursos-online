import express, { Router } from 'express';
import {
    listarInscripciones,
    obtenerInscripcion,
    insertarInscripcion,
    modificarInscripcion,
    eliminarInscripcion
} from '../controllers/inscripcion.controller';

const router: Router = express.Router();

router.get('/', listarInscripciones);
router.get('/:id', obtenerInscripcion);
router.post('/', insertarInscripcion);
router.put('/:id', modificarInscripcion);
router.delete('/:id', eliminarInscripcion);

export default router;
