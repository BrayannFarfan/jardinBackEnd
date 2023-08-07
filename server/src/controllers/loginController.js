import { Usuario } from '../models/Usuario.js';
import md5 from 'md5';
import jwt from 'jsonwebtoken';

export const getOneUser = async (req , res) =>{
    const { email , password } = req.body; 

    try {
        const getOneUser = await Usuario.findOne({
            where:{
                email
            }})
            if(!getOneUser){
                return res.status(500).json({message:'El usuario no existe'})
            } 

            const comparePass = md5(password); 

            if(comparePass !== getOneUser.password){
                return res.status(401).json({message:'Las credenciales son incorrectas'})
            }

            const token = jwt.sign({user: getOneUser.id}, 'secreto', {expiresIn: '1h'});
            return res.status(200).json({data: token});
    }catch (error) {
       return res.status(500).json({error: error.message})
    }
}