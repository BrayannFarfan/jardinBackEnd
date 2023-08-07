import jwt from "jsonwebtoken";

export const AuthSession = (req, res, next) =>{
    //TEXT PLANE IS HEADER NAME
    const token = req.header('Authorization');

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