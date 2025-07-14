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
exports.loginAuth = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("../utils/bcrypt");
const jwt_1 = require("./jwt");
const constants_1 = require("../shared/constants");
const prisma = new client_1.PrismaClient();
const loginAuth = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('auth.service::loginAuth');
    const usuario = yield prisma.usuarios.findUnique({
        where: { email }
    });
    if (!usuario) {
        throw new Error(constants_1.RESPONSE_CREDENTIALS_ERROR);
    }
    const passwordValida = yield (0, bcrypt_1.comparePassword)(password, usuario.password);
    if (!passwordValida) {
        throw new Error(constants_1.RESPONSE_CREDENTIALS_ERROR);
    }
    const token = (0, jwt_1.signToken)({
        id: usuario.id,
        role: usuario.rol,
        username: usuario.nombre
    });
    return {
        token,
        usuario: {
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            rol: usuario.rol
        }
    };
});
exports.loginAuth = loginAuth;
