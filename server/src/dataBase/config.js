import { Sequelize } from "sequelize";

export const sequelize = new Sequelize ('jardin-de-niños','root','',{
    host:'localhost',
    dialect:'mysql'
})