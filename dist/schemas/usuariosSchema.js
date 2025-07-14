"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioEditarSchema = exports.usuarioCrearSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.usuarioCrearSchema = joi_1.default.object({
    nombre: joi_1.default.string()
        .max(100)
        .required()
        .messages({
        'string.base': 'El nombre debe ser texto.',
        'string.empty': 'El nombre es obligatorio.',
        'string.max': 'El nombre no debe exceder los 100 caracteres.',
        'any.required': 'El nombre es obligatorio.',
    }),
    email: joi_1.default.string()
        .email()
        .max(150)
        .required()
        .messages({
        'string.base': 'El email debe ser texto.',
        'string.empty': 'El email es obligatorio.',
        'string.email': 'El email debe tener un formato válido.',
        'string.max': 'El email no debe exceder los 150 caracteres.',
        'any.required': 'El email es obligatorio.',
    }),
    password: joi_1.default.string()
        .max(255)
        .required()
        .messages({
        'string.base': 'La contraseña debe ser texto.',
        'string.empty': 'La contraseña es obligatoria.',
        'string.max': 'La contraseña no debe exceder los 255 caracteres.',
        'any.required': 'La contraseña es obligatoria.',
    }),
    rol: joi_1.default.string()
        .max(20)
        .required()
        .messages({
        'string.base': 'El rol debe ser texto.',
        'string.empty': 'El rol es obligatorio.',
        'string.max': 'El rol no debe exceder los 20 caracteres.',
        'any.required': 'El rol es obligatorio.',
    }),
    activo: joi_1.default.boolean()
        .required()
        .messages({
        'boolean.base': 'El estado activo debe ser un valor booleano.',
        'any.required': 'El estado activo es obligatorio.',
    }),
    estado_auditoria: joi_1.default.string()
        .length(1)
        .required()
        .messages({
        'string.base': 'El estado de auditoría debe ser texto.',
        'string.length': 'El estado de auditoría debe tener 1 carácter.',
        'any.required': 'El estado de auditoría es obligatorio.',
    }),
});
exports.usuarioEditarSchema = joi_1.default.object({
    nombre: joi_1.default.string()
        .max(100)
        .required()
        .messages({
        'string.base': 'El nombre debe ser texto.',
        'string.empty': 'El nombre es obligatorio.',
        'string.max': 'El nombre no debe exceder los 100 caracteres.',
        'any.required': 'El nombre es obligatorio.',
    }),
    email: joi_1.default.string()
        .email()
        .max(150)
        .required()
        .messages({
        'string.base': 'El email debe ser texto.',
        'string.empty': 'El email es obligatorio.',
        'string.email': 'El email debe tener un formato válido.',
        'string.max': 'El email no debe exceder los 150 caracteres.',
        'any.required': 'El email es obligatorio.',
    }),
    password: joi_1.default.string()
        .max(255)
        .required()
        .messages({
        'string.base': 'La contraseña debe ser texto.',
        'string.empty': 'La contraseña es obligatoria.',
        'string.max': 'La contraseña no debe exceder los 255 caracteres.',
        'any.required': 'La contraseña es obligatoria.',
    }),
    rol: joi_1.default.string()
        .max(20)
        .required()
        .messages({
        'string.base': 'El rol debe ser texto.',
        'string.empty': 'El rol es obligatorio.',
        'string.max': 'El rol no debe exceder los 20 caracteres.',
        'any.required': 'El rol es obligatorio.',
    }),
    activo: joi_1.default.boolean()
        .required()
        .messages({
        'boolean.base': 'El estado activo debe ser un valor booleano.',
        'any.required': 'El estado activo es obligatorio.',
    }),
    estado_auditoria: joi_1.default.string()
        .length(1)
        .required()
        .messages({
        'string.base': 'El estado de auditoría debe ser texto.',
        'string.length': 'El estado de auditoría debe tener 1 carácter.',
        'any.required': 'El estado de auditoría es obligatorio.',
    }),
});
