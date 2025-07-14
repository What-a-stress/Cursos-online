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
    .required()
    .messages({
      'string.base': 'La biografía debe ser texto.',
      'string.empty': 'La biografía es obligatoria.',
      'any.required': 'La biografía es obligatoria.'
    }),

  foto_url: Joi.string()
    .uri()
    .max(255)
    .required()
    .messages({
      'string.base': 'La URL de la foto debe ser texto.',
      'string.uri': 'La URL de la foto debe ser una URL válida.',
      'string.max': 'La URL de la foto no debe exceder los 255 caracteres.',
      'any.required': 'La URL de la foto es obligatoria.'
    }),

  especialidad: Joi.string()
    .max(100)
    .required()
    .messages({
      'string.base': 'La especialidad debe ser texto.',
      'string.max': 'La especialidad no debe exceder los 100 caracteres.',
      'any.required': 'La especialidad es obligatoria.'
    }),

  rating: Joi.number()
    .precision(2)
    .min(1)
    .max(10)
    .required()
    .messages({
      'number.base': 'El rating debe ser un número.',
      'number.min': 'El rating no puede ser menor a 1.',
      'number.max': 'El rating no puede ser mayor a 10.',
      'number.precision': 'El rating debe tener como máximo 2 decimales.',
      'any.required': 'El rating es obligatorio.'
    }),

  estado_auditoria: Joi.string()
    .length(1)
    .required()
    .messages({
      'string.base': 'El estado de auditoría debe ser texto.',
      'string.length': 'El estado de auditoría debe tener 1 carácter.',
      'any.required': 'El estado de auditoría es obligatorio.'
    })
});

export const instructorEditarSchema = instructorCrearSchema;
