import { Router } from "express";
import { getAllCitas,updateOneCita,createOneCita,deleteCita,getOneCitas } from '../controllers/citasController.js'
export const citasRouter = Router();


citasRouter.get('/',getAllCitas);
citasRouter.get('/:id',getOneCitas);
citasRouter.post('/',createOneCita);
citasRouter.put('/:id',updateOneCita);
citasRouter.delete('/:id',deleteCita);