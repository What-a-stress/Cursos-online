import  express, { Router } from 'express';
import { listarCategorias } from '../controllers/categoria.controller'; // ✅ correcto



const router: Router = express.Router();

router.get('/', listarCategorias); // categorias

// router.get('/:id', obtenerTipoDocumento); // tipo-documentos/:id

// router.post('/', insertarTipoDocumento);

// router.put('/:id', modificarTipoDocumento);

// router.delete('/:id', eliminarTipoDocumento);

export default router;