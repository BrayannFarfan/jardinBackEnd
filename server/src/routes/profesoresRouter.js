import { Router } from "express";
import { createOneProfesores,deleteProfesores,getAllProfesores,getOneProfesores,updateOneProfesores } from '../controllers/profesoresController.js'
export const profesoresRouter = Router();
import { AuthSession } from '../middleware/authMiddleware.js'

profesoresRouter.get('/',AuthSession,getAllProfesores);
profesoresRouter.get('/:id',AuthSession,getOneProfesores);
profesoresRouter.post('/',AuthSession,createOneProfesores);
profesoresRouter.put('/:id',AuthSession,updateOneProfesores);
profesoresRouter.delete('/:id',AuthSession,deleteProfesores);