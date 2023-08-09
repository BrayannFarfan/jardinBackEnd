import { Clases } from "../models/Clases.js";

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
    const { id } = req.params;
    try {
        const getOneClases = await Clases.findByPk(id);
        return res.status(200).json({data: getOneClases})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
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
    const { id } = req.params;

    try {
        const updateOneClases = await Clases.findByPk(id);
        updateOneClases.set(req.body);
        updateOneClases.save();
        return res.status(200).json({data:updateOneClases})
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}
export const deleteClases = async (req, res) =>{
    const { id } = req.params;
    try {
        const deleteClases = await Clases.destroy({
            where:{
                id
            }
        })
        return res.status(200).json({data: deleteClases})
    } catch (error) {
        return res.status(500).json({error: error.message}); 
    }
}