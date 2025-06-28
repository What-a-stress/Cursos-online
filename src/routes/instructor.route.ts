import express, { Router } from "express";
import {
    eliminarInstructor,
    insertarInstructor,
    listarInstructores,
    modificarInstructor,
    obtenerInstructor
} from "../controllers/instructores.controller";

const router: Router = express.Router();

router.get('/', listarInstructores);
router.get('/:id', obtenerInstructor);
router.post('/', insertarInstructor);
router.put('/:id', modificarInstructor);
router.delete('/:id', eliminarInstructor);

export default router;