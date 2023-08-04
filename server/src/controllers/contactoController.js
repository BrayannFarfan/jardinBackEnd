import { Contacto } from "../models/Contacto.js"


export const getAllContacto = async (req, res) =>{
    res.json({data:'soy todas las Contacto'})
}
export const getOneContacto = async (req, res) =>{
    res.json({data:'soy una las Contacto'})
}
export const createOneContacto = async (req, res) =>{
    const { nombre, email, asunto, descripcion } = req.body;

    try {
        const createOneContacto = await Contacto.create({
            nombre,
            email,
            asunto,
            descripcion
        });
        res.status(200).json({data: createOneContacto});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
export const updateOneContacto = async (req, res) =>{
    res.json({data:'soy la actualziacion de Contacto'})
}
export const deleteContacto = async (req, res) =>{
    res.json({data:'soy el delete Contacto'})
}