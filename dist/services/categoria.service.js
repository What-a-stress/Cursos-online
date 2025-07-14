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
exports.eliminarCategoria = exports.modificarCategoria = exports.insertarCategoria = exports.obtenerCategoria = exports.listarCategorias = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const prisma = new client_1.PrismaClient();
const listarCategorias = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoria.service::listarCategorias');
    const Categorias = yield prisma.categorias.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id: 'asc' // Ordenena de manera ascendente
        }
    });
    return Categorias;
});
exports.listarCategorias = listarCategorias;
const obtenerCategoria = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoria.service::obtenerCategoria');
    const categoria = yield prisma.categorias.findUnique({
        where: {
            id: id
        }
    });
    return categoria;
});
exports.obtenerCategoria = obtenerCategoria;
const insertarCategoria = (Categorias) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoria.service::insertarCategoria');
    yield prisma.categorias.create({
        data: {
            nombre: Categorias.nombre,
            descripcion: Categorias.descripcion,
            estado_auditoria: '1' // si es que está activo
        }
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarCategoria = insertarCategoria;
const modificarCategoria = (id, Categorias) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoria.service::modificarCategoria');
    yield prisma.categorias.update({
        where: {
            id: id
        },
        data: Object.assign(Object.assign({}, Categorias), { fecha_actualizacion: new Date() })
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarCategoria = modificarCategoria;
const eliminarCategoria = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categoria.service::eliminarCategoria');
    yield prisma.categorias.update({
        where: {
            id: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });
    return constants_1.RESPONSE_DELETE_OK; //no elimina, solo cambia el estado a 0, hace una eliminación lógica
});
exports.eliminarCategoria = eliminarCategoria;
