import Joi from 'joi'

export const categoriaCrearSchema = Joi.object({
    nombre: Joi.string()
        .max(50)
        .required()
        .messages({
            'string.base': 'El nombre debe ser texto.',
            'string.empty': 'El nombre es obligatorio.',
            'string.max': 'El nombre no debe exceder los 50 caracteres.',
            'any.required': 'El nombre es obligatorio',
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
})

export const categoriaEditarSchema = Joi.object({
    nombre: Joi.string()
        .max(50)
        .messages({
            'string.base': 'El nombre debe ser texto.',
            'string.max': 'El nombre no debe exceder los 50 caracteres.',
        }),

    descripcion: Joi.string()
        .allow(null, '')
        .messages({
            'string.base': 'La descripción debe ser texto.',
        }),

    activa: Joi.boolean()
        .messages({
            'boolean.base': 'El estado activa debe ser un valor booleano.',
        }),

    estado_auditoria: Joi.string()
        .length(1)
        .messages({
            'string.base': 'El estado de auditoría debe ser texto.',
            'string.length': 'El estado de auditoría debe tener 1 carácter.',
        })
})
