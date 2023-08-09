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
    const { nombre, asignatura, foto} = req.body;
    console.log(req.file);
    console.log({nombre,asignatura,foto});
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
    res.json({data:'soy la actualziacion de Profesores'})
}
export const deleteProfesores = async (req, res) =>{
    res.json({data:'soy el delete Profesores'})
}