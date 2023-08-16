import { Router } from "express";
import { deleteSubscribe, subscribe } from '../controllers/newslatterController.js';
export const newslattersRouter = Router();

/**
 * @swagger
 * /api/newslatters:
 *   post:
 *     summary: Escribite a nuestro newsllater  
 *     description: Escribite a nuestro newsllater
 *     tags:
 *        - Newslatter
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
 * /api/newslatters:
 *   delete:
 *     summary: Eliminar una suscripcion
 *     tags:
 *       - Newslatter
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: direccion de email a eliminar
 *     responses:
 *       '204':
 *         description: Sin contenido
 */
newslattersRouter.post('/', subscribe);
newslattersRouter.delete('/',deleteSubscribe);