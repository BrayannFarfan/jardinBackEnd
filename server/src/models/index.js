import { Citas } from './Citas.js';
import { Clases } from './Clases.js';
import { Contacto } from './Contacto.js';
import { Newslatter } from './Newslatter.js';
import { Profesor } from './Profesores.js';
import { Usuario } from './Usuario.js';



// Citas.belongsToMany(Clases,{through:'CitasClases'});
// Clases.belongsToMany(Citas,{through:'CitasClases'});

Clases.hasMany(Citas)
Citas.belongsTo(Clases,{foreignKey: 'clasesId'});

await Clases.sync();
await Citas.sync();
await Contacto.sync();
await Newslatter.sync();
await Profesor.sync();
await Usuario.sync();