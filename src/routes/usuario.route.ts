import { Router } from 'express';
import {
  listarUsuarios,
  obtenerUsuario,
  insertarUsuario,
  modificarUsuario,
  eliminarUsuario,
  loginUsuario
} from '../controllers/usuarios.controller';

const router: Router = Router();

router.get('/', listarUsuarios);
router.get('/:id', obtenerUsuario);
router.post('/', insertarUsuario);
router.put('/:id', modificarUsuario);
router.delete('/:id', eliminarUsuario);


router.post('/login', loginUsuario); 


export default router;
