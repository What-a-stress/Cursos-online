import Joi from 'joi';

export const moduloCrearSchema = Joi.object({
    curso_id: Joi.number()
        .integer()
        .required()
        .messages({
            'number.base': 'El ID del curso debe ser un número.',
            'number.integer': 'El ID del curso debe ser un número entero.',
            'any.required': 'El ID del curso es obligatorio.',
        }),

    titulo: Joi.string()
        .max(150)
        .required()
        .messages({
            'string.base': 'El título debe ser texto.',
            'string.empty': 'El título es obligatorio.',
            'string.max': 'El título no debe exceder los 150 caracteres.',
            'any.required': 'El título es obligatorio.',
        }),

    descripcion: Joi.string()
        .allow(null, '')
        .optional()
        .messages({
            'string.base': 'La descripción debe ser texto.',
        }),

    orden: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': 'El orden debe ser un número.',
            'number.integer': 'El orden debe ser un número entero.',
            'number.positive': 'El orden debe ser un número positivo.',
            'any.required': 'El orden es obligatorio.',
        }),

    estado_auditoria: Joi.string()
        .length(1)
        .optional()
        .messages({
            'string.base': 'El estado de auditoría debe ser texto.',
            'string.length': 'El estado de auditoría debe tener 1 carácter.',
        }),
})