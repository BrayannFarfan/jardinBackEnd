import { Sequelize } from "sequelize";

export const sequelize = new Sequelize ('jardin','root','',{
    host:'localhost',
    dialect:'mysql'
})