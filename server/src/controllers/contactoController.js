import { Contacto } from "../models/Contacto.js"

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