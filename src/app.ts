import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import CategoriaRoute from './routes/categoria.route';
import usuariosRoute from './routes/usuario.route';
import cursosRoute from './routes/curso.route';
import instructoresRoute from './routes/instructor.route';
import modulosRoute from './routes/modulo.route';
import inscripcionesRoute from './routes/inscripcion.route';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';
import env from './config/env';
import authRouter from './routes/auth.route';


/* 
     CONFIGURAR CONEXION A LA BD, RUTAS Y OTRAS COSAS DE SERVICIOS
*/


const app = express();

//Bas de datos

//Middleware para parsear JSON
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Rutas
app.use(`${env.API_PREFIX}/categorias`, CategoriaRoute);
app.use(`${env.API_PREFIX}/usuarios`, usuariosRoute);
app.use(`${env.API_PREFIX}/cursos`, cursosRoute);
app.use(`${env.API_PREFIX}/instructores`, instructoresRoute);
app.use(`${env.API_PREFIX}/modulos`, modulosRoute);
app.use(`${env.API_PREFIX}/inscripciones`, inscripcionesRoute);
app.use(`${env.API_PREFIX}/auth`, authRouter);


export default app;

