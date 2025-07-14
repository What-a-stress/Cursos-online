"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaEditarSchema = exports.categoriaCrearSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.categoriaCrearSchema = joi_1.default.object({
    nombre: joi_1.default.string()
        .max(50)
        .required()
        .messages({
        'string.base': 'El nombre debe ser texto.',
        'string.empty': 'El nombre es obligatorio.',
        'string.max': 'El nombre no debe exceder los 50 caracteres.',
        'any.required': 'El nombre es obligatorio',
    }),
    descripcion: joi_1.default.string()
        .allow(null, '')
        .optional()
        .messages({
        'string.base': 'La descripción debe ser texto.',
    }),
    activa: joi_1.default.boolean()
        .optional()
        .messages({
        'boolean.base': 'El estado activa debe ser un valor booleano.',
    }),
    estado_auditoria: joi_1.default.string()
        .length(1)
        .optional()
        .messages({
        'string.base': 'El estado de auditoría debe ser texto.',
        'string.length': 'El estado de auditoría debe tener 1 carácter.',
    })
});
exports.categoriaEditarSchema = joi_1.default.object({
    nombre: joi_1.default.string()
        .max(50)
        .messages({
        'string.base': 'El nombre debe ser texto.',
        'string.max': 'El nombre no debe exceder los 50 caracteres.',
    }),
    descripcion: joi_1.default.string()
        .allow(null, '')
        .messages({
        'string.base': 'La descripción debe ser texto.',
    }),
    activa: joi_1.default.boolean()
        .messages({
        'boolean.base': 'El estado activa debe ser un valor booleano.',
    }),
    estado_auditoria: joi_1.default.string()
        .length(1)
        .messages({
        'string.base': 'El estado de auditoría debe ser texto.',
        'string.length': 'El estado de auditoría debe tener 1 carácter.',
    })
});
