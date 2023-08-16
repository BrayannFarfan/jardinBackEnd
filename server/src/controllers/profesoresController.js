import { Profesor } from '../models/Profesores.js';


export const getAllProfesores = async (req, res) =>{
    try {
        const getAllProfesores = await Profesor.findAll();
        return res.status(200).json({data: getAllProfesores})
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}
export const getOneProfesores = async (req, res) =>{
    const { id } = req.params;
    try {
        const getOneProfesores = await Profesor.findByPk(id);
        return res.status(200).json({data: getOneProfesores});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}
export const createOneProfesores = async (req, res) =>{
    const { nombre, asignatura} = req.body;
    try {
        const createOneProfesores = await Profesor.create({
            nombre, 
            asignatura,
            foto: req.file.filename
        })
        return res.status(200).json({data:createOneProfesores});
    } catch (error) {
        
    }
}
export const updateOneProfesores = async (req, res) =>{
    const { id } = req.params;

    try {
        const updateOneProfesores = await Profesor.findByPk(id);
        updateOneProfesores.set(req.body);
        updateOneProfesores.save();
        return res.status(200).json({data: updateOneProfesores})
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}
export const deleteProfesores = async (req, res) =>{
    const { id } = req.params;
    try {
        const deleteProfesores = await Profesor.destroy({
            where:{
                id
            }
        })
        return res.status(200).json({data:deleteProfesores})
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}