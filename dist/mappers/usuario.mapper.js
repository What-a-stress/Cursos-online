"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaUsuario = exports.fromPrismaUsuario = void 0;
//SOLO ESTOY USANDO ESTE MAPPER PARA LISTAR USUARIOS
const fromPrismaUsuario = (usuario) => {
    return {
        Id: usuario.id,
        Nombre: usuario.nombre,
        Email: usuario.email,
        RolDelUsuario: usuario.rol,
        fechaDeRegistro: usuario.fecha_registro ? new Date(usuario.fecha_registro) : null,
        EstaActivo: usuario.activo, //esto va a indicar si el usuario está activo para usar la plataforma y solo devuelve true o false
        ExisteEnBD: usuario.estado_auditoria, //como la eliminación lo hice de manera lógica aquí se indica si el usuario es 1 o 0 
        fechaDeCreacion: usuario.fecha_creacion ? new Date(usuario.fecha_creacion) : null,
        fechaDeActualizacion: usuario.fecha_actualizacion ? new Date(usuario.fecha_actualizacion) : null,
    };
};
exports.fromPrismaUsuario = fromPrismaUsuario;
const toPrismaUsuario = (usuario) => {
    return {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password,
        rol: usuario.rol,
        activo: usuario.activo,
        estado_auditoria: usuario.estado_auditoria,
    };
};
exports.toPrismaUsuario = toPrismaUsuario;
