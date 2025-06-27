

/* 
     CONFIGURAR CONEXION A LA BD, RUTAS Y OTRAS COSAS DE SERVICIOS
*/

import express, { Application } from 'express';

const app: Application = express();



//Middleware para parsear JSON
app.use(express.json());

//Rutas

export default app;