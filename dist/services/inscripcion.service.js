"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarInscripcion = exports.modificarInscripcion = exports.insertarInscripcion = exports.obtenerInscripcion = exports.listarInscripciones = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const prisma = new client_1.PrismaClient();
const listarInscripciones = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("inscripcionesService::listarInscripciones");
    return yield prisma.inscripciones.findMany({
        where: {
            estado_auditoria: "1"
        },
        orderBy: {
            id: "asc"
        }
    });
});
exports.listarInscripciones = listarInscripciones;
const obtenerInscripcion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("inscripcionesService::obtenerInscripcion");
    return yield prisma.inscripciones.findUnique({
        where: {
            id: id
        }
    });
});
exports.obtenerInscripcion = obtenerInscripcion;
const insertarInscripcion = (inscripcion) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log("inscripcionesService::insertarInscripcion");
    yield prisma.inscripciones.create({
        data: {
            usuario_id: inscripcion.usuario_id,
            curso_id: inscripcion.curso_id,
            progreso: inscripcion.progreso,
            completado: inscripcion.completado,
            estado_auditoria: (_a = inscripcion.estado_auditoria) !== null && _a !== void 0 ? _a : "1"
        }
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarInscripcion = insertarInscripcion;
const modificarInscripcion = (id, inscripcion) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("inscripcionesService::modificarInscripcion");
    yield prisma.inscripciones.update({
        where: {
            id: id
        },
        data: Object.assign(Object.assign({}, inscripcion), { fecha_actualizacion: new Date() })
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarInscripcion = modificarInscripcion;
const eliminarInscripcion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("inscripcionesService::eliminarInscripcion");
    yield prisma.inscripciones.update({
        where: {
            id: id
        },
        data: {
            estado_auditoria: "0",
            fecha_actualizacion: new Date()
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarInscripcion = eliminarInscripcion;
