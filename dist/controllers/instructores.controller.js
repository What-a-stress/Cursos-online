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
exports.eliminarInstructor = exports.modificarInstructor = exports.insertarInstructor = exports.obtenerInstructor = exports.listarInstructores = void 0;
const instructoresService = __importStar(require("../services/instructores.service"));
const responseModel_1 = require("../shared/responseModel");
const constants_1 = require("../shared/constants");
const instructoresSchema_1 = require("../schemas/instructoresSchema");
const listarInstructores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('instructoresController::listarInstructores');
    try {
        const response = yield instructoresService.listarInstructores();
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarInstructores = listarInstructores;
const obtenerInstructor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('instructoresController::obtenerInstructor');
    try {
        const { id } = req.params;
        const response = yield instructoresService.obtenerInstructor(Number(id));
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerInstructor = obtenerInstructor;
const insertarInstructor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('instructoresController::insertarInstructor');
    const { error } = instructoresSchema_1.instructorCrearSchema.validate(req.body);
    if (error) {
        return res.status(constants_1.STATUS_BAD_REQUEST).json(responseModel_1.ResponseModel.error(error.message, constants_1.STATUS_BAD_REQUEST));
    }
    try {
        const response = yield instructoresService.insertarInstructor(req.body);
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarInstructor = insertarInstructor;
const modificarInstructor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('instructoresController::modificarInstructor');
    const { error } = instructoresSchema_1.instructorEditarSchema.validate(req.body);
    if (error) {
        return res.status(constants_1.STATUS_BAD_REQUEST).json(responseModel_1.ResponseModel.error(error.message, constants_1.STATUS_BAD_REQUEST));
    }
    try {
        const { id } = req.params;
        const response = yield instructoresService.modificarInstructor(Number(id), req.body);
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarInstructor = modificarInstructor;
const eliminarInstructor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('instructoresController::eliminarInstructor');
    try {
        const { id } = req.params;
        const response = yield instructoresService.eliminarInstructor(Number(id));
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarInstructor = eliminarInstructor;
