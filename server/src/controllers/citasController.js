import { Citas } from "../models/Citas.js";
import { Clases } from "../models/Clases.js";


export const getAllCitas = async (req, res) =>{
    try {
        const getAllCitas =  await Citas.findAll({
            include:{
                model: Clases,
                attributes:['id', 'titulo']
            }
        })
        res.status(200).json({getAllCitas})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
export const getOneCitas = async (req, res) =>{
    const { id } = req.params;
    try {
        const getOneCitas = await Citas.findByPk(id,{
            include:{
                model: Clases,
                attributes:['id', 'titulo']
            }
        });
        res.status(200).json({data:getOneCitas})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
export const createOneCita = async (req, res) =>{
    const { nombre, email, clasesId} = req.body;

try {
    const createOneCita = await Citas.create({
        nombre,
        email,
        clasesId
    })
    res.status(200).json({data: createOneCita})
} catch (error) {
    res.status(500).json({error: error.message})
}
}
export const updateOneCita = async (req, res) =>{
    const { id } = req.params;
    try {
        const updateOneCita = await Citas.findByPk(id)
        updateOneCita.set(req.body);
        updateOneCita.save();
        res.status(200).json({updateOneCita});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
export const deleteCita = async (req, res) =>{
    const { id } = req.params;

    try {
        const deleteCita = await Citas.destroy({
            where:{
                id
            }
        });
        res.status(200).json({data:deleteCita})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}