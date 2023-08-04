import { Router } from "express";
import { deleteSubscribe, subscribe } from '../controllers/newslatterController.js';
export const newslattersRouter = Router();

newslattersRouter.post('/subscribe', subscribe);
newslattersRouter.delete('/subscribe/:id',deleteSubscribe);