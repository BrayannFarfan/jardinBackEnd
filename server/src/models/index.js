import { Citas } from './Citas.js';
import { Clases } from './Clases.js';
import { Contacto } from './Contacto.js';
import { Newslatter } from './Newslatter.js';
import { Profesor } from './Profesores.js';
import { Usuario } from './Usuario.js';


Clases.hasMany(Citas)
Citas.belongsTo(Clases);

await Clases.sync();
await Citas.sync();
await Contacto.sync();
await Newslatter.sync();
await Profesor.sync();
await Usuario.sync();