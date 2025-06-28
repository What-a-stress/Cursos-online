import express, { Router } from "express";
import {
    eliminarUsuario,
    insertarUsuario,
    listarUsuarios,
    modificarUsuario,
    obtenerUsuario
} from "../controllers/usuarios.controller";

const router: Router = express.Router();

router.get('/', listarUsuarios);
router.get('/:id', obtenerUsuario);
router.post('/', insertarUsuario);
router.put('/:id', modificarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;
