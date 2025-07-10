import { usuarios } from "@prisma/client";
import { Usuario } from "../models/usuario";

export const fromPrismaUsuario = (usuario: usuarios) => {
  return {
    id: usuario.id,
    nombre: usuario.nombre,
    email: usuario.email,
    rol: usuario.rol,
    fechaRegistro: usuario.fecha_registro ? new Date(usuario.fecha_registro) : null,
    activo: usuario.activo,
    estadoAuditoria: usuario.estado_auditoria,
    fechaCreacion: usuario.fecha_creacion ? new Date(usuario.fecha_creacion) : null,
    fechaActualizacion: usuario.fecha_actualizacion ? new Date(usuario.fecha_actualizacion) : null,
    // No se va a incluir el campo password por seguridad
  };
};

//SOLO ESTOY USANDO ESTE MAPPER PARA LISTAR USUARIOS

export const toPrismaUsuario = (usuario: Usuario) => {
  return {
    nombre: usuario.nombre,
    email: usuario.email,
    password: usuario.password, // solo se usa al registrar
    rol: usuario.rol,
    activo: usuario.activo,
    estado_auditoria: usuario.estado_auditoria,
  };
};
