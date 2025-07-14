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
exports.eliminarModulo = exports.modificarModulo = exports.insertarModulo = exports.obtenerModulo = exports.listarModulos = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const prisma = new client_1.PrismaClient();
const listarModulos = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("modulo.service::listarModulos");
    const modulosList = yield prisma.modulos.findMany({
        where: {
            estado_auditoria: "1"
        },
        orderBy: {
            id: "asc"
        }
    });
    return modulosList;
});
exports.listarModulos = listarModulos;
const obtenerModulo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("modulo.service::obtenerModulo");
    const modulo = yield prisma.modulos.findUnique({
        where: { id }
    });
    return modulo;
});
exports.obtenerModulo = obtenerModulo;
const insertarModulo = (nuevoModulo) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("modulo.service::insertarModulo");
    yield prisma.modulos.create({
        data: {
            curso_id: nuevoModulo.curso_id,
            titulo: nuevoModulo.titulo,
            descripcion: nuevoModulo.descripcion,
            orden: nuevoModulo.orden,
            estado_auditoria: "1"
        }
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarModulo = insertarModulo;
const modificarModulo = (id, datosModulo) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("modulo.service::modificarModulo");
    yield prisma.modulos.update({
        where: { id },
        data: Object.assign(Object.assign({}, datosModulo), { fecha_actualizacion: new Date() })
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarModulo = modificarModulo;
const eliminarModulo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("modulo.service::eliminarModulo");
    yield prisma.modulos.update({
        where: { id },
        data: {
            estado_auditoria: "0",
            fecha_actualizacion: new Date()
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarModulo = eliminarModulo;
