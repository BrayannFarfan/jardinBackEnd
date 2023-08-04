import { Citas } from "../models/Citas.js"
import { Clases } from "../models/Clases.js"

export const getAllClases = async (req, res) =>{
    const { page, pageSize } = req.query;

    const limit = parseInt(pageSize) || 5;
    const offset = (parseInt(page) -1 ) * limit || 0;
    try {
        const getAllClases =  await Clases.findAll({
            limit,
            offset
        })
        res.status(200).json({getAllClases})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
export const getOneClases = async (req, res) =>{
    res.json({data:'soy una las clases'})
}
export const createOneClases = async (req, res) =>{
    const { titulo,descripcion,edad,totalSesiones,tiempo,aranceles } = req.body;

    try {
        const createOneClases = await Clases.create({
            titulo,
            descripcion,
            edad,
            totalSesiones,
            tiempo,
            aranceles
        })
        res.status(200).json({data:createOneClases});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
export const updateOneClases = async (req, res) =>{
    res.json({data:'soy la actualziacion de clases'})
}
export const deleteClases = async (req, res) =>{
    res.json({data:'soy el delete clases'})
}