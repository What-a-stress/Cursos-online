import express, { Router } from "express";
import {
    eliminarCurso,
    insertarCurso,
    listarCursos,
    modificarCurso,
    obtenerCurso
} from "../controllers/cursos.controller";
import { authMiddleware } from '../auth/auth.middleware';

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Cursos
 *     description: API para gestionar cursos
 */

router.get('/', authMiddleware, listarCursos);

/**
 * @swagger
 * /api/v1/cursos:
 *   get:
 *     summary: Listar cursos
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de cursos
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */

router.get('/:id', authMiddleware, obtenerCurso);

/**
 * @swagger
 * /api/v1/cursos/{id}:
 *   get:
 *     summary: Obtener curso por ID
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del curso
 *     responses:
 *       200:
 *         description: Detalles del curso
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.post('/', authMiddleware, insertarCurso);

/**
 * @swagger
 * /api/v1/cursos:
 *   post:
 *     summary: Crear un nuevo curso
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CursoCrear'
 *     responses:
 *       201:
 *         description: Curso creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */

router.put('/:id', authMiddleware, modificarCurso);

/**
 * @swagger
 * /api/v1/cursos/{id}:
 *   put:
 *     summary: Modificar un curso existente
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del curso a modificar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CursoEditar'
 *     responses:
 *       200:
 *         description: Curso actualizado correctamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */

router.delete('/:id', authMiddleware, eliminarCurso);

/**
 * @swagger
 * /api/v1/cursos/{id}:
 *   delete:
 *     summary: Eliminar un curso
 *     tags: [Cursos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del curso a eliminar
 *     responses:
 *       200:
 *         description: Curso eliminado correctamente
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error interno del servidor
 */

export default router;
