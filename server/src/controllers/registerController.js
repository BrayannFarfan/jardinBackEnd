import md5 from 'md5';
import { Usuario } from '../models/Usuario.js';

export const createUsuario = async (req, res) =>{
    const { nombre, apellido, email, password } =  req.body;

    const newPass = md5(password);
    try {

        if(nombre == "" || apellido == "" || email=="" ||password=="")return res.status(400).json({message:'Los campos no pueden estar vacios'})
        
        const userExist = await Usuario.findOne({where: {email}})

        if(userExist){
           return res.status(500).json({message: 'El usuario ya existe'});
        }else{
            const createUsuario = await Usuario.create({
                nombre,
                apellido,
                email,
                password:newPass
            }) 
            return res.status(200).json({data:createUsuario})
        }


    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}