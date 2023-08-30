import { Usuario } from '../models/Usuario.js';
import md5 from 'md5';
import jwt from 'jsonwebtoken';
import BusinessError from '../middleware/BusinessError.js'

export const getOneUser = async (req , res) =>{
    const { email , password } = req.body; 

    try {
        if(email == "" && password == "")  throw new BusinessError('datos Obligatorios', 500)
        const getOneUser = await Usuario.findOne({
            where:{
                email
            }})
            if(!getOneUser){
                throw new BusinessError('el usuario no existe', 400)
            } 

            const comparePass = md5(password); 

            if(comparePass !== getOneUser.password){
                return res.status(402).json({message:'Las credenciales son incorrectas'})
            }

            const token = jwt.sign({user: getOneUser.id}, 'secreto', {expiresIn: '24h'});
            return res.status(200).json({data: getOneUser, token: token});
    }catch (error) {
            return res.status(500).json({error: error.message})
    }
}