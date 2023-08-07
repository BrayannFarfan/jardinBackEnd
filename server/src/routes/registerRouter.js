import { Router } from "express";
import { createUsuario } from '../controllers/registerController.js';
export const RegistroRouter = Router();


RegistroRouter.post('/',createUsuario )
