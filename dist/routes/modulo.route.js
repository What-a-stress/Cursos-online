"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const modulos_controller_1 = require("../controllers/modulos.controller");
const auth_middleware_1 = require("../auth/auth.middleware");
/**
 * @swagger
 * tags:
 *   - name: Modulos
 *     description: API para gestionar los módulos de los cursos
 */
const router = express_1.default.Router();
router.get('/', auth_middleware_1.authMiddleware, modulos_controller_1.listarModulos);
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
router.get('/:id', auth_middleware_1.authMiddleware, modulos_controller_1.obtenerModulo);
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
router.post('/', auth_middleware_1.authMiddleware, modulos_controller_1.insertarModulo);
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
router.put('/:id', auth_middleware_1.authMiddleware, modulos_controller_1.modificarModulo);
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
 *               curso_id:
 *                 type: integer
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
router.delete('/:id', auth_middleware_1.authMiddleware, modulos_controller_1.eliminarModulo);
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
exports.default = router;
