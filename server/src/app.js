import { sequelize }  from "./dataBase/config.js";

try{
    await sequelize.authenticate();
    console.log('connecion establecida');
}catch (err){
    console.log({error: `${err.message}`});
}