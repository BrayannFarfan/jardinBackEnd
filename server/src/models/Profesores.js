import { DataTypes } from 'sequelize';
import { sequelize } from '../dataBase/config.js';

export const Profesor = sequelize.define('Profesores',{
    nombre:{
        type: DataTypes.STRING,
    },
    asignatura:{
        type: DataTypes.STRING,
    },
    foto:{
        type: DataTypes.BLOB
    }
},{
    timestamps: false
})