import { Router } from "express";
import { createOneProfesores,deleteProfesores,getAllProfesores,getOneProfesores,updateOneProfesores } from '../controllers/profesoresController.js'
export const profesoresRouter = Router();
import { AuthSession } from '../middleware/authMiddleware.js'
import { upload } from "../middleware/multerMiddleware.js";


/**
 * @swagger
 * /api/profesores:
 *   get:
 *     summary: Obtener todos los profesores
 *     tags:
 *       - Profesores
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *   post:
 *     summary: Crea a profesores para agregarlos a tu lista  
 *     description: Crea a profesores para agregarlos a tu lista
 *     tags:
 *        - Profesores
 *     security:
 *          - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               asignatura:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT generado al iniciar sesión
 */

/**
 * @swagger
 * /api/profesores/{id}:
 *   get:
 *     summary: Obtener datos de un profesor
 *     tags:
 *       - Profesores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del profesor
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *   patch:
 *     summary: Actualizar un profesor
 *     tags:
 *       - Profesores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del profesor
 *     responses:
 *       '200':
 *         description: Actualizado exitosamente
 *   delete:
 *     summary: Eliminar un profesor
 *     tags:
 *       - Profesores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del profesor
 *     responses:
 *       '204':
 *         description: Sin contenido
 */

profesoresRouter.get('/',AuthSession,getAllProfesores);
profesoresRouter.get('/:id',AuthSession,getOneProfesores);
profesoresRouter.post('/', upload.single('file'),createOneProfesores);
profesoresRouter.patch('/:id',AuthSession,updateOneProfesores);
profesoresRouter.delete('/:id',AuthSession,deleteProfesores);