"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const categoria_route_1 = __importDefault(require("./routes/categoria.route"));
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const curso_route_1 = __importDefault(require("./routes/curso.route"));
const instructor_route_1 = __importDefault(require("./routes/instructor.route"));
const modulo_route_1 = __importDefault(require("./routes/modulo.route"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./docs/swagger");
const env_1 = __importDefault(require("./config/env"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
/*
     CONFIGURAR CONEXION A LA BD, RUTAS Y OTRAS COSAS DE SERVICIOS
*/
const app = (0, express_1.default)();
//Bas de datos
//Middleware para parsear JSON
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
//Rutas
app.use(`${env_1.default.API_PREFIX}/categorias`, categoria_route_1.default);
app.use(`${env_1.default.API_PREFIX}/usuarios`, usuario_route_1.default);
app.use(`${env_1.default.API_PREFIX}/cursos`, curso_route_1.default);
app.use(`${env_1.default.API_PREFIX}/instructores`, instructor_route_1.default);
app.use(`${env_1.default.API_PREFIX}/modulos`, modulo_route_1.default);
app.use(`${env_1.default.API_PREFIX}/auth`, auth_route_1.default);
exports.default = app;
