import express  from "express";
import './app.js';
import './models/index.js';
import path from 'path';
import { citasRouter } from './routes/citasRouter.js';
import { clasesRouter } from './routes/clasesRouter.js';
import { contactosRouter } from './routes/contactoRouter.js';
import { newslattersRouter } from './routes/newslatterRouter.js';
import { profesoresRouter } from './routes/profesoresRouter.js';
import { LoginRouter } from './routes/loginRouter.js';
import { RegistroRouter } from './routes/registerRouter.js';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/citas', citasRouter);
app.use('/api/clases', clasesRouter);
app.use('/api/contactos', contactosRouter);
app.use('/api/newslatters', newslattersRouter);
app.use('/api/profesores', profesoresRouter);
app.use('/api/login', LoginRouter);
app.use('/api/register', RegistroRouter);


app.listen(PORT, ()=>{
    console.log(`trabajando en el puerto ${PORT}`);
});
