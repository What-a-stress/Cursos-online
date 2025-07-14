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
exports.eliminarUsuario = exports.modificarUsuario = exports.insertarUsuario = exports.obtenerUsuario = exports.listarUsuarios = void 0;
const client_1 = require("@prisma/client");
const usuario_mapper_1 = require("../mappers/usuario.mapper");
const constants_1 = require("../shared/constants");
const bcrypt_1 = require("../utils/bcrypt");
const prisma = new client_1.PrismaClient();
const listarUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("usuariosService::listarUsuarios");
    const usuarios = yield prisma.usuarios.findMany({
        where: {
            estado_auditoria: "1",
        },
        orderBy: {
            id: "asc",
        },
    });
    return usuarios.map(usuario_mapper_1.fromPrismaUsuario);
});
exports.listarUsuarios = listarUsuarios;
const obtenerUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuariosService::obtenerUsuario');
    return yield prisma.usuarios.findUnique({
        where: {
            id: id
        }
    });
});
exports.obtenerUsuario = obtenerUsuario;
const insertarUsuario = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuariosService::insertarUsuario');
    const hashedPassword = yield (0, bcrypt_1.hashPassword)(usuario.password);
    yield prisma.usuarios.create({
        data: {
            nombre: usuario.nombre,
            email: usuario.email,
            password: hashedPassword,
            rol: usuario.rol,
            activo: usuario.activo,
            estado_auditoria: usuario.estado_auditoria,
        }
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarUsuario = insertarUsuario;
const modificarUsuario = (id, usuario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuariosService::modificarUsuario');
    yield prisma.usuarios.update({
        where: {
            id: id
        },
        data: Object.assign(Object.assign({}, usuario), { fecha_actualizacion: new Date() })
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarUsuario = modificarUsuario;
const eliminarUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuariosService::eliminarUsuario');
    yield prisma.usuarios.update({
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
exports.eliminarUsuario = eliminarUsuario;
