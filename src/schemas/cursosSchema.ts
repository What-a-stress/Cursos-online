import Joi from 'joi';

export const cursoCrearSchema = Joi.object({
    titulo: Joi.string()
        .max(200)
        .required()
        .messages({
            'string.base': 'El título debe ser texto.',
            'string.empty': 'El título es obligatorio.',
            'string.max': 'El título no debe exceder los 200 caracteres.',
            'any.required': 'El título es obligatorio.',
        }),
    descripcion: Joi.string()
        .optional()
        .messages({
            'string.base': 'La descripción debe ser texto.',
        }),
    precio: Joi.number()
        .precision(2)
        .positive()
        .required()
        .messages({
            'number.base': 'El precio debe ser un número.',
            'number.precision': 'El precio debe tener como máximo 2 decimales.',
            'number.positive': 'El precio debe ser un número positivo.',
            'any.required': 'El precio es obligatorio.',
        }),
    categoria_id: Joi.number()
        .integer()
        .required()
        .messages({
            'number.base': 'El ID de categoría debe ser un número.',
            'number.integer': 'El ID de categoría debe ser un número entero.',
            'any.required': 'El ID de categoría es obligatorio.',
        }),
    instructor_id: Joi.number()
        .integer()
        .required()
        .messages({
            'number.base': 'El ID de instructor debe ser un número.',
            'number.integer': 'El ID de instructor debe ser un número entero.',
            'any.required': 'El ID de instructor es obligatorio.',
        }),
    duracion_horas: Joi.number()
        .integer()
        .positive()
        .optional()
        .messages({
            'number.base': 'La duración en horas debe ser un número.',
            'number.integer': 'La duración en horas debe ser un número entero.',
            'number.positive': 'La duración en horas debe ser un número positivo.',
        }),
    nivel: Joi.string()
        .valid('Básico', 'Intermedio', 'Avanzado')
        .required()
        .messages({
            'any.only': 'El nivel debe ser Básico, Intermedio o Avanzado.',
            'any.required': 'El nivel es obligatorio.',
            'string.base': 'El nivel debe ser texto.',
        }),
    activo: Joi.boolean()
        .optional()
        .messages({
            'boolean.base': 'El estado activo debe ser un valor booleano.',
        }),
    estado_auditoria: Joi.string()
        .length(1)
        .optional()
        .messages({
            'string.base': 'El estado de auditoría debe ser texto.',
            'string.length': 'El estado de auditoría debe tener 1 carácter.',
        }),
});