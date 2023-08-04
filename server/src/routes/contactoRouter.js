import { Router } from "express";
import { createOneContacto,deleteContacto,getAllContacto,getOneContacto,updateOneContacto } from '../controllers/contactoController.js'
export const contactosRouter = Router();

contactosRouter.get('/',getAllContacto);
contactosRouter.get('/:id',getOneContacto);
contactosRouter.post('/',createOneContacto);
contactosRouter.put('/:id',updateOneContacto);
contactosRouter.delete('/:id',deleteContacto);