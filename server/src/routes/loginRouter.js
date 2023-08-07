import { Router } from "express";
import { getOneUser } from '../controllers/loginController.js'

export const LoginRouter = Router();

LoginRouter.post('/', getOneUser)