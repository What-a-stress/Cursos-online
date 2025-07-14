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
exports.eliminarCategoria = exports.modificarCategoria = exports.insertarCategoria = exports.obtenerCategoria = exports.listarCategorias = void 0;
const responseModel_1 = require("../shared/responseModel");
const CategoriaService = __importStar(require("../services/categoria.service"));
const constants_1 = require("../shared/constants");
const categoriaSchema_1 = require("../schemas/categoriaSchema");
const listarCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categorias.controller::listarCategorias');
    try {
        const categorias = yield CategoriaService.listarCategorias();
        res.json(responseModel_1.ResponseModel.success(categorias));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarCategorias = listarCategorias;
const obtenerCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categorias.controller::obtenerCategoria');
    try {
        const { id } = req.params;
        const categoria = yield CategoriaService.obtenerCategoria(Number(id));
        res.json(responseModel_1.ResponseModel.success(categoria));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerCategoria = obtenerCategoria;
const insertarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categorias.Controller::insertarCategoria');
    const { error } = categoriaSchema_1.categoriaCrearSchema.validate(req.body);
    if (error) {
        return res.status(constants_1.STATUS_BAD_REQUEST).json(responseModel_1.ResponseModel.error(error.message));
    }
    try {
        const response = yield CategoriaService.insertarCategoria(req.body);
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarCategoria = insertarCategoria;
const modificarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categorias.controller::modificarCategoria');
    const { error } = categoriaSchema_1.categoriaEditarSchema.validate(req.body);
    if (error) {
        return res.status(constants_1.STATUS_BAD_REQUEST).json(responseModel_1.ResponseModel.error(error.message));
    }
    try {
        const { id } = req.params;
        const response = yield CategoriaService.modificarCategoria(Number(id), req.body);
        res.json(responseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarCategoria = modificarCategoria;
const eliminarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('categorias.controller::modificarCategoria');
    try {
        const { id } = req.params;
        const response = yield CategoriaService.eliminarCategoria(Number(id));
        res.json(responseModel_1.ResponseModel.success(null, response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constants_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarCategoria = eliminarCategoria;
