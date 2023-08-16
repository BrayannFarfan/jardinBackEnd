import jwt from "jsonwebtoken";

export const AuthSession = (req, res, next) =>{

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({error:'Acceso no autorizado'});
    }

    try {
        const user = jwt.verify(token, 'secreto');
        req.user = user.user;
        next();
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}