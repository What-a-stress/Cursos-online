import express, { Router } from 'express';
import { 
    eliminarModulo, 
    insertarModulo, 
    listarModulos, 
    modificarModulo,
    obtenerModulo } from '../controllers/modulos.controller';

/**
 * @swagger
 * tags:
 *   - name: Modulos
 *     description: API para gestionar los módulos de los cursos
 */

const router: Router = express.Router();

router.get('/', listarModulos);         

/**
 * @swagger
 * /api/v1/modulos:
 *   get:
 *     summary: Listar módulos
 *     tags: [Modulos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de módulos
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */

router.get('/:id', obtenerModulo);    

/**
 * @swagger
 * /api/v1/modulos/{id}:
 *   get:
 *     summary: Obtener módulo por ID
 *     tags: [Modulos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del módulo
 *     responses:
 *       200:
 *         description: Datos del módulo
 *       404:
 *         description: Módulo no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.post('/', insertarModulo);    

/**
 * @swagger
 * /api/v1/modulos:
 *   post:
 *     summary: Crear un nuevo módulo
 *     tags: [Modulos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               curso_id:
 *                 type: integer
 *               titulo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               orden:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Módulo creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */

router.put('/:id', modificarModulo);    

/**
 * @swagger
 * /api/v1/modulos/{id}:
 *   put:
 *     summary: Modificar módulo
 *     tags: [Modulos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del módulo a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               orden:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Módulo modificado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Módulo no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.delete('/:id', eliminarModulo);   

/**
 * @swagger
 * /api/v1/modulos/{id}:
 *   delete:
 *     summary: Eliminar módulo
 *     tags: [Modulos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del módulo a eliminar
 *     responses:
 *       200:
 *         description: Módulo eliminado correctamente
 *       404:
 *         description: Módulo no encontrado
 *       500:
 *         description: Error interno del servidor
 */

export default router;
