/* 
    Libreria para gestionar los tokens
*/
/* importo la libreria */
import jwt from "jsonwebtoken";

export const generarToken =(payload,vida) => {
    const options = {
        expiresIn: vida
    };
    return jwt.sign(payload, process.env.SALT, options);
}

/* middleware para autenticar los tokens */

export const authMiddleware = (req, res, next) => 
    {
        try {
            // token valido desde la peticion o request
            const token  = req.headers.authorization;
            
            //validar el token
            if(!token)
            {
                throw new Error("Token no proporcionado");
            }

            //comparar el token del request con el token generado en el login
            let tokenOk = jwt.verify(token, process.env.SALT);
            
            
            next();
        } catch (error) {
            res.status(401).send({
                status: "error",
                message: "Token invalido o expirado",
            });
        }
    }