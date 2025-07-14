"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const instructores_controller_1 = require("../controllers/instructores.controller");
const auth_middleware_1 = require("../auth/auth.middleware");
/**
 * @swagger
 * tags:
 *   - name: Instructores
 *     description: API para gestionar instructores
 */
const router = express_1.default.Router();
router.get('/', auth_middleware_1.authMiddleware, instructores_controller_1.listarInstructores);
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
router.get('/:id', auth_middleware_1.authMiddleware, instructores_controller_1.obtenerInstructor);
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
router.post('/', auth_middleware_1.authMiddleware, instructores_controller_1.insertarInstructor);
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
 *               nombre:
 *                type: string
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
router.put('/:id', auth_middleware_1.authMiddleware, instructores_controller_1.modificarInstructor);
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
 *               nombre:
 *                type: string
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
router.delete('/:id', auth_middleware_1.authMiddleware, instructores_controller_1.eliminarInstructor);
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
exports.default = router;
