import Joi from 'joi';

export const instructorCrearSchema = Joi.object({
  nombre: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.base': 'El nombre debe ser texto.',
      'string.empty': 'El nombre no puede estar vacío.',
      'string.min': 'El nombre debe tener al menos 3 caracteres.',
      'string.max': 'El nombre no debe exceder los 100 caracteres.',
      'any.required': 'El nombre es obligatorio.'
    }),

  biografia: Joi.string()
    .optional()
    .messages({
      'string.base': 'La biografía debe ser texto.'
    }),

  foto_url: Joi.string()
    .uri()
    .max(255)
    .optional()
    .messages({
      'string.base': 'La URL de la foto debe ser texto.',
      'string.uri': 'La URL de la foto debe ser una URL válida.',
      'string.max': 'La URL de la foto no debe exceder los 255 caracteres.'
    }),

  especialidad: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.base': 'La especialidad debe ser texto.',
      'string.max': 'La especialidad no debe exceder los 100 caracteres.'
    }),

  rating: Joi.number()
    .precision(2)
    .min(1)
    .max(10)
    .optional()
    .messages({
      'number.base': 'El rating debe ser un número.',
      'number.min': 'El rating no puede ser menor a 1.',
      'number.max': 'El rating no puede ser mayor a 10.',
      'number.precision': 'El rating debe tener como máximo 2 decimales.'
    }),

  estado_auditoria: Joi.string()
    .length(1)
    .optional()
    .messages({
      'string.base': 'El estado de auditoría debe ser texto.',
      'string.length': 'El estado de auditoría debe tener 1 carácter.'
    })
})