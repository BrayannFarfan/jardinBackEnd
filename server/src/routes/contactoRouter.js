import { Router } from "express";
import { createOneContacto } from '../controllers/contactoController.js'
export const contactosRouter = Router();
import { AuthSession } from '../middleware/authMiddleware.js'

contactosRouter.post('/',AuthSession,createOneContacto);