import { Router } from "express";
import { getOneUser } from '../controllers/loginController.js'

export const LoginRouter = Router();




/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Iniciar sesión y obtener token JWT
 *     description: Iniciar sesión con correo electrónico y contraseña para obtener un token JWT
 *     tags:
 *        - Login
 *     security:
 *          - bearerAuth: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT generado al iniciar sesión
 */

LoginRouter.post('/', getOneUser)