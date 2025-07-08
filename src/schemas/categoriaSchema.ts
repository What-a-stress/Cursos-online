import Joi from 'joi';

export const categoriaCrearSchema = Joi.object({
    nombre: Joi.string()
        .max(100)
        .required()
        .messages({
            'string.base': 'El nombre debe ser texto.',
            'string.empty': 'El nombre es obligatorio.',
            'string.max': 'El nombre no debe exceder los 100 caracteres.',
            'any.required': 'nombre no puede estar vacío.',
        }),

    descripcion: Joi.string()
        .allow(null, '')
        .optional()
        .messages({
            'string.base': 'La descripción debe ser texto.',
        }),

    activa: Joi.boolean()
        .optional()
        .messages({
            'boolean.base': 'El estado activa debe ser un valor booleano.',
        }),

    estado_auditoria: Joi.string()
        .length(1)
        .optional()
        .messages({
            'string.base': 'El estado de auditoría debe ser texto.',
            'string.length': 'El estado de auditoría debe tener 1 carácter.',
        })
});
