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
exports.eliminarInstructor = exports.modificarInstructor = exports.insertarInstructor = exports.obtenerInstructor = exports.listarInstructores = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const prisma = new client_1.PrismaClient();
const listarInstructores = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('instructoresService::listarInstructores');
    return yield prisma.instructores.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id: 'asc'
        }
    });
});
exports.listarInstructores = listarInstructores;
const obtenerInstructor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('instructoresService::obtenerInstructor');
    return yield prisma.instructores.findUnique({
        where: {
            id: id
        }
    });
});
exports.obtenerInstructor = obtenerInstructor;
const insertarInstructor = (instructor) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('instructoresService::insertarInstructor');
    yield prisma.instructores.create({
        data: {
            nombre: instructor.nombre,
            biografia: instructor.biografia,
            foto_url: instructor.foto_url,
            especialidad: instructor.especialidad,
            rating: instructor.rating,
            estado_auditoria: instructor.estado_auditoria
        }
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarInstructor = insertarInstructor;
const modificarInstructor = (id, instructor) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('instructoresService::modificarInstructor');
    yield prisma.instructores.update({
        where: {
            id: id
        },
        data: Object.assign(Object.assign({}, instructor), { fecha_actualizacion: new Date() })
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarInstructor = modificarInstructor;
const eliminarInstructor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('instructoresService::eliminarInstructor');
    yield prisma.instructores.update({
        where: {
            id: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarInstructor = eliminarInstructor;
