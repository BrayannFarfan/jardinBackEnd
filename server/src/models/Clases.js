import { DataTypes } from 'sequelize';
import { sequelize } from '../dataBase/config.js';
// import { Citas } from './Citas.js';

export const Clases = sequelize.define('Clases',{
    titulo:{
        type: DataTypes.STRING,
    },
    descripcion:{
        type: DataTypes.STRING,
    },
    edad:{
        type: DataTypes.INTEGER
    },
    totalSesiones:{
        type:DataTypes.INTEGER
    },
    tiempo:{
        type: DataTypes.STRING
    },
    aranceles:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
})


// Citas.belongsToMany(Clases,{through:'CitasClases'});
// Clases.belongsToMany(Citas,{through:'CitasClases'});


// await sequelize.sync();