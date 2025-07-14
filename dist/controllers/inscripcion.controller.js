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
exports.eliminarInscripcion = exports.modificarInscripcion = exports.insertarInscripcion = exports.obtenerInscripcion = exports.listarInscripciones = void 0;
const responseModel_1 = require("../shared/responseModel");
const InscripcionService = __importStar(require("../services/inscripcion.service"));
const constants_1 = require("../shared/constants");
const incripcionSchema_1 = require("../schemas/incripcionSchema");
const listarInscripciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inscripcion.controller::listarInscripciones');
    try {
        const inscripciones = yield InscripcionService.listarInscripciones();
        res.json(responseModel_1.ResponseModel.success(inscripciones));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarInscripciones = listarInscripciones;
const obtenerInscripcion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inscripcion.controller::obtenerInscripcion');
    try {
        const { id } = req.params;
        const inscripcion = yield InscripcionService.obtenerInscripcion(Number(id));
        res.json(responseModel_1.ResponseModel.success(inscripcion));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerInscripcion = obtenerInscripcion;
const insertarInscripcion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inscripcion.controller::insertarInscripcion');
    const { error } = incripcionSchema_1.inscripcionCrearSchema.validate(req.body);
    if (error) {
        return res.status(constants_1.STATUS_BAD_REQUEST).json(responseModel_1.ResponseModel.error(error.message));
    }
    try {
        const response = yield InscripcionService.insertarInscripcion(req.body);
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarInscripcion = insertarInscripcion;
const modificarInscripcion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inscripcion.controller::modificarInscripcion');
    try {
        const { id } = req.params;
        const response = yield InscripcionService.modificarInscripcion(Number(id), req.body);
        res.json(responseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarInscripcion = modificarInscripcion;
const eliminarInscripcion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inscripcion.controller::eliminarInscripcion');
    try {
        const { id } = req.params;
        const response = yield InscripcionService.eliminarInscripcion(Number(id));
        res.json(responseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarInscripcion = eliminarInscripcion;
