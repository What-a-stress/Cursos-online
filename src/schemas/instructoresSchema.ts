import Joi from 'joi';

export const instructorCrearSchema = Joi.object({
    usuario_id: Joi.number()
        .integer()
        .required()
        .messages({
            'number.base': 'El ID de usuario debe ser un número.',
            'number.integer': 'El ID de usuario debe ser un número entero.',
            'any.required': 'El ID de usuario es obligatorio.',
        }),
    biografia: Joi.string()
        .optional()
        .messages({
            'string.base': 'La biografía debe ser texto.',
        }),
    foto_url: Joi.string()
        .uri() // Valida que sea un formato de URL
        .max(255)
        .optional()
        .messages({
            'string.base': 'La URL de la foto debe ser texto.',
            'string.uri': 'La URL de la foto debe ser una URL válida.',
            'string.max': 'La URL de la foto no debe exceder los 255 caracteres.',
        }),
    especialidad: Joi.string()
        .max(100)
        .optional()
        .messages({
            'string.base': 'La especialidad debe ser texto.',
            'string.max': 'La especialidad no debe exceder los 100 caracteres.',
        }),
    rating: Joi.number()
        .precision(2)
        .min(0)
        .max(5)
        .optional()
        .messages({
            'number.base': 'El rating debe ser un número.',
            'number.precision': 'El rating debe tener como máximo 2 decimales.',
            'number.min': 'El rating no puede ser menor a 0.',
            'number.max': 'El rating no puede ser mayor a 5.',
        }),
    estado_auditoria: Joi.string()
        .length(1)
        .optional()
        .messages({
            'string.base': 'El estado de auditoría debe ser texto.',
            'string.length': 'El estado de auditoría debe tener 1 carácter.',
        }),
});