import { Router } from "express";
import { getAllCitas,updateOneCita,createOneCita,deleteCita,getOneCitas } from '../controllers/citasController.js'
export const citasRouter = Router();
import { AuthSession } from '../middleware/authMiddleware.js';


/**
 * @swagger
 * /api/citas:
 *   get:
 *     summary: Obtener todos las Citas
 *     tags:
 *       - Citas
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *   post:
 *     summary: Podes crear una cita y seleccionar una clase 
 *     description: Podes solicitar una cita y seleccionar una clase 
 *     tags:
 *        - Citas
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
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT generado al iniciar sesión
 */

/**
 * @swagger
 * /api/citas/{id}:
 *   get:
 *     summary: Obtener datos de una cita
 *     tags:
 *       - Citas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la cita
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *   patch:
 *     summary: Actualizar una citas
 *     tags:
 *       - Citas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la cita
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Actualizado exitosamente
 *   delete:
 *     summary: Eliminar un profesor
 *     tags:
 *       - Citas
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

citasRouter.get('/', AuthSession ,getAllCitas);
citasRouter.get('/:id', AuthSession ,getOneCitas);
citasRouter.post('/', AuthSession ,createOneCita);
citasRouter.patch('/:id', AuthSession ,updateOneCita);
citasRouter.delete('/:id', AuthSession ,deleteCita);