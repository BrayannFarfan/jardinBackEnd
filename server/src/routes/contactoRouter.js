import { Router } from "express";
import { createOneContacto } from '../controllers/contactoController.js'
export const contactosRouter = Router();

contactosRouter.post('/',createOneContacto);