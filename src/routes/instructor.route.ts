import express, { Router } from "express";
import {
    eliminarInstructor,
    insertarInstructor,
    listarInstructores,
    modificarInstructor,
    obtenerInstructor
} from "../controllers/instructores.controller";

/**
 * @swagger
 * tags:
 *   - name: Instructores
 *     description: API para gestionar instructores
 */

const router: Router = express.Router();

router.get('/', listarInstructores);

/**
 * @swagger
 * /api/v1/instructores:
 *   get:
 *     summary: Listar instructores
 *     tags: [Instructores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de instructores
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */

router.get('/:id', obtenerInstructor);

/**
 * @swagger
 * /api/v1/instructores/{id}:
 *   get:
 *     summary: Obtener instructor por ID
 *     tags: [Instructores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del instructor
 *     responses:
 *       200:
 *         description: Datos del instructor
 *       404:
 *         description: Instructor no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.post('/', insertarInstructor);

/**
 * @swagger
 * /api/v1/instructores:
 *   post:
 *     summary: Crear un nuevo instructor
 *     tags: [Instructores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario_id:
 *                 type: integer
 *               biografia:
 *                 type: string
 *               foto_url:
 *                 type: string
 *               especialidad:
 *                 type: string
 *               rating:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Instructor creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */

router.put('/:id', modificarInstructor);

/**
 * @swagger
 * /api/v1/instructores/{id}:
 *   put:
 *     summary: Modificar instructor
 *     tags: [Instructores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del instructor a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               biografia:
 *                 type: string
 *               foto_url:
 *                 type: string
 *               especialidad:
 *                 type: string
 *               rating:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Instructor modificado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Instructor no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.delete('/:id', eliminarInstructor);

/**
 * @swagger
 * /api/v1/instructores/{id}:
 *   delete:
 *     summary: Eliminar instructor
 *     tags: [Instructores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del instructor a eliminar
 *     responses:
 *       200:
 *         description: Instructor eliminado correctamente
 *       404:
 *         description: Instructor no encontrado
 *       500:
 *         description: Error interno del servidor
 */

export default router;