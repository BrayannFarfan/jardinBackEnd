import { DataTypes } from "sequelize";
import { sequelize } from "../dataBase/config.js";

export const Usuario = sequelize.define('Usuario', {
    nombre:{
        type : DataTypes.STRING
    },
    apellido:{
        type : DataTypes.STRING
    },
    email:{
        type : DataTypes.STRING
    },
    password:{
        type : DataTypes.STRING
    }
})