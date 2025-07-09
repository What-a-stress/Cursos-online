import  express, { Router } from 'express';
import { 
    listarCategorias,
    obtenerCategoria,
    insertarCategoria, 
    modificarCategoria,
    eliminarCategoria
} from '../controllers/categorias.controller';




const router: Router = express.Router();

router.get('/', listarCategorias); 

router.get('/:id', obtenerCategoria); 

router.post('/', insertarCategoria); 

router.put('/:id', modificarCategoria);

router.delete('/:id', eliminarCategoria);

export default router;