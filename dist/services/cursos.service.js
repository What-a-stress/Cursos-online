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
exports.eliminarCurso = exports.modificarCurso = exports.insertarCurso = exports.obtenerCurso = exports.listarCursos = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const prisma = new client_1.PrismaClient();
const listarCursos = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('cursosService::listarCursos');
    return yield prisma.cursos.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id: 'asc'
        },
        include: {
            instructores: {
                include: {}
            },
            categorias: true
        }
    });
});
exports.listarCursos = listarCursos;
const obtenerCurso = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('cursosService::obtenerCurso');
    return yield prisma.cursos.findUnique({
        where: {
            id: id
        }
    });
});
exports.obtenerCurso = obtenerCurso;
const insertarCurso = (curso) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('cursosService::insertarCurso');
    yield prisma.cursos.create({
        data: {
            titulo: curso.titulo,
            descripcion: curso.descripcion,
            precio: curso.precio,
            categoria_id: curso.categoria_id,
            instructor_id: curso.instructor_id,
            duracion_horas: curso.duracion_horas,
            nivel: curso.nivel,
            activo: curso.activo,
            estado_auditoria: curso.estado_auditoria
        }
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarCurso = insertarCurso;
const modificarCurso = (id, curso) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('cursosService::modificarCurso');
    yield prisma.cursos.update({
        where: {
            id: id
        },
        data: Object.assign(Object.assign({}, curso), { fecha_actualizacion: new Date() })
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarCurso = modificarCurso;
const eliminarCurso = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('cursosService::eliminarCurso');
    yield prisma.cursos.update({
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
exports.eliminarCurso = eliminarCurso;
