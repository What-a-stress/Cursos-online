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

/**
*@swagger
* tags:
*  - name: Categorias
*    description: API para gestionar categorías
*/

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


router.get('/:id', obtenerCategoria); 

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

router.post('/', insertarCategoria); 

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


router.put('/:id', modificarCategoria);

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

router.delete('/:id', eliminarCategoria);

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

export default router;