import express  from "express";
import './app.js';
import './models/index.js';
import { citasRouter } from './routes/citasRouter.js';
import { clasesRouter } from './routes/clasesRouter.js';
import { contactosRouter } from './routes/contactoRouter.js';
import { newslattersRouter } from './routes/newslatterRouter.js';
import { profesoresRouter } from './routes/profesoresRouter.js';


const PORT = process.env.PORT || 3000;
const app = express();





app.use(express.json())
app.use('/api/citas', citasRouter);
app.use('/api/clases', clasesRouter);
app.use('/api/contactos', contactosRouter);
app.use('/api/newslatters', newslattersRouter);
app.use('/api/profesores', profesoresRouter);


app.listen(PORT, ()=>{
    console.log(`trabajando en el puerto ${PORT}`);
});
