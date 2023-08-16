import { Router } from "express";
import { createUsuario } from '../controllers/registerController.js';
export const RegistroRouter = Router();



/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registrarte para poder logearte
 *     description: Registrate
 *     tags:
 *        - Registro
 *     security:
 *          - bearerAuth: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Registro para poder iniciar sesion y obtener el token
 */
RegistroRouter.post('/',createUsuario )
