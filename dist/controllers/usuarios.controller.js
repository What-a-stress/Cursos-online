"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.loginUsuario = exports.eliminarUsuario = exports.modificarUsuario = exports.insertarUsuario = exports.obtenerUsuario = exports.listarUsuarios = void 0;
const usuariosService = __importStar(require("../services/usuarios.service"));
const responseModel_1 = require("../shared/responseModel");
const constants_1 = require("../shared/constants");
const usuariosSchema_1 = require("../schemas/usuariosSchema");
const client_1 = require("@prisma/client");
const auth_service_1 = require("../auth/auth.service");
const prisma = new client_1.PrismaClient();
const listarUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuariosController::listarUsuarios');
    try {
        const response = yield usuariosService.listarUsuarios();
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarUsuarios = listarUsuarios;
const obtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuariosController::obtenerUsuario');
    try {
        const { id } = req.params;
        const response = yield usuariosService.obtenerUsuario(Number(id));
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerUsuario = obtenerUsuario;
const insertarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuariosController::insertarUsuario');
    const { error } = usuariosSchema_1.usuarioCrearSchema.validate(req.body);
    if (error) {
        return res.status(constants_1.STATUS_BAD_REQUEST).json(responseModel_1.ResponseModel.error(error.message, constants_1.STATUS_BAD_REQUEST));
    }
    try {
        const response = yield usuariosService.insertarUsuario(req.body);
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarUsuario = insertarUsuario;
const modificarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuariosController::modificarUsuario');
    const { error } = usuariosSchema_1.usuarioEditarSchema.validate(req.body);
    if (error) {
        return res.status(constants_1.STATUS_BAD_REQUEST).json(responseModel_1.ResponseModel.error(error.message, constants_1.STATUS_BAD_REQUEST));
    }
    try {
        const { id } = req.params;
        const response = yield usuariosService.modificarUsuario(Number(id), req.body);
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarUsuario = modificarUsuario;
const eliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuariosController::eliminarUsuario');
    try {
        const { id } = req.params;
        const response = yield usuariosService.eliminarUsuario(Number(id));
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarUsuario = eliminarUsuario;
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('usuariosController::loginUsuario');
    try {
        const { email, password } = req.body;
        const { token, usuario } = yield (0, auth_service_1.loginAuth)(email, password);
        return res.status(200).json({
            success: true,
            message: 'Inicio de sesión exitoso',
            token,
            usuario
        });
    }
    catch (error) {
        console.error('Error en login:', error.message);
        return res.status(401).json({ success: false, message: error.message });
    }
});
exports.loginUsuario = loginUsuario;
