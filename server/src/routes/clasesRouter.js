import { Router } from "express";
import { createOneClases,deleteClases,getAllClases,getOneClases,updateOneClases } from '../controllers/clasesController.js';
export const clasesRouter = Router();
import { AuthSession } from '../middleware/authMiddleware.js'

clasesRouter.get('/', AuthSession ,getAllClases);
clasesRouter.get('/:id', AuthSession ,getOneClases);
clasesRouter.post('/', AuthSession ,createOneClases);
clasesRouter.put('/:id', AuthSession ,updateOneClases);
clasesRouter.delete('/:id', AuthSession ,deleteClases);