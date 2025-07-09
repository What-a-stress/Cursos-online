import Joi from 'joi';

export const inscripcionCrearSchema = Joi.object({
    usuario_id: Joi.number()
        .integer()
        .required()
        .messages({
            'number.base': 'El ID del usuario debe ser un número.',
            'number.integer': 'El ID del usuario debe ser un número entero.',
            'any.required': 'El ID del usuario es obligatorio.',
        }),

    curso_id: Joi.number()
        .integer()
        .required()
        .messages({
            'number.base': 'El ID del curso debe ser un número.',
            'number.integer': 'El ID del curso debe ser un número entero.',
            'any.required': 'El ID del curso es obligatorio.',
        }),

    progreso: Joi.number()
        .min(0)
        .max(100)
        .optional()
        .messages({
            'number.base': 'El progreso debe ser un número.',
            'number.min': 'El progreso no puede ser menor que 0.',
            'number.max': 'El progreso no puede ser mayor que 100.',
        }),

    completado: Joi.boolean()
        .optional()
        .messages({
            'boolean.base': 'El campo completado debe ser verdadero o falso.',
        }),

    estado_auditoria: Joi.string()
        .length(1)
        .optional()
        .messages({
            'string.base': 'El estado de auditoría debe ser texto.',
            'string.length': 'El estado de auditoría debe tener 1 carácter.',
        }),
});
