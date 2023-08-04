import { Router } from "express";
import { createOneClases,deleteClases,getAllClases,getOneClases,updateOneClases } from '../controllers/clasesController.js';
export const clasesRouter = Router();

clasesRouter.get('/',getAllClases);
clasesRouter.get('/:id',getOneClases);
clasesRouter.post('/',createOneClases);
clasesRouter.put('/:id',updateOneClases);
clasesRouter.delete('/:id',deleteClases);