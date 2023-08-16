import { Router } from "express";
import { createOneClases,deleteClases,getAllClases,getOneClases,updateOneClases } from '../controllers/clasesController.js';
export const clasesRouter = Router();
import { AuthSession } from '../middleware/authMiddleware.js'


/**
 * @swagger
 * /api/clases:
 *   get:
 *     summary: Obtener todos las Clases
 *     tags:
 *       - Clases
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *   post:
 *     summary: Crear una clase  
 *     description: Crear una clase 
 *     tags:
 *        - Clases
 *     security:
 *          - BearerAuth: []
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
 *               edad:
 *                 type: string
 *               totalSesiones:
 *                 type: string
 *               tiempo:
 *                 type: string
 *               aranceles:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT generado al iniciar sesión
 */

/**
 * @swagger
 * /api/clases/{id}:
 *   get:
 *     summary: Obtener datos de una clase
 *     tags:
 *       - Clases
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la clase
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *   patch:
 *     summary: Actualizar una clases
 *     tags:
 *       - Clases
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la clases
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
 *               edad:
 *                 type: string
 *               totalSesiones:
 *                 type: string
 *               tiempo:
 *                 type: string
 *               aranceles:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Actualizado exitosamente
 *   delete:
 *     summary: Eliminar una clase
 *     tags:
 *       - Clases
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la cita
 *     responses:
 *       '204':
 *         description: Sin contenido
 */
clasesRouter.get('/', AuthSession ,getAllClases);
clasesRouter.get('/:id', AuthSession ,getOneClases);
clasesRouter.post('/', AuthSession ,createOneClases);
clasesRouter.patch('/:id', AuthSession ,updateOneClases);
clasesRouter.delete('/:id', AuthSession ,deleteClases);