import { Router } from "express";
import { createOneProfesores,deleteProfesores,getAllProfesores,getOneProfesores,updateOneProfesores } from '../controllers/profesoresController.js'
export const profesoresRouter = Router();

profesoresRouter.get('/',getAllProfesores);
profesoresRouter.get('/:id',getOneProfesores);
profesoresRouter.post('/',createOneProfesores);
profesoresRouter.put('/:id',updateOneProfesores);
profesoresRouter.delete('/:id',deleteProfesores);