import { DataTypes } from 'sequelize';
import { sequelize } from '../dataBase/config.js';

export const Newslatter = sequelize.define('Newslatter',{
    nombre:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    }
},{
    timestamps: false
})