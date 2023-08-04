import { DataTypes } from 'sequelize';
import { sequelize } from '../dataBase/config.js';

export const Contacto = sequelize.define('Contacto',{
    nombre:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    asunto:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
})