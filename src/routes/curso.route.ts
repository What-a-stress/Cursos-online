import express, { Router } from "express";
import {
    eliminarCurso,
    insertarCurso,
    listarCursos,
    modificarCurso,
    obtenerCurso
} from "../controllers/cursos.controller";

const router: Router = express.Router();

router.get('/', listarCursos);
router.get('/:id', obtenerCurso);
router.post('/', insertarCurso);
router.put('/:id', modificarCurso);
router.delete('/:id', eliminarCurso);

export default router;