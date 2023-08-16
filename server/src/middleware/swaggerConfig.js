import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDefinition = {
    openapi: '3.0.0',
    info:{
        title:'API JARDIN CON AUTENTICACION JWT',
        version: '1.0.0',
        descripcion:'API REST para un jardin , donde se puede suscribir al newsletter, donde puede mandar un contacto y preguntar todo lo que quiera. etc '
    },
    servers:[
        {
            url: "http://localhost:3000"
        }
    ],
    components:{
        securitySchemes:{
            BearerAuth:{
                type: 'http',
                scheme:'bearer',
                bearerFormat: 'JWT'
            }
        }
    },
    security: [
        {
            BearerAuth:[],
        }
    ]
}

const options = {
    swaggerDefinition,
    apis: [`${path.join(__dirname, "../routes/*.js")}`]
}

export const swaggerSpec = swaggerJSDoc(options);