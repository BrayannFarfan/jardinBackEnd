import { DataTypes } from 'sequelize';
import { sequelize } from '../dataBase/config.js';

export const Citas = sequelize.define('Citas',{
    nombre:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    }
},{
    timestamps: false
})