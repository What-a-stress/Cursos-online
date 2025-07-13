import express, { Router } from 'express';
import {
    listarInscripciones,
    obtenerInscripcion,
    insertarInscripcion,
    modificarInscripcion,
    eliminarInscripcion
} from '../controllers/inscripcion.controller';
import { authMiddleware } from '../auth/auth.middleware';



/**
 * @swagger
 * tags:
 *   - name: Inscripciones
 *     description: API para gestionar inscripciones a cursos
 */

const router: Router = express.Router();

router.get('/', authMiddleware,listarInscripciones);

/**
 * @swagger
 * /api/v1/inscripciones:
 *   get:
 *     summary: Listar todas las inscripciones
 *     tags: [Inscripciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de inscripciones
 *       500:
 *         description: Error interno del servidor
 */

router.get('/:id', authMiddleware,obtenerInscripcion);

/**
 * @swagger
 * /api/v1/inscripciones/{id}:
 *   get:
 *     summary: Obtener inscripción por ID
 *     tags: [Inscripciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la inscripción
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inscripción obtenida correctamente
 *       404:
 *         description: Inscripción no encontrada
 *       500:
 *         description: Error interno del servidor
 */

router.post('/',authMiddleware, insertarInscripcion);

/**
 * @swagger
 * /api/v1/inscripciones:
 *   post:
 *     summary: Crear una nueva inscripción
 *     tags: [Inscripciones]
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
 *               curso_id:
 *                 type: integer
 *               progreso:
 *                 type: integer
 *               completado:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Inscripción creada exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */

router.put('/:id',authMiddleware, modificarInscripcion);

/**
 * @swagger
 * /api/v1/inscripciones/{id}:
 *   put:
 *     summary: Modificar una inscripción existente
 *     tags: [Inscripciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la inscripción a modificar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario_id:
 *                 type: integer
 *               curso_id:
 *                 type: integer
 *               progreso:
 *                 type: integer
 *               completado:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Inscripción modificada exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Inscripción no encontrada
 *       500:
 *         description: Error interno del servidor
 */

router.delete('/:id',authMiddleware, eliminarInscripcion);

/**
 * @swagger
 * /api/v1/inscripciones/{id}:
 *   delete:
 *     summary: Eliminar una inscripción
 *     tags: [Inscripciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la inscripción a eliminar
 *     responses:
 *       200:
 *         description: Inscripción eliminada correctamente
 *       404:
 *         description: Inscripción no encontrada
 *       500:
 *         description: Error interno del servidor
 */

export default router;
