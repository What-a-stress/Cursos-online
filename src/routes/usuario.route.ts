import  express, { Router } from 'express';
import { 
    listarCategorias,
    obtenerCategoria,
    insertarCategoria, 
    modificarCategoria,
    eliminarCategoria,
    

} from '../controllers/categorias.controller';

import { authMiddleware } from '../auth/auth.middleware';
import { loginUsuario } from '../controllers/usuarios.controller';


const router: Router = express.Router();

/**
*@swagger
* tags:
*  - name: Categorias
*    description: API para gestionar categorías
*/

router.get('/', authMiddleware, listarCategorias); 

/**
*@swagger
* /api/v1/categorias:
*  get:
*    summary: Listar Categorías
*    tags: [Categorias]
*    security:
*     - bearerAuth: []
*    responses:
*      200:
*        description: Lista de categorías
*      401:
*        description: No autorizado
*      500:
*        description: Error interno del servidor
*  
*/


router.get('/:id', authMiddleware, obtenerCategoria); 

/** 
 * @swagger
* /api/v1/categorias/{id}:
*  get:
*    summary: Obtener Categoría por ID
*    tags: [Categorias]
*    security:
*     - bearerAuth: []
*    parameters:
*     - in: path
*       name: id
*       required: true
*       description: ID de la categoría
*       schema:
*         type: string
*    responses:
*      200:
*        description: Detalles de la categoría
*      401:
*        description: No autorizado
*      500:
*        description: Error interno del servidor
*/

router.post('/', authMiddleware, insertarCategoria); 

/** 
 * @swagger
* /api/v1/categorias:
*  post:
*    summary: Crear una nueva categoría
*    tags: [Categorias]
*    security:
*     - bearerAuth: []
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            type: object
*            properties:
*              nombre:
*                type: string
*              descripcion:
*                type: string
*    responses:
*      201:
*        description: Categoría creada exitosamente
*      400:
*        description: Solicitud incorrecta
*      401:
*        description: No autorizado
*      500:
*        description: Error interno del servidor
*/


router.put('/:id', authMiddleware, modificarCategoria);

/**
 * @swagger
 * /api/v1/categorias/{id}:
 *   put:
 *     summary: Modificar una categoría existente
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría a modificar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría modificada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error interno del servidor
 */

router.delete('/:id',authMiddleware, eliminarCategoria);

/**
 * @swagger
 * /api/v1/categorias/{id}:
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría a eliminar
 *     responses:
 *       200:
 *         description: Categoría eliminada correctamente
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error interno del servidor
 */

router.post('/login', loginUsuario);

/**
 * @swagger
 * /api/v1/usuarios/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales incorrectas
 *       500:
 *         description: Error interno del servidor
 */



export default router;

