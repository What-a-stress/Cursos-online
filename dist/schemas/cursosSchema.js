"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoEditarSchema = exports.cursoCrearSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.cursoCrearSchema = joi_1.default.object({
    titulo: joi_1.default.string()
        .max(200)
        .required()
        .messages({
        'string.base': 'El título debe ser texto.',
        'string.empty': 'El título es obligatorio.',
        'string.max': 'El título no debe exceder los 200 caracteres.',
        'any.required': 'El título es obligatorio.',
    }),
    descripcion: joi_1.default.string()
        .optional()
        .messages({
        'string.base': 'La descripción debe ser texto.',
    }),
    precio: joi_1.default.number()
        .precision(2)
        .positive()
        .required()
        .messages({
        'number.base': 'El precio debe ser un número.',
        'number.precision': 'El precio debe tener como máximo 2 decimales.',
        'number.positive': 'El precio debe ser un número positivo.',
        'any.required': 'El precio es obligatorio.',
    }),
    categoria_id: joi_1.default.number()
        .integer()
        .required()
        .messages({
        'number.base': 'El ID de categoría debe ser un número.',
        'number.integer': 'El ID de categoría debe ser un número entero.',
        'any.required': 'El ID de categoría es obligatorio.',
    }),
    instructor_id: joi_1.default.number()
        .integer()
        .required()
        .messages({
        'number.base': 'El ID de instructor debe ser un número.',
        'number.integer': 'El ID de instructor debe ser un número entero.',
        'any.required': 'El ID de instructor es obligatorio.',
    }),
    duracion_horas: joi_1.default.number()
        .integer()
        .positive()
        .optional()
        .messages({
        'number.base': 'La duración en horas debe ser un número.',
        'number.integer': 'La duración en horas debe ser un número entero.',
        'number.positive': 'La duración en horas debe ser un número positivo.',
    }),
    nivel: joi_1.default.string()
        .valid('Básico', 'Intermedio', 'Avanzado')
        .required()
        .messages({
        'any.only': 'El nivel debe ser Básico, Intermedio o Avanzado.',
        'any.required': 'El nivel es obligatorio.',
        'string.base': 'El nivel debe ser texto.',
    }),
    activo: joi_1.default.boolean()
        .optional()
        .messages({
        'boolean.base': 'El estado activo debe ser un valor booleano.',
    }),
    estado_auditoria: joi_1.default.string()
        .length(1)
        .optional()
        .messages({
        'string.base': 'El estado de auditoría debe ser texto.',
        'string.length': 'El estado de auditoría debe tener 1 carácter.',
    }),
});
exports.cursoEditarSchema = joi_1.default.object({
    titulo: joi_1.default.string()
        .max(200)
        .messages({
        'string.base': 'El título debe ser texto.',
        'string.max': 'El título no debe exceder los 200 caracteres.',
    }),
    descripcion: joi_1.default.string()
        .optional()
        .messages({
        'string.base': 'La descripción debe ser texto.',
    }),
    precio: joi_1.default.number()
        .precision(2)
        .positive()
        .messages({
        'number.base': 'El precio debe ser un número.',
        'number.precision': 'El precio debe tener como máximo 2 decimales.',
        'number.positive': 'El precio debe ser un número positivo.',
    }),
    categoria_id: joi_1.default.number()
        .integer()
        .messages({
        'number.base': 'El ID de categoría debe ser un número.',
        'number.integer': 'El ID de categoría debe ser un número entero.',
    }),
    instructor_id: joi_1.default.number()
        .integer()
        .messages({
        'number.base': 'El ID de instructor debe ser un número.',
        'number.integer': 'El ID de instructor debe ser un número entero.',
    }),
    duracion_horas: joi_1.default.number()
        .integer()
        .positive()
        .messages({
        'number.base': 'La duración en horas debe ser un número.',
        'number.integer': 'La duración en horas debe ser un número entero.',
        'number.positive': 'La duración en horas debe ser un número positivo.',
    }),
    nivel: joi_1.default.string()
        .valid('Básico', 'Intermedio', 'Avanzado')
        .messages({
        'any.only': 'El nivel debe ser Básico, Intermedio o Avanzado.',
        'string.base': 'El nivel debe ser texto.',
    }),
    activo: joi_1.default.boolean()
        .messages({
        'boolean.base': 'El estado activo debe ser un valor booleano.',
    }),
    estado_auditoria: joi_1.default.string()
        .length(1)
        .messages({
        'string.base': 'El estado de auditoría debe ser texto.',
        'string.length': 'El estado de auditoría debe tener 1 carácter.',
    }),
});
