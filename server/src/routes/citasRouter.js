import { Router } from "express";
import { getAllCitas,updateOneCita,createOneCita,deleteCita,getOneCitas } from '../controllers/citasController.js'
export const citasRouter = Router();
import { AuthSession } from '../middleware/authMiddleware.js';


citasRouter.get('/', AuthSession ,getAllCitas);
citasRouter.get('/:id', AuthSession ,getOneCitas);
citasRouter.post('/', AuthSession ,createOneCita);
citasRouter.put('/:id', AuthSession ,updateOneCita);
citasRouter.delete('/:id', AuthSession ,deleteCita);