import { Router } from "express";
import { createOneContacto } from '../controllers/contactoController.js'
export const contactosRouter = Router();
import { AuthSession } from '../middleware/authMiddleware.js'


/**
 * @swagger
 * /api/contacto:
 *   post:
 *     summary: Manda tu mensaje para mas informacion  
 *     description: Manda tu mensaje para mas informacion
 *     tags:
 *        - Contacto
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
 *               asunto:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT generado al iniciar sesión
 */
contactosRouter.post('/',AuthSession,createOneContacto);