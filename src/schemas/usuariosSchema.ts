import Joi from 'joi';

export const usuarioCrearSchema = Joi.object({
  nombre: Joi.string()
    .max(100)
    .required()
    .messages({
      'string.base': 'El nombre debe ser texto.',
      'string.empty': 'El nombre es obligatorio.',
      'string.max': 'El nombre no debe exceder los 100 caracteres.',
      'any.required': 'El nombre es obligatorio.',
    }),

  email: Joi.string()
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

  password: Joi.string()
    .max(255)
    .required()
    .messages({
      'string.base': 'La contraseña debe ser texto.',
      'string.empty': 'La contraseña es obligatoria.',
      'string.max': 'La contraseña no debe exceder los 255 caracteres.',
      'any.required': 'La contraseña es obligatoria.',
    }),

  rol: Joi.string()
    .max(20)
    .required()
    .messages({
      'string.base': 'El rol debe ser texto.',
      'string.empty': 'El rol es obligatorio.',
      'string.max': 'El rol no debe exceder los 20 caracteres.',
      'any.required': 'El rol es obligatorio.',
    }),

  activo: Joi.boolean()
    .required()
    .messages({
      'boolean.base': 'El estado activo debe ser un valor booleano.',
      'any.required': 'El estado activo es obligatorio.',
    }),

  estado_auditoria: Joi.string()
    .length(1)
    .required()
    .messages({
      'string.base': 'El estado de auditoría debe ser texto.',
      'string.length': 'El estado de auditoría debe tener 1 carácter.',
      'any.required': 'El estado de auditoría es obligatorio.',
    }),
});

export const usuarioEditarSchema = Joi.object({
  nombre: Joi.string()
    .max(100)
    .required()
    .messages({
      'string.base': 'El nombre debe ser texto.',
      'string.empty': 'El nombre es obligatorio.',
      'string.max': 'El nombre no debe exceder los 100 caracteres.',
      'any.required': 'El nombre es obligatorio.',
    }),

  email: Joi.string()
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

  password: Joi.string()
    .max(255)
    .required()
    .messages({
      'string.base': 'La contraseña debe ser texto.',
      'string.empty': 'La contraseña es obligatoria.',
      'string.max': 'La contraseña no debe exceder los 255 caracteres.',
      'any.required': 'La contraseña es obligatoria.',
    }),

  rol: Joi.string()
    .max(20)
    .required()
    .messages({
      'string.base': 'El rol debe ser texto.',
      'string.empty': 'El rol es obligatorio.',
      'string.max': 'El rol no debe exceder los 20 caracteres.',
      'any.required': 'El rol es obligatorio.',
    }),

  activo: Joi.boolean()
    .required()
    .messages({
      'boolean.base': 'El estado activo debe ser un valor booleano.',
      'any.required': 'El estado activo es obligatorio.',
    }),

  estado_auditoria: Joi.string()
    .length(1)
    .required()
    .messages({
      'string.base': 'El estado de auditoría debe ser texto.',
      'string.length': 'El estado de auditoría debe tener 1 carácter.',
      'any.required': 'El estado de auditoría es obligatorio.',
    }),
});
