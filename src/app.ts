import express, { Application } from 'express';
import cors from 'cors';
import CategoriaRoute from './routes/categoria.route';
import env from './config/env';
/* 
     CONFIGURAR CONEXION A LA BD, RUTAS Y OTRAS COSAS DE SERVICIOS
*/


const app: Application = express();

//Bas de datos

//Middleware para parsear JSON
app.use(express.json());
app.use(cors());
//Rutas
app.use(`${env.API_PREFIX}/categorias`, CategoriaRoute);


export default app;

