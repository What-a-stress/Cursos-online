import express, { Router } from 'express';
import { 
    eliminarModulo, 
    insertarModulo, 
    listarModulos, 
    modificarModulo,
    obtenerModulo } from '../controllers/modulos.controller';


const router: Router = express.Router();

router.get('/', listarModulos);         
router.get('/:id', obtenerModulo);       
router.post('/', insertarModulo);        
router.put('/:id', modificarModulo);    
router.delete('/:id', eliminarModulo);   

export default router;
