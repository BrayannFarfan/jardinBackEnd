import { Newslatter } from '../models/Newslatter.js';
import { envioEmail } from './sendEmail.js';

export const subscribe = async (req, res) =>{
    const { nombre, email } = req.body;
    
    try {
        const subscribe = await Newslatter.create({
            nombre,
            email
        })
        const userEmail = email;
        const userSubject = ' GRACIAS POR SUBSCRIBIRTE ';
        const userBody = `GRACIAS POR TU SUSCRIBCION RECIBIRAS NUESTRAS NOVEDADES AL CORREO ${email}.`;

        envioEmail(userEmail, userSubject, userBody);

        res.status(200).json({data: subscribe});
    } catch (error) {
        res.json({error: error.message});
    }
}
export const deleteSubscribe = async (req, res) =>{
    const { email } = req.body;
    try {
        const deleteSubscribe = await Newslatter.destroy({
            where:{
                email
            }
        })
        const userEmail = email;
        const userSubject = ' Lamentramos que te fuiste ';
        const userBody = `lamentamos que tuvieras que dejarnos, te esperamos pronto.`;

        envioEmail(userEmail, userSubject, userBody);
        res.status(200).json({data: deleteSubscribe, message:'Anulacion Exitosa'})
    } catch (error) {
        res.json({error: error.message});
    }
}