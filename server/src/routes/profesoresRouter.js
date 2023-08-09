import { Router } from "express";
import { createOneProfesores,deleteProfesores,getAllProfesores,getOneProfesores,updateOneProfesores } from '../controllers/profesoresController.js'
export const profesoresRouter = Router();
import { AuthSession } from '../middleware/authMiddleware.js'
import { upload } from "../middleware/multerMiddleware.js";

profesoresRouter.get('/',AuthSession,getAllProfesores);
profesoresRouter.get('/:id',AuthSession,getOneProfesores);
profesoresRouter.post('/', upload.single('file'),createOneProfesores);
profesoresRouter.put('/:id',AuthSession,updateOneProfesores);
profesoresRouter.delete('/:id',AuthSession,deleteProfesores);